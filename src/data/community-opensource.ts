export interface OpenSourceProject {
  name: string;
  org: string;
  orgType: 'university' | 'corporate-lab' | 'startup';
  description: string;
  descriptionEn?: string;
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
    descriptionEn: 'Distributed deep-learning training framework optimised for efficient large-model training',
    stars: 39000,
    url: 'https://github.com/hpcaitech/ColossalAI',
  },
  {
    name: 'OpenMMLab',
    org: 'NTU MMLab',
    orgType: 'university',
    description: '全球最广泛使用的计算机视觉工具箱生态系统（mmdetection 等）',
    descriptionEn: "The world's most widely used computer vision toolbox ecosystem (including mmdetection)",
    stars: 30000,
    url: 'https://github.com/open-mmlab',
  },
  {
    name: 'NExT-GPT',
    org: 'NUS NExT++ Research Center',
    orgType: 'university',
    description: '首个任意模态互转大语言模型（文本↔图像↔视频↔音频）',
    descriptionEn: 'The first any-to-any modality LLM (text ↔ image ↔ video ↔ audio)',
    stars: 3615,
    url: 'https://github.com/NExT-GPT/NExT-GPT',
    papers: ['ICML 2024'],
  },
  {
    name: 'Show-o / ShowUI',
    org: 'NUS Show Lab',
    orgType: 'university',
    description: '多模态生成与 UI 理解模型',
    descriptionEn: 'Models for multimodal generation and UI understanding',
    url: 'https://github.com/showlab',
    papers: ['ICLR 2025', 'NeurIPS 2025', 'CVPR 2025'],
  },
  {
    name: 'VideoSys',
    org: 'NUS HPC-AI Lab',
    orgType: 'university',
    description: '视频生成系统框架',
    descriptionEn: 'Video generation system framework',
    url: 'https://github.com/NUS-HPC-AI-Lab/VideoSys',
  },
  {
    name: 'TSLANet',
    org: 'SUTD',
    orgType: 'university',
    description: '自适应频谱时序分析网络',
    descriptionEn: 'Adaptive spectral network for time-series analysis',
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
    descriptionEn:
      'Vision-language foundation models and a one-stop library; a cornerstone of global image-text AI (15,000+ citations)',
    stars: 11167,
    url: 'https://github.com/salesforce/LAVIS',
    papers: ['ICML 2022', 'ICML 2023'],
  },
  {
    name: 'CodeGen',
    org: 'Salesforce AI Research',
    orgType: 'corporate-lab',
    description: '程序合成模型，与 OpenAI Codex 竞争',
    descriptionEn: 'Program synthesis model, competing with OpenAI Codex',
    stars: 5169,
    url: 'https://github.com/salesforce/CodeGen',
  },
  {
    name: 'BAGEL',
    org: 'ByteDance Seed (Singapore)',
    orgType: 'corporate-lab',
    description: '开源多模态统一模型（理解+生成）',
    descriptionEn: 'Open-source unified multimodal model (understanding + generation)',
    stars: 5674,
    url: 'https://github.com/ByteDance-Seed/BAGEL',
  },
  {
    name: 'VideoLLaMA3',
    org: 'Alibaba DAMO-NLP-SG',
    orgType: 'corporate-lab',
    description: '前沿视频理解多模态模型',
    descriptionEn: 'A leading multimodal video understanding model',
    url: 'https://huggingface.co/DAMO-NLP-SG',
  },
  {
    name: 'Sailor LLM',
    org: 'Sea AI Lab (SAIL)',
    orgType: 'corporate-lab',
    description: '面向东南亚的开源语言模型',
    descriptionEn: 'Open-source language model for Southeast Asia',
    stars: 138,
    url: 'https://github.com/sail-sg/sailor-llm',
    papers: ['EMNLP 2024'],
  },
  {
    name: 'OAT',
    org: 'Sea AI Lab (SAIL)',
    orgType: 'corporate-lab',
    description: 'LLM 在线对齐训练框架',
    descriptionEn: 'Online alignment training framework for LLMs',
    stars: 628,
    url: 'https://github.com/sail-sg/oat',
  },
  {
    name: 'Zero-Bubble Pipeline Parallelism',
    org: 'Sea AI Lab (SAIL)',
    orgType: 'corporate-lab',
    description: '新型流水线并行训练效率优化',
    descriptionEn: 'Novel pipeline-parallelism technique for training efficiency',
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
    descriptionEn: 'Offline ChatGPT alternative; AI assistant that runs locally',
    stars: 25000,
    url: 'https://github.com/janhq/jan',
  },
];

export const summary = {
  note: '新加坡的 AI 开源贡献远超政府项目本身。Salesforce 新加坡实验室的 BLIP 系列是全球视觉语言 AI 的基石，NUS 孵化的 Colossal-AI 是最流行的分布式训练框架之一，NTU 的 OpenMMLab 是计算机视觉领域的事实标准。',
  noteEn:
    "Singapore's open-source AI work goes well beyond the government's own projects. Salesforce's Singapore lab produced the BLIP family, a cornerstone of global vision-language AI; NUS-incubated Colossal-AI is one of the most popular distributed-training frameworks; and NTU's OpenMMLab is a de facto standard in computer vision.",
  dataDate: '2026-02-17',
};

export const dataDisclaimer = '数据截至 2026 年 2 月，GitHub stars 为近似值。如有遗漏或错误，欢迎提交 Issue。';
export const dataDisclaimerEn =
  'Data is current as of February 2026; GitHub star counts are approximate. Please open an Issue if you spot omissions or errors.';
