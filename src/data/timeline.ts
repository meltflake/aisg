export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  tags?: string[];
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: 2027,
    title: '新加坡主办国际 AI 奥林匹克竞赛',
    description: '新加坡将首次举办 International Olympiad in AI (IOAI)，将全球 AI 青年人才汇聚狮城，展现新加坡在 AI 教育和人才培养领域的国际领导力。',
    tags: ['人才', '国际'],
  },
  {
    year: 2026,
    title: 'NAIRD 发布 + 财政预算：AI 全面加速',
    description: '1 月：MDDI 宣布 2026-2030 公共 AI 研究投资计划，投资超 10 亿新元（7.79 亿美元）用于公共 AI 研究，聚焦负责任和资源高效的 AI、全链条人才培养、产业应用。同月举办 AI Research Week 2026，与 AAAI 第 40 届会议同期。Microsoft AI Economy Institute 报告显示新加坡 AI 采用率 60.9%，全球第二（仅次于 UAE 64.0%），美国仅 28.3%。2 月：预算案将 AI 提升至空前高度，成立由总理亲自主持的 National AI Council；推出 4 项 AI Mission；Enterprise Innovation Scheme 400% AI 税务扣除；启动 one-north AI 园区建设；National AI Literacy Programme。',
    tags: ['预算', '战略', '国际'],
  },
  {
    year: 2025,
    title: 'Agentic AI 治理与科技巨头落地',
    description: '发布 Agentic AI 治理框架；推出 SEA-Guard 安全评估工具；Enterprise Compute 拨款 1.5 亿新元；AIAP for Industry 扩展至产业界。7 月 Microsoft Research Asia 在新加坡设立首个东南亚实验室，与 NUS 合作产业博士项目（IPP）。11 月 Google DeepMind 在新加坡建立东南亚首个 AI 研究实验室。',
    tags: ['治理', '技术', '预算', '产业'],
  },
  {
    year: 2024,
    title: '智慧国家 2.0 落地与 AI 预算井喷',
    description: 'Smart Nation 2.0 落地，发布 1.2 亿新元 AI 应用基金和五大国家 AI 项目（智能货运、市政服务、慢性病管理、个性化教育、边境清关）。AI 预算突破 10 亿新元。3 月 NUS AI Institute 成立，整合校内 AI 研究资源。SEA-LION 大语言模型正式发布；AMP 启动；参加首尔 AI 安全峰会；CSA 发布 AI 安全指南。',
    tags: ['战略', '技术', '国际'],
  },
  {
    year: 2023,
    title: 'NAIS 2.0 发布与 AI Verify 开源',
    description: '国家 AI 战略 2.0 发布，从"重点应用"升级为"系统性赋能"。AI Verify 测试框架开源并成立 AI Verify Foundation。生成式 AI 治理框架提案。参加 Bletchley Park 首届 AI 安全峰会。',
    tags: ['战略', '治理', '国际'],
  },
  {
    year: 2022,
    title: 'AI Verify 发布与 NAISC 启动',
    description: 'AI Verify MVP 发布，全球首个 AI 治理测试框架与工具包。National AI Student Challenge (NAISC) 启动，面向学生的全国性 AI 挑战赛。',
    tags: ['治理', '人才'],
  },
  {
    year: 2020,
    title: 'PDPA 修订与 GPAI 创始',
    description: '个人数据保护法 (PDPA) 重大修订，引入合法利益例外和数据可携带权。AI 治理模型框架更新至 v2。新加坡成为 GPAI 创始成员国，RIE2025 计划启动（250 亿新元）。',
    tags: ['治理', '国际', '预算'],
  },
  {
    year: 2019,
    title: 'NAIS 1.0 发布',
    description: '新加坡首份国家级 AI 战略发布，确立五大重点领域（交通物流、智慧城市、医疗、教育、安全）和三大推动力。同年发布亚洲首个 AI 治理模型框架，MAS 推出 FEAT 原则。',
    tags: ['战略', '治理'],
  },
  {
    year: 2018,
    title: 'AIAP 与 100E 计划启动',
    description: 'AI Apprenticeship Programme (AIAP) 首批启动，提供 9 个月沉浸式 AI 工程训练。100 Experiments (100E) 计划启动，资助企业进行 AI 概念验证。MAS 发布金融业 FEAT 原则。',
    tags: ['人才', '创新'],
  },
  {
    year: 2017,
    title: 'AI Singapore 成立',
    description: '国家研究基金会 (NRF) 拨款 1.5 亿新元成立 AI Singapore，整合学术界、产业界和政府资源，统筹推进国家级 AI 研究、创新和人才培养。',
    tags: ['战略', '预算'],
  },
  {
    year: 2014,
    title: '智慧国家倡议启动',
    description: '李显龙总理宣布 Smart Nation Initiative，新加坡成为全球首个以"智慧国家"为目标的国家级数字化转型战略。该倡议为后续所有 AI 政策奠定了制度基础。',
    tags: ['战略'],
  },
];
