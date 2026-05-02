// 国际对标数据 — International Benchmarking Data

export interface RegionSummary {
  flag: string;
  name: string;
  nameEn?: string;
  strategy: string;
  strategyEn?: string;
  strategyYear: string;
  investment: string;
  investmentEn?: string;
  governance: string;
  governanceEn?: string;
  strength: string;
  strengthEn?: string;
  aiRanking?: string;
}

export const regions: RegionSummary[] = [
  {
    flag: '🇸🇬',
    name: '新加坡',
    nameEn: 'Singapore',
    strategy: 'NAIS 2.0',
    strategyEn: 'NAIS 2.0',
    strategyYear: '2023',
    investment: 'S$2B+ 政府 / US$26B+ 科技巨头',
    investmentEn: 'S$2B+ government / US$26B+ tech giants',
    governance: '框架+测试（AI Verify）',
    governanceEn: 'Framework + testing (AI Verify)',
    strength: '治理先行，国际枢纽',
    strengthEn: 'Governance-led, international hub',
    aiRanking: 'Tortoise #3, Oxford #2',
  },
  {
    flag: '🇭🇰',
    name: '香港',
    nameEn: 'Hong Kong',
    strategy: '创新科技蓝图',
    strategyEn: 'Innovation & Technology Blueprint',
    strategyYear: '2022',
    investment: 'HK$20B+',
    investmentEn: 'HK$20B+',
    governance: '自愿性指引，无专门法',
    governanceEn: 'Voluntary guidelines, no dedicated law',
    strength: '大湾区桥梁，3000 PFLOPS 超算',
    strengthEn: 'Greater Bay Area bridge, 3000 PFLOPS supercomputing',
    aiRanking: '—',
  },
  {
    flag: '🇹🇼',
    name: '台湾',
    nameEn: 'Taiwan',
    strategy: 'AI 岛计划 / AI 基本法',
    strategyEn: 'AI Island Plan / AI Basic Act',
    strategyYear: '2025',
    investment: '~NT$100B (~US$3.1B)',
    investmentEn: '~NT$100B (~US$3.1B)',
    governance: '原则性框架法（2025.12 通过）',
    governanceEn: 'Principles-based framework law (passed Dec 2025)',
    strength: '半导体霸主（TSMC）',
    strengthEn: 'Semiconductor hegemon (TSMC)',
    aiRanking: '—',
  },
  {
    flag: '🇦🇪',
    name: 'UAE',
    nameEn: 'UAE',
    strategy: 'AI 战略 2031',
    strategyEn: 'AI Strategy 2031',
    strategyYear: '2017/2021',
    investment: '$100B MGX 基金 / $15.2B 微软',
    investmentEn: '$100B MGX fund / $15.2B Microsoft',
    governance: '自愿伦理准则，沙盒友好',
    governanceEn: 'Voluntary ethics code, sandbox-friendly',
    strength: '资本最雄厚，全球首任 AI 部长',
    strengthEn: "Largest capital pool, world's first AI Minister",
    aiRanking: 'Tortoise #18, Oxford #3',
  },
  {
    flag: '🇮🇱',
    name: '以色列',
    nameEn: 'Israel',
    strategy: '国家 AI 计划',
    strategyEn: 'National AI Program',
    strategyYear: '2021',
    investment: 'NIS 5.26B (~$1.48B) 但仅花 20%',
    investmentEn: 'NIS 5.26B (~$1.48B) but only 20% spent',
    governance: '软法+行业自治，无水平立法',
    governanceEn: 'Soft law + sector self-regulation, no horizontal legislation',
    strength: '创业密度全球最高，8200 人才管线',
    strengthEn: 'Highest startup density globally, Unit 8200 talent pipeline',
    aiRanking: '—',
  },
  {
    flag: '🇰🇷',
    name: '韩国',
    nameEn: 'South Korea',
    strategy: 'K-AI 战略 / AI 基本法',
    strategyEn: 'K-AI Strategy / AI Basic Act',
    strategyYear: '2019/2025',
    investment: '₩100 万亿 (~$71.5B) 公私基金',
    investmentEn: '₩100 trillion (~$71.5B) public-private fund',
    governance: 'AI 基本法（2024 通过）',
    governanceEn: 'AI Basic Act (passed 2024)',
    strength: '财阀+半导体，投资规模碾压',
    strengthEn: 'Chaebols + semiconductors, dominant investment scale',
    aiRanking: 'Tortoise #7',
  },
  {
    flag: '🇪🇪',
    name: '爱沙尼亚',
    nameEn: 'Estonia',
    strategy: 'Kratt AI 战略',
    strategyEn: 'Kratt AI Strategy',
    strategyYear: '2019',
    investment: '€10M（极致效率）',
    investmentEn: '€10M (extreme efficiency)',
    governance: 'AI Agent 法律定义先驱',
    governanceEn: 'Pioneer in legal definition of AI Agents',
    strength: '数字政府全球第一，50+ 政府 AI 用例',
    strengthEn: "World's #1 digital government, 50+ government AI use cases",
    aiRanking: '—',
  },
  {
    flag: '🇨🇭',
    name: '瑞士',
    nameEn: 'Switzerland',
    strategy: '联邦 AI 战略',
    strategyEn: 'Federal AI Strategy',
    strategyYear: '2020/2025',
    investment: 'CHF 1B+ 研究（ETH/EPFL）',
    investmentEn: 'CHF 1B+ research (ETH/EPFL)',
    governance: '创新优先，轻监管',
    governanceEn: 'Innovation-first, light-touch regulation',
    strength: 'ETH/EPFL 全球 Top 5，Google Zurich',
    strengthEn: 'ETH/EPFL global Top 5, Google Zurich',
    aiRanking: 'Tortoise #9',
  },
  {
    flag: '🇫🇮',
    name: '芬兰',
    nameEn: 'Finland',
    strategy: 'AI Finland / AuroraAI',
    strategyEn: 'AI Finland / AuroraAI',
    strategyYear: '2017',
    investment: '€100M+ AI 商业计划',
    investmentEn: '€100M+ AI business programme',
    governance: '人本伦理，欧盟 AI 法对齐',
    governanceEn: 'Human-centric ethics, aligned with EU AI Act',
    strength: 'Elements of AI 全民课程，AuroraAI 公民服务',
    strengthEn: 'Elements of AI national course, AuroraAI citizen services',
    aiRanking: '—',
  },
  {
    flag: '🇨🇦',
    name: '加拿大',
    nameEn: 'Canada',
    strategy: '泛加拿大 AI 战略',
    strategyEn: 'Pan-Canadian AI Strategy',
    strategyYear: '2017/2024',
    investment: 'CAD $2.4B（2024 预算）',
    investmentEn: 'CAD $2.4B (2024 budget)',
    governance: '自愿行为准则，AIDA 法案搁置',
    governanceEn: 'Voluntary code of conduct, AIDA bill shelved',
    strength: '深度学习发源地，Mila/Vector/Amii',
    strengthEn: 'Birthplace of deep learning; Mila/Vector/Amii',
    aiRanking: 'Tortoise #5',
  },
];

export interface RegionDetail {
  flag: string;
  name: string;
  nameEn?: string;
  fullName: string;
  fullNameEn?: string;
  overview: string;
  overviewEn?: string;
  strategies: {
    name: string;
    nameEn?: string;
    year: string;
    description: string;
    descriptionEn?: string;
  }[];
  investment: {
    item: string;
    itemEn?: string;
    amount: string;
    amountEn?: string;
    note: string;
    noteEn?: string;
  }[];
  governance: string;
  governanceEn?: string;
  keyInitiatives: string[];
  keyInitiativesEn?: string[];
  strengths: string[];
  strengthsEn?: string[];
  weaknesses: string[];
  weaknessesEn?: string[];
  keyBodies: { name: string; nameEn?: string; role: string; roleEn?: string }[];
  sources: string[];
  sourcesEn?: string[];
}

export const regionDetails: RegionDetail[] = [
  {
    flag: '🇭🇰',
    name: '香港',
    nameEn: 'Hong Kong',
    fullName: '中国香港特别行政区',
    fullNameEn: 'Hong Kong Special Administrative Region of China',
    overview:
      '香港近年投入超过 HK$200 亿发展 AI 与创新科技，包括在数码港建设 3000 PFLOPS 超算中心。但缺乏统一 AI 战略，多数重大举措集中在 2024-25 年才推出，属于"后发追赶"模式。',
    overviewEn:
      'Hong Kong has committed over HK$20 billion to AI and innovation in recent years, including a 3000 PFLOPS supercomputing centre at Cyberport. But it lacks a unified AI strategy, with most major initiatives only launched in 2024-25 — a late-mover catch-up posture.',
    strategies: [
      {
        name: '创新科技发展蓝图',
        nameEn: 'Innovation & Technology Development Blueprint',
        year: '2022',
        description: '首份全面科技发展规划，涵盖 AI、生物科技、金融科技等领域',
        descriptionEn: 'First full-spectrum tech development plan, covering AI, biotech, fintech and other areas',
      },
      {
        name: '智慧城市蓝图 2.0',
        nameEn: 'Smart City Blueprint 2.0',
        year: '2020',
        description: '推动城市数字化转型，含 AI 应用场景',
        descriptionEn: 'Drives urban digital transformation, including AI use cases',
      },
      {
        name: '人工智能道德框架',
        nameEn: 'Artificial Intelligence Ethical Framework',
        year: '2024',
        description: '由数码政策办公室发布的自愿性 AI 伦理指引',
        descriptionEn: 'Voluntary AI ethics guidelines issued by the Digital Policy Office',
      },
      {
        name: '生成式 AI 指引',
        nameEn: 'Generative AI Guidelines',
        year: '2025',
        description: '针对政府部门使用生成式 AI 的操作指南',
        descriptionEn: 'Operational guide for government use of generative AI',
      },
      {
        name: '"AI Plus" 计划',
        nameEn: '"AI Plus" Initiative',
        year: '2025',
        description: '推动 AI 在各行业落地的最新政策倡议',
        descriptionEn: 'Latest policy initiative driving AI adoption across industries',
      },
    ],
    investment: [
      {
        item: 'AIRDI 人工智能研发院',
        itemEn: 'AIRDI (AI R&D Institute)',
        amount: 'HK$10 亿',
        amountEn: 'HK$1 billion',
        note: '专注应用研发',
        noteEn: 'Focused on applied R&D',
      },
      {
        item: '前沿科技基金',
        itemEn: 'Frontier Technology Fund',
        amount: 'HK$30 亿',
        amountEn: 'HK$3 billion',
        note: '支持前沿技术包括 AI',
        noteEn: 'Supports frontier tech including AI',
      },
      {
        item: 'AI 资助计划',
        itemEn: 'AI Subsidy Scheme',
        amount: 'HK$30 亿',
        amountEn: 'HK$3 billion',
        note: '企业 AI 应用补贴',
        noteEn: 'Subsidies for enterprise AI adoption',
      },
      {
        item: '创新及科技基金',
        itemEn: 'Innovation and Technology Fund',
        amount: 'HK$100 亿',
        amountEn: 'HK$10 billion',
        note: '综合科技基金',
        noteEn: 'General-purpose tech fund',
      },
    ],
    governance:
      '香港采取自愿性指引模式，没有专门的 AI 立法。监管权分散在数码政策办公室（DPO）、个人资料私隐专员公署（PCPD）、金管局（HKMA）等多个机构之间，缺乏统一协调。普通法传统提供了一定的灵活性，但也意味着规则不够明确。',
    governanceEn:
      'Hong Kong takes a voluntary-guidelines approach with no dedicated AI legislation. Regulatory authority is fragmented across the Digital Policy Office (DPO), the Privacy Commissioner for Personal Data (PCPD), the HKMA and other bodies, with no unified coordination. The common-law tradition provides some flexibility but also means rules are less explicit.',
    keyInitiatives: [
      '数码港 3000 PFLOPS 超算中心',
      'AI 超算资助计划（AICP）',
      '香港人工智能研发院（AIRDI）',
      '智慧政府创新实验室',
      '金融科技 AI 沙盒（HKMA）',
    ],
    keyInitiativesEn: [
      'Cyberport 3000 PFLOPS supercomputing centre',
      'AI Supercomputing Subsidy Scheme (AICP)',
      'Hong Kong AI R&D Institute (AIRDI)',
      'Smart Government Innovation Lab',
      'Fintech AI Sandbox (HKMA)',
    ],
    strengths: [
      '大湾区桥梁——连接内地庞大市场与国际资本',
      '商汤科技等本土 AI 企业总部所在地',
      '普通法体系，国际企业熟悉的法律环境',
      '3000 PFLOPS 超算规划超过新加坡现有算力',
    ],
    strengthsEn: [
      "Greater Bay Area bridge — connecting the mainland's massive market with international capital",
      'HQ of homegrown AI firms such as SenseTime',
      'Common-law system; legal environment familiar to international firms',
      "3000 PFLOPS supercomputing plan exceeds Singapore's current compute",
    ],
    weaknesses: [
      '缺乏统一的国家级 AI 战略',
      '监管碎片化，多部门各自为政',
      '起步较晚，大多数关键举措 2024-25 年才推出',
      '地缘政治因素可能影响国际合作与人才流动',
    ],
    weaknessesEn: [
      'No unified national-level AI strategy',
      'Fragmented regulation; agencies operate in silos',
      'Late start; most key initiatives only launched in 2024-25',
      'Geopolitical factors may affect international cooperation and talent flow',
    ],
    keyBodies: [
      {
        name: 'ITIB（创新科技及工业局）',
        nameEn: 'ITIB (Innovation, Technology and Industry Bureau)',
        role: '统筹科技政策',
        roleEn: 'Coordinates tech policy',
      },
      {
        name: 'DPO（数码政策办公室）',
        nameEn: 'DPO (Digital Policy Office)',
        role: 'AI 伦理与政策',
        roleEn: 'AI ethics and policy',
      },
      {
        name: 'HKSTP（香港科技园）',
        nameEn: 'HKSTP (Hong Kong Science and Technology Parks)',
        role: '科技企业孵化',
        roleEn: 'Tech company incubation',
      },
      {
        name: 'Cyberport（数码港）',
        nameEn: 'Cyberport',
        role: '数字科技枢纽与超算',
        roleEn: 'Digital tech hub and supercomputing',
      },
      {
        name: 'HKIC（香港创新科技署）',
        nameEn: 'HKIC (Hong Kong Innovation and Technology Commission)',
        role: '创新科技资助',
        roleEn: 'Innovation and technology funding',
      },
    ],
    sources: ['香港创新科技发展蓝图（2022）', '2024-25 年施政报告 AI 相关政策', 'PCPD 人工智能道德框架（2024）'],
    sourcesEn: [
      'Hong Kong Innovation and Technology Development Blueprint (2022)',
      'AI-related policies in the 2024-25 Policy Address',
      'PCPD Artificial Intelligence Ethical Framework (2024)',
    ],
  },
  {
    flag: '🇹🇼',
    name: '台湾',
    nameEn: 'Taiwan',
    fullName: '台湾地区',
    fullNameEn: 'Taiwan',
    overview:
      '台湾提出"AI 岛"愿景，2025 年底通过 AI 基本法，并规划 NT$1000 亿以上投资。作为全球半导体制造的绝对霸主（TSMC），台湾在 AI 硬件供应链上拥有无可替代的战略地位。',
    overviewEn:
      'Taiwan has put forward an "AI Island" vision, passed an AI Basic Act in late 2025, and committed over NT$100 billion in investment. As the undisputed global hegemon in semiconductor manufacturing (TSMC), Taiwan holds an irreplaceable strategic position in the AI hardware supply chain.',
    strategies: [
      {
        name: 'AI 台湾行动计划 1.0',
        nameEn: 'AI Taiwan Action Plan 1.0',
        year: '2018',
        description: '首个 AI 国家行动方案，聚焦人才与研发',
        descriptionEn: 'First national AI action plan, focused on talent and R&D',
      },
      {
        name: 'AI 台湾行动计划 2.0',
        nameEn: 'AI Taiwan Action Plan 2.0',
        year: '2023',
        description: '升级版方案，强调产业应用与国际合作',
        descriptionEn: 'Upgraded plan emphasising industrial applications and international cooperation',
      },
      {
        name: '十大 AI 基础建设',
        nameEn: 'Ten Major AI Infrastructure Projects',
        year: '2025',
        description: '包括算力中心、数据平台、人才培养等',
        descriptionEn: 'Includes compute centres, data platforms, talent development and more',
      },
      {
        name: 'AI 基本法',
        nameEn: 'AI Basic Act',
        year: '2025',
        description: '原则性框架法，2025 年 12 月立法院通过',
        descriptionEn: 'Principles-based framework law, passed by the Legislative Yuan in December 2025',
      },
    ],
    investment: [
      {
        item: 'AI 岛总体计划',
        itemEn: 'AI Island Master Plan',
        amount: 'NT$1000 亿',
        amountEn: 'NT$100 billion',
        note: '约 US$31 亿，多年期投资',
        noteEn: 'About US$3.1 billion, multi-year investment',
      },
      {
        item: '2026 年度 AI 预算',
        itemEn: '2026 AI Budget',
        amount: 'NT$300 亿',
        amountEn: 'NT$30 billion',
        note: '年度政府预算',
        noteEn: 'Annual government budget',
      },
      {
        item: 'AI 创业计划',
        itemEn: 'AI Startup Programme',
        amount: 'NT$100 亿',
        amountEn: 'NT$10 billion',
        note: '扶持新创企业',
        noteEn: 'Support for startups',
      },
    ],
    governance:
      '台湾于 2025 年 12 月通过 AI 基本法，采取原则性框架立法模式，由国家科学及技术委员会（NSTC）作为主管机关。法案强调创新促进、风险分级、透明度和人权保障，但具体细则仍待子法规落实。',
    governanceEn:
      'Taiwan passed the AI Basic Act in December 2025, taking a principles-based framework legislative approach, with the National Science and Technology Council (NSTC) as the competent authority. The Act emphasises innovation promotion, risk tiering, transparency and human rights, but detailed rules await secondary legislation.',
    keyInitiatives: [
      'TSMC 先进制程持续扩产',
      '国家高速网络与计算中心 AI 算力升级',
      'AI 基本法立法（2025.12）',
      '十大 AI 基础建设计划',
      'AI 创业生态系培育',
    ],
    keyInitiativesEn: [
      'Continued TSMC advanced-node capacity expansion',
      'NCHC compute upgrade for AI workloads',
      'AI Basic Act legislation (Dec 2025)',
      'Ten Major AI Infrastructure Plan',
      'AI startup ecosystem cultivation',
    ],
    strengths: [
      'TSMC 在先进 AI 芯片制造上不可替代',
      '完整的半导体与硬件生态系统',
      '强大的工程人才培养体系',
      'AI 基本法提供了比新加坡更明确的法律框架',
    ],
    strengthsEn: [
      'TSMC is irreplaceable in advanced AI chip manufacturing',
      'Complete semiconductor and hardware ecosystem',
      'Strong engineering talent pipeline',
      "AI Basic Act provides a more explicit legal framework than Singapore's",
    ],
    weaknesses: [
      '缺乏全球性 AI 软件企业',
      '能源供应制约算力扩张',
      '台海地缘政治风险影响国际信心',
      '软件与应用层相对薄弱',
    ],
    weaknessesEn: [
      'Lacks globally significant AI software firms',
      'Energy supply constrains compute expansion',
      'Cross-strait geopolitical risk weighs on international confidence',
      'Software and application layers are relatively weak',
    ],
    keyBodies: [
      {
        name: 'NSTC（国家科学及技术委员会）',
        nameEn: 'NSTC (National Science and Technology Council)',
        role: 'AI 政策统筹与 AI 基本法主管机关',
        roleEn: 'Coordinates AI policy and is the competent authority for the AI Basic Act',
      },
      {
        name: 'MODA（数位发展部）',
        nameEn: 'MODA (Ministry of Digital Affairs)',
        role: '数字治理与数据政策',
        roleEn: 'Digital governance and data policy',
      },
      {
        name: 'NDC（国家发展委员会）',
        nameEn: 'NDC (National Development Council)',
        role: '产业政策规划',
        roleEn: 'Industrial policy planning',
      },
      {
        name: 'FSC（金融监督管理委员会）',
        nameEn: 'FSC (Financial Supervisory Commission)',
        role: '金融 AI 监管',
        roleEn: 'Financial AI regulation',
      },
    ],
    sources: ['AI 台湾行动计划 2.0（2023）', 'AI 基本法草案与立法院记录（2025）', '行政院十大 AI 基础建设计划（2025）'],
    sourcesEn: [
      'AI Taiwan Action Plan 2.0 (2023)',
      'AI Basic Act draft and Legislative Yuan records (2025)',
      'Executive Yuan Ten Major AI Infrastructure Plan (2025)',
    ],
  },
  {
    flag: '🇦🇪',
    name: 'UAE',
    nameEn: 'UAE',
    fullName: '阿拉伯联合酋长国',
    fullNameEn: 'United Arab Emirates',
    overview:
      'UAE 是全球首个设立 AI 部长的国家（2017），通过 $1000 亿 MGX 基金和与微软 $152 亿的合作展现了惊人的资本实力。Falcon LLM 和 MBZUAI 代表了其打造本土 AI 能力的雄心。',
    overviewEn:
      'The UAE was the first country in the world to appoint an AI Minister (2017), and has demonstrated formidable capital firepower through the US$100 billion MGX fund and a US$15.2 billion partnership with Microsoft. Falcon LLM and MBZUAI embody its ambition to build sovereign AI capability.',
    strategies: [
      {
        name: 'AI 战略 2031',
        nameEn: 'AI Strategy 2031',
        year: '2017',
        description: '全球首批国家 AI 战略之一，目标让 AI 贡献 GDP 的 33.5%',
        descriptionEn: "Among the world's earliest national AI strategies; targets AI contributing 33.5% of GDP",
      },
      {
        name: 'AI 伦理准则',
        nameEn: 'AI Ethics Principles',
        year: '2022',
        description: '自愿性伦理指导方针',
        descriptionEn: 'Voluntary ethical guidelines',
      },
      {
        name: 'AI 宪章',
        nameEn: 'AI Charter',
        year: '2024',
        description: '更新版 AI 治理原则',
        descriptionEn: 'Updated AI governance principles',
      },
    ],
    investment: [
      {
        item: 'MGX 基金',
        itemEn: 'MGX Fund',
        amount: '$1000 亿',
        amountEn: 'US$100 billion',
        note: 'AI 专项投资基金',
        noteEn: 'Dedicated AI investment fund',
      },
      {
        item: '微软合作',
        itemEn: 'Microsoft Partnership',
        amount: '$152 亿',
        amountEn: 'US$15.2 billion',
        note: '云计算与 AI 基础设施',
        noteEn: 'Cloud computing and AI infrastructure',
      },
      {
        item: 'Stargate UAE',
        itemEn: 'Stargate UAE',
        amount: '1GW 数据中心',
        amountEn: '1GW data centre',
        note: '与美国合作的超大规模算力项目',
        noteEn: 'Hyperscale compute project in partnership with the US',
      },
    ],
    governance:
      'UAE 采取亲创新、轻监管路线，以非约束性的伦理准则和监管沙盒为主要手段。设有全球首位 AI 部长和专门的 AI 办公室，但整体监管框架成熟度不及新加坡的 AI Verify 体系。',
    governanceEn:
      "The UAE pursues a pro-innovation, light-touch regulatory path, relying primarily on non-binding ethical guidelines and regulatory sandboxes. It has the world's first AI Minister and a dedicated AI Office, but its regulatory framework is less mature than Singapore's AI Verify system.",
    keyInitiatives: [
      'Falcon LLM 开源大模型',
      'MBZUAI（穆罕默德·本·扎耶德人工智能大学）',
      'MGX 千亿美元 AI 投资基金',
      'Stargate UAE 超大规模数据中心',
      'AI 部长制度与 AI Office',
    ],
    keyInitiativesEn: [
      'Falcon LLM open-source large model',
      'MBZUAI (Mohamed bin Zayed University of Artificial Intelligence)',
      'MGX US$100 billion AI investment fund',
      'Stargate UAE hyperscale data centre',
      'AI Minister role and the AI Office',
    ],
    strengths: [
      '资本规模远超新加坡——MGX $1000 亿 vs 新加坡政府 S$20 亿+',
      '廉价能源支撑大规模算力',
      'Falcon LLM 展示了本土大模型开发能力',
      'MBZUAI 打造世界级 AI 研究型大学',
    ],
    strengthsEn: [
      'Capital scale far exceeds Singapore — MGX US$100 billion vs Singapore government S$2 billion+',
      'Cheap energy supports large-scale compute',
      'Falcon LLM demonstrates sovereign large-model development capability',
      'MBZUAI builds a world-class AI research university',
    ],
    weaknesses: [
      '严重依赖外籍人才，本土 AI 人才储备不足',
      '地缘政治敏感性（芯片出口管制风险）',
      '监管框架尚不成熟，国际信任度不及新加坡',
      '学术研究底蕴相比新加坡 NUS/NTU 仍有差距',
    ],
    weaknessesEn: [
      'Heavy reliance on foreign talent; weak local AI talent pool',
      'Geopolitical sensitivity (chip export-control risk)',
      'Regulatory framework still immature; lower international trust than Singapore',
      "Academic research depth still trails Singapore's NUS/NTU",
    ],
    keyBodies: [
      {
        name: 'AI 部长',
        nameEn: 'AI Minister',
        role: '全球首位 AI 内阁部长（Omar Sultan Al Olama）',
        roleEn: "World's first AI cabinet minister (Omar Sultan Al Olama)",
      },
      {
        name: 'UAE AI Office',
        nameEn: 'UAE AI Office',
        role: 'AI 政策执行与协调',
        roleEn: 'AI policy execution and coordination',
      },
      {
        name: 'ATRC（先进技术研究理事会）',
        nameEn: 'ATRC (Advanced Technology Research Council)',
        role: '前沿技术研发',
        roleEn: 'Frontier technology R&D',
      },
      {
        name: 'Mubadala',
        nameEn: 'Mubadala',
        role: '主权基金，MGX 基金管理者',
        roleEn: 'Sovereign wealth fund; manager of the MGX fund',
      },
    ],
    sources: ['UAE AI Strategy 2031（2017/2021 更新）', 'MGX 基金官方公告（2024）', 'MBZUAI 官网与研究报告'],
    sourcesEn: [
      'UAE AI Strategy 2031 (2017, updated 2021)',
      'MGX Fund official announcements (2024)',
      'MBZUAI website and research reports',
    ],
  },
  {
    flag: '🇮🇱',
    name: '以色列',
    nameEn: 'Israel',
    fullName: '以色列国',
    fullNameEn: 'State of Israel',
    overview:
      '"创业之国"在 AI 领域拥有全球最高的创业密度和传奇的 8200 部队人才管线，但面临严重的执行缺口——NIS 52.6 亿的国家计划仅花出 20%，没有可用的国家级超算。',
    overviewEn:
      'The "Startup Nation" has the world\'s highest startup density in AI and the legendary Unit 8200 talent pipeline, but faces a severe execution gap — only 20% of the NIS 5.26 billion national programme has been spent, and there is no operational national supercomputer.',
    strategies: [
      {
        name: '国家 AI 计划',
        nameEn: 'National AI Program',
        year: '2021',
        description: 'NIS 52.6 亿五年计划，涵盖算力、人才、研发',
        descriptionEn: 'NIS 5.26 billion five-year plan covering compute, talent and R&D',
      },
      {
        name: 'AI 监管与伦理政策',
        nameEn: 'AI Policy on Regulation & Ethics',
        year: '2023',
        description: '行业自律为主的监管框架',
        descriptionEn: 'Regulatory framework relying primarily on industry self-regulation',
      },
    ],
    investment: [
      {
        item: '国家 AI 计划预算',
        itemEn: 'National AI Program Budget',
        amount: 'NIS 52.6 亿 (~$14.8 亿)',
        amountEn: 'NIS 5.26 billion (~US$1.48 billion)',
        note: '五年期，实际仅支出 $2.81 亿（~20%）',
        noteEn: 'Five-year programme; only US$281 million actually spent (~20%)',
      },
      {
        item: '超算中心（Nebius）',
        itemEn: 'Supercomputing Centre (Nebius)',
        amount: '$1.4 亿',
        amountEn: 'US$140 million',
        note: '与 Nebius 合建，仍在建设中',
        noteEn: 'Built jointly with Nebius; still under construction',
      },
    ],
    governance:
      '以色列采取软法模式，倾向行业自治，没有水平性 AI 立法。各行业监管机构（如银行业、医疗）各自发布 AI 指引。政治不稳定性严重影响了政策执行的连续性和效率。',
    governanceEn:
      'Israel takes a soft-law approach favouring industry self-regulation, with no horizontal AI legislation. Sectoral regulators (banking, healthcare, etc.) issue their own AI guidance. Political instability has severely undermined the continuity and efficiency of policy execution.',
    keyInitiatives: [
      '8200 部队 AI 人才孵化管线',
      '国家 AI 计划五大支柱',
      'Nebius 超算中心建设',
      '创新局（IIA）AI 创业扶持',
    ],
    keyInitiativesEn: [
      'Unit 8200 AI talent incubation pipeline',
      'Five pillars of the National AI Program',
      'Nebius supercomputing centre construction',
      'Israel Innovation Authority (IIA) AI startup support',
    ],
    strengths: [
      '创业密度全球最高，AI 创业生态极其活跃',
      '8200 部队等军事情报单位提供顶尖 AI 人才',
      'Wiz（$320 亿被 Google 收购）等独角兽展示了创业实力',
      '在网络安全 AI 领域全球领先',
    ],
    strengthsEn: [
      "World's highest startup density; an extremely active AI startup scene",
      'Military intelligence units such as Unit 8200 supply top-tier AI talent',
      'Unicorns like Wiz (acquired by Google for US$32 billion) showcase entrepreneurial strength',
      'Global leader in cybersecurity AI',
    ],
    weaknesses: [
      '国家计划执行严重滞后，预算执行率仅 20%',
      '无可用的国家级超算（新加坡已有 NSCC）',
      '政治动荡影响政策连续性',
      '小国市场，企业多选择海外（尤其美国）上市发展',
    ],
    weaknessesEn: [
      'National programme execution severely lags; only 20% of budget spent',
      'No operational national supercomputer (Singapore has NSCC)',
      'Political turmoil disrupts policy continuity',
      'Small home market; firms typically list and scale overseas (especially in the US)',
    ],
    keyBodies: [
      {
        name: 'MIST（创新科技部）',
        nameEn: 'MIST (Ministry of Innovation, Science and Technology)',
        role: 'AI 政策主管部门',
        roleEn: 'Lead ministry for AI policy',
      },
      {
        name: 'IIA（创新局）',
        nameEn: 'IIA (Israel Innovation Authority)',
        role: 'AI 创业与创新资助',
        roleEn: 'AI startup and innovation funding',
      },
      {
        name: 'Bank of Israel',
        nameEn: 'Bank of Israel',
        role: '金融 AI 监管',
        roleEn: 'Financial AI regulation',
      },
    ],
    sources: [
      'Israel National AI Program（2021）',
      'State Comptroller AI Report（2024）',
      'AI Policy on Regulation & Ethics（2023）',
    ],
    sourcesEn: [
      'Israel National AI Program (2021)',
      'State Comptroller AI Report (2024)',
      'AI Policy on Regulation & Ethics (2023)',
    ],
  },
  {
    flag: '🇰🇷',
    name: '韩国',
    nameEn: 'South Korea',
    fullName: '大韩民国',
    fullNameEn: 'Republic of Korea',
    overview:
      '韩国是中等规模经济体中最雄心勃勃的 AI 参与者，₩100 万亿（~$715 亿）公私基金远超同级别国家。三星、Naver、Kakao 等财阀积极开发自有大模型，2024 年通过 AI 基本法展示了治理决心。',
    overviewEn:
      'South Korea is the most ambitious AI player among mid-sized economies — its ₩100 trillion (~US$71.5 billion) public-private fund vastly outstrips peer nations. Chaebols including Samsung, Naver and Kakao are actively developing proprietary large models, and the 2024 passage of the AI Basic Act signalled governance resolve.',
    strategies: [
      {
        name: 'K-AI 战略',
        nameEn: 'K-AI Strategy',
        year: '2019',
        description: '国家 AI 发展蓝图',
        descriptionEn: 'National AI development blueprint',
      },
      {
        name: 'AI 基本法',
        nameEn: 'AI Basic Act',
        year: '2024',
        description: '2024 年国会通过，2025 年生效，亚洲首部综合性 AI 法律',
        descriptionEn: "Passed by the National Assembly in 2024 and effective 2025; Asia's first full-scope AI law",
      },
      {
        name: 'AI 半导体战略',
        nameEn: 'AI Semiconductor Strategy',
        year: '2024',
        description: '强化 AI 芯片自主能力',
        descriptionEn: 'Strengthen sovereign AI chip capability',
      },
    ],
    investment: [
      {
        item: '公私联合 AI 基金',
        itemEn: 'Public-Private Joint AI Fund',
        amount: '₩100 万亿 (~$715 亿)',
        amountEn: '₩100 trillion (~US$71.5 billion)',
        note: '多年期公私合作基金',
        noteEn: 'Multi-year public-private partnership fund',
      },
      {
        item: 'NVIDIA 合作',
        itemEn: 'NVIDIA Partnership',
        amount: '$30 亿',
        amountEn: 'US$3 billion',
        note: 'AI 基础设施与研发合作',
        noteEn: 'AI infrastructure and R&D collaboration',
      },
    ],
    governance:
      '韩国 2024 年通过 AI 基本法（2025 年生效），是亚洲首部综合性 AI 立法。法案采取风险分级管理，设立 AI 委员会，要求高风险 AI 进行影响评估，同时兼顾创新促进。比新加坡的自愿框架更具法律约束力。',
    governanceEn:
      "South Korea passed the AI Basic Act in 2024 (effective 2025) — Asia's first full-scope AI law. The Act uses a risk-tiered approach, sets up an AI Committee, requires impact assessments for high-risk AI, and tries to balance innovation. It is more legally binding than Singapore's voluntary framework.",
    keyInitiatives: [
      '₩100 万亿公私 AI 基金',
      'AI 基本法实施（2025）',
      '三星/Naver/Kakao 自研大模型',
      '与 NVIDIA $30 亿 AI 合作',
      'AI 半导体自主化战略',
    ],
    keyInitiativesEn: [
      '₩100 trillion public-private AI fund',
      'AI Basic Act implementation (2025)',
      'Proprietary large models from Samsung / Naver / Kakao',
      'US$3 billion AI partnership with NVIDIA',
      'AI semiconductor sovereignty strategy',
    ],
    strengths: [
      '投资规模碾压——₩100 万亿约为新加坡政府 AI 投入的 25 倍',
      '财阀体系可快速大规模部署 AI（三星、LG、现代等）',
      '半导体制造能力（三星、SK 海力士）',
      'AI 基本法提供了比新加坡更强的法律框架',
    ],
    strengthsEn: [
      "Crushing investment scale — ₩100 trillion is roughly 25x Singapore's government AI spend",
      'Chaebol system enables rapid large-scale AI deployment (Samsung, LG, Hyundai, etc.)',
      'Semiconductor manufacturing capability (Samsung, SK hynix)',
      "AI Basic Act provides a stronger legal framework than Singapore's",
    ],
    weaknesses: [
      '财阀主导可能挤压创业生态空间',
      '国际化程度不及新加坡，英语环境较弱',
      '吸引国际人才和企业的能力不如新加坡',
      '人口老龄化带来长期人才挑战',
    ],
    weaknessesEn: [
      'Chaebol dominance may crowd out the startup ecosystem',
      'Less internationalised than Singapore; weaker English-language environment',
      'Less effective at attracting international talent and firms than Singapore',
      'Population ageing poses long-term talent challenges',
    ],
    keyBodies: [
      {
        name: 'MSIT（科学技术信息通信部）',
        nameEn: 'MSIT (Ministry of Science and ICT)',
        role: 'AI 政策主管部门',
        roleEn: 'Lead ministry for AI policy',
      },
      {
        name: 'NIPA（国家信息产业振兴院）',
        nameEn: 'NIPA (National IT Industry Promotion Agency)',
        role: 'AI 产业推进',
        roleEn: 'AI industry promotion',
      },
      {
        name: 'AI 委员会',
        nameEn: 'AI Committee',
        role: 'AI 基本法设立的跨部门协调机构',
        roleEn: 'Cross-ministry coordination body established under the AI Basic Act',
      },
    ],
    sources: ['K-AI Strategy（2019）', 'AI 基本法全文（2024）', '韩国 AI 半导体战略（2024）'],
    sourcesEn: [
      'K-AI Strategy (2019)',
      'Full text of the AI Basic Act (2024)',
      'Korea AI Semiconductor Strategy (2024)',
    ],
  },
  {
    flag: '🇪🇪',
    name: '爱沙尼亚',
    nameEn: 'Estonia',
    fullName: '爱沙尼亚共和国',
    fullNameEn: 'Republic of Estonia',
    overview:
      '爱沙尼亚以仅 €1000 万的 AI 预算实现了 50+ 政府 AI 用例，是极致效率的典范。作为全球数字政府标杆（99% 政府服务在线），其 Bürokratt 虚拟助手和 AI Agent 法律定义走在全球前列。',
    overviewEn:
      'With an AI budget of just €10 million, Estonia has delivered 50+ government AI use cases — a paragon of extreme efficiency. As the global benchmark for digital government (99% of public services online), its Bürokratt virtual assistant and legal definition of AI Agents lead the world.',
    strategies: [
      {
        name: 'Kratt AI 战略',
        nameEn: 'Kratt AI Strategy',
        year: '2019',
        description: '"Kratt"（爱沙尼亚民间传说中的仆人精灵）战略，推动政府 AI 应用',
        descriptionEn: '"Kratt" (a servant spirit from Estonian folklore) strategy, driving government AI adoption',
      },
      {
        name: 'EU AI Act 对齐',
        nameEn: 'EU AI Act Alignment',
        year: '2024',
        description: '作为欧盟成员国，对齐欧盟 AI 法案',
        descriptionEn: 'As an EU member state, aligning with the EU AI Act',
      },
    ],
    investment: [
      {
        item: 'AI 战略预算',
        itemEn: 'AI Strategy Budget',
        amount: '€1000 万',
        amountEn: '€10 million',
        note: '极小预算，极致效率',
        noteEn: 'Minimal budget, maximal efficiency',
      },
    ],
    governance:
      '爱沙尼亚是全球首个为 AI Agent 提供法律定义的国家，允许 AI 系统以"数字助手"身份执行特定政府服务。同时作为欧盟成员国，需对齐 EU AI Act。其治理模式以实用主义和技术先行著称。',
    governanceEn:
      'Estonia is the first country in the world to provide a legal definition of AI Agents, permitting AI systems to perform specific government services as "digital assistants". As an EU member, it must align with the EU AI Act. Its governance model is known for pragmatism and technology-first execution.',
    keyInitiatives: [
      'Bürokratt 政府虚拟助手',
      '50+ 政府 AI 用例部署',
      'AI Agent 法律框架先驱',
      'e-Residency 数字身份体系',
      'X-Road 政府数据交换平台',
    ],
    keyInitiativesEn: [
      'Bürokratt government virtual assistant',
      '50+ government AI use cases deployed',
      'Pioneer of the AI Agent legal framework',
      'e-Residency digital identity system',
      'X-Road government data exchange platform',
    ],
    strengths: [
      '数字政府全球第一——99% 政府服务在线',
      '极致效率：€1000 万实现 50+ AI 用例，新加坡可借鉴的效率标杆',
      'AI Agent 法律定义全球领先',
      '小国敏捷性——政策实验周期极短',
    ],
    strengthsEn: [
      "World's #1 digital government — 99% of public services online",
      'Extreme efficiency: €10 million delivers 50+ AI use cases — a benchmark Singapore can learn from',
      'Global leader in legal definition of AI Agents',
      'Small-state agility — extremely short policy experimentation cycles',
    ],
    weaknesses: [
      '规模极小（人口 130 万），经验不一定可直接复制',
      '缺乏本土科技巨头和 AI 企业',
      '研发投入无法与新加坡的 A*STAR、AISG 相比',
      '人才池有限，依赖欧盟人才流动',
    ],
    weaknessesEn: [
      'Tiny scale (1.3 million population); lessons may not transfer directly',
      'No homegrown tech giants or major AI firms',
      "R&D investment cannot match Singapore's A*STAR or AISG",
      'Limited talent pool; reliant on EU talent mobility',
    ],
    keyBodies: [
      {
        name: 'MEIT（经济事务与信息技术部）',
        nameEn: 'MEIT (Ministry of Economic Affairs and Information Technology)',
        role: 'AI 政策主管',
        roleEn: 'Lead authority for AI policy',
      },
      {
        name: 'e-Estonia',
        nameEn: 'e-Estonia',
        role: '数字政府品牌与推广',
        roleEn: 'Digital government brand and outreach',
      },
      {
        name: 'RIA（信息系统管理局）',
        nameEn: 'RIA (Information System Authority)',
        role: '政府 IT 基础设施',
        roleEn: 'Government IT infrastructure',
      },
    ],
    sources: ['Estonia Kratt AI Strategy（2019）', 'e-Estonia 官方报告', 'Government AI Readiness Index'],
    sourcesEn: ['Estonia Kratt AI Strategy (2019)', 'e-Estonia official reports', 'Government AI Readiness Index'],
  },
  {
    flag: '🇨🇭',
    name: '瑞士',
    nameEn: 'Switzerland',
    fullName: '瑞士联邦',
    fullNameEn: 'Swiss Confederation',
    overview:
      'ETH Zurich 和 EPFL 是全球 AI 研究 Top 5 机构，Google Zurich 是其最大的欧洲研发中心。瑞士以"创新优先、轻监管"闻名，尚未制定独立的 AI 法律，但在基础研究质量上全球领先。',
    overviewEn:
      'ETH Zurich and EPFL are global Top 5 AI research institutions, and Google Zurich is the company\'s largest European R&D centre. Switzerland is known for an "innovation-first, light-touch" stance and has not yet enacted standalone AI legislation, but leads the world in fundamental research quality.',
    strategies: [
      {
        name: '联邦 AI 战略',
        nameEn: 'Federal AI Strategy',
        year: '2020',
        description: '联邦政府 AI 发展指导方针',
        descriptionEn: 'Federal government AI development guidelines',
      },
      {
        name: 'AI 战略更新',
        nameEn: 'AI Strategy Update',
        year: '2025',
        description: '更新版联邦 AI 政策',
        descriptionEn: 'Updated federal AI policy',
      },
    ],
    investment: [
      {
        item: 'AI 研究投入（ETH/EPFL）',
        itemEn: 'AI Research Funding (ETH/EPFL)',
        amount: 'CHF 10 亿+',
        amountEn: 'CHF 1 billion+',
        note: '通过联邦理工系统持续投入',
        noteEn: 'Sustained funding via the federal institutes of technology system',
      },
    ],
    governance:
      '瑞士采取创新优先、轻监管路线，尚未制定独立的 AI 法律。联邦政府倾向于利用现有法律框架管理 AI，同时密切关注欧盟 AI 法案的溢出效应。国际组织总部（WEF、ITU）使其成为全球 AI 治理讨论的重要场所。',
    governanceEn:
      'Switzerland takes an innovation-first, light-touch path and has not enacted standalone AI legislation. The federal government prefers to govern AI through existing legal frameworks while closely tracking spillovers from the EU AI Act. Hosting major international bodies (WEF, ITU) makes it a key venue for global AI governance discussions.',
    keyInitiatives: [
      'ETH AI Center',
      'EPFL AI 研究集群',
      'Google Zurich（欧洲最大研发中心）',
      'Swiss AI Initiative',
      'WEF AI Governance Alliance（总部在日内瓦）',
    ],
    keyInitiativesEn: [
      'ETH AI Center',
      'EPFL AI research cluster',
      'Google Zurich (largest European R&D centre)',
      'Swiss AI Initiative',
      'WEF AI Governance Alliance (headquartered in Geneva)',
    ],
    strengths: [
      'ETH/EPFL 全球 Top 5 AI 研究机构',
      'Google Zurich、Disney Research 等顶级企业实验室',
      '国际人才磁铁——高薪资、高生活质量',
      '国际组织总部带来的全球治理话语权',
    ],
    strengthsEn: [
      'ETH/EPFL — global Top 5 AI research institutions',
      'Top-tier corporate labs including Google Zurich and Disney Research',
      'International talent magnet — high salaries and quality of life',
      'Influence over global governance through hosting of international bodies',
    ],
    weaknesses: [
      'AI 创业生态不如新加坡活跃（缺少东南亚市场腹地）',
      '政府直接投入 AI 产业化不如新加坡（AISG 等）积极',
      '联邦制导致政策协调较慢',
      '高成本可能限制大规模 AI 基础设施建设',
    ],
    weaknessesEn: [
      "AI startup scene less active than Singapore's (no Southeast Asian market hinterland)",
      'Government less proactive in AI industrialisation than Singapore (e.g. AISG)',
      'Federalism slows policy coordination',
      'High costs may constrain large-scale AI infrastructure build-out',
    ],
    keyBodies: [
      {
        name: 'SERI（国家教育研究创新秘书处）',
        nameEn: 'SERI (State Secretariat for Education, Research and Innovation)',
        role: '研究政策',
        roleEn: 'Research policy',
      },
      {
        name: 'ETH Board',
        nameEn: 'ETH Board',
        role: '联邦理工系统管理',
        roleEn: 'Governs the federal institutes of technology system',
      },
      {
        name: 'FDFA（联邦外交事务部）',
        nameEn: 'FDFA (Federal Department of Foreign Affairs)',
        role: '国际 AI 治理',
        roleEn: 'International AI governance',
      },
    ],
    sources: [
      'Swiss Federal AI Strategy（2020/2025）',
      'ETH Zurich AI Center 年报',
      'OECD AI Policy Observatory — Switzerland',
    ],
    sourcesEn: [
      'Swiss Federal AI Strategy (2020/2025)',
      'ETH Zurich AI Center Annual Report',
      'OECD AI Policy Observatory — Switzerland',
    ],
  },
  {
    flag: '🇫🇮',
    name: '芬兰',
    nameEn: 'Finland',
    fullName: '芬兰共和国',
    fullNameEn: 'Republic of Finland',
    overview:
      '芬兰以"Elements of AI"在线课程培训了全国 1% 人口的 AI 素养，是全球 AI 全民教育的先驱。AuroraAI 公民服务平台代表了"以人为本"的 AI 政府服务愿景。',
    overviewEn:
      'Finland used the "Elements of AI" online course to train 1% of its population in AI literacy, pioneering global mass AI education. The AuroraAI citizen services platform embodies a "human-centric" vision for AI-powered government services.',
    strategies: [
      {
        name: 'AI Finland',
        nameEn: 'AI Finland',
        year: '2017',
        description: '国家 AI 战略，聚焦全民 AI 素养和企业应用',
        descriptionEn: 'National AI strategy focused on mass AI literacy and enterprise adoption',
      },
      {
        name: 'AuroraAI 计划',
        nameEn: 'AuroraAI Programme',
        year: '2020',
        description: '基于 AI 的公民生命周期服务平台',
        descriptionEn: 'AI-powered citizen life-event services platform',
      },
    ],
    investment: [
      {
        item: 'AI 商业计划',
        itemEn: 'AI Business Programme',
        amount: '€1 亿+',
        amountEn: '€100 million+',
        note: '推动企业 AI 应用',
        noteEn: 'Drives enterprise AI adoption',
      },
    ],
    governance:
      '芬兰采取人本伦理、价值导向的治理模式，强调 AI 应服务于人的福祉。作为欧盟成员国，积极对齐 EU AI Act。其特色在于将 AI 伦理教育纳入全民素养计划，而非仅依赖法规约束。',
    governanceEn:
      'Finland adopts a human-centric, values-driven governance model, emphasising that AI should serve human welfare. As an EU member, it actively aligns with the EU AI Act. Its distinctive trait is embedding AI ethics into mass-literacy programmes rather than relying solely on regulation.',
    keyInitiatives: [
      'Elements of AI 全民课程（覆盖 1% 人口）',
      'AuroraAI 公民生命周期服务',
      'AI Business Finland 企业转型计划',
      'FCAI（芬兰人工智能中心）',
    ],
    keyInitiativesEn: [
      'Elements of AI mass-literacy course (reaching 1% of the population)',
      'AuroraAI citizen life-event services',
      'AI Business Finland enterprise transformation programme',
      'FCAI (Finnish Center for Artificial Intelligence)',
    ],
    strengths: [
      'AI 全民素养教育全球先驱——Elements of AI 已被翻译为 25+ 种语言',
      'AuroraAI 展示了 AI 公共服务的创新模式',
      '高度数字化的社会基础（与新加坡类似）',
      '人本伦理导向，在国际上建立了"负责任 AI"的声誉',
    ],
    strengthsEn: [
      'Global pioneer in mass AI literacy — Elements of AI translated into 25+ languages',
      'AuroraAI demonstrates an innovative model for AI public services',
      'Highly digitalised social foundation (similar to Singapore)',
      'Human-centric ethics orientation has built an international reputation for "responsible AI"',
    ],
    weaknesses: [
      '市场规模小（550 万人口），AI 产业化规模有限',
      '缺乏本土 AI 龙头企业（Nokia 转型后实力下降）',
      '对 EU AI Act 的合规负担可能限制创新灵活性',
      '冬季气候和地理位置不利于吸引亚洲 AI 人才',
    ],
    weaknessesEn: [
      'Small market (5.5 million population); limited AI industrialisation scale',
      'No homegrown AI champion (Nokia diminished after pivoting)',
      'EU AI Act compliance burden may constrain innovation flexibility',
      'Winter climate and geography make it harder to attract Asian AI talent',
    ],
    keyBodies: [
      {
        name: 'MEE（经济事务与就业部）',
        nameEn: 'MEE (Ministry of Economic Affairs and Employment)',
        role: 'AI 产业政策',
        roleEn: 'AI industrial policy',
      },
      {
        name: 'FCAI（芬兰人工智能中心）',
        nameEn: 'FCAI (Finnish Center for Artificial Intelligence)',
        role: 'AI 研究旗舰',
        roleEn: 'Flagship AI research centre',
      },
      {
        name: 'DVV（数字与人口数据局）',
        nameEn: 'DVV (Digital and Population Data Services Agency)',
        role: 'AuroraAI 运营',
        roleEn: 'Operates AuroraAI',
      },
    ],
    sources: ['Finland AI Strategy（2017/2019 更新）', 'AuroraAI Programme Report', 'Elements of AI 官方统计'],
    sourcesEn: [
      'Finland AI Strategy (2017, updated 2019)',
      'AuroraAI Programme Report',
      'Elements of AI official statistics',
    ],
  },
  {
    flag: '🇨🇦',
    name: '加拿大',
    nameEn: 'Canada',
    fullName: '加拿大',
    fullNameEn: 'Canada',
    overview:
      '加拿大是深度学习的发源地（Hinton、Bengio），拥有 Mila、Vector Institute、Amii 三大世界级 AI 研究所。2024 年联邦预算追加 CAD $24 亿 AI 投资，但 AIDA 立法法案未能通过，治理框架仍以自愿准则为主。',
    overviewEn:
      'Canada is the birthplace of deep learning (Hinton, Bengio) and home to three world-class AI institutes — Mila, Vector Institute and Amii. The 2024 federal budget added CAD $2.4 billion in AI investment, but the AIDA legislation failed to pass, leaving governance reliant on voluntary codes.',
    strategies: [
      {
        name: '泛加拿大 AI 战略',
        nameEn: 'Pan-Canadian AI Strategy',
        year: '2017',
        description: '全球首个国家级 AI 战略，投资三大研究所',
        descriptionEn: "World's first national-level AI strategy; funded the three major institutes",
      },
      {
        name: '泛加拿大 AI 战略 2.0',
        nameEn: 'Pan-Canadian AI Strategy 2.0',
        year: '2024',
        description: 'CAD $24 亿续期，增加算力与商业化',
        descriptionEn: 'CAD $2.4 billion renewal, adding compute and commercialisation',
      },
    ],
    investment: [
      {
        item: '2024 联邦 AI 预算',
        itemEn: '2024 Federal AI Budget',
        amount: 'CAD $24 亿',
        amountEn: 'CAD $2.4 billion',
        note: '含算力、安全、人才、商业化',
        noteEn: 'Covers compute, safety, talent and commercialisation',
      },
      {
        item: '主权算力投资',
        itemEn: 'Sovereign Compute Investment',
        amount: 'CAD $10 亿',
        amountEn: 'CAD $1 billion',
        note: '国家级 AI 计算基础设施',
        noteEn: 'National-level AI compute infrastructure',
      },
    ],
    governance:
      '加拿大 AI 治理以自愿行为准则为主，拟议中的 AIDA（人工智能与数据法案）随国会解散而搁置。加拿大通过 CAISI（加拿大 AI 安全研究所）聚焦前沿 AI 安全研究，在全球 AI 安全治理中发挥重要作用。',
    governanceEn:
      'Canadian AI governance relies primarily on voluntary codes; the proposed AIDA (Artificial Intelligence and Data Act) was shelved when Parliament was dissolved. Canada concentrates on frontier AI safety research through CAISI (Canadian AI Safety Institute) and plays a significant role in global AI safety governance.',
    keyInitiatives: [
      'Mila（蒙特利尔学习算法研究所，Bengio 领导）',
      'Vector Institute（多伦多，Hinton 创立）',
      'Amii（阿尔伯塔机器智能研究所）',
      'CAISI（加拿大 AI 安全研究所）',
      'CAD $10 亿主权算力计划',
    ],
    keyInitiativesEn: [
      'Mila (Montréal Institute for Learning Algorithms, led by Bengio)',
      'Vector Institute (Toronto, founded by Hinton)',
      'Amii (Alberta Machine Intelligence Institute)',
      'CAISI (Canadian AI Safety Institute)',
      'CAD $1 billion sovereign compute programme',
    ],
    strengths: [
      '深度学习发源地——Bengio、Hinton 的学术遗产',
      '三大世界级 AI 研究所形成人才培养网络',
      '在 AI 安全与伦理研究上全球领先（CAISI）',
      '全球首个国家 AI 战略（2017），先发优势明显',
    ],
    strengthsEn: [
      'Birthplace of deep learning — the academic legacy of Bengio and Hinton',
      'Three world-class institutes form a talent development network',
      'Global leader in AI safety and ethics research (CAISI)',
      "World's first national AI strategy (2017); a clear first-mover advantage",
    ],
    weaknesses: [
      'AI 人才大量流向美国（"北向脑流失"倒过来了）',
      'AIDA 法案搁置，治理框架缺乏法律约束力',
      '商业化能力不足——研究强、落地弱',
      '缺少本土 AI 巨头（对标新加坡的 Grab、Sea 等）',
    ],
    weaknessesEn: [
      'Significant AI brain drain to the US (the "northbound brain drain" runs in reverse)',
      'AIDA shelved; governance framework lacks legal force',
      'Weak commercialisation — strong research, weak deployment',
      "No homegrown AI giant (compare to Singapore's Grab or Sea)",
    ],
    keyBodies: [
      {
        name: 'ISED（创新科学与经济发展部）',
        nameEn: 'ISED (Innovation, Science and Economic Development Canada)',
        role: 'AI 政策主管',
        roleEn: 'Lead authority for AI policy',
      },
      {
        name: 'Mila',
        nameEn: 'Mila',
        role: '蒙特利尔 AI 研究所（Bengio）',
        roleEn: 'Montréal AI institute (Bengio)',
      },
      {
        name: 'Vector Institute',
        nameEn: 'Vector Institute',
        role: '多伦多 AI 研究所',
        roleEn: 'Toronto AI institute',
      },
      {
        name: 'Amii',
        nameEn: 'Amii',
        role: '阿尔伯塔 AI 研究所',
        roleEn: 'Alberta AI institute',
      },
      {
        name: 'CAISI',
        nameEn: 'CAISI',
        role: '加拿大 AI 安全研究所',
        roleEn: 'Canadian AI Safety Institute',
      },
    ],
    sources: ['Pan-Canadian AI Strategy（2017/2024）', 'Budget 2024 — AI Chapter', 'CIFAR AI Strategy Reports'],
    sourcesEn: ['Pan-Canadian AI Strategy (2017/2024)', 'Budget 2024 — AI Chapter', 'CIFAR AI Strategy Reports'],
  },
];

export interface InsightItem {
  title: string;
  titleEn?: string;
  text: string;
  textEn?: string;
}

export const insights: InsightItem[] = [
  {
    title: '治理模式分化',
    titleEn: 'Governance Models Diverge',
    text: '各地区在"立法 vs 自律"间分化明显。韩国和台湾选择了 AI 基本法，EU 走强监管路线，而新加坡、以色列、瑞士偏好灵活框架。',
    textEn:
      'Regions are visibly splitting between "legislation vs self-regulation". South Korea and Taiwan have opted for AI Basic Acts, the EU has taken a heavy-regulation route, while Singapore, Israel and Switzerland prefer flexible frameworks.',
  },
  {
    title: '投资规模悬殊',
    titleEn: 'Investment Scales Vary Wildly',
    text: '韩国 ₩100 万亿和 UAE $100B MGX 基金远超其他地区。但爱沙尼亚证明了 €10M 也能实现 50+ 政府 AI 用例——关键在效率而非规模。',
    textEn:
      "South Korea's ₩100 trillion and the UAE's US$100 billion MGX fund dwarf others. But Estonia proves €10 million can deliver 50+ government AI use cases — what matters is efficiency, not scale.",
  },
  {
    title: '人才是核心变量',
    titleEn: 'Talent Is the Core Variable',
    text: '以色列的 8200 部队、加拿大的 Bengio/Hinton、芬兰的全民 AI 教育——每个成功的 AI 策略背后都有独特的人才来源。',
    textEn:
      "Israel's Unit 8200, Canada's Bengio/Hinton, Finland's mass AI education — every successful AI strategy is backed by a distinctive talent source.",
  },
  {
    title: '新加坡的独特定位',
    titleEn: "Singapore's Distinctive Position",
    text: '新加坡在治理框架成熟度（AI Verify）、执行纪律和国际信任度上领先，但在投资规模、本土大模型和基础研究上仍有差距。',
    textEn:
      'Singapore leads on governance maturity (AI Verify), execution discipline and international trust, but trails on investment scale, sovereign large models and fundamental research.',
  },
];

export const dataDate = '2026-02-17';
export const dataDisclaimer =
  '本页数据综合自各国政府官方文件、国际组织报告及公开报道，由 新加坡 AI 观察独立整理。数据截至 2026 年 2 月。';
export const dataDisclaimerEn =
  'Data on this page is compiled from official government documents, international organisation reports and public sources, independently curated by Singapore AI Observatory. Data as of February 2026.';
