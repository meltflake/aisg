export interface OpenSourceProject {
  name: string;
  org: string;
  orgType: 'university' | 'corporate-lab' | 'startup';
  description: string;
  stars?: number;
  url: string;
  papers?: string[];
}

export const universityProjects: OpenSourceProject[] = [
  {
    name: 'Colossal-AI',
    org: 'NUS HPC-AI Lab',
    orgType: 'university',
    description: '分布式深度学习训练框架，支持大模型高效训练',
    stars: 39000,
    url: 'https://github.com/hpcaitech/ColossalAI',
  },
  {
    name: 'OpenMMLab',
    org: 'NTU MMLab',
    orgType: 'university',
    description: '全球最广泛使用的计算机视觉工具箱生态系统（mmdetection 等）',
    stars: 30000,
    url: 'https://github.com/open-mmlab',
  },
  {
    name: 'NExT-GPT',
    org: 'NUS NExT++ Research Center',
    orgType: 'university',
    description: '首个任意模态互转大语言模型（文本↔图像↔视频↔音频）',
    stars: 3615,
    url: 'https://github.com/NExT-GPT/NExT-GPT',
    papers: ['ICML 2024'],
  },
  {
    name: 'Show-o / ShowUI',
    org: 'NUS Show Lab',
    orgType: 'university',
    description: '多模态生成与 UI 理解模型',
    url: 'https://github.com/showlab',
    papers: ['ICLR 2025', 'NeurIPS 2025', 'CVPR 2025'],
  },
  {
    name: 'VideoSys',
    org: 'NUS HPC-AI Lab',
    orgType: 'university',
    description: '视频生成系统框架',
    url: 'https://github.com/NUS-HPC-AI-Lab/VideoSys',
  },
  {
    name: 'TSLANet',
    org: 'SUTD',
    orgType: 'university',
    description: '自适应频谱时序分析网络',
    url: '',
    papers: ['ICML 2024'],
  },
];

export const corporateLabProjects: OpenSourceProject[] = [
  {
    name: 'LAVIS / BLIP / BLIP-2',
    org: 'Salesforce AI Research Singapore',
    orgType: 'corporate-lab',
    description: '视觉语言基础模型和一站式库，全球图文 AI 的基石（引用 15,000+）',
    stars: 11167,
    url: 'https://github.com/salesforce/LAVIS',
    papers: ['ICML 2022', 'ICML 2023'],
  },
  {
    name: 'CodeGen',
    org: 'Salesforce AI Research',
    orgType: 'corporate-lab',
    description: '程序合成模型，与 OpenAI Codex 竞争',
    stars: 5169,
    url: 'https://github.com/salesforce/CodeGen',
  },
  {
    name: 'BAGEL',
    org: 'ByteDance Seed (Singapore)',
    orgType: 'corporate-lab',
    description: '开源多模态统一模型（理解+生成）',
    stars: 5674,
    url: 'https://github.com/ByteDance-Seed/BAGEL',
  },
  {
    name: 'VideoLLaMA3',
    org: 'Alibaba DAMO-NLP-SG',
    orgType: 'corporate-lab',
    description: '前沿视频理解多模态模型',
    url: 'https://huggingface.co/DAMO-NLP-SG',
  },
  {
    name: 'Sailor LLM',
    org: 'Sea AI Lab (SAIL)',
    orgType: 'corporate-lab',
    description: '面向东南亚的开源语言模型',
    stars: 138,
    url: 'https://github.com/sail-sg/sailor-llm',
    papers: ['EMNLP 2024'],
  },
  {
    name: 'OAT',
    org: 'Sea AI Lab (SAIL)',
    orgType: 'corporate-lab',
    description: 'LLM 在线对齐训练框架',
    stars: 628,
    url: 'https://github.com/sail-sg/oat',
  },
  {
    name: 'Zero-Bubble Pipeline Parallelism',
    org: 'Sea AI Lab (SAIL)',
    orgType: 'corporate-lab',
    description: '新型流水线并行训练效率优化',
    stars: 449,
    url: 'https://github.com/sail-sg/zero-bubble-pipeline-parallelism',
  },
];

export const startupProjects: OpenSourceProject[] = [
  {
    name: 'Jan',
    org: 'Jan (Homebrew Computer Company)',
    orgType: 'startup',
    description: '离线 ChatGPT 替代品，本地运行 AI 助手',
    stars: 25000,
    url: 'https://github.com/janhq/jan',
  },
];

export const summary = {
  note: '新加坡的 AI 开源贡献远超政府项目本身。Salesforce 新加坡实验室的 BLIP 系列是全球视觉语言 AI 的基石，NUS 孵化的 Colossal-AI 是最流行的分布式训练框架之一，NTU 的 OpenMMLab 是计算机视觉领域的事实标准。',
  dataDate: '2026-02-17',
};

export const dataDisclaimer = '数据截至 2026 年 2 月，GitHub stars 为近似值。如有遗漏或错误，欢迎提交 Issue。';
