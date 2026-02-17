export interface TrackerRow {
  name: string;
  value: string;
  source: string;
  sourceUrl: string;
}

export interface TrackerSection {
  icon: string;
  title: string;
  rows: TrackerRow[];
}

export const dataDate = '2026-02-17';

export const sections: TrackerSection[] = [
  {
    icon: '💰',
    title: '投资与资金',
    rows: [
      { name: '政府 AI 专项投入', value: '> S$2B（NAIS 2.0 S$1B+ / NAIRD S$1B+ / 企业计算 S$150M）', source: 'Budget 2024 / MDDI / Reuters, 2024-2026', sourceUrl: 'https://www.singaporebudget.gov.sg/budget-speech/budget-statement/c-harness-ai-as-a-strategic-advantage' },
      { name: 'AI 计算专项', value: 'S$500M（高性能计算）', source: 'Budget 2024', sourceUrl: 'https://www.singaporebudget.gov.sg/' },
      { name: '下一代超算投资', value: 'S$270M（经典+量子混合，2025 年底投运）', source: 'Smart Nation 2.0, 2024.10', sourceUrl: 'https://www.smartnation.gov.sg/' },
      { name: 'AI 科学计划', value: 'S$120M', source: 'Smart Nation 2.0, 2024.10', sourceUrl: 'https://www.smartnation.gov.sg/' },
      { name: 'RIE2030 研发总投入', value: 'S$37B（含 AI 相关，2026-2030）', source: 'NRF, 2025.12', sourceUrl: 'https://www.nrf.gov.sg/' },
      { name: 'AI Singapore 初始拨款', value: 'S$150M', source: 'NRF, 2017', sourceUrl: 'https://aisingapore.org/' },
      { name: '科技巨头基础设施承诺', value: '~US$26B+（AWS $9B / Google $5B / Microsoft 等）', source: 'Introl 综合, 2025.8', sourceUrl: 'https://www.edb.gov.sg/en/our-industries/artificial-intelligence-in-singapore.html' },
      { name: 'AI 创业融资总额', value: 'US$8.4B+（累计）', source: 'AiNewsHub, 2025', sourceUrl: 'https://www.techinasia.com/tag/artificial-intelligence-singapore' },
      { name: 'Budget 2026 AI 税收激励', value: '400% 税前扣除（上限 S$50K/年，YA2027-2028）', source: 'Budget 2026, 2026.2', sourceUrl: 'https://www.singaporebudget.gov.sg/budget-speech/budget-statement/c-harness-ai-as-a-strategic-advantage' },
    ],
  },
  {
    icon: '👩\u200d💻',
    title: '人才培养',
    rows: [
      { name: 'SkillsFuture AI 培训', value: '105,000+ 人参加 1,600+ AI 课程（2025）', source: 'SSG / Straits Times, 2026.2', sourceUrl: 'https://www.straitstimes.com/tags/artificial-intelligence' },
      { name: 'TeSA 科技人才安置', value: '21,000+ 本地人就业（自 2016）', source: 'IMDA, 2025.8', sourceUrl: 'https://www.imda.gov.sg/' },
      { name: 'TeSA 技能提升', value: '340,000+ 人（自 2016）', source: 'IMDA, 2025.8', sourceUrl: 'https://www.imda.gov.sg/' },
      { name: 'AIAP 学徒计划', value: '22 批完成，~500-600 毕业生，>90% 就业率，当前~60 人/批', source: 'AISG AIAP, 2026.2', sourceUrl: 'https://aiap.sg/apprenticeship/' },
      { name: 'Google AI 技能倡议', value: '28,000 人（Skills Ignition SG）；目标 2027 年覆盖 50,000 学生', source: 'Google for SG, 2026.2', sourceUrl: 'https://www.google.com/' },
      { name: '职场 AI 使用率', value: '3/4 工人定期使用 AI 工具，85% 认为提升效率', source: 'IMDA SGDE Report, 2025', sourceUrl: 'https://www.imda.gov.sg/' },
      { name: 'AI Springboard 企业计划', value: '300 家企业，每家最高 S$600K 补贴', source: 'EDB, 2025 Q3', sourceUrl: 'https://www.edb.gov.sg/en/our-industries/artificial-intelligence-in-singapore.html' },
    ],
  },
  {
    icon: '🔬',
    title: '研究产出',
    rows: [
      { name: 'AI 论文人均发表量', value: '全球第 1（每百万人 250 篇，2022）', source: 'Wiley, 2024.9', sourceUrl: 'https://aiindex.stanford.edu/' },
      { name: 'NTU AI 研究排名', value: '全球第 3（仅次于 MIT、CMU）', source: 'Introl, 2025.8', sourceUrl: 'https://www.tortoisemedia.com/intelligence/global-ai/' },
      { name: 'NUS AI 学术声誉', value: '全球第 9', source: 'Introl, 2025.8', sourceUrl: 'https://oxfordinsights.com/ai-readiness/ai-readiness-index/' },
      { name: 'SEA-LION 大模型', value: 'v4，11+ 语言，4B-33B 参数', source: 'AISG, 2025', sourceUrl: 'https://sea-lion.ai/' },
      { name: '100 Experiments', value: '100+ AI 项目完成（2018-2025，已归档）', source: 'AISG', sourceUrl: 'https://aisingapore.org/' },
      { name: 'ICLR 2025', value: '在新加坡举办', source: 'ICLR, 2025', sourceUrl: 'https://iclr.cc/' },
      { name: 'DBS AI 模型', value: '800+ 模型，350+ 用例，2024 年创造 S$750M 经济价值', source: 'Introl, 2025.8', sourceUrl: 'https://www.mas.gov.sg/' },
    ],
  },
  {
    icon: '🏢',
    title: '产业采用',
    rows: [
      { name: '数字经济占 GDP', value: '18.6%（2024，2019 年为 14.9%）', source: 'IMDA SGDE Report, 2025.10', sourceUrl: 'https://www.imda.gov.sg/' },
      { name: '大企业 AI 采用率', value: '62.5%（2024）', source: 'IMDA SGDE Report, 2025.10', sourceUrl: 'https://www.imda.gov.sg/' },
      { name: '中小企业 AI 采用率', value: '14.5%（2024，较 2023 年 4.2% 增长 3 倍）', source: 'IMDA SGDE Report, 2025.10', sourceUrl: 'https://www.imda.gov.sg/' },
      { name: 'AI 创业公司', value: '650+（占东南亚深科技融资 91.1%）', source: 'Introl, 2025.8', sourceUrl: 'https://www.techinasia.com/tag/artificial-intelligence-singapore' },
      { name: '独角兽', value: '32 家（截至 2025.7）', source: 'Introl, 2025.8', sourceUrl: 'https://www.techinasia.com/tag/artificial-intelligence-singapore' },
      { name: '东盟 AI 交易份额', value: '58% 交易量，68% 交易金额（2024 前 9 个月）', source: 'Introl, 2025.8', sourceUrl: 'https://www.techinasia.com/tag/artificial-intelligence-singapore' },
      { name: '企业 AI 培训意愿', value: '超过 2/3 使用 AI 的企业计划优先投资员工培训', source: 'IMDA, 2025.8', sourceUrl: 'https://www.imda.gov.sg/' },
    ],
  },
  {
    icon: '🖥️',
    title: '基础设施',
    rows: [
      { name: 'NSCC ASPIRE 2A+', value: 'NVIDIA H100 集群，20 PetaFLOPS', source: 'TechTIQ, 2025.12', sourceUrl: 'https://www.smartnation.gov.sg/' },
      { name: '国家 AI 计算网格', value: '已宣布，链接全国计算资源', source: 'SuperAI / DataCenters.com, 2025', sourceUrl: 'https://www.smartnation.gov.sg/' },
      { name: '商用 GPU 集群', value: 'SMC 最高 2,048 张 H100/集群；Singtel GPU-as-a-Service', source: 'Introl, 2025.8', sourceUrl: 'https://www.imda.gov.sg/' },
      { name: 'NVIDIA 新加坡营收', value: '占全球 15%（约 $2.7B/季度），人均 $600', source: 'Introl, 2025.8', sourceUrl: 'https://www.edb.gov.sg/en/our-industries/artificial-intelligence-in-singapore.html' },
      { name: '数据中心市场', value: '$4.16B（2024），1.4GW 容量，70+ 设施', source: 'Introl, 2025.8', sourceUrl: 'https://www.imda.gov.sg/' },
      { name: '新增数据中心容量', value: '额外 300MW 已分配；80MW 试点（2026-2028）', source: 'Reed Smith / Linklaters, 2025', sourceUrl: 'https://www.imda.gov.sg/' },
      { name: '5G 覆盖', value: '95%+ 独立组网全国覆盖（2022.7 达成，提前 3 年）', source: 'Singtel / CNA, 2022', sourceUrl: 'https://www.imda.gov.sg/' },
    ],
  },
  {
    icon: '🌍',
    title: '国际排名',
    rows: [
      { name: 'Tortoise 全球 AI 指数', value: '第 3 名（仅次于美国、中国）', source: 'Tortoise Media, 2024.9', sourceUrl: 'https://www.tortoisemedia.com/intelligence/global-ai/' },
      { name: 'Oxford 政府 AI 就绪度', value: '第 2 名（仅次于美国）', source: 'Oxford Insights, 2024.12', sourceUrl: 'https://oxfordinsights.com/ai-readiness/ai-readiness-index/' },
      { name: 'WIPO 全球创新指数', value: '第 5 名', source: 'WIPO, 2025', sourceUrl: 'https://www.wipo.int/' },
      { name: 'AI 基础设施子项', value: '第 2 名（仅次于美国）', source: 'Tortoise, 2024', sourceUrl: 'https://www.tortoisemedia.com/intelligence/global-ai/' },
      { name: '东南亚深科技融资份额', value: '91.1%', source: 'Introl, 2025.8', sourceUrl: 'https://www.techinasia.com/tag/artificial-intelligence-singapore' },
    ],
  },
];
