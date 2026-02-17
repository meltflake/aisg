// AI 创业生态数据
// 数据截至 2026-02-17

export const ecosystemStats = {
  totalStartups: '650+',
  globalRank: 3,
  seaFundingShare: '68%',
  totalVCRaised: '$8.4B+',
  unicorns: 9,
  govCommitment: 'S$1.6B+',
  dataDate: '2026-02-17',
};

export interface Unicorn {
  name: string;
  sector: string;
  raised: string;
  valuation: string;
  status: string;
  url: string;
}

export const unicorns: Unicorn[] = [
  { name: 'Grab', sector: '超级应用 / 物流 AI', raised: '$12B+', valuation: '$20.2B', status: '已上市 (NASDAQ)', url: 'https://www.grab.com' },
  { name: 'Trax', sector: '零售计算机视觉', raised: '$1.14B', valuation: '$2.4B', status: '活跃', url: 'https://traxretail.com' },
  { name: 'Advance Intelligence', sector: '金融科技 AI / BNPL', raised: '$620M', valuation: '$2B', status: '活跃', url: 'https://www.advance.ai' },
  { name: 'Biofourmis', sector: '数字健康 AI', raised: '$463.6M', valuation: '$1.3B', status: '活跃', url: 'https://www.biofourmis.com' },
  { name: 'Nium', sector: '支付 AI', raised: '$312M', valuation: '$1.4B', status: '活跃', url: 'https://www.nium.com' },
  { name: 'PatSnap', sector: '专利/知识产权 AI', raised: '$300M+', valuation: '$1B', status: '活跃', url: 'https://www.patsnap.com' },
  { name: 'Carro', sector: '汽车 AI', raised: '$1.01B', valuation: '$1B+', status: '活跃', url: 'https://www.carro.co' },
  { name: 'Sygnum', sector: '数字资产/AI 银行', raised: '$58M+', valuation: '$1B+', status: '活跃 (2025.1)', url: 'https://www.sygnum.com' },
  { name: 'Near', sector: '位置智能 AI', raised: '$234M', valuation: '—', status: '活跃', url: 'https://near.com' },
];

export interface Startup {
  name: string;
  description: string;
  raised?: string;
  investors?: string;
  founded?: string;
  url?: string | null;
  highlight?: string;
}

export interface Vertical {
  name: string;
  icon: string;
  startups: Startup[];
}

export const verticals: Vertical[] = [
  {
    name: '金融科技',
    icon: '🏦',
    startups: [
      { name: 'ADVANCE.AI', description: 'AI 驱动的数字身份验证和风控', raised: '$200M', url: 'https://www.advance.ai' },
      { name: 'Aspire', description: 'AI 驱动的中小企业金融平台', raised: '$300M+', url: 'https://aspireapp.com' },
      { name: 'Endowus', description: 'AI 智能投顾', raised: '$90M+', highlight: 'AUM $7B+', url: 'https://endowus.com' },
      { name: 'Tookitaki', description: 'AI 反洗钱合规', raised: '$35M+', url: 'https://www.tookitaki.com' },
      { name: 'CredoLab', description: '替代数据 AI 信用评分', raised: '$12M+', url: 'https://www.credolab.com' },
      { name: 'Transparently.AI', description: 'AI 财务欺诈检测', investors: 'Franklin Templeton', url: 'https://www.transparently.ai' },
    ],
  },
  {
    name: '医疗健康',
    icon: '🏥',
    startups: [
      { name: 'Biofourmis', description: '远程患者监护 AI 平台', raised: '$463.6M', highlight: '独角兽', url: 'https://www.biofourmis.com' },
      { name: 'Qritive', description: 'AI 数字病理诊断', raised: '$7.5M+', url: 'https://www.qritive.com' },
      { name: 'Engine Bio', description: 'CRISPR + ML 诊断平台', raised: '$10M+', url: 'https://www.enginebio.com' },
      { name: 'Bot MD', description: '医疗 AI 助手', investors: 'SGInnovate', url: 'https://www.botmd.io' },
      { name: 'Nanyang Biologics', description: 'AI 药物发现', highlight: '计划 $1.5B SPAC 上市', url: null },
    ],
  },
  {
    name: '企业 SaaS',
    icon: '💼',
    startups: [
      { name: 'Trax', description: '零售 AI 计算机视觉', raised: '$1.07B', highlight: '新加坡融资最多的 AI 公司', url: 'https://traxretail.com' },
      { name: 'Near', description: '位置智能 AI 平台', raised: '$234M', url: 'https://near.com' },
      { name: 'ViSenze', description: 'AI 视觉搜索', raised: '$34M', url: 'https://www.visenze.com' },
      { name: 'WIZ.AI', description: 'Singlish 方言 AI 客服', raised: '$10M+', url: 'https://www.wiz.ai' },
      { name: 'Level3AI', description: '企业 AI Agent', raised: '$13M (Seed, 2026.1)', investors: 'Lightspeed', url: null },
    ],
  },
  {
    name: 'AI 基础设施',
    icon: '⚙️',
    startups: [
      { name: 'Aicadium', description: 'MLOps 平台', highlight: '被 Temasek 收购', url: null },
      { name: 'Datature', description: '无代码计算机视觉平台', investors: 'SGInnovate', url: 'https://www.datature.io' },
      { name: 'Sentient.io', description: '东盟 AI API 微服务', raised: '$7M', url: 'https://www.sentient.io' },
      { name: 'Mindverse AI', description: '主权 AI 基础设施', raised: '$5M', url: null },
      { name: 'Jan', description: '离线本地 AI 助手（开源）', highlight: 'GitHub 25,000 Stars', url: 'https://jan.ai' },
      { name: 'Galatek', description: '生命科学/半导体 AI 自动化', raised: '$30M Series A (2025.12)', url: null },
    ],
  },
  {
    name: '机器人与自动驾驶',
    icon: '🤖',
    startups: [
      { name: 'Eureka Robotics', description: 'AI 精密视觉机器人', raised: '$10.5M Series A', investors: 'B Capital', url: 'https://eurekarobotics.com' },
      { name: 'Augmentus', description: '无代码机器人编程', investors: 'Applied Ventures', url: 'https://www.augmentus.tech' },
      { name: 'Botsync', description: '自主移动机器人', investors: 'SGInnovate', url: 'https://www.botsync.co' },
      { name: 'Moovita', description: '自动驾驶出行', raised: '$5M+', url: 'https://www.moovita.com' },
    ],
  },
];

export interface Exit {
  name: string;
  description: string;
  acquirer: string;
  amount: string;
  year: number | null;
  note: string;
}

export const exits: Exit[] = [
  { name: 'Manus', description: 'AI Agent 平台', acquirer: 'Meta', amount: '$2B+', year: 2025, note: '新加坡最大 AI 收购案' },
  { name: 'AIDA Technologies', description: 'AI 决策引擎', acquirer: '被收购', amount: '—', year: null, note: 'SGInnovate 投资组合' },
  { name: 'Musiio', description: 'AI 音乐标签', acquirer: 'SoundCloud', amount: '—', year: 2022, note: '' },
  { name: 'Pencil', description: 'AI 广告创意生成', acquirer: 'Brandtech Group', amount: '—', year: 2022, note: '' },
  { name: 'TabSquare', description: 'AI 餐厅管理', acquirer: 'Olo', amount: '—', year: null, note: '' },
];

export interface Investor {
  name: string;
  type: string;
  stats: string;
  focus: string;
}

export const investors: Investor[] = [
  { name: 'SGInnovate', type: '政府深科技投资', stats: '167 笔投资，25 个退出', focus: 'AI、量子、区块链' },
  { name: 'Temasek', type: '主权财富基金', stats: '2025 年 60 笔交易', focus: 'AI 基础设施、数据中心' },
  { name: 'GIC', type: '主权财富基金', stats: '2025 年 42 笔交易', focus: 'AI 基础设施' },
  { name: 'Antler', type: '早期 VC', stats: '最活跃早期投资者，2025 年 14 家 AI', focus: 'AI 创业' },
  { name: 'Vertex Ventures', type: 'VC (Temasek)', stats: '—', focus: '东南亚科技' },
  { name: "Monk's Hill Ventures", type: 'VC', stats: '—', focus: '东南亚科技' },
];
