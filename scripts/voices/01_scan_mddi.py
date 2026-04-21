#!/usr/bin/env python3
"""
扫描 MDDI 新闻室，采集 AI 相关演讲稿。

工作原理:
  1. 从 MDDI sitemap.xml 获取所有新闻室 URL
  2. 用 URL slug 中的关键词初筛演讲稿
  3. 逐个抓取页面提取标题、日期、演讲者
  4. 输出 JSON 供审核和合并到 voices.ts

注意: MDDI 网站的分类过滤是客户端 JS 渲染的，服务端不支持。
因此使用 sitemap 获取全部 URL，比翻页抓取更可靠。

依赖: requests, beautifulsoup4

用法:
  python 01_scan_mddi.py                       # 扫描全部
  python 01_scan_mddi.py --year 2026           # 只保留 2026 年
  python 01_scan_mddi.py --exclude-existing    # 排除已有
  python 01_scan_mddi.py --skip-fetch          # 只用 URL slug 过滤，不抓取页面详情
"""

import argparse
import json
import re
import sys
import time
from datetime import datetime
from pathlib import Path
from xml.etree import ElementTree

import requests
from bs4 import BeautifulSoup

# ── 配置 ──────────────────────────────────────────────────────────────────────
SITEMAP_URL = "https://www.mddi.gov.sg/sitemap.xml"
EXISTING_VOICES_TS = Path(__file__).parent.parent.parent / "src" / "data" / "voices.ts"
DATA_DIR = Path(__file__).parent / "data"
OUTPUT_FILE = DATA_DIR / "mddi_speeches.json"
REQUEST_DELAY = 0.5  # 秒

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120",
}

# ── URL slug 中的演讲关键词 ───────────────────────────────────────────────────
SPEECH_KEYWORDS = ["speech", "address", "remarks", "keynote", "transcript"]

# ── URL slug 中的 AI 关键词 ──────────────────────────────────────────────────
AI_URL_KEYWORDS = [
    r"\bai\b",
    r"artificial-intelligence",
    r"data-centre",
    r"digital-infrastructure",
    r"smart-nation",
    r"digital-economy",
    r"digital-leader",
    r"ai-festival",
    r"ai-summit",
    r"ai-world",
    r"superai",
    r"agentic",
    r"compute",
    r"quantinuum",
    r"generative-ai",
    r"national-ai",
    r"airtrunk",
    r"google-cloud",
    r"microsoft.*ai",
    r"ai-quickstart",
    r"ai-research",
    r"ai-health",
    r"ai-security",
    r"ai-centre",
    r"ai-govern",
    r"ai-student",
    r"deepfake",
]

# ── 演讲者提取 ────────────────────────────────────────────────────────────────
SPEAKER_MAP = {
    "josephine teo": ("Josephine Teo", "数码发展及新闻部长"),
    "josephine-teo": ("Josephine Teo", "数码发展及新闻部长"),
    "tan kiat how": ("Tan Kiat How", "MDDI 高级政务部长"),
    "tan-kiat-how": ("Tan Kiat How", "MDDI 高级政务部长"),
    "rahayu mahzam": ("Rahayu Mahzam", "MDDI 政务次长"),
    "rahayu-mahzam": ("Rahayu Mahzam", "MDDI 政务次长"),
    "janil puthucheary": ("Janil Puthucheary", "MDDI 前高级政务部长"),
    "janil-puthucheary": ("Janil Puthucheary", "MDDI 前高级政务部长"),
    "jasmin lau": ("Jasmin Lau", "MDDI 政务次长"),
    "jasmin-lau": ("Jasmin Lau", "MDDI 政务次长"),
}


def extract_speaker(text: str) -> tuple[str, str]:
    """从标题或 URL 中提取演讲者和中文职务"""
    text_lower = text.lower()
    for key, (name, title) in SPEAKER_MAP.items():
        if key in text_lower:
            return name, title
    return "", ""


def extract_event(title: str) -> str:
    """从标题中提取活动/场合名称"""
    patterns = [
        r"(?:at|for)\s+(?:the\s+)?(.+?)(?:\s*$|\s*\|)",
        r"(?:keynote|opening|closing)\s+(?:address|remarks|speech)\s+.*?at\s+(?:the\s+)?(.+?)(?:\s*$)",
    ]
    for p in patterns:
        m = re.search(p, title, re.IGNORECASE)
        if m:
            event = m.group(1).strip()
            event = re.sub(r"\s*\d{4}\s*$", "", event).strip()
            if len(event) > 5:
                return event
    return ""


def get_existing_urls() -> set[str]:
    """从 voices.ts 中提取已有的演讲稿 URL"""
    urls = set()
    if not EXISTING_VOICES_TS.exists():
        return urls
    content = EXISTING_VOICES_TS.read_text()
    for m in re.finditer(r"url:\s*'(https?://[^']+)'", content):
        urls.add(m.group(1))
    return urls


def fetch_sitemap_urls() -> list[str]:
    """从 sitemap.xml 获取所有新闻室 URL"""
    print("获取 sitemap.xml...")
    resp = requests.get(SITEMAP_URL, headers=HEADERS, timeout=15)
    resp.raise_for_status()
    root = ElementTree.fromstring(resp.text)
    ns = {"ns": "http://www.sitemaps.org/schemas/sitemap/0.9"}

    urls = []
    for url_el in root.findall(".//ns:url/ns:loc", ns):
        url = url_el.text
        if url and "/newsroom/" in url and url.rstrip("/") != "https://www.mddi.gov.sg/newsroom":
            urls.append(url)

    print(f"  共 {len(urls)} 条新闻室 URL")
    return urls


def filter_speech_urls(urls: list[str]) -> list[str]:
    """过滤出演讲稿 URL"""
    speech_urls = []
    for u in urls:
        slug = u.lower().split("/newsroom/")[-1]
        if any(kw in slug for kw in SPEECH_KEYWORDS):
            speech_urls.append(u)
    print(f"  其中 {len(speech_urls)} 条演讲稿")
    return speech_urls


def filter_ai_urls(urls: list[str]) -> list[str]:
    """过滤出 AI 相关 URL"""
    ai_urls = []
    for u in urls:
        slug = u.lower().split("/newsroom/")[-1]
        if any(re.search(p, slug) for p in AI_URL_KEYWORDS):
            ai_urls.append(u)
    print(f"  其中 {len(ai_urls)} 条 AI 相关")
    return ai_urls


def fetch_speech_detail(url: str) -> dict | None:
    """抓取演讲稿页面，提取标题和日期"""
    try:
        resp = requests.get(url, headers=HEADERS, timeout=15)
        resp.raise_for_status()
    except requests.RequestException:
        return None

    soup = BeautifulSoup(resp.text, "html.parser")

    # 提取标题（通常是 h1）
    title = ""
    h1 = soup.find("h1")
    if h1:
        title = h1.get_text(strip=True)

    if not title:
        # 回退到 og:title
        og = soup.find("meta", property="og:title")
        if og:
            title = og.get("content", "")

    # 提取日期
    date_str = ""
    # 尝试找日期元素
    for el in soup.find_all(["time", "span", "p", "div"]):
        text = el.get_text(strip=True)
        dm = re.match(r"^(\d{1,2}\s+\w+\s+\d{4})$", text)
        if dm:
            try:
                dt = datetime.strptime(dm.group(1), "%d %B %Y")
                date_str = dt.strftime("%Y-%m-%d")
                break
            except ValueError:
                continue

    if not date_str:
        # 从页面文本中搜索日期
        page_text = soup.get_text()
        dm = re.search(r"(\d{1,2}\s+(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{4})", page_text)
        if dm:
            try:
                dt = datetime.strptime(dm.group(1), "%d %B %Y")
                date_str = dt.strftime("%Y-%m-%d")
            except ValueError:
                pass

    return {"title": title, "date": date_str}


def scan_mddi(
    year_filter: int | None = None,
    exclude_existing: bool = False,
    skip_fetch: bool = False,
) -> list[dict]:
    """扫描 MDDI，返回 AI 相关演讲稿"""
    existing_urls = get_existing_urls() if exclude_existing else set()

    # 1. 获取 sitemap
    all_urls = fetch_sitemap_urls()

    # 2. 过滤演讲稿
    speech_urls = filter_speech_urls(all_urls)

    # 3. 过滤 AI 相关
    ai_urls = filter_ai_urls(speech_urls)

    # 4. 排除已有
    if existing_urls:
        ai_urls = [u for u in ai_urls if u not in existing_urls]
        print(f"  排除已有后剩余 {len(ai_urls)} 条")

    # 5. 逐个抓取详情
    speeches = []
    for i, url in enumerate(ai_urls):
        speaker, speaker_title = extract_speaker(url)

        if skip_fetch:
            # 从 URL slug 推断标题
            slug = url.split("/newsroom/")[-1].rstrip("/")
            title = slug.replace("-", " ").title()
            date_str = ""
            event = ""
        else:
            print(f"  [{i+1}/{len(ai_urls)}] 抓取 {url.split('/newsroom/')[-1][:60]}...")
            detail = fetch_speech_detail(url)
            if not detail or not detail["title"]:
                continue
            title = detail["title"]
            date_str = detail["date"]
            event = extract_event(title)
            if not speaker:
                speaker, speaker_title = extract_speaker(title)
            time.sleep(REQUEST_DELAY)

        speeches.append({
            "title": title,
            "speaker": speaker,
            "speakerTitle": speaker_title,
            "date": date_str,
            "url": url,
            "event": event,
        })

    # 年份过滤
    if year_filter:
        speeches = [s for s in speeches if s["date"].startswith(str(year_filter))]

    # 按日期倒序
    speeches.sort(key=lambda x: x["date"] or "0000", reverse=True)

    return speeches


def main():
    parser = argparse.ArgumentParser(description="扫描 MDDI 新闻室 AI 相关演讲稿")
    parser.add_argument("--year", type=int, help="只保留指定年份的结果")
    parser.add_argument("--exclude-existing", action="store_true", help="排除 voices.ts 中已有的")
    parser.add_argument("--skip-fetch", action="store_true", help="跳过页面抓取，只用 URL 过滤")
    args = parser.parse_args()

    speeches = scan_mddi(
        year_filter=args.year,
        exclude_existing=args.exclude_existing,
        skip_fetch=args.skip_fetch,
    )

    DATA_DIR.mkdir(parents=True, exist_ok=True)
    OUTPUT_FILE.write_text(
        json.dumps(speeches, ensure_ascii=False, indent=2), encoding="utf-8"
    )

    print(f"\n共发现 {len(speeches)} 条 AI 相关演讲稿")
    print(f"已保存到 {OUTPUT_FILE}")

    if speeches:
        print("\n前 10 条:")
        for s in speeches[:10]:
            print(f"  [{s['date']}] {s['speaker'] or '?'}: {s['title'][:80]}")


if __name__ == "__main__":
    main()
