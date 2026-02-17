export const seaLionStats = {
  totalModels: 56,
  totalDownloads: 27988,
  totalLikes: 278,
  topModel: 'Gemma-SEA-LION-v4-27B-IT',
  topModelDownloads: 5034,
  dataSource: 'HuggingFace API',
  dataDate: '2026-02-17',
  huggingfaceUrl: 'https://huggingface.co/aisingapore',
};

export const seaLionVersions = [
  { version: 'v4', models: 13, downloads: 15267, likes: 50, period: '2025-2026' },
  { version: 'v3.5', models: 6, downloads: 2853, likes: 15, period: '2025' },
  { version: 'v3', models: 11, downloads: 5797, likes: 43, period: '2024-2025' },
  { version: 'v2', models: 4, downloads: 1428, likes: 26, period: '2024' },
  { version: 'v1', models: 6, downloads: 2157, likes: 104, period: '2023-2024' },
];

export const modelComparison =
  '作为对比：Meta Llama 3 单模型下载量达千万级，Mistral 和 Qwen 系列在百万级。SEA-LION 的定位是东南亚多语言市场，用户群体较小但增长趋势明显（v4 占总下载量 55%）。';

export const seaGuardModels = [
  { name: 'Gemma-SEA-Guard-12B-2602', downloads: 191, likes: 191, type: 'Image-Text-to-Text' },
  { name: 'Qwen-SEA-Guard-8B-2602', downloads: 108, likes: 108, type: 'Image-Text-to-Text' },
  { name: 'Qwen-SEA-Guard-4B-2602', downloads: 24, likes: 24, type: 'Image-Text-to-Text' },
  { name: 'Llama-SEA-Guard-8B-2602', downloads: 48, likes: 48, type: 'Text Generation' },
];

export const seaGuardStats = {
  totalModels: 4,
  totalDownloads: 371,
  note: '2026 年 2 月发布，尚处于早期阶段',
};

export const aiVerify = {
  name: 'AI Verify',
  description: '全球首个 AI 治理测试框架',
  openSourceDate: '2023-06',
  githubUrl: 'https://github.com/aiverify-foundation/aiverify',
  features: [
    '测试 AI 系统是否符合 11 项国际公认治理原则',
    '覆盖传统 AI + 生成式 AI（2025 年 5 月新增）',
    '对齐 EU、OECD、US 治理框架',
  ],
  partners: [
    'AWS',
    'DBS Bank',
    'Google',
    'Meta',
    'Microsoft',
    'Singapore Airlines',
    'NCS/Singtel',
    'Standard Chartered',
  ],
};

export const openSourceProjects = [
  {
    name: 'TagUI',
    description: '免费 RPA 网页/桌面自动化工具',
    stars: 6200,
    language: 'JavaScript',
    url: 'https://github.com/aisingapore/TagUI',
  },
  {
    name: 'SEA-LION',
    description: '东南亚多语言多模态大模型',
    stars: 387,
    language: 'Python',
    url: 'https://github.com/aisingapore/sealion',
  },
  {
    name: 'PeekingDuck',
    description: '模块化计算机视觉推理框架',
    stars: 175,
    language: 'Python',
    url: 'https://github.com/aisingapore/PeekingDuck',
  },
  {
    name: 'SGNLP',
    description: '新加坡 NLP 研究社区模型',
    stars: 36,
    language: 'Python',
    url: 'https://github.com/aisingapore/sgnlp',
  },
  {
    name: 'Speech Lab',
    description: 'Singlish 语音转文字',
    stars: null,
    language: 'Python',
    url: null,
  },
  {
    name: 'Synergos',
    description: '隐私保护联邦学习框架',
    stars: null,
    language: 'Python',
    url: null,
  },
];

export const papers = [
  {
    title: 'SEA-Guard: Culturally Grounded Multilingual Safeguard for Southeast Asia',
    titleZh: 'SEA-Guard：面向东南亚的文化本地化多语言安全护栏',
    arxivId: '2602.01618',
    url: 'https://arxiv.org/abs/2602.01618',
    translationUrl: '/aisg/papers/sea-guard-zh.md',
    year: 2026,
  },
  {
    title: 'SEA-SafeguardBench: Evaluating AI Safety in SEA Languages and Cultures',
    titleZh: 'SEA-SafeguardBench：东南亚语言与文化 AI 安全评测基准',
    arxivId: '2512.05501',
    url: 'https://arxiv.org/abs/2512.05501',
    translationUrl: '/aisg/papers/sea-safeguardbench-zh.md',
    year: 2025,
  },
  {
    title: 'SEA-LION: Southeast Asian Languages in One Network',
    titleZh: 'SEA-LION：东南亚语言统一网络',
    arxivId: '2504.05747',
    url: 'https://arxiv.org/abs/2504.05747',
    translationUrl: '/aisg/papers/sea-lion-zh.md',
    year: 2025,
  },
  {
    title: 'SEA-HELM: Southeast Asian Holistic Evaluation of Language Models',
    titleZh: 'SEA-HELM：东南亚语言模型综合评测',
    arxivId: '2502.14301',
    url: 'https://arxiv.org/abs/2502.14301',
    translationUrl: '/aisg/papers/sea-helm-zh.md',
    year: 2025,
  },
];

export const dataDisclaimer =
  '本页数据来源：HuggingFace API、GitHub API，由 SG AI 观察独立采集，非官方数据。最后更新：2026-02-17。';
