#!/usr/bin/env python3
"""
AISG 数据自动更新 — 统一包装脚本。

定期运行 YouTube 视频、MDDI 演讲、国会辩论三个发现管线，
汇总结果并发送 Gmail 邮件通知。

用法:
  python auto_update.py                  # 运行所有管线并发邮件
  python auto_update.py --dry-run        # 运行但不发邮件
  python auto_update.py --only videos    # 只运行视频管线
  python auto_update.py --only voices    # 只运行演讲管线
  python auto_update.py --only hansard   # 只运行辩论管线
  python auto_update.py --verbose        # 详细输出
"""

import argparse
import json
import logging
import os
import re
import smtplib
import sys
import time
import traceback
from datetime import datetime, timedelta
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from pathlib import Path

# ── 路径设置 ──────────────────────────────────────────────────────────────────
SCRIPT_DIR = Path(__file__).parent.resolve()
PROJECT_ROOT = SCRIPT_DIR.parent
DATA_DIR = SCRIPT_DIR / "data"
LOG_DIR = SCRIPT_DIR / "logs"
STATE_FILE = DATA_DIR / "last_scan_state.json"
LOG_RETENTION_DAYS = 30

# 确保 scripts/ 在 sys.path 中，以便 import 子目录模块
sys.path.insert(0, str(SCRIPT_DIR))

# ── Hansard 配置 ──────────────────────────────────────────────────────────────
SPRS_API = "https://sprs.parl.gov.sg/search/getHansardTopic/"
HANSARD_SCAN_RANGE = 50  # 从最高已知 ID 向上扫描的范围

AI_TITLE_KEYWORDS = [
    r"\bartificial intelligence\b",
    r"\bAI\b",
    r"\bdeepfake",
    r"\bdata centre",
    r"\bmachine learning\b",
    r"\bGPT\b",
    r"\bgenerative\b",
    r"\bLLM\b",
    r"\bsmart nation\b",
    r"\bdigital economy\b",
    r"\bcompute\b",
    r"\brobotic",
    r"\bautonomous\b",
    r"\bcybersecurity\b",
    r"\bdata protect",
]

# ── 日志 ──────────────────────────────────────────────────────────────────────
def setup_logging(verbose: bool = False):
    LOG_DIR.mkdir(parents=True, exist_ok=True)
    log_file = LOG_DIR / f"auto_update_{datetime.now().strftime('%Y-%m-%d')}.log"
    level = logging.DEBUG if verbose else logging.INFO
    logging.basicConfig(
        level=level,
        format="%(asctime)s [%(levelname)s] %(message)s",
        handlers=[
            logging.FileHandler(log_file, encoding="utf-8"),
            logging.StreamHandler(),
        ],
    )
    return logging.getLogger("auto_update")


# ── 状态管理 ──────────────────────────────────────────────────────────────────
def load_state() -> dict:
    if STATE_FILE.exists():
        return json.loads(STATE_FILE.read_text(encoding="utf-8"))
    # 默认初始状态（基于 debates.ts 中的最高 ID）
    return {
        "last_run": None,
        "videos": {"video_ids": []},
        "voices": {"urls": []},
        "hansard": {"max_oral_id": 4087, "max_written_id": 21915},
    }


def save_state(state: dict):
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    state["last_run"] = datetime.now().isoformat()
    STATE_FILE.write_text(
        json.dumps(state, ensure_ascii=False, indent=2), encoding="utf-8"
    )


# ── 管线 1: YouTube 视频 ─────────────────────────────────────────────────────
def run_videos(logger) -> dict:
    import importlib

    mod = importlib.import_module("videos.01_scan_channels")
    candidates = mod.scan_channels(exclude_existing=True, days=14)
    logger.info(f"YouTube 扫描完成: {len(candidates)} 条候选")
    return {
        "count": len(candidates),
        "items": [
            {"date": v["date"], "title": v["title"], "channel": v["channel"]}
            for v in candidates[:10]
        ],
    }


# ── 管线 2: MDDI 演讲 ────────────────────────────────────────────────────────
def run_voices(logger) -> dict:
    import importlib

    mod = importlib.import_module("voices.01_scan_mddi")
    speeches = mod.scan_mddi(exclude_existing=True)
    logger.info(f"MDDI 扫描完成: {len(speeches)} 条演讲")
    return {
        "count": len(speeches),
        "items": [
            {"date": s["date"], "title": s["title"], "speaker": s["speaker"]}
            for s in speeches[:10]
        ],
    }


# ── 管线 3: 国会辩论 (轻量 API 扫描) ─────────────────────────────────────────
def matches_ai_keywords(text: str) -> bool:
    text_lower = text.lower()
    return any(re.search(p, text_lower, re.IGNORECASE) for p in AI_TITLE_KEYWORDS)


def scan_hansard_range(prefix: str, start: int, end: int, logger) -> list[dict]:
    """扫描 SPRS API 指定 ID 范围，返回有效条目"""
    import requests

    results = []
    for i in range(start + 1, end + 1):
        rid = f"{prefix}-{i}"
        try:
            resp = requests.post(
                SPRS_API,
                params={"id": rid},
                headers={"Content-Type": "application/json"},
                json={},
                timeout=10,
            )
            if resp.status_code != 200:
                continue
            rh = resp.json().get("resultHTML")
            if not rh or not rh.get("title"):
                continue
            title = rh["title"]
            date_raw = rh.get("sittingDate", "")
            results.append(
                {"id": rid, "title": title, "date": date_raw, "ai_related": matches_ai_keywords(title)}
            )
            logger.debug(f"  {rid}: {title[:60]}")
            time.sleep(0.3)
        except Exception as e:
            logger.debug(f"  {rid}: error — {e}")
    return results


def run_hansard(state: dict, logger) -> dict:
    max_oral = state["hansard"]["max_oral_id"]
    max_written = state["hansard"]["max_written_id"]

    logger.info(f"Hansard 扫描: oral-answer-{max_oral + 1}..{max_oral + HANSARD_SCAN_RANGE}")
    oral_results = scan_hansard_range("oral-answer", max_oral, max_oral + HANSARD_SCAN_RANGE, logger)

    logger.info(f"Hansard 扫描: written-answer-{max_written + 1}..{max_written + HANSARD_SCAN_RANGE}")
    written_results = scan_hansard_range("written-answer", max_written, max_written + HANSARD_SCAN_RANGE, logger)

    all_results = oral_results + written_results
    ai_results = [r for r in all_results if r["ai_related"]]

    # 更新最高 ID
    new_max_oral = max_oral
    for r in oral_results:
        num = int(r["id"].split("-")[-1])
        new_max_oral = max(new_max_oral, num)
    new_max_written = max_written
    for r in written_results:
        num = int(r["id"].split("-")[-1])
        new_max_written = max(new_max_written, num)

    logger.info(f"Hansard 扫描完成: {len(all_results)} 条新记录, {len(ai_results)} 条 AI 相关")

    return {
        "count": len(ai_results),
        "total_scanned": len(all_results),
        "scan_range": f"oral {max_oral + 1}..{max_oral + HANSARD_SCAN_RANGE}, written {max_written + 1}..{max_written + HANSARD_SCAN_RANGE}",
        "items": [
            {"id": r["id"], "title": r["title"], "date": r["date"]}
            for r in ai_results[:10]
        ],
        "new_max_oral": new_max_oral,
        "new_max_written": new_max_written,
    }


# ── 邮件 ──────────────────────────────────────────────────────────────────────
def compose_email(results: dict, errors: list[str], elapsed: float) -> tuple[str, str]:
    """生成邮件标题和 HTML 正文"""
    date_str = datetime.now().strftime("%Y-%m-%d")
    counts = []
    if "videos" in results:
        counts.append(f"{results['videos']['count']} 新视频")
    if "voices" in results:
        counts.append(f"{results['voices']['count']} 新演讲")
    if "hansard" in results:
        counts.append(f"{results['hansard']['count']} 新辩论")

    subject = f"[AISG 数据更新] {date_str}: {', '.join(counts)}"

    lines = [f"<h2>AISG 数据更新报告 — {date_str}</h2>"]

    # YouTube
    if "videos" in results:
        r = results["videos"]
        lines.append(f"<h3>YouTube 视频: {r['count']} 条新候选</h3>")
        if r["items"]:
            lines.append("<ul>")
            for v in r["items"]:
                lines.append(f"  <li>[{v['date']}] {v['channel']}: {v['title']}</li>")
            lines.append("</ul>")
            lines.append("<p>人工审核: <code>cd scripts && python videos/02_review_and_merge.py</code></p>")
        else:
            lines.append("<p>无新内容</p>")

    # MDDI
    if "voices" in results:
        r = results["voices"]
        lines.append(f"<h3>MDDI 演讲: {r['count']} 条新发现</h3>")
        if r["items"]:
            lines.append("<ul>")
            for s in r["items"]:
                speaker = s["speaker"] or "?"
                lines.append(f"  <li>[{s['date']}] {speaker}: {s['title']}</li>")
            lines.append("</ul>")
        else:
            lines.append("<p>无新内容</p>")

    # Hansard
    if "hansard" in results:
        r = results["hansard"]
        lines.append(f"<h3>国会辩论: {r['count']} 条 AI 相关 (共扫描 {r['total_scanned']} 条)</h3>")
        if r["items"]:
            lines.append("<ul>")
            for d in r["items"]:
                lines.append(f"  <li>[{d['date']}] {d['id']}: {d['title']}</li>")
            lines.append("</ul>")
        else:
            lines.append(f"<p>无新内容 (扫描范围: {r['scan_range']})</p>")

    # 错误
    if errors:
        lines.append("<h3>错误</h3><ul>")
        for e in errors:
            lines.append(f"  <li style='color:red'>{e}</li>")
        lines.append("</ul>")

    # 运行信息
    lines.append(f"<hr><p>运行耗时: {elapsed:.0f}s | 错误: {len(errors)} 个</p>")

    return subject, "\n".join(lines)


def send_email(subject: str, html_body: str, logger):
    """通过 Gmail SMTP 发送邮件"""
    try:
        from auto_update_config import (
            SMTP_HOST,
            SMTP_PORT,
            SMTP_USER,
            SMTP_PASSWORD,
            EMAIL_TO,
        )
    except ImportError:
        logger.error("未找到 auto_update_config.py，无法发送邮件")
        logger.error("请复制 auto_update_config.example.py 为 auto_update_config.py 并填入凭据")
        return False

    msg = MIMEMultipart("alternative")
    msg["Subject"] = subject
    msg["From"] = SMTP_USER
    msg["To"] = EMAIL_TO
    msg.attach(MIMEText(html_body, "html", "utf-8"))

    try:
        with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
            server.starttls()
            server.login(SMTP_USER, SMTP_PASSWORD)
            server.sendmail(SMTP_USER, EMAIL_TO, msg.as_string())
        logger.info(f"邮件已发送至 {EMAIL_TO}")
        return True
    except Exception as e:
        logger.error(f"邮件发送失败: {e}")
        return False


# ── 日志清理 ──────────────────────────────────────────────────────────────────
def cleanup_old_logs(logger):
    cutoff = datetime.now() - timedelta(days=LOG_RETENTION_DAYS)
    count = 0
    for f in LOG_DIR.glob("auto_update_*.log"):
        try:
            date_str = f.stem.replace("auto_update_", "")
            file_date = datetime.strptime(date_str, "%Y-%m-%d")
            if file_date < cutoff:
                f.unlink()
                count += 1
        except (ValueError, OSError):
            pass
    if count:
        logger.info(f"清理了 {count} 个过期日志文件")


# ── 主流程 ────────────────────────────────────────────────────────────────────
def main():
    parser = argparse.ArgumentParser(description="AISG 数据自动更新")
    parser.add_argument("--dry-run", action="store_true", help="运行但不发邮件")
    parser.add_argument("--only", choices=["videos", "voices", "hansard"], help="只运行指定管线")
    parser.add_argument("--verbose", action="store_true", help="详细输出")
    args = parser.parse_args()

    # 切换工作目录到脚本所在位置
    os.chdir(SCRIPT_DIR)

    logger = setup_logging(args.verbose)
    logger.info("=" * 50)
    logger.info("AISG 数据自动更新开始")
    logger.info("=" * 50)

    state = load_state()
    results = {}
    errors = []
    start_time = time.time()
    pipelines = [args.only] if args.only else ["videos", "voices", "hansard"]

    # ── 运行各管线 ──
    if "videos" in pipelines:
        try:
            results["videos"] = run_videos(logger)
        except Exception as e:
            logger.error(f"YouTube 管线失败: {e}")
            logger.debug(traceback.format_exc())
            errors.append(f"YouTube: {e}")
            results["videos"] = {"count": 0, "items": [], "error": str(e)}

    if "voices" in pipelines:
        try:
            results["voices"] = run_voices(logger)
        except Exception as e:
            logger.error(f"MDDI 管线失败: {e}")
            logger.debug(traceback.format_exc())
            errors.append(f"MDDI: {e}")
            results["voices"] = {"count": 0, "items": [], "error": str(e)}

    if "hansard" in pipelines:
        try:
            hansard_result = run_hansard(state, logger)
            results["hansard"] = hansard_result
            # 更新状态中的最高 ID
            state["hansard"]["max_oral_id"] = hansard_result["new_max_oral"]
            state["hansard"]["max_written_id"] = hansard_result["new_max_written"]
        except Exception as e:
            logger.error(f"Hansard 管线失败: {e}")
            logger.debug(traceback.format_exc())
            errors.append(f"Hansard: {e}")
            results["hansard"] = {"count": 0, "total_scanned": 0, "scan_range": "N/A", "items": []}

    elapsed = time.time() - start_time

    # ── 判断是否有新内容 ──
    total_new = sum(r.get("count", 0) for r in results.values())
    logger.info(f"扫描完成: 共 {total_new} 条新内容, 耗时 {elapsed:.0f}s")

    # ── 发邮件 ──
    try:
        from auto_update_config import SEND_IF_NO_NEW
    except ImportError:
        SEND_IF_NO_NEW = False

    should_send = total_new > 0 or SEND_IF_NO_NEW or errors
    if args.dry_run:
        subject, body = compose_email(results, errors, elapsed)
        logger.info(f"[DRY RUN] 邮件标题: {subject}")
        logger.info("[DRY RUN] 跳过发送")
    elif should_send:
        subject, body = compose_email(results, errors, elapsed)
        send_email(subject, body, logger)
    else:
        logger.info("无新内容，跳过邮件")

    # ── 保存状态 ──
    save_state(state)

    # ── 清理日志 ──
    cleanup_old_logs(logger)

    logger.info("自动更新完成")


if __name__ == "__main__":
    main()
