export interface ReferenceLink {
  text: string;
  url: string;
  note?: string;
  translation?: string;
}

export interface ReferenceSection {
  icon: string;
  title: string;
  links: ReferenceLink[];
}

export const sections: ReferenceSection[] = [
  {
    icon: '🏛️',
    title: '官方文件与战略',
    links: [
      { text: 'National AI Strategy 2.0 (NAIS 2.0)', url: 'https://www.smartnation.gov.sg/initiatives/national-ai-strategy/', note: 'SNDGO, 2023' },
      { text: 'National AI Strategy 1.0', url: 'https://file.go.gov.sg/nais2019.pdf', note: 'SNDGO, 2019' },
      { text: 'Model AI Governance Framework (2nd Ed.)', url: 'https://www.pdpc.gov.sg/help-and-resources/2020/01/model-ai-governance-framework', note: 'IMDA/PDPC, 2020' },
      { text: 'AI Verify Foundation', url: 'https://aiverifyfoundation.sg/', note: 'IMDA, 2023' },
      { text: 'Proposed Gen AI Governance Framework', url: 'https://www.imda.gov.sg/resources/press-releases-factsheets-and-speeches/factsheets/2024/gen-ai-and-digital-foss-ai-governance-playbook', note: 'IMDA, 2024' },
      { text: 'Personal Data Protection Act (PDPA)', url: 'https://www.pdpc.gov.sg/overview-of-pdpa/the-legislation/personal-data-protection-act', note: 'PDPC' },
      { text: 'Smart Nation and Digital Government Office', url: 'https://www.smartnation.gov.sg/' },
    ],
  },
  {
    icon: '🔬',
    title: '研究机构与项目',
    links: [
      { text: 'AI Singapore (AISG)', url: 'https://aisingapore.org/', note: '国家 AI 项目' },
      { text: 'AI Apprenticeship Programme (AIAP)', url: 'https://aisingapore.org/aiap/' },
      { text: 'SEA Lion', url: 'https://sea-lion.ai/', note: '东南亚多语言大模型' },
      { text: 'A*STAR', url: 'https://www.a-star.edu.sg/', note: '科技研究局' },
      { text: 'National Research Foundation (NRF)', url: 'https://www.nrf.gov.sg/' },
    ],
  },
  {
    icon: '📊',
    title: '指标与报告',
    links: [
      { text: 'Stanford AI Index Report', url: 'https://aiindex.stanford.edu/', note: '年度全球 AI 发展报告' },
      { text: 'Tortoise Global AI Index', url: 'https://www.tortoisemedia.com/intelligence/global-ai/', note: '全球 AI 就绪度排名' },
      { text: 'Oxford Insights Government AI Readiness Index', url: 'https://oxfordinsights.com/ai-readiness/ai-readiness-index/' },
      { text: 'Microsoft AI Economy Institute — Global AI Adoption 2025', url: 'https://www.microsoft.com/en-us/corporate-responsibility/topics/ai-economy-institute/reports/global-ai-adoption-2025/', note: '新加坡 AI 采用率全球第 2（60.9%），2026.1 发布', translation: '/microsoft-global-ai-adoption-2025' },
      { text: 'AI Diffusion 技术论文', url: 'https://arxiv.org/abs/2511.02781', note: '报告方法论详解，arXiv 2025.11' },
      { text: 'data.gov.sg', url: 'https://data.gov.sg/', note: '新加坡政府开放数据' },
    ],
  },
  {
    icon: '📰',
    title: '分析与报道',
    links: [
      { text: 'CNA — AI in Singapore', url: 'https://www.channelnewsasia.com/topic/artificial-intelligence' },
      { text: 'Straits Times — AI Coverage', url: 'https://www.straitstimes.com/tags/artificial-intelligence' },
      { text: 'GovInsider — Smart Government', url: 'https://govinsider.asia/intl-en/category/smart-gov' },
      { text: 'Tech in Asia — AI', url: 'https://www.techinasia.com/tag/artificial-intelligence-singapore' },
    ],
  },
  {
    icon: '🌏',
    title: '国际对标',
    links: [
      { text: 'OECD AI Policy Observatory', url: 'https://oecd.ai/' },
      { text: 'US AI Bill of Rights', url: 'https://bidenwhitehouse.archives.gov/ostp/ai-bill-of-rights/' },
      { text: 'EU AI Act', url: 'https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai' },
      { text: 'ASEAN Guide on AI Governance and Ethics', url: 'https://asean.org/book/asean-guide-on-ai-governance-and-ethics/' },
    ],
  },
  {
    icon: '🎓',
    title: '学术与深度',
    links: [
      { text: "Harmonizing AI governance: Singapore and France's AI policies", url: 'https://link.springer.com/article/10.1007/s43508-025-00116-w', note: 'AI & Society' },
      { text: 'Asian Journal of Law and Society — AI Law', url: 'https://www.cambridge.org/core/journals/asian-journal-of-law-and-society' },
    ],
  },
];
