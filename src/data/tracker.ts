export interface TrackerRow {
  name: string;
  value: string;
  source: string;
  sourceUrl: string;
}

export interface TrackerSection {
  icon: string;
  title: string;
  rows: TrackerRow[];
}

export const sections: TrackerSection[] = [
  {
    icon: '💰',
    title: '投资与资金',
    rows: [
      { name: '国家 AI 总投资', value: '> S$1B（10 亿新元）', source: 'NAIS 2.0, 2023', sourceUrl: 'https://file.go.gov.sg/nais2023.pdf' },
      { name: 'AI Singapore 初始拨款', value: 'S$150M（1.5 亿新元）', source: 'NRF, 2017', sourceUrl: 'https://aisingapore.org/' },
      { name: 'RIE2025 研发投入', value: 'S$25B（含 AI 相关）', source: 'MTI, 2020', sourceUrl: 'https://www.nrf.gov.sg/' },
    ],
  },
  {
    icon: '👩‍💻',
    title: '人才培养',
    rows: [
      { name: 'AI 从业者目标', value: '15,000 名 AI 专才', source: 'NAIS 2.0, 2023', sourceUrl: 'https://file.go.gov.sg/nais2023.pdf' },
      { name: 'AI 学徒计划毕业生', value: '~500+', source: 'AISG AIAP, 2023', sourceUrl: 'https://aisingapore.org/aiap/' },
      { name: 'AI for Everyone 课程参与', value: '~100,000+', source: 'AISG, 2023', sourceUrl: 'https://aisingapore.org/' },
      { name: '大学 AI 相关课程', value: 'NUS/NTU/SMU/SUTD 均设 AI 方向', source: '各校官网', sourceUrl: '' },
    ],
  },
  {
    icon: '🔬',
    title: '研究产出',
    rows: [
      { name: 'AI 论文发表量', value: '全球 Top 15', source: 'Stanford AI Index, 2024', sourceUrl: 'https://aiindex.stanford.edu/' },
      { name: 'SEA Lion 大模型', value: '东南亚首个多语言开源大模型', source: 'AISG, 2024', sourceUrl: 'https://sea-lion.ai/' },
      { name: '100 Experiments', value: '完成 100+ AI 项目', source: 'AISG', sourceUrl: 'https://aisingapore.org/' },
    ],
  },
  {
    icon: '🏢',
    title: '产业采用',
    rows: [
      { name: '企业 AI 采用率', value: '~42%（中小企业偏低）', source: 'IMDA Survey, 2023', sourceUrl: 'https://www.imda.gov.sg/' },
      { name: 'AI 初创公司数量', value: '~600+', source: '估算，综合来源', sourceUrl: '' },
      { name: '国际 AI 企业亚太总部', value: 'Google, Microsoft, AWS 等设 AI Hub', source: 'EDB', sourceUrl: 'https://www.edb.gov.sg/en/our-industries/artificial-intelligence-in-singapore.html' },
    ],
  },
  {
    icon: '🖥️',
    title: '基础设施',
    rows: [
      { name: '国家 AI 计算集群', value: '规划中（含 NVIDIA DGX）', source: 'NAIS 2.0', sourceUrl: 'https://file.go.gov.sg/nais2023.pdf' },
      { name: '数据中心容量', value: '东南亚最大（暂停新建审批后有限恢复）', source: 'IMDA, 2024', sourceUrl: 'https://www.imda.gov.sg/' },
      { name: '5G 覆盖率', value: '> 95% 独立组网', source: 'IMDA, 2024', sourceUrl: 'https://www.imda.gov.sg/' },
    ],
  },
];
