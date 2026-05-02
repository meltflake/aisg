# YouTube 视频采集脚本

从 YouTube 频道定期采集新加坡 AI 相关视频。

## 依赖安装

```bash
pip install requests feedparser
```

## 使用流程

### 1. 扫描频道发现新视频

```bash
# 扫描所有频道
python 01_scan_channels.py

# 只看最近 7 天
python 01_scan_channels.py --days 7

# 只扫描某个频道
python 01_scan_channels.py --channel CNA

# 排除 videos.ts 中已有的视频
python 01_scan_channels.py --exclude-existing

# 组合使用
python 01_scan_channels.py --days 30 --exclude-existing
```

输出: `data/candidates.json`

### 2. 审核并生成代码

```bash
# 交互式逐条审核
python 02_review_and_merge.py

# 全部保留（需后续手动补充信息）
python 02_review_and_merge.py --auto
```

输出:
- `data/approved.json` — 审核通过的视频
- `data/new_entries.ts.txt` — TypeScript 代码片段，粘贴到 `src/data/videos.ts`

### 3. 合并到项目

将 `data/new_entries.ts.txt` 中的代码粘贴到 `src/data/videos.ts` 的 `videos` 数组中，然后:

```bash
npm run fix:prettier
npm run check
```

### 4. 抓取字幕、翻译并生成 transcript 数据

详情页 `/videos/[id]/` 会读取 `src/data/video-transcripts.ts`。该文件由脚本生成，原始 VTT / JSON 缓存在 `scripts/videos/data/transcripts/`（已 gitignore）。

```bash
# 抓取全部视频字幕，并用已有翻译缓存重建 src/data/video-transcripts.ts
npm run fetch:video-transcripts

# 只抓前 5 条，方便测试
npm run fetch:video-transcripts -- --limit=5

# 只抓指定视频
npm run fetch:video-transcripts -- --ids=v053,v054

# 强制重新抓取已有缓存
npm run fetch:video-transcripts -- --force

# 只根据缓存重建 src/data/video-transcripts.ts，不重新访问 YouTube
npm run fetch:video-transcripts -- --emit-only
```

抓到的 YouTube 字幕通常是英文。中文站点不能直接渲染英文 transcript，必须再跑翻译：

```bash
# 需要 OPENAI_API_KEY；默认模型可用 OPENAI_TRANSLATION_MODEL 覆盖
npm run translate:video-transcripts

# 测试前几条或指定条目
npm run translate:video-transcripts -- --limit=3
npm run translate:video-transcripts -- --ids=v053,v054

# 强制重翻已有缓存
npm run translate:video-transcripts -- --force

# 检查所有有英文字幕的记录都有中文默认 transcript
npm run check:video-transcripts
```

脚本依赖本机 `yt-dlp`，优先抓 `en` 字幕，再尝试 `zh-Hans` / `zh-Hant` / `zh`。不是每条 YouTube 视频都有可抓字幕；没有字幕的记录会保留在缓存 JSON，但不会写入页面数据。

输出数据遵守项目 i18n 约定：`paragraphs` 是默认中文 transcript，`paragraphsEn` 是英文 transcript。新增语言时继续按 `paragraphsJa`、`paragraphsKo` 这类兄弟字段扩展。

## 监控的频道

| 频道 | 类型 | 说明 |
|------|------|------|
| CNA | 本地媒体 | AI 政策新闻、部长采访 |
| The Straits Times | 本地媒体 | 深度采访、专题报道 |
| govsg | 政府官方 | 国会辩论、官方发布 |
| IMDA Singapore | 政府机构 | AI 治理、行业活动 |
| Smart Nation Singapore | 政府机构 | Smart Nation 相关 |
| AI Singapore | 研究机构 | AISG 官方活动 |
| MCI Singapore | 政府机构 | 通讯及新闻部 |
| World Economic Forum | 国际组织 | 新加坡相关发言（二次过滤） |
| Bloomberg Television | 国际媒体 | 新加坡相关报道（二次过滤） |

### 添加新频道

编辑 `01_scan_channels.py` 中的 `CHANNELS` 字典，添加频道 ID。

获取频道 ID: 访问频道页面 → 查看页面源代码 → 搜索 `channelId`。

## 定期更新建议

每周运行一次:
```bash
python 01_scan_channels.py --days 7 --exclude-existing
```

RSS feed 每频道最多返回 15 条最新视频，适合周更频率。
