# Changelog

## 0.0.8 — 2026-02-17

### Feature: 国际对标 (International Benchmarking) page

- **New page: 国际对标** (`/benchmarking/`) — Compare Singapore's AI strategy with 9 global economies
  - Overview comparison table with 10 regions (Singapore highlighted)
  - 4 key insight cards (governance divergence, investment gap, talent, SG positioning)
  - 9 detailed region profiles with expandable cards:
    - Hong Kong, Taiwan, UAE, Israel, South Korea, Estonia, Switzerland, Finland, Canada
    - Each includes: strategies, investment table, governance, initiatives, strengths/weaknesses vs SG, key bodies, sources
  - Data disclaimer and update date footer
- New data file: `src/data/benchmarking.ts` with full TypeScript interfaces
- Added "国际对标" as top-level nav link between "AI 追踪" and "参考资源"
- Added to footer under "更多"
- Bumped version to 0.0.8

## 0.0.7 — 2026-02-17

### Update: Tracker 数据大更新

- 投资与资金：政府 AI 专项从 S$1B 更新为 S$2B+（含 NAIRD S$1B、企业计算 S$150M）；新增科技巨头基础设施 US$26B+、AI 创业融资 US$8.4B+、Budget 2026 税收激励
- 人才培养：新增 SkillsFuture 105K 人、TeSA 21K/340K、AIAP 详细数据、Google AI 技能计划、职场 AI 使用率、AI Springboard
- 研究产出：新增 NTU/NUS 排名、SEA-LION v4、100 Experiments、ICLR 2025、DBS AI 模型
- 产业采用：新增数字经济 GDP 占比、大企业/中小企业 AI 采用率、独角兽 32 家、东盟 AI 交易份额
- 基础设施：新增 NSCC ASPIRE 2A+、国家 AI 计算网格、商用 GPU 集群、NVIDIA 营收、数据中心市场、5G 覆盖
- 国际排名：新增 Tortoise 第 3、Oxford 第 2、WIPO 第 5 等排名数据
- Tracker 从 16 项扩展至 42 项指标，6 大分类
- Bumped version to 0.0.7

## 0.0.6 — 2026-02-17

### Feature: AI 创业生态 (AI Startup Ecosystem) page

- **New page: AI 创业生态** (`/startups/`) — Singapore AI startup ecosystem overview
  - Overview stats: 650+ startups, global rank #3, $8.4B+ VC raised, 9 unicorns
  - Unicorn table with valuations (Grab, Trax, Advance Intelligence, Biofourmis, etc.)
  - 5 vertical sections: 金融科技, 医疗健康, 企业 SaaS, AI 基础设施, 机器人与自动驾驶
  - Notable exits & acquisitions table (Manus/Meta $2B+, etc.)
  - Investor ecosystem cards (SGInnovate, Temasek, GIC, Antler, etc.)
- New data file: `src/data/startups.ts`
- Added "AI 创业生态" to AI 追踪 dropdown nav and footer
- Bumped version to 0.0.6

## 0.0.5 — 2026-02-17

### Feature: Split 开源与研究 into two pages

- Renamed existing page nav text from "开源与研究" to "官方开源与研究"
- Added intro text clarifying scope (AISG & government-funded projects)
- **New page: 产学研开源生态** (`/community-opensource/`) — community open source ecosystem
  - University projects: Colossal-AI, OpenMMLab, NExT-GPT, Show-o/ShowUI, VideoSys, TSLANet
  - Corporate lab projects: LAVIS/BLIP, CodeGen, BAGEL, VideoLLaMA3, Sailor LLM, OAT, Zero-Bubble
  - Startup projects: Jan
  - Summary info box and data disclaimer
- New data file: `src/data/community-opensource.ts`
- Updated header and footer navigation with both pages
- Bumped version to 0.0.5

## 0.0.4 — 2026-02-17

### Feature: 开源与研究 (Open Source & Research) page

- **New page: 开源与研究** (`/opensource/`) — AI Singapore open source projects, model ecosystem, and research papers
  - SEA-LION model ecosystem stats (56 models, version breakdown v1–v4)
  - SEA-Guard safety models section (4 models, early stage)
  - AI Verify governance framework with features and partners
  - Open source project cards (TagUI, SEA-LION, PeekingDuck, SGNLP, Speech Lab, Synergos)
  - Research papers listing (4 papers with arXiv links)
  - Honest context comparison with global models
- New data file: `src/data/opensource.ts`
- Added "开源与研究" to AI 追踪 dropdown nav and footer
- Bumped version to 0.0.4

## 0.0.3 — 2026-02-17

### Feature: Grouped dropdown navigation & 3 new pages

- **Navigation refactor**: Flat nav → grouped dropdown menus
  - 政策观察 ▾ (政策文件, 发展时间线, 生态地图)
  - AI 追踪 ▾ (关键指标, 人才培养)
  - 参考资源 (flat link)
- **New page: 发展时间线** (`/timeline/`) — Vertical timeline of Singapore AI milestones from 2014–2027
- **New page: 生态地图** (`/ecosystem/`) — AI ecosystem map with 8 categories covering research, governance, tech, talent, products, innovation, international, and industry partners
- **New page: 人才培养** (`/talent/`) — 8 talent development programmes with key stats cards (AIAP, LADP, PhD Fellowship, AMP, LearnAI, NAISC, IOAI, AI Goes to School)
- New data files: `src/data/timeline.ts`, `src/data/ecosystem.ts`, `src/data/talent.ts`
- Updated footer to match new navigation structure
- Bumped version to 0.0.3

## 0.0.2 — 2026-02-17

### Refactor: Separate data from templates

- Extracted all hardcoded page data into `src/data/` TypeScript modules:
  - `src/data/policies.ts` — 19 policy documents across 5 categories with full metadata
  - `src/data/tracker.ts` — 16 tracker metrics across 5 sections
  - `src/data/references.ts` — 26 reference links across 6 categories
  - `src/data/stats.ts` — homepage statistics and feature items
- Updated all 4 pages to import from data files instead of hardcoding:
  - `src/pages/index.astro` — imports stats and features
  - `src/pages/policies/index.astro` — imports policy categories
  - `src/pages/tracker/index.astro` — imports tracker sections
  - `src/pages/references/index.astro` — imports reference sections
- Added TypeScript interfaces for all data types
- Tracker rows now use named fields (`name`, `value`, `source`, `sourceUrl`) instead of array indices
- No visual changes — same HTML output
- Bumped version to 0.0.2

## 0.0.1 — Initial release

- AstroWind-based site with hardcoded data in .astro pages
- Pages: homepage, policies, tracker, references, evolution, challenges
