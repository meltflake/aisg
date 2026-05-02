# Hansard AI 数据采集与分析流程

本目录包含从新加坡议会官方数据源采集、处理、分析 AI 相关辩论数据的完整脚本链。

## 数据来源

| 来源 | 用途 | URL |
|---|---|---|
| **SPRS Hansard** | 官方议会辩论逐字稿（JSON API） | https://sprs.parl.gov.sg/search/ |
| **PAIR Search** | AI 增强语义搜索，用于发现相关辩论 | https://search.pair.gov.sg/ |

## 数据流水线

```
PAIR Search（语义发现）
        ↓
01_discover_debates.py   → discovered_report_ids.json
        ↓
SPRS Hansard API（批量获取）
        ↓
02_fetch_debates.py      → all_ai_debates.json（~3.8MB，132条）
        ↓
OpenAI GPT-4.1-mini（中文摘要 + 观点提炼）
        ↓
03_enrich_debates.py     → enriched_debates.json（~4MB）
                         → enriched_cache.json（LLM结果缓存）
        ↓
04_analyze_patterns.py   → debate_analysis.json（规律分析）
        ↓
05_generate_ts.py        → src/data/debates.ts（前端数据文件）
        ↓
fetch-debate-transcripts.ts
translate-debate-transcripts.ts
check-debate-transcript-i18n.ts
                         → src/data/debate-transcripts.ts（详情页完整原文 + 译文）
```

## 脚本说明

### `01_discover_debates.py` — 发现阶段

使用 Playwright 驱动浏览器访问 PAIR Search，以多个 AI 相关关键词（`artificial intelligence`、`AI governance`、`machine learning` 等）进行语义搜索，从搜索结果页面提取所有 SPRS `report_id`。

**输出**：`data/discovered_report_ids.json`（132 个 report_id，含类型和标题）

**依赖**：
```bash
pip install playwright
playwright install chromium
```

### `02_fetch_debates.py` — 获取阶段

调用 SPRS 官方 JSON API（`/search/getHansardTopic`），批量获取每条辩论的完整内容，包括逐字稿、发言议员列表、日期、届次等。

**SPRS API 端点**：
```
POST https://sprs.parl.gov.sg/search/getHansardTopic/?id=<report_id>
Content-Type: application/json
Body: {}
```

**输出**：`data/all_ai_debates.json`（完整原始数据，~3.8MB）

### `03_enrich_debates.py` — 提炼阶段

调用 OpenAI GPT-4.1-mini，对每条辩论生成结构化的中文分析，包括：
- 中文标题（20字以内）
- 中文摘要（100-150字）
- 核心观点（3条）
- 政府立场 vs 质询立场
- 争议度评分（1-5级）
- 政策信号
- 值得引用的英文原句

**缓存机制**：已处理的结果保存到 `enriched_cache.json`，重新运行时自动跳过已处理条目。

**输出**：`data/enriched_cache.json`（LLM 结果缓存）

**依赖**：
```bash
pip install openai
export OPENAI_API_KEY=your_key
```

### `04_analyze_patterns.py` — 分析阶段

对全量数据进行两类分析：

1. **统计分析**（Python 计算）：按年份/类型/议题/议员的分布统计，高争议辩论列表
2. **LLM 规律分析**（GPT-4.1-mini）：政策演变脉络、反复争议焦点、议员档案、核心洞察、政策信号、政策张力

**输出**：`data/debate_analysis.json`（16KB，结构化分析结果）

### `05_generate_ts.py` — 生成阶段

将 `enriched_debates.json` 和 `debate_analysis.json` 合并，生成前端可直接使用的 TypeScript 数据文件。

处理的特殊情况：
- 转义模板字符串中的反引号、`${` 等特殊字符
- 转义议员姓名中的撇号（如 O'Brien）
- 截断过长的全文内容（保留前 600 字符）

**输出**：`../../src/data/debates.ts`（~234KB）

### `fetch-debate-transcripts.ts` — 详情页全文抓取

从 `src/data/debates.ts` 读取当前 150 条辩论，调用 SPRS API 抓取完整 Hansard 原文，生成 `src/data/debate-transcripts.ts`。

```bash
npm run fetch:debate-transcripts
npm run fetch:debate-transcripts -- --ids=written-answer-21161
npm run fetch:debate-transcripts -- --force
npm run fetch:debate-transcripts -- --emit-only
```

注意：少数站内 id 是便于 SEO 的自定义 id（如 `cos-moh-2026`），不是 SPRS report id。脚本会优先从 `sourceUrl` 的 `reportid=` 解析真实 report id，再回退到 `debate.id`。

### `translate-debate-transcripts.ts` — 详情页全文翻译

读取 `scripts/hansard/data/transcripts/` 中的英文原文缓存，用 OpenAI 翻译为默认中文，缓存到 `scripts/hansard/data/translations/`，再重建 `src/data/debate-transcripts.ts`。

```bash
export OPENAI_API_KEY=your_key
npm run translate:debate-transcripts
HANSARD_TRANSLATION_CONCURRENCY=2 npm run translate:debate-transcripts
HANSARD_TRANSLATION_BATCH_CHARS=12000 npm run translate:debate-transcripts
```

默认并发为 3；遇到 429 / 5xx 会自动重试。翻译可以续跑，已有缓存会跳过。

### `check-debate-transcript-i18n.ts` — 详情页全文检查

检查每场辩论都有英文原文 `paragraphsEn` 和默认中文译文 `paragraphs`。该检查已并入 `npm run check`。

```bash
npm run check:debate-transcripts
```

页面规则：英文详情页只展示英文原文；中文详情页必须同时展示完整中文译文和完整英文原文，且两者都直接展开，不使用 `<details>` 折叠。

## 数据目录

```
data/
├── discovered_report_ids.json  # 132 个 report_id（28KB）
├── debate_analysis.json        # 规律分析结果（16KB）
└── enriched_cache.json         # LLM 摘要缓存（123KB）
```

> **注意**：`all_ai_debates.json`（3.8MB）和 `enriched_debates.json`（4MB）因体积较大未纳入版本控制，可通过运行 `01` → `02` → `03` 脚本重新生成。
> `transcripts/` 和 `translations/` 也是缓存目录，已被 git ignore；前端提交的是生成后的 `src/data/debate-transcripts.ts`。

## 重新运行

如需更新数据（例如新增了更多辩论），按顺序运行：

```bash
cd scripts/hansard

# 1. 重新发现（可选，如 PAIR Search 有新内容）
python 01_discover_debates.py

# 2. 获取新增辩论内容
python 02_fetch_debates.py

# 3. 生成中文摘要（已缓存的会跳过）
export OPENAI_API_KEY=your_key
python 03_enrich_debates.py

# 4. 重新分析规律
python 04_analyze_patterns.py

# 5. 生成 TS 文件
python 05_generate_ts.py

# 6. 更新详情页完整原文和中文译文
cd ../..
npm run fetch:debate-transcripts
npm run translate:debate-transcripts
npm run check:debate-transcripts
```

## API 协议说明

### SPRS Hansard API

经逆向工程发现的非公开 JSON API（基于 Angular 前端的后端接口）：

```
# 获取单条辩论完整内容
POST https://sprs.parl.gov.sg/search/getHansardTopic/?id=oral-answer-4023
Content-Type: application/json

{}

# 响应结构
{
  "resultHTML": {
    "title": "辩论标题",
    "sittingDate": "18-2-2026",
    "parlNo": "15",
    "reportType": "Oral Answers to Questions",
    "content": "<p>完整逐字稿 HTML</p>",
    "mpNames": "Gerald Giam Yean Song, Josephine Teo"
  },
  "resultData": null
}
```

### PAIR Search

PAIR Search 使用 AWS CloudFront 托管，前端为 React SPA。搜索功能通过语义向量检索实现，结果页面包含 SPRS 的 `report_id` 链接，可用于发现相关辩论。直接 API 调用需要动态 token，建议通过浏览器自动化（Playwright）访问。

## 议题分类体系

脚本使用以下 11 个议题分类标签：

| 英文标签 | 中文 |
|---|---|
| AI Economy & Industry | AI 经济与产业 |
| AI & Employment | AI 与就业 |
| AI Governance & Regulation | AI 治理与监管 |
| AI & National Security | AI 与国家安全 |
| AI in Public Sector | AI 与公共部门 |
| AI Infrastructure & Research | AI 基础设施与研究 |
| AI Safety & Ethics | AI 安全与伦理 |
| AI in Education | AI 与教育 |
| AI in Healthcare | AI 与医疗 |
| AI Strategy | AI 战略 |
| Deepfakes & Disinformation | 深度伪造与虚假信息 |
| Generative AI | 生成式 AI |
