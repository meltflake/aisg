// 国际对标数据 — International Benchmarking Data

export interface RegionSummary {
  flag: string;
  name: string;
  strategy: string;
  strategyYear: string;
  investment: string;
  governance: string;
  strength: string;
  aiRanking?: string;
}

export const regions: RegionSummary[] = [
  { flag: '🇸🇬', name: '新加坡', strategy: 'NAIS 2.0', strategyYear: '2023', investment: 'S$2B+ 政府 / US$26B+ 科技巨头', governance: '框架+测试（AI Verify）', strength: '治理先行，国际枢纽', aiRanking: 'Tortoise #3, Oxford #2' },
  { flag: '🇭🇰', name: '香港', strategy: '创新科技蓝图', strategyYear: '2022', investment: 'HK$20B+', governance: '自愿性指引，无专门法', strength: '大湾区桥梁，3000 PFLOPS 超算', aiRanking: '—' },
  { flag: '🇹🇼', name: '台湾', strategy: 'AI 岛计划 / AI 基本法', strategyYear: '2025', investment: '~NT$100B (~US$3.1B)', governance: '原则性框架法（2025.12 通过）', strength: '半导体霸主（TSMC）', aiRanking: '—' },
  { flag: '🇦🇪', name: 'UAE', strategy: 'AI 战略 2031', strategyYear: '2017/2021', investment: '$100B MGX 基金 / $15.2B 微软', governance: '自愿伦理准则，沙盒友好', strength: '资本最雄厚，全球首任 AI 部长', aiRanking: 'Tortoise #18, Oxford #3' },
  { flag: '🇮🇱', name: '以色列', strategy: '国家 AI 计划', strategyYear: '2021', investment: 'NIS 5.26B (~$1.48B) 但仅花 20%', governance: '软法+行业自治，无水平立法', strength: '创业密度全球最高，8200 人才管线', aiRanking: '—' },
  { flag: '🇰🇷', name: '韩国', strategy: 'K-AI 战略 / AI 基本法', strategyYear: '2019/2025', investment: '₩100 万亿 (~$71.5B) 公私基金', governance: 'AI 基本法（2024 通过）', strength: '财阀+半导体，投资规模碾压', aiRanking: 'Tortoise #7' },
  { flag: '🇪🇪', name: '爱沙尼亚', strategy: 'Kratt AI 战略', strategyYear: '2019', investment: '€10M（极致效率）', governance: 'AI Agent 法律定义先驱', strength: '数字政府全球第一，50+ 政府 AI 用例', aiRanking: '—' },
  { flag: '🇨🇭', name: '瑞士', strategy: '联邦 AI 战略', strategyYear: '2020/2025', investment: 'CHF 1B+ 研究（ETH/EPFL）', governance: '创新优先，轻监管', strength: 'ETH/EPFL 全球 Top 5，Google Zurich', aiRanking: 'Tortoise #9' },
  { flag: '🇫🇮', name: '芬兰', strategy: 'AI Finland / AuroraAI', strategyYear: '2017', investment: '€100M+ AI 商业计划', governance: '人本伦理，欧盟 AI 法对齐', strength: 'Elements of AI 全民课程，AuroraAI 公民服务', aiRanking: '—' },
  { flag: '🇨🇦', name: '加拿大', strategy: '泛加拿大 AI 战略', strategyYear: '2017/2024', investment: 'CAD $2.4B（2024 预算）', governance: '自愿行为准则，AIDA 法案搁置', strength: '深度学习发源地，Mila/Vector/Amii', aiRanking: 'Tortoise #5' },
];

export interface RegionDetail {
  flag: string;
  name: string;
  fullName: string;
  overview: string;
  strategies: { name: string; year: string; description: string }[];
  investment: { item: string; amount: string; note: string }[];
  governance: string;
  keyInitiatives: string[];
  strengths: string[];
  weaknesses: string[];
  keyBodies: { name: string; role: string }[];
  sources: string[];
}

export const regionDetails: RegionDetail[] = [
  {
    flag: '🇭🇰',
    name: '香港',
    fullName: '中国香港特别行政区',
    overview: '香港近年投入超过 HK$200 亿发展 AI 与创新科技，包括在数码港建设 3000 PFLOPS 超算中心。但缺乏统一 AI 战略，多数重大举措集中在 2024-25 年才推出，属于"后发追赶"模式。',
    strategies: [
      { name: '创新科技发展蓝图', year: '2022', description: '首份全面科技发展规划，涵盖 AI、生物科技、金融科技等领域' },
      { name: '智慧城市蓝图 2.0', year: '2020', description: '推动城市数字化转型，含 AI 应用场景' },
      { name: '人工智能道德框架', year: '2024', description: '由数码政策办公室发布的自愿性 AI 伦理指引' },
      { name: '生成式 AI 指引', year: '2025', description: '针对政府部门使用生成式 AI 的操作指南' },
      { name: '"AI Plus" 计划', year: '2025', description: '推动 AI 在各行业落地的最新政策倡议' },
    ],
    investment: [
      { item: 'AIRDI 人工智能研发院', amount: 'HK$10 亿', note: '专注应用研发' },
      { item: '前沿科技基金', amount: 'HK$30 亿', note: '支持前沿技术包括 AI' },
      { item: 'AI 资助计划', amount: 'HK$30 亿', note: '企业 AI 应用补贴' },
      { item: '创新及科技基金', amount: 'HK$100 亿', note: '综合科技基金' },
    ],
    governance: '香港采取自愿性指引模式，没有专门的 AI 立法。监管权分散在数码政策办公室（DPO）、个人资料私隐专员公署（PCPD）、金管局（HKMA）等多个机构之间，缺乏统一协调。普通法传统提供了一定的灵活性，但也意味着规则不够明确。',
    keyInitiatives: [
      '数码港 3000 PFLOPS 超算中心',
      'AI 超算资助计划（AICP）',
      '香港人工智能研发院（AIRDI）',
      '智慧政府创新实验室',
      '金融科技 AI 沙盒（HKMA）',
    ],
    strengths: [
      '大湾区桥梁——连接内地庞大市场与国际资本',
      '商汤科技等本土 AI 企业总部所在地',
      '普通法体系，国际企业熟悉的法律环境',
      '3000 PFLOPS 超算规划超过新加坡现有算力',
    ],
    weaknesses: [
      '缺乏统一的国家级 AI 战略',
      '监管碎片化，多部门各自为政',
      '起步较晚，大多数关键举措 2024-25 年才推出',
      '地缘政治因素可能影响国际合作与人才流动',
    ],
    keyBodies: [
      { name: 'ITIB（创新科技及工业局）', role: '统筹科技政策' },
      { name: 'DPO（数码政策办公室）', role: 'AI 伦理与政策' },
      { name: 'HKSTP（香港科技园）', role: '科技企业孵化' },
      { name: 'Cyberport（数码港）', role: '数字科技枢纽与超算' },
      { name: 'HKIC（香港创新科技署）', role: '创新科技资助' },
    ],
    sources: [
      '香港创新科技发展蓝图（2022）',
      '2024-25 年施政报告 AI 相关政策',
      'PCPD 人工智能道德框架（2024）',
    ],
  },
  {
    flag: '🇹🇼',
    name: '台湾',
    fullName: '台湾地区',
    overview: '台湾提出"AI 岛"愿景，2025 年底通过 AI 基本法，并规划 NT$1000 亿以上投资。作为全球半导体制造的绝对霸主（TSMC），台湾在 AI 硬件供应链上拥有无可替代的战略地位。',
    strategies: [
      { name: 'AI 台湾行动计划 1.0', year: '2018', description: '首个 AI 国家行动方案，聚焦人才与研发' },
      { name: 'AI 台湾行动计划 2.0', year: '2023', description: '升级版方案，强调产业应用与国际合作' },
      { name: '十大 AI 基础建设', year: '2025', description: '包括算力中心、数据平台、人才培养等' },
      { name: 'AI 基本法', year: '2025', description: '原则性框架法，2025 年 12 月立法院通过' },
    ],
    investment: [
      { item: 'AI 岛总体计划', amount: 'NT$1000 亿', note: '约 US$31 亿，多年期投资' },
      { item: '2026 年度 AI 预算', amount: 'NT$300 亿', note: '年度政府预算' },
      { item: 'AI 创业计划', amount: 'NT$100 亿', note: '扶持新创企业' },
    ],
    governance: '台湾于 2025 年 12 月通过 AI 基本法，采取原则性框架立法模式，由国家科学及技术委员会（NSTC）作为主管机关。法案强调创新促进、风险分级、透明度和人权保障，但具体细则仍待子法规落实。',
    keyInitiatives: [
      'TSMC 先进制程持续扩产',
      '国家高速网络与计算中心 AI 算力升级',
      'AI 基本法立法（2025.12）',
      '十大 AI 基础建设计划',
      'AI 创业生态系培育',
    ],
    strengths: [
      'TSMC 在先进 AI 芯片制造上不可替代',
      '完整的半导体与硬件生态系统',
      '强大的工程人才培养体系',
      'AI 基本法提供了比新加坡更明确的法律框架',
    ],
    weaknesses: [
      '缺乏全球性 AI 软件企业',
      '能源供应制约算力扩张',
      '台海地缘政治风险影响国际信心',
      '软件与应用层相对薄弱',
    ],
    keyBodies: [
      { name: 'NSTC（国家科学及技术委员会）', role: 'AI 政策统筹与 AI 基本法主管机关' },
      { name: 'MODA（数位发展部）', role: '数字治理与数据政策' },
      { name: 'NDC（国家发展委员会）', role: '产业政策规划' },
      { name: 'FSC（金融监督管理委员会）', role: '金融 AI 监管' },
    ],
    sources: [
      'AI 台湾行动计划 2.0（2023）',
      'AI 基本法草案与立法院记录（2025）',
      '行政院十大 AI 基础建设计划（2025）',
    ],
  },
  {
    flag: '🇦🇪',
    name: 'UAE',
    fullName: '阿拉伯联合酋长国',
    overview: 'UAE 是全球首个设立 AI 部长的国家（2017），通过 $1000 亿 MGX 基金和与微软 $152 亿的合作展现了惊人的资本实力。Falcon LLM 和 MBZUAI 代表了其打造本土 AI 能力的雄心。',
    strategies: [
      { name: 'AI 战略 2031', year: '2017', description: '全球首批国家 AI 战略之一，目标让 AI 贡献 GDP 的 33.5%' },
      { name: 'AI 伦理准则', year: '2022', description: '自愿性伦理指导方针' },
      { name: 'AI 宪章', year: '2024', description: '更新版 AI 治理原则' },
    ],
    investment: [
      { item: 'MGX 基金', amount: '$1000 亿', note: 'AI 专项投资基金' },
      { item: '微软合作', amount: '$152 亿', note: '云计算与 AI 基础设施' },
      { item: 'Stargate UAE', amount: '1GW 数据中心', note: '与美国合作的超大规模算力项目' },
    ],
    governance: 'UAE 采取亲创新、轻监管路线，以非约束性的伦理准则和监管沙盒为主要手段。设有全球首位 AI 部长和专门的 AI 办公室，但整体监管框架成熟度不及新加坡的 AI Verify 体系。',
    keyInitiatives: [
      'Falcon LLM 开源大模型',
      'MBZUAI（穆罕默德·本·扎耶德人工智能大学）',
      'MGX 千亿美元 AI 投资基金',
      'Stargate UAE 超大规模数据中心',
      'AI 部长制度与 AI Office',
    ],
    strengths: [
      '资本规模远超新加坡——MGX $1000 亿 vs 新加坡政府 S$20 亿+',
      '廉价能源支撑大规模算力',
      'Falcon LLM 展示了本土大模型开发能力',
      'MBZUAI 打造世界级 AI 研究型大学',
    ],
    weaknesses: [
      '严重依赖外籍人才，本土 AI 人才储备不足',
      '地缘政治敏感性（芯片出口管制风险）',
      '监管框架尚不成熟，国际信任度不及新加坡',
      '学术研究底蕴相比新加坡 NUS/NTU 仍有差距',
    ],
    keyBodies: [
      { name: 'AI 部长', role: '全球首位 AI 内阁部长（Omar Sultan Al Olama）' },
      { name: 'UAE AI Office', role: 'AI 政策执行与协调' },
      { name: 'ATRC（先进技术研究理事会）', role: '前沿技术研发' },
      { name: 'Mubadala', role: '主权基金，MGX 基金管理者' },
    ],
    sources: [
      'UAE AI Strategy 2031（2017/2021 更新）',
      'MGX 基金官方公告（2024）',
      'MBZUAI 官网与研究报告',
    ],
  },
  {
    flag: '🇮🇱',
    name: '以色列',
    fullName: '以色列国',
    overview: '"创业之国"在 AI 领域拥有全球最高的创业密度和传奇的 8200 部队人才管线，但面临严重的执行缺口——NIS 52.6 亿的国家计划仅花出 20%，没有可用的国家级超算。',
    strategies: [
      { name: '国家 AI 计划', year: '2021', description: 'NIS 52.6 亿五年计划，涵盖算力、人才、研发' },
      { name: 'AI 监管与伦理政策', year: '2023', description: '行业自律为主的监管框架' },
    ],
    investment: [
      { item: '国家 AI 计划预算', amount: 'NIS 52.6 亿 (~$14.8 亿)', note: '五年期，实际仅支出 $2.81 亿（~20%）' },
      { item: '超算中心（Nebius）', amount: '$1.4 亿', note: '与 Nebius 合建，仍在建设中' },
    ],
    governance: '以色列采取软法模式，倾向行业自治，没有水平性 AI 立法。各行业监管机构（如银行业、医疗）各自发布 AI 指引。政治不稳定性严重影响了政策执行的连续性和效率。',
    keyInitiatives: [
      '8200 部队 AI 人才孵化管线',
      '国家 AI 计划五大支柱',
      'Nebius 超算中心建设',
      '创新局（IIA）AI 创业扶持',
    ],
    strengths: [
      '创业密度全球最高，AI 创业生态极其活跃',
      '8200 部队等军事情报单位提供顶尖 AI 人才',
      'Wiz（$320 亿被 Google 收购）等独角兽展示了创业实力',
      '在网络安全 AI 领域全球领先',
    ],
    weaknesses: [
      '国家计划执行严重滞后，预算执行率仅 20%',
      '无可用的国家级超算（新加坡已有 NSCC）',
      '政治动荡影响政策连续性',
      '小国市场，企业多选择海外（尤其美国）上市发展',
    ],
    keyBodies: [
      { name: 'MIST（创新科技部）', role: 'AI 政策主管部门' },
      { name: 'IIA（创新局）', role: 'AI 创业与创新资助' },
      { name: 'Bank of Israel', role: '金融 AI 监管' },
    ],
    sources: [
      'Israel National AI Program（2021）',
      'State Comptroller AI Report（2024）',
      'AI Policy on Regulation & Ethics（2023）',
    ],
  },
  {
    flag: '🇰🇷',
    name: '韩国',
    fullName: '大韩民国',
    overview: '韩国是中等规模经济体中最雄心勃勃的 AI 参与者，₩100 万亿（~$715 亿）公私基金远超同级别国家。三星、Naver、Kakao 等财阀积极开发自有大模型，2024 年通过 AI 基本法展示了治理决心。',
    strategies: [
      { name: 'K-AI 战略', year: '2019', description: '国家 AI 发展蓝图' },
      { name: 'AI 基本法', year: '2024', description: '2024 年国会通过，2025 年生效，亚洲首部综合性 AI 法律' },
      { name: 'AI 半导体战略', year: '2024', description: '强化 AI 芯片自主能力' },
    ],
    investment: [
      { item: '公私联合 AI 基金', amount: '₩100 万亿 (~$715 亿)', note: '多年期公私合作基金' },
      { item: 'NVIDIA 合作', amount: '$30 亿', note: 'AI 基础设施与研发合作' },
    ],
    governance: '韩国 2024 年通过 AI 基本法（2025 年生效），是亚洲首部综合性 AI 立法。法案采取风险分级管理，设立 AI 委员会，要求高风险 AI 进行影响评估，同时兼顾创新促进。比新加坡的自愿框架更具法律约束力。',
    keyInitiatives: [
      '₩100 万亿公私 AI 基金',
      'AI 基本法实施（2025）',
      '三星/Naver/Kakao 自研大模型',
      '与 NVIDIA $30 亿 AI 合作',
      'AI 半导体自主化战略',
    ],
    strengths: [
      '投资规模碾压——₩100 万亿约为新加坡政府 AI 投入的 25 倍',
      '财阀体系可快速大规模部署 AI（三星、LG、现代等）',
      '半导体制造能力（三星、SK 海力士）',
      'AI 基本法提供了比新加坡更强的法律框架',
    ],
    weaknesses: [
      '财阀主导可能挤压创业生态空间',
      '国际化程度不及新加坡，英语环境较弱',
      '吸引国际人才和企业的能力不如新加坡',
      '人口老龄化带来长期人才挑战',
    ],
    keyBodies: [
      { name: 'MSIT（科学技术信息通信部）', role: 'AI 政策主管部门' },
      { name: 'NIPA（国家信息产业振兴院）', role: 'AI 产业推进' },
      { name: 'AI 委员会', role: 'AI 基本法设立的跨部门协调机构' },
    ],
    sources: [
      'K-AI Strategy（2019）',
      'AI 基本法全文（2024）',
      '韩国 AI 半导体战略（2024）',
    ],
  },
  {
    flag: '🇪🇪',
    name: '爱沙尼亚',
    fullName: '爱沙尼亚共和国',
    overview: '爱沙尼亚以仅 €1000 万的 AI 预算实现了 50+ 政府 AI 用例，是极致效率的典范。作为全球数字政府标杆（99% 政府服务在线），其 Bürokratt 虚拟助手和 AI Agent 法律定义走在全球前列。',
    strategies: [
      { name: 'Kratt AI 战略', year: '2019', description: '"Kratt"（爱沙尼亚民间传说中的仆人精灵）战略，推动政府 AI 应用' },
      { name: 'EU AI Act 对齐', year: '2024', description: '作为欧盟成员国，对齐欧盟 AI 法案' },
    ],
    investment: [
      { item: 'AI 战略预算', amount: '€1000 万', note: '极小预算，极致效率' },
    ],
    governance: '爱沙尼亚是全球首个为 AI Agent 提供法律定义的国家，允许 AI 系统以"数字助手"身份执行特定政府服务。同时作为欧盟成员国，需对齐 EU AI Act。其治理模式以实用主义和技术先行著称。',
    keyInitiatives: [
      'Bürokratt 政府虚拟助手',
      '50+ 政府 AI 用例部署',
      'AI Agent 法律框架先驱',
      'e-Residency 数字身份体系',
      'X-Road 政府数据交换平台',
    ],
    strengths: [
      '数字政府全球第一——99% 政府服务在线',
      '极致效率：€1000 万实现 50+ AI 用例，新加坡可借鉴的效率标杆',
      'AI Agent 法律定义全球领先',
      '小国敏捷性——政策实验周期极短',
    ],
    weaknesses: [
      '规模极小（人口 130 万），经验不一定可直接复制',
      '缺乏本土科技巨头和 AI 企业',
      '研发投入无法与新加坡的 A*STAR、AISG 相比',
      '人才池有限，依赖欧盟人才流动',
    ],
    keyBodies: [
      { name: 'MEIT（经济事务与信息技术部）', role: 'AI 政策主管' },
      { name: 'e-Estonia', role: '数字政府品牌与推广' },
      { name: 'RIA（信息系统管理局）', role: '政府 IT 基础设施' },
    ],
    sources: [
      'Estonia Kratt AI Strategy（2019）',
      'e-Estonia 官方报告',
      'Government AI Readiness Index',
    ],
  },
  {
    flag: '🇨🇭',
    name: '瑞士',
    fullName: '瑞士联邦',
    overview: 'ETH Zurich 和 EPFL 是全球 AI 研究 Top 5 机构，Google Zurich 是其最大的欧洲研发中心。瑞士以"创新优先、轻监管"闻名，尚未制定独立的 AI 法律，但在基础研究质量上全球领先。',
    strategies: [
      { name: '联邦 AI 战略', year: '2020', description: '联邦政府 AI 发展指导方针' },
      { name: 'AI 战略更新', year: '2025', description: '更新版联邦 AI 政策' },
    ],
    investment: [
      { item: 'AI 研究投入（ETH/EPFL）', amount: 'CHF 10 亿+', note: '通过联邦理工系统持续投入' },
    ],
    governance: '瑞士采取创新优先、轻监管路线，尚未制定独立的 AI 法律。联邦政府倾向于利用现有法律框架管理 AI，同时密切关注欧盟 AI 法案的溢出效应。国际组织总部（WEF、ITU）使其成为全球 AI 治理讨论的重要场所。',
    keyInitiatives: [
      'ETH AI Center',
      'EPFL AI 研究集群',
      'Google Zurich（欧洲最大研发中心）',
      'Swiss AI Initiative',
      'WEF AI Governance Alliance（总部在日内瓦）',
    ],
    strengths: [
      'ETH/EPFL 全球 Top 5 AI 研究机构',
      'Google Zurich、Disney Research 等顶级企业实验室',
      '国际人才磁铁——高薪资、高生活质量',
      '国际组织总部带来的全球治理话语权',
    ],
    weaknesses: [
      'AI 创业生态不如新加坡活跃（缺少东南亚市场腹地）',
      '政府直接投入 AI 产业化不如新加坡（AISG 等）积极',
      '联邦制导致政策协调较慢',
      '高成本可能限制大规模 AI 基础设施建设',
    ],
    keyBodies: [
      { name: 'SERI（国家教育研究创新秘书处）', role: '研究政策' },
      { name: 'ETH Board', role: '联邦理工系统管理' },
      { name: 'FDFA（联邦外交事务部）', role: '国际 AI 治理' },
    ],
    sources: [
      'Swiss Federal AI Strategy（2020/2025）',
      'ETH Zurich AI Center 年报',
      'OECD AI Policy Observatory — Switzerland',
    ],
  },
  {
    flag: '🇫🇮',
    name: '芬兰',
    fullName: '芬兰共和国',
    overview: '芬兰以"Elements of AI"在线课程培训了全国 1% 人口的 AI 素养，是全球 AI 全民教育的先驱。AuroraAI 公民服务平台代表了"以人为本"的 AI 政府服务愿景。',
    strategies: [
      { name: 'AI Finland', year: '2017', description: '国家 AI 战略，聚焦全民 AI 素养和企业应用' },
      { name: 'AuroraAI 计划', year: '2020', description: '基于 AI 的公民生命周期服务平台' },
    ],
    investment: [
      { item: 'AI 商业计划', amount: '€1 亿+', note: '推动企业 AI 应用' },
    ],
    governance: '芬兰采取人本伦理、价值导向的治理模式，强调 AI 应服务于人的福祉。作为欧盟成员国，积极对齐 EU AI Act。其特色在于将 AI 伦理教育纳入全民素养计划，而非仅依赖法规约束。',
    keyInitiatives: [
      'Elements of AI 全民课程（覆盖 1% 人口）',
      'AuroraAI 公民生命周期服务',
      'AI Business Finland 企业转型计划',
      'FCAI（芬兰人工智能中心）',
    ],
    strengths: [
      'AI 全民素养教育全球先驱——Elements of AI 已被翻译为 25+ 种语言',
      'AuroraAI 展示了 AI 公共服务的创新模式',
      '高度数字化的社会基础（与新加坡类似）',
      '人本伦理导向，在国际上建立了"负责任 AI"的声誉',
    ],
    weaknesses: [
      '市场规模小（550 万人口），AI 产业化规模有限',
      '缺乏本土 AI 龙头企业（Nokia 转型后实力下降）',
      '对 EU AI Act 的合规负担可能限制创新灵活性',
      '冬季气候和地理位置不利于吸引亚洲 AI 人才',
    ],
    keyBodies: [
      { name: 'MEE（经济事务与就业部）', role: 'AI 产业政策' },
      { name: 'FCAI（芬兰人工智能中心）', role: 'AI 研究旗舰' },
      { name: 'DVV（数字与人口数据局）', role: 'AuroraAI 运营' },
    ],
    sources: [
      'Finland AI Strategy（2017/2019 更新）',
      'AuroraAI Programme Report',
      'Elements of AI 官方统计',
    ],
  },
  {
    flag: '🇨🇦',
    name: '加拿大',
    fullName: '加拿大',
    overview: '加拿大是深度学习的发源地（Hinton、Bengio），拥有 Mila、Vector Institute、Amii 三大世界级 AI 研究所。2024 年联邦预算追加 CAD $24 亿 AI 投资，但 AIDA 立法法案未能通过，治理框架仍以自愿准则为主。',
    strategies: [
      { name: '泛加拿大 AI 战略', year: '2017', description: '全球首个国家级 AI 战略，投资三大研究所' },
      { name: '泛加拿大 AI 战略 2.0', year: '2024', description: 'CAD $24 亿续期，增加算力与商业化' },
    ],
    investment: [
      { item: '2024 联邦 AI 预算', amount: 'CAD $24 亿', note: '含算力、安全、人才、商业化' },
      { item: '主权算力投资', amount: 'CAD $10 亿', note: '国家级 AI 计算基础设施' },
    ],
    governance: '加拿大 AI 治理以自愿行为准则为主，拟议中的 AIDA（人工智能与数据法案）随国会解散而搁置。加拿大通过 CAISI（加拿大 AI 安全研究所）聚焦前沿 AI 安全研究，在全球 AI 安全治理中发挥重要作用。',
    keyInitiatives: [
      'Mila（蒙特利尔学习算法研究所，Bengio 领导）',
      'Vector Institute（多伦多，Hinton 创立）',
      'Amii（阿尔伯塔机器智能研究所）',
      'CAISI（加拿大 AI 安全研究所）',
      'CAD $10 亿主权算力计划',
    ],
    strengths: [
      '深度学习发源地——Bengio、Hinton 的学术遗产',
      '三大世界级 AI 研究所形成人才培养网络',
      '在 AI 安全与伦理研究上全球领先（CAISI）',
      '全球首个国家 AI 战略（2017），先发优势明显',
    ],
    weaknesses: [
      'AI 人才大量流向美国（"北向脑流失"倒过来了）',
      'AIDA 法案搁置，治理框架缺乏法律约束力',
      '商业化能力不足——研究强、落地弱',
      '缺少本土 AI 巨头（对标新加坡的 Grab、Sea 等）',
    ],
    keyBodies: [
      { name: 'ISED（创新科学与经济发展部）', role: 'AI 政策主管' },
      { name: 'Mila', role: '蒙特利尔 AI 研究所（Bengio）' },
      { name: 'Vector Institute', role: '多伦多 AI 研究所' },
      { name: 'Amii', role: '阿尔伯塔 AI 研究所' },
      { name: 'CAISI', role: '加拿大 AI 安全研究所' },
    ],
    sources: [
      'Pan-Canadian AI Strategy（2017/2024）',
      'Budget 2024 — AI Chapter',
      'CIFAR AI Strategy Reports',
    ],
  },
];

export const insights = [
  { title: '治理模式分化', text: '各地区在"立法 vs 自律"间分化明显。韩国和台湾选择了 AI 基本法，EU 走强监管路线，而新加坡、以色列、瑞士偏好灵活框架。' },
  { title: '投资规模悬殊', text: '韩国 ₩100 万亿和 UAE $100B MGX 基金远超其他地区。但爱沙尼亚证明了 €10M 也能实现 50+ 政府 AI 用例——关键在效率而非规模。' },
  { title: '人才是核心变量', text: '以色列的 8200 部队、加拿大的 Bengio/Hinton、芬兰的全民 AI 教育——每个成功的 AI 策略背后都有独特的人才来源。' },
  { title: '新加坡的独特定位', text: '新加坡在治理框架成熟度（AI Verify）、执行纪律和国际信任度上领先，但在投资规模、本土大模型和基础研究上仍有差距。' },
];

export const dataDate = '2026-02-17';
export const dataDisclaimer = '本页数据综合自各国政府官方文件、国际组织报告及公开报道，由 SG AI 观察独立整理。数据截至 2026 年 2 月。';
