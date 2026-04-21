# AISG 数据更新脚本

## 概览

本目录包含 AISG 网站的数据更新脚本，分为三条管线和一个统一调度脚本。

```
scripts/
  auto_update.py                  # 统一调度脚本（crontab 调用此文件）
  auto_update_config.example.py   # 配置模板（复制为 auto_update_config.py）
  auto_update_config.py           # 真实配置（不入 git）
  videos/
    01_scan_channels.py           # YouTube 频道 RSS 扫描
    02_review_and_merge.py        # 人工审核候选视频（交互式）
  voices/
    01_scan_mddi.py               # MDDI 新闻室演讲稿扫描
  hansard/
    01_discover_debates.py        # PAIR Search 发现辩论 ID（需 Playwright）
    02_fetch_debates.py           # SPRS API 获取辩论全文
    03_enrich_debates.py          # AI 生成中文摘要（需 OpenAI API key）
    04_analyze_patterns.py        # AI 分析政策模式（需 OpenAI API key）
    05_generate_ts.py             # 生成 debates.ts
  data/                           # 各管线的输出数据
  logs/                           # 自动更新日志（不入 git）
```

---

## 三条数据管线

### 1. YouTube 视频发现 (`videos/`)

扫描 7 个 YouTube 频道（CNA、ST、govsg、Smart Nation、AI Singapore、WEF、Bloomberg），通过 RSS feed 获取最新视频，用 AI 关键词过滤。

| 步骤 | 脚本 | 自动化 | 依赖 |
|------|------|--------|------|
| 扫描频道 | `01_scan_channels.py` | 可自动 | requests, feedparser |
| 人工审核 | `02_review_and_merge.py` | 需人工 | — |

```bash
# 手动运行
cd scripts
python videos/01_scan_channels.py --exclude-existing --days 14
python videos/02_review_and_merge.py  # 交互式审核
```

输出: `data/candidates.json` -> 人工审核后合并到 `src/data/videos.ts`

### 2. MDDI 演讲稿 (`voices/`)

扫描新加坡数码发展及新闻部（MDDI）网站 sitemap，通过 URL slug 关键词过滤出 AI 相关演讲稿。

| 步骤 | 脚本 | 自动化 | 依赖 |
|------|------|--------|------|
| 扫描 MDDI | `01_scan_mddi.py` | 可自动 | requests, beautifulsoup4 |

```bash
cd scripts
python voices/01_scan_mddi.py --exclude-existing
python voices/01_scan_mddi.py --year 2026 --skip-fetch  # 快速模式
```

输出: `data/mddi_speeches.json` -> 人工合并到 `src/data/voices.ts`

### 3. 国会辩论 (`hansard/`)

从新加坡国会辩论记录（Hansard）中发现和采集 AI 相关辩论。

| 步骤 | 脚本 | 自动化 | 依赖 |
|------|------|--------|------|
| 发现 ID | `01_discover_debates.py` | 半自动 | playwright |
| 获取全文 | `02_fetch_debates.py` | 可自动 | requests, beautifulsoup4 |
| AI 摘要 | `03_enrich_debates.py` | 需 API key | openai |
| AI 分析 | `04_analyze_patterns.py` | 需 API key | openai |
| 生成 TS | `05_generate_ts.py` | 可自动 | — |

自动更新脚本使用**轻量 API 扫描**替代 Step 1（避免 Playwright 依赖），从已知最高 ID 向上递增扫描 SPRS API。

```bash
# 手动完整流程
cd scripts/hansard
python 01_discover_debates.py      # 需要 Playwright
python 02_fetch_debates.py
# Step 3-4 可用 Claude 替代 OpenAI
python 05_generate_ts.py
```

---

## 统一调度脚本 (`auto_update.py`)

### 功能

- 依次运行三条管线的**发现/扫描**步骤
- 汇总结果，有新内容时发送 Gmail 邮件通知
- 错误隔离：一条管线失败不影响其他管线
- 状态持久化：记录上次扫描的最高 Hansard ID，避免重复扫描
- 日志管理：自动清理 30 天前的日志

### 用法

```bash
cd scripts

# 完整运行并发邮件
python auto_update.py

# 干跑模式（不发邮件）
python auto_update.py --dry-run

# 只运行某条管线
python auto_update.py --only videos
python auto_update.py --only voices
python auto_update.py --only hansard

# 详细输出
python auto_update.py --verbose --dry-run
```

### 邮件内容示例

```
Subject: [AISG 数据更新] 2026-04-07: 3 新视频, 2 新演讲, 0 新辩论

YouTube 视频: 3 条新候选
  - [2026-04-05] CNA: Singapore's AI push...
  人工审核: cd scripts && python videos/02_review_and_merge.py

MDDI 演讲: 2 条新发现
  - [2026-04-01] Josephine Teo: Speech at...

国会辩论: 无新内容 (扫描范围: oral 4088..4137, written 21916..21965)

运行耗时: 45s | 错误: 0 个
```

---

## 新设备安装指南

### 1. 安装 Python 依赖

```bash
# 使用系统 Python（推荐 3.10+）
pip3 install requests feedparser beautifulsoup4

# 如果需要运行 hansard/01_discover_debates.py（非必须）
pip3 install playwright
python3 -m playwright install chromium
```

### 2. 配置邮件

```bash
cd /path/to/aisg/scripts

# 复制配置模板
cp auto_update_config.example.py auto_update_config.py

# 编辑配置，填入 Gmail App Password
# Gmail App Password 获取方式:
#   1. 登录 Google 账号
#   2. 安全 → 两步验证（需先开启）
#   3. App passwords → 生成一个 16 位密码
vim auto_update_config.py
```

### 3. 测试

```bash
cd /path/to/aisg/scripts

# 先干跑确认脚本正常
python3 auto_update.py --dry-run

# 发一封测试邮件
python3 auto_update.py --only videos
```

### 4. 设置 crontab

```bash
# 查看当前 Python 路径
which python3
# 例如: /opt/homebrew/anaconda3/bin/python3 或 /usr/local/bin/python3

# 编辑 crontab
crontab -e

# 添加以下内容（替换 Python 路径和项目路径）:
# AISG 数据更新 - 每周一 8:00
0 8 * * 1 /path/to/python3 /path/to/aisg/scripts/auto_update.py >> /path/to/aisg/scripts/logs/cron.log 2>&1
```

**示例（macOS + Anaconda）:**

```
0 8 * * 1 /opt/homebrew/anaconda3/bin/python3 /Users/lucawu/Library/CloudStorage/Dropbox/Github/Luca/project/aisg/scripts/auto_update.py >> /Users/lucawu/Library/CloudStorage/Dropbox/Github/Luca/project/aisg/scripts/logs/cron.log 2>&1
```

### 5. 验证 crontab

```bash
# 确认 cron 条目已保存
crontab -l

# 查看日志（下次运行后）
tail -f /path/to/aisg/scripts/logs/cron.log
cat /path/to/aisg/scripts/logs/auto_update_$(date +%Y-%m-%d).log
```

### macOS 注意事项

- **PATH**: crontab 中必须使用 Python 的**完整路径**（cron 的 PATH 只有 `/usr/bin:/bin`）
- **磁盘访问**: macOS Ventura+ 可能需要在 系统设置 > 隐私与安全 > 完全磁盘访问 中添加 `/usr/sbin/cron`
- **睡眠**: Mac 处于睡眠状态时 cron 不会触发，下次醒来后的下一个周期会执行（对数据扫描来说可接受）

### Linux 服务器注意事项

```bash
# 确保 cron 服务运行
sudo systemctl status cron

# 如果没有 cron
sudo apt install cron
sudo systemctl enable cron
```

---

## 文件说明

| 文件 | 入 git | 说明 |
|------|--------|------|
| `auto_update.py` | 是 | 统一调度脚本 |
| `auto_update_config.example.py` | 是 | 配置模板 |
| `auto_update_config.py` | 否 | 真实配置（含 SMTP 密码） |
| `data/last_scan_state.json` | 否 | 扫描状态（自动生成） |
| `data/candidates.json` | 否 | YouTube 候选视频 |
| `data/mddi_speeches.json` | 否 | MDDI 演讲稿 |
| `logs/` | 否 | 运行日志（30 天自动清理） |
