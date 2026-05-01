// 国家级 AI-native 六抓手图谱
// 论点：新加坡 AI 战略不能按部门理解，要按"AI 引入路径"理解。
// 6 个抓手 × 跨部委的具体落地项目 = 国家级 AI-native 的完整执行管线。
//
// 关键观察：在"七条传导杠杆"映射中，只有抓手 5（政府自用）和抓手 6（外交）
// 是国家直接做的；其他 4 个抓手都是国家穿透到企业的杠杆。

export interface LeverItem {
  id?: string; // Phase 1: kebab-case from name, populated by codemod-levers.ts
  name: string;
  ministry: string; // 部委或机构
  scale?: string; // 金额、规模、KPI
  description: string;
  sourceUrl?: string;
  // Phase 1 cross-refs (hand-curated over time).
  relatedPolicyIds?: string[];
  relatedDebateIds?: string[];
}

export interface LeverGroup {
  title: string; // 子分组标题（如"外资引进的算力（EDB）"）
  items: LeverItem[];
}

export interface Lever {
  number: number; // 1–6
  icon: string;
  name: string; // 中文名
  subtitle: string; // 一句话定位
  whatStateDoes: string; // 国家直接做的事
  bottleneckSolved: string; // 解决企业的什么瓶颈
  transmissionMode: 'direct' | 'transmitted'; // 国家直接做 vs 穿透到企业
  groups: LeverGroup[];
  insight?: string; // 一句锐利判断
  // Phase 1 cross-refs (hand-curated over time).
  championPersonIds?: string[];
  relatedPolicyIds?: string[];
  relatedPostSlugs?: string[];
}

export const dataDate = '2026-04-26';

export const levers: Lever[] = [
  {
    number: 1,
    icon: '🏗️',
    name: '基建',
    subtitle: '数据 + 算力 + 物理基础设施',
    whatStateDoes: '把企业自己买不起的算力和数据底座建好',
    bottleneckSolved: '企业自己买不起算力',
    transmissionMode: 'transmitted',
    groups: [
      {
        title: '外资引进的算力（EDB）',
        items: [
          {
            id: 'microsoft-数据中心',
            name: 'Microsoft 数据中心',
            ministry: 'EDB',
            scale: 'S$5.5B',
            description: '2024–2028 投资协议，含 AI 技能与本地基础设施',
            sourceUrl:
              'https://news.microsoft.com/source/asia/2024/05/07/microsoft-announces-singapore-investment-and-skilling-initiatives/',
          },
          {
            id: 'aws-数据中心',
            name: 'AWS 数据中心',
            ministry: 'EDB',
            scale: 'S$12B',
            description: '2024–2028 投资，新加坡云基础设施扩容',
            sourceUrl: 'https://www.aboutamazon.com/news/aws/aws-singapore-12-billion-investment',
          },
          {
            id: 'google-数据中心-ai',
            name: 'Google 数据中心 + AI',
            ministry: 'EDB',
            scale: 'US$9B / ~S$11.6B',
            description: '含 DeepMind 实验室落地',
            sourceUrl: 'https://www.edb.gov.sg/en/our-industries/artificial-intelligence-in-singapore.html',
          },
          {
            id: 'nvidia-sit-singtel-ai-accelerator',
            name: 'NVIDIA × SIT / Singtel / AI Accelerator',
            ministry: 'EDB',
            scale: '多重合作',
            description: 'NVIDIA 在新加坡形成多机构 AI 加速生态',
            sourceUrl: 'https://www.edb.gov.sg/',
          },
          {
            id: 'openai-apac-区域总部',
            name: 'OpenAI APAC 区域总部',
            ministry: 'EDB',
            scale: '已落地',
            description: 'APAC 总部驻新加坡，深化与 AISG 合作',
            sourceUrl: 'https://openai.com/',
          },
        ],
      },
      {
        title: '本土补贴的算力',
        items: [
          {
            id: 'enterprise-compute-initiative-eci',
            name: 'Enterprise Compute Initiative (ECI)',
            ministry: 'IMDA',
            scale: 'S$150M',
            description: '直接补贴企业购买 AI 算力',
            sourceUrl: 'https://www.imda.gov.sg/',
          },
          {
            id: 'one-north-ai-park-kampong-ai',
            name: 'one-north AI Park / Kampong AI',
            ministry: 'MOF / JTC',
            scale: '物理基建',
            description: 'Budget 2026 启动，AI 公司聚集区',
            sourceUrl: 'https://www.singaporebudget.gov.sg/',
          },
        ],
      },
      {
        title: '资金平台',
        items: [
          {
            id: 'anchor-fund-65-第二批',
            name: 'Anchor Fund @ 65 第二批',
            ministry: 'MOF',
            scale: 'S$1.5B',
            description: '2026 推出，IPO 锚定基金扶持本土科技企业上市',
            sourceUrl: 'https://www.singaporebudget.gov.sg/',
          },
          {
            id: 'future-sectors-development-fund-fsdf',
            name: 'Future Sectors Development Fund (FSDF)',
            ministry: 'MOF',
            scale: 'S$1.5B',
            description: '2026 启动，新兴产业发展资金池',
            sourceUrl: 'https://www.singaporebudget.gov.sg/',
          },
          {
            id: 'eqdp-私募股权基金扩张',
            name: 'EQDP 私募股权基金扩张',
            ministry: 'MOF',
            scale: 'S$6.5B',
            description: '2026 扩张额度，吸引私募对本土科技投资',
            sourceUrl: 'https://www.singaporebudget.gov.sg/',
          },
        ],
      },
      {
        title: '国家级数据底座',
        items: [
          {
            id: 'healix',
            name: 'HEALIX',
            ministry: 'MOH / Synapxe',
            scale: '国家医疗数据 + AI 基础设施',
            description: '让医疗记录可被 AI 消费的国家底座',
            sourceUrl: 'https://www.synapxe.sg/',
          },
          {
            id: 'virtual-singapore',
            name: 'Virtual Singapore',
            ministry: 'URA',
            scale: '国家级数字孪生',
            description: '城市规划与运营的数字镜像，配合 ePlanner 3D + Smart Planning Assistant',
            sourceUrl: 'https://www.ura.gov.sg/',
          },
          {
            id: 'punggol-digital-district-open-digital-platform',
            name: 'Punggol Digital District + Open Digital Platform',
            ministry: 'JTC',
            scale: '首个全区智能区',
            description: '能耗预计降 30%，国家级 smart district 样板',
            sourceUrl: 'https://www.jtc.gov.sg/our-work/spaces/punggol-digital-district',
          },
        ],
      },
      {
        title: '家国安全侧算力',
        items: [
          {
            id: 'htx-ngine-nvidia-b200-superpod',
            name: 'HTX NGINE — NVIDIA B200 SuperPOD',
            ministry: 'HTX',
            scale: '自有算力',
            description: '内政部科技局自建超算，支撑警察 / 移民 / 安全 AI',
            sourceUrl: 'https://www.htx.gov.sg/',
          },
        ],
      },
    ],
    insight: '国家把企业最大的固定成本（算力 + 数据）变成公共物品。',
    championPersonIds: ['lawrence-wong', 'josephine-teo'],
    relatedPolicyIds: ['budget-2026-national-ai-acceleration', 'public-ai-research-investment-2026-2030'],
    relatedPostSlugs: ['singapore-ai-native-companies-vs-nations', 'singapore-ai-strategy-the-real-moat'],
  },
  {
    number: 2,
    icon: '⚖️',
    name: '治理',
    subtitle: '规则 + 沙盒 + 法律',
    whatStateDoes: '让企业敢部署',
    bottleneckSolved: '企业不敢部署因为合规风险不可测',
    transmissionMode: 'transmitted',
    groups: [
      {
        title: '通用治理框架（IMDA）',
        items: [
          {
            id: 'model-ai-governance-framework',
            name: 'Model AI Governance Framework',
            ministry: 'IMDA',
            scale: '2019',
            description: '亚洲首个 AI 治理框架',
            sourceUrl: 'https://www.pdpc.gov.sg/help-and-resources/2020/01/model-ai-governance-framework',
          },
          {
            id: 'ai-verify-ai-verify-sandbox',
            name: 'AI Verify + AI Verify Sandbox',
            ministry: 'IMDA',
            scale: '10+ 跨国大企业参与',
            description: '全球首个 AI 治理测试框架与工具包',
            sourceUrl: 'https://aiverifyfoundation.sg/',
          },
          {
            id: 'genai-eval-sandbox-genai-sandbox-20',
            name: 'GenAI Eval Sandbox / GenAI Sandbox 2.0',
            ministry: 'IMDA',
            scale: '2024–2025',
            description: '生成式 AI 评估和试验环境',
            sourceUrl: 'https://www.imda.gov.sg/',
          },
          {
            id: 'generative-ai-治理框架',
            name: 'Generative AI 治理框架',
            ministry: 'IMDA',
            scale: '2024',
            description: '九大维度，全球较早的 GenAI 专项治理',
            sourceUrl: 'https://www.imda.gov.sg/',
          },
          {
            id: 'agentic-ai-governance-framework',
            name: 'Agentic AI Governance Framework',
            ministry: 'IMDA',
            scale: '2026-01-22 达沃斯发布',
            description: '全球首个 Agentic AI 治理框架',
            sourceUrl:
              'https://www.imda.gov.sg/resources/press-releases-factsheets-and-speeches/press-releases/2026/new-model-ai-governance-framework-for-agentic-ai',
          },
          {
            id: 'trusted-data-sharing-dptm-升级',
            name: 'Trusted Data Sharing + DPTM 升级',
            ministry: 'IMDA',
            scale: 'SS 714:2025',
            description: '可信数据共享框架，国家标准升级',
            sourceUrl: 'https://www.imda.gov.sg/',
          },
        ],
      },
      {
        title: '金融业治理 5 层堆栈（MAS）',
        items: [
          {
            id: 'feat-principles',
            name: 'FEAT Principles',
            ministry: 'MAS',
            scale: '2018',
            description: '公平 / 伦理 / 问责 / 透明四原则',
            sourceUrl: 'https://www.mas.gov.sg/publications/monographs-or-information-paper/2018/FEAT',
          },
          {
            id: 'veritas-initiative-v1-v2-v3',
            name: 'Veritas Initiative v1 / v2 / v3',
            ministry: 'MAS',
            scale: '2021–',
            description: 'FEAT 原则的开源工具包，把原则推向可操作',
            sourceUrl: 'https://www.mas.gov.sg/schemes-and-initiatives/veritas',
          },
          {
            id: 'project-mindforge',
            name: 'Project MindForge',
            ministry: 'MAS',
            scale: '24 家机构 + Microsoft / AWS / Google / NVIDIA',
            description: '金融业 GenAI 风险共建框架',
            sourceUrl: 'https://www.mas.gov.sg/news/media-releases/2024/project-mindforge',
          },
          {
            id: 'ai-risk-management-guidelines',
            name: 'AI Risk Management Guidelines',
            ministry: 'MAS',
            scale: '2024-12',
            description: '正式监管期望书，约束银行使用 AI',
            sourceUrl: 'https://www.mas.gov.sg/regulation/notices/notice-fsm-n29',
          },
          {
            id: 'buildfinai',
            name: 'BuildFin.ai',
            ministry: 'MAS',
            scale: '继任平台',
            description: '让被监管金融机构持续测试和报告 AI 风险',
            sourceUrl: 'https://www.mas.gov.sg/',
          },
        ],
      },
      {
        title: '网络安全治理（CSA）',
        items: [
          {
            id: 'securing-ai-systems-guidelines-companion-guide',
            name: 'Securing AI Systems Guidelines + Companion Guide',
            ministry: 'CSA',
            scale: '2024-10',
            description: 'AI 系统全生命周期安全指南',
            sourceUrl: 'https://www.csa.gov.sg/',
          },
          {
            id: 'securing-agentic-ai-增补稿',
            name: 'Securing Agentic AI 增补稿',
            ministry: 'CSA',
            scale: '2025（公开咨询）',
            description: '针对 Agentic AI 的安全增补',
            sourceUrl: 'https://www.csa.gov.sg/',
          },
          {
            id: 'frontier-ai-risk-advisory',
            name: 'Frontier AI Risk Advisory',
            ministry: 'CSA',
            scale: '2025',
            description: '前沿 AI 风险咨询，配合 AISI 协调',
            sourceUrl: 'https://www.csa.gov.sg/',
          },
          {
            id: 'cyber-trust-mark-ai-安全维度',
            name: 'Cyber Trust Mark — AI 安全维度',
            ministry: 'CSA',
            scale: 'AI 维度扩展',
            description: '网络安全认证扩展至 AI',
            sourceUrl: 'https://www.csa.gov.sg/',
          },
        ],
      },
      {
        title: '法律治理（MINLAW + IPOS）',
        items: [
          {
            id: 'copyright-act-244-ai-训练例外',
            name: 'Copyright Act §244 — AI 训练例外',
            ministry: 'MINLAW',
            scale: '2021',
            description: '与日本并列全球最宽松的 AI 训练版权立场',
            sourceUrl: 'https://sso.agc.gov.sg/Act/CA2021?ProvIds=P14-#pr244-',
          },
          {
            id: 'ipos-when-code-creates-report',
            name: 'IPOS "When Code Creates" 报告',
            ministry: 'IPOS',
            scale: '2024',
            description: 'AI 生成内容 Authorship 立场',
            sourceUrl: 'https://www.ipos.gov.sg/',
          },
          {
            id: '输出端严管四件套',
            name: '输出端严管四件套',
            ministry: 'MINLAW + MHA + MDDI',
            scale: '2024–2025',
            description:
              'OCHA + Elections Bill 2024（深伪禁令）+ Criminal Law Bill 2025（AI 私密图像入刑）+ Online Safety (Relief and Accountability) Bill 2025',
            sourceUrl: 'https://www.mlaw.gov.sg/',
          },
        ],
      },
    ],
    insight: '"训练宽松 + 输出严管"——日本和新加坡是世界上目前唯二做到这一点的国家。',
    championPersonIds: ['josephine-teo'],
    relatedPolicyIds: [
      'model-ai-governance-framework',
      'model-ai-governance-framework-for-agentic-ai',
      'ai-verify',
      'singapore-ai-safety-institute',
      'copyright-act-2021-section-244-computational-data-analysis-exception',
    ],
  },
  {
    number: 3,
    icon: '🎓',
    name: '人才',
    subtitle: '教育 + 培训 + 转型',
    whatStateDoes: '让企业找得到能用 AI 的人',
    bottleneckSolved: '企业找不到能用 AI 的人',
    transmissionMode: 'transmitted',
    groups: [
      {
        title: '全民层（MDDI）',
        items: [
          {
            id: 'ai-bilingual-100k-工人计划',
            name: 'AI Bilingual 100K 工人计划',
            ministry: 'MDDI',
            scale: '100K 工人，首批 1H 2026',
            description: '首批落地：会计 (ISCA) + 法律 (SAL/SCCA)',
            sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-2895',
          },
          {
            id: 'national-ai-literacy-programme',
            name: 'National AI Literacy Programme',
            ministry: 'MDDI',
            scale: '全民 AI 素养',
            description: 'Budget 2026 推出，覆盖中小学到老年群体',
            sourceUrl: 'https://www.mddi.gov.sg/',
          },
        ],
      },
      {
        title: '专业层（IMDA + AISG）',
        items: [
          {
            id: 'techskills-accelerator-tesa-ai-扩展',
            name: 'TechSkills Accelerator (TeSA) AI 扩展',
            ministry: 'IMDA',
            scale: '21K 就业 + 340K 提升',
            description: '把全国技能加速器倾斜向 AI',
            sourceUrl: 'https://www.imda.gov.sg/',
          },
          {
            id: 'ai-apprenticeship-programme-aiap',
            name: 'AI Apprenticeship Programme (AIAP)',
            ministry: 'AISG',
            scale: '16 批 410+ 学徒，新一批 800 名额',
            description: '工业级 AI 工程师培养',
            sourceUrl: 'https://aiap.sg/apprenticeship/',
          },
          {
            id: '100e-programme',
            name: '100E Programme',
            ministry: 'AISG',
            scale: '每项 S$150K 共投，累计 100+ 完成',
            description: '企业 × AISG 联合 AI 项目',
            sourceUrl: 'https://aisingapore.org/innovation/100e/',
          },
        ],
      },
      {
        title: '教育系统层（MOE + NIE）',
        items: [
          {
            id: 'sls-student-learning-space-ai-工具栈',
            name: 'SLS (Student Learning Space) AI 工具栈',
            ministry: 'MOE',
            scale: '8 类工具',
            description: '国家级 K-12 学习平台的 AI 集成',
            sourceUrl: 'https://www.moe.gov.sg/',
          },
          {
            id: 'genai-使用指引-ai-ethics-framework',
            name: 'GenAI 使用指引 + AI Ethics Framework',
            ministry: 'MOE',
            scale: '2024–2026',
            description: '学校层面的 GenAI 使用规则',
            sourceUrl: 'https://www.moe.gov.sg/',
          },
          {
            id: 'edtech-masterplan-2030',
            name: 'EdTech Masterplan 2030',
            ministry: 'MOE',
            scale: '2024 发布',
            description: '把 AI 写进未来 5 年教育技术规划',
            sourceUrl: 'https://www.moe.gov.sg/',
          },
          {
            id: 'nie-ainie-certificate-in-ai-for-education',
            name: 'NIE AI@NIE + Certificate in AI for Education',
            ministry: 'NIE',
            scale: '教师 AI 素养证书',
            description: '从教师端启动 AI 教学能力建设',
            sourceUrl: 'https://www.nie.edu.sg/',
          },
          {
            id: 'nus-ntu-smu-sutd-ai-课改',
            name: 'NUS / NTU / SMU / SUTD AI 课改',
            ministry: '高等教育',
            scale: '全面铺开',
            description: '本科到 EMBA 全层级 AI 课程升级',
            sourceUrl: 'https://www.nus.edu.sg/',
          },
        ],
      },
      {
        title: '财政补贴层（SSG + WSG）',
        items: [
          {
            id: 'skillsfuture-ai-课程补贴',
            name: 'SkillsFuture AI 课程补贴',
            ministry: 'SSG',
            scale: '50% / 70% 分层',
            description: '105K+ 人参加 1,600+ AI 课程（2025）',
            sourceUrl: 'https://www.skillsfuture.gov.sg/',
          },
          {
            id: 'mid-career-ai-credit',
            name: 'Mid-Career AI Credit',
            ministry: 'SSG',
            scale: 'S$4,000',
            description: '中年再训练专项补贴',
            sourceUrl: 'https://www.skillsfuture.gov.sg/',
          },
          {
            id: 'wsg-ssg-合并',
            name: 'WSG × SSG 合并',
            ministry: 'MOM + MOE',
            scale: '2025',
            description: '一站式技能与就业平台',
            sourceUrl: 'https://www.wsg.gov.sg/',
          },
        ],
      },
      {
        title: '中年再训练层（MOM）',
        items: [
          {
            id: 'job-redesign',
            name: 'Job Redesign+',
            ministry: 'MOM / WSG',
            scale: '"人+AI 岗位重设计"',
            description: '把"裁员"转为"岗位重设计"的政策框架',
            sourceUrl: 'https://www.wsg.gov.sg/',
          },
          {
            id: 'career-conversion-programme-ccp',
            name: 'Career Conversion Programme (CCP)',
            ministry: 'MOM / WSG',
            scale: '中年再训练',
            description: '帮助 PMET 转入 AI 相关岗位',
            sourceUrl: 'https://www.wsg.gov.sg/',
          },
          {
            id: 'enterprise-workforce-transformation-package-ewtp',
            name: 'Enterprise Workforce Transformation Package (EWTP)',
            ministry: 'MOM',
            scale: '企业层面',
            description: '企业级劳动力 AI 转型支持',
            sourceUrl: 'https://www.mom.gov.sg/',
          },
        ],
      },
    ],
    insight: '从全民到企业到教育到中年再训练——五层管线串起来才是完整的 AI 人才池。',
  },
  {
    number: 4,
    icon: '🚀',
    name: '应用',
    subtitle: '产业 + 公共服务落地',
    whatStateDoes: '在 11 个部委里同时铺开旗舰应用',
    bottleneckSolved: '企业不愿动 + 公共服务示范不足',
    transmissionMode: 'transmitted',
    groups: [
      {
        title: '产业旗舰（MTI）',
        items: [
          {
            id: 'national-ai-missions',
            name: 'National AI Missions',
            ministry: 'MTI',
            scale: '4 大先锋行业',
            description: '聚焦行业级 AI 应用突破',
            sourceUrl: 'https://www.mti.gov.sg/',
          },
          {
            id: 'ai-centres-of-excellence',
            name: 'AI Centres of Excellence',
            ministry: 'MTI',
            scale: '多机构联合',
            description: '产学研联动的 AI 卓越中心',
            sourceUrl: 'https://www.mti.gov.sg/',
          },
          {
            id: 'embodied-ai-具身智能-rd',
            name: 'Embodied AI 具身智能 R&D',
            ministry: 'MTI / A*STAR',
            scale: '研发项目',
            description: '机器人 + AI 融合研发',
            sourceUrl: 'https://www.a-star.edu.sg/',
          },
        ],
      },
      {
        title: '研究旗舰（A*STAR）',
        items: [
          {
            id: 'astar-cfar-centre-for-frontier-ai-research',
            name: 'A*STAR CFAR (Centre for Frontier AI Research)',
            ministry: 'A*STAR',
            scale: '5 大研究支柱',
            description: '前沿 AI 研究中心',
            sourceUrl: 'https://www.a-star.edu.sg/',
          },
          {
            id: 'ai-manufacturing-2030',
            name: 'AI Manufacturing 2030',
            ministry: 'A*STAR',
            scale: 'Mencast 螺旋桨案例',
            description: '制造业 AI 应用落地',
            sourceUrl: 'https://www.a-star.edu.sg/',
          },
          {
            id: 'ai-材料筛选',
            name: 'AI 材料筛选',
            ministry: 'A*STAR',
            scale: '50–100x 加速',
            description: 'AI 加速材料科学研究',
            sourceUrl: 'https://www.a-star.edu.sg/',
          },
          {
            id: 'national-multimodal-llm-programme',
            name: 'National Multimodal LLM Programme',
            ministry: 'A*STAR + AISG',
            scale: 'S$70M',
            description: '国家级多模态大模型研究',
            sourceUrl: 'https://www.a-star.edu.sg/',
          },
        ],
      },
      {
        title: '区域 LLM 旗舰（AISG）',
        items: [
          {
            id: 'sea-lion-v3-v4-guard',
            name: 'SEA-LION v3 / v4 / Guard',
            ministry: 'AISG',
            scale: '11+ 语言，4B–33B 参数',
            description: '东南亚多语言基础模型',
            sourceUrl: 'https://sea-lion.ai/',
          },
          {
            id: 'seald',
            name: 'SEALD',
            ministry: 'AISG',
            scale: '区域语言数据集',
            description: '东南亚 AI 训练数据集',
            sourceUrl: 'https://aisingapore.org/',
          },
        ],
      },
      {
        title: '企业普及（IMDA + ESG）',
        items: [
          {
            id: 'naiip-national-ai-impact-programme',
            name: 'NAIIP — National AI Impact Programme',
            ministry: 'IMDA + ESG',
            scale: '10K 企业 + 100K 工人 / 2026–2029',
            description: '国家级企业 AI 普及计划',
            sourceUrl: 'https://www.imda.gov.sg/',
          },
          {
            id: 'champions-of-ai',
            name: 'Champions of AI',
            ministry: 'IMDA + ESG',
            scale: '旗舰企业',
            description: '行业旗舰企业 AI 转型计划',
            sourceUrl: 'https://www.imda.gov.sg/',
          },
          {
            id: 'psg-ai-补贴',
            name: 'PSG AI 补贴',
            ministry: 'ESG',
            scale: '30% → 50%',
            description: 'Productivity Solutions Grant AI 类目补贴比例上调',
            sourceUrl: 'https://www.enterprisesg.gov.sg/',
          },
          {
            id: 'smes-go-digital-ai-模块',
            name: 'SMEs Go Digital AI 模块',
            ministry: 'IMDA',
            scale: '中小企业',
            description: '中小企业 AI 启用包',
            sourceUrl: 'https://www.imda.gov.sg/',
          },
        ],
      },
      {
        title: '医疗（MOH + Synapxe）',
        items: [
          {
            id: 'note-buddy-genai-临床记录助手',
            name: 'Note Buddy GenAI 临床记录助手',
            ministry: 'Synapxe',
            scale: '5,000+ 医护，67K 病历（2025-12）',
            description: '生成式 AI 帮医生写病历',
            sourceUrl: 'https://www.synapxe.sg/',
          },
          {
            id: 'healthhub-ai',
            name: 'HealthHub AI',
            ministry: 'Synapxe',
            scale: '4.5/5 评分（公测）',
            description: '公众端 AI 健康助手',
            sourceUrl: 'https://www.synapxe.sg/',
          },
          {
            id: 'aimsg',
            name: 'AimSG',
            ministry: 'Synapxe',
            scale: '国家级影像 AI',
            description: '国家医疗影像 AI 平台',
            sourceUrl: 'https://www.synapxe.sg/',
          },
          {
            id: 'selena',
            name: 'SELENA+',
            ministry: 'Synapxe',
            scale: '全国部署',
            description: '糖尿病视网膜病变筛查 AI',
            sourceUrl: 'https://www.synapxe.sg/',
          },
          {
            id: 'ace-ai-慢病预测',
            name: 'ACE-AI 慢病预测',
            ministry: 'Synapxe',
            scale: '2027 年初推广至 1,100+ Healthier SG 诊所',
            description: '糖尿病 / 高脂血症 3 年风险预测',
            sourceUrl:
              'https://www.straitstimes.com/singapore/politics/ai-genetic-screening-and-flexible-financing-to-bolster-preventive-medicine-for-super-aged-spore-ong',
          },
          {
            id: 'apollo-国家级-ct-冠脉-ai',
            name: 'APOLLO 国家级 CT 冠脉 AI',
            ministry: 'Synapxe',
            scale: '冠脉 AI 国家平台',
            description: '心血管影像 AI',
            sourceUrl: 'https://www.synapxe.sg/',
          },
        ],
      },
      {
        title: '交通（MOT + LTA + PSA + CAG）',
        items: [
          {
            id: 'punggol-av-公共穿梭车',
            name: 'Punggol AV 公共穿梭车',
            ministry: 'LTA',
            scale: '3 条线路，2025-12 上线',
            description: '首批商业化自动驾驶公交',
            sourceUrl: 'https://www.lta.gov.sg/',
          },
          {
            id: 'cetran-av-国家测试中心',
            name: 'CETRAN AV 国家测试中心',
            ministry: 'LTA',
            scale: '国家级测试设施',
            description: 'one-North 自动驾驶测试区',
            sourceUrl: 'https://www.lta.gov.sg/',
          },
          {
            id: 'psa-tuas-mega-port',
            name: 'PSA Tuas Mega Port',
            ministry: 'PSA',
            scale: '2040s 全球最大全自动港',
            description: 'AI + 自动化 + 预测分析的港口',
            sourceUrl: 'https://www.singaporepsa.com/our-commitment/innovation/tuas-port',
          },
          {
            id: 'changi-全球首张-isoiec-42001-ai-治理认证',
            name: 'Changi 全球首张 ISO/IEC 42001 AI 治理认证',
            ministry: 'CAG',
            scale: '全球首张',
            description: '机场 AI 治理认证标杆',
            sourceUrl: 'https://www.changiairport.com/',
          },
        ],
      },
      {
        title: '建造与城市（MND + HDB + BCA + URA + JTC）',
        items: [
          {
            id: 'built-environment-ai-coe',
            name: 'Built Environment AI CoE',
            ministry: 'BCA',
            scale: 'S$30M',
            description: '建造业 AI 卓越中心',
            sourceUrl: 'https://www.bca.gov.sg/',
          },
          {
            id: 'bca-integrated-digital-delivery',
            name: 'BCA Integrated Digital Delivery',
            ministry: 'BCA',
            scale: '国家级数字交付标准',
            description: '从设计到运维全流程数字化',
            sourceUrl: 'https://www.bca.gov.sg/',
          },
          {
            id: 'hdb-tengah-智能能源镇',
            name: 'HDB Tengah 智能能源镇',
            ministry: 'HDB',
            scale: '4.2 万户',
            description: '首座智能能源镇',
            sourceUrl: 'https://www.hdb.gov.sg/about-us/news-and-publications/news/details/tengah',
          },
          {
            id: 'hdb-askjudy-mso-oneservice',
            name: 'HDB AskJudy + MSO OneService',
            ministry: 'HDB / MSO',
            scale: '虚拟助手',
            description: '居民服务 AI 助手',
            sourceUrl: 'https://www.hdb.gov.sg/',
          },
        ],
      },
      {
        title: '环境与水务（MSE + NEA + PUB）',
        items: [
          {
            id: 'nea-weather-science-programme',
            name: 'NEA Weather Science Programme',
            ministry: 'NEA',
            scale: 'S$25M',
            description: 'AI 增强极端天气预测',
            sourceUrl: 'https://www.nea.gov.sg/',
          },
          {
            id: '登革热-ai-预测-蚊媒控制',
            name: '登革热 AI 预测 + 蚊媒控制',
            ministry: 'NEA',
            scale: '全国部署',
            description: 'AI 预测疫情高风险区',
            sourceUrl: 'https://www.nea.gov.sg/',
          },
          {
            id: 'pub-smart-water-meter',
            name: 'PUB Smart Water Meter',
            ministry: 'PUB',
            scale: '全国铺开',
            description: '智能水表 + AI 漏水检测',
            sourceUrl: 'https://www.pub.gov.sg/',
          },
          {
            id: 'pub-joint-operations-centre',
            name: 'PUB Joint Operations Centre',
            ministry: 'PUB',
            scale: '实时洪水监控',
            description: '全国排水实时监控中心',
            sourceUrl: 'https://www.pub.gov.sg/',
          },
        ],
      },
    ],
    insight: '同时在 11 个部委铺开旗舰应用——这是国家级"queryable organization"的实操样本。',
  },
  {
    number: 5,
    icon: '🏛️',
    name: '政府自用',
    subtitle: 'Procurement / 自身率先',
    whatStateDoes: '让公务员率先用 AI，给企业看先例',
    bottleneckSolved: '企业看不到先例',
    transmissionMode: 'direct',
    groups: [
      {
        title: '民事政府（GovTech）',
        items: [
          {
            id: 'pair-公务员-ai-助手',
            name: 'Pair 公务员 AI 助手',
            ministry: 'GovTech',
            scale: '150K 公务员目标',
            description: '面向全公务员的 AI 工作助手',
            sourceUrl: 'https://www.tech.gov.sg/products-and-services/pair/',
          },
          {
            id: 'pair-search',
            name: 'Pair Search',
            ministry: 'GovTech',
            scale: 'Hansard + 法院 + 立法',
            description: '让政府所有公开 artifact 对 AI 可读',
            sourceUrl: 'https://www.tech.gov.sg/',
          },
          {
            id: 'launchpad',
            name: 'LaunchPad',
            ministry: 'GovTech',
            scale: '3K MAU / 400 ideas',
            description: '公务员 AI 实验平台',
            sourceUrl: 'https://www.tech.gov.sg/',
          },
          {
            id: 'ai-trailblazers-10-20',
            name: 'AI Trailblazers 1.0 + 2.0',
            ministry: 'GovTech',
            scale: '部委级 AI 落地项目',
            description: '把成功的 GenAI 用例从试点变规模',
            sourceUrl: 'https://www.tech.gov.sg/',
          },
          {
            id: 'litmus-sentinel',
            name: 'Litmus + Sentinel',
            ministry: 'GovTech',
            scale: 'AI 安全双件套',
            description: '政府 AI 部署的安全和防护平台',
            sourceUrl: 'https://www.tech.gov.sg/',
          },
          {
            id: 'agentspace-air-gapped-agentic-ai',
            name: 'Agentspace — air-gapped agentic AI',
            ministry: 'GovTech',
            scale: '亚洲首例',
            description: '隔离环境中的 Agentic AI',
            sourceUrl: 'https://www.tech.gov.sg/',
          },
        ],
      },
      {
        title: '国防（MINDEF + DSTA + DSO + DIS）',
        items: [
          {
            id: 'dis-saf-digital-and-intelligence-service',
            name: 'DIS — SAF Digital and Intelligence Service',
            ministry: 'MINDEF',
            scale: '2022 第四军种',
            description: '2025 重组为 DCCOM + SAFC4DC——把 AI 写进军种结构本身',
            sourceUrl: 'https://www.mindef.gov.sg/news-and-events/latest-releases/28oct22_speech',
          },
          {
            id: 'dis-ai-singapore-mou-sentinel-programme',
            name: 'DIS × AI Singapore MoU + Sentinel Programme',
            ministry: 'DIS',
            scale: '军方-国研合作',
            description: '军方 AI 课程与项目合作',
            sourceUrl: 'https://www.mindef.gov.sg/',
          },
          {
            id: 'dsta-shield-ai-thales-anduril',
            name: 'DSTA × Shield AI / Thales / Anduril',
            ministry: 'DSTA',
            scale: '多重商业 AI 合作',
            description: '自主无人机、AI Co-Lab、Lattice manned-unmanned teaming',
            sourceUrl: 'https://www.dsta.gov.sg/',
          },
          {
            id: 'dsta-rsn-计算机视觉舰船分类',
            name: 'DSTA × RSN 计算机视觉舰船分类',
            ministry: 'DSTA',
            scale: '海军 AI',
            description: 'AI 辅助海军舰船识别',
            sourceUrl: 'https://www.dsta.gov.sg/',
          },
          {
            id: 'dsta-自研-genai-dsta-mit-csail',
            name: 'DSTA 自研 GenAI + DSTA × MIT CSAIL',
            ministry: 'DSTA',
            scale: '自研 + 顶级合作',
            description: '国防 GenAI 工具链',
            sourceUrl: 'https://www.dsta.gov.sg/',
          },
          {
            id: 'dso-mistral-ai-国防-genai',
            name: 'DSO × Mistral AI 国防 GenAI',
            ministry: 'DSO',
            scale: '与 Mistral 合作',
            description: '国防场景下的 GenAI 项目',
            sourceUrl: 'https://www.dso.org.sg/',
          },
        ],
      },
      {
        title: '家国安全（HTX + SPF + ICA）',
        items: [
          {
            id: 'htx-phoenix-llm',
            name: 'HTX Phoenix LLM',
            ministry: 'HTX',
            scale: '自训',
            description: '内政部自有 LLM',
            sourceUrl: 'https://www.htx.gov.sg/',
          },
          {
            id: 'htx-h2rc-人形机器人中心',
            name: 'HTX H2RC 人形机器人中心',
            ministry: 'HTX',
            scale: 'S$100M（2026 Q2 启动）',
            description: '人形机器人国家级研发中心',
            sourceUrl: 'https://www.htx.gov.sg/',
          },
          {
            id: 'htx-google-cloud-microsoft-mistral-singtel-st',
            name: 'HTX × Google Cloud / Microsoft / Mistral / Singtel / ST',
            ministry: 'HTX',
            scale: '多重商业合作',
            description: '云 + AI 商业生态接入',
            sourceUrl: 'https://www.htx.gov.sg/',
          },
          {
            id: 'spf-anti-scam-centre-anti-scam-command',
            name: 'SPF Anti-Scam Centre / Anti-Scam Command',
            ministry: 'SPF',
            scale: 'RPA + AI',
            description: '欺诈识别与自动化处置',
            sourceUrl: 'https://www.police.gov.sg/',
          },
          {
            id: 'spf-polcam-gibson-smart-glasses',
            name: 'SPF PolCam + GIBSON + Smart Glasses',
            ministry: 'SPF',
            scale: '城市监控 + 机场机器人 + 智能眼镜',
            description: '实时视频分析与自动响应',
            sourceUrl: 'https://www.police.gov.sg/',
          },
          {
            id: 'ica-multi-modal-biometrics-system-mmbs',
            name: 'ICA Multi-Modal Biometrics System (MMBS)',
            ministry: 'ICA',
            scale: '虹膜 + 人脸',
            description: '边境多模态生物识别',
            sourceUrl: 'https://www.ica.gov.sg/',
          },
        ],
      },
    ],
    insight: 'DIS 把 AI 写进军种结构、GovTech Pair 把全公务员变 AI 操作员——这是国家级 IC + DRI + AI Founder 模型成立。',
  },
  {
    number: 6,
    icon: '🌐',
    name: '外交',
    subtitle: '国际治理 + 外资 + 标准制定',
    whatStateDoes: '让外资把 AI 治理总部放新加坡',
    bottleneckSolved: '企业不知道总部该放哪',
    transmissionMode: 'direct',
    groups: [
      {
        title: '新加坡发起的全球性框架',
        items: [
          {
            id: 'singapore-ai-safety-institute-aisi',
            name: 'Singapore AI Safety Institute (AISI)',
            ministry: 'IMDA',
            scale: 'S$10M/年',
            description: '前沿 AI 安全研究 + Singapore Consensus 协调中心',
            sourceUrl: 'https://aiverifyfoundation.sg/',
          },
          {
            id: 'singapore-consensus-on-ai-safety',
            name: 'Singapore Consensus on AI Safety',
            ministry: 'IMDA / AISI',
            scale: '11 国签署（含中美）',
            description: '罕见地把中美纳入同一份 AI 安全文件',
            sourceUrl: 'https://aiverifyfoundation.sg/',
          },
          {
            id: 'international-scientific-exchange-isesea-i-ii',
            name: 'International Scientific Exchange (ISESEA) I + II',
            ministry: 'IMDA / AISI',
            scale: '2024 + 2026',
            description: '借势 ICLR 召开的全球 AI 安全科学交流',
            sourceUrl: 'https://aiverifyfoundation.sg/',
          },
          {
            id: 'imda-humane-intelligence-多元红队挑战',
            name: 'IMDA × Humane Intelligence 多元红队挑战',
            ministry: 'IMDA',
            scale: '全球红队赛',
            description: '把全球红队评估方法标准化',
            sourceUrl: 'https://www.imda.gov.sg/',
          },
        ],
      },
      {
        title: 'ASEAN 区域',
        items: [
          {
            id: 'asean-working-group-on-ai-governance-wg-ai',
            name: 'ASEAN Working Group on AI Governance (WG-AI)',
            ministry: 'IMDA',
            scale: '区域工作组',
            description: '新加坡承担秘书处职能',
            sourceUrl: 'https://asean.org/',
          },
          {
            id: 'asean-guide-on-ai-governance-and-ethics',
            name: 'ASEAN Guide on AI Governance and Ethics',
            ministry: 'ASEAN Digital Ministers / IMDA',
            scale: '10 国采纳',
            description: '基于新加坡 Model AI Governance Framework',
            sourceUrl:
              'https://asean.org/wp-content/uploads/2024/02/ASEAN-Guide-on-AI-Governance-and-Ethics_beautified_201223_v2.pdf',
          },
          {
            id: 'asean-hanoi-declaration-2026',
            name: 'ASEAN Hanoi Declaration 2026',
            ministry: 'ASEAN Digital Ministers',
            scale: '2026',
            description: '区域数字部长合作深化',
            sourceUrl: 'https://asean.org/',
          },
        ],
      },
      {
        title: '双边合作',
        items: [
          {
            id: 'us-singapore-smart-cities-digital-economic-cooperation',
            name: 'US-Singapore Smart Cities + Digital Economic Cooperation',
            ministry: 'MFA',
            scale: '双边合作框架',
            description: 'Smart Cities Programme + Digital Economic Cooperation Roadmap',
            sourceUrl: 'https://www.mfa.gov.sg/',
          },
          {
            id: 'rok-双边-ai-合作',
            name: 'ROK 双边 AI 合作',
            ministry: 'MFA',
            scale: '韩国合作',
            description: 'AI 技术与治理双边协议',
            sourceUrl: 'https://www.mfa.gov.sg/',
          },
          {
            id: 'eu-asean-ai-治理对话',
            name: 'EU-ASEAN AI 治理对话',
            ministry: 'MFA / IMDA',
            scale: '欧盟 × ASEAN',
            description: '区域间 AI 治理对话机制',
            sourceUrl: 'https://www.mfa.gov.sg/',
          },
        ],
      },
      {
        title: '军事 / 安全',
        items: [
          {
            id: 'reaim-asia-regional-consultations',
            name: 'REAIM Asia Regional Consultations',
            ministry: 'MFA / MINDEF',
            scale: '新加坡共同主持',
            description: '把 REAIM 对话扩展到亚洲',
            sourceUrl: 'https://www.mfa.gov.sg/',
          },
          {
            id: 'reaim-seoul-summit-2024',
            name: 'REAIM Seoul Summit 2024',
            ministry: 'MFA',
            scale: '5 国联合主办',
            description: '《Blueprint for Action》——首个军事 AI 治理可操作多边文件',
            sourceUrl: 'https://www.mfa.gov.sg/Newsroom/Press-Statements-Transcripts-and-Photos/2024/09/20240910-REAIM',
          },
          {
            id: 'bletchley-seoul-paris-ai-safety-summits',
            name: 'Bletchley / Seoul / Paris AI Safety Summits',
            ministry: 'MFA',
            scale: '全部参与',
            description: '三届 AI 安全峰会持续发声',
            sourceUrl: 'https://www.mfa.gov.sg/',
          },
        ],
      },
      {
        title: '联合国 + 全球',
        items: [
          {
            id: 'un-global-dialogue-on-ai-governance',
            name: 'UN Global Dialogue on AI Governance',
            ministry: 'MFA',
            scale: 'Independent International Scientific Panel',
            description: '联合国级 AI 治理对话与科学小组',
            sourceUrl: 'https://www.un.org/techenvoy/ai-advisory-body',
          },
          {
            id: 'ai-singapore-undp-全球-ai-素养',
            name: 'AI Singapore × UNDP 全球 AI 素养',
            ministry: 'AISG / UNDP',
            scale: '全球项目',
            description: '把新加坡 AI 教育模式推向发展中国家',
            sourceUrl: 'https://aisingapore.org/',
          },
        ],
      },
    ],
    insight: '用 0.07% 的全球人口拿到 G7 级 AI 治理话语权——这是新加坡战略最不可复制的部分。',
  },
];

export const transmissionExplainer = {
  title: '关键观察：6 抓手 → 7 条传导杠杆',
  body: `把 6 个抓手按"它们解决企业的什么瓶颈"重新切片，会得到 7 条传导杠杆：

1. Pull（资本回报）→ 抓手 1（ECI、PSG）+ 抓手 2（Sandbox 让风险可测量）
2. Push（前进压力）→ 抓手 4（NAIIP 10K + Champions of AI）
3. Talent（人才池）→ 抓手 3（AI Bilingual 100K + AIAP + 大学课改）
4. Infra（算力底座）→ 抓手 1（EDB 大厂引进 + ECI + one-north）
5. Trust（部署边界）→ 抓手 2（IMDA + MAS + CSA + MINLAW）
6. Procurement（自身率先）→ 抓手 5（GovTech + DIS + HTX）
7. International（外资 + 治理总部）→ 抓手 6（AISI + Singapore Consensus + ASEAN）

7 条里只有第 6（政府自用）和第 7（外交）是国家直接做的——其他 5 条都是国家穿透到企业的杠杆。

这就是"国家不可能自己 AI-native，必须穿透到企业"论点的结构性证据。`,
};
