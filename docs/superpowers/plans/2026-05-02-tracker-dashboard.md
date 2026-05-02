# Tracker 观察仪表盘 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 把 `/tracker/` 从静态指标参考表重写为 6 维度观察仪表盘——每维度核心数字 + 第三方排名锚 + 目标进度 + 趋势 + 编辑解读 + 关键短板。**不打分**。

**Architecture:** 数据全部来自 `src/data/tracker.ts`（重写）。Astro 静态生成：`/tracker/index.astro`（卡片墙）+ `/tracker/[dim].astro`（动态路由 6 个维度详情）+ `/tracker/methodology.astro`。EN 镜像位于 `/en/tracker/`。卡片组件 `DimensionCard.astro` 处理量化卡 + 文字判断卡两种形态。i18n 走 `~/i18n` 模块（`pickLocalized` / `localizedHref` / `getLangFromPath` / `t`）。

**Tech Stack:** Astro 5.0、Tailwind CSS、TypeScript、ESLint、Prettier。验证靠 `npm run check`（astro + eslint + prettier + graph）+ `npm run build && node scripts/i18n-check.mjs`（EN 中文残留扫描）。无传统 unit tests。

**Spec：** `docs/20260502-tracker-dashboard-design.md`。本 plan 实现该 spec 全部 §一 至 §十五 的 MVP 边界。

---

## File Structure

新建：
- `src/components/data/DimensionCard.astro` — 仪表盘卡片组件（量化版 + 文字判断版二态）
- `src/pages/tracker/[dim].astro` — 维度详情页（动态路由）
- `src/pages/tracker/methodology.astro` — 方法论页
- `src/pages/en/tracker/[dim].astro` — EN 详情页
- `src/pages/en/tracker/methodology.astro` — EN 方法论

重写（替换全部内容）：
- `src/data/tracker.ts` — 旧 schema 删除，新 dashboard schema + 6 维度数据
- `src/pages/tracker/index.astro` — 旧表格删除，新 Hero + 卡片墙
- `src/pages/en/tracker/index.astro` — EN 镜像

修改：
- `src/i18n/index.ts` — `navTracker` 改名 + 加新字典 keys
- `src/pages/index.astro` — 加"仪表盘速览"模块（zh）
- `src/pages/en/index.astro` — 加同模块（en）
- `src/version.ts` — bump 版本号

---

## Phase A · 数据基座（T1–T8）

### Task 1: 写 schema + 空数据骨架

**Files:**
- Modify: `src/data/tracker.ts`（完全重写）

- [ ] **Step 1: 删除旧 schema、写新 schema 和空数据骨架**

完全替换 `src/data/tracker.ts`：

```ts
// src/data/tracker.ts
//
// 新加坡 AI 观察仪表盘——6 维度呈现新加坡 AI 真实状态。
// 不打分。每维度有：核心数字 + 第三方排名锚 + 目标进度 + 趋势
// + 编辑解读 + 关键短板 + 完整 metrics 数据表。
//
// 设计文档：docs/20260502-tracker-dashboard-design.md

export type Trend = 'up' | 'flat' | 'down'; // 视觉对应 ↗ → ↘
export type DimensionId = 'investment' | 'talent' | 'compute' | 'adoption' | 'research' | 'governance';

export interface RankingAnchor {
  source: string;
  sourceEn?: string;
  rank: string;
  rankEn?: string;
  url: string;
}

export interface ProgressAgainstTarget {
  current?: string;
  currentEn?: string;
  target?: string;
  targetEn?: string;
  pct?: number;
  description?: string;
  descriptionEn?: string;
  url?: string;
}

export interface MetricRow {
  name: string;
  nameEn?: string;
  value: string;
  valueEn?: string;
  source: string;
  sourceEn?: string;
  sourceUrl: string;
  /** 子分组（仅 adoption 维度用到，区分"企业采用" vs "政府自用"） */
  category?: string;
  categoryEn?: string;
}

interface DimensionBase {
  id: DimensionId;
  icon: string;
  title: string;
  titleEn?: string;
  oneLiner: string;
  oneLinerEn?: string;
  trend: Trend;
  rankingAnchors: RankingAnchor[];
  shortcoming: string;
  shortcomingEn?: string;
  metrics: MetricRow[];
  relatedLeverNumbers?: number[];
  relatedPolicyIds?: string[];
  relatedDebateIds?: string[];
  relatedPostSlugs?: string[];
}

export interface QuantifiedDimension extends DimensionBase {
  kind: 'quantified';
  headline: string;
  headlineEn?: string;
  benchmark: string;
  benchmarkEn?: string;
  progress?: ProgressAgainstTarget;
  judgment: string;
  judgmentEn?: string;
}

export interface QualitativeDimension extends DimensionBase {
  kind: 'qualitative';
  badge: string;
  badgeEn?: string;
  judgment: string;
  judgmentEn?: string;
}

export type Dimension = QuantifiedDimension | QualitativeDimension;

export interface OverallSummary {
  oneLiner: string;
  oneLinerEn?: string;
  asOf: string;
  topRankings: RankingAnchor[];
  methodologyNote: string;
  methodologyNoteEn?: string;
}

export const dataDate = '2026-05-02';

export const overallSummary: OverallSummary = {
  oneLiner: '',
  asOf: dataDate,
  topRankings: [],
  methodologyNote: '',
};

export const dimensions: Dimension[] = [];
```

- [ ] **Step 2: 验证类型 + 格式**

Run: `npm run check`
Expected: PASS（types compile，eslint/prettier 干净）。如果有 prettier 抱怨长行，运行 `npm run fix:prettier`。

- [ ] **Step 3: 提交**

```bash
git add src/data/tracker.ts
git commit -m "refactor(tracker): replace metrics schema with dashboard skeleton

Replace TrackerSection/TrackerRow with Dimension schema (quantified +
qualitative variants), RankingAnchor, ProgressAgainstTarget, MetricRow.
Empty data; populated dimension-by-dimension in subsequent commits.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 2: 填充维度 1 — investment（投入强度）

**Files:**
- Modify: `src/data/tracker.ts`

- [ ] **Step 1: 在 `dimensions` 数组中插入 investment 维度（第一项）**

在 `src/data/tracker.ts` 的 `dimensions` 数组顶部插入：

```ts
{
  id: 'investment',
  kind: 'quantified',
  icon: '💰',
  title: '投入强度',
  oneLiner: '政府舍得花钱吗？',
  trend: 'up',
  headline: 'S$139/人',
  benchmark: 'vs US $33 / 中国 $7（人均）',
  progress: {
    description: '政府 AI 专项 > S$2B（NAIS 2.0 + 公共 AI 研究 2026–2030 + ECI）；Budget 2026 加码（400% 税收激励、S$1.5B FSDF）',
  },
  rankingAnchors: [
    {
      source: 'Stanford AI Index 2025',
      rank: '人均政府 AI 投入全球前列',
      url: 'https://hai.stanford.edu/ai-index/2025-ai-index-report/economy',
    },
    {
      source: 'Budget 2026',
      rank: '400% AI 税收激励（创新政策）',
      url: 'https://www.singaporebudget.gov.sg/budget-speech/budget-statement/c-harness-ai-as-a-strategic-advantage',
    },
  ],
  judgment:
    '人均 S$139 是美国 4.2 倍、中国 19 倍。Budget 2026 在已有 S$2B 基础上加 S$70M Multimodal LLM、S$1.5B FSDF、400% 税收激励——节奏不放缓。RIE2030 总盘 S$37B 兜底未来 5 年。资金强度处于全球第一梯队。',
  shortcoming:
    '私有部门跟投比例偏低，仍是政府推为主；钱花在算力和大企业上较多，SME 端补贴渗透不够；估算和披露口径偶尔不一致，跨年比较要小心。',
  metrics: [
    // 来自旧 tracker.ts §"投资与资金"（22 条），不删任何字段，仅迁移
    // Microsoft / AWS / Google 数据中心 3 条同时也挂 compute 维度（双挂）
    // [此处粘贴 22 条 MetricRow 数据，照搬 git history 里的 src/data/tracker.ts L29-247 内容]
  ],
  relatedLeverNumbers: [1], // 基建
  relatedPolicyIds: [],     // hand-curated 后续补
}
```

> **数据迁移说明（必须按此操作）**：从 `git show HEAD~1:src/data/tracker.ts`（重写之前的版本）拷贝原"投资与资金" section 的 `rows` 数组（22 条）。每条按 `MetricRow` 结构平铺：`name` / `nameEn` / `value` / `valueEn` / `source` / `sourceEn` / `sourceUrl`——旧 tracker.ts 已经有这些字段，可以 1:1 复制。**不**加 `category` 字段（仅 adoption 用）。

- [ ] **Step 2: 验证编译 + 数据完整性**

Run: `npm run check`
Expected: PASS。

Run（手动验证条目数）：
```bash
node -e "import('./src/data/tracker.ts').then(m => console.log('investment metrics:', m.dimensions.find(d => d.id === 'investment').metrics.length))"
```
Expected: `investment metrics: 22`

> 如果 Node 不能直接 import `.ts`，跳过此 step，依靠 `npm run check` 通过即认为类型对、再人工肉眼数一遍。

- [ ] **Step 3: 提交**

```bash
git add src/data/tracker.ts
git commit -m "feat(tracker): populate investment dimension (22 metrics)

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 3: 填充维度 2 — talent（人才储备）

**Files:**
- Modify: `src/data/tracker.ts`

- [ ] **Step 1: 在 `dimensions` 数组中追加 talent 维度**

```ts
{
  id: 'talent',
  kind: 'quantified',
  icon: '👩‍💻',
  title: '人才储备',
  oneLiner: '人够不够、自给率多少？',
  trend: 'up',
  headline: '5,000 / 15,000',
  benchmark: '目标 2029 完成 33%（外籍占比 35%）',
  progress: {
    current: '5,000',
    target: '15,000 by 2029',
    pct: 33,
    url: 'https://www.mddi.gov.sg/newsroom/singapore-invests-over-s-1-billion-in-national-ai-research-and-development-plan-to-strengthen-ai-research-capabilities-and-our-position-as-global-ai-hub/',
  },
  rankingAnchors: [
    {
      source: 'Tortoise Global AI Index Talent 子项',
      rank: '~#6–8',
      url: 'https://www.tortoisemedia.com/intelligence/global-ai/',
    },
    {
      source: 'SkillsFuture (2025)',
      rank: '105K 人 / 1,600 课程',
      url: 'https://www.skillsfuture.gov.sg/',
    },
    {
      source: 'TeSA',
      rank: '21K 本地人就业 + 340K 技能提升',
      url: 'https://www.imda.gov.sg/',
    },
  ],
  judgment:
    '盘子在涨——SkillsFuture 105K 入读、TeSA 安置 21K、AIAP 22 批毕业 ~500–600 人——但目标完成度 33% 和外籍占比 35% 说明自给率仍是结构性问题。Tortoise Talent 子项在 #6–8 区间，距离美国差一截。',
  shortcoming:
    'AIAP 60 人/批是产能瓶颈；本地名校 AI 博士流失率高（去美/去工业界）；"AI Bilingual 100K" H1 2026 才上线（会计/法律首批），效果未知；非工程岗位（产品、设计、销售）培训供给薄弱。',
  metrics: [
    // 来自旧 tracker.ts §"人才培养"（12 条）原文照抄
  ],
  relatedLeverNumbers: [3], // 人才
  relatedPolicyIds: [],
}
```

> **数据迁移**：从 git history 拷贝原"人才培养" section 的 12 条 `rows` → 12 条 `MetricRow`，字段 1:1。

- [ ] **Step 2: `npm run check`** → PASS

- [ ] **Step 3: 提交**

```bash
git add src/data/tracker.ts
git commit -m "feat(tracker): populate talent dimension (12 metrics)

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 4: 填充维度 3 — compute（算力底座）

**Files:**
- Modify: `src/data/tracker.ts`

- [ ] **Step 1: 在 `dimensions` 数组中追加 compute 维度**

```ts
{
  id: 'compute',
  kind: 'quantified',
  icon: '🖥️',
  title: '算力底座',
  oneLiner: '跑得起前沿模型吗？',
  trend: 'flat',
  headline: '1.4 GW',
  benchmark: '数据中心容量 + 70+ 设施 + NSCC ASPIRE 2A+ 20 PFLOPS',
  progress: {
    description: '额外 300MW 已分配 + 80MW 试点 2026–2028（增量在路上，但电力是天花板）',
  },
  rankingAnchors: [
    {
      source: 'Tortoise Global AI Index Infrastructure',
      rank: '#2',
      url: 'https://www.tortoisemedia.com/intelligence/global-ai/',
    },
    {
      source: 'NVIDIA Singapore (2025)',
      rank: '占全球营收 15%（人均 $600）',
      url: 'https://www.edb.gov.sg/en/our-industries/artificial-intelligence-in-singapore.html',
    },
    {
      source: 'Introl 2025',
      rank: '全球数据中心市场 $4.16B（2024）',
      url: 'https://www.imda.gov.sg/',
    },
  ],
  judgment:
    'NSCC ASPIRE 2A+（H100, 20 PFLOPS）+ 商用集群（SMC 2,048 H100/集群）+ Singtel GPU-as-a-Service + 国家计算网格 + HTX NGINE B200 SuperPOD——分层覆盖完整，企业、科研、政府自用都够用。Tortoise 基建排 #2，仅次美国。趋势 → 而非 ↗ 是因为电力配额是天花板。',
  shortcoming:
    '电力配额 vs 绿电承诺的张力会卡未来 5 年扩张；前沿芯片（H100/B200）依赖进口，地缘风险存在；自研芯片或定制 ASIC 缺位；东南亚邻国（马来西亚、印尼）正在抢容量，新加坡的"算力中心"地位不是天然的。',
  metrics: [
    // 来自旧 tracker.ts §"基础设施"（11 条）原文照抄
    // 加上 §"投资与资金" 中的 Microsoft / AWS / Google 数据中心 3 条（双挂——也保留在 investment.metrics）
  ],
  relatedLeverNumbers: [1], // 基建
  relatedPolicyIds: [],
}
```

> **数据迁移**：原"基础设施" 11 条 + 三家云厂数据中心 3 条 = 14 条 `MetricRow`。Microsoft/AWS/Google 三条同时挂在 `investment.metrics` 中（spec §八明确允许双挂）。

- [ ] **Step 2: `npm run check`** → PASS

- [ ] **Step 3: 提交**

```bash
git add src/data/tracker.ts
git commit -m "feat(tracker): populate compute dimension (14 metrics, 3 cross-listed with investment)

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 5: 填充维度 4 — adoption（产业渗透，含政府自用子分组）

**Files:**
- Modify: `src/data/tracker.ts`

- [ ] **Step 1: 在 `dimensions` 数组中追加 adoption 维度**

```ts
{
  id: 'adoption',
  kind: 'quantified',
  icon: '🏢',
  title: '产业渗透',
  oneLiner: '企业真在用吗？',
  trend: 'up',
  headline: '62.5% 大企业 / 14.5% SME',
  benchmark: 'SME YoY 3 倍增长（2023 4.2% → 2024 14.5%）',
  progress: {
    description: 'NAIIP 目标 10K 企业 + 100K 工人（2026–2029）',
    url: 'https://www.imda.gov.sg/',
  },
  rankingAnchors: [
    {
      source: 'Microsoft AI Economy Institute 2026',
      rank: '全球第 2（60.9%，仅次 UAE）',
      url: 'https://www.microsoft.com/en-us/corporate-responsibility/topics/ai-economy-institute/reports/global-ai-adoption-2025/',
    },
    {
      source: 'IMDA SGDE 2025',
      rank: '数字经济占 GDP 18.6%（2024）',
      url: 'https://www.imda.gov.sg/',
    },
    {
      source: 'DBS (2024)',
      rank: '800+ 模型 / 350+ 用例 / S$750M 经济价值',
      url: 'https://www.mas.gov.sg/',
    },
  ],
  judgment:
    '大企业达标——Microsoft 测全球 #2、DBS 等头部样板成熟。SME 14.5% YoY 3 倍是真增长，但绝对值仍低，离普及还远。政府自用（Pair / AIBots / VICA）目标 150K 公务员、Note Buddy 5K 医护、AV 巴士、ISO/IEC 42001 全球首张——案例厚但公开渗透率有限。',
  shortcoming:
    'SME 14.5% 看起来涨快、绝对值仍低，普惠 AI 还要 2–3 年；政府自用以效率工具为主，决策类 AI 渗透浅；NAIIP 拨款规模未公开，执行力存疑；政府公开渗透率仅有目标无进度，对账困难。',
  metrics: [
    // 来自旧 tracker.ts §"产业采用"（17 条）+ §"国际排名"中"东南亚深科技融资份额 91.1%"
    // 给每条加 category 字段：
    //   - category: '企业采用' / categoryEn: 'Enterprise Adoption' —— 数字经济占 GDP / 大企业 AI 采用率 / 中小企业 AI 采用率 / AI 创业公司 / 独角兽 / 东盟 AI 交易份额 / 企业 AI 培训意愿 / DBS（如已挪入此处）/ AI Verify Sandbox / 东南亚深科技融资份额
    //   - category: '政府自用' / categoryEn: 'Government Adoption' —— 医疗 AI 案例 / 五大国家 AI 项目 / Note Buddy / GovTech Pair / Punggol 自动驾驶 / PSA Tuas / Changi Airport / HDB Tengah / JTC Punggol Digital District
}
  ],
  relatedLeverNumbers: [4, 5], // 应用 + 政府自用
  relatedPolicyIds: [],
}
```

> **数据迁移**：原"产业采用" 17 条 + 跨域 1 条（东南亚深科技融资份额，原"国际排名"）= 18 条。每条 `MetricRow` 增加 `category` 和 `categoryEn` 字段，二选一：`'企业采用'` / `'Enterprise Adoption'` 或 `'政府自用'` / `'Government Adoption'`。判定规则：政府自身机构（GovTech / HDB / JTC / LTA / Synapxe / Changi / PSA）的部署归"政府自用"，企业 + 民营机构 + AI Verify Sandbox 等归"企业采用"。

- [ ] **Step 2: `npm run check`** → PASS

- [ ] **Step 3: 提交**

```bash
git add src/data/tracker.ts
git commit -m "feat(tracker): populate adoption dimension (18 metrics with enterprise/government category)

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 6: 填充维度 5 — research（研究质量）

**Files:**
- Modify: `src/data/tracker.ts`

- [ ] **Step 1: 在 `dimensions` 数组中追加 research 维度**

```ts
{
  id: 'research',
  kind: 'quantified',
  icon: '🔬',
  title: '研究质量',
  oneLiner: '有真东西出来吗？',
  trend: 'flat',
  headline: '人均论文全球 #1',
  benchmark: 'NTU AI #3（仅次 MIT/CMU）· NUS AI #9',
  progress: {
    description: 'SEA-LION v4（11 语言、4B–33B 参数）+ 100E 100+ 项目 + ICLR 2025 主办',
  },
  rankingAnchors: [
    {
      source: 'Wiley 2024',
      rank: '人均 AI 论文全球 #1（每百万人 250 篇，2022）',
      url: 'https://aiindex.stanford.edu/',
    },
    {
      source: 'CSRankings AI',
      rank: 'NTU #3',
      url: 'https://www.tortoisemedia.com/intelligence/global-ai/',
    },
    {
      source: 'QS',
      rank: 'NUS AI #9',
      url: 'https://oxfordinsights.com/ai-readiness/ai-readiness-index/',
    },
  ],
  judgment:
    '产出量级和学校排名都很硬——人均论文 #1、NTU AI #3、NUS #9、ICLR 2025 主办、SEA-LION 是少有的非英美中有规模的基座模型。但顶级原创（FAIR/DeepMind 级 frontier work）仍少一档：顶会一作占比、被引大于 1000 的代表作、自研基座的市场份额都还差。',
  shortcoming:
    '顶会一作占比、被引数、自研基座市场份额都还差一档；顶尖博士流失率高；产学研转化对企业自用强但对外输出弱（无 OpenAI / Anthropic 量级的 spinoff）；原创研究的国际可见度依赖少数明星教授。',
  metrics: [
    // 来自旧 tracker.ts §"研究产出"（7 条）原文照抄
  ],
  relatedLeverNumbers: [],   // 研究跨多抓手，留空
  relatedPolicyIds: [],
}
```

- [ ] **Step 2: `npm run check`** → PASS

- [ ] **Step 3: 提交**

```bash
git add src/data/tracker.ts
git commit -m "feat(tracker): populate research dimension (7 metrics)

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 7: 填充维度 6 — governance（治理影响力，文字判断卡）

**Files:**
- Modify: `src/data/tracker.ts`

- [ ] **Step 1: 在 `dimensions` 数组中追加 governance 维度（注意 `kind: 'qualitative'`）**

```ts
{
  id: 'governance',
  kind: 'qualitative',
  icon: '🌐',
  title: '治理影响力',
  oneLiner: '规则上是不是话事人？',
  trend: 'up',
  badge: '规则制定者',
  judgment:
    'Singapore Consensus on AI Safety 11 国签署（含中美）、ASEAN Guide on AI Governance 10 国采纳（新加坡主导起草）、AI Verify Foundation 在全球被引、REAIM 联合主办、ISESEA 已办两届——新加坡是规则制定者而不是接受者，话语权显著超出体量。Bletchley、Seoul、Paris 三届 AI Safety Summit 全程参与；MAS Project MindForge 拉到 24 家机构 + 四大云厂；UN Independent International Scientific Panel 有席位。',
  rankingAnchors: [
    {
      source: 'Oxford Government AI Readiness 2024',
      rank: '#2（仅次美国）',
      url: 'https://oxfordinsights.com/ai-readiness/ai-readiness-index/',
    },
    {
      source: 'Singapore Consensus',
      rank: '11 国签署',
      url: 'https://aiverifyfoundation.sg/',
    },
    {
      source: 'ASEAN Guide on AI Governance',
      rank: '10 国采纳',
      url: 'https://asean.org/',
    },
  ],
  shortcoming:
    '规则制定 ≠ 规则被遵守——AI Verify 框架被采纳但执法层面影响力弱；中美 AI 治理分裂时新加坡的"居间者"定位可持续性存疑——任一方要求选边，回旋空间会塌；治理研究投入（AISI S$10M/年）和影响力规模不匹配，结构性投入偏轻。',
  metrics: [
    // 来自旧 tracker.ts §"国际治理影响力"（7 条）原文照抄
  ],
  relatedLeverNumbers: [2, 6], // 治理 + 外交
  relatedPolicyIds: [],
}
```

- [ ] **Step 2: `npm run check`** → PASS

- [ ] **Step 3: 提交**

```bash
git add src/data/tracker.ts
git commit -m "feat(tracker): populate governance dimension (qualitative, 7 metrics)

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 8: 填充 overallSummary（Hero 数据）

**Files:**
- Modify: `src/data/tracker.ts`

- [ ] **Step 1: 把 `overallSummary` 从空对象改为完整数据**

```ts
export const overallSummary: OverallSummary = {
  oneLiner:
    '6 个维度看新加坡 AI：投入强、治理强、基建强；人才自给率低、原创研究偏少是结构性短板。数字和编辑解读各自呈现，访客自己判断。',
  asOf: dataDate,
  topRankings: [
    {
      source: 'Tortoise Global AI Index 2024',
      rank: '#3',
      url: 'https://www.tortoisemedia.com/intelligence/global-ai/',
    },
    {
      source: 'Oxford Government AI Readiness 2024',
      rank: '#2',
      url: 'https://oxfordinsights.com/ai-readiness/ai-readiness-index/',
    },
    {
      source: 'Microsoft AI Adoption 2026',
      rank: '#2 (60.9%)',
      url: 'https://www.microsoft.com/en-us/corporate-responsibility/topics/ai-economy-institute/reports/global-ai-adoption-2025/',
    },
    {
      source: 'WIPO Global Innovation Index 2025',
      rank: '#5',
      url: 'https://www.wipo.int/',
    },
  ],
  methodologyNote:
    '每个维度呈现核心数字 + 第三方排名 + 目标进度 + 趋势 + 编辑解读，不打总评分。',
};
```

- [ ] **Step 2: `npm run check`** → PASS

- [ ] **Step 3: 提交**

```bash
git add src/data/tracker.ts
git commit -m "feat(tracker): populate overallSummary with hero text + 4 top rankings

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Phase B · i18n 字典（T9）

### Task 9: 加 i18n 字典 keys + navTracker 改名

**Files:**
- Modify: `src/i18n/index.ts`

- [ ] **Step 1: 改 `navTracker` 中文显示名 + 加新 keys（zh dict）**

在 `src/i18n/index.ts` 的 `zh` 对象中：

把 `navTracker: '关键指标',` 改为 `navTracker: 'AI 仪表盘',`。

在 `// Misc` 之前插入新 keys：

```ts
  // Tracker dashboard
  trackerPageTitle: '新加坡 AI 观察仪表盘',
  trackerPageBlurb: '6 维度呈现新加坡 AI 真实状态——核心数字、第三方排名、目标进度、趋势、编辑解读、关键短板。我们不打分。',
  trackerSectionTopRankings: '国际参照',
  trackerSectionMethodologyNote: '方法说明',
  trackerSectionMethodology: '详细方法论',
  trackerCardTrendUp: '↗ 向上',
  trackerCardTrendFlat: '→ 持平',
  trackerCardTrendDown: '↘ 向下',
  trackerDetailJudgment: '编辑解读',
  trackerDetailShortcoming: '关键短板',
  trackerDetailRankings: '第三方排名锚',
  trackerDetailProgress: '目标进度',
  trackerDetailMetrics: '完整数据',
  trackerDetailRelated: '关联阅读',
  trackerDetailMetricsHeaderName: '指标',
  trackerDetailMetricsHeaderValue: '数据',
  trackerDetailMetricsHeaderSource: '来源 / 时间',
  trackerDetailMetricsHeaderCategory: '分组',
  trackerCategoryEnterprise: '企业采用',
  trackerCategoryGovernment: '政府自用',
  trackerMethodologyTitle: '仪表盘方法论',
  trackerHomeSummaryTitle: '🇸🇬 新加坡 AI 仪表盘',
  trackerHomeSummaryCta: '6 维度看现状 → 完整仪表盘',
  trackerEditorialAttribution: 'sgai 编辑解读',
  trackerBackToDashboard: '返回仪表盘',
  trackerLastUpdated: '数据更新',
```

- [ ] **Step 2: 加对应英文 keys（en dict）**

把 `navTracker: 'Key Metrics',` 改为 `navTracker: 'AI Dashboard',`。

在 `en` 对象的对应位置（保持顺序与 zh 一致）插入：

```ts
  trackerPageTitle: 'Singapore AI Observatory Dashboard',
  trackerPageBlurb:
    '6 dimensions showing where Singapore AI actually stands — headline numbers, third-party rankings, target progress, trend, editorial interpretation, key shortcomings. We do not assign grades.',
  trackerSectionTopRankings: 'International Anchors',
  trackerSectionMethodologyNote: 'Method',
  trackerSectionMethodology: 'Full methodology',
  trackerCardTrendUp: '↗ Up',
  trackerCardTrendFlat: '→ Flat',
  trackerCardTrendDown: '↘ Down',
  trackerDetailJudgment: 'Editorial Interpretation',
  trackerDetailShortcoming: 'Key Shortcoming',
  trackerDetailRankings: 'Third-Party Ranking Anchors',
  trackerDetailProgress: 'Target Progress',
  trackerDetailMetrics: 'Full Data',
  trackerDetailRelated: 'Related',
  trackerDetailMetricsHeaderName: 'Metric',
  trackerDetailMetricsHeaderValue: 'Value',
  trackerDetailMetricsHeaderSource: 'Source / Date',
  trackerDetailMetricsHeaderCategory: 'Group',
  trackerCategoryEnterprise: 'Enterprise Adoption',
  trackerCategoryGovernment: 'Government Adoption',
  trackerMethodologyTitle: 'Dashboard Methodology',
  trackerHomeSummaryTitle: '🇸🇬 Singapore AI Dashboard',
  trackerHomeSummaryCta: '6 dimensions, current state → Full dashboard',
  trackerEditorialAttribution: 'sgai editorial interpretation',
  trackerBackToDashboard: 'Back to dashboard',
  trackerLastUpdated: 'Data updated',
```

- [ ] **Step 3: 验证**

Run: `npm run check`
Expected: PASS（无 type 错误，dict keys 一致）。

- [ ] **Step 4: 提交**

```bash
git add src/i18n/index.ts
git commit -m "feat(i18n): add tracker dashboard dictionary keys + rename navTracker

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Phase C · 组件 + 中文页面（T10–T13）

### Task 10: 写 DimensionCard 组件

**Files:**
- Create: `src/components/data/DimensionCard.astro`

- [ ] **Step 1: 写组件（处理 quantified + qualitative 两种形态）**

```astro
---
// src/components/data/DimensionCard.astro
//
// Dashboard dimension card. Two visual variants by `kind`:
//   - 'quantified': big headline + benchmark + progress bar
//   - 'qualitative': badge + judgment paragraph
//
// Same outer dimensions, same visual weight — differ only inside.

import type { Dimension } from '~/data/tracker';
import { getLangFromPath, localizedHref, pickLocalized, t, type Lang } from '~/i18n';

interface Props {
  dim: Dimension;
}

const { dim } = Astro.props;
const lang: Lang = getLangFromPath(new URL(Astro.url).pathname);

const title = pickLocalized<string>(dim, 'title', lang) ?? dim.title;
const oneLiner = pickLocalized<string>(dim, 'oneLiner', lang) ?? dim.oneLiner;
const trendLabel =
  dim.trend === 'up' ? t(lang, 'trackerCardTrendUp') : dim.trend === 'down' ? t(lang, 'trackerCardTrendDown') : t(lang, 'trackerCardTrendFlat');
const trendArrow = dim.trend === 'up' ? '↗' : dim.trend === 'down' ? '↘' : '→';

const detailHref = localizedHref(`/tracker/${dim.id}/`, lang);

const firstAnchor = dim.rankingAnchors[0];
const anchorSource = firstAnchor ? (pickLocalized<string>(firstAnchor, 'source', lang) ?? firstAnchor.source) : '';
const anchorRank = firstAnchor ? (pickLocalized<string>(firstAnchor, 'rank', lang) ?? firstAnchor.rank) : '';

// Variant-specific fields
const headline =
  dim.kind === 'quantified' ? (pickLocalized<string>(dim, 'headline', lang) ?? dim.headline) : null;
const benchmark =
  dim.kind === 'quantified' ? (pickLocalized<string>(dim, 'benchmark', lang) ?? dim.benchmark) : null;
const progressPct = dim.kind === 'quantified' ? (dim.progress?.pct ?? null) : null;
const progressDesc =
  dim.kind === 'quantified' && dim.progress
    ? (pickLocalized<string>(dim.progress, 'description', lang) ?? dim.progress.description ?? null)
    : null;

const badge = dim.kind === 'qualitative' ? (pickLocalized<string>(dim, 'badge', lang) ?? dim.badge) : null;
const judgment = dim.kind === 'qualitative' ? (pickLocalized<string>(dim, 'judgment', lang) ?? dim.judgment) : null;
---

<a
  href={detailHref}
  class="block bg-surface border border-subtle rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all"
>
  <div class="flex items-start justify-between gap-3 mb-4">
    <div class="flex items-center gap-2">
      <span class="text-3xl">{dim.icon}</span>
      <div>
        <h3 class="font-bold text-lg leading-tight m-0">{title}</h3>
        <p class="text-xs text-muted m-0 mt-1">{oneLiner}</p>
      </div>
    </div>
    <span class="text-sm font-mono text-slate-600 dark:text-slate-300 shrink-0" title={trendLabel}>{trendArrow}</span>
  </div>

  {
    dim.kind === 'quantified' && (
      <>
        <div class="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">{headline}</div>
        {progressPct !== null && (
          <div class="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded mb-2 overflow-hidden">
            <div class="h-full bg-blue-500" style={`width: ${Math.min(100, Math.max(0, progressPct))}%`} />
          </div>
        )}
        <div class="text-xs text-muted mb-3">{benchmark}</div>
        {progressDesc && <div class="text-xs text-muted mb-3">{progressDesc}</div>}
      </>
    )
  }
  {
    dim.kind === 'qualitative' && (
      <>
        <div class="inline-block text-sm font-bold bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 px-2 py-1 rounded mb-3">
          {badge}
        </div>
        <p class="text-sm leading-relaxed text-slate-700 dark:text-slate-300 mb-3 m-0">{judgment}</p>
      </>
    )
  }

  {firstAnchor && (
    <div class="text-xs text-muted pt-3 border-t border-subtle">
      {anchorSource} · <span class="font-mono">{anchorRank}</span>
    </div>
  )}
</a>
```

- [ ] **Step 2: 验证**

Run: `npm run check`
Expected: PASS。

- [ ] **Step 3: 提交**

```bash
git add src/components/data/DimensionCard.astro
git commit -m "feat(tracker): add DimensionCard component with quantified/qualitative variants

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 11: 重写 /tracker/index.astro（Hero + 卡片墙）

**Files:**
- Modify: `src/pages/tracker/index.astro`（完全重写）

- [ ] **Step 1: 完全替换文件内容**

```astro
---
import Layout from '~/layouts/PageLayout.astro';
import Headline from '~/components/ui/Headline.astro';
import DimensionCard from '~/components/data/DimensionCard.astro';
import { dimensions, overallSummary, dataDate } from '~/data/tracker';
import { getLangFromPath, localizedHref, pickLocalized, t, type Lang } from '~/i18n';

const lang: Lang = getLangFromPath(new URL(Astro.url).pathname);
const oneLiner = pickLocalized<string>(overallSummary, 'oneLiner', lang) ?? overallSummary.oneLiner;
const methodologyNote =
  pickLocalized<string>(overallSummary, 'methodologyNote', lang) ?? overallSummary.methodologyNote;
const methodologyHref = localizedHref('/tracker/methodology/', lang);
---

<Layout
  metadata={{
    title: t(lang, 'trackerPageTitle'),
    description: t(lang, 'trackerPageBlurb'),
  }}
  breadcrumbs={[{ label: t(lang, 'trackerPageTitle') }]}
>
  <section class="px-4 py-16 sm:px-6 mx-auto lg:px-8 max-w-6xl">
    <Headline title={`🇸🇬 ${t(lang, 'trackerPageTitle')}`} subtitle={`${t(lang, 'trackerLastUpdated')}：${dataDate}`} />

    <div class="callout-note rounded-lg mb-10 leading-relaxed">
      <p class="text-base m-0">{oneLiner}</p>
    </div>

    <section class="mb-10">
      <h2 class="text-sm font-bold uppercase tracking-wide text-slate-500 mb-3">
        {t(lang, 'trackerSectionTopRankings')}
      </h2>
      <div class="flex flex-wrap gap-x-6 gap-y-2 text-sm">
        {
          overallSummary.topRankings.map((r) => {
            const src = pickLocalized<string>(r, 'source', lang) ?? r.source;
            const rk = pickLocalized<string>(r, 'rank', lang) ?? r.rank;
            return (
              <a href={r.url} target="_blank" rel="noopener" class="text-blue-600 dark:text-blue-400 hover:underline">
                {src} · <span class="font-mono">{rk}</span>
              </a>
            );
          })
        }
      </div>
    </section>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
      {dimensions.map((dim) => <DimensionCard dim={dim} />)}
    </div>

    <section class="text-sm text-muted">
      <p class="m-0">
        <strong>{t(lang, 'trackerSectionMethodologyNote')}：</strong>{methodologyNote}{' '}
        <a href={methodologyHref} class="text-blue-600 dark:text-blue-400 hover:underline">
          {t(lang, 'trackerSectionMethodology')} →
        </a>
      </p>
    </section>
  </section>
</Layout>
```

- [ ] **Step 2: 验证 + 视觉检查**

Run: `npm run check`
Expected: PASS。

Run: `npm run dev`，浏览器访问 `http://localhost:4321/tracker/`，确认：
- Hero 显示标题 + 一句话综述 + 4 条国际参照
- 6 个卡片显示，每张卡（量化）有 headline + benchmark + 进度条/描述 + 第一条 ranking
- 治理卡（qualitative）显示 badge + judgment
- 卡片可点击（链接到 `/tracker/<dim>/`，但详情页 Task 12 才有，可能 404，正常）
- "详细方法论"链接可见（同样会 404，下一步处理）

按 `Ctrl+C` 停 dev server。

- [ ] **Step 3: 提交**

```bash
git add src/pages/tracker/index.astro
git commit -m "feat(tracker): rewrite /tracker/ as dashboard with hero + 6 dimension cards

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 12: 写 /tracker/[dim].astro 维度详情页

**Files:**
- Create: `src/pages/tracker/[dim].astro`

- [ ] **Step 1: 写动态路由 + 详情页**

```astro
---
import type { GetStaticPaths } from 'astro';
import { Icon } from 'astro-icon/components';
import Layout from '~/layouts/PageLayout.astro';
import { dimensions, dataDate, type Dimension } from '~/data/tracker';
import { getLangFromPath, localizedHref, pickLocalized, t, type Lang } from '~/i18n';

export const prerender = true;

export const getStaticPaths = (() =>
  dimensions.map((dim) => ({ params: { dim: dim.id }, props: { dim } }))) satisfies GetStaticPaths;

interface Props { dim: Dimension }
const { dim } = Astro.props as Props;
const lang: Lang = getLangFromPath(new URL(Astro.url).pathname);

const title = pickLocalized<string>(dim, 'title', lang) ?? dim.title;
const oneLiner = pickLocalized<string>(dim, 'oneLiner', lang) ?? dim.oneLiner;
const judgment = pickLocalized<string>(dim, 'judgment', lang) ?? dim.judgment;
const shortcoming = pickLocalized<string>(dim, 'shortcoming', lang) ?? dim.shortcoming;
const trendArrow = dim.trend === 'up' ? '↗' : dim.trend === 'down' ? '↘' : '→';
const trendLabel =
  dim.trend === 'up' ? t(lang, 'trackerCardTrendUp') : dim.trend === 'down' ? t(lang, 'trackerCardTrendDown') : t(lang, 'trackerCardTrendFlat');

const headline = dim.kind === 'quantified' ? (pickLocalized<string>(dim, 'headline', lang) ?? dim.headline) : null;
const benchmark = dim.kind === 'quantified' ? (pickLocalized<string>(dim, 'benchmark', lang) ?? dim.benchmark) : null;
const badge = dim.kind === 'qualitative' ? (pickLocalized<string>(dim, 'badge', lang) ?? dim.badge) : null;

const progressDesc =
  dim.kind === 'quantified' && dim.progress
    ? (pickLocalized<string>(dim.progress, 'description', lang) ?? dim.progress.description ?? null)
    : null;
const progressCurrent =
  dim.kind === 'quantified' && dim.progress
    ? (pickLocalized<string>(dim.progress, 'current', lang) ?? dim.progress.current ?? null)
    : null;
const progressTarget =
  dim.kind === 'quantified' && dim.progress
    ? (pickLocalized<string>(dim.progress, 'target', lang) ?? dim.progress.target ?? null)
    : null;
const progressPct = dim.kind === 'quantified' ? (dim.progress?.pct ?? null) : null;

const dashboardHref = localizedHref('/tracker/', lang);

const metadata = {
  title: `${title} · ${t(lang, 'trackerPageTitle')}`,
  description: judgment,
};
---

<Layout
  metadata={metadata}
  breadcrumbs={[{ label: t(lang, 'trackerPageTitle'), href: dashboardHref }, { label: title }]}
>
  <article class="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
    <header class="mb-8">
      <p class="text-xs uppercase tracking-[0.18em] text-primary font-semibold mb-4">
        {t(lang, 'trackerEditorialAttribution')} · {t(lang, 'trackerLastUpdated')} {dataDate}
      </p>
      <h1 class="font-serif text-3xl md:text-5xl leading-tight font-semibold text-gray-900 dark:text-white mb-3">
        {dim.icon} {title}
      </h1>
      <p class="text-base md:text-lg text-gray-500 dark:text-gray-400">{oneLiner}</p>
    </header>

    <section class="grid md:grid-cols-3 gap-3 mb-8">
      {dim.kind === 'quantified' && (
        <>
          <div class="bg-surface border border-subtle rounded-lg p-4">
            <div class="text-xs uppercase tracking-wider text-gray-500 mb-1">Headline</div>
            <div class="text-2xl font-bold text-primary">{headline}</div>
          </div>
          <div class="bg-surface border border-subtle rounded-lg p-4">
            <div class="text-xs uppercase tracking-wider text-gray-500 mb-1">Benchmark</div>
            <div class="font-semibold">{benchmark}</div>
          </div>
        </>
      )}
      {dim.kind === 'qualitative' && (
        <div class="bg-surface border border-subtle rounded-lg p-4 md:col-span-2">
          <div class="text-xs uppercase tracking-wider text-gray-500 mb-1">Badge</div>
          <div class="font-semibold">{badge}</div>
        </div>
      )}
      <div class="bg-surface border border-subtle rounded-lg p-4">
        <div class="text-xs uppercase tracking-wider text-gray-500 mb-1">Trend</div>
        <div class="font-semibold font-mono">{trendArrow} {trendLabel}</div>
      </div>
    </section>

    {(progressDesc || progressCurrent) && (
      <section class="callout-note rounded-lg p-5 mb-10">
        <h2 class="font-serif text-xl font-semibold text-gray-900 dark:text-white mb-3">{t(lang, 'trackerDetailProgress')}</h2>
        {progressCurrent && progressTarget && (
          <p class="text-base text-gray-800 dark:text-gray-200 mb-2">
            <span class="font-mono font-bold">{progressCurrent}</span> / <span class="font-mono">{progressTarget}</span>
            {progressPct !== null && <span class="text-sm text-muted ml-2">({progressPct}%)</span>}
          </p>
        )}
        {progressPct !== null && (
          <div class="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded mb-3 overflow-hidden">
            <div class="h-full bg-blue-500" style={`width: ${Math.min(100, Math.max(0, progressPct))}%`} />
          </div>
        )}
        {progressDesc && <p class="text-sm text-gray-700 dark:text-gray-300 m-0">{progressDesc}</p>}
      </section>
    )}

    <section class="mb-10">
      <h2 class="font-serif text-xl font-semibold text-gray-900 dark:text-white mb-4">{t(lang, 'trackerDetailRankings')}</h2>
      <ul class="space-y-2">
        {dim.rankingAnchors.map((r) => {
          const src = pickLocalized<string>(r, 'source', lang) ?? r.source;
          const rk = pickLocalized<string>(r, 'rank', lang) ?? r.rank;
          return (
            <li class="text-sm text-gray-800 dark:text-gray-200">
              <a href={r.url} target="_blank" rel="noopener" class="text-blue-600 dark:text-blue-400 hover:underline">
                {src}
              </a>
              <span class="text-muted"> · </span>
              <span class="font-mono">{rk}</span>
            </li>
          );
        })}
      </ul>
    </section>

    <section class="mb-10">
      <h2 class="font-serif text-xl font-semibold text-gray-900 dark:text-white mb-3">{t(lang, 'trackerDetailJudgment')}</h2>
      <p class="text-base text-gray-800 dark:text-gray-200 leading-[1.85] m-0">{judgment}</p>
    </section>

    <section class="mb-10 callout-muted rounded-lg p-5">
      <h2 class="font-serif text-lg font-semibold text-gray-900 dark:text-white mb-2">⚠️ {t(lang, 'trackerDetailShortcoming')}</h2>
      <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed m-0">{shortcoming}</p>
    </section>

    <section class="mb-10">
      <h2 class="font-serif text-xl font-semibold text-gray-900 dark:text-white mb-4">{t(lang, 'trackerDetailMetrics')}</h2>
      <div class="overflow-x-auto">
        <table class="w-full text-sm border-collapse">
          <thead>
            <tr class="bg-slate-100 dark:bg-slate-800">
              {dim.id === 'adoption' && (
                <th class="text-left p-3 border border-subtle">{t(lang, 'trackerDetailMetricsHeaderCategory')}</th>
              )}
              <th class="text-left p-3 border border-subtle">{t(lang, 'trackerDetailMetricsHeaderName')}</th>
              <th class="text-left p-3 border border-subtle">{t(lang, 'trackerDetailMetricsHeaderValue')}</th>
              <th class="text-left p-3 border border-subtle">{t(lang, 'trackerDetailMetricsHeaderSource')}</th>
            </tr>
          </thead>
          <tbody>
            {dim.metrics.map((row) => {
              const name = pickLocalized<string>(row, 'name', lang) ?? row.name;
              const value = pickLocalized<string>(row, 'value', lang) ?? row.value;
              const src = pickLocalized<string>(row, 'source', lang) ?? row.source;
              const cat = pickLocalized<string>(row, 'category', lang) ?? row.category ?? '';
              return (
                <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  {dim.id === 'adoption' && (
                    <td class="p-3 border border-subtle text-xs whitespace-nowrap">
                      {cat === '政府自用' || cat === 'Government Adoption'
                        ? t(lang, 'trackerCategoryGovernment')
                        : t(lang, 'trackerCategoryEnterprise')}
                    </td>
                  )}
                  <td class="p-3 border border-subtle">{name}</td>
                  <td class="p-3 border border-subtle font-semibold">{value}</td>
                  <td class="p-3 border border-subtle text-muted">
                    {row.sourceUrl ? (
                      <a href={row.sourceUrl} target="_blank" rel="noopener" class="text-blue-600 dark:text-blue-400 hover:underline">
                        {src} ↗
                      </a>
                    ) : (
                      src
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>

    <nav class="mt-12 pt-6 border-t border-subtle">
      <a href={dashboardHref} class="text-sm text-primary hover:text-secondary font-medium inline-flex items-center gap-1">
        <Icon name="tabler:arrow-left" class="w-4 h-4" />
        {t(lang, 'trackerBackToDashboard')}
      </a>
    </nav>
  </article>
</Layout>
```

- [ ] **Step 2: 验证**

Run: `npm run check`
Expected: PASS。

Run: `npm run dev`，访问 `http://localhost:4321/tracker/investment/`、`/tracker/governance/`（qualitative 卡）、`/tracker/adoption/`（带 category 列），确认：
- Hero、headline/benchmark/trend 三块、progress、rankings、judgment、shortcoming、metrics 表都正确渲染
- adoption 详情页 metrics 表第一列是分组（"企业采用" / "政府自用"）

按 `Ctrl+C` 停。

- [ ] **Step 3: 提交**

```bash
git add src/pages/tracker/[dim].astro
git commit -m "feat(tracker): add dimension detail page (dynamic route)

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 13: 写 /tracker/methodology.astro 方法论页

**Files:**
- Create: `src/pages/tracker/methodology.astro`

- [ ] **Step 1: 写方法论页（中文文案直接内嵌）**

```astro
---
import Layout from '~/layouts/PageLayout.astro';
import { getLangFromPath, localizedHref, t, type Lang } from '~/i18n';

const lang: Lang = getLangFromPath(new URL(Astro.url).pathname);
const dashboardHref = localizedHref('/tracker/', lang);

const metadata = {
  title: `${t(lang, 'trackerMethodologyTitle')} · ${t(lang, 'trackerPageTitle')}`,
  description: lang === 'en'
    ? 'How the dashboard is built — what we present, what we don’t, and why we don’t assign overall grades.'
    : '我们怎么做仪表盘——呈现什么、不呈现什么、为什么不打总评分。',
};
---

<Layout
  metadata={metadata}
  breadcrumbs={[
    { label: t(lang, 'trackerPageTitle'), href: dashboardHref },
    { label: t(lang, 'trackerMethodologyTitle') },
  ]}
>
  <article class="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16 prose dark:prose-invert">
    <h1>{t(lang, 'trackerMethodologyTitle')}</h1>

    {lang === 'en' ? (
      <>
        <h2>What we do</h2>
        <p>
          The Singapore AI Observatory Dashboard <strong>presents</strong> the actual state of Singapore’s AI — using
          headline numbers, third-party rankings, target progress, and trends, plus our editorial team’s interpretation of
          each dimension.
        </p>
        <p><strong>We do not assign grades.</strong></p>

        <h2>Why no grades</h2>
        <ul>
          <li>sgai is an observatory, not a rating agency. Compressing multi-dimensional reality into a single grade discards the most valuable tensions (strong investment vs. weak frontier research; strong governance vs. weak enforcement).</li>
          <li>Grades make readers stop thinking — “oh, A-, fine” — instead of clicking through. The dashboard exists to make people <strong>read the numbers and the analysis</strong> and reach their own conclusions.</li>
          <li>The most respected international observatories (CSIS, Stanford AI Index, Tortoise) don’t assign overall grades either. They list sub-scores and qualitative analysis. There’s a reason for that.</li>
        </ul>

        <h2>What each dimension shows</h2>
        <p>Each card has 5 data elements + 2 editorial paragraphs:</p>
        <h3>Data</h3>
        <ol>
          <li><strong>Headline</strong> — the 1–2 numbers that should be seen first</li>
          <li><strong>Benchmark</strong> — what we’re compared against</li>
          <li><strong>Target progress</strong> (if applicable) — vs. published government targets</li>
          <li><strong>Third-party ranking anchors</strong> — Tortoise / Oxford / WIPO / Stanford / Microsoft</li>
          <li><strong>Trend</strong> (↗ → ↘)</li>
        </ol>
        <h3>Editorial</h3>
        <ul>
          <li><strong>Interpretation</strong> (50–80 words; longer for qualitative cards): what these numbers mean — <em>not</em> “why grade A”</li>
          <li><strong>Key shortcoming</strong> (20–60 words): the blind spot, risk, or structural problem the public data doesn’t state</li>
        </ul>

        <h2>Third-party rankings we cite</h2>
        <ul>
          <li><strong>Tortoise Global AI Index</strong> — overall (investment + implementation + innovation)</li>
          <li><strong>Oxford Government AI Readiness Index</strong> — government readiness</li>
          <li><strong>Microsoft AI Economy Institute</strong> — enterprise AI adoption</li>
          <li><strong>Stanford AI Index</strong> — investment + academic output</li>
          <li><strong>WIPO Global Innovation Index</strong> — innovation ecosystem</li>
          <li><strong>CSRankings / QS</strong> — academic research</li>
        </ul>

        <h2>Government targets we cite</h2>
        <ul>
          <li>NAIS 2.0: 15,000 AI professionals by 2029</li>
          <li>NAIIP: 10,000 firms + 100,000 workers (2026–2029)</li>
          <li>GovTech Pair: 150,000 civil servants</li>
          <li>Public AI R&amp;D 2026–2030: S$1B+</li>
          <li>Smart Nation 2.0: S$270M next-gen supercomputer (online by end of 2025)</li>
        </ul>

        <h2>Update cadence</h2>
        <ul>
          <li><strong>Regular</strong>: quarterly review (every 3 months)</li>
          <li><strong>Triggered</strong>: Budget releases, major policy announcements, annual ranking updates</li>
          <li>Each review’s number and interpretation changes are logged below</li>
        </ul>

        <h2>About sgai editorial</h2>
        <p>
          The dashboard is maintained by the sgai (Singapore AI Observatory) editorial team @meltflake. We are <strong>not a neutral third party</strong> — we are an opinionated observatory:
        </p>
        <ul>
          <li><strong>No government or corporate funding</strong> — choice of metrics and interpretations is independent of money</li>
          <li><strong>Our position shows in what we choose to track and how we interpret it</strong>, not in any grade</li>
          <li><strong>Sources are public</strong> — every metric, ranking anchor, and government target links to its origin</li>
          <li><strong>We acknowledge limits</strong> — public data may diverge from internal corporate or government reality</li>
          <li><strong>Challenges welcome</strong> — outdated numbers, biased interpretations, better metrics: file an issue or email us</li>
        </ul>

        <h2>Changelog</h2>
        <ul>
          <li>2026-05-02 · v1.0 dashboard launch — 6 dimensions with initial data + interpretation</li>
        </ul>
      </>
    ) : (
      <>
        <h2>我们做什么</h2>
        <p>
          新加坡 AI 观察仪表盘<strong>呈现</strong>新加坡 AI 的真实状态——用数字、第三方排名、目标进度、趋势，加上 sgai 编辑团队对每个维度的解读。
        </p>
        <p><strong>我们不打分。</strong></p>

        <h2>为什么不打分</h2>
        <ul>
          <li>sgai 是观察站，不是评级机构。打分是把多维事实压缩到单一刻度，会丢失最有价值的张力（强投入 vs 弱原创、强治理 vs 弱执法）</li>
          <li>评级让访客停止思考——看到 A- 就觉得"还行"，不再点进去看依据。仪表盘的价值在于让访客<strong>点进去看数字、看解读、自己得结论</strong></li>
          <li>国际上做得最严肃的观察机构（CSIS、Stanford AI Index、Tortoise）都不打总评分，只列子项 + 文字分析</li>
        </ul>

        <h2>每个维度呈现什么</h2>
        <p>每张卡由 5 个数据元素 + 2 段编辑文字组成：</p>
        <h3>数据元素</h3>
        <ol>
          <li><strong>核心数字</strong>——这维度最该被看到的 1–2 个数字</li>
          <li><strong>参照系</strong>——和谁比、差多少、领先多少</li>
          <li><strong>目标进度</strong>（如适用）——vs 政府发布的明确目标（15K AI 专才 by 2029、150K 公务员 Pair、10K 企业 NAIIP）</li>
          <li><strong>第三方排名锚</strong>——Tortoise / Oxford / WIPO / Stanford / Microsoft 等已有的国际排名</li>
          <li><strong>趋势箭头</strong>（↗ → ↘）</li>
        </ol>
        <h3>编辑文字</h3>
        <ul>
          <li><strong>解读</strong>（50–80 字，治理卡因数字少所以更长）：这些数字代表什么状态、值得关注什么。<strong>不是</strong>"为什么是 A"，而是"这意味着什么"</li>
          <li><strong>关键短板</strong>（20–60 字）：公开数据没说的盲点 / 风险 / 结构性问题</li>
        </ul>

        <h2>我们引用的第三方排名</h2>
        <ul>
          <li><strong>Tortoise Global AI Index</strong> — 综合实力（投资 + 实施 + 创新）</li>
          <li><strong>Oxford Government AI Readiness Index</strong> — 政府就绪度</li>
          <li><strong>Microsoft AI Economy Institute</strong> — 企业 AI 采用率</li>
          <li><strong>Stanford AI Index</strong> — 投资 + 学术产出</li>
          <li><strong>WIPO Global Innovation Index</strong> — 创新生态</li>
          <li><strong>CSRankings / QS</strong> — 学术研究</li>
        </ul>

        <h2>我们引用的政府目标</h2>
        <ul>
          <li>NAIS 2.0：15,000 AI 专才 by 2029</li>
          <li>NAIIP：10,000 企业 + 100,000 工人（2026–2029）</li>
          <li>GovTech Pair：150,000 公务员</li>
          <li>公共 AI 研究 2026–2030：S$1B+</li>
          <li>Smart Nation 2.0：S$270M 下一代超算（2025 年底投运）</li>
        </ul>

        <h2>复评节奏</h2>
        <ul>
          <li><strong>常规</strong>：季度复评（每 3 个月）</li>
          <li><strong>触发</strong>：Budget、重大政策发布、年度排名更新（Tortoise / Oxford 等）</li>
          <li>每次复评的数字和解读变更记在本页底部 changelog</li>
        </ul>

        <h2>关于 sgai 编辑</h2>
        <p>
          仪表盘由 sgai（Singapore AI Observatory）编辑团队 @meltflake 维护。我们<strong>不是中立第三方</strong>，是有立场的观察站：
        </p>
        <ul>
          <li><strong>不接受任何政府或企业资助</strong>——选指标和写解读独立于资金影响</li>
          <li><strong>立场体现在选哪些数字、怎么解读</strong>，不体现在打几分</li>
          <li><strong>公开依据</strong>——每张卡的数字源、第三方排名、政府目标都附 URL，可追溯</li>
          <li><strong>承认局限</strong>——我们读得到的是公开数据，企业内部和政府内部的实际进度可能与公开值有差距</li>
          <li><strong>欢迎挑战</strong>——发现数字过期、解读偏差、有更好的指标，请发邮件 / 提 issue</li>
        </ul>

        <h2>Changelog</h2>
        <ul>
          <li>2026-05-02 · v1.0 仪表盘上线，6 维度初始数据 + 解读</li>
        </ul>
      </>
    )}
  </article>
</Layout>
```

- [ ] **Step 2: 验证**

Run: `npm run check`
Expected: PASS。

Run: `npm run dev`，访问 `http://localhost:4321/tracker/methodology/`，确认 zh 版渲染。

按 `Ctrl+C` 停。

- [ ] **Step 3: 提交**

```bash
git add src/pages/tracker/methodology.astro
git commit -m "feat(tracker): add methodology page (zh + en bilingual)

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Phase D · EN 翻译 + EN 页面（T14–T17）

### Task 14: 把 6 维度 + overallSummary 的 EN 字段全部填上

**Files:**
- Modify: `src/data/tracker.ts`

- [ ] **Step 1: 给 overallSummary 加 EN 字段**

```ts
export const overallSummary: OverallSummary = {
  oneLiner:
    '6 个维度看新加坡 AI：投入强、治理强、基建强；人才自给率低、原创研究偏少是结构性短板。数字和编辑解读各自呈现，访客自己判断。',
  oneLinerEn:
    'Six dimensions on Singapore AI: strong investment, governance, and infrastructure; low talent self-sufficiency and limited frontier research are structural weaknesses. Numbers and editorial interpretation are shown side by side — readers decide.',
  asOf: dataDate,
  topRankings: [/* 4 条已有 source/rank，保留原值；source/rank 是英文且无 CJK，无需 sourceEn / rankEn */],
  methodologyNote:
    '每个维度呈现核心数字 + 第三方排名 + 目标进度 + 趋势 + 编辑解读，不打总评分。',
  methodologyNoteEn:
    'Each dimension shows headline numbers + third-party rankings + target progress + trend + editorial interpretation — no overall grade.',
};
```

- [ ] **Step 2: 给 6 个维度加 EN 字段**

为每个 dimension 在已有 zh 字段旁加上对应 `*En` 字段。粘贴下面的完整 EN 翻译表，按 `id` 匹配填到对应位置。

**Dimension `investment`：**
```ts
titleEn: 'Investment Intensity',
oneLinerEn: 'Is the government willing to spend?',
headlineEn: 'S$139 per person',
benchmarkEn: 'vs US $33 / China $7 (per capita)',
progress: {
  description: '...原中文...',
  descriptionEn: 'Government AI commitments > S$2B (NAIS 2.0 + Public AI R&D 2026–2030 + ECI); Budget 2026 adds 400% tax incentive + S$1.5B FSDF',
},
judgmentEn:
  'S$139 per capita is 4.2× the US and 19× China. Budget 2026 adds S$70M Multimodal LLM, S$1.5B FSDF, and a 400% tax incentive on top of an existing S$2B base — pace is not slowing. RIE2030’s S$37B total backstops the next 5 years. Investment intensity sits in the global top tier.',
shortcomingEn:
  'Private sector co-investment ratio is low — government still drives most of the spend. Capital flows mostly to compute and large enterprises; SME-side subsidies underpenetrate. Disclosure conventions occasionally diverge year-over-year, so cross-year comparisons need care.',
```

**Dimension `talent`：**
```ts
titleEn: 'Talent Pipeline',
oneLinerEn: 'Are there enough people, and how self-sufficient is the supply?',
headlineEn: '5,000 / 15,000',
benchmarkEn: '33% of 2029 target (35% foreign)',
progress: {
  current: '5,000',
  currentEn: '5,000',
  target: '15,000 by 2029',
  targetEn: '15,000 by 2029',
  pct: 33,
  url: '...',
},
judgmentEn:
  'The pool is growing — 105K SkillsFuture enrolments, 21K TeSA placements, ~500–600 AIAP graduates over 22 cohorts — but 33% completion against the 15K target and a steady 35% foreign share point to a structural self-sufficiency gap. Tortoise Talent sits in the #6–8 range, well behind the US.',
shortcomingEn:
  'AIAP capacity is capped at ~60 apprentices per cohort. Top local AI PhDs leak to the US or industry. "AI Bilingual 100K" only launches H1 2026 (accounting/legal first) — outcomes unknown. Non-engineering AI roles (PM, design, sales) are undersupplied.',
```

**Dimension `compute`：**
```ts
titleEn: 'Compute Stack',
oneLinerEn: 'Can it run frontier models?',
headlineEn: '1.4 GW',
benchmarkEn: 'Data centre capacity + 70+ facilities + NSCC ASPIRE 2A+ at 20 PFLOPS',
progress: {
  description: '...',
  descriptionEn: '300MW additional capacity allocated + 80MW pilot 2026–2028 (incremental supply on the way, but power is the ceiling)',
},
judgmentEn:
  'NSCC ASPIRE 2A+ (H100, 20 PFLOPS) + commercial clusters (SMC up to 2,048 H100s) + Singtel GPU-as-a-Service + National Compute Grid + HTX NGINE B200 SuperPOD — full-stack coverage for enterprise, research, and government use. Tortoise ranks infrastructure #2 globally, behind only the US. The trend is flat (→) rather than up because power quotas are the ceiling.',
shortcomingEn:
  'The tension between data-centre power quotas and green-energy commitments will cap expansion over the next 5 years. Frontier chips (H100 / B200) remain import-dependent — geopolitical exposure exists. Domestic chip or custom-ASIC capability is absent. Regional rivals (Malaysia, Indonesia) are competing for capacity — Singapore’s "compute hub" status is not a given.',
```

**Dimension `adoption`：**
```ts
titleEn: 'Industry Adoption',
oneLinerEn: 'Are enterprises actually using AI?',
headlineEn: '62.5% large enterprises / 14.5% SMEs',
benchmarkEn: 'SME adoption tripled YoY (4.2% in 2023 → 14.5% in 2024)',
progress: {
  description: '...',
  descriptionEn: 'NAIIP target: 10K firms + 100K workers (2026–2029)',
  url: '...',
},
judgmentEn:
  'Large enterprises clear the bar — Microsoft puts Singapore #2 globally, with mature flagships like DBS. SME adoption at 14.5% is a real 3× YoY jump but absolute level is still low — broad penetration is 2–3 years out. Government use (Pair / AIBots / VICA) targets 150K civil servants; Note Buddy is in 5K clinicians; Punggol AV buses live; Changi holds the world’s first ISO/IEC 42001 certification — case studies are thick but disclosed penetration rates are limited.',
shortcomingEn:
  'SME 14.5% looks fast-growing but absolute level is low — broad-based AI usage takes another 2–3 years. Government use is mostly productivity tools; decision-grade AI is shallow. NAIIP funding sizing is not public — execution is hard to assess. Government-side public penetration data has targets but no tracked progress.',
```

> Adoption metrics 还需要为每条加 `categoryEn`（'Enterprise Adoption' / 'Government Adoption'）。

**Dimension `research`：**
```ts
titleEn: 'Research Quality',
oneLinerEn: 'Is original research coming out?',
headlineEn: 'Per-capita papers #1 globally',
benchmarkEn: 'NTU AI #3 (after MIT/CMU) · NUS AI #9',
progress: {
  description: '...',
  descriptionEn: 'SEA-LION v4 (11 languages, 4B–33B params) + 100E (100+ projects) + ICLR 2025 hosted',
},
judgmentEn:
  'Volume and university rankings are strong — per-capita papers #1, NTU AI #3, NUS #9, ICLR 2025 hosted, SEA-LION is one of the few non-US/UK/China foundation models at scale. But frontier-grade originality (FAIR / DeepMind tier) still trails by a step: first-author share at top venues, signature works with >1000 citations, market share of self-developed foundation models — all behind.',
shortcomingEn:
  'First-author share at top venues, citation counts, and self-developed foundation-model market share all trail by a step. Top PhD outflow is high. Research-to-industry transfer is strong for in-house enterprise use but weak as international export — no OpenAI / Anthropic-tier spinout. International visibility hinges on a small number of star professors.',
```

**Dimension `governance`：**
```ts
titleEn: 'Governance Influence',
oneLinerEn: 'Is Singapore writing the rules?',
badgeEn: 'Rule-maker',
judgmentEn:
  'Singapore Consensus on AI Safety signed by 11 countries (incl. US and China); ASEAN Guide on AI Governance adopted by all 10 ASEAN states (drafted under Singapore’s lead); AI Verify Foundation cited globally; REAIM co-hosted; ISESEA held twice — Singapore is a rule-maker, not a rule-taker, with influence well above its size. Full participation in Bletchley, Seoul, and Paris AI Safety Summits; MAS Project MindForge has 24 institutions + the four major cloud vendors; UN Independent International Scientific Panel includes Singapore.',
shortcomingEn:
  'Setting rules ≠ rules being enforced — AI Verify is widely adopted but enforcement-side influence is weak. As US-China AI governance fragments, Singapore’s "broker" position is hard to sustain — if either side demands picking a side, the room narrows fast. Governance-research investment (AISI at S$10M/year) is mismatched with influence scale — structurally underfunded.',
```

- [ ] **Step 3: 给 metrics 加 EN 字段（绝大多数旧字段已有 nameEn / valueEn / sourceEn，无需新增；adoption 维度的每条要加 categoryEn）**

对 `adoption.metrics` 中每条：
- 如果中文 `category` 是 `'企业采用'`，加 `categoryEn: 'Enterprise Adoption'`
- 如果中文 `category` 是 `'政府自用'`，加 `categoryEn: 'Government Adoption'`

- [ ] **Step 4: 验证**

Run: `npm run check`
Expected: PASS。

Run: `npm run build && node scripts/i18n-check.mjs`
Expected: 此时 EN 页面尚未建（Task 15+），i18n-check 应该报告"no EN files"或类似——等 Task 17 后再跑严格 check。如果 i18n-check 在没有 EN 页面时也报错，看错误内容判断是不是缺数据 EN 字段。

- [ ] **Step 5: 提交**

```bash
git add src/data/tracker.ts
git commit -m "feat(tracker): add English translations for all 6 dimensions + overallSummary

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 15: 写 EN 仪表盘首页 /en/tracker/index.astro

**Files:**
- Create: `src/pages/en/tracker/index.astro`

- [ ] **Step 1: EN 首页直接复用 zh 首页的逻辑（pickLocalized 自动处理 lang）**

EN 首页内容与 zh 完全一致——`getLangFromPath` 从 URL 推断 'en'，所有 `pickLocalized` 自动取 EN 字段，所有 `t(lang, ...)` 自动取 EN 字典。所以 EN 文件直接 import-and-re-render。最简单方法：

```astro
---
// src/pages/en/tracker/index.astro
// EN-locale entry. Same component as zh; lang resolved at runtime via URL.
import Layout from '~/layouts/PageLayout.astro';
import Headline from '~/components/ui/Headline.astro';
import DimensionCard from '~/components/data/DimensionCard.astro';
import { dimensions, overallSummary, dataDate } from '~/data/tracker';
import { getLangFromPath, localizedHref, pickLocalized, t, type Lang } from '~/i18n';

const lang: Lang = getLangFromPath(new URL(Astro.url).pathname);
const oneLiner = pickLocalized<string>(overallSummary, 'oneLiner', lang) ?? overallSummary.oneLiner;
const methodologyNote =
  pickLocalized<string>(overallSummary, 'methodologyNote', lang) ?? overallSummary.methodologyNote;
const methodologyHref = localizedHref('/tracker/methodology/', lang);
---

<Layout
  metadata={{
    title: t(lang, 'trackerPageTitle'),
    description: t(lang, 'trackerPageBlurb'),
  }}
  breadcrumbs={[{ label: t(lang, 'trackerPageTitle') }]}
>
  <section class="px-4 py-16 sm:px-6 mx-auto lg:px-8 max-w-6xl">
    <Headline title={`🇸🇬 ${t(lang, 'trackerPageTitle')}`} subtitle={`${t(lang, 'trackerLastUpdated')}: ${dataDate}`} />

    <div class="callout-note rounded-lg mb-10 leading-relaxed">
      <p class="text-base m-0">{oneLiner}</p>
    </div>

    <section class="mb-10">
      <h2 class="text-sm font-bold uppercase tracking-wide text-slate-500 mb-3">
        {t(lang, 'trackerSectionTopRankings')}
      </h2>
      <div class="flex flex-wrap gap-x-6 gap-y-2 text-sm">
        {
          overallSummary.topRankings.map((r) => {
            const src = pickLocalized<string>(r, 'source', lang) ?? r.source;
            const rk = pickLocalized<string>(r, 'rank', lang) ?? r.rank;
            return (
              <a href={r.url} target="_blank" rel="noopener" class="text-blue-600 dark:text-blue-400 hover:underline">
                {src} · <span class="font-mono">{rk}</span>
              </a>
            );
          })
        }
      </div>
    </section>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
      {dimensions.map((dim) => <DimensionCard dim={dim} />)}
    </div>

    <section class="text-sm text-muted">
      <p class="m-0">
        <strong>{t(lang, 'trackerSectionMethodologyNote')}:</strong> {methodologyNote}{' '}
        <a href={methodologyHref} class="text-blue-600 dark:text-blue-400 hover:underline">
          {t(lang, 'trackerSectionMethodology')} →
        </a>
      </p>
    </section>
  </section>
</Layout>
```

> 注意：`Headline` 的 subtitle 是 `${...} : ${...}` 用英文冒号空格而非中文：`${t(lang, 'trackerLastUpdated')}: ${dataDate}` —— EN 文件里所有标点都换成英文。

- [ ] **Step 2: 验证**

Run: `npm run check`
Expected: PASS。

Run: `npm run dev`，访问 `http://localhost:4321/en/tracker/`，确认所有 EN 文案渲染（无中文残留）。

- [ ] **Step 3: 提交**

```bash
git add src/pages/en/tracker/index.astro
git commit -m "feat(tracker): add English dashboard home page

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 16: 写 EN 详情页 /en/tracker/[dim].astro

**Files:**
- Create: `src/pages/en/tracker/[dim].astro`

- [ ] **Step 1: 完整复制 zh 版的 `src/pages/tracker/[dim].astro`，并把所有中文标点（如冒号 `：`、句号 `。`）换成英文（`:`、`.`）；其余通过 `pickLocalized` / `t(lang, ...)` 自动 EN 化**

具体替换：
- `${t(lang, 'trackerEditorialAttribution')} · ${t(lang, 'trackerLastUpdated')} ${dataDate}` 保持（无需中文标点）
- 检查所有 hard-coded 字符串（应该没有，全部走 `t()`）
- 文件其他部分逐字与 zh 版相同

- [ ] **Step 2: 验证**

Run: `npm run check`
Expected: PASS。

Run: `npm run dev`，访问 `http://localhost:4321/en/tracker/investment/`、`/en/tracker/governance/`、`/en/tracker/adoption/`，确认：
- 所有标签英文
- judgment / shortcoming / metrics 都是英文
- adoption 的 category 列显示 "Enterprise Adoption" / "Government Adoption"

- [ ] **Step 3: 提交**

```bash
git add src/pages/en/tracker/[dim].astro
git commit -m "feat(tracker): add English dimension detail page

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 17: 写 EN 方法论页 /en/tracker/methodology.astro

**Files:**
- Create: `src/pages/en/tracker/methodology.astro`

- [ ] **Step 1: 复制 `src/pages/tracker/methodology.astro` 文件全部内容到 EN 路径**

由于 zh 版本已经用 `lang === 'en'` 分支写了完整 EN 文案（Task 13），EN 页面只需相同内容即可——`getLangFromPath` 会推 'en'，渲染走 EN 分支。

```astro
---
// src/pages/en/tracker/methodology.astro
// EN locale; same component as zh, lang resolved from URL.
import Layout from '~/layouts/PageLayout.astro';
import { getLangFromPath, localizedHref, t, type Lang } from '~/i18n';

const lang: Lang = getLangFromPath(new URL(Astro.url).pathname);
const dashboardHref = localizedHref('/tracker/', lang);

const metadata = {
  title: `${t(lang, 'trackerMethodologyTitle')} · ${t(lang, 'trackerPageTitle')}`,
  description: lang === 'en'
    ? 'How the dashboard is built — what we present, what we don’t, and why we don’t assign overall grades.'
    : '我们怎么做仪表盘——呈现什么、不呈现什么、为什么不打总评分。',
};
---

<!-- Body identical to zh version; copy entire body from src/pages/tracker/methodology.astro -->
```

> 操作：把 `src/pages/tracker/methodology.astro` 全文复制到 `src/pages/en/tracker/methodology.astro`，**不**做内容改动——`lang === 'en'` 分支会渲染英文。

- [ ] **Step 2: 验证**

Run: `npm run check`
Expected: PASS。

Run: `npm run build && node scripts/i18n-check.mjs`
Expected: PASS（EN 页面无中文残留）。如失败，按报错位置修对应文案或补 `*En` 字段。

- [ ] **Step 3: 提交**

```bash
git add src/pages/en/tracker/methodology.astro
git commit -m "feat(tracker): add English methodology page

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Phase E · 首页摘要（T18）

### Task 18: 首页加"AI 仪表盘速览"模块（zh + en）

**Files:**
- Modify: `src/pages/index.astro`
- Modify: `src/pages/en/index.astro`

- [ ] **Step 1: 先看一下首页现有结构**

```bash
head -60 src/pages/index.astro
```

> 找到 hero 之后、博客列表之前的位置插入摘要模块。如果不确定，插在 hero 之后第一段功能板块之前。

- [ ] **Step 2: 在 src/pages/index.astro 合适位置插入摘要 section**

找到 `<Layout ...>` 内 hero 区域之后，加：

```astro
---
// （在 frontmatter 顶部 imports 中加）
import { dimensions, dataDate as trackerDataDate } from '~/data/tracker';
import { localizedHref as lhTracker, t as tTracker, type Lang as LangT } from '~/i18n';
// 注意：如果 frontmatter 中已 import { localizedHref, t, type Lang }，复用即可，不要重复 import
---

{/* 在 hero 后某个合适位置插入： */}
<section class="px-4 py-10 sm:px-6 mx-auto lg:px-8 max-w-6xl">
  <div class="callout-note rounded-lg p-6">
    <h2 class="text-xl font-bold mb-3 m-0">{t(lang, 'trackerHomeSummaryTitle')}</h2>
    <p class="text-sm text-muted mb-3">
      {t(lang, 'trackerLastUpdated')}: {trackerDataDate}
    </p>
    <div class="flex flex-wrap gap-x-4 gap-y-1 text-sm font-mono mb-4">
      {dimensions.map((dim) => {
        const tt = (lang === 'en' ? dim.titleEn : dim.title) || dim.title;
        const arrow = dim.trend === 'up' ? '↗' : dim.trend === 'down' ? '↘' : '→';
        return <span><span class="text-slate-500">{dim.icon}</span> {tt} <span class="text-slate-400">{arrow}</span></span>;
      })}
    </div>
    <a href={localizedHref('/tracker/', lang)} class="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
      {t(lang, 'trackerHomeSummaryCta')} →
    </a>
  </div>
</section>
```

> 在 `src/pages/index.astro` 顶部 frontmatter 中已有 `lang` / `t` / `localizedHref`，直接复用。如果首页是 zh-only 不分 lang，先 `const lang: Lang = getLangFromPath(new URL(Astro.url).pathname);`。

- [ ] **Step 3: 同样的 section 插入到 src/pages/en/index.astro**

EN 首页：找到 hero 之后相同位置，插入完全一样的 JSX。`getLangFromPath` 会从 URL 推 'en'，自动渲染英文版。

- [ ] **Step 4: 验证**

Run: `npm run check`
Expected: PASS。

Run: `npm run dev`，访问 `http://localhost:4321/`、`/en/`，确认摘要模块出现，6 个维度图标 + 标题 + 趋势箭头一行展示。

- [ ] **Step 5: 提交**

```bash
git add src/pages/index.astro src/pages/en/index.astro
git commit -m "feat(home): add tracker dashboard summary module on home pages

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Phase F · 最终验收（T19）

### Task 19: bump version、跑全套 check、最终验收

**Files:**
- Modify: `src/version.ts`

- [ ] **Step 1: bump version**

读 `src/version.ts`：

```bash
cat src/version.ts
```

把 `SITE_VERSION` 按现有规则提小版本号（如 `0.5.x` → `0.6.0`，本次是 feature 级），`SITE_UPDATED` 改为 `2026-05-02`。

- [ ] **Step 2: 跑完整 check + i18n-check + build**

```bash
npm run check && npm run build && node scripts/i18n-check.mjs
```

Expected: 全部 PASS。如果 i18n-check 失败，看具体报告——通常是某个 EN 页面有中文残留，回到对应数据/页面文件修。

- [ ] **Step 3: 手动巡检（dev server）**

```bash
npm run dev
```

访问并验证：
- `/tracker/` — 卡片墙 + 4 条国际参照 + 一句话综述
- `/tracker/investment/`、`/tracker/talent/`、`/tracker/compute/`、`/tracker/adoption/`、`/tracker/research/`、`/tracker/governance/` 6 个详情页
- `/tracker/methodology/` — 方法论中文版
- `/en/tracker/`、`/en/tracker/investment/`、`/en/tracker/methodology/` — EN 版无中文残留
- `/`、`/en/` — 首页摘要模块工作
- 头部导航 "AI 仪表盘" / "AI Dashboard" 显示正确

- [ ] **Step 4: 提交**

```bash
git add src/version.ts
git commit -m "chore: bump version for tracker dashboard launch

- Replace static metrics table with 6-dimension observation dashboard
- Hero with overall summary + 4 international ranking anchors
- 6 dimension detail pages (zh + en)
- Methodology page explaining no-grading rationale
- Home page dashboard summary module
- Editorial interpretation + key shortcomings, no overall grades

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Self-Review

**1. Spec 覆盖检查**：
- §一 定位：T11 + T13 实现
- §二 呈现方法（不评级）：schema 无 `grade` 字段（T1）；卡片仅显示数字 + 解读（T10）；methodology 解释为什么不打分（T13/T17）✓
- §三 信息架构（路由 + 文件）：全部 17 个文件由 T1–T18 创建/修改 ✓
- §四 数据模型：T1 ✓
- §五 Hero：T8（数据）+ T11/T15（页面）✓
- §六 6 维度卡片文案：T2–T7 + T14（EN）✓
- §七 详情页结构：T12（zh）+ T16（en）✓
- §八 metrics 归类：T2–T7 在每个维度的 step 中描述了具体来源行 ✓
- §九 Methodology 文案：T13 中英文都内嵌 ✓
- §十 首页摘要：T18 ✓
- §十一 i18n：T9（字典）+ T14（数据 EN）+ T15–T17（EN 页面）✓
- §十二 导航命名：T9 改 navTracker ✓
- §十三 不做的事：plan 不包含 sparkline / 雷达图 / RSS / 评级 ✓
- §十四 MVP 边界：plan 完整覆盖 8 项 MVP ✓
- §十五 验收标准：T19 ✓

**2. Placeholder 扫描**：
- T2–T7 中 `metrics` 数组用 "原文照抄"指令 + 引用旧 tracker.ts 行号——这是有效迁移指令（agent 通过 git history 读到原文件），不是 TBD
- 没有 "TODO" / "TBD" / "implement later" / "fill in details"

**3. 类型一致性**：
- `Dimension` = `QuantifiedDimension | QualitativeDimension`（T1）—— T2–T7 每个维度都明确 `kind` 字段并使用对应字段集合 ✓
- `MetricRow.category` 是 optional，仅 adoption 维度填充（T5）；详情页（T12/T16）以 `dim.id === 'adoption'` 为条件渲染 category 列 ✓
- `pickLocalized` 全部用 shape A `(record, baseKey, lang)` 调用 ✓
- `localizedHref` 总是配 `getLangFromPath` 推断 lang ✓

---

**Plan complete and saved to `docs/superpowers/plans/2026-05-02-tracker-dashboard.md`. Two execution options:**

**1. Subagent-Driven (recommended)** — fresh subagent per task with two-stage review between tasks
**2. Inline Execution** — execute tasks in this session with checkpoints

**Which approach?**
