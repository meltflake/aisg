// src/data/tracker.ts
//
// Singapore AI Observatory dashboard — 6-dimension view of Singapore's AI reality.
// No grading. Each dimension has: headline number + third-party ranking anchors +
// target progress + trend + editorial interpretation + key shortcoming + metrics table.
//
// Design doc: docs/20260502-tracker-dashboard-design.md

export type Trend = 'up' | 'flat' | 'down'; // visual: ↗ → ↘
export type DimensionId = 'investment' | 'talent' | 'compute' | 'adoption' | 'research' | 'governance';

/**
 * External evidence anchor for a dimension.
 * Despite the name, not strictly a "ranking" — it covers any authoritative
 * external signal: third-party rankings (Tortoise / Oxford / WIPO / Stanford),
 * policy facts (Budget 2026 line items), signed international agreements
 * (Singapore Consensus / ASEAN Guide), etc. The `rank` field carries the
 * concrete claim (e.g. "#3", "11 countries signed", "400% tax deduction").
 */
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
  /** 0–100; when present, UI renders a progress bar. Caller must clamp. */
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
  /** Sub-group label (used by adoption dimension to split "enterprise adoption" vs "government use") */
  category?: string;
  categoryEn?: string;
}

export interface DimensionBase {
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

// TODO(Task 8): fill oneLiner / oneLinerEn / topRankings / methodologyNote / methodologyNoteEn
export const overallSummary: OverallSummary = {
  oneLiner: '',
  asOf: dataDate,
  topRankings: [],
  methodologyNote: '',
};

export const dimensions: Dimension[] = [
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
      description:
        '政府 AI 专项 > S$2B（NAIS 2.0 + 公共 AI 研究 2026–2030 + ECI）；Budget 2026 加码（400% 税收激励、S$1.5B FSDF）',
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
      {
        name: '政府 AI 专项投入',
        nameEn: 'Government AI commitments',
        value: '> S$2B（NAIS 2.0 S$1B+ / 公共 AI 研究 2026-2030 S$1B+ / 企业计算 S$150M）',
        valueEn: '> S$2B (NAIS 2.0 S$1B+ / public AI research 2026-2030 S$1B+ / Enterprise Compute S$150M)',
        source: 'Budget 2024 / MDDI / Reuters, 2024-2026',
        sourceEn: 'Budget 2024 / MDDI / Reuters, 2024-2026',
        sourceUrl:
          'https://www.singaporebudget.gov.sg/budget-speech/budget-statement/c-harness-ai-as-a-strategic-advantage',
      },
      {
        name: '公共 AI 研究投资 (2026-2030)',
        nameEn: 'Public AI R&D investment (2026-2030)',
        value: '> S$1B（7.79 亿美元）',
        valueEn: '> S$1B (US$779M)',
        source: 'MDDI, 2026.1.24',
        sourceEn: 'MDDI, 2026-01-24',
        sourceUrl:
          'https://www.mddi.gov.sg/newsroom/singapore-invests-over-s-1-billion-in-national-ai-research-and-development-plan-to-strengthen-ai-research-capabilities-and-our-position-as-global-ai-hub/',
      },
      {
        name: '人均 AI 投资（政府）',
        nameEn: 'Government AI spend per capita',
        value: 'S$139/人（vs 美国 $33、中国 $7）',
        valueEn: 'S$139 per person (vs US $33, China $7)',
        source: 'Stanford AI Index 2025 + 人口数据估算',
        sourceEn: 'Stanford AI Index 2025 + population estimates',
        sourceUrl: 'https://hai.stanford.edu/ai-index/2025-ai-index-report/economy',
      },
      {
        name: 'AI 计算专项',
        nameEn: 'AI compute allocation',
        value: 'S$500M（高性能计算）',
        valueEn: 'S$500M (high-performance computing)',
        source: 'Budget 2024',
        sourceEn: 'Budget 2024',
        sourceUrl: 'https://www.singaporebudget.gov.sg/',
      },
      {
        name: '下一代超算投资',
        nameEn: 'Next-generation supercomputer',
        value: 'S$270M（经典+量子混合，2025 年底投运）',
        valueEn: 'S$270M (classical + quantum hybrid, online by end of 2025)',
        source: 'Smart Nation 2.0, 2024.10',
        sourceEn: 'Smart Nation 2.0, 2024-10',
        sourceUrl: 'https://www.smartnation.gov.sg/',
      },
      {
        name: 'AI 科学计划',
        nameEn: 'AI for Science programme',
        value: 'S$120M',
        valueEn: 'S$120M',
        source: 'Smart Nation 2.0, 2024.10',
        sourceEn: 'Smart Nation 2.0, 2024-10',
        sourceUrl: 'https://www.smartnation.gov.sg/',
      },
      {
        name: 'RIE2030 研发总投入',
        nameEn: 'RIE2030 total R&D budget',
        value: 'S$37B（含 AI 相关，2026-2030）',
        valueEn: 'S$37B (incl. AI-related, 2026-2030)',
        source: 'NRF, 2025.12',
        sourceEn: 'NRF, 2025-12',
        sourceUrl: 'https://www.nrf.gov.sg/',
      },
      {
        name: 'AI Singapore 初始拨款',
        nameEn: 'AI Singapore seed funding',
        value: 'S$150M',
        valueEn: 'S$150M',
        source: 'NRF, 2017',
        sourceEn: 'NRF, 2017',
        sourceUrl: 'https://aisingapore.org/',
      },
      {
        name: '科技巨头基础设施承诺',
        nameEn: 'Big Tech infrastructure commitments',
        value: '~US$26B+（AWS $9B / Google $5B / Microsoft 等）',
        valueEn: '~US$26B+ (AWS $9B / Google $5B / Microsoft, et al.)',
        source: 'Introl 综合, 2025.8',
        sourceEn: 'Introl compilation, 2025-08',
        sourceUrl: 'https://www.edb.gov.sg/en/our-industries/artificial-intelligence-in-singapore.html',
      },
      {
        name: 'AI 创业融资总额',
        nameEn: 'AI startup funding (cumulative)',
        value: 'US$8.4B+（累计）',
        valueEn: 'US$8.4B+ (cumulative)',
        source: 'AiNewsHub, 2025',
        sourceEn: 'AiNewsHub, 2025',
        sourceUrl: 'https://www.techinasia.com/tag/artificial-intelligence-singapore',
      },
      {
        name: 'Budget 2026 AI 税收激励',
        nameEn: 'Budget 2026 AI tax incentive',
        value: '400% 税前扣除（上限 S$50K/年，YA2027-2028）',
        valueEn: '400% tax deduction (cap S$50K/year, YA2027-2028)',
        source: 'Budget 2026, 2026.2',
        sourceEn: 'Budget 2026, 2026-02',
        sourceUrl:
          'https://www.singaporebudget.gov.sg/budget-speech/budget-statement/c-harness-ai-as-a-strategic-advantage',
      },
      {
        name: 'Microsoft 数据中心投资',
        nameEn: 'Microsoft data centre investment',
        value: 'S$5.5B（2024-2028）',
        valueEn: 'S$5.5B (2024-2028)',
        source: 'EDB / Microsoft, 2024',
        sourceEn: 'EDB / Microsoft, 2024',
        sourceUrl:
          'https://news.microsoft.com/source/asia/2024/05/07/microsoft-announces-singapore-investment-and-skilling-initiatives/',
      },
      {
        name: 'AWS 数据中心投资',
        nameEn: 'AWS data centre investment',
        value: 'S$12B（2024-2028）',
        valueEn: 'S$12B (2024-2028)',
        source: 'EDB / AWS, 2024',
        sourceEn: 'EDB / AWS, 2024',
        sourceUrl: 'https://www.aboutamazon.com/news/aws/aws-singapore-12-billion-investment',
      },
      {
        name: 'Google 数据中心 + AI 投资',
        nameEn: 'Google data centre + AI investment',
        value: 'US$9B / ~S$11.6B + DeepMind 实验室',
        valueEn: 'US$9B / ~S$11.6B + DeepMind lab',
        source: 'Google / EDB, 2026',
        sourceEn: 'Google / EDB, 2026',
        sourceUrl: 'https://www.edb.gov.sg/en/our-industries/artificial-intelligence-in-singapore.html',
      },
      {
        name: 'Enterprise Compute Initiative (ECI)',
        nameEn: 'Enterprise Compute Initiative (ECI)',
        value: 'S$150M（企业算力补贴）',
        valueEn: 'S$150M (enterprise compute subsidy)',
        source: 'IMDA, 2026.2',
        sourceEn: 'IMDA, 2026-02',
        sourceUrl: 'https://www.imda.gov.sg/',
      },
      {
        name: 'Anchor Fund @ 65 第二批',
        nameEn: 'Anchor Fund @ 65 (second tranche)',
        value: 'S$1.5B（IPO 锚定基金，2026）',
        valueEn: 'S$1.5B (IPO anchor fund, 2026)',
        source: 'Budget 2026, 2026.2',
        sourceEn: 'Budget 2026, 2026-02',
        sourceUrl: 'https://www.singaporebudget.gov.sg/',
      },
      {
        name: 'Future Sectors Development Fund (FSDF)',
        nameEn: 'Future Sectors Development Fund (FSDF)',
        value: 'S$1.5B（2026 启动）',
        valueEn: 'S$1.5B (launched 2026)',
        source: 'Budget 2026',
        sourceEn: 'Budget 2026',
        sourceUrl: 'https://www.singaporebudget.gov.sg/',
      },
      {
        name: 'EQDP 私募股权基金扩张',
        nameEn: 'EQDP private equity expansion',
        value: 'S$6.5B（2026）',
        valueEn: 'S$6.5B (2026)',
        source: 'Budget 2026',
        sourceEn: 'Budget 2026',
        sourceUrl: 'https://www.singaporebudget.gov.sg/',
      },
      {
        name: 'BCA BETC Grant',
        nameEn: 'BCA BETC Grant',
        value: 'S$100M（建造业数字基建，2025 起）',
        valueEn: 'S$100M (built environment digital infrastructure, from 2025)',
        source: 'BCA, 2025',
        sourceEn: 'BCA, 2025',
        sourceUrl: 'https://www.bca.gov.sg/',
      },
      {
        name: 'Built Environment AI CoE',
        nameEn: 'Built Environment AI CoE',
        value: 'S$30M（2024 起）',
        valueEn: 'S$30M (from 2024)',
        source: 'BCA / NUS / NTU, 2024',
        sourceEn: 'BCA / NUS / NTU, 2024',
        sourceUrl: 'https://www.bca.gov.sg/',
      },
      {
        name: 'NEA Weather Science Programme',
        nameEn: 'NEA Weather Science Programme',
        value: 'S$25M（2024 起）',
        valueEn: 'S$25M (from 2024)',
        source: 'NEA, 2024',
        sourceEn: 'NEA, 2024',
        sourceUrl: 'https://www.nea.gov.sg/',
      },
      {
        name: 'HTX 人形机器人中心 (H2RC)',
        nameEn: 'HTX Humanoid Robotics Centre (H2RC)',
        value: 'S$100M（2026 Q2 启动）',
        valueEn: 'S$100M (launching Q2 2026)',
        source: 'HTX, 2026',
        sourceEn: 'HTX, 2026',
        sourceUrl: 'https://www.htx.gov.sg/',
      },
      {
        name: 'National Multimodal LLM Programme',
        nameEn: 'National Multimodal LLM Programme',
        value: 'S$70M（A*STAR 主导）',
        valueEn: 'S$70M (led by A*STAR)',
        source: 'A*STAR / AISG',
        sourceEn: 'A*STAR / AISG',
        sourceUrl: 'https://www.a-star.edu.sg/',
      },
      {
        name: 'Singapore AI Safety Institute (AISI)',
        nameEn: 'Singapore AI Safety Institute (AISI)',
        value: 'S$10M/年（治理研究）',
        valueEn: 'S$10M/year (governance research)',
        source: 'IMDA / AISI, 2024',
        sourceEn: 'IMDA / AISI, 2024',
        sourceUrl: 'https://aiverifyfoundation.sg/',
      },
    ],
    relatedLeverNumbers: [1],
    relatedPolicyIds: [],
    relatedDebateIds: [],
    relatedPostSlugs: [],
  },
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
      {
        name: 'AI 专业人才目标',
        nameEn: 'AI professional headcount target',
        value: '2019 年 2,000 → 2023 年 5,000 → 2029 年目标 15,000（外籍占 35%）',
        valueEn: '2,000 (2019) → 5,000 (2023) → 15,000 target (2029, 35% foreign)',
        source: 'MDDI, 2026.1',
        sourceEn: 'MDDI, 2026-01',
        sourceUrl:
          'https://www.mddi.gov.sg/newsroom/singapore-invests-over-s-1-billion-in-national-ai-research-and-development-plan-to-strengthen-ai-research-capabilities-and-our-position-as-global-ai-hub/',
      },
      {
        name: 'SkillsFuture AI 培训',
        nameEn: 'SkillsFuture AI training',
        value: '105,000+ 人参加 1,600+ AI 课程（2025）',
        valueEn: '105,000+ enrolments across 1,600+ AI courses (2025)',
        source: 'SSG / Straits Times, 2026.2',
        sourceEn: 'SSG / Straits Times, 2026-02',
        sourceUrl: 'https://www.straitstimes.com/tags/artificial-intelligence',
      },
      {
        name: 'TeSA 科技人才安置',
        nameEn: 'TeSA tech jobs placed',
        value: '21,000+ 本地人就业（自 2016）',
        valueEn: '21,000+ locals placed (since 2016)',
        source: 'IMDA, 2025.8',
        sourceEn: 'IMDA, 2025-08',
        sourceUrl: 'https://www.imda.gov.sg/',
      },
      {
        name: 'TeSA 技能提升',
        nameEn: 'TeSA reskilling',
        value: '340,000+ 人（自 2016）',
        valueEn: '340,000+ people (since 2016)',
        source: 'IMDA, 2025.8',
        sourceEn: 'IMDA, 2025-08',
        sourceUrl: 'https://www.imda.gov.sg/',
      },
      {
        name: 'AIAP 学徒计划',
        nameEn: 'AIAP apprenticeship',
        value: '22 批完成，~500-600 毕业生，>90% 就业率，当前~60 人/批',
        valueEn: '22 cohorts completed, ~500-600 graduates, >90% placement, ~60 apprentices/cohort',
        source: 'AISG AIAP, 2026.2',
        sourceEn: 'AISG AIAP, 2026-02',
        sourceUrl: 'https://aiap.sg/apprenticeship/',
      },
      {
        name: 'Google AI 技能倡议',
        nameEn: 'Google AI skills initiative',
        value: '28,000 人（Skills Ignition SG）；目标 2027 年覆盖 50,000 学生',
        valueEn: '28,000 trained (Skills Ignition SG); target 50,000 students by 2027',
        source: 'Google for SG, 2026.2',
        sourceEn: 'Google for SG, 2026-02',
        sourceUrl: 'https://www.google.com/',
      },
      {
        name: '职场 AI 使用率',
        nameEn: 'Workplace AI usage',
        value: '3/4 工人定期使用 AI 工具，85% 认为提升效率',
        valueEn: '3 in 4 workers use AI tools regularly; 85% report productivity gains',
        source: 'IMDA SGDE Report, 2025',
        sourceEn: 'IMDA SGDE Report, 2025',
        sourceUrl: 'https://www.imda.gov.sg/',
      },
      {
        name: 'AI Springboard 企业计划',
        nameEn: 'AI Springboard enterprise scheme',
        value: '300 家企业，每家最高 S$600K 补贴',
        valueEn: '300 firms, up to S$600K subsidy per firm',
        source: 'EDB, 2025 Q3',
        sourceEn: 'EDB, Q3 2025',
        sourceUrl: 'https://www.edb.gov.sg/en/our-industries/artificial-intelligence-in-singapore.html',
      },
      {
        name: 'NAIIP 国家 AI 影响计划',
        nameEn: 'NAIIP National AI Impact Programme',
        value: '10K 企业 + 100K 工人（2026-2029）',
        valueEn: '10K firms + 100K workers (2026-2029)',
        source: 'IMDA + ESG, 2026.2',
        sourceEn: 'IMDA + ESG, 2026-02',
        sourceUrl: 'https://www.imda.gov.sg/',
      },
      {
        name: 'AI Bilingual 100K 计划',
        nameEn: 'AI Bilingual 100K programme',
        value: '首批落地：会计 (ISCA) + 法律 (SAL/SCCA)，1H 2026 上线',
        valueEn: 'First waves: accounting (ISCA) + legal (SAL/SCCA), launching H1 2026',
        source: 'MDDI COS 2026',
        sourceEn: 'MDDI COS 2026',
        sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-2895',
      },
      {
        name: 'SkillsFuture AI 课程补贴',
        nameEn: 'SkillsFuture AI course subsidy',
        value: '50% / 70% 分层补贴 + Mid-Career S$4,000 Credit',
        valueEn: '50% / 70% tiered subsidy + Mid-Career S$4,000 Credit',
        source: 'SSG, 2026',
        sourceEn: 'SSG, 2026',
        sourceUrl: 'https://www.skillsfuture.gov.sg/',
      },
      {
        name: '100E Programme（AI Singapore）',
        nameEn: '100E Programme (AI Singapore)',
        value: '每项目 S$150K 共投，累计 100+ 完成',
        valueEn: 'S$150K co-investment per project, 100+ completed',
        source: 'AISG',
        sourceEn: 'AISG',
        sourceUrl: 'https://aisingapore.org/innovation/100e/',
      },
    ],
    relatedLeverNumbers: [3],
  },
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
      // 11 rows from old "基础设施" section
      {
        name: 'NSCC ASPIRE 2A+',
        nameEn: 'NSCC ASPIRE 2A+',
        value: 'NVIDIA H100 集群，20 PetaFLOPS',
        valueEn: 'NVIDIA H100 cluster, 20 PetaFLOPS',
        source: 'TechTIQ, 2025.12',
        sourceEn: 'TechTIQ, 2025-12',
        sourceUrl: 'https://www.smartnation.gov.sg/',
      },
      {
        name: '国家 AI 计算网格',
        nameEn: 'National AI Compute Grid',
        value: '已宣布，链接全国计算资源',
        valueEn: 'Announced, linking national compute resources',
        source: 'SuperAI / DataCenters.com, 2025',
        sourceEn: 'SuperAI / DataCenters.com, 2025',
        sourceUrl: 'https://www.smartnation.gov.sg/',
      },
      {
        name: '商用 GPU 集群',
        nameEn: 'Commercial GPU clusters',
        value: 'SMC 最高 2,048 张 H100/集群；Singtel GPU-as-a-Service',
        valueEn: 'SMC up to 2,048 H100s per cluster; Singtel GPU-as-a-Service',
        source: 'Introl, 2025.8',
        sourceEn: 'Introl, 2025-08',
        sourceUrl: 'https://www.imda.gov.sg/',
      },
      {
        name: 'NVIDIA 新加坡营收',
        nameEn: 'NVIDIA Singapore revenue',
        value: '占全球 15%（约 $2.7B/季度），人均 $600',
        valueEn: '15% of global revenue (~$2.7B/quarter), ~$600 per capita',
        source: 'Introl, 2025.8',
        sourceEn: 'Introl, 2025-08',
        sourceUrl: 'https://www.edb.gov.sg/en/our-industries/artificial-intelligence-in-singapore.html',
      },
      {
        name: '数据中心市场',
        nameEn: 'Data centre market',
        value: '$4.16B（2024），1.4GW 容量，70+ 设施',
        valueEn: '$4.16B (2024), 1.4GW capacity, 70+ facilities',
        source: 'Introl, 2025.8',
        sourceEn: 'Introl, 2025-08',
        sourceUrl: 'https://www.imda.gov.sg/',
      },
      {
        name: '新增数据中心容量',
        nameEn: 'New data centre capacity',
        value: '额外 300MW 已分配；80MW 试点（2026-2028）',
        valueEn: 'Additional 300MW allocated; 80MW pilot (2026-2028)',
        source: 'Reed Smith / Linklaters, 2025',
        sourceEn: 'Reed Smith / Linklaters, 2025',
        sourceUrl: 'https://www.imda.gov.sg/',
      },
      {
        name: '5G 覆盖',
        nameEn: '5G coverage',
        value: '95%+ 独立组网全国覆盖（2022.7 达成，提前 3 年）',
        valueEn: '95%+ standalone nationwide coverage (achieved 2022-07, 3 years ahead of schedule)',
        source: 'Singtel / CNA, 2022',
        sourceEn: 'Singtel / CNA, 2022',
        sourceUrl: 'https://www.imda.gov.sg/',
      },
      {
        name: 'HTX NGINE — 家国安全算力',
        nameEn: 'HTX NGINE — homeland security compute',
        value: 'NVIDIA B200 DGX SuperPOD（自有）',
        valueEn: 'NVIDIA B200 DGX SuperPOD (owned)',
        source: 'HTX',
        sourceEn: 'HTX',
        sourceUrl: 'https://www.htx.gov.sg/',
      },
      {
        name: 'Synapxe HEALIX',
        nameEn: 'Synapxe HEALIX',
        value: '国家医疗数据 + AI 基础设施',
        valueEn: 'National healthcare data + AI infrastructure',
        source: 'Synapxe',
        sourceEn: 'Synapxe',
        sourceUrl: 'https://www.synapxe.sg/',
      },
      {
        name: 'URA Virtual Singapore',
        nameEn: 'URA Virtual Singapore',
        value: '国家级数字孪生 + ePlanner 3D + Smart Planning Assistant',
        valueEn: 'National digital twin + ePlanner 3D + Smart Planning Assistant',
        source: 'URA',
        sourceEn: 'URA',
        sourceUrl: 'https://www.ura.gov.sg/',
      },
      {
        name: 'GovTech Agentspace',
        nameEn: 'GovTech Agentspace',
        value: '亚洲首例 air-gapped agentic AI（公共部门）',
        valueEn: "Asia's first air-gapped agentic AI (public sector)",
        source: 'GovTech',
        sourceEn: 'GovTech',
        sourceUrl: 'https://www.tech.gov.sg/',
      },
      // 3 data centre investment rows cross-listed from investment dimension
      {
        name: 'Microsoft 数据中心投资',
        nameEn: 'Microsoft data centre investment',
        value: 'S$5.5B（2024-2028）',
        valueEn: 'S$5.5B (2024-2028)',
        source: 'EDB / Microsoft, 2024',
        sourceEn: 'EDB / Microsoft, 2024',
        sourceUrl:
          'https://news.microsoft.com/source/asia/2024/05/07/microsoft-announces-singapore-investment-and-skilling-initiatives/',
      },
      {
        name: 'AWS 数据中心投资',
        nameEn: 'AWS data centre investment',
        value: 'S$12B（2024-2028）',
        valueEn: 'S$12B (2024-2028)',
        source: 'EDB / AWS, 2024',
        sourceEn: 'EDB / AWS, 2024',
        sourceUrl: 'https://www.aboutamazon.com/news/aws/aws-singapore-12-billion-investment',
      },
      {
        name: 'Google 数据中心 + AI 投资',
        nameEn: 'Google data centre + AI investment',
        value: 'US$9B / ~S$11.6B + DeepMind 实验室',
        valueEn: 'US$9B / ~S$11.6B + DeepMind lab',
        source: 'Google / EDB, 2026',
        sourceEn: 'Google / EDB, 2026',
        sourceUrl: 'https://www.edb.gov.sg/en/our-industries/artificial-intelligence-in-singapore.html',
      },
    ],
    relatedLeverNumbers: [1],
  },
];
