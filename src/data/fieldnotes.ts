export interface FieldNote {
  id: string;
  title: string;
  titleEn?: string;
  date: string;
  source: string;
  sourceEn?: string;
  tags: string[];
  tagsEn?: string[];
  companyProfile: string;
  companyProfileEn?: string;
  sections: {
    heading: string;
    headingEn?: string;
    points: string[];
    pointsEn?: string[];
    highlight?: string;
    highlightEn?: string;
  }[];
  takeaway: string;
  takeawayEn?: string;
}

export const fieldNotes: FieldNote[] = [
  {
    id: 'edb-meeting-ai-infra-2026-02',
    title: 'AI 创业公司与 EDB 会议纪要',
    titleEn: 'Meeting Notes: AI Startup Meets EDB',
    date: '2026-02',
    source: '社区分享',
    sourceEn: 'Community contribution',
    tags: ['EDB', 'EP 申请', '税务合规', '补贴政策', '公司注册'],
    tagsEn: ['EDB', 'EP application', 'Tax compliance', 'Grant programmes', 'Company incorporation'],
    companyProfile: 'AI 平台公司，ARR 接近 $100M，注册在新加坡，团队主要 remote，约 10 人',
    companyProfileEn:
      'AI platform company, ARR approaching $100M, incorporated in Singapore, team mostly remote, around 10 people.',
    sections: [
      {
        heading: '公司属性判定：看股权结构，不看创始人国籍',
        headingEn: 'Company classification: shareholding structure, not founder nationality',
        points: [
          'EDB 判断"新加坡公司"还是"中资企业"，标准清楚：公司主体注册在哪、股权结构有没有中国公司、客户和营收是否全球化',
          '只要公司注册在新加坡、股东里没有中国主体、业务以北美/欧洲/全球为主，就是新加坡公司',
          '这决定了走总部型路径还是需要特殊管理',
        ],
        pointsEn: [
          'EDB applies a clear test for "Singapore company" vs "Chinese-funded enterprise": where the entity is incorporated, whether the cap table contains Chinese entities, and whether customers and revenue are globally distributed.',
          'If the company is incorporated in Singapore, has no Chinese entity on the cap table, and runs a business primarily oriented to North America, Europe or globally, it counts as a Singapore company.',
          'This classification determines whether you go down the headquarters-track route or require a special-handling pathway.',
        ],
        highlight: '看结构，不看护照',
        highlightEn: 'Structure, not passport',
      },
      {
        heading: 'EP 申请：正常走比找关系更顺',
        headingEn: 'EP applications: going through the front door beats relying on connections',
        points: [
          'CEO/CTO 等核心高管的 EP 门槛不高，不要求先雇本地员工',
          '薪资必须由新加坡公司发放',
          '90% 的拒签是因为材料填错，不是政策问题',
          '早期（10-20 人）最宽松，规模扩大后需要符合多元化要求',
          '建议：先直接自己在线申请，被拒了再找中介',
        ],
        pointsEn: [
          'EP thresholds for core executives such as CEO/CTO are not high, and do not require prior hiring of local staff.',
          'Salary must be paid out of the Singapore entity.',
          'About 90% of rejections are due to errors in the application, not policy issues.',
          'Headcount of 10–20 is the most permissive band; once you scale, diversity requirements apply.',
          'Recommendation: apply yourself online first; only engage an agent if you get rejected.',
        ],
      },
      {
        heading: '真正的红线：团队单一性',
        headingEn: 'The actual red line: monocultural teams',
        points: [
          '新加坡不强求本地员工比例，但很在意团队多元化',
          '不行的结构：全中国团队、全印度团队、全美国团队',
          '可以的结构：中国 + 北美 + 欧洲 + 澳洲',
          '单一文化的公司很难真正国际化——这是长期观察的结论，不是政治正确',
        ],
        pointsEn: [
          'Singapore does not require a fixed local-headcount ratio, but it cares a lot about team diversity.',
          'Unacceptable: an all-China team, an all-India team, an all-US team.',
          'Acceptable: China + North America + Europe + Australia.',
          'Monocultural companies rarely become truly international — this is a long-running observation from experience, not political correctness.',
        ],
        highlight: '多元化不是门面，是实质要求',
        highlightEn: 'Diversity is not window-dressing; it is a substantive requirement',
      },
      {
        heading: '对照案例：Manus 是特例',
        headingEn: 'Counterexample: Manus is a special case',
        points: [
          'EDB 方面主动提到 Manus，但明确表示那是特殊情况',
          'Manus 面临外部监管的时间窗口压力，必须极短时间内迁出核心团队',
          'EDB 深度介入：提前与人力部沟通、拆分人员批次',
          '预期是要放弃一部分原有团队',
          '结论：正常公司走正常流程，成功率更高。特殊协助只出现在"已经没有第二种选择"的情况下',
        ],
        pointsEn: [
          'EDB raised Manus on its own initiative, but made clear that it was a special case.',
          'Manus faced an external-regulatory time window and had to relocate its core team in a very compressed timeframe.',
          'EDB engaged deeply: coordinating in advance with the Ministry of Manpower and breaking the relocation into batches.',
          'The expectation was that part of the original team would have to be left behind.',
          'Bottom line: ordinary companies should follow the ordinary process, where success rates are higher. Special assistance is reserved for situations where there is no alternative.',
        ],
      },
      {
        heading: '实际操作顺序：合规先于税收优惠',
        headingEn: 'Real-world sequencing: compliance before tax incentives',
        points: [
          '当公司接近 $100M ARR，EDB 给的建议顺序：',
          '第一步：税务合规——国际税务 + Transfer Pricing，解释清楚钱为什么在这里、利润为什么这样分，建议直接用四大',
          '第二步：确定总部定位',
          '第三步：才考虑税率优惠',
          '税率优惠：17% → 15%（约 15 人），17% → 10%（25 人，第 5 年达标）',
          '政策是奖励已经跑顺的结构，不是用来救结构的',
        ],
        pointsEn: [
          'For a company approaching $100M ARR, EDB recommends the following sequence:',
          'Step 1: tax compliance — international tax plus transfer pricing, with a clear story for why revenue sits here and why profits are allocated this way; engage one of the Big Four directly.',
          'Step 2: define the headquarters positioning.',
          'Step 3: only then consider tax-rate incentives.',
          'Tax-rate incentives: 17% → 15% (around 15 staff), 17% → 10% (25 staff, achieved by year 5).',
          'Incentive policy rewards structures that already work; it is not designed to rescue broken structures.',
        ],
        highlight: '先合规，再拿优惠',
        highlightEn: 'Compliance first, incentives second',
      },
      {
        heading: '性价比高的两个政策',
        headingEn: 'Two high-leverage programmes',
        points: [
          'R&D 补贴：适合 10 人以内技术团队，只要是真实研发、和核心技术相关就可以申请',
          '本地应届生培训补贴：招 5 个本地应届毕业生（全职），由 CTO 或核心技术人员带训，政府补贴部分薪资',
          'Enterprise Compute Initiative：政府补贴本地企业使用 AI Infrastructure provider，必须在新加坡有团队才能参与，可以和 AWS、微软、谷歌等一起做',
        ],
        pointsEn: [
          'R&D grants: a good fit for technical teams of up to 10 people, available for genuine R&D work tied to core technology.',
          'Local fresh-graduate training subsidy: hire five local fresh graduates full-time, mentored by the CTO or core engineering staff, with the government subsidising part of the salary.',
          "Enterprise Compute Initiative: the government subsidises local companies' use of AI infrastructure providers; you need a Singapore-based team to participate, and it can be combined with AWS, Microsoft or Google.",
        ],
      },
      {
        heading: '公司注册与董事',
        headingEn: 'Company incorporation and directors',
        points: [
          '公司注册在新加坡但董事是 agency 找的、自己没有 EP 的情况很常见',
          '操作路径：用新加坡公司给自己申请 EP → 拿到 EP 后可以自己担任董事',
          '董事需要承担法律责任（liable）',
          '可以选择自己操作或委托第三方 agent',
        ],
        pointsEn: [
          'It is common for the Singapore entity to be incorporated with an agency-supplied nominee director while the founder still has no EP.',
          'Workflow: use the Singapore entity to apply for your own EP, then assume the directorship after the EP is granted.',
          'Directors carry legal liability.',
          'You can run the process yourself or delegate it to a third-party agent.',
        ],
      },
    ],
    takeaway:
      '新加坡的政策，是为"已经跑起来、但不想在结构上翻车"的公司准备的。如果还在验证 PMF，政府不重要。但当风险从"能不能做成"变成"结构、合规、长期可持续性"时，这种对话就有价值了。',
    takeawayEn:
      'Singapore\'s policy stack is built for companies that already work — and don\'t want to crash on structural issues. If you\'re still validating PMF, the government doesn\'t matter much. But once your risk shifts from "can we make this work" to "structure, compliance, long-term sustainability", this kind of conversation starts to pay off.',
  },
];
