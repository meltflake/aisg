export interface EcosystemEntity {
  name: string;
  description: string;
  url?: string;
}

export interface EcosystemCategory {
  name: string;
  icon: string;
  description: string;
  entities: EcosystemEntity[];
}

export const ecosystemCategories: EcosystemCategory[] = [
  {
    name: '基础研究',
    icon: '🔬',
    description: '世界级研究机构支撑 AI 基础科学突破',
    entities: [
      { name: 'A*STAR', description: '新加坡科技研究局，AI 基础研究与应用研究主力', url: 'https://www.a-star.edu.sg/' },
      { name: 'NUS', description: '新加坡国立大学，AI 研究排名亚洲前列。2024.3 成立 NUS AI Institute，整合基础 AI、应用 AI 及社会影响研究', url: 'https://www.nus.edu.sg/' },
      { name: 'NTU', description: '南洋理工大学，AI 与数据科学研究重镇', url: 'https://www.ntu.edu.sg/' },
      { name: 'SMU', description: '新加坡管理大学，AI 在商业与社会应用', url: 'https://www.smu.edu.sg/' },
      { name: 'SUTD', description: '新加坡科技设计大学，AI 与设计交叉创新', url: 'https://www.sutd.edu.sg/' },
    ],
  },
  {
    name: '治理体系',
    icon: '⚖️',
    description: '多层次 AI 治理框架与监管机构',
    entities: [
      { name: 'PDPC', description: '个人数据保护委员会，数据治理与隐私保护', url: 'https://www.pdpc.gov.sg/' },
      { name: 'IMDA', description: '资讯通信媒体发展局，AI 治理框架制定主体', url: 'https://www.imda.gov.sg/' },
      { name: 'AI Verify Foundation', description: '全球首个 AI 治理测试框架，已开源', url: 'https://aiverifyfoundation.sg/' },
      { name: 'MAS', description: '金融管理局，金融 AI 治理（FEAT 原则、Veritas）', url: 'https://www.mas.gov.sg/' },
    ],
  },
  {
    name: '核心技术',
    icon: '🧠',
    description: 'AI Singapore 自研技术平台与工具',
    entities: [
      { name: 'SEA-LION', description: '东南亚多语言大语言模型，支持 11 种语言', url: 'https://aisingapore.org/aiproducts/sea-lion/' },
      { name: 'SEA-HELM', description: '东南亚语言模型评估基准', url: 'https://leaderboard.sea-lion.ai/' },
      { name: 'SEA-Guard', description: 'AI 安全评估与防护工具', url: 'https://sea-lion.ai/blog/sea-guard-safety-model/' },
      { name: 'Aquarium', description: '数据驱动的 AI 模型管理平台' },
    ],
  },
  {
    name: '创新孵化',
    icon: '🚀',
    description: '从实验到产品的 AI 创新加速',
    entities: [
      { name: '100E（已归档）', description: '100 Experiments 计划，资助企业 AI 概念验证' },
      { name: 'AIAP', description: 'AI 学徒计划，沉浸式 AI 工程人才培养', url: 'https://aisingapore.org/innovation/aiap/' },
      { name: 'LADP', description: '学习者 AI 开发计划，16 周实战项目', url: 'https://aisingapore.org/innovation/ladp/' },
    ],
  },
  {
    name: 'AI 产品',
    icon: '📦',
    description: 'AI Singapore 开源产品与工具',
    entities: [
      { name: 'TagUI', description: 'RPA 自动化工具，全球 5000+ Stars', url: 'https://github.com/aisingapore/TagUI' },
      { name: 'PeekingDuck', description: '计算机视觉推理框架', url: 'https://github.com/aisingapore/PeekingDuck' },
      { name: 'SGNLP', description: '新加坡 NLP 模型与工具包', url: 'https://github.com/aisingapore/sgnlp' },
      { name: 'Speech Lab', description: '语音识别与合成技术' },
      { name: 'Synergos', description: '联邦学习框架', url: 'https://github.com/aisingapore/synergos' },
    ],
  },
  {
    name: '人才培养',
    icon: '🎓',
    description: '全方位 AI 人才发展生态',
    entities: [
      { name: 'LearnAI', description: '在线 AI 学习平台，SkillsFuture 可报销', url: 'https://learn.aisingapore.org/' },
      { name: 'AI4I', description: 'AI for Industry 课程系列' },
      { name: 'NAISC', description: '全国 AI 学生挑战赛，2000+ 参与者', url: 'https://aisingapore.org/talent/national-ai-student-challenge/' },
      { name: 'PhD Fellowship', description: '最长 4 年博士奖学金，SGD 6,700/月' },
      { name: 'AMP', description: 'Accelerated Masters Programme，本硕连读快车道' },
    ],
  },
  {
    name: '国际合作',
    icon: '🌏',
    description: '积极参与全球 AI 治理与合作',
    entities: [
      { name: 'GPAI', description: '全球 AI 合作伙伴关系创始成员', url: 'https://gpai.ai/' },
      { name: 'OECD AI Policy Observatory', description: '参与 OECD AI 政策制定', url: 'https://oecd.ai/' },
      { name: 'Bletchley / Seoul 峰会', description: '连续参加两届全球 AI 安全峰会并签署承诺' },
    ],
  },
  {
    name: '产业伙伴',
    icon: '🤝',
    description: '与全球科技巨头深度合作',
    entities: [
      { name: 'Google DeepMind', description: '2025.11 设立东南亚首个 AI 研究实验室，团队含顶尖研究科学家和 AI 影响专家', url: 'https://deepmind.google/blog/were-expanding-our-presence-in-singapore-to-advance-ai-in-the-asia-pacific-region/' },
      { name: 'Microsoft Research Asia', description: '2025.7 设立首个东南亚实验室，与 NUS 合作产业博士项目（IPP）' },
      { name: 'AWS', description: '云计算基础设施与 AI 服务合作，承诺 $9B 基础设施投资' },
      { name: 'NVIDIA', description: '深度合作提供算力支持，新加坡贡献 NVIDIA 约 15% 全球营收（~$2.7B/季度）' },
      { name: 'Sony Research', description: 'AI 技术联合研发' },
      { name: 'Alibaba Cloud', description: '云计算与 AI 平台合作' },
    ],
  },
];
