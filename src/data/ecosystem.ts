export interface EcosystemEntity {
  name: string;
  nameEn?: string;
  description: string;
  descriptionEn?: string;
  url?: string;
}

export interface EcosystemCategory {
  name: string;
  nameEn?: string;
  icon: string;
  description: string;
  descriptionEn?: string;
  entities: EcosystemEntity[];
}

export const ecosystemCategories: EcosystemCategory[] = [
  {
    name: '基础研究',
    nameEn: 'Foundational Research',
    icon: '🔬',
    description: '世界级研究机构支撑 AI 基础科学突破',
    descriptionEn: 'World-class research institutions powering foundational AI breakthroughs',
    entities: [
      {
        name: 'A*STAR',
        nameEn: 'A*STAR',
        description: '新加坡科技研究局，AI 基础研究与应用研究主力',
        descriptionEn:
          'Singapore Agency for Science, Technology and Research; primary engine for foundational and applied AI research',
        url: 'https://www.a-star.edu.sg/',
      },
      {
        name: 'NUS',
        nameEn: 'NUS',
        description:
          '新加坡国立大学，AI 研究排名亚洲前列。2024.3 成立 NUS AI Institute，整合基础 AI、应用 AI 及社会影响研究',
        descriptionEn:
          "National University of Singapore; among Asia's top AI research universities. Launched the NUS AI Institute in March 2024, bringing together foundational AI, applied AI and societal impact research",
        url: 'https://www.nus.edu.sg/',
      },
      {
        name: 'NTU',
        nameEn: 'NTU',
        description: '南洋理工大学，AI 与数据科学研究重镇',
        descriptionEn: 'Nanyang Technological University; major hub for AI and data science research',
        url: 'https://www.ntu.edu.sg/',
      },
      {
        name: 'SMU',
        nameEn: 'SMU',
        description: '新加坡管理大学，AI 在商业与社会应用',
        descriptionEn: 'Singapore Management University; AI applications in business and society',
        url: 'https://www.smu.edu.sg/',
      },
      {
        name: 'SUTD',
        nameEn: 'SUTD',
        description: '新加坡科技设计大学，AI 与设计交叉创新',
        descriptionEn: 'Singapore University of Technology and Design; innovation at the intersection of AI and design',
        url: 'https://www.sutd.edu.sg/',
      },
    ],
  },
  {
    name: '治理体系',
    nameEn: 'Governance Framework',
    icon: '⚖️',
    description: '多层次 AI 治理框架与监管机构',
    descriptionEn: 'Layered AI governance frameworks and regulators',
    entities: [
      {
        name: 'PDPC',
        nameEn: 'PDPC',
        description: '个人数据保护委员会，数据治理与隐私保护',
        descriptionEn: 'Personal Data Protection Commission; data governance and privacy protection',
        url: 'https://www.pdpc.gov.sg/',
      },
      {
        name: 'IMDA',
        nameEn: 'IMDA',
        description: '资讯通信媒体发展局，AI 治理框架制定主体',
        descriptionEn: 'Infocomm Media Development Authority; lead agency for AI governance frameworks',
        url: 'https://www.imda.gov.sg/',
      },
      {
        name: 'AI Verify Foundation',
        nameEn: 'AI Verify Foundation',
        description: '全球首个 AI 治理测试框架，已开源',
        descriptionEn: "The world's first AI governance testing framework, now open source",
        url: 'https://aiverifyfoundation.sg/',
      },
      {
        name: 'MAS',
        nameEn: 'MAS',
        description: '金融管理局，金融 AI 治理（FEAT 原则、Veritas）',
        descriptionEn: 'Monetary Authority of Singapore; AI governance in finance (FEAT principles, Veritas)',
        url: 'https://www.mas.gov.sg/',
      },
    ],
  },
  {
    name: '核心技术',
    nameEn: 'Core Technology',
    icon: '🧠',
    description: 'AI Singapore 自研技术平台与工具',
    descriptionEn: "AI Singapore's in-house technology platforms and tools",
    entities: [
      {
        name: 'SEA-LION',
        nameEn: 'SEA-LION',
        description: '东南亚多语言大语言模型，支持 11 种语言',
        descriptionEn: 'Southeast Asian multilingual large language model, supporting 11 languages',
        url: 'https://aisingapore.org/aiproducts/sea-lion/',
      },
      {
        name: 'SEA-HELM',
        nameEn: 'SEA-HELM',
        description: '东南亚语言模型评估基准',
        descriptionEn: 'Benchmark for evaluating Southeast Asian language models',
        url: 'https://leaderboard.sea-lion.ai/',
      },
      {
        name: 'SEA-Guard',
        nameEn: 'SEA-Guard',
        description: 'AI 安全评估与防护工具',
        descriptionEn: 'AI safety evaluation and guardrail toolkit',
        url: 'https://sea-lion.ai/blog/sea-guard-safety-model/',
      },
      {
        name: 'Aquarium',
        nameEn: 'Aquarium',
        description: '数据驱动的 AI 模型管理平台',
        descriptionEn: 'Data-driven AI model management platform',
      },
    ],
  },
  {
    name: '创新孵化',
    nameEn: 'Innovation & Incubation',
    icon: '🚀',
    description: '从实验到产品的 AI 创新加速',
    descriptionEn: 'From experiment to product — accelerating AI innovation',
    entities: [
      {
        name: '100E（已归档）',
        nameEn: '100E (Archived)',
        description: '100 Experiments 计划，资助企业 AI 概念验证',
        descriptionEn: '100 Experiments programme; funded enterprise AI proofs of concept',
      },
      {
        name: 'AIAP',
        nameEn: 'AIAP',
        description: 'AI 学徒计划，沉浸式 AI 工程人才培养',
        descriptionEn: 'AI Apprenticeship Programme; immersive training for AI engineering talent',
        url: 'https://aisingapore.org/innovation/aiap/',
      },
      {
        name: 'LADP',
        nameEn: 'LADP',
        description: '学习者 AI 开发计划，16 周实战项目',
        descriptionEn: "Learners' AI Development Programme; 16-week hands-on project track",
        url: 'https://aisingapore.org/innovation/ladp/',
      },
    ],
  },
  {
    name: 'AI 产品',
    nameEn: 'AI Products',
    icon: '📦',
    description: 'AI Singapore 开源产品与工具',
    descriptionEn: "AI Singapore's open-source products and tools",
    entities: [
      {
        name: 'TagUI',
        nameEn: 'TagUI',
        description: 'RPA 自动化工具，全球 5000+ Stars',
        descriptionEn: 'RPA automation tool with 5,000+ GitHub stars worldwide',
        url: 'https://github.com/aisingapore/TagUI',
      },
      {
        name: 'PeekingDuck',
        nameEn: 'PeekingDuck',
        description: '计算机视觉推理框架',
        descriptionEn: 'Computer vision inference framework',
        url: 'https://github.com/aisingapore/PeekingDuck',
      },
      {
        name: 'SGNLP',
        nameEn: 'SGNLP',
        description: '新加坡 NLP 模型与工具包',
        descriptionEn: 'Singapore-focused NLP models and toolkit',
        url: 'https://github.com/aisingapore/sgnlp',
      },
      {
        name: 'Speech Lab',
        nameEn: 'Speech Lab',
        description: '语音识别与合成技术',
        descriptionEn: 'Speech recognition and synthesis technologies',
      },
      {
        name: 'Synergos',
        nameEn: 'Synergos',
        description: '联邦学习框架',
        descriptionEn: 'Federated learning framework',
        url: 'https://github.com/aisingapore/synergos',
      },
    ],
  },
  {
    name: '人才培养',
    nameEn: 'Talent Development',
    icon: '🎓',
    description: '全方位 AI 人才发展生态',
    descriptionEn: 'A full pipeline for AI talent development',
    entities: [
      {
        name: 'LearnAI',
        nameEn: 'LearnAI',
        description: '在线 AI 学习平台，SkillsFuture 可报销',
        descriptionEn: 'Online AI learning platform, eligible for SkillsFuture reimbursement',
        url: 'https://learn.aisingapore.org/',
      },
      {
        name: 'AI4I',
        nameEn: 'AI4I',
        description: 'AI for Industry 课程系列',
        descriptionEn: 'AI for Industry course series',
      },
      {
        name: 'NAISC',
        nameEn: 'NAISC',
        description: '全国 AI 学生挑战赛，2000+ 参与者',
        descriptionEn: 'National AI Student Challenge; 2,000+ participants',
        url: 'https://aisingapore.org/talent/national-ai-student-challenge/',
      },
      {
        name: 'PhD Fellowship',
        nameEn: 'PhD Fellowship',
        description: '最长 4 年博士奖学金，SGD 6,700/月',
        descriptionEn: 'Up to 4-year doctoral fellowship at SGD 6,700/month',
      },
      {
        name: 'AMP',
        nameEn: 'AMP',
        description: 'Accelerated Masters Programme，本硕连读快车道',
        descriptionEn: 'Accelerated Masters Programme; fast track from undergraduate to masters',
      },
    ],
  },
  {
    name: '国际合作',
    nameEn: 'International Cooperation',
    icon: '🌏',
    description: '积极参与全球 AI 治理与合作',
    descriptionEn: 'An active hand in global AI governance and cooperation',
    entities: [
      {
        name: 'GPAI',
        nameEn: 'GPAI',
        description: '全球 AI 合作伙伴关系创始成员',
        descriptionEn: 'Founding member of the Global Partnership on AI',
        url: 'https://gpai.ai/',
      },
      {
        name: 'OECD AI Policy Observatory',
        nameEn: 'OECD AI Policy Observatory',
        description: '参与 OECD AI 政策制定',
        descriptionEn: 'Participating in OECD AI policy development',
        url: 'https://oecd.ai/',
      },
      {
        name: 'Bletchley / Seoul 峰会',
        nameEn: 'Bletchley / Seoul Summits',
        description: '连续参加两届全球 AI 安全峰会并签署承诺',
        descriptionEn: 'Attended both global AI Safety Summits and signed the resulting commitments',
      },
    ],
  },
  {
    name: '医疗科技',
    nameEn: 'Health Technology',
    icon: '🏥',
    description: '国家级医疗 AI 与健康科技平台',
    descriptionEn: 'National-level platforms for medical AI and health technology',
    entities: [
      {
        name: 'Synapxe',
        nameEn: 'Synapxe',
        description: '新加坡国家医疗科技局，负责公共医疗IT基础设施与AI产品开发',
        descriptionEn:
          "Singapore's national HealthTech agency, responsible for public-sector healthcare IT infrastructure and AI product development",
        url: 'https://www.synapxe.sg/',
      },
      {
        name: 'ACE-AI',
        nameEn: 'ACE-AI',
        description:
          '由 Synapxe 开发的 AI 健康筛查工具，预测糖尿病及高脂血症风险，2027 年起推广至所有 Healthier SG 诊所',
        descriptionEn:
          'AI health-screening tool developed by Synapxe that predicts diabetes and hyperlipidaemia risk; rollout to all Healthier SG clinics from 2027',
      },
    ],
  },
  {
    name: '产业伙伴',
    nameEn: 'Industry Partners',
    icon: '🤝',
    description: '与全球科技巨头深度合作',
    descriptionEn: 'Deep partnerships with global technology leaders',
    entities: [
      {
        name: 'Google DeepMind',
        nameEn: 'Google DeepMind',
        description: '2025.11 设立东南亚首个 AI 研究实验室，团队含顶尖研究科学家和 AI 影响专家',
        descriptionEn:
          'Established its first Southeast Asian AI research lab in November 2025, staffed with leading research scientists and AI impact specialists',
        url: 'https://deepmind.google/blog/were-expanding-our-presence-in-singapore-to-advance-ai-in-the-asia-pacific-region/',
      },
      {
        name: 'Microsoft Research Asia',
        nameEn: 'Microsoft Research Asia',
        description: '2025.7 设立首个东南亚实验室，与 NUS 合作产业博士项目（IPP）',
        descriptionEn:
          'Opened its first Southeast Asian lab in July 2025, partnering with NUS on the Industrial PhD Programme (IPP)',
      },
      {
        name: 'AWS',
        nameEn: 'AWS',
        description: '云计算基础设施与 AI 服务合作，承诺 $9B 基础设施投资',
        descriptionEn:
          'Cloud infrastructure and AI services partnership, with $9B in committed infrastructure investment',
      },
      {
        name: 'NVIDIA',
        nameEn: 'NVIDIA',
        description: '深度合作提供算力支持，新加坡贡献 NVIDIA 约 15% 全球营收（~$2.7B/季度）',
        descriptionEn:
          "Deep compute partnership; Singapore contributes roughly 15% of NVIDIA's global revenue (~$2.7B per quarter)",
      },
      {
        name: 'Sony Research',
        nameEn: 'Sony Research',
        description: 'AI 技术联合研发',
        descriptionEn: 'Joint AI technology R&D',
      },
      {
        name: 'Alibaba Cloud',
        nameEn: 'Alibaba Cloud',
        description: '云计算与 AI 平台合作',
        descriptionEn: 'Cloud computing and AI platform partnership',
      },
    ],
  },
];
