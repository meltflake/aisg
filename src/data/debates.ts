// Auto-generated: enriched debates with Chinese summaries and pattern analysis
// Total: 150 debates | Updated: 2026-03-24
// Sources: https://sprs.parl.gov.sg | https://search.pair.gov.sg

export interface Debate {
  id: string;
  title: string;
  zhTitle: string;
  date: string;
  parliament: string;
  type: string;
  speakers: string[];
  topics: string[];
  zhSummary: string;
  keyPoints: string[];
  governmentStance: string | null;
  oppositionStance: string | null;
  controversyLevel: number;
  policySignal: string | null;
  notableQuote: string | null;
  summary: string;
  sourceUrl: string;
}

export const debates: Debate[] = [
  {
    id: 'cos-moh-2026',
    title: `MOH Committee of Supply 2026 — Preventive Healthcare & AI`,
    zhTitle: `2026卫生部供给委员会辩论：预防医疗与AI`,
    date: '2026-03-05',
    parliament: '15',
    type: 'Budget',
    speakers: ['Ong Ye Kung'],
    topics: ['AI in Healthcare', 'AI in Public Sector', 'AI Governance & Regulation'],
    zhSummary: `卫生部长王乙康在供给委员会辩论中宣布新加坡正式成为超老龄社会（65岁以上人口超21%），推出ACE-AI预测工具（由Synapxe开发）用于糖尿病及高脂血症风险筛查，强调"AI增强而非AI决定"原则，2027年初推广至所有Healthier SG诊所。同时宣布BRCA1/2基因检测补贴（2026年12月起，最高70%补贴），MediShield Life将覆盖预防性手术（乳房切除术Q3 2026、输卵管卵巢切除术Q4 2026），MediSave慢性病与预防护理限额提升（2027年1月起500/700提至700/1000），惠及91万+患者。`,
    keyPoints: [
      '新加坡正式成为超老龄社会',
      'ACE-AI预测糖尿病/高脂血症风险',
      'AI增强而非AI决定原则',
      'BRCA1/2基因检测补贴',
      'MediSave限额提升惠及91万+患者',
    ],
    governmentStance: '推动AI预防医疗，强调临床医生把关',
    oppositionStance: null,
    controversyLevel: 1,
    policySignal: '医疗AI预防性应用与健保制度改革',
    notableQuote: 'AI-enhanced, not AI-decided — clinicians remain in the loop.',
    summary: `Health Minister Ong Ye Kung delivered the MOH Committee of Supply debate, announcing Singapore has officially become a super-aged society with over 21% of the population aged 65 and above. He outlined a preventive healthcare strategy leveraging AI and genetic screening. The ACE-AI tool, developed by national healthtech agency Synapxe, predicts diabetes and hyperlipidaemia risk within 3 years, flagging patients with >75% risk for annual screening instead of the standard 3-yearly cycle. Rolling out to all ~1,100 Healthier SG clinics from early 2027. Key principle: "AI-enhanced, not AI-decided." BRCA1/2 genetic testing will be subsidised up to 70% from December 2026, with 2,000+ eligible annually. MediShield Life will cover preventive mastectomy (Q3 2026) and risk-reducing salpingo-oophorectomy (Q4 2026). MediSave chronic and preventive care limits raised from 500/700 to 700/1000 from January 2027, benefiting 910,000+ patients.`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-2928',
  },
  {
    id: 'cos-mddi-2026',
    title: `MDDI Committee of Supply 2026 — AI as Strategic Advantage`,
    zhTitle: `2026数字发展与信息部供给委员会辩论：AI作为战略优势`,
    date: '2026-03-02',
    parliament: '15',
    type: 'Budget',
    speakers: [
      'Mrs Josephine Teo',
      'Sharael Taha',
      'Jessica Tan',
      'Henry Kwek',
      'Tin Pei Ling',
      'Dr Choo Pei Ling',
      'Christopher de Souza',
      'Cassandra Lee',
      'He Ting Ru',
      'Fadli Fawzi',
      'Tan Kiat How',
    ],
    topics: [
      'AI Governance & Regulation',
      'AI & Workforce',
      'AI in Public Sector',
      'AI & National Security',
      'AI Ethics & Safety',
    ],
    zhSummary: `这是2026年预算案中AI议题最集中的辩论。MDDI GPC围绕六大主题进行协调审议：AI价值主张、数字能力建设、伦理治理、包容性增长、基础设施与网络安全、高信任数字社会。部长尤芳达(Mrs Josephine Teo)宣布：(1)支持10万名工人成为"AI双语人才"，从会计和法律行业开始，通过TeSA项目扩展；(2)发布全球首个《自主智能体AI治理框架》(Model Governance Framework for Agentic AI)；(3)新加坡将主办第二届国际AI安全科学交流大会，更新"新加坡共识"；(4)着力解决中小企业AI落差问题，避免大企业拉远距离。议员关注焦点包括：深伪技术监管(Christopher de Souza)、AI媒体素养(Fadli Fawzi)、数据中心投资竞争、AI对PME的冲击、网络安全应对AI威胁等。`,
    keyPoints: [
      '10万工人"AI双语"计划',
      '全球首个自主智能体AI治理框架',
      '第二届国际AI安全科学交流大会',
      '中小企业AI落差是核心关注',
      '深伪监管与AI媒体素养',
      '网络安全应对AI威胁',
    ],
    governmentStance: '积极推动AI民主化，强调中小企业普惠与风险治理并行',
    oppositionStance: 'He Ting Ru关注AI对弱势群体的影响和公共信息架构的韧性',
    controversyLevel: 2,
    policySignal: 'AI治理从原则走向具体行动，自主智能体框架开全球先河',
    notableQuote: 'Not all of us can be AI engineers. But we can be "bilingual" in AI in our own areas of expertise.',
    summary: `The most AI-intensive debate of Budget 2026. The MDDI GPC delivered coordinated scrutiny across six themes: AI value proposition, digital capabilities, ethical governance, inclusive growth, infrastructure/cybersecurity, and high-trust digital society. Minister Josephine Teo announced: (1) Government will support 100,000 workers to become "AI bilingual" starting with accountancy and legal professions via expanded TeSA programme; (2) World-first Model Governance Framework for Agentic AI to manage autonomous AI systems with human oversight; (3) Singapore will host second International Scientific Exchange on AI Safety to update the Singapore Consensus. Key concerns raised: deepfake regulation (Christopher de Souza), AI media literacy (Fadli Fawzi), data centre investment competition, impact on PMEs, and cybersecurity against AI-enabled threats. The minister emphasised closing the AI gap for SMEs, warning that if AI follows previous tech waves, only frontier companies benefit while the long tail falls behind.`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-2895',
  },
  {
    id: 'cos-mti-2026',
    title: `MTI Committee of Supply 2026 — AI Adoption & Economic Transformation`,
    zhTitle: `2026贸工部供给委员会辩论：AI驱动经济转型`,
    date: '2026-03-02',
    parliament: '15',
    type: 'Budget',
    speakers: ['Gan Kim Yong', 'Alvin Tan'],
    topics: ['AI & Economy', 'AI Startups & Ecosystem', 'AI & Workforce'],
    zhSummary: `贸工部供给委员会辩论聚焦AI驱动的经济结构转型。议员质询产业转型地图(ITM)是否真正推动生产力提升而非仅助企业降本，追问如何衡量真正的生产力增益（管理升级、流程再造、商业模式变革）而非简单的数字工具采用率。关注焦点包括：中小企业AI实施困难、AI创业生态中大学/A*STAR研究成果商业化、投资退出缺口、AI暗模式（如虚假评论与订阅陷阱）对消费者的威胁。提出构建政府门户AI助手，基于企业画像自动推荐补贴和方案。`,
    keyPoints: [
      '产业转型地图需回应AI时代要求',
      '衡量真正生产力增益而非工具采用率',
      '中小企业AI实施面临实际困难',
      'AI创业投资退出缺口',
      'AI暗模式对消费者的威胁',
      '政府门户AI助手构想',
    ],
    governmentStance: '推动产业AI转型，强调从成本管理向价值链跃升',
    oppositionStance: '质疑ITM深度是否足以推动真正转型',
    controversyLevel: 2,
    policySignal: '产业政策从数字化转向AI原生转型',
    notableQuote: null,
    summary: `The MTI Committee of Supply debate focused on AI-driven economic transformation. MPs questioned whether Industry Transformation Maps are driving genuine productivity gains or merely helping firms manage costs. Key concerns: measuring real outcomes (management upgrading, process redesign, business model transformation) rather than just digital tool adoption; SMEs struggling with AI implementation; startup ecosystem gaps between university/A*STAR research and commercial exit; rise of AI-enabled dark patterns (fake reviews, subscription traps). A proposal was floated for an integrated AI assistant on government portals to automatically recommend schemes based on firm profiles.`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-2894',
  },
  {
    id: 'cos-moe-2026',
    title: `MOE Committee of Supply 2026 — AI & Education Transformation`,
    zhTitle: `2026教育部供给委员会辩论：AI与教育变革`,
    date: '2026-03-02',
    parliament: '15',
    type: 'Budget',
    speakers: ['Chan Chun Sing', 'Darryl David'],
    topics: ['AI in Education', 'AI & Workforce', 'AI Ethics & Safety'],
    zhSummary: `教育部供给委员会辩论深入探讨AI对教育体系的结构性冲击。议员Darryl David指出，AI不仅是又一个技术趋势，而是正在重塑行业、组织模式和价值创造所需技能。辩论聚焦：(1)教师分级专业发展——基础AI工具与数字教学法培训、高级课程设计与伦理模块、持续跟踪AI趋势；(2)包容性AI教育——确保不同能力学生都能受益；(3)批判性思维培养——当生成式AI可秒出论文和代码时，差异化竞争力在于独立判断和批判性运用AI的能力；(4)成人教育与专业技术学院(如PACE)扩展AI和数据分析课程。`,
    keyPoints: [
      'AI重塑知识、技能与工作的交汇方式',
      '教师分级AI专业发展计划',
      '包容性AI教育覆盖不同能力学生',
      '批判性思维而非技术获取是核心竞争力',
      '成人教育扩展AI与数据分析课程',
    ],
    governmentStance: '系统性推进AI融入教育全流程',
    oppositionStance: null,
    controversyLevel: 1,
    policySignal: 'AI教育从工具采纳转向思维培养',
    notableQuote:
      'The differentiator will not be access to technology. It will be the capacity to engage with these tools critically.',
    summary: `The MOE Committee of Supply debate examined AI's structural impact on education. MP Darryl David framed AI as reshaping industries, organisational models and the skills needed to create value. Key themes: (1) Tiered professional development for teachers — foundational AI tools and digital pedagogy, advanced curriculum design and ethics, continuous tracking of AI trends; (2) Inclusive AI education ensuring students of different abilities benefit; (3) Critical thinking as the differentiator — when generative AI can produce essays and code in seconds, competitive advantage lies in independent judgement and critical engagement with AI tools; (4) Expanding adult education through Professional and Adult Continuing Education academies for AI and data analytics courses.`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-2896',
  },
  {
    id: 'cos-mom-2026',
    title: `MOM Committee of Supply 2026 — AI, Workforce & Career Resilience`,
    zhTitle: `2026人力部供给委员会辩论：AI时代的劳动力与职业韧性`,
    date: '2026-03-03',
    parliament: '15',
    type: 'Budget',
    speakers: ['Tan See Leng'],
    topics: ['AI & Workforce', 'AI Employment & Jobs', 'AI in Public Sector'],
    zhSummary: `人力部供给委员会辩论是预算案中AI与劳动力议题的核心战场。部长陈诗龙指出AI正在改变工作本质——不仅是做什么工作，还包括工作如何组织、技能如何构建、职业如何演进。核心关切：(1)AI是颠覆者(gamechanger)——可增强也可替代工人，取决于工作和岗位如何重新设计；(2)SkillsFuture参与已超60万人，458,000+新加坡人使用了SkillsFuture学分；(3)要求将"岗位重新设计"升级为"人+AI岗位重新设计"，运用设计思维整合AI与人类判断力、同理心和创造力；(4)中年PME面临更高风险，需要将职业健康(career health)主流化、预防化和个性化；(5)生成式AI对白领职业的风险高于手工技能型岗位。`,
    keyPoints: [
      'AI可增强也可替代工人，取决于岗位设计',
      'SkillsFuture参与超60万人',
      '岗位重新设计升级为人+AI模式',
      '中年PME面临AI冲击风险最高',
      '生成式AI威胁白领多于蓝领',
      '职业健康需主流化与预防化',
    ],
    governmentStance: '积极推动AI与劳动力融合，强调岗位重设计而非简单自动化',
    oppositionStance: '质疑ITM更新速度是否跟上AI重塑产业的速度',
    controversyLevel: 2,
    policySignal: '劳动力政策从技能培训转向AI时代的职业韧性体系',
    notableQuote:
      'AI is a gamechanger. It can augment workers or displace them, depending on how work and jobs are redesigned.',
    summary: `The MOM Committee of Supply debate was the centrepiece for AI-workforce issues in Budget 2026. Minister Tan See Leng framed AI as transforming not just what jobs people do, but how work is organised, skills are built, and careers evolve. Key themes: (1) AI as "gamechanger" that can augment or displace workers depending on job redesign; (2) SkillsFuture participation exceeding 600,000 with 458,000+ using credits; (3) Reframing "job redesign" as "job redesign for human-with-AI" using design thinking; (4) Mid-career PMEs face highest risk from AI disruption — need to mainstream career health as preventive and personalised; (5) Generative AI poses higher risks to white-collar occupations while manual/dexterity roles remain comparatively resilient. MPs called for stronger support for SMEs in workforce transformation and questioned whether Industry Transformation Maps are evolving fast enough for the AI era.`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-2903',
  },
  {
    id: 'oral-answer-4051',
    title: `Use of AI Chatbots for Counselling and Mental Health Support by Teenagers and Young Adults`,
    zhTitle: `AI聊天机器人用于青少年心理咨询的风险与监管`,
    date: '2026-02-27',
    parliament: '15',
    type: 'Oral Answer',
    speakers: ['Dr Charlene Chen', 'Dr Koh Poh Koon'],
    topics: ['AI Ethics & Safety', 'AI Governance & Regulation', 'AI in Healthcare'],
    zhSummary: `议员Dr Charlene Chen质询政府如何监测青少年使用AI聊天机器人进行心理咨询的趋势，以及保护弱势用户的措施。卫生部高级政务部长许宝琨回应：AI聊天机器人已无处不在，追踪其在心理健康方面的使用已不切实际。他明确指出，生成式AI聊天机器人不适合替代合格的心理健康服务提供者，因其存在误导信息和不当回应风险，可能造成伤害。但年轻人使用这些工具是因为匿名性和24/7可用性。政府的策略是推广合法替代资源（如mindline 1771、mindline.sg、CHAT），并通过《在线安全实践守则》要求应用商店实施年龄验证措施（2026年3月底前）。`,
    keyPoints: [
      'AI聊天机器人已无处不在，追踪使用不切实际',
      '生成式AI不适合替代合格心理健康服务',
      '年轻人使用因匿名性和24/7可用性',
      '推广mindline等合法替代资源',
      '应用商店须实施年龄验证措施',
    ],
    governmentStance: '不适合监管禁止，转而推广合法替代与教育',
    oppositionStance: null,
    controversyLevel: 2,
    policySignal: 'AI心理健康应用采取引导而非禁止策略',
    notableQuote: null,
    summary: `MP Dr Charlene Chen asked how MOH is monitoring teenagers' use of AI chatbots for mental health counselling and what safeguards protect vulnerable users. Senior Minister of State Dr Koh Poh Koon responded that AI chatbots are now so ubiquitous that tracking their use for counselling is no longer practical. He stated clearly that generative AI chatbots are not appropriate replacements for qualified mental health providers, citing risks of misinformation and inappropriate responses during serious crises. However, young people seek them out for anonymity and 24/7 accessibility. The government's approach: promote legitimate alternatives (mindline 1771, mindline.sg, CHAT) that offer the same advantages; require designated app stores to implement age assurance measures by March 2026 under the Code of Practice for Online Safety; expect developers to comply with the Model AI Governance Framework for Generative AI.`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=oral-answer-4051',
  },
  {
    id: 'oral-answer-4087',
    title: `Facilitating Adoption of AI in Energy Generation Sector`,
    zhTitle: `推动AI在能源发电领域的应用`,
    date: '2026-03-06',
    parliament: '15',
    type: 'Oral Answer',
    speakers: ['Ms Valerie Lee', 'Ms Gan Siow Huang'],
    topics: ['AI in Public Sector', 'AI & Economy'],
    zhSummary: `议员Valerie Lee质询政府采取什么措施推动AI在能源发电领域的应用，以及如何支持企业和家庭利用AI提高能源节约与效率。贸工部政务部长颜晓芳回应：(1)能源市场管理局(EMA)于2025年启动虚拟电厂(VPP)监管沙盒，利用AI预测可再生能源发电量并基于市场条件优化发电容量；(2)EMA内部已采用AI进行太阳能预测；(3)企业发展局支持新加坡商业联合会的"成本与碳减排计划"，利用AI工具帮助中小企业识别降本和脱碳机会。补充质询聚焦：能源领域AI专业人才培养计划，以及其他国家AI在电力调度和可再生能源领域的应用经验。`,
    keyPoints: [
      'EMA启动虚拟电厂AI监管沙盒',
      'AI用于太阳能发电预测',
      'AI工具助中小企业降本脱碳',
      '需要培养能源+数据分析复合型人才',
    ],
    governmentStance: '积极推动能源领域AI应用',
    oppositionStance: null,
    controversyLevel: 1,
    policySignal: '能源AI应用从实验走向监管沙盒',
    notableQuote: null,
    summary: `MP Valerie Lee asked about government measures to facilitate AI adoption in the energy sector and support for businesses/households leveraging AI for energy efficiency. Minister of State Gan Siow Huang responded: (1) EMA launched a regulatory sandbox for Virtual Power Plants (VPPs) in 2025, using AI to forecast renewable generation output and optimise capacity based on wholesale market conditions; (2) EMA has incorporated AI within internal energy management systems for solar forecasting; (3) Enterprise Singapore supports the Singapore Business Federation's Cost and Carbon Reduction Programme, which uses a proprietary AI tool to help SMEs identify cost reduction and decarbonisation opportunities. Supplementary questions focused on developing specialised AI talent for the energy workforce and studying international use cases of AI in power dispatch and renewables.`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=oral-answer-4087',
  },
  {
    id: 'budget-2937',
    title: `Budget 2026 Acknowledgement to the Chair — AI as Strategic Centrepiece`,
    zhTitle: `2026预算案总结致辞：AI作为战略核心`,
    date: '2026-03-06',
    parliament: '15',
    type: 'Budget',
    speakers: ['Lawrence Wong'],
    topics: ['AI Strategy', 'AI & Economy'],
    zhSummary: `副总理兼财政部长黄循财在预算案闭幕致辞中明确指出AI是2026年预算案的核心特色。Budget 2026旨在将AI作为战略优势，推动全国范围的AI应用，使新加坡人能充分利用技术带来的机遇。致辞将AI定位为应对地缘政治碎片化、多边体系削弱背景下的国家行动计划的关键组成部分。`,
    keyPoints: ['AI是Budget 2026的核心特色', 'AI作为国家战略优势', '推动全国AI应用普及', '应对地缘政治新常态的工具'],
    governmentStance: 'AI是国家战略优先级',
    oppositionStance: null,
    controversyLevel: 1,
    policySignal: 'AI从部门议题升级为整个预算案的战略主线',
    notableQuote: null,
    summary: `Deputy Prime Minister and Finance Minister Lawrence Wong's closing speech for the Budget debate explicitly positioned AI as the centrepiece of Budget 2026. He framed the Budget as Singapore's action plan to navigate a world that has become "more contested, more fragmented and ultimately, more dangerous." AI was identified as the key strategic advantage, with the Budget aiming to drive national AI adoption so Singaporeans can capture technology-driven opportunities. This marks the first time AI has been elevated from a sectoral topic to the defining strategic theme of an entire national budget.`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-2937',
  },
  {
    id: 'budget-2934',
    title: `MSF Committee of Supply 2026 — Children's Safe AI Use & Screen Time`,
    zhTitle: `2026社会及家庭发展部供给委员会辩论：儿童AI安全与屏幕时间`,
    date: '2026-03-06',
    parliament: '15',
    type: 'Budget',
    speakers: ['Zhulkarnain Abdul Rahim', 'Xie Yao Quan', 'Melvin Yong Yik Chye', 'Cai Yinzhou', 'Mariam Jaafar'],
    topics: ['AI Ethics & Safety', 'AI Governance & Regulation'],
    zhSummary: `社会及家庭发展部政务部长Zhulkarnain在COS辩论中回应多名议员关于儿童屏幕时间和网络安全的关切。政府的策略包括帮助儿童安全上网、负责任地使用AI，以及通过减少屏幕时间让家长为孩子创造更多亲子互动机会。讨论聚焦于如何在AI时代保护未成年人，同时不阻碍他们学习和适应新技术。`,
    keyPoints: ['帮助儿童安全使用AI', '减少屏幕时间创造亲子互动', '在保护与学习之间寻找平衡'],
    governmentStance: '引导儿童安全使用AI，减少屏幕时间',
    oppositionStance: null,
    controversyLevel: 1,
    policySignal: '儿童AI安全成为家庭政策议题',
    notableQuote: null,
    summary: `Minister of State Zhulkarnain responded to multiple MPs' concerns about children's screen time and online safety during the MSF Committee of Supply debate. The government's approach focuses on helping children navigate the online world safely and use AI responsibly. By reducing screen time, the government hopes parents can create more opportunities for family interaction. The discussion centred on balancing child protection with the need for young people to learn and adapt to new technologies in the AI era.`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-2934',
  },
  {
    id: 'budget-2930',
    title: `MSF Committee of Supply 2026 — AI Deepfake Protection & Disability Employment`,
    zhTitle: `2026社会及家庭发展部供给委员会辩论：AI深伪保护与残障就业`,
    date: '2026-03-05',
    parliament: '15',
    type: 'Budget',
    speakers: ['Rachel Ong', 'Neo Kok Beng', 'Xie Yao Quan', 'Sylvia Lim', 'Gabriel Lam', 'Melvin Yong Yik Chye'],
    topics: ['AI Ethics & Safety', 'AI & Economy', 'AI Governance & Regulation'],
    zhSummary: `MSF供给委员会辩论中两个AI议题引发关注。议员Rachel Ong提出AI深伪技术（特别是性剥削内容）对儿童和弱势群体的威胁，要求政府说明保护措施以及MSF如何与其他部门协调应对。同时，议员Neo Kok Beng指出AI自动化正在取代残障人士传统就业岗位（包装、分拣、基础行政、编程），呼吁从"保护性就业"转向建设残障人士在AI经济中的韧性。`,
    keyPoints: [
      'AI深伪性剥削内容威胁儿童和弱势群体',
      '要求跨部门协调应对AI滥用',
      'AI自动化取代残障人士传统岗位',
      '需要建设残障就业在AI经济中的韧性',
    ],
    governmentStance: '多部门协作应对AI深伪威胁',
    oppositionStance: 'Sylvia Lim关注弱势群体保护力度',
    controversyLevel: 3,
    policySignal: 'AI深伪立法和残障就业转型成为社会政策新焦点',
    notableQuote: null,
    summary: `Two significant AI issues emerged in the MSF Committee of Supply debate. MP Rachel Ong raised concerns about sexually exploitative deepfake content targeting children and vulnerable persons, asking what safeguards exist and how MSF coordinates with other government agencies. Separately, MP Neo Kok Beng highlighted that AI-driven automation is displacing traditional jobs for persons with disabilities — packing, sorting, basic admin, and even coding — warning that inclusive employment gains of the past decade could reverse without proactive intervention. He called for a shift from "protective employment" to building disability employment resilience in the AI economy.`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-2930',
  },
  {
    id: 'budget-2929',
    title: `MCCY Committee of Supply 2026 — Preparing Malay/Muslim Community for AI Economy`,
    zhTitle: `2026文化社区及青年部供给委员会辩论：马来穆斯林社群的AI经济准备`,
    date: '2026-03-05',
    parliament: '15',
    type: 'Budget',
    speakers: ['Saktiandi Supaat', 'Wan Rizal', 'Sharael Taha', 'Fadli Fawzi', 'Alex Yam', 'Mariam Jaafar'],
    topics: ['AI & Economy', 'AI in Education'],
    zhSummary: `MCCY供给委员会辩论中，多名马来族议员聚焦社群在AI经济中的准备度。议员Saktiandi Supaat提出AI转型战略必须确保儿童和青年不仅会使用技术，还能创造价值。他举例一名中四学生对AI感兴趣但缺乏深入理解。议员Wan Rizal关注青年从高等教育到AI驱动就业市场的过渡。讨论提到国家AI委员会、国家AI使命和AI Champions计划为马来穆斯林企业带来新机遇，但质问：社群是否准备好迈入这个新世界？`,
    keyPoints: [
      'AI转型需确保青年能创造价值而非仅消费技术',
      '马来穆斯林企业需把握国家AI使命机遇',
      '青年从教育到AI就业市场的过渡支持',
      '社群AI准备度是关键问题',
    ],
    governmentStance: '通过国家AI计划支持各族群参与AI经济',
    oppositionStance: null,
    controversyLevel: 2,
    policySignal: 'AI包容性成为族群政策议题',
    notableQuote: null,
    summary: `Multiple Malay/Muslim MPs focused on community readiness for the AI economy during the MCCY Committee of Supply debate. MP Saktiandi Supaat argued that AI transformation strategy must ensure children and youth can create value with technology, not just consume it. He cited a Secondary 4 student interested in AI but lacking deeper understanding. MP Wan Rizal addressed youth transitions from education to AI-driven job markets. The discussion referenced the National AI Council, National AI Mission and AI Champions programme as creating new opportunities for Malay/Muslim businesses, while questioning whether the community is ready to seize them.`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-2929',
  },
  {
    id: 'budget-2918',
    title: `MOH Committee of Supply 2026 — Generative AI for Clinical Documentation`,
    zhTitle: `2026卫生部供给委员会辩论：生成式AI辅助临床文档`,
    date: '2026-03-04',
    parliament: '15',
    type: 'Budget',
    speakers: ['Choo Pei Ling', 'Terence Ho', 'Ng Chee Meng', 'Azhar Othman'],
    topics: ['AI in Healthcare', 'AI in Public Sector'],
    zhSummary: `MOH供给委员会辩论中，议员Dr Choo Pei Ling专题发言"医疗技术与AI"。她指出临床医生面临临床复杂性、行政负担和协调需求三重压力，生成式AI可辅助医疗文档记录，临床决策支持系统可综合处理复杂信息。她呼吁推动AI在医疗中的实际应用，强调技术落地需要解决从实验到规模化的障碍。`,
    keyPoints: [
      '生成式AI辅助临床文档记录',
      '临床决策支持系统综合复杂信息',
      '医生面临三重压力：临床、行政、协调',
      '需解决AI从实验到规模化的障碍',
    ],
    governmentStance: null,
    oppositionStance: null,
    controversyLevel: 1,
    policySignal: '医疗AI应用从试点走向日常临床',
    notableQuote: null,
    summary: `During the MOH Committee of Supply debate, MP Dr Choo Pei Ling delivered a focused speech on technology and AI in healthcare. She highlighted that clinicians face a triple burden of clinical complexity, administrative load, and coordination demands. She advocated for generative AI to assist with clinical documentation and clinical decision-support systems to synthesise complex information. The speech called for accelerating AI deployment in healthcare while addressing barriers to scaling from pilots to routine clinical practice.`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-2918',
  },
  {
    id: 'budget-2916',
    title: `MOH Committee of Supply 2026 — AI as National Healthcare Mission`,
    zhTitle: `2026卫生部供给委员会辩论：AI作为国家医疗使命`,
    date: '2026-03-04',
    parliament: '15',
    type: 'Budget',
    speakers: [
      'Mariam Jaafar',
      'Pritam Singh',
      'Sylvia Lim',
      'Jamus Jerome Lim',
      'Gerald Giam Yean Song',
      'Patrick Tay Teck Guan',
      'He Ting Ru',
    ],
    topics: ['AI in Healthcare', 'AI Strategy', 'AI in Public Sector'],
    zhSummary: `MOH供给委员会辩论中，议员Mariam Jaafar发表重要AI医疗政策演说。她质问部长一个更大的问题：如果医疗真的是国家AI使命，目标就不能只是渐进式采用，必须建设一个完整的系统——基础设施、治理、人才、底层管道——让AI安全、有效、大规模地改善每一位患者的治疗效果。她指出新加坡需要培养同时精通临床实践和机器学习的"翻译型"人才。一旦证明AI能在大规模上安全可靠地改善患者结果，新加坡将获得全球竞争优势。`,
    keyPoints: [
      '医疗AI目标不能只是渐进式采用',
      '需要建设完整的AI医疗生态系统',
      '培养临床+机器学习复合型人才',
      '大规模AI医疗效果证明将成为国家竞争优势',
    ],
    governmentStance: null,
    oppositionStance: 'Pritam Singh和Sylvia Lim参与辩论',
    controversyLevel: 2,
    policySignal: '医疗AI从渐进采用走向系统性转型',
    notableQuote: null,
    summary: `MP Mariam Jaafar delivered a landmark speech on AI in healthcare during the MOH Committee of Supply debate. She challenged the Minister with a bigger question: if healthcare is truly a national AI mission, the goal cannot be incremental adoption. Singapore must build a complete system — the infrastructure, governance, talent, and plumbing — that lets AI transform care safely, effectively, and at scale for every patient. She identified a critical "translation problem": the need for professionals fluent in both clinical realities and machine learning. She argued that once Singapore demonstrates AI delivers real patient benefit safely and reliably at scale, it will gain a decisive global competitive advantage.`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-2916',
  },
  {
    id: 'budget-2915',
    title: `MOT Committee of Supply 2026 — AI-Enabled Infrastructure & Cross-Border Smart Factories`,
    zhTitle: `2026交通部供给委员会辩论：AI驱动基础设施与跨境智慧工厂`,
    date: '2026-03-04',
    parliament: '15',
    type: 'Budget',
    speakers: [
      'Tin Pei Ling',
      'Sharael Taha',
      'Gerald Giam Yean Song',
      'Sylvia Lim',
      'Dennis Tan Lip Fong',
      'Poh Li San',
    ],
    topics: ['AI in Public Sector', 'AI & Economy', 'AI Infrastructure & Research'],
    zhSummary: `交通部供给委员会辩论涉及两个重要AI议题。一是大士新一代港口利用自动化、先进传感器、预测分析和AI保持基础设施全球竞争力，但需负责任部署以管理劳动力转型。二是议员提出更宏大的愿景：在新柔廖(Sijori)框架下，国家AI使命可作为"力量倍增器"，实现跨境智慧工厂、多式联运优化、贸易金融嵌入和区域医药生物制造供应链强化，将基础设施扩张升级为协调的AI驱动经济引擎。`,
    keyPoints: [
      '大士新一代港口部署AI和自动化',
      '国家AI使命作为区域经济"力量倍增器"',
      '跨境智慧工厂和多式联运AI优化',
      '需要负责任部署并管理劳动力转型',
    ],
    governmentStance: '积极推动交通基础设施AI升级',
    oppositionStance: 'Gerald Giam和Sylvia Lim关注劳动力影响',
    controversyLevel: 2,
    policySignal: 'AI从单点应用走向区域经济引擎定位',
    notableQuote: null,
    summary: `The MOT Committee of Supply debate featured two significant AI dimensions. First, the Next-Generation Port at Tuas leverages frontier technologies — automation, advanced sensors, predictive analytics and AI — to maintain global competitiveness, while emphasising responsible deployment to manage workforce transitions. Second, an MP articulated a bolder vision: the national AI mission as a "force multiplier" under the Sijori framework, enabling cross-border smart factories, optimising multimodal logistics flows, embedding trade finance, and strengthening regional medical and bio-manufacturing supply chains. The strategic question posed was how to elevate infrastructure expansion into a coordinated AI-enabled economic engine generating high-value jobs.`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-2915',
  },
  {
    id: 'budget-2914',
    title: `MND Committee of Supply 2026 — AI & Robotics in Construction`,
    zhTitle: `2026国家发展部供给委员会辩论：AI与机器人改造建筑业`,
    date: '2026-03-04',
    parliament: '15',
    type: 'Budget',
    speakers: ['Kwek Hian Chuan Henry', 'Pritam Singh', 'Fadli Fawzi', 'Cai Yinzhou', 'Sylvia Lim'],
    topics: ['AI & Economy', 'AI in Public Sector'],
    zhSummary: `国家发展部供给委员会辩论中讨论了AI和机器人技术对建筑业的变革潜力。技术进步如何帮助建筑行业节省时间、降低成本、减少人力需求成为核心议题。AI和机器人有望将建筑业转变为快速、智能和高度自动化的行业。`,
    keyPoints: ['AI和机器人改造建筑业', '节省时间、降低成本、减少人力', '推动建筑业智能化自动化'],
    governmentStance: '积极推动建筑业技术转型',
    oppositionStance: 'Pritam Singh和Sylvia Lim参与辩论',
    controversyLevel: 1,
    policySignal: '建筑业AI自动化加速',
    notableQuote: null,
    summary: `The MND Committee of Supply debate discussed the transformative potential of AI and robotics for Singapore's construction industry. The key question was how advances in technology can save time, cut costs and reduce manpower requirements. AI and robotics were identified as capable of transforming construction into a fast, smart and highly automated industry, addressing chronic labour shortages and productivity challenges in the sector.`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-2914',
  },
  {
    id: 'budget-2913',
    title: `MSE Committee of Supply 2026 — AI for Recycling & Waste Management`,
    zhTitle: `2026环境可持续部供给委员会辩论：AI提升回收效率`,
    date: '2026-03-04',
    parliament: '15',
    type: 'Budget',
    speakers: ['Zaqy Mohamad', 'Janil Puthucheary', 'Poh Li San', 'Pritam Singh', 'Nadia Ahmad Samdin'],
    topics: ['AI in Public Sector', 'AI & Economy'],
    zhSummary: `MSE供给委员会辩论（续）中，政务部长回应议员关于AI技术应用的提问。讨论集中在利用AI提高回收流的特异性和灵敏度，改善废物分类和资源回收效率。政府表示正在探索AI技术以增强新加坡食品故事2.0中的食品生产效率。`,
    keyPoints: ['AI提高回收分类的特异性和灵敏度', '改善废物管理效率'],
    governmentStance: '支持AI在环保领域的应用',
    oppositionStance: null,
    controversyLevel: 1,
    policySignal: 'AI在环保和循环经济中的实际应用',
    notableQuote: null,
    summary: `In the continuation of the MSE Committee of Supply debate, the Minister of State responded to MPs' questions about AI technology applications. The discussion focused on using AI to improve the specificity and sensitivity of recycling streams, enhancing waste sorting and resource recovery efficiency. The government indicated it is exploring AI technology to boost food production efficiency under the Singapore Food Story 2.0 initiative.`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-2913',
  },
  {
    id: 'budget-2907',
    title: `MSE Committee of Supply 2026 — AI for Climate & Weather Prediction`,
    zhTitle: `2026环境可持续部供给委员会辩论：AI气候与天气预测`,
    date: '2026-03-03',
    parliament: '15',
    type: 'Budget',
    speakers: ['Grace Fu Hai Yien', 'Janil Puthucheary'],
    topics: ['AI in Public Sector', 'AI Infrastructure & Research'],
    zhSummary: `环境可持续部长傅海燕在供给委员会辩论中介绍AI在气候预测中的应用。MSE研究项目之一利用AI增强暴雨和强风的预测能力，提高预警准确性。这是政府在气候适应策略中系统性引入AI的具体案例。`,
    keyPoints: ['AI增强暴雨和强风预测', '提高气候预警准确性', '气候适应策略中系统引入AI'],
    governmentStance: '积极在气候科学中部署AI',
    oppositionStance: null,
    controversyLevel: 1,
    policySignal: 'AI在公共安全和气候适应中的具体落地',
    notableQuote: null,
    summary: `Minister for Sustainability and the Environment Grace Fu addressed AI applications in climate prediction during the MSE Committee of Supply debate. Among the Ministry's research programmes, one project covers the use of AI to enhance predictions of heavy rainfall and strong winds, improving Singapore's ability to issue accurate weather warnings. This represents a concrete example of systematically integrating AI into the government's climate adaptation strategy.`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-2907',
  },
  {
    id: 'budget-2905',
    title: `MSE Committee of Supply 2026 — AI for Climate Resilience`,
    zhTitle: `2026环境可持续部供给委员会辩论：AI增强气候韧性`,
    date: '2026-03-03',
    parliament: '15',
    type: 'Budget',
    speakers: [
      'Poh Li San',
      'Nadia Ahmad Samdin',
      'Syed Harun Alhabsyi',
      'Valerie Lee',
      'Pritam Singh',
      'Dennis Tan Lip Fong',
    ],
    topics: ['AI in Public Sector', 'AI Infrastructure & Research'],
    zhSummary: `MSE供给委员会辩论中，议员质询MSE是否探索利用AI增强新加坡气候韧性举措。讨论聚焦于利用最新技术预测极端天气事件，以及AI在提升项目精准度方面的潜力。多名议员关注气候变化对新加坡的实际影响以及技术应对手段。`,
    keyPoints: ['探索AI增强气候韧性', '利用AI预测极端天气事件', '提升气候项目精准度'],
    governmentStance: '积极探索AI在气候适应中的应用',
    oppositionStance: 'Pritam Singh和Dennis Tan参与辩论',
    controversyLevel: 1,
    policySignal: 'AI气候应用进入政策议程',
    notableQuote: null,
    summary: `During the MSE Committee of Supply debate, MPs questioned whether the Ministry has explored leveraging AI to enhance Singapore's climate resilience initiatives. The discussion centred on harnessing the latest technologies to anticipate extreme weather events before they occur and sharpening project accuracy through AI. Multiple MPs raised concerns about the practical impacts of climate change on Singapore and the role of technology in building adaptive capacity.`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-2905',
  },
  {
    id: 'budget-2844',
    title: `Annual Budget Statement`,
    zhTitle: `2026财年预算与全球变局`,
    date: '2026-02-12',
    parliament: '15',
    type: 'Budget',
    speakers: ['Prime Minister and Minister for Finance'],
    topics: ['AI Governance & Regulation', 'AI & National Security', 'AI in Public Sector'],
    zhSummary: `质询聚焦全球多边体系弱化及经济脆弱性，政府回应强调新全球秩序下经济韧性和AI投资的重要性，核心争议在于如何应对地缘政治紧张与经济不确定性。`,
    keyPoints: ['全球多边体系弱化', '经济增长依赖AI投资', '地缘政治紧张加剧'],
    governmentStance: '强调经济韧性与AI发展',
    oppositionStance: null,
    controversyLevel: 2,
    policySignal: '加强AI相关投资与风险管理',
    notableQuote:
      'Growth in the major economies held up, supported in part by strong investment in artificial intelligence (AI)-related activities.',
    summary: `Mr Speaker
: Order. The Clerk will now proceed to read the Notice of Motion.
3.30 pm
The Prime Minister and Minister for Finance (Mr Lawrence Wong)
: Mr Speaker, I move, "That Parliament approves the financial policy of the Government for the Financial Year 1 April 2026 to 31 March 2027."
This is our first Budget in this new term of Government. It comes as we enter a post-SG60 phase in our nation building journey.
We begin this next phase at a time of profound global change. For nearly eight decades, the world benefited from an international order that supported stability and economic cooperat`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-2844',
  },
  {
    id: 'oral-answer-4023',
    title: `Projected Expenditure on Government's Pursuit of Global Leadership in Growth Areas and AI-empowered Economy`,
    zhTitle: `新加坡AI经济与数据主权`,
    date: '2026-02-12',
    parliament: '15',
    type: 'Oral Answers to Questions',
    speakers: [
      'Gerald Giam Yean Song',
      'Senior Minister of State for Digital Development and Information',
      'Tan Kiat How',
    ],
    topics: ['AI Economy & Industry', 'AI & Employment', 'AI & National Security', 'AI Infrastructure & Research'],
    zhSummary: `议员质询政府在推动AI经济及全球领导地位上的预算安排，探讨是否设立政府AI公司以保障数据主权及公共利益。政府回应强调国家AI战略2.0，注重数据安全、技术效能及国际合作。核心争议在于如何防止全球科技巨头主导本地AI市场，避免数据流失及技术依赖，及对外资使用公共数据的监管和收益分配问题。`,
    keyPoints: ['政府AI战略投入', '数据主权与安全', '防止技术依赖'],
    governmentStance: '推动AI发展兼顾数据安全与国际合作',
    oppositionStance: '担忧外企主导数据与技术依赖',
    controversyLevel: 4,
    policySignal: '加强数据主权与知识产权保护',
    notableQuote: 'We have robust data protection framework to facilitate the secure processing of data.',
    summary: `11
Mr Gerald Giam Yean Song
asked the Minister for Digital Development and Information (a) what is the projected expenditure on the Government’s strategies for global leadership in growth areas and an AI-empowered economy; (b) whether the Government will fund ambitious exploratory projects with breakout growth potential through a Government-owned AI corporation; and (c) whether the Government considers such entities more effective than foreign entities at pursuing projects where data sovereignty and public interest are paramount.
The Senior Minister of State for Digital Development and Informa`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=oral-answer-4023',
  },
  {
    id: 'oral-answer-4013',
    title: `Headcount Retention and Technology Transfer for Citizen Workforce of Singapore-based AI Company Recently Acquired by Meta`,
    zhTitle: `AI企业收购与本地人才保障`,
    date: '2026-02-04',
    parliament: '15',
    type: 'Oral Answers to Questions',
    speakers: ['Koh Poh Koon', 'Low Wu Yang Andre', 'Senior Minister of State for Manpower'],
    topics: ['AI Governance & Regulation', 'AI Economy & Industry', 'AI & Employment', 'AI Infrastructure & Research'],
    zhSummary: `议员质询新加坡AI初创企业Manus被Meta收购后，本地员工比例、保留及技术转移保障情况。政府回应收购为商业协议，不干预具体条款，强调遵守新加坡劳工法及公平聘用，经济发展局推动技能转移和人才培养。质询方关注企业借新加坡营商环境便利，收购后是否真正惠及本地劳动力，提出对红地公司设定本地雇佣目标及防止“空壳公司”利用的建议。`,
    keyPoints: ['收购属商业协议', '政府不披露员工数据', '推动技能转移培训'],
    governmentStance: '尊重商业协议，促进本地技能发展',
    oppositionStance: '担忧红地公司利用新加坡便利',
    controversyLevel: 3,
    policySignal: '强化本地人才培养与技能转移',
    notableQuote: 'The Ministry of Manpower (MOM) does not intervene in such acquisition agreements.',
    summary: `19
Mr Low Wu Yang Andre
asked the Minister for Manpower regarding the recent acquisition of Singapore-based AI start-up Manus (a) what percentage of the company's core workforce comprised Singapore citizens prior to the acquisition; (b) whether the acquisition terms include guarantees for local headcount retention or technology transfer; and (c) how the Ministry ensures that foreign-founded start-ups benefitting from Singapore's business environment facilitate skills transfer to local workers.
The Senior Minister of State for Manpower (Dr Koh Poh Koon) (for the Minister for Manpower)
: Sir, th`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=oral-answer-4013',
  },
  {
    id: 'written-answer-21904',
    title: `Assessment of AI Technology Uptake among Singaporean SMEs Versus MNCs, and Individuals`,
    zhTitle: `新加坡AI采纳情况评估`,
    date: '2026-02-04',
    parliament: '15',
    type: 'Written Answers to Questions',
    speakers: ['Chua Kheng Wee Louis', 'Josephine Teo'],
    topics: ['AI Economy & Industry', 'AI & Employment', 'AI & National Security', 'AI Infrastructure & Research'],
    zhSummary: `议员质询政府是否有针对新加坡中小企业与跨国公司及个人的人工智能软件采纳情况进行研究。政府回应称，自2023年以来，信息通信媒体发展局通过年度数字经济报告跟踪不同规模企业及员工的AI采纳数据。核心争议点在于不同主体的AI使用差异及数据透明度。`,
    keyPoints: ['AI采纳有官方数据', '区分中小企与跨国公司', '关注个人AI使用情况'],
    governmentStance: '持续跟踪AI采纳数据',
    oppositionStance: '关注不同主体采纳差异',
    controversyLevel: 2,
    policySignal: '加强数字经济数据监测',
    notableQuote:
      'The Government tracks artificial intelligence (AI) adoption as part of broader efforts to develop the digital economy.',
    summary: `29
Mr Chua Kheng Wee Louis
asked the Minister for Digital Development and Information whether the Government has conducted studies on the adoption and active usage of artificial intelligence software by (i) companies with a breakdown between small and medium enterprises versus multinational corporations and (ii) individuals in Singapore.
Mrs Josephine Teo
: The Government tracks artificial intelligence (AI) adoption as part of broader efforts to develop the digital economy. Since 2023, the Infocomm Media Development Authority has been publishing the annual Singapore Digital Economy Report, whi`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-21904',
  },
  {
    id: 'written-answer-21915',
    title: `Study on Labour Impacted by AI in SMEs and Plans to Support Workers Substituted by AI`,
    zhTitle: `AI对中小企业劳动力影响研究`,
    date: '2026-02-04',
    parliament: '15',
    type: 'Written Answers to Questions',
    speakers: ['Shawn Loh', 'Tan See Leng'],
    topics: ['AI Safety & Ethics', 'AI Economy & Industry', 'AI & Employment', 'AI & National Security'],
    zhSummary: `议员质询政府是否开展研究，区分AI对劳动力的替代与互补效应，及中小企业与跨国公司差异。政府回应正研究AI对劳动力市场的影响，强调影响取决于业务性质和岗位类型，而非企业规模。政府支持所有企业进行岗位重塑和员工再培训，帮助被替代员工转岗，体现包容性劳动力转型策略。`,
    keyPoints: ['AI影响因岗位而异', '企业规模非主要因素', '支持岗位重塑与再培训'],
    governmentStance: '支持劳动力转型与再培训',
    oppositionStance: '关注AI替代与互补差异',
    controversyLevel: 2,
    policySignal: '推动包容性劳动力转型',
    notableQuote:
      'The impact of AI on workers and firms depends more on the nature of business activities and job roles than on firm size.',
    summary: `40
Mr Shawn Loh
asked the Minister for Manpower with SMEs employing 70% of the workforce (a) whether the Government can consider conducting a study to better estimate for whom artificial intelligence (AI) is complementary and for whom AI is a substitute for their labour; and (b) whether there are differences between SMEs and MNCs so that the Government can have more targeted plans for those substituted.
Dr Tan See Leng
: The Government is studying the impact of the rapid evolution of artificial intelligence (AI) on Singapore's labour market, including how AI may substitute or complement differ`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-21915',
  },
  {
    id: 'oral-answer-3992',
    title: `Take-up Rate of SkillsFuture-supported AI-related Training Course`,
    zhTitle: `SkillsFuture AI培训参与率及支持`,
    date: '2026-02-03',
    parliament: '15',
    type: 'Oral Answers to Questions',
    speakers: ['Janil Puthucheary', 'Ng Chee Meng', 'Pritam Singh', 'Senior Minister of State for Education'],
    topics: ['AI Governance & Regulation', 'AI & Employment', 'AI in Education', 'AI & National Security'],
    zhSummary: `议员质询SkillsFuture支持的AI相关培训课程的参与率及是否设定PME群体的培训目标。政府回应去年有约10.5万人次参与，未设具体目标，但鼓励终身学习并提供补贴。质询方关注课程选择困难及高阶课程费用，建议优化课程推荐和增加针对PME的资金支持。政府表示将持续优化课程指引和与业界合作，推动个性化培训方案。`,
    keyPoints: ['AI课程参与人数多', '无具体PME培训目标', '将优化课程推荐'],
    governmentStance: '鼓励终身学习，持续优化支持',
    oppositionStance: '建议定制课程及增加资金支持',
    controversyLevel: 2,
    policySignal: '推动个性化AI培训支持',
    notableQuote:
      'We are working with the industry to look to see how we develop the list of tasks and map them to the courses.',
    summary: `9
Mr Ng Chee Meng
asked the Minister for Education (a) what is the take-up rate of AI-related skills training courses supported by SkillsFuture; and (b) whether the Ministry has targets on the number of workers, especially among professionals, managers and executives, who should go for such upskilling.
The Senior Minister of State for Education (Dr Janil Puthucheary) (for the Minister for Education)
: Mr Speaker, there are around 1,600 artificial intelligence (AI)-related courses supported by SkillsFuture Singapore (SSG), with 137,000 training places taken up by more than 105,000 individuals l`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=oral-answer-3992',
  },
  {
    id: 'oral-answer-3994',
    title: `Policy on Optimal Class Sizes Given Increasingly Complex Challenges Faced by Teachers`,
    zhTitle: `教师复杂挑战下的班级规模政策`,
    date: '2026-02-03',
    parliament: '15',
    type: 'Oral Answers to Questions',
    speakers: [
      'Assoc Prof Jamus Jerome Lim',
      'Assoc Prof Kenneth Goh',
      'Desmond Lee',
      'Elysa Chen',
      'Minister for Education',
    ],
    topics: ['AI Governance & Regulation', 'AI in Education', 'AI in Healthcare', 'AI in Public Sector'],
    zhSummary: `议员质询教育部关于教师面临多样化学生需求及心理健康挑战下的最优班级规模政策。教育部长回应，班级规模依据学生学习需求调整，特殊教育和早期干预班级规模更小，同时增加辅导员和特教人员支持。核心争议在于如何平衡资源分配与教学质量，确保多样化需求学生获得足够支持。`,
    keyPoints: ['班级规模因需而异', '特殊教育班规模更小', '辅导员数量持续增加'],
    governmentStance: '根据学生需求调整班级规模，强化支持',
    oppositionStance: '关注教师负担与学生多样需求',
    controversyLevel: 3,
    policySignal: '持续优化班级规模与资源配置',
    notableQuote:
      "The Ministry of Education's approach for class sizes is guided by the learning needs of our students.",
    summary: `11
Ms Elysa Chen
asked the Minister for Education what is the Ministry's current position on optimal class sizes given recent findings that teachers face increasing complexity in their roles, including supporting students with diverse learning needs, mental health challenges and special educational needs.
The Minister for Education (Mr Desmond Lee)
: Mr Speaker, I thank the Member for her question. The Ministry of Education's (MOE's) approach for class sizes is guided by the learning needs of our students. More teaching resources are deployed for students with greater needs and hence, smaller`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=oral-answer-3994',
  },
  {
    id: 'written-answer-21666',
    title: `Review on Local AI Start-up Manus's Acquisition by Meta and Implications on Singapore's AI Ecosystem`,
    zhTitle: `Meta收购Manus的监管评估`,
    date: '2026-02-03',
    parliament: '15',
    type: 'Written Answers to Questions',
    speakers: ['Gan Kim Yong', 'Low Wu Yang Andre'],
    topics: [
      'AI Governance & Regulation',
      'AI Economy & Industry',
      'AI & National Security',
      'AI Infrastructure & Research',
    ],
    zhSummary: `议员质询新加坡竞争监管机构是否审查Meta收购本地AI初创Manus，及此类收购对本地AI创新生态的影响。政府回应当前无审查行动，强调采用自愿合并申报制度，鼓励创新同时防范反竞争风险。核心争议在于监管框架是否足够应对快速发展的AI产业并购。`,
    keyPoints: ['采用自愿合并申报', '无当前审查行动', '关注AI市场竞争'],
    governmentStance: '支持自愿申报，保障创新与竞争',
    oppositionStance: '关注监管是否充分',
    controversyLevel: 2,
    policySignal: '维持灵活合并监管机制',
    notableQuote:
      'Singapore adopts a voluntary merger notification regime to balance between effective regulatory oversight while keeping compliance costs low and not stifling innovation.',
    summary: `5
Mr Low Wu Yang Andre
asked the Deputy Prime Minister and Minister for Trade and Industry (a) whether the Competition and Consumer Commission of Singapore is reviewing Meta's acquisition of local AI start-up Manus; (b) how the Ministry assesses the impact of such acquisitions on the competitiveness of Singapore's domestic AI innovation ecosystem; and (c) whether the current merger notification framework remains adequate.
Mr Gan Kim Yong
: Singapore adopts a voluntary merger notification regime to balance between effective regulatory oversight while keeping compliance costs low and not stiflin`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-21666',
  },
  {
    id: 'written-answer-21302',
    title: `Publication of Quarterly Statistics on AI-related Retrenchment and Redeployment of Affected Workers`,
    zhTitle: `AI裁员统计公开质询`,
    date: '2026-01-12',
    parliament: '15',
    type: 'Written Answers to Questions',
    speakers: ['Patrick Tay Teck Guan', 'Tan See Leng'],
    topics: ['AI Economy & Industry', 'AI & Employment', 'AI & National Security', 'AI in Public Sector'],
    zhSummary: `议员质询是否公布季度AI相关裁员及再就业数据，政府回应以业务重组为主因，包含AI技术影响，且将继续研究技术对就业的影响。核心争议在于AI裁员数据透明度及具体影响评估。`,
    keyPoints: ['质询AI裁员数据公开', '裁员多因业务重组', '政府持续研究技术影响'],
    governmentStance: '业务重组为主因，继续研究AI影响',
    oppositionStance: '要求公开AI裁员及再就业数据',
    controversyLevel: 3,
    policySignal: '关注AI对就业影响的持续研究',
    notableQuote:
      'Business restructuring may stem from productivity improvements or work efficiency gains arising from the adoption of artificial intelligence (AI) or other technological advances.',
    summary: `48
Mr Patrick Tay Teck Guan
asked the Minister for Manpower (a) whether the Ministry will publish quarterly statistics on (i) retrenchments citing AI being one of the reasons for redundancy (ii) the redeployment rates of such affected workers and (iii) the average time for these affected workers to re-enter employment; and (b) if not, why not.
Dr Tan See Leng
: The Ministry of Manpower (MOM) surveys businesses on the reasons for carrying out retrenchments, with business restructuring being one of the categories. The proportion of retrenchments due to business restructuring has generally ranged`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-21302',
  },
  {
    id: 'written-answer-21309',
    title: `Update Code of Ethics and Professional Client Care for Property Agents to Declare Use of AI-edited Images and Videos of Property Listings`,
    zhTitle: `物业代理AI编辑图像声明`,
    date: '2026-01-12',
    parliament: '15',
    type: 'Written Answers to Questions',
    speakers: ['Chee Hong Tat', 'Melvin Yong Yik Chye'],
    topics: ['AI Safety & Ethics', 'AI Economy & Industry', 'AI & National Security', 'AI Infrastructure & Research'],
    zhSummary: `议员质询是否更新物业代理伦理守则，要求声明AI编辑的房源图像视频。政府回应现有守则要求广告材料准确描述物业，建议提供AI使用免责声明，避免误导消费者。CEA正审查相关指引，旨在平衡消费者保护与行业创新发展，核心争议在于如何规范AI技术应用与信息透明。`,
    keyPoints: ['要求声明AI编辑图像', '广告材料须准确描述', '审查指引平衡保护创新'],
    governmentStance: '支持更新指引保障消费者',
    oppositionStance: '要求明确声明AI编辑内容',
    controversyLevel: 2,
    policySignal: '推动AI广告透明规范',
    notableQuote:
      'agents should provide sufficient disclaimers to inform consumers of the use of artificial intelligence (AI) to alter or enhance images or videos',
    summary: `55
Mr Melvin Yong Yik Chye
asked the Minister for National Development whether the Council for Estate Agencies has any plans to update the Code of Ethics and Professional Client Care to specifically require property agents to declare images and videos portrayed on property listings that have been edited by artificial intelligence.
Mr Chee Hong Tat
: The Council for Estate Agencies (CEA) Code of Ethics and Professional Client Care requires property agents to ensure that all materials that advertise or promote a property accurately describe the property. In line with this, agents should provide`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-21309',
  },
  {
    id: 'written-answer-21161',
    title: `Deployment of Agentic AI Systems in Civil Service and HR Policies to Support Officers Made Redundant`,
    zhTitle: `公共服务智能化与人力政策`,
    date: '2025-11-06',
    parliament: '15',
    type: 'Written Answers to Questions',
    speakers: ['Josephine Teo', 'Poh Li San'],
    topics: ['AI Safety & Ethics', 'AI & Employment', 'AI & National Security', 'AI Infrastructure & Research'],
    zhSummary: `议员质询政府关于在公共服务中部署具代理能力的人工智能系统以自动化工作职能的计划，以及针对因AI导致岗位冗余的公务员的人力资源政策。政府回应称将谨慎推进AI部署，强调提升公务员技能以配合AI，聚焦复杂问题分析和解决方案设计，体现对效率提升与风险控制的平衡。`,
    keyPoints: ['代理型AI定义与功能', '谨慎推进AI应用', '公务员技能提升'],
    governmentStance: '谨慎部署AI，注重技能培训',
    oppositionStance: '关注岗位冗余与人力支持',
    controversyLevel: 3,
    policySignal: '推动AI与人力协同发展',
    notableQuote: 'Agentic AI systems are AI tools capable of initiating and carrying out actions.',
    summary: `15
Ms Poh Li San
asked the Minister for Digital Development and Information (a) what are the Government's plans for deploying agentic artificial intelligence (AI) systems to automate relevant job functions in the public service; and (b) what human resource policies are in place to assist public servants whose job roles may be made redundant with the adoption of agentic AI systems.
Mrs Josephine Teo
:
Agentic AI systems are AI tools capable of initiating and carrying out actions, such as sending emails or updating records and software. Such capabilities can enhance the efficiency and effectiven`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-21161',
  },
  {
    id: 'oral-answer-3923',
    title: `Addressing Teachers' Stress Levels and Supporting Their Mental Well-being`,
    zhTitle: `教师压力与心理支持措施`,
    date: '2025-11-04',
    parliament: '15',
    type: 'Oral Answers to Questions',
    speakers: [
      'Choo Pei Ling',
      'Desmond Lee',
      'Elysa Chen',
      'Hamid Razak',
      'Hany Soh',
      'Kenneth Tiong Boon Kiat',
      'Minister for Education',
      'Shawn Loh',
      'Valerie Lee',
      'Wan Rizal',
    ],
    topics: ['AI Governance & Regulation', 'AI in Education', 'AI in Healthcare', 'AI in Public Sector'],
    zhSummary: `议员质询教师压力高企及心理健康支持，关注年轻教师比例偏低及非教学工作负担。教育部长回应强调教师职业的崇高与责任，承认教师工作量大，表示将审视并改进非教学任务分配，保障教师福祉。核心争议在于如何有效减轻教师负担及吸引年轻教师留任。`,
    keyPoints: ['教师压力高企', '年轻教师比例低', '减轻非教学负担'],
    governmentStance: '重视教师福祉，优化工作分配',
    oppositionStance: null,
    controversyLevel: 3,
    policySignal: '减负增援教师心理支持',
    notableQuote: 'Teaching is, at its heart, a profoundly human endeavour.',
    summary: `2
Dr Wan Rizal
asked
the Minister for Education what additional measures are being considered to address the high stress levels reported by teachers in the recent OECD TALIS 2024 study, particularly regarding support for their mental health and well-being.
3
Mr Shawn Loh
asked the Minister for Education given the OECD Teaching and Learning International Survey 2024 finding that only 12% of teachers are aged under 30, with 40% of this group intending to leave within the next five years (a) whether the low proportion of younger teachers is an intended policy outcome; and (b) how are beginning te`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=oral-answer-3923',
  },
  {
    id: 'oral-answer-3927',
    title: `Balancing Academic Rigour Required to Excel at PSLE With Skills to Thrive in AI-driven Economy`,
    zhTitle: `PSLE学术严谨与AI技能平衡`,
    date: '2025-11-04',
    parliament: '15',
    type: 'Oral Answers to Questions',
    speakers: ['Dennis Tan Lip Fong', 'Janil Puthucheary', 'Senior Minister of State for Education'],
    topics: ['AI Economy & Industry', 'AI in Education', 'AI in Public Sector'],
    zhSummary: `议员质询PSLE是否侧重死记硬背，是否培养终身学习兴趣，以及与探究式、协作式学习的比较。教育部回应PSLE注重核心概念和批判思维，强调多元教学法和21世纪能力培养，且国际评比显示学生具备复杂问题解决能力。质询关注低收入及高需求学校的教学落实及国际经验借鉴，教育部强调教师培训中融入探究与协作技能。核心争议在于如何在学术严谨与创新能力培养间取得平衡。`,
    keyPoints: ['PSLE非死记硬背', '多元教学促进能力', '教师培训重探究协作'],
    governmentStance: '强调多元教学与21世纪能力培养',
    oppositionStance: '关注教学公平与国际经验借鉴',
    controversyLevel: 3,
    policySignal: '推动探究协作教学融合',
    notableQuote: 'PSLE does not emphasise rote learning or test-taking skills.',
    summary: `9
Mr Dennis Tan Lip Fong
asked the Minister for Education whether the Ministry considers that the academic rigour required to excel in the PSLE, such as rote memorisation and test-taking abilities (i) reflects the skills our youths need to thrive in the AI-driven economy, (ii) nurtures a lifelong love of learning and (iii) compares favourably with inquiry-based and collaborative learning approaches more common in other internationally recognised primary school curricula.
The Senior Minister of State for Education (Dr Janil Puthucheary) (for the Minister for Education)
: Mr Speaker, the Primary`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=oral-answer-3927',
  },
  {
    id: 'written-answer-20811',
    title: `Developing Age-progressive Framework for Responsible Use of GenAI for Students and Parents across Educational Levels`,
    zhTitle: `分龄生成式AI使用框架`,
    date: '2025-11-04',
    parliament: '15',
    type: 'Written Answers to Questions',
    speakers: ['David Hoe', 'Desmond Lee'],
    topics: ['AI Governance & Regulation', 'AI Safety & Ethics', 'AI in Education', 'AI & National Security'],
    zhSummary: `议员质询教育部是否制定分龄的生成式AI使用框架及家长指导方案。教育部回应已通过《数字素养与技术技能指南》向学校提供年龄适宜的AI使用指导，并为家长提供相关资源，支持学生在家合理使用AI。核心争议在于如何系统化分龄指导及家校协同支持。`,
    keyPoints: ['分龄AI使用框架需求', '学校已有指导资源', '家长支持资源提供'],
    governmentStance: '支持分龄指导并已提供相关资源',
    oppositionStance: '建议完善分龄及家长指导框架',
    controversyLevel: 2,
    policySignal: '推动分龄AI教育指导',
    notableQuote:
      'The Ministry of Education has provided schools with guidance on age-appropriate AI use in education.',
    summary: `49
Mr David Hoe
asked the Minister for Education (a) whether the Ministry will consider developing and publishing an age-progressive framework for the responsible use of generative AI across primary, secondary and post-secondary education levels; and (b) whether guidance could also be developed and published for parents to support younger students' learning and use of AI at home.
Mr Desmond Lee
: The question on guidance to schools and institutes of higher learning on the use of artificial intelligence (AI) has been addressed in written answer to Question Nos 41 and 42, taken on 24 September 2`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-20811',
  },
  {
    id: 'written-answer-20810',
    title: `Expanding SkillsFuture Credit Eligibility for Subscription to AI Productivity Tools`,
    zhTitle: `扩展SkillsFuture信用涵盖AI工具订阅`,
    date: '2025-11-04',
    parliament: '15',
    type: 'Written Answers to Questions',
    speakers: ['Desmond Lee', 'Kenneth Tiong Boon Kiat'],
    topics: ['AI Economy & Industry', 'AI & Employment', 'AI in Education', 'AI & National Security'],
    zhSummary: `议员质询是否将SkillsFuture信用扩展至订阅优质AI生产力工具以促进实践学习。政府回应目前支持AI相关课程及工具使用，强调课程内含实用工具，且AI领域快速发展，将持续关注并支持相关技能培养。核心争议在于是否直接将订阅工具纳入信用使用范围。`,
    keyPoints: ['质询扩展信用范围', '课程含AI工具支持', '持续关注AI发展'],
    governmentStance: '暂不扩展订阅工具范围',
    oppositionStance: '支持扩大信用使用',
    controversyLevel: 2,
    policySignal: '持续支持AI技能培训',
    notableQuote:
      'Today, individuals can use their SkillsFuture Credit to sign up for artificial intelligence (AI)-related courses.',
    summary: `48
Mr Kenneth Tiong Boon Kiat
asked the Minister for Education (a) whether the Ministry will expand SkillsFuture Credit eligibility to include subscriptions for curated, high-quality AI productivity tools to facilitate hands-on learning; and (b) if not, why not.
Mr Desmond Lee
: Today, individuals can use their SkillsFuture Credit to sign up for artificial intelligence (AI)-related courses. Where relevant to the training, these courses may provide access to suitable AI tools, including premium versions. This approach helps learners to acquire relevant AI skills by applying practical tools to r`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-20810',
  },
  {
    id: 'written-answer-20819',
    title: `Strengthening Engineering Talent Pipelines through Aligning with Emerging Industries and Public Sector Hiring`,
    zhTitle: `强化工程人才培养路径`,
    date: '2025-11-04',
    parliament: '15',
    type: 'Written Answers to Questions',
    speakers: ['Desmond Lee', 'Jackson Lam'],
    topics: ['AI Economy & Industry', 'AI & Employment', 'AI in Education', 'AI & National Security'],
    zhSummary: `议员质询为何学生对传统工程专业兴趣下降，如何调整课程与薪酬以匹配新兴产业，以及公共部门招聘和奖学金政策是否调整。政府回应称教育部与经济机构合作，调整课程内容，推动跨学科工程教育，同时通过行业任务组解决建筑环境行业人才短缺和薪酬竞争问题，并加强职业指导和公共部门招聘力度。核心争议在于行业薪酬与工作环境对人才吸引力的影响。`,
    keyPoints: ['工程毕业生供需匹配', '课程更新与跨学科融合', '行业薪酬与人才流失'],
    governmentStance: '积极调整教育和招聘政策',
    oppositionStance: '关注学生专业选择原因',
    controversyLevel: 3,
    policySignal: '强化工程人才培养与公共招聘',
    notableQuote:
      'Students do not just choose a course of study. Their choices are also influenced by the future careers associated with the course of study.',
    summary: `56
Mr Jackson Lam
asked the Minister for Education (a) whether the Ministry has studied why students are turning away from traditional engineering disciplines despite national infrastructure needs; (b) how curricula and pay expectations can be better aligned with emerging industries; and (c) whether public sector hiring and scholarships will be recalibrated to strengthen local engineering talent pipelines.
Mr Desmond Lee
: The Ministry of Education (MOE) works closely with economic agencies to ensure that the supply of places in the Institutes of Higher Learning (IHLs), including in engineerin`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-20819',
  },
  {
    id: 'written-answer-20821',
    title: `Establishing Collaboration between NIE and ECDA for Brain-based Learning across Learning Profiles and Integrating Adaptive AI in Education System`,
    zhTitle: `脑科学与自适应AI教育合作`,
    date: '2025-11-04',
    parliament: '15',
    type: 'Written Answers to Questions',
    speakers: ['Desmond Lee', 'Victor Lye'],
    topics: ['AI in Education', 'AI Infrastructure & Research', 'AI in Public Sector', 'AI Strategy'],
    zhSummary: `议员质询教育部是否推动国立教育学院与早期儿童发展局合作，研究不同学习类型的脑科学学习方法，并建议成立跨学科工作组推动脑科学与自适应AI融合教育。教育部回应已有多方合作，课程设计基于神经科学和教育心理学理论，体现专家意见，未明确承诺新工作组成立。核心争议在于是否需要新专门团队推动脑科学与AI深度融合。`,
    keyPoints: ['推动脑科学学习研究', '建议成立跨学科工作组', '已有多方教育研究合作'],
    governmentStance: '支持多方合作，基于科学理论设计课程',
    oppositionStance: '建议设立专门跨学科团队',
    controversyLevel: 2,
    policySignal: '强化脑科学与AI融合教育',
    notableQuote:
      'MOE grounds its curriculum design and pedagogies in educational theories which draws from various research fields, including neuroscience and educational psychology.',
    summary: `57
Mr Victor Lye
asked the Minister for Education (a) whether the Ministry will advise the National Institute of Education to collaborate with the Early Childhood Development Agency to study how students learn best across diverse learning profiles; and (b) if not, whether the Ministry will consider establishing an interdisciplinary taskforce comprising educators, neuroscientists, psychologists, and technologists to chart a roadmap for integrating brain-based learning and adaptive AI across the education system.
Mr Desmond Lee
: There are ongoing education research collaborations involving enti`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-20821',
  },
  {
    id: 'written-answer-20835',
    title: `Update on Jobs Transformation Maps and Support Available for Mid-Career Employees and Sectors Undergoing Restructuring`,
    zhTitle: `就业转型图及中年员工支持`,
    date: '2025-11-04',
    parliament: '15',
    type: 'Written Answers to Questions',
    speakers: ['Charlene Chen', 'Tan See Leng'],
    topics: ['AI Economy & Industry', 'AI & Employment', 'AI Infrastructure & Research', 'AI in Public Sector'],
    zhSummary: `质询聚焦就业转型图的最新进展、中年员工适应行业转变的支持措施，以及重组行业受影响员工的援助。政府回应介绍了19个就业转型图覆盖170万员工，强调通过职业转换计划帮助中年员工再培训，并结合行业洞察推动重组行业的技能提升和岗位重塑。核心争议点在于如何有效落实转型图建议，确保中年员工和重组行业工人顺利转型。`,
    keyPoints: ['19个就业转型图发布', '中年员工职业转换支持', '重组行业技能提升'],
    governmentStance: '积极推动就业转型和再培训',
    oppositionStance: null,
    controversyLevel: 2,
    policySignal: '强化中年员工再培训支持',
    notableQuote:
      'To date, 19 Jobs Transformation Maps (JTMs) have been launched, covering about 1.7 million employed residents.',
    summary: `70
Dr Charlene Chen
asked the Minister for Manpower (a) whether the Ministry can provide an update on the Jobs Transformation Maps; (b) how these initiatives support mid-career employees adapting to industry shifts; and (c) what assistance is provided to help sectors that are undergoing restructuring to equip affected workers for new or redesigned roles.
Dr Tan See Leng
: To date, 19 Jobs Transformation Maps (JTMs) have been launched, covering about 1.7 million employed residents.
To support mid-career employees in adapting to industry shifts, Workforce Singapore (WSG) uses the insights from J`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-20835',
  },
  {
    id: 'written-answer-20058',
    title: `Use of Copyright Law to Strengthen Protection Against Deepfakes`,
    zhTitle: `版权法防范深度伪造`,
    date: '2025-09-24',
    parliament: '15',
    type: 'Written Answers to Questions',
    speakers: ['Edwin Tong Chun Fai', 'Patrick Tay Teck Guan'],
    topics: [
      'AI Governance & Regulation',
      'AI Safety & Ethics',
      'AI Economy & Industry',
      'AI Infrastructure & Research',
    ],
    zhSummary: `议员质询新加坡是否借鉴丹麦利用版权法打击深度伪造。政府回应表示重视深度伪造带来的网络伤害，将通过新立法增强受害者救济权利。强调版权法主要支持创新创作，不适用于规制技术滥用，相关侵权行为可通过其他知识产权法律处理。核心争议在于版权法是否适合用于深度伪造治理。`,
    keyPoints: ['深度伪造引发网络伤害', '版权法支持创新非规制', '其他知识产权可补充治理'],
    governmentStance: '版权法非治理深度伪造主途径',
    oppositionStance: '借鉴丹麦版权法加强保护',
    controversyLevel: 3,
    policySignal: '拟推新法增强网络安全',
    notableQuote: 'The primary purpose of our copyright law is to support innovation and incentivise creativity.',
    summary: `40
Mr Patrick Tay Teck Guan
asked the Minister for Law whether Singapore is studying Denmark’s decision to use copyright law to strengthen protection against deepfakes, by providing individuals with a legal basis to demand illegal digital imitations be removed from tech platforms.
Mr Edwin Tong Chun Fai
: Countries around the world have different approaches to dealing with the issue of deepfakes. Singapore similarly takes the issue seriously.
The Government recognises that deepfake technology can be misused to harass or cause other online harm to individuals. In this regard, the Ministry of La`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-20058',
  },
  {
    id: 'oral-answer-3873',
    title: `Reasons for Lower Proportion of Fresh Graduates in Full-time Employment and Extent of Help from GRaduate Industry Traineeship Programme`,
    zhTitle: `毕业生就业与GRIT计划分析`,
    date: '2025-09-23',
    parliament: '15',
    type: 'Oral Answers to Questions',
    speakers: [
      'Edward Chia Bing Hui',
      'Gerald Giam Yean Song',
      'Gho Sze Kee',
      'Hamid Razak',
      'Jessica Tan Soon Neo',
      'Liang Eng Hwa',
      'Minister for Manpower',
      'Patrick Tay Teck Guan',
      'Tan See Leng',
      'Xie Yao Quan',
      'Yip Hon Weng',
    ],
    topics: ['AI Economy & Industry', 'AI & Employment', 'AI in Education', 'AI in Public Sector'],
    zhSummary: `议员质询新加坡应届毕业生全职就业比例下降的周期性与结构性原因，探讨政府推行的GRaduate Industry Traineeships (GRIT) 计划如何缓解就业难题。辩论聚焦GRIT计划的实施细节、质量保障、长期收益及对战略行业的支持。政府强调通过结构化培训和企业参与提升毕业生就业竞争力，质询方关注计划成效及公平转换机制，核心争议在于计划能否真正提升毕业生长期就业质量。`,
    keyPoints: ['就业比例下降原因', 'GRIT计划作用', '培训质量保障'],
    governmentStance: '通过GRIT提升毕业生就业质量',
    oppositionStance: '关注计划成效与公平性',
    controversyLevel: 3,
    policySignal: '强化毕业生实习培训机制',
    notableQuote: 'How does the GRaduate Industry Traineeships Programme address these factors?',
    summary: `13
Mr Xie Yao Quan
asked the Minister for Manpower in respect of a lower proportion of fresh graduates from Institutes of Higher Learning landing full-time permanent employment after graduation (a) what are the cyclical and structural factors contributing to this trend; (b) how does the GRaduate Industry Traineeships Programme (GRIT) address these factors; and (c) what further measures is the Ministry considering to address these factors.
14
Mr Edward Chia Bing Hui
asked the Minister for Manpower (a) whether the GRaduate Industry Traineeships (GRIT) Programme will affect the long-term earning`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=oral-answer-3873',
  },
  {
    id: 'written-answer-19797',
    title: `Development of Frameworks to Track Recent Graduates' Long-term Employability and Mitigate Risks of Skills Obsolescence`,
    zhTitle: `毕业生就业与技能更新框架`,
    date: '2025-09-23',
    parliament: '15',
    type: 'Written Answers to Questions',
    speakers: ['Desmond Lee', 'Low Wu Yang Andre'],
    topics: ['AI Governance & Regulation', 'AI Safety & Ethics', 'AI Economy & Industry', 'AI & Employment'],
    zhSummary: `议员质询政府如何与高等院校合作，制定框架以审视课程并追踪毕业生技能过时风险，以及如何衡量毕业生长期就业能力。政府回应通过就业调查监测毕业生就业状况，强调课程定期与产业需求对接，强化校企合作和实习安排，提升学生AI及跨领域能力。核心争议在于如何有效应对AI快速发展带来的技能更新挑战。`,
    keyPoints: ['就业数据持续监测', '课程与产业紧密结合', '强化校企合作实习'],
    governmentStance: '积极推动校企合作与课程更新',
    oppositionStance: null,
    controversyLevel: 2,
    policySignal: '加强AI技能培养与就业跟踪',
    notableQuote: 'The Institutes of Higher Learning seek to align their curriculum with evolving industry needs.',
    summary: `30
Mr Low Wu Yang Andre
asked the Minister for Education in view of the rapid advancements of AI (a) what frameworks are being developed with our Institutes of Higher Learning to (i) guide the review of curricula and (ii) track and mitigate the risk of skills obsolescence for recent graduates; and (b) what new metrics will be used to measure the long-term employability of recent graduates in an AI-driven economy.
Mr Desmond Lee
: The Government closely monitors the employment outcomes of fresh graduates and workers through (a) the Ministry of Education's (MOE's) Graduate Employment Survey (GES`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-19797',
  },
  {
    id: 'written-answer-19800',
    title: `Regular Curriculum Reviews and Industry Consultation to Align Students' Skills with Future Economy Needs`,
    zhTitle: `课程定期更新与产业对接`,
    date: '2025-09-23',
    parliament: '15',
    type: 'Written Answers to Questions',
    speakers: ['Charlene Chen', 'Desmond Lee'],
    topics: ['AI Economy & Industry', 'AI in Education', 'AI in Healthcare', 'AI & National Security'],
    zhSummary: `质询了教育部如何确保课程定期更新以匹配未来经济需求，特别是数字化、可持续发展及医疗领域。政府回应称通过定期审查、行业咨询及教师产业实践，确保课程内容紧跟行业发展，学校课程每6-8年审查一次，IHL课程更频繁，重点领域如AI更新更快。核心争议点在于课程更新频率与行业需求的匹配度。`,
    keyPoints: ['课程定期审查', '行业深度参与', '重点领域快速更新'],
    governmentStance: '定期更新课程，强化行业合作',
    oppositionStance: '关注课程更新频率与实效',
    controversyLevel: 2,
    policySignal: '强化产教融合，推动技能匹配',
    notableQuote:
      'The Ministry of Education and our Institutes of Higher Learning regularly review the curriculum to ensure students develop competencies needed to thrive in the future economy.',
    summary: `33
Dr Charlene Chen
asked the Minister for Education (a) how does the Ministry ensure school curricula are regularly updated to equip students with skills relevant to the future economy, particularly in growth areas like digitalisation, sustainability, healthcare, and allied healthcare; (b) how frequently are such reviews conducted in consultation with industry; and (c) how is alignment ensured between education pathways and sectors with strong and emerging manpower demand.
Mr Desmond Lee
: The Ministry of Education and our Institutes of Higher Learning (IHLs) regularly review the curriculum i`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-19800',
  },
  {
    id: 'written-answer-19554',
    title: `Use of AI and Technology Tools to Reduce Errors and Increase Efficiency in Government Contract Evaluation, Award and Management`,
    zhTitle: `政府合同评估中的AI应用`,
    date: '2025-09-22',
    parliament: '15',
    type: 'Written Answers to Questions',
    speakers: ['Lawrence Wong', 'Zhulkarnain Abdul Rahim'],
    topics: ['AI Governance & Regulation', 'AI & National Security', 'AI in Public Sector', 'AI Strategy'],
    zhSummary: `质询方关注审计署对合同管理和招标评估中存在的错误，询问公共服务部门是否采用AI及技术手段提升效率和减少错误。政府回应称已积极探索并在适当领域开始应用AI技术，以确保合同评审符合政府采购原则。核心争议点在于如何有效利用AI工具提升政府采购透明度和效率。`,
    keyPoints: ['审计署发现合同管理问题', '政府探索AI提升效率', '确保合同符合采购原则'],
    governmentStance: '积极采用AI提升采购效率',
    oppositionStance: '关注错误减少与合规性',
    controversyLevel: 2,
    policySignal: '推动AI技术应用于政府采购',
    notableQuote:
      'the Government has been actively exploring the use of technology, including artificial intelligence, in procurement',
    summary: `2
Mr Zhulkarnain Abdul Rahim
asked the Prime Minister and Minister for Finance in light of the findings by the Auditor-General's Office for FY24/25 on contract management and tender evaluation, whether the Public Service Division has employed artificial intelligence (AI) tools and other technological measures to reduce errors and increase efficiency in tender evaluation and to ensure contracts are awarded in line with the Government’s procurement principles.
Mr Lawrence Wong
:
Yes, the Government has been actively exploring the use of technology, including artificial intelligence, in procureme`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-19554',
  },
  {
    id: 'oral-answer-3852',
    title: `Protection for Consumers of Fintech Platforms and Non-bank Institutions, and Regulations on Liquidity Levels and Responsible Marketing`,
    zhTitle: `金融科技平台消费者保护`,
    date: '2025-04-08',
    parliament: '14',
    type: 'Oral Answers to Questions',
    speakers: ['Alvin Tan', 'Mark Lee', 'Minister of State for Trade and Industry', 'Saktiandi Supaat'],
    topics: ['AI Governance & Regulation', 'AI Safety & Ethics', 'AI Economy & Industry'],
    zhSummary: `议员质询金融管理局（MAS）如何确保金融科技平台及非银行机构维持流动性、管理资金提取风险，并加强零售投资者保护。政府回应指出相关投资平台受资本市场服务牌照监管，客户资产与平台资产隔离，提现按规定时间有序进行。政府强调近期提现激增事件中，平台的风险管理机制发挥了作用，但对部分即时提现及关联借记卡功能进行了限制，体现监管灵活性与风险防控的平衡。`,
    keyPoints: ['投资平台受资本市场服务牌照监管', '客户资产与平台资产严格隔离', '提现功能受限以防风险扩散'],
    governmentStance: '强调监管机制有效保障消费者权益',
    oppositionStance: null,
    controversyLevel: 3,
    policySignal: '加强金融科技平台风险监管',
    notableQuote:
      'The recent incident involving a surge in withdrawals from an investment platform illustrate that the safeguards worked as intended.',
    summary: `7
Mr Mark Lee
asked the Prime Minister and Minister for Finance (a) how does MAS ensure that financial technology platforms and non-bank financial institutions offering high-yield investment products maintain sufficient liquidity and manage fund withdrawal risks; (b) whether MAS is considering additional safeguards to enhance consumer protection for retail investors engaging with such platforms, given recent liquidity challenges faced by fintech firms; and (c) what measures are in place to ensure that the public fully understands the risks of using financial services from non-bank entities, pa`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=oral-answer-3852',
  },
  {
    id: 'budget-2620',
    title: `Committee of Supply – Head Q (Ministry of Digital Development and Information)`,
    zhTitle: `数字基础设施与安全发展`,
    date: '2025-03-07',
    parliament: '14',
    type: 'Budget',
    speakers: [
      'Alex Yam',
      'Eric Chua',
      'Gerald Giam Yean Song',
      'Hany Soh',
      'Jessica Tan Soon Neo',
      'Josephine Teo',
      'Keith Chua',
      'Mariam Jaafar',
      'Minister for Digital Development and Information',
      'Minister of State for Digital Development and Information',
      'Miss Rachel Ong',
      'Ong Hua Han',
      'Pritam Singh',
      'Rahayu Mahzam',
      'Senior Minister of State for Digital Development and Information',
      'Sharael Taha',
      'Tan Kiat How',
      'Tin Pei Ling',
      'Xie Yao Quan',
    ],
    topics: ['AI Economy & Industry', 'AI Infrastructure & Research', 'AI in Public Sector'],
    zhSummary: `议员质询数字基础设施的韧性与安全保障措施，关注云服务和数据中心的安全指南。政府强调新加坡数字经济增长显著，已发布指导提升基础设施安全，确保数字转型可持续且包容。核心争议在于如何进一步强化基础设施以应对全天候运营风险。`,
    keyPoints: ['数字经济快速增长', '数字基础设施安全关键', '发布云服务安全指南'],
    governmentStance: '加强数字基础设施韧性与安全',
    oppositionStance: '关注基础设施安全与持续发展',
    controversyLevel: 2,
    policySignal: '强化数字基础设施安全',
    notableQuote:
      'A small failure in our digital infrastructure can cause major disruptions to our economic activities and daily lives.',
    summary: `The Chairman
: Head Q, Ministry of Digital Development and Information. Ms Tin Pei Ling.
12.26 pm
Sustainable and Safe Digital Growth
Ms Tin Pei Ling (MacPherson)
: Chairman, I move, "That the total sum to be allocated for Head Q of the Estimates be reduced by $100."
Digitalisation is our present reality and an inevitable future. This transformation is not just about technological upgrades, but fundamentally reshaping our society, economy and way of life. It presents vast economic opportunities, promising a better quality of life for future generations.
Singapore has always been unafraid of tr`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-2620',
  },
  {
    id: 'budget-2612',
    title: `Committee of Supply – Head S (Ministry of Manpower)`,
    zhTitle: `新加坡劳动力老龄化应对策略`,
    date: '2025-03-06',
    parliament: '14',
    type: 'Budget',
    speakers: [
      'Assoc Prof Jamus Jerome Lim',
      'Assoc Prof Razwana Begum Abdul Rahim',
      'Chua Kheng Wee Louis',
      'Desmond Choo',
      'Edward Chia Bing Hui',
      'Gerald Giam Yean Song',
      'Hazel Poa',
      'Leong Mun Wai',
      'Louis Ng Kok Kwang',
      'Mark Lee',
      'Miss Rachel Ong',
      'Mohd Fahmi Aliman',
      'Patrick Tay Teck Guan',
      'See Jinli Jean',
      'Sharael Taha',
      'Sylvia Lim',
      'Yip Hon Weng',
    ],
    topics: ['AI Governance & Regulation', 'AI Safety & Ethics', 'AI Economy & Industry', 'AI & Employment'],
    zhSummary: `议员质询人力部关于退休保障、劳动力素质提升及包容性职场建设成效，重点关注劳动力老龄化带来的挑战。质询方提出通过助力技术改造岗位、设立专门培训中心等措施提升老年人就业率。政府尚未明确回应，辩论聚焦如何应对老龄化劳动力短缺及经济影响。`,
    keyPoints: ['退休保障成效质询', '老龄劳动力岗位重塑', '专设培训支持老年工'],
    governmentStance: null,
    oppositionStance: '推动技术助老与培训支持',
    controversyLevel: 3,
    policySignal: '推动老龄劳动力再就业',
    notableQuote:
      'We must adopt such innovations widely. Singapore can, and should, become a hub for such innovations.',
    summary: `The Chairman
: Head S, the Ministry of Manpower. Mr Desmond Choo.
5.23 pm
Manpower Policies
Mr Desmond Choo (Tampines)
: Mr Chairman, I move, "That the total sum to be allocated for Head S of the Estimates be reduced by $100."
Over the current term of Government, the Ministry of Manpower (MOM) has undertaken bold reforms to steer our workforce from crisis to recovery, from downturn to growth.
We introduced the Complementarity Assessment (COMPASS) framework to ensure foreign talent complements and never displaces our Singaporean core. We legislated the world's first Platform Workers Act to prot`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-2612',
  },
  {
    id: 'budget-2610',
    title: `Committee of Supply – Head V (Ministry of Trade and Industry)`,
    zhTitle: `贸易与工业预算辩论摘要`,
    date: '2025-03-06',
    parliament: '14',
    type: 'Budget',
    speakers: [
      'Foo Mee Har',
      'Jessica Tan Soon Neo',
      'Liang Eng Hwa',
      'Mark Lee',
      'Minister for Trade and Industry',
      'Minister of State for Trade and Industry',
      'Neil Parekh Nimil Rajnikant',
      'Saktiandi Supaat',
      'Second Minister for Trade and Industry',
      'Senior Minister of State for Trade and Industry',
      'Sylvia Lim',
    ],
    topics: ['AI Safety & Ethics', 'AI Economy & Industry', 'AI in Education', 'AI Infrastructure & Research'],
    zhSummary: `议员质询了地缘政治紧张对新加坡经济的潜在影响，特别是贸易保护主义和关税战的风险。政府回应指出全球多边自由贸易体系受压，贸易战可能扰乱供应链，影响投资和经济增长。核心争议在于如何应对外部不确定性及国内资源限制，保障经济持续发展。`,
    keyPoints: ['全球贸易体系受压', '贸易战扰乱供应链', '国内资源紧张挑战'],
    governmentStance: '坚持开放经济与长期规划',
    oppositionStance: '关注预算削减与风险应对',
    controversyLevel: 3,
    policySignal: '强化经济韧性与开放合作',
    notableQuote: 'Our economic success did not happen by chance. It was the result of a combination of factors.',
    summary: `[(proc text) Head V (cont) – (proc text)]
[(proc text) Resumption of Debate on Question [5 March 2025], (proc text)]
[(proc text) "That the total sum to be allocated for Head V of the Estimates be reduced by $100." – [Mr Liang Eng Hwa]. (proc text)]
[(proc text) Question again proposed. (proc text)]
12.17 pm
The Chairman
: Deputy Prime Minister and Minister for Trade and Industry Gan Kim Yong.
The Minister for Trade and Industry (Mr Gan Kim Yong)
: Chairman, let me first thank Members for their very constructive comments and suggestions. The year 2024 has been a relatively good year. The gross`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-2610',
  },
  {
    id: 'budget-2614',
    title: `Committee of Supply – Head S (Ministry of Manpower)`,
    zhTitle: `劳动力市场复苏与保障措施`,
    date: '2025-03-06',
    parliament: '14',
    type: 'Budget',
    speakers: ['Mariam Jaafar', 'Melvin Yong Yik Chye', 'Minister for Manpower', 'Xie Yao Quan', 'Yeo Wan Ling'],
    topics: ['AI Economy & Industry', 'AI & Employment', 'AI Infrastructure & Research', 'AI in Public Sector'],
    zhSummary: `议员质询疫情后就业恢复、通胀压力及弱势群体保障。人力部部长回应新加坡失业率降至2.8%，通过技能培训、渐进式工资模式及退休保障等多项措施支持不同年龄和弱势群体就业，强调收入增长超过通胀，整体劳动力市场稳健。核心争议聚焦于如何持续提升低收入者福利及应对全球经济不确定性。`,
    keyPoints: ['疫情后就业恢复', '低收入者工资提升', '弱势群体保障加强'],
    governmentStance: '推动技能培训与收入保障',
    oppositionStance: null,
    controversyLevel: 2,
    policySignal: '强化就业支持与退休保障',
    notableQuote: 'We helped workers and businesses to emerge stronger.',
    summary: `[(proc text) Debate resumed. (proc text)]
6.36 pm
The Minister for Manpower (Dr Tan See Leng)
: Mr Chairman, I thank the Government Parliamentary Committee (GPC) Members of Parliament and Members who have spoken for our workers as well as our employers. It has been five years since the COVID-19 pandemic. Fortunately, we managed to recover fairly quickly.
During COVID-19, resident unemployment peaked at 4.8%. MOM's priority then was to protect livelihoods. Through the SGUnited Jobs and Skills Package, we assisted more than 200,000 jobseekers. Now, resident unemployment is at 2.8%, amongst the l`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-2614',
  },
  {
    id: 'budget-2605',
    title: `Committee of Supply – Head V (Ministry of Trade and Industry)`,
    zhTitle: `推动经济持续增长的挑战与对策`,
    date: '2025-03-05',
    parliament: '14',
    type: 'Budget',
    speakers: [
      'Alex Yam',
      'Dennis Tan Lip Fong',
      'Desmond Choo',
      'Don Wee',
      'Edward Chia Bing Hui',
      'Foo Mee Har',
      'Jessica Tan Soon Neo',
      'Keith Chua',
      'Liang Eng Hwa',
      'Mariam Jaafar',
      'Mark Lee',
      'Melvin Yong Yik Chye',
      'Neil Parekh Nimil Rajnikant',
      'Saktiandi Supaat',
      'Sharael Taha',
      'Sylvia Lim',
      'Tin Pei Ling',
      'Usha Chandradas',
    ],
    topics: ['AI Economy & Industry', 'AI & Employment', 'AI Infrastructure & Research', 'AI in Public Sector'],
    zhSummary: `议员质询新加坡经济能否超越2025年1%-3%的增长预期，强调经济增长对就业和国际竞争力的重要性。政府回应需克服土地、劳动力及碳排放限制，通过结构性生产力提升、企业转型和基础设施建设实现增长。核心争议在于如何在资源受限下实现更高增长。`,
    keyPoints: ['经济增长高于预期', '需突破土地与劳动力限制', '结构性生产力提升关键'],
    governmentStance: '推动结构性改革促进经济增长',
    oppositionStance: null,
    controversyLevel: 3,
    policySignal: '强调创新与生产力提升',
    notableQuote:
      'To do that, it requires us to steadfastly work on overcoming our tight constraints on land and workforce and now also carbon.',
    summary: `The Chairman
: Head V, Ministry of Trade and Industry. Mr Liang Eng Hwa.
5.37 pm
Growing Our Economy and Trade
Mr Liang Eng Hwa (Bukit Panjang)
: Mr Chairman, I seek to move, "That the total sum to be allocated for Head V of the Estimates be reduced by $100".
Sir, the Singapore economy surprised on the upsize with a higher-than-expected growth of 4.4% in 2024; significantly above the guided range of 1% to 3% that we came to expect. This is good news for Singapore as it meant more economic activities, better jobs opportunities, more tax revenues to strengthen our fiscal position and better stan`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-2605',
  },
  {
    id: 'budget-2593',
    title: `Committee of Supply – Head R (Ministry of Law)`,
    zhTitle: `新加坡国际争端解决竞争力`,
    date: '2025-03-04',
    parliament: '14',
    type: 'Budget',
    speakers: [
      'Assoc Prof Razwana Begum Abdul Rahim',
      'Keith Chua',
      'Lim Biow Chuan',
      'Minister of State for Law',
      'Nadia Ahmad Samdin',
      'Patrick Tay Teck Guan',
      'Second Minister for Law',
      'See Jinli Jean',
      'Sitoh Yih Pin',
      'Sylvia Lim',
      'Tan Wu Meng',
      'Usha Chandradas',
      'Vikram Nair',
      'Zhulkarnain Abdul Rahim',
    ],
    topics: [
      'AI Governance & Regulation',
      'AI Safety & Ethics',
      'AI Economy & Industry',
      'AI Infrastructure & Research',
    ],
    zhSummary: `议员质询新加坡如何保持作为国际争端解决中心的竞争优势，特别面对阿布扎比等新兴竞争对手。政府强调新加坡凭借法治、专业人才及创新优势，持续吸引跨境争端案件，并推动调解国际公约。核心争议在于如何应对全球竞争及吸引人才，确保新加坡领先地位不被削弱。`,
    keyPoints: ['新加坡国际争端中心地位', '全球竞争加剧挑战', '需持续吸引人才投资'],
    governmentStance: '持续强化法治与创新优势',
    oppositionStance: '关注竞争压力与人才流失',
    controversyLevel: 3,
    policySignal: '强化国际争端解决能力',
    notableQuote: 'Singapore has to: first, stay open... second, stay ahead of the competition and ahead of the curve.',
    summary: `The Chairman
: Head R, Ministry of Law. Mr Zhulkarnain Abdul Rahim.
1.00 pm
Singapore as an International Dispute Hub
Mr Zhulkarnain Abdul Rahim (Chua Chu Kang)
: Chairman, I move, "That the total sum to be allocated for Head R of the Estimates be reduced by $100."
Chairman, I am a disputes lawyer in an international arbitration practice. Singapore has firmly established itself as a leading international dispute resolution hub, attracting parties from all over the world seeking a neutral, efficient and trusted venue for resolving their disputes. Our strategic location, strong rule of law and w`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-2593',
  },
  {
    id: 'budget-2592',
    title: `Committee of Supply – Head P (Ministry of Home Affairs)`,
    zhTitle: `内政部预算与AI安全议题`,
    date: '2025-03-04',
    parliament: '14',
    type: 'Budget',
    speakers: [
      'Minister of State for Home Affairs',
      'Patrick Tay Teck Guan',
      'Pritam Singh',
      'Second Minister for Home Affairs',
      'Vikram Nair',
      'Zhulkarnain Abdul Rahim',
    ],
    topics: ['AI Safety & Ethics', 'AI & Employment', 'AI & National Security', 'AI in Public Sector'],
    zhSummary: `议员质询内政部预算及应对技术犯罪措施，政府回应通过新清关概念提升边境安全和效率，利用AI技术加强风险评估和自动化，减少人力需求。辩论聚焦AI带来的犯罪挑战与人力资源压力，政府强调转型与再培训，反映出对未来安全与技术融合的重视。`,
    keyPoints: ['新清关概念提升效率', 'AI助力风险评估', '人力资源转型升级'],
    governmentStance: '推动AI技术强化安全与效率',
    oppositionStance: '关注预算削减与技术风险',
    controversyLevel: 3,
    policySignal: '加强AI在边境安全应用',
    notableQuote:
      'Criminals are exploiting technology, in particular, artificial intelligence (AI), to carry out more sophisticated crimes and to hit more victims.',
    summary: `[(proc text) Head P (cont) – (proc text)]
[(proc text) Resumption of Debate on Question [3 March 2025], (proc text)]
[(proc text) "That the total sum to be allocated for Head P of the Estimates be reduced by $100." – [Mr Zhulkarnain Abdul Rahim]. (proc text)]
[(proc text) Question again proposed. (proc text)]
11.31 am
The Chairman
: Minister Josephine Teo.
The Second Minister for Home Affairs (Mrs Josephine Teo)
: Mr Chairman, I thank Members for their support of the Ministry of Home Affairs (MHA). My colleagues and I will address the points that they raised. Minister of State Sun Xueling will`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-2592',
  },
  {
    id: 'budget-2585',
    title: `Committee of Supply – Head P (Ministry of Home Affairs)`,
    zhTitle: `维护种族宗教和谐与信任`,
    date: '2025-03-03',
    parliament: '14',
    type: 'Budget',
    speakers: [
      'Alex Yam',
      'Assoc Prof Razwana Begum Abdul Rahim',
      'He Ting Ru',
      'Keith Chua',
      'Mariam Jaafar',
      'Miss Rachel Ong',
      'Patrick Tay Teck Guan',
      'Pritam Singh',
      'See Jinli Jean',
      'Sylvia Lim',
      'Vikram Nair',
      'Zhulkarnain Abdul Rahim',
    ],
    topics: ['AI Governance & Regulation', 'AI Safety & Ethics', 'AI in Education', 'Deepfakes & Disinformation'],
    zhSummary: `议员质询政府如何与社区组织及公众合作，维护新加坡的种族宗教和谐，并应对全球普遍存在的公共机构信任赤字。质询强调谣言和错误信息对社会和谐的威胁，呼吁多方共同努力。政府回应尚未包含在节选中，核心争议在于如何平衡政策执行与社区参与，增强公众对执法机构的信任。`,
    keyPoints: ['维护种族宗教和谐', '打击错误信息传播', '提升公众对机构信任'],
    governmentStance: null,
    oppositionStance: '强调社区与公众共担和谐责任',
    controversyLevel: 3,
    policySignal: '加强社区参与与信任建设',
    notableQuote: 'Trust in public institutions, especially those responsible for law and order, is essential.',
    summary: `The Chairman
: Head P, Ministry of Home Affairs. Mr Zhulkarnain Abdul Rahim.
6.54 pm
Trust, Racial and Religious Harmony
Mr Zhulkarnain Abdul Rahim (Chua Chu Kang)
: Chairman, I move, "That the total sum to be allocated for Head P of the Estimates be reduced by $100".
In today’s world, where divisions and distrust are rising, preserving trust and safeguarding racial and religious harmony are more important than ever. Many societies, including ours, are facing challenges such as misinformation, external influences and global conflicts that can strain social cohesion. In such times, it is not ju`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-2585',
  },
  {
    id: 'budget-2583',
    title: `Committee of Supply – Head J (Ministry of Defence)`,
    zhTitle: `国防预算与国际安全形势`,
    date: '2025-03-03',
    parliament: '14',
    type: 'Budget',
    speakers: [
      'Alex Yam',
      'Assoc Prof Jamus Jerome Lim',
      'Chong Kee Hiong',
      'Denise Phua Lay Peng',
      'Desmond Choo',
      'Don Wee',
      'Gan Thiam Poh',
      'Gerald Giam Yean Song',
      'Joan Pereira',
      'Kwek Hian Chuan Henry',
      'Lim Biow Chuan',
      'Minister for Defence',
      'Miss Rachel Ong',
      'Mohd Fahmi Aliman',
      'Neil Parekh Nimil Rajnikant',
      'Ng Eng Hen',
      'Patrick Tay Teck Guan',
      'Poh Li San',
      'Saktiandi Supaat',
      'See Jinli Jean',
      'Senior Minister of State for Defence',
      'Shawn Huang Wei Zhong',
      'Vikram Nair',
      'Wan Rizal',
      'Zaqy Mohamad',
      'Zhulkarnain Abdul Rahim',
    ],
    topics: ['AI Governance & Regulation', 'AI & National Security', 'AI in Public Sector'],
    zhSummary: `议员质询当前国际安全环境变化及其对新加坡国防预算的影响，重点关注美中关系紧张、国际规则体系的动摇及区域安全风险。政府强调国防和武装力量对保障国家安全的重要性，呼吁维持强大防御能力以应对复杂多变的国际局势。核心争议在于国际联盟的稳定性及新加坡应如何调整国防策略。`,
    keyPoints: ['国际规则体系受挑战', '美中竞争加剧', '区域安全风险上升'],
    governmentStance: '强调加强国防保障国家安全',
    oppositionStance: '关注国际局势变化影响预算',
    controversyLevel: 3,
    policySignal: '强化国防应对复杂国际局势',
    notableQuote: 'the rules based system and the alliances that formed post-World War II appears to be under threat.',
    summary: `The Chairman
: Mr Vikram Nair.
12.03 pm
Security Situation
Mr Vikram Nair (Sembawang)
: Chairman, I seek to move, "That the sum to be allocated for Head J of the Estimates be reduced by $100".
Sir, 10 years ago, at the Shangri-La Dialogue 2015, also the year Singapore celebrated 50 years of Independence, Minister for Defence Dr Ng Eng Hen gave a speech titled "New Century – New Players, New Rules?". Within which, Dr Ng described the changing international order in the decades post-World War II, and how the United States (US) and the leading western powers reconstructed, rebuilt and redefined t`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-2583',
  },
  {
    id: 'oral-answer-3822',
    title: `Restrictions for Use of DeepSeek by Public Officers`,
    zhTitle: `公职人员使用DeepSeek限制`,
    date: '2025-03-03',
    parliament: '14',
    type: 'Oral Answers to Questions',
    speakers: [
      'Gerald Giam Yean Song',
      'Janil Puthucheary',
      'Senior Minister of State for Digital Development and Information',
    ],
    topics: [
      'AI Governance & Regulation',
      'AI Economy & Industry',
      'AI & National Security',
      'AI Infrastructure & Research',
    ],
    zhSummary: `议员质询政府是否考虑限制公职人员使用DeepSeek，类似他国对政府设备的禁令。政府回应称有政策框架评估技术适用性，强调安全与创新并重，但未直接回应DeepSeek限制问题。质询方追问政府自研AI工具Pair是否依赖国外商业平台，政府未详细说明，表示可私下跟进。核心争议在于政府对具体商业AI产品的态度及数据安全透明度。`,
    keyPoints: ['政府有技术使用政策', '未明确限制DeepSeek', 'Pair AI工具细节未公开'],
    governmentStance: '通过政策框架保障安全创新',
    oppositionStance: '要求明确DeepSeek限制措施',
    controversyLevel: 3,
    policySignal: '持续评估AI安全与合规',
    notableQuote:
      'The Government has policies, frameworks and processes to guide the use of technology in the public sector.',
    summary: `4
Mr Gerald Giam Yean Song
asked  the Minister for Digital Development and Information (a) whether the Government is considering restrictions on the use of DeepSeek by public officers, similar to bans imposed by some other countries on its use on Government devices; (b) if not, what factors justify a different approach in Singapore; and (c) how does the Government determine which AI models are deemed secure enough for public sector use.
The Senior Minister of State for Digital Development and Information (Dr Janil Puthucheary) (for Minister for Digital Development and Information)
: Sir, the G`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=oral-answer-3822',
  },
  {
    id: 'budget-2570',
    title: `Debate on Annual Budget Statement`,
    zhTitle: `2025年度预算中的AI发展策略`,
    date: '2025-02-27',
    parliament: '14',
    type: 'Budget',
    speakers: [
      'Alex Yam',
      'Assoc Prof Jamus Jerome Lim',
      'Chua Kheng Wee Louis',
      'Deputy Prime Minister',
      'Deputy Speaker',
      'Derrick Goh',
      'Desmond Choo',
      'Don Wee',
      'Edward Chia Bing Hui',
      'Gerald Giam Yean Song',
      'Heng Swee Keat',
      'Keith Chua',
      'Leong Mun Wai',
      'Lim Wee Kiak',
      'Mark Lee',
      'Melvin Yong Yik Chye',
      'Miss Cheryl Chan Wei Ling',
      'Miss Rachel Ong',
      'Mohd Fahmi Aliman',
      'Muhamad Faisal Bin Abdul Manap',
      'Nadia Ahmad Samdin',
      'Patrick Tay Teck Guan',
      "Prime Minister's Office",
      'See Jinli Jean',
      'Senior Minister of State',
      'Senior Minister of State for Defence',
      'Sharael Taha',
      'Sylvia Lim',
      'Xie Yao Quan',
      'Yeo Wan Ling',
    ],
    topics: ['AI Governance & Regulation', 'AI Economy & Industry', 'AI & Employment', 'AI in Education'],
    zhSummary: `议会辩论围绕2025年度预算展开，重点关注如何应对全球政治经济变局及科技变革，特别是人工智能等前沿技术对经济和社会的影响。政府强调在支持家庭和企业的同时，积极布局未来经济增长，推动科技创新和人才培养。核心争议点在于如何平衡短期支持与长期转型，以及AI技术带来的就业和治理挑战。`,
    keyPoints: ['支持家庭和企业', '应对全球变局', '推动科技创新'],
    governmentStance: '积极应对变革，推动AI发展',
    oppositionStance: null,
    controversyLevel: 2,
    policySignal: '加快AI与未来经济布局',
    notableQuote:
      'Game-changing technologies like artificial intelligence (AI), quantum computing, 5G/6G... will change how we work and live.',
    summary: `[(proc text) Order read for Resumption of Debate on Question [18 February 2025] [2nd Allotted Day] (proc text)]
[(proc text) "That Parliament approves the financial policy of the Government for the financial year 1 April 2025 to 31 March 2026." – [Prime Minister and Minister for Finance]. (proc text)]
[(proc text) Question again proposed. (proc text)]
Mr Speaker
: Deputy Prime Minister Heng Swee Keat.
11.35 am
The Deputy Prime Minister (Mr Heng Swee Keat)
: Mr Speaker, Sir, I rise in support of the Budget. Budget 2025 is a Budget for all Singaporeans. It provides immediate support for families`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-2570',
  },
  {
    id: 'oral-answer-3785',
    title: `Impact of US Export Controls on Singapore's Semi-conductor Industry and Ensuring Singapore-based Chip Companies Abide by New Rules to Safeguard Country's Business Reputation`,
    zhTitle: `美出口管制对新加坡芯片业影响`,
    date: '2025-02-18',
    parliament: '14',
    type: 'Oral Answers to Questions',
    speakers: [
      'Assoc Prof Jamus Jerome Lim',
      'Joan Pereira',
      'Mark Lee',
      'Minister for Foreign Affairs',
      'Second Minister for Trade and Industry',
      'Tan See Leng',
      'Yip Hon Weng',
    ],
    topics: ['AI Governance & Regulation', 'AI Economy & Industry', 'AI in Public Sector'],
    zhSummary: `议员质询美出口管制对新加坡半导体产业及经济的影响，及政府如何防止企业利用新加坡规避美国限制。政府强调新加坡作为法治透明的国际商业枢纽，严厉打击违法行为，维护国家信誉。核心争议在于新加坡是否被列为美出口管制第二等级，及如何修复与美国的信任关系。`,
    keyPoints: ['防止规避美出口管制', '维护国际商业信誉', '争取提升出口管制等级'],
    governmentStance: '坚持法治严惩违规，维护国际信誉',
    oppositionStance: '关注美出口管制对产业影响及政策应对',
    controversyLevel: 3,
    policySignal: '强化出口管制合规监管',
    notableQuote: 'Singapore is a stable, trusted, reliable and well-connected international business hub.',
    summary: `3
Mr Yip Hon Weng
asked the Deputy Prime Minister and Minister for Trade and Industry (a) how does the Ministry ensure that the ease of doing business in Singapore is not exploited by companies seeking to bypass US trade restrictions; and (b) whether the Ministry can provide an update on its assessment of the effects of the US chips export control rules on our semi-conductor industry and the broader economy.
4
Ms Joan Pereira
asked the Deputy Prime Minister and Minister for Trade and Industry whether there are measures in place to ensure that entities operating in Singapore are compliant with`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=oral-answer-3785',
  },
  {
    id: 'written-answer-18677',
    title: `Impact of US' AI Diffusion Policy and Export Controls on Singapore's Competitiveness and Tech Businesses`,
    zhTitle: `美AI出口管制对新加坡影响`,
    date: '2025-02-04',
    parliament: '14',
    type: 'Written Answers to Questions',
    speakers: ['Chua Kheng Wee Louis', 'Gan Kim Yong'],
    topics: ['AI Governance & Regulation', 'AI Economy & Industry', 'AI & National Security', 'AI in Public Sector'],
    zhSummary: `议员质询美国2025年新AI扩散政策及出口管制对新加坡进口高端芯片及AI竞争力的影响。政府回应政策尚未最终确定，正密切监测并与企业沟通，必要时将采取措施保障新加坡企业获取美国高端技术。核心争议点在于新加坡未获例外名单资格，可能影响技术进口和竞争力。`,
    keyPoints: ['美国AI政策未定', '新加坡未获例外', '政府密切监测'],
    governmentStance: '积极监测并考虑保障措施',
    oppositionStance: '关注进口限制影响',
    controversyLevel: 2,
    policySignal: '可能出台保障技术进口措施',
    notableQuote: 'We are closely monitoring the situation and engaging companies on the potential impact.',
    summary: `8
Mr Chua Kheng Wee Louis
asked the Deputy Prime Minister and Minister for Trade and Industry in view of the new artificial intelligence diffusion policy and export controls by the United States introduced in January 2025, where Singapore is not listed as among the 18 countries granted exceptions, what is the Government's assessment of (i) the ability of Singapore-based entities to import high-end chips and technologies from the United States and (ii) Singapore's artificial intelligence competitiveness.
Mr Gan Kim Yong
: The new artificial intelligence (AI) diffusion rule has not been finalise`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-18677',
  },
  {
    id: 'written-answer-18417',
    title: `Reasons behind Government's Decision to Stop Practice of Partially Masking NRIC Numbers`,
    zhTitle: `停止部分遮蔽身份证号原因`,
    date: '2025-01-07',
    parliament: '14',
    type: 'Written Answers to Questions',
    speakers: ['Josephine Teo', 'Tan Wu Meng'],
    topics: ['AI Safety & Ethics', 'AI in Education', 'AI & National Security', 'AI Infrastructure & Research'],
    zhSummary: `议员质询政府为何停止部分遮蔽身份证号码，及AI时代是否加剧个人数据被逆向工程风险。政府回应将于次日通过部长声明详细说明，核心争议在于数据隐私保护与技术发展带来的安全挑战之间的平衡。`,
    keyPoints: ['停止部分遮蔽身份证号', 'AI加速数据逆向风险', '政府将发布部长声明'],
    governmentStance: '将通过部长声明详述理由',
    oppositionStance: '关注数据隐私与安全风险',
    controversyLevel: 3,
    policySignal: '加强个人数据使用规范',
    notableQuote:
      'This Parliamentary Question will be addressed through a Ministerial Statement by the Minister for Digital Development and Information.',
    summary: `39
Dr Tan Wu Meng
asked the Minister for Digital Development and Information (a) what is the rationale for the Government's intention to stop the practice of partially masking NRIC numbers and why at the present time; and (b) whether the era of artificial intelligence and machine learning has accelerated the likelihood of organisations reverse engineering significant portions of the NRIC database through scraping and collating existing personal data collections, including lucky draw registrants and customer lists from the pre-PDPA era.
Mrs Josephine Teo
: This Parliamentary Question will be ad`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-18417',
  },
  {
    id: 'oral-answer-3729',
    title: `Guidelines for Employers' Use of Automated Decision-making Tools for Hiring or Promotions to Prevent Biases`,
    zhTitle: `AI招聘晋升工具偏见防范`,
    date: '2024-11-13',
    parliament: '14',
    type: 'Oral Answers to Questions',
    speakers: ['Minister for Manpower', 'Patrick Tay Teck Guan', 'Pritam Singh', 'Tan See Leng', 'Tan Wu Meng'],
    topics: ['AI Governance & Regulation', 'AI Safety & Ethics', 'AI & Employment', 'AI & National Security'],
    zhSummary: `议员质询政府是否考虑制定指导方针，规范雇主使用自动化决策工具以防止招聘和晋升中的偏见，并建议进行偏见审计及信息披露。人力部长回应现有《公平就业三方指引》已涵盖公平就业原则，且无相关投诉，强调AI技术快速发展，政府将持续监测并与相关机构合作评估现有规范的适用性。质询方补充关注数据隐私和员工同意问题，政府表示将考虑改进但不宜过度限制。`,
    keyPoints: ['现有公平就业指引适用', '无AI歧视投诉记录', '关注数据隐私与同意'],
    governmentStance: '依托现有指引，持续监测AI发展',
    oppositionStance: '建议加强偏见审计与数据同意',
    controversyLevel: 2,
    policySignal: '持续完善AI就业监管框架',
    notableQuote:
      'AI technologies are evolving at a fast pace. In deploying AI-powered HR tools, organisations should refer to the guidelines introduced by the Government.',
    summary: `3
Mr Patrick Tay Teck Guan
asked the Minister for Manpower whether the Ministry will consider introducing guidelines or regulations on employer's use of Automated Employment Decision Tools (AEDT), which are artificial intelligence technologies that substantially assist or replace discretionary decision-making in hiring or promotions, in order to prevent biases and including measures such as requiring companies to conduct a bias audit or to make disclosure where such tools are used to rank candidates or assess employees for promotion.
The Minister for Manpower (Dr Tan See Leng)
: Mr Speaker, re`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=oral-answer-3729',
  },
  {
    id: 'oral-answer-3738',
    title: `Progress of Developing IT and AI Professionals through Career Conversion Programmes`,
    zhTitle: `IT与AI人才转型进展`,
    date: '2024-11-13',
    parliament: '14',
    type: 'Oral Answers to Questions',
    speakers: ['Ang Wei Neng', 'Senior Minister of State for Digital Development and Information', 'Tan Kiat How'],
    topics: ['AI Economy & Industry', 'AI & Employment', 'AI in Education', 'AI & National Security'],
    zhSummary: `议员质询过去三年通过职业转换计划培养IT及AI专业人才的进展及未来三至五年规划。政府回应介绍了技能未来及职业转换计划的培训成效，强调扩大中年职工培训及企业合作。质询方关注AI专业人才数量与目标差距，及私营部门参与情况，体现人才培养规模与目标之间的核心争议。`,
    keyPoints: ['多路径技能培训', '中年职工转型支持', '私企参与培训'],
    governmentStance: '扩大培训规模，强化企业合作',
    oppositionStance: '质疑AI人才培养数量不足',
    controversyLevel: 3,
    policySignal: '加大中年人才AI转型力度',
    notableQuote:
      'The Ministry has stated that they want to convert 5,000 mid-career professionals to AI professionals over the next three to five years.',
    summary: `13
Mr Ang Wei Neng
asked the Minister for Digital Development and Information (a) in the past three years, what has been the progress of developing more Information and Technology (IT) and Artificial Intelligence (AI) professionals under the Career Conversion Programme; and (b) what is the Ministry’s plan in further developing this in the next three to five years.
The Senior Minister of State for Digital Development and Information (Mr Tan Kiat How) (for the Minister for Digital Development and Information)
: Sir, there are multiple pathways for Singaporeans to acquire relevant skills for tech`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=oral-answer-3738',
  },
  {
    id: 'written-answer-18326',
    title: `Current and Projected AI-specific Computing Power Available and Plans for National Cloud`,
    zhTitle: `新加坡AI算力与国家云规划`,
    date: '2024-11-13',
    parliament: '14',
    type: 'Written Answers to Questions',
    speakers: ['He Ting Ru', 'Josephine Teo'],
    topics: ['AI Governance & Regulation', 'AI Economy & Industry', 'AI in Education', 'AI Infrastructure & Research'],
    zhSummary: `议员质询新加坡现有AI专用算力规模、国家云建设计划及相关法律框架。政府回应新加坡数据中心容量领先区域，AI算力动态调配，依托国家超级计算中心和商业云满足需求，暂不强制私营数据中心贡献算力。核心争议在于是否应立法强制私营部门参与国家云建设。`,
    keyPoints: ['数据中心容量领先', 'AI算力动态调配', '无强制私营贡献'],
    governmentStance: '依托多元资源满足AI算力需求',
    oppositionStance: '关注国家云算力保障及法律框架',
    controversyLevel: 3,
    policySignal: '推动高性能计算支持AI发展',
    notableQuote:
      'Our compute needs for AI research are being met through a combination of on-premise and commercial cloud capacities.',
    summary: `22
Ms He Ting Ru
asked the Minister for Digital Development and Information (a) what is the estimated total of AI-specific computing power currently available in Singapore's data centres; (b) whether there are plans to establish a national cloud for AI research and education; (c) if so, what percentage of this computing power does it aim to secure; (d) what legal frameworks are being considered to mandate contributions from private AI data centres to such a national cloud; and (e) how do these potential frameworks compare to those in other leading AI nations.
Mrs Josephine Teo
: Singapore is a`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-18326',
  },
  {
    id: 'written-answer-18175',
    title: `Social Media and Artificial Intelligence's Role in Accelerating Radicalisation of Youths and Plans to Address Impact`,
    zhTitle: `社交媒体与AI加速青年激进化`,
    date: '2024-11-11',
    parliament: '14',
    type: 'Written Answers to Questions',
    speakers: ['Desmond Choo', 'K Shanmugam'],
    topics: ['AI & National Security', 'AI Strategy'],
    zhSummary: `质询聚焦社交媒体如何加速青年激进化、AI未来五年在激进化中的作用及应对计划。政府回应指出网络平台和算法助长极端内容传播，AI将加速激进化并助力恐怖宣传。政府通过立法和跨部门合作，采取阻断极端内容及社区外展等综合措施应对。核心争议在于技术带来的激进化速度提升及内容监管难度。`,
    keyPoints: ['社交媒体助长极端内容传播', 'AI加速激进化与恐怖宣传', '政府多管齐下防范激进化'],
    governmentStance: '加强立法与跨部门合作防范激进化',
    oppositionStance: '质询政府应对措施及未来规划',
    controversyLevel: 3,
    policySignal: '强化网络内容监管与反激进化',
    notableQuote:
      'AI can quickly auto-translate existing propaganda into multiple languages and create personalised messages at scale.',
    summary: `8
Mr Desmond Choo
asked the Minister for Home Affairs (a) how has social media accelerated the radicalisation of youths; (b) how will artificial intelligence (AI) play a role in the radicalisation of youths in the next five years; and (c) what are the plans to address the adverse impact of social media and AI on youth radicalisation.
Mr K Shanmugam
: Youth radicalisation is a pressing concern. Since 2015, following the rise of the Islamic State in Iraq and Syria (ISIS), the Internal Security Department (ISD) has dealt with 14 youths, aged 20 or below, under the Internal Security Act. Six had i`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-18175',
  },
  {
    id: 'written-answer-18184',
    title: `Enrolment and Graduation Rates of Female vis-a-vis Male Students in Artificial Intelligence and Machine Learning Courses`,
    zhTitle: `AI课程男女生入学毕业率`,
    date: '2024-11-11',
    parliament: '14',
    type: 'Written Answers to Questions',
    speakers: ['Chan Chun Sing', 'He Ting Ru'],
    topics: ['AI in Education', 'AI & National Security', 'AI Infrastructure & Research', 'AI Strategy'],
    zhSummary: `质询了过去五年新加坡高校AI与机器学习课程中女性学生的入学及毕业率，并与男性学生进行比较，同时询问提升女性参与度的具体措施。政府回应女性占约四分之一入学比例，毕业率超过90%，并介绍了多项促进女性参与AI/STEM的项目和合作计划。核心争议点在于女性参与度偏低及如何有效提升。`,
    keyPoints: ['女性占AI课程四分之一', '女性毕业率超90%', '多项目促进女性参与'],
    governmentStance: '支持提升女性AI教育参与',
    oppositionStance: '关注女性参与比例偏低',
    controversyLevel: 2,
    policySignal: '推动女性STEM教育',
    notableQuote:
      'female students comprised about a quarter of enrolment in artificial intelligence (AI) and machine learning programmes',
    summary: `19
Ms He Ting Ru
asked the Minister for Education over the past five years (a) what are the enrolment and graduation rates of female students in artificial intelligence (AI) and machine learning courses across Singapore's universities and polytechnics; (b) how do these figures compare to that of the male counterparts; and (c) what targeted measures are being implemented to increase female participation and retention in AI-related academic programmes.
Mr Chan Chun Sing
: Over the past five years, female students comprised about a quarter of enrolment in artificial intelligence (AI) and machine`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-18184',
  },
  {
    id: 'oral-answer-3677',
    title: `Gender Gaps in AI-adoption and Initiatives to Encourage Better AI Technologies Adoption in Educational and Workplace Settings`,
    zhTitle: `新加坡AI性别差距与推广举措`,
    date: '2024-10-16',
    parliament: '14',
    type: 'Oral Answers to Questions',
    speakers: ['He Ting Ru', 'Minister of State for Digital Development and Information', 'Rahayu Mahzam'],
    topics: ['AI Economy & Industry', 'AI & Employment', 'AI in Education', 'AI & National Security'],
    zhSummary: `质询聚焦新加坡人工智能（尤其是生成式AI）采纳中的性别差距及相关群体的接受度。政府回应指出新加坡女性在科技领域比例优于全球平均，生成式AI用户中女性占比亦较高。政府介绍多项针对不同群体的AI教育和培训计划，强调包容性和广泛普及。核心争议在于如何进一步针对特定群体设计有效推广策略。`,
    keyPoints: ['女性科技从业比例较高', '生成式AI女性用户占优', '多样化AI教育培训举措'],
    governmentStance: '推动包容性AI普及与培训',
    oppositionStance: '关注特定群体采纳难题',
    controversyLevel: 2,
    policySignal: '强化AI教育与技能培训',
    notableQuote: 'Women in Singapore are doing well compared to the global average.',
    summary: `13
Ms He Ting Ru
asked the Minister for Digital Development and Information (a) whether any research has been done on whether there is a gender gap in the adoption rates of artificial intelligence (AI) tools in Singapore, particularly in generative AI; (b) whether any groups have been identified as being more reluctant in adopting such AI technologies; and (c) whether there will be targeted initiatives to encourage these groups to better adopt AI technologies in educational and workplace settings.
The Minister of State for Digital Development and Information (Ms Rahayu Mahzam) (for the Ministe`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=oral-answer-3677',
  },
  {
    id: 'written-answer-17376',
    title: `Accuracy of Deepfake Detection Technologies and Differentiating Between Harmful Deepfakes and Legitimate Political Satire or Memes`,
    zhTitle: `深伪检测与政治讽刺界定`,
    date: '2024-08-07',
    parliament: '14',
    type: 'Written Answers to Questions',
    speakers: ['He Ting Ru', 'Josephine Teo'],
    topics: ['AI Safety & Ethics', 'AI Economy & Industry', 'AI & National Security', 'AI Infrastructure & Research'],
    zhSummary: `议员质询政府当前深伪检测技术的准确率、如何区分有害深伪与合法政治讽刺及误判处理。政府回应技术不断更新且不公开准确率，强调依据《反网络虚假信息法》处理有害内容，讽刺不构成违法。政府关注国际经验，研究是否需进一步保障选举安全。核心争议在于技术透明度与言论自由的平衡。`,
    keyPoints: ['深伪检测技术持续更新', '讽刺不自动违法', '误判可司法申诉'],
    governmentStance: '技术保密，依法打击虚假信息',
    oppositionStance: '关注技术准确率与误判风险',
    controversyLevel: 3,
    policySignal: '加强AI虚假信息监管',
    notableQuote:
      'We do not publish their accuracy levels as our tools are constantly being updated to keep up with technology.',
    summary: `29
Ms He Ting Ru
asked the Minister for Digital Development and Information (a) what is the current accuracy rate of the Government’s deepfake detection technologies for AI-generated content; (b) how will the Government differentiate between harmful deepfakes and legitimate political satire or memes using similar technologies; and (c) what happens if videos are wrongly identified as deepfakes.
Mrs Josephine Teo
: There are a variety of tools and techniques available to the Government to detect, identify and assess manipulated content, including artificial intelligence (AI)-generated content su`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-17376',
  },
  {
    id: 'written-answer-17447',
    title: `Updating Industry Transformation Maps to Consider AI Impact on Skilled Work Training`,
    zhTitle: `产业转型图纳入AI培训影响`,
    date: '2024-08-07',
    parliament: '14',
    type: 'Written Answers to Questions',
    speakers: ['Gan Kim Yong', 'Tan Wu Meng'],
    topics: ['AI Economy & Industry', 'AI & Employment', 'AI & National Security', 'AI Infrastructure & Research'],
    zhSummary: `议员质询是否更新产业转型图以纳入AI对技能培训的影响，及是否设立培训连续图保障深度技能人才培养。政府回应已刷新23个产业转型图，推出岗位转型图支持岗位重塑和再培训，推动多项AI相关培训计划，强调通过政府与企业合作提升国人AI技能，促进就业转型。核心争议在于如何平衡AI替代与深度技能人才培养。`,
    keyPoints: ['产业转型图动态更新', '岗位转型图支持再培训', '多方合作推动AI培训'],
    governmentStance: '积极推动AI技能培训与岗位转型',
    oppositionStance: '关注深度技能人才培训保障',
    controversyLevel: 2,
    policySignal: '强化AI技能培训与就业转型',
    notableQuote:
      'ITMs are dynamic plans that respond to changes in the operating environment, such as the emergence of potentially disruptive technologies.',
    summary: `3
Dr Tan Wu Meng
asked the Deputy Prime Minister and Minister for Trade and Industry (a) whether the existing Industry Transformation Maps can be updated to consider the impact of artificial intelligence (AI) on the apprenticeship and on-the-job training aspects of skilled work; and (b) whether this update can include Industry Training Continuity Maps to maintain a training pipeline for deeply skilled human workers who cannot be replaced by AI, even when AI can undertake work previously done by less deeply skilled apprentices and trainees.
Mr Gan Kim Yong
:  The 23 Industry Transformation Maps`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-17447',
  },
  {
    id: 'written-answer-17287',
    title: `Tracking of Scams Perpetuated through Deepfake Video and Images`,
    zhTitle: `深度伪造诈骗追踪情况`,
    date: '2024-08-06',
    parliament: '14',
    type: 'Written Answers to Questions',
    speakers: ['Christopher de Souza', 'K Shanmugam'],
    topics: ['Deepfakes & Disinformation'],
    zhSummary: `议员Christopher de Souza质询警方是否追踪通过深度伪造视频和图像实施的诈骗案件数量。内政部长K Shanmugam回应称警方未专门追踪此类案件，虽然收到一些举报，但数量不多。核心争议在于政府对深度伪造诈骗的重视程度及数据透明度。`,
    keyPoints: ['未专门追踪深伪诈骗', '已有少量举报案件', '案件数量不高'],
    governmentStance: '警方未追踪深伪诈骗案件',
    oppositionStance: '关注深伪诈骗数据透明',
    controversyLevel: 2,
    policySignal: '暂无专项追踪计划',
    notableQuote: 'the Police have not been tracking the number of such cases.',
    summary: `17
Mr Christopher de Souza
asked the Minister for Home Affairs whether the number of scams perpetuated through deepfake video and images is being tracked and, if so, what are the numbers of such reported scams to date.
Mr K Shanmugam
: As replied to two similar Parliamentary Questions in the April 2024 Sittings, the Police have not been tracking the number of such cases. While we have received some reports, the number is not high.`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-17287',
  },
  {
    id: 'written-answer-17278',
    title: `Strategies and Mitigation Efforts to Counter Decline in Singapore's Appeal to MNCs`,
    zhTitle: `新加坡吸引跨国企业策略`,
    date: '2024-08-06',
    parliament: '14',
    type: 'Written Answers to Questions',
    speakers: ['Gan Kim Yong', 'Yip Hon Weng'],
    topics: ['AI Safety & Ethics', 'AI Economy & Industry', 'AI Infrastructure & Research', 'AI Strategy'],
    zhSummary: `议员质询跨国公司是否因成本因素迁出樟宜商务园及新加坡商业吸引力下降的原因与对策。政府回应新加坡经济竞争力强，持续吸引大型投资，承认部分企业因市场及工作模式变化调整布局。政府将通过投资研发、人才培养及财政激励措施保持商业环境吸引力。核心争议在于如何平衡成本与创新，防止企业外迁。`,
    keyPoints: ['新加坡经济竞争力强', '部分企业调整运营布局', '财政与非财政双重支持'],
    governmentStance: '持续提升创新与投资环境',
    oppositionStance: '关注企业外迁趋势',
    controversyLevel: 2,
    policySignal: '引入可退还投资税收抵免',
    notableQuote:
      'We will introduce a new Refundable Investment Credit for firms anchoring high-value and substantive economic activities in Singapore.',
    summary: `8
Mr Yip Hon Weng
asked the Deputy Prime Minister and Minister for Trade and Industry given reports that foreign companies are leaving Changi Business Park (a) whether there is an observable trend of MNCs moving their back-end operations to more cost-effective countries; (b) what are the factors leading to a perceived decline in Singapore’s business appeal and what are the strategies being implemented to counteract this trend; and (c) beyond financial grants, what other proactive measures are being adopted to ensure that businesses continue to view Singapore as a conducive environment for grow`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-17278',
  },
  {
    id: 'oral-answer-3564',
    title: `Trend in Number of Artificial Intelligence Voice-cloning Scams`,
    zhTitle: `AI语音克隆诈骗趋势`,
    date: '2024-04-03',
    parliament: '14',
    type: 'Oral Answers to Questions',
    speakers: ['Assoc Prof Dr Muhammad Faishal Ibrahim', 'Gerald Giam Yean Song', 'Minister of State for Home Affairs'],
    topics: ['AI Economy & Industry', 'AI in Education', 'AI & National Security', 'AI Infrastructure & Research'],
    zhSummary: `议员质询新加坡AI语音克隆诈骗案件数量及政府应对措施。政府回应称相关案件数量不高，警方未专门追踪此类诈骗，但已采取包括终止涉诈通讯线路、限制后付费SIM卡数量等措施。强调全社会共同防范诈骗的重要性，呼吁公众增强防范意识。核心争议在于诈骗案件具体数据缺乏透明及技术威胁的现实性。`,
    keyPoints: ['诈骗案件数量不高', '加强通讯渠道监管', '公众需提高防范意识'],
    governmentStance: '案件数量不多，强化多方协作防范',
    oppositionStance: '要求明确诈骗案件具体数据',
    controversyLevel: 2,
    policySignal: '加强通讯监管与公众教育',
    notableQuote:
      'If each of us play our part, we can collectively have a better chance of reducing our losses to scammers.',
    summary: `13
Mr Gerald Giam Yean Song
asked the Minister for Home Affairs (a) whether there has been an increase in the number of artificial intelligence voice cloning scams in Singapore; (b) how many of such scams have occurred this year to date; and (c) how is the Government dealing with these types of scams, including in the areas of enforcement, public education and implementation of technological solutions to prevent their occurrence.
The Minister of State for Home Affairs (Assoc Prof Dr Muhammad Faishal Ibrahim) (for the Minister for Home Affairs)
: The Singapore Police Force (SPF), has not been t`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=oral-answer-3564',
  },
  {
    id: 'written-answer-16262',
    title: `Provision for Deletion of Personal Data Upon Request under Personal Data Protection Act 2012 and Recourse Available to Individuals`,
    zhTitle: `个人数据删除权及救济机制`,
    date: '2024-04-03',
    parliament: '14',
    type: 'Written Answers to Questions',
    speakers: ['Chua Kheng Wee Louis', 'Josephine Teo'],
    topics: ['AI Economy & Industry', 'AI Strategy'],
    zhSummary: `议员质询个人数据保护法中是否包含个人数据删除权及相关救济机制。政府回应指出，法律规定组织在数据不再需要时必须停止保留或妥善处理，无论是否有同意，且个人数据保护委员会有权指令组织销毁数据或停止使用。核心争议在于是否存在明确的“删除权”条款及其执行保障。`,
    keyPoints: ['无明确删除权条款', '数据保留有严格限制', '监管机构有执法权'],
    governmentStance: '支持现行法律规定及监管机制',
    oppositionStance: '质疑缺乏明确删除权保障',
    controversyLevel: 3,
    policySignal: '强化数据保留与销毁监管',
    notableQuote:
      'The Personal Data Protection Commission (PDPC) has the power to direct the organisation to destroy, or stop collecting, using or disclosing, the personal data concerned.',
    summary: `27
Mr Chua Kheng Wee Louis
asked the Minister for Communications and Information given the absence of a 'right to erasure' clause, whether the Personal Data Protection Act 2012 provides for (i) individuals who have not given consent for the collection, use, or disclosure of their personal data and requiring an organisation to delete their personal data upon request and (ii) the recourse for such individuals if the organisation does not do so.
Mrs Josephine Teo
: The Personal Data Protection Act (PDPA) requires an organisation to cease retention of personal data or dispose of it in a proper man`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-16262',
  },
  {
    id: 'oral-answer-3551',
    title: `Unveiling of Shared Responsibility Framework for Phishing Scams`,
    zhTitle: `反钓鱼诈骗共责框架发布`,
    date: '2024-04-02',
    parliament: '14',
    type: 'Oral Answers to Questions',
    speakers: [
      'Alvin Tan',
      'Community and Youth and Trade and Industry',
      'Desmond Choo',
      'Minister of State for Culture',
      'Tan Wu Meng',
    ],
    topics: ['AI Governance & Regulation', 'AI Economy & Industry', 'AI in Public Sector', 'AI Strategy'],
    zhSummary: `议员质询钓鱼诈骗共责框架发布时间、Money Lock功能使用率及是否强制银行参与。政府回应将于2024年内公布框架，Money Lock账户超7.8万个，主要用户为50岁以上，MAS暂不强制银行参与。质询关注国际经验及老年人数字素养，政府强调提升宣传力度。`,
    keyPoints: ['共责框架年底发布', 'Money Lock用户分布', '暂不强制银行参与'],
    governmentStance: '积极推广Money Lock，年底推共责框架',
    oppositionStance: '关注老年人数字素养及宣传不足',
    controversyLevel: 2,
    policySignal: '强化银行防诈骗措施',
    notableQuote:
      'The Government will take into account suggestions and feedback received from the public consultation on the Shared Responsibility Framework.',
    summary: `16
Mr Desmond Choo
asked the Prime Minister (a) when will the Shared Responsibility Framework for phishing scams be released; (b) what is the take-up rate of the Money Lock feature offered by our local banks, broken down by ages of bank customers; and (c) whether the MAS will make it mandatory for all banking institutions to participate in this initiative in the near future.
The Minister of State for Culture, Community and Youth and Trade and Industry (Mr Alvin Tan) (for the Prime Minister)
: Sir, the Government will take into account suggestions and feedback received from the public consultat`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=oral-answer-3551',
  },
  {
    id: 'budget-2378',
    title: `Committee of Supply – Head O (Ministry of Health)`,
    zhTitle: `医疗居家护理与补贴政策质询`,
    date: '2024-03-05',
    parliament: '14',
    type: 'Budget',
    speakers: [
      'Ang Wei Neng',
      'Assoc Prof Jamus Jerome Lim',
      'Carrie Tan',
      'Gerald Giam Yean Song',
      'Hazel Poa',
      'Keith Chua',
      'Kwek Hian Chuan Henry',
      'Lim Wee Kiak',
      'Louis Ng Kok Kwang',
      'Mariam Jaafar',
      'Ng Ling Ling',
      'Ong Hua Han',
      'Pritam Singh',
      'Syed Harun Alhabsyi',
      'Sylvia Lim',
      'Tan Wu Meng',
      'Wan Rizal',
      'Yip Hon Weng',
    ],
    topics: ['AI Governance & Regulation', 'AI in Healthcare', 'AI in Public Sector'],
    zhSummary: `议员质询卫生部关于医院居家护理服务的进展及规模化情况，探讨MediShield Life和MediSave是否可支持居家医疗理赔。同时质疑现行活动能力评估（ADL）标准是否合理，呼吁更灵活考量患者实际需求。核心争议在于居家护理政策的覆盖范围及补贴机制是否足够支持患者及其家庭。`,
    keyPoints: ['推动居家医疗服务', '理赔政策需更灵活', 'ADL评估标准质疑'],
    governmentStance: null,
    oppositionStance: '呼吁扩大居家护理补贴范围',
    controversyLevel: 3,
    policySignal: '推动居家医疗与补贴创新',
    notableQuote:
      'Can the Ministry of Health (MOH) provide an update on the progress of these efforts? Are they being scaled up?',
    summary: `The Chairman
: Head O, Ministry of Health. Dr Tan Wu Meng.
6.16 pm
Health and Care – Thinking Outside the Box
Dr Tan Wu Meng (Jurong)
: Chairman, I beg to move, "That the total sum to be allocated for Head O of the Estimates be reduced by $100".
I declare that I am a doctor working at a public hospital. I will speak on our healthcare system and thinking outside the box.
Today, we have already started thinking outside the box in healthcare policy. Subsidising health screening in Healthier SG so that illness can be detected earlier, treated upstream, reducing the burden of human suffering down t`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-2378',
  },
  {
    id: 'oral-answer-3518',
    title: `School Educators' Awareness of Academic and Practice Pathways for Emerging Careers`,
    zhTitle: `教师对新兴职业路径认知`,
    date: '2024-03-05',
    parliament: '14',
    type: 'Oral Answers to Questions',
    speakers: ['Gan Siow Huang', 'Minister of State for Education', 'See Jinli Jean'],
    topics: ['AI Economy & Industry', 'AI & Employment', 'AI in Education', 'AI Infrastructure & Research'],
    zhSummary: `议员质询教育部是否要求中学教师熟悉未来经济集群下的新兴职业路径及技能需求。教育部回应教师可通过教育及职业指导顾问及行业交流活动了解相关信息，且总部定期发送季度通讯。学生被鼓励主动利用MySkillsFuture平台及相关组织资源。核心争议在于教师对新兴职业信息的更新频率及深度是否足够。`,
    keyPoints: ['教师通过ECG了解职业', '定期行业交流活动', '季度通讯更新信息'],
    governmentStance: '通过多渠道提升教师职业认知',
    oppositionStance: '建议加强教师对新兴职业培训',
    controversyLevel: 2,
    policySignal: '强化教师职业指导能力',
    notableQuote:
      'Our secondary school teachers can learn about trends in career pathways and skills in demand from Education and Career Guidance (ECG) counsellors in the school.',
    summary: `8
Ms See Jinli Jean
asked the Minister for Education (a) whether the Ministry requires all secondary school educators to be familiarised with the academic and practice pathways to benchmark and emerging careers under the future economic clusters; and (b) if not, whether the Ministry will consider doing so.
The Minister of State for Education (Ms Gan Siow Huang) (for the Minister for Education)
: Mr Speaker, our secondary school teachers can learn about trends in career pathways and skills in demand from Education and Career Guidance (ECG) counsellors in the school. The Ministry of Education (M`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=oral-answer-3518',
  },
  {
    id: 'written-answer-16024',
    title: `Risks and Benefits from Widespread Adoption of Facial Recognition Technology and Oversight Mechanisms to Ensure Responsible and Ethical Use`,
    zhTitle: `面部识别技术风险与监管`,
    date: '2024-03-04',
    parliament: '14',
    type: 'Written Answers to Questions',
    speakers: ['Josephine Teo', 'Yip Hon Weng'],
    topics: [
      'AI Governance & Regulation',
      'AI Safety & Ethics',
      'AI & National Security',
      'AI Infrastructure & Research',
    ],
    zhSummary: `议员质询面部识别技术在新加坡的风险与收益、监管框架及公众参与情况。政府回应强调面部图像作为生物识别数据受个人数据保护法约束，指出安全用途为主，已有相关指南和治理框架确保技术负责任和伦理使用。核心争议在于如何平衡技术应用与隐私保护。`,
    keyPoints: ['面部图像属个人数据', '安全用途为主导', '已有监管与指导框架'],
    governmentStance: '强调法规与伦理指导保障',
    oppositionStance: '质询风险与公众参与',
    controversyLevel: 2,
    policySignal: '加强生物识别数据监管',
    notableQuote:
      'Facial images as a form of biometric data, can be considered personal data when associated with other information about an individual.',
    summary: `13
Mr Yip Hon Weng
asked the Minister for Communications and Information (a) what are the risks and benefits associated with widespread adoption of facial recognition technology (FRT) in Singapore; (b) what are the frameworks and oversight mechanisms currently in place to ensure the responsible and ethical use of FRT in Singapore; and (c) what steps are being taken to engage with the public and relevant stakeholders about the responsible development and application of AI technologies to FRT.
Mrs Josephine Teo
: Facial images as a form of biometric data, can be considered personal data when ass`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-16024',
  },
  {
    id: 'budget-2361',
    title: `Committee of Supply – Head V (Ministry of Trade and Industry)`,
    zhTitle: `新加坡经济增长与AI挑战`,
    date: '2024-03-01',
    parliament: '14',
    type: 'Budget',
    speakers: [
      'Alvin Tan',
      'Chua Kheng Wee Louis',
      'Derrick Goh',
      'Desmond Choo',
      'Edward Chia Bing Hui',
      'Foo Mee Har',
      'Gan Kim Yong',
      'He Ting Ru',
      'Jessica Tan Soon Neo',
      'Keith Chua',
      'Liang Eng Hwa',
      'Low Yen Ling',
      'Mariam Jaafar',
      'Mark Lee',
      'Melvin Yong Yik Chye',
      'Neil Parekh Nimil Rajnikant',
      'Saktiandi Supaat',
      'See Jinli Jean',
      'Senior Minister of State for Communications and Information and National Development',
      'Sharael Taha',
      'Shawn Huang Wei Zhong',
      'Tan See Leng',
      'Usha Chandradas',
      'Xie Yao Quan',
    ],
    topics: ['AI Economy & Industry', 'AI & Employment', 'AI & National Security', 'AI Infrastructure & Research'],
    zhSummary: `议员质询新加坡如何在土地、劳动力和碳排放限制下推动经济增长，特别关注生成式人工智能等新兴技术带来的机遇与挑战。政府回应强调保持投资吸引力，强化制造业和服务业，提升基础设施和人才培养，确保政策稳定以应对全球竞争和技术变革。核心争议点在于如何平衡创新发展与经济基础的稳固。`,
    keyPoints: ['经济增长面临多重限制', '新兴AI技术带来挑战机遇', '需持续吸引高价值投资'],
    governmentStance: '推动创新与稳固经济基础',
    oppositionStance: null,
    controversyLevel: 2,
    policySignal: '强化AI与高端投资支持',
    notableQuote:
      'The rapid rise of new disruptive technologies such as generative artificial intelligence (GenAI) presents both challenges and opportunities to Singapore.',
    summary: `The Chairman
: Head V, Ministry of Trade and Industry. Mr Liang Eng Hwa.
Growing Our Economy
Mr Liang Eng Hwa (Bukit Panjang)
: Mr Chairman, I beg to move, "That the total sum to be allocated for Head V of the Estimates be reduced by $100."
Sir, having a growing and vibrant economy is very much a part of our efforts to build a strong social compact. We need a growing economy to create good, fulfilling jobs for Singaporeans and to generate the resources to tackle our social and longer-term challenges. If our economy stagnates, it will dampen aspirations and hopes for a better future and may lea`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-2361',
  },
  {
    id: 'budget-2362',
    title: `Committee of Supply – Head Q (Ministry of Communications and Information)`,
    zhTitle: `新加坡AI战略与数字基础设施投资`,
    date: '2024-03-01',
    parliament: '14',
    type: 'Budget',
    speakers: [
      'Christopher de Souza',
      'Eric Chua',
      'Hany Soh',
      'Janil Puthucheary',
      'Mark Lee',
      'Minister for Communications and Information',
      'Pritam Singh',
      'Sharael Taha',
      'Tan Kiat How',
      'Tin Pei Ling',
      'Xie Yao Quan',
    ],
    topics: ['AI Safety & Ethics', 'AI Economy & Industry', 'AI & National Security', 'AI Infrastructure & Research'],
    zhSummary: `议员质询新加坡在AI时代如何加强数字基础设施建设及人才培养，强调AI既带来机遇也有风险，需保持人类控制。政府回应将继续加大投资，推动国家AI战略2.0，提升网络速度和计算能力，保障数字信任。核心争议在于如何平衡技术发展与安全伦理，以及投资力度是否足够。`,
    keyPoints: ['AI是未来关键技术', '需加强数字基础设施', '保持技术人类控制'],
    governmentStance: '积极推进AI战略与基础设施建设',
    oppositionStance: null,
    controversyLevel: 3,
    policySignal: '加大AI基础设施与人才投资',
    notableQuote:
      'Singapore believes that AI can be a potent force for good – to uplift human potential and to unlock economic opportunities.',
    summary: `4.15 pm
The Chairman
: Head Q, Ministry of Communications and Information. Ms Tin Pei Ling.
Investing in Smart Future
Ms Tin Pei Ling (MacPherson)
: Mdm Chairman, I beg to move, "That the total sum to be allocated for Head Q of the Estimates be reduced by $100".
Throughout history, the mastery of technology has been essential for a nation's progress and its ability to compete strategically. This importance has only heightened in the modern era. Hence, by investing in critical infrastructure, innovation and talent development, countries can position themselves as leaders in emerging technologie`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-2362',
  },
  {
    id: 'budget-2363',
    title: `Committee of Supply – Head K (Ministry of Education)`,
    zhTitle: `教育多元发展与AI应对策略`,
    date: '2024-03-01',
    parliament: '14',
    type: 'Budget',
    speakers: [
      'Baey Yam Keng',
      'Darryl David',
      'Denise Phua Lay Peng',
      'Gerald Giam Yean Song',
      'Hazel Poa',
      'Minister for Education',
      'Muhamad Faisal Bin Abdul Manap',
      'Ong Hua Han',
      'Patrick Tay Teck Guan',
      'Pritam Singh',
      'Rahayu Mahzam',
      'Shawn Huang Wei Zhong',
    ],
    topics: ['AI in Education', 'AI in Healthcare', 'AI & National Security', 'AI Infrastructure & Research'],
    zhSummary: `议员强调教育需适应快速技术变革，特别是生成式人工智能带来的挑战，呼吁拓展技能提升课程，支持学生多元发展。政府认可教育系统的韧性与国际表现，致力推动学生具备应变能力和创新精神。核心争议在于如何平衡传统教学与新兴技能培养，以及资金使用范围的扩展。`,
    keyPoints: ['教育需适应技术变革', '推动多元课程发展', '提升学生综合能力'],
    governmentStance: '支持教育创新与技能多元发展',
    oppositionStance: '呼吁扩大技能补贴范围',
    controversyLevel: 3,
    policySignal: '推动教育多元与技能提升',
    notableQuote:
      'We do not rely on a single vitamin for our health needs. Why then should we expect learners to follow a singular academic path?',
    summary: `The Chairman
: Head K, Ministry of Education. Mr Patrick Tay.
Education for Life
Mr Patrick Tay Teck Guan (Pioneer)
: Sir, I beg to move, "That the total sum to be allocated for Head K of the Estimates be reduced by $100".
We are living in a disruptive world where the pace of change is rapid and relentless. Faced with unprecedented technological advancements such as generative artificial intelligence (GenAI) and an increasingly complex global order, education must evolve beyond static textbooks and a conventionally didactic model, where there is a one-way transmission of knowledge from teacher`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-2363',
  },
  {
    id: 'oral-answer-3495',
    title: `Potential Scale and Scope of Job Displacement Due To AI Adoption`,
    zhTitle: `AI引发就业置换风险质询`,
    date: '2024-02-29',
    parliament: '14',
    type: 'Oral Answers to Questions',
    speakers: ['Senior Minister of State for Communications and Information', 'Yip Hon Weng'],
    topics: ['AI Economy & Industry', 'AI & Employment', 'AI & National Security', 'AI in Public Sector'],
    zhSummary: `议员质询新加坡作为亚太区生成式AI最快采用国，是否低估了AI驱动的就业流失风险，是否会评估AI带来的就业置换规模，以及如何推动企业提前投资员工技能提升。政府回应该议题将在通讯及资讯部预算辩论中详细讨论，未直接回应具体问题，体现出议题尚处于政策研判阶段，存在信息透明度和应对策略的关注点。`,
    keyPoints: ['担忧AI就业流失被低估', '计划评估就业置换规模', '推动企业投资员工再培训'],
    governmentStance: '议题将在预算辩论中详细讨论',
    oppositionStance: '关注AI就业风险及培训激励',
    controversyLevel: 2,
    policySignal: '加强AI就业影响评估与培训',
    notableQuote:
      'I seek his understanding that this topic will be addressed at the Committee of Supply debate for the Ministry of Communications and Information.',
    summary: `3
Mr Yip Hon Weng
asked the Minister for Communications and Information (a) whether there are concerns that the extent of artificial intelligence (AI)-driven job losses in Singapore may be underestimated with Singapore being the fastest adopter of generative AI in the Asia Pacific; (b) whether the Ministry will be conducting assessments to evaluate the potential scale and scope of job displacement due to AI adoption; and (c) how is the Ministry engaging with stakeholders to encourage and incentivise proactive investment in upskilling programmes for their employees in anticipation of AI adoptio`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=oral-answer-3495',
  },
  {
    id: 'budget-2346',
    title: `Committee of Supply – Head J (Ministry of Defence)`,
    zhTitle: `国防预算与安全趋势质询`,
    date: '2024-02-28',
    parliament: '14',
    type: 'Budget',
    speakers: [
      'Alex Yam',
      'Chong Kee Hiong',
      'Desmond Choo',
      'Don Wee',
      'Kwek Hian Chuan Henry',
      'Minister for Defence',
      'Patrick Tay Teck Guan',
      'Poh Li San',
      'Shawn Huang Wei Zhong',
      'Sylvia Lim',
      'Vikram Nair',
      'Zhulkarnain Abdul Rahim',
    ],
    topics: ['AI Governance & Regulation', 'AI & National Security', 'AI in Public Sector'],
    zhSummary: `议员质询国防部关于全球及区域安全趋势的监测情况，特别关注俄乌战争及中东冲突对新加坡安全的影响。政府回应强调国际秩序动荡、网络战与信息战的挑战，表明将持续关注并调整国防策略以应对复杂多变的安全环境。核心争议点在于如何平衡预算分配与应对新兴安全威胁。`,
    keyPoints: ['国际法与安全秩序', '非国家行为体威胁', '网络与信息战挑战'],
    governmentStance: '强化国防应对复杂安全环境',
    oppositionStance: '关注预算合理性与安全威胁',
    controversyLevel: 3,
    policySignal: '加强网络战与信息战防御',
    notableQuote: 'The world is likely be more volatile and unpredictable in the coming year.',
    summary: `The Chairman
: Head J. Mr Vikram Nair.
Security Trends
Mr Vikram Nair (Sembawang)
:
Chairman, I beg to move,
"That the total sum to be allocated for Head J of the Estimates be reduced by $100".
Sir, we live in a dangerous world. Following the end of World War II, the great powers of the world came together to build a cooperative framework for international relations. This included the setting up of the United Nations and the Bretton Woods institutions – namely the World Bank and the International Monetary Fund.
The Charter of the United Nations enshrines the prohibition against the use of forc`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-2346',
  },
  {
    id: 'budget-2336',
    title: `Debate on Annual Budget Statement`,
    zhTitle: `2024财年预算中的未来挑战`,
    date: '2024-02-27',
    parliament: '14',
    type: 'Budget',
    speakers: [
      'Christopher de Souza',
      'Chua Kheng Wee Louis',
      'Don Wee',
      'Sharael Taha',
      'Syed Harun Alhabsyi',
      'Sylvia Lim',
    ],
    topics: ['AI Governance & Regulation', 'AI Safety & Ethics', 'AI Infrastructure & Research', 'AI in Public Sector'],
    zhSummary: `议员Sharael Taha质询预算中对未来可持续发展的关注，指出居民对短期补贴的期待与对长期发展担忧的矛盾。政府副总理黄循财回应国际环境复杂多变，强调新冷战后世界更具冲突与不确定性。核心争议在于如何平衡当前民生需求与未来经济安全，及新形势下的政策应对。`,
    keyPoints: ['居民期待短期补贴', '国际环境更趋复杂', '新冷战时代挑战大'],
    governmentStance: '保持谨慎乐观，应对不确定风险',
    oppositionStance: null,
    controversyLevel: 3,
    policySignal: '强调未来经济可持续与安全',
    notableQuote: 'The three decades of peace and stability in the post-Cold War era is now over.',
    summary: `[(proc text) Order read for Resumption of Debate on Question [16 February 2024] [2nd Allotted Day] (proc text)]
[(proc text) "That Parliament approves the financial policy of the Government for the financial year 1 April 2024 to 31 March 2025." – [Deputy Prime Minister and Minister for Finance]. (proc text)]
[(proc text) Question again proposed. (proc text)]
11.01 am
Mr Sharael Taha (Pasir Ris-Punggol)
: Mr Speaker, when I speak to many residents on what they are looking for in the year's Budget, many reply, "Will the Government give us more this year?" There seems to be a growing expectation,`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-2336',
  },
  {
    id: 'budget-2338',
    title: `Debate on Annual Budget Statement`,
    zhTitle: `2024年财政预算中的经济增长与AI挑战`,
    date: '2024-02-27',
    parliament: '14',
    type: 'Budget',
    speakers: [
      'Assoc Prof Jamus Jerome Lim',
      'Chong Kee Hiong',
      'Denise Phua Lay Peng',
      'Deputy Prime Minister and Coordinating Minister for Economic Policies',
      'Derrick Goh',
      'Edward Chia Bing Hui',
      'Gerald Giam Yean Song',
      'He Ting Ru',
      'Mariam Jaafar',
      'Melvin Yong Yik Chye',
      'Minister of State',
      'Miss Rachel Ong',
      'Mohd Fahmi Aliman',
      'Muhamad Faisal Bin Abdul Manap',
      'Neil Parekh Nimil Rajnikant',
      'Patrick Tay Teck Guan',
      "Prime Minister's Office",
      'See Jinli Jean',
      'Senior Minister of State for Defence',
      'Senior Parliamentary Secretary to the Minister for Social and Family Development',
      'Usha Chandradas',
      'Vikram Nair',
      'Xie Yao Quan',
      'Yeo Wan Ling',
      'Zhulkarnain Abdul Rahim',
    ],
    topics: ['AI Governance & Regulation', 'AI Economy & Industry', 'AI & Employment'],
    zhSummary: `本次辩论聚焦于新加坡2024年财政预算中经济增长的路径，特别是在全球经济放缓、高通胀及地缘政治不确定性加剧的背景下。政府强调通过结构性改革和支持企业与家庭应对挑战，推动长期可持续发展。辩论中提及技术创新、自动化和人工智能对就业及产业竞争力的影响，反映出对AI治理与产业发展的关注。核心争议点在于如何平衡经济增长与社会保障，以及应对全球保护主义带来的挑战。`,
    keyPoints: ['经济结构需结构性改革', 'AI与自动化重塑就业', '全球环境趋向保护主义'],
    governmentStance: '推动结构性政策支持经济转型',
    oppositionStance: null,
    controversyLevel: 3,
    policySignal: '加大对AI产业与劳工支持',
    notableQuote:
      'Technological innovations, including automation and AI, are reshaping jobs and competitiveness across industries and countries.',
    summary: `[(proc text) Debate resumed. (proc text)]
Mr Speaker
: Deputy Prime Minister Heng Swee Keat.
12.22 pm
The Deputy Prime Minister (Mr Heng Swee Keat)
: Mr Speaker, Sir, first, let me thank the Leader and all Members of this House for giving your assent for me to give a very long speech. I hope that your patience will pay off in that you will enjoy your lunch when you are much hungrier.
I rise in support of the Budget, which lays out a confident path forward for Singapore, as our domestic and global environments change. I would like to focus on one aspect of the Budget Statement, growing the econ`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-2338',
  },
  {
    id: 'budget-2328',
    title: `Debate on Annual Budget Statement`,
    zhTitle: `2024年预算案中的共享未来`,
    date: '2024-02-26',
    parliament: '14',
    type: 'Budget',
    speakers: [
      'Ang Wei Neng',
      'Assoc Prof Jamus Jerome Lim',
      'Chua Kheng Wee Louis',
      'Darryl David',
      'Denise Phua Lay Peng',
      'Dennis Tan Lip Fong',
      'Deputy Speaker',
      'Foo Mee Har',
      'Gan Thiam Poh',
      'Gerald Giam Yean Song',
      'Hazel Poa',
      'Jessica Tan Soon Neo',
      'Joan Pereira',
      'Keith Chua',
      'Kwek Hian Chuan Henry',
      'Leong Mun Wai',
      'Liang Eng Hwa',
      'Mark Lee',
      'Miss Cheryl Chan Wei Ling',
      'Murali Pillai',
      'Ng Ling Ling',
      'Ong Hua Han',
      'Pritam Singh',
      'Raj Joshua Thomas',
      'Saktiandi Supaat',
      'Shawn Huang Wei Zhong',
      'Tan Wu Meng',
      'Wan Rizal',
      'Yip Hon Weng',
    ],
    topics: ['AI Governance & Regulation', 'AI Economy & Industry', 'AI & Employment', 'AI in Public Sector'],
    zhSummary: `辩论围绕2024年预算案展开，质询方关注政府信息透明度、社会公平及退休保障等问题。政府回应部分采纳反对党建议，如临时失业援助计划。核心争议在于政府是否真正开放接受多元意见及如何缩小理想与现实差距。`,
    keyPoints: ['信息透明度不足', '理想与现实脱节', '退休保障需加强'],
    governmentStance: '支持预算，采纳部分反对党建议',
    oppositionStance: '呼吁更多开放与公平保障',
    controversyLevel: 3,
    policySignal: '强化社会保障与包容发展',
    notableQuote:
      "The real challenge to the People's Action Party (PAP), however, is for it to be open, and the extent to which it is prepared to accommodate the diverse views of Singaporeans.",
    summary: `[(proc text) Order read for Resumption of Debate on Question [16 February 2024] [1st Allotted Day], (proc text)]
[(proc text) "That Parliament approves the financial policy of the Government for the financial year 1 April 2024 to 31 March 2025." – [Deputy Prime Minister and Minister for Finance]. (proc text)]
[(proc text) Question again proposed. (proc text)]
Mr Speaker
: Mr Pritam Singh.
11.33 am
Mr Pritam Singh (Aljunied)
: Mr Speaker, it is not mere coincidence that the slogan of Forward Singapore is "Building Our Shared Future", while that of Budget 2024 is the substantially similar "Build`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-2328',
  },
  {
    id: 'oral-answer-3478',
    title: `Specific Targets for Singapore's Global Share of Aggregate Computing Power`,
    zhTitle: `新加坡计算能力全球份额目标`,
    date: '2024-02-26',
    parliament: '14',
    type: 'Oral Answers to Questions',
    speakers: [
      'Assoc Prof Jamus Jerome Lim',
      'Gerald Giam Yean Song',
      'Janil Puthucheary',
      'Senior Minister of State for Communications and Information',
    ],
    topics: ['AI Safety & Ethics', 'AI Economy & Industry', 'AI in Education', 'AI Infrastructure & Research'],
    zhSummary: `议员质询政府是否设定未来5至10年新加坡在全球计算能力的具体目标，政府回应未设具体目标，强调计算资源需求动态变化。议员进一步关切数据中心建设及其可持续性，政府表示支持建设符合环保标准的数据中心，并推动数字化带来就业和技能提升。核心争议点在于是否应设定明确目标及如何平衡发展与环保。`,
    keyPoints: ['未设具体计算能力目标', '支持建设环保数据中心', '推动数字化提升就业技能'],
    governmentStance: '未设具体目标，支持绿色数据中心',
    oppositionStance: '建议设定明确计算能力目标',
    controversyLevel: 3,
    policySignal: '推动绿色数据中心建设',
    notableQuote:
      'No such target has been set. The amount of computing resources needed in Singapore will depend on the workloads.',
    summary: `4
Mr Gerald Giam Yean Song
asked the Minister for Communications and Information (a) whether the Government has set specific targets for Singapore's global share of aggregate computing power over the next five to 10 years; (b) if so, what is this target share and by when; (c) which agency is responsible for this initiative; and (d) what interim milestones will the Government use to track progress.
The Senior Minister of State for Communications and Information (Dr Janil Puthucheary) (for the Minister for Communications)
: Sir, no such target has been set. The amount of computing resources need`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=oral-answer-3478',
  },
  {
    id: 'budget-2325',
    title: `Annual Budget Statement`,
    zhTitle: `2024财年预算展望与挑战`,
    date: '2024-02-16',
    parliament: '14',
    type: 'Budget',
    speakers: ['Deputy Prime Minister and Minister for Finance'],
    topics: ['AI Governance & Regulation', 'AI Safety & Ethics', 'AI Economy & Industry', 'AI in Public Sector'],
    zhSummary: `议员质询全球经济不确定性及地缘政治风险对新加坡经济的影响。政府回应指出2023年经济增长虽缓但避免衰退，2024年展望谨慎乐观，强调全球冲突加剧带来的挑战。核心争议在于如何平衡经济增长与地缘政治风险，以及政府财政政策的应对策略。`,
    keyPoints: ['经济增长谨慎乐观', '地缘政治风险加剧', '全球通胀压力缓解'],
    governmentStance: '积极应对经济与地缘风险',
    oppositionStance: null,
    controversyLevel: 2,
    policySignal: '加强经济韧性与风险管理',
    notableQuote:
      'The post-Cold War era that began in the early 1990s and fostered three decades of peace and stability is over.',
    summary: `Mr Speaker
: Order. The Clerk will now proceed to read the Notice of Motion.
3.30 pm
The Deputy Prime Minister and Minister for Finance (Mr Lawrence Wong)
: Mr Speaker, Sir, I beg to move, "That Parliament approves the financial policy of the Government for the Financial Year 1 April 2024 to 31 March 2025."
Mr Speaker, Sir, I beg to move, "That Parliament approves the financial policy of the Government for the Financial Year 1 April 2024 to 31 March 2025."
The past year has not been easy. The international environment was troubled. The global economy was subdued. Our economy grew by a modest 1`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-2325',
  },
  {
    id: 'written-answer-15541',
    title: `Regulations to Tackle Deepfake Software Being Used in Scam and Fraud Cases`,
    zhTitle: `打击深度伪造诈骗监管措施`,
    date: '2024-02-05',
    parliament: '14',
    type: 'Written Answers to Questions',
    speakers: ['Christopher de Souza', 'Josephine Teo'],
    topics: ['AI Governance & Regulation', 'AI Safety & Ethics', 'AI Economy & Industry', 'AI & National Security'],
    zhSummary: `议员质询政府针对深度伪造软件被用于诈骗的监管和防范措施。政府回应通过《网络刑事危害法》授权监管网络平台，推动技术研发和行业合作，强化公众教育，提升检测和应对能力。核心争议在于如何有效遏制深伪技术滥用，保障网络安全与公众利益。`,
    keyPoints: ['多部门协作防范深伪', '《网络刑事危害法》赋权', '公众教育与技术研发'],
    governmentStance: '积极监管与技术防范深伪诈骗',
    oppositionStance: '质询监管措施落实情况',
    controversyLevel: 2,
    policySignal: '强化深伪技术监管与公众防骗',
    notableQuote:
      'The Online Criminal Harms Act (OCHA) allows the Government to issue directions to online platforms to prevent potential scam related accounts or content.',
    summary: `40
Mr Christopher de Souza
asked the Minister for Communications and Information what safeguards and regulations are being put in place to tackle the issue of deepfake software being used in scam and fraud cases.
Mrs Josephine Teo
: Artificial intelligence can be exploited for malicious purposes, including scams and fraud. Agencies, such as the Ministry of Communications and Information, the Ministry of Home Affairs, the Singapore Police Force (SPF), the Infocomm Media Development Authority and the Cybersecurity Agency of Singapore (CSA), are working closely to ensure that Singaporeans can go`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-15541',
  },
  {
    id: 'written-answer-15542',
    title: `Measures to Enhance Public Technological Understanding to Combat Cybercrime and Deepfake Content`,
    zhTitle: `提升公众科技素养防范网络诈骗`,
    date: '2024-02-05',
    parliament: '14',
    type: 'Written Answers to Questions',
    speakers: ['Christopher de Souza', 'Josephine Teo'],
    topics: ['AI Safety & Ethics', 'AI Economy & Industry', 'AI & National Security', 'AI Infrastructure & Research'],
    zhSummary: `议员质询政府如何帮助公众理解人工智能及其能力，以应对网络诈骗和深度伪造内容威胁。政府回应指出多部门协作保障网络安全，强调《线上刑事危害法》赋权监管平台，推动深度伪造检测技术研发，并开展多项公众教育活动。核心争议点在于如何有效结合技术与教育手段，提升公众防范意识和能力。`,
    keyPoints: ['多部门协作保障安全', '《线上刑事危害法》监管', '公众教育与技术研发'],
    governmentStance: '加强技术监管与公众教育',
    oppositionStance: '质询政府提升公众理解',
    controversyLevel: 2,
    policySignal: '强化深度伪造检测与防范',
    notableQuote:
      'The Online Criminal Harms Act (OCHA) allows the Government to issue directions to online platforms to prevent potential scam related accounts or content.',
    summary: `41
Mr Christopher de Souza
asked the Minister for Communications and Information how is the Government helping the public to better understand artificial intelligence and its capabilities to build a population grounded in technological understanding so as to combat the threat of cybercrime and deepfake content.
Mrs Josephine Teo
: Artificial intelligence can be exploited for malicious purposes, including scams and fraud. Agencies, such as the Ministry of Communications and Information, the Ministry of Home Affairs, the Singapore Police Force (SPF), the Infocomm Media Development Authority, and`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-15542',
  },
  {
    id: 'motion-2294',
    title: `Building an Inclusive and Safe Digital Society`,
    zhTitle: `构建包容安全数字社会`,
    date: '2024-01-10',
    parliament: '14',
    type: 'Motions',
    speakers: [
      'Assoc Prof Jamus Jerome Lim',
      'Assoc Prof Razwana Begum Abdul Rahim',
      'Gerald Giam Yean Song',
      'Hany Soh',
      'Hazel Poa',
      'Mariam Jaafar',
      'Mark Lee',
      'Minister for Manpower and Second Minister for Trade and Industry',
      'Nadia Ahmad Samdin',
      'Ong Hua Han',
      'See Jinli Jean',
      'Sharael Taha',
      'Sylvia Lim',
      'Tan Wu Meng',
      'Tin Pei Ling',
      'Usha Chandradas',
      'Vikram Nair',
      'Wan Rizal',
      'Yip Hon Weng',
    ],
    topics: ['AI Economy & Industry', 'AI in Healthcare', 'AI Infrastructure & Research', 'AI in Public Sector'],
    zhSummary: `议员质询数字化进程中信任危机与网络安全挑战，强调诈骗等网络危害日益严重。政府回应强调新加坡数字经济发展成就及前瞻性基础设施建设，承诺采取全社会协作应对数字风险。核心争议在于如何平衡数字化发展与保障公众安全及信任。`,
    keyPoints: ['数字经济快速增长', '网络诈骗威胁加剧', '需全社会协作应对'],
    governmentStance: '支持数字化并强化网络安全',
    oppositionStance: null,
    controversyLevel: 2,
    policySignal: '推动数字信任与安全建设',
    notableQuote:
      'Scams often operate in the dark corners of the digital realm, exploiting vulnerabilities and thriving in unsuspecting spaces.',
    summary: `1.31 pm
Ms Tin Pei Ling (MacPherson)
: Sir, I beg to move*, "That this House reaffirms our commitment to adopt a whole-of-nation approach to sustain trust by building an inclusive and safe digital society."
[(proc text) *The Motion also stood in the names of Mr Sharael Taha, Ms Hany Soh, Ms Jessica Tan and Mr Alex Yam. (proc text)]
Speaker, Sir, the Government Parliamentary Committee (GPC) for Communications and Information, comprising People's Action Party Members of Parliament Ms Jessica Tan, Mr Christopher de Souza, Mr Alex Yam, Mr Sharael Taha, Ms Hany Soh and me as the GPC Chair, is movin`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=motion-2294',
  },
  {
    id: 'motion-2296',
    title: `Building an Inclusive and Safe Digital Society`,
    zhTitle: `构建包容安全的数字社会`,
    date: '2024-01-10',
    parliament: '14',
    type: 'Motions',
    speakers: [
      'Darryl David',
      'Leong Mun Wai',
      'Minister for Communications and Information',
      'Senior Minister of State for Communications and Information and National Development',
      'Sylvia Lim',
      'Tin Pei Ling',
    ],
    topics: ['AI Safety & Ethics', 'AI Economy & Industry', 'AI & Employment', 'AI in Healthcare'],
    zhSummary: `议员质询数字化对劳动力、人工智能影响及心理健康问题，政府回应强调AI带来的机遇，推行技能提升计划支持转型，注重数字包容与心理健康，核心争议在于AI对就业和社会的影响及应对策略。`,
    keyPoints: ['AI影响劳动力', '技能提升支持', '关注心理健康'],
    governmentStance: '积极拥抱AI，支持劳工转型',
    oppositionStance: null,
    controversyLevel: 3,
    policySignal: '推动数字技能培训与包容发展',
    notableQuote:
      'The competition is not between "man" and "machine" but which economy and society can better use technology to improve our competitiveness and our lives.',
    summary: `[(proc text) Debate resumed. (proc text)]
Mr Speaker
: Senior Minister of State Tan Kiat How.
6.24 pm
The Senior Minister of State for Communications and Information (Mr Tan Kiat How)
: Sir, I rise in support of the Motion in the name of Ms Tin Pei Ling.
I thank Members for their thoughtful suggestions on building a safe and inclusive digital society. I will speak on the topic of digital inclusion and Minister Josephine Teo will speak on issues related to digital trust and safety.
With your permission, Sir, may I ask the Clerk to distribute to Members supplementary materials on the topics that`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=motion-2296',
  },
  {
    id: 'oral-answer-3393',
    title: `Measures to Develop Baseline Artificial Intelligence Literacy of Students`,
    zhTitle: `学生AI素养发展措施`,
    date: '2024-01-09',
    parliament: '14',
    type: 'Oral Answers to Questions',
    speakers: [
      'Assoc Prof Razwana Begum Abdul Rahim',
      'Chan Chun Sing',
      'Gerald Giam Yean Song',
      'Minister for Education',
      'Ong Hua Han',
      'See Jinli Jean',
      'Tan Wu Meng',
    ],
    topics: ['AI Safety & Ethics', 'AI & Employment', 'AI in Education', 'AI & National Security'],
    zhSummary: `议员质询教育部关于除新加坡学生学习空间AI工具外，如何提升学生AI基础素养，包括AI编程课程的计划及实施主体。教育部长回应，教育部通过课程融合、师资培训及校外项目如AI学生推广计划，推动学生理解AI及其伦理，强调网络健康教育防范AI风险。核心争议在于如何有效提升学生AI技能及扩大项目参与度。`,
    keyPoints: ['推广AI基础知识', '师资培训与资源支持', 'AI学生推广计划'],
    governmentStance: '推动AI教育，强化师资与课程',
    oppositionStance: null,
    controversyLevel: 2,
    policySignal: '加强AI素养与安全教育',
    notableQuote: 'MOE develops students’ foundational knowledge of AI and promotes its safe and responsible use.',
    summary: `3
Mr Ong Hua Han
asked the Minister for Education (a) what other programmes beyond the artificial intelligence (AI)-enabled tools on Singapore Student Learning Space will be put in place to develop baseline AI literacy of students; (b) whether there are plans to launch AI coding programmes in the curriculum; (c) if so, when will such programmes be targeted to be launched; and (d) whether such programmes will be run by teachers or third party service providers.
4
Mr Ong Hua Han
asked the Minister for Education (a) how many students have applied to join the Artificial Intelligence Student Outrea`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=oral-answer-3393',
  },
  {
    id: 'written-answer-15270',
    title: `Workers Facing Highest Risk of Displacement from Artificial Intelligence and Reskilling Programmes Available`,
    zhTitle: `AI影响下高风险工种与再培训`,
    date: '2024-01-09',
    parliament: '14',
    type: 'Written Answers to Questions',
    speakers: ['Gerald Giam Yean Song', 'Josephine Teo'],
    topics: ['AI Safety & Ethics', 'AI Economy & Industry', 'AI & Employment', 'AI & National Security'],
    zhSummary: `议员质询政府关于哪些工种因AI面临最高失业风险及相关人数，并询问扩大再培训计划。政府回应强调AI影响难以完全预测，推行行业转型图谱及SkillsFuture等培训项目，支持工人技能提升和职业转换，鼓励向AI技术岗位转型，体现积极应对AI挑战的态度。核心争议在于AI对就业的具体影响及再培训成效。`,
    keyPoints: ['AI影响难以完全预测', '推行业转型图谱辅助准备', '扩大技能提升与转换计划'],
    governmentStance: '积极推动技能提升与职业转换',
    oppositionStance: '关注AI导致工人失业风险',
    controversyLevel: 2,
    policySignal: '强化再培训与职业转换支持',
    notableQuote:
      'Artificial intelligence (AI) development is changing every day and its impact on the workforce is not fully predictable.',
    summary: `48
Mr Gerald Giam Yean Song
asked the Minister for Communications and Information (a) which categories of workers has the Ministry assessed to face the highest risk of displacement as a result of artificial intelligence (AI); (b) what are the projected numbers for each such category; and (c) what expanded programmes are being instituted to scale up reskilling and encourage workers to switch careers before they face job displacement due to AI.
Mrs Josephine Teo
: Artificial intelligence (AI) development is changing every day and its impact on the workforce is not fully predictable. As with othe`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-15270',
  },
  {
    id: 'written-answer-15269',
    title: `National Artificial Intelligence Strategy 2.0 vs Energy and Environmental Sustainability`,
    zhTitle: `AI算力与能源可持续平衡`,
    date: '2024-01-09',
    parliament: '14',
    type: 'Written Answers to Questions',
    speakers: ['Josephine Teo', 'Lim Wee Kiak'],
    topics: ['AI & National Security', 'AI Infrastructure & Research', 'AI in Public Sector', 'AI Strategy'],
    zhSummary: `议员质询政府如何在推动国家AI战略2.0所需的算力增长与能源可持续目标之间取得平衡。政府回应强调通过提升数据中心能效、推广液冷技术、制定绿色标准及支持绿色计算方法，确保AI基础设施环保可持续。核心争议在于如何兼顾AI发展需求与气候承诺的矛盾。`,
    keyPoints: ['提升数据中心能效', '推广液冷节能技术', '发展绿色计算方法'],
    governmentStance: '推动绿色高效AI算力发展',
    oppositionStance: '关注算力与能源平衡',
    controversyLevel: 2,
    policySignal: '加强绿色数据中心建设',
    notableQuote:
      'The Government is committed to anchoring the necessary compute power and growing the DC sector in a sustainable manner.',
    summary: `47
Dr Lim Wee Kiak
asked the Minister for Communications and Information with regard to the National Artificial Intelligence (AI) Strategy 2.0 (a) how does the Government plan to balance the increased computing power necessary for AI developments with Singapore's energy sustainability goals; and (b) what initiatives or strategies are in place to ensure that the infrastructure and computing power needed for AI growth remain environmentally sustainable.
Mrs Josephine Teo
: An important enabler of our National Artificial Intelligence Strategy (NAIS) 2.0 strategy is artificial intelligence (AI) co`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-15269',
  },
  {
    id: 'written-answer-15268',
    title: `Proportion of Students Who Have Undergone Code for Fun Enrichment Programme`,
    zhTitle: `学生编程普及及AI教育进展`,
    date: '2024-01-09',
    parliament: '14',
    type: 'Written Answers to Questions',
    speakers: ['Josephine Teo', 'See Jinli Jean'],
    topics: ['AI Economy & Industry', 'AI & Employment', 'AI in Education', 'AI & National Security'],
    zhSummary: `议员质询自2019年以来参与“Code for Fun”编程项目的学生比例，未参与学生如何获得数字素养，以及未来如何更新课程以培养AI人才。政府回应指出小学高年级自2020年起强制参与，近三分之二中学提供该项目，且每年覆盖逾5万学生。课程将于2025年引入AI与数据素养内容，配合正式课程和课外活动推动数字及AI素养培养。核心争议在于如何确保未参与学生的基础数字能力及课程的持续更新。`,
    keyPoints: ['小学高年级强制编程', '中学项目逐年普及', '2025年引入AI内容'],
    governmentStance: '推动编程普及与AI教育升级',
    oppositionStance: '关注未参与学生数字素养保障',
    controversyLevel: 2,
    policySignal: '强化AI与数字素养教育',
    notableQuote:
      'Since 2020, it has been mandatory for all upper primary school students to go through CFF or a comparable coding programme.',
    summary: `46
Ms See Jinli Jean
asked the Minister for Communications and Information for each year since the Code for Fun enrichment programme was launched in 2019 (a) what proportion of each cohort of primary school and secondary school students respectively have undergone the programme; (b) for students who did not undergo the programme, how does the Ministry ensure that they can attain the foundational digital quotient; and (c) what are the Ministry's plans to update the programme and its delivery to contribute to developing an artificial intelligence-ready workforce.
Mrs Josephine Teo
: The Infocomm`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-15268',
  },
  {
    id: 'oral-answer-3383',
    title: `Data Security Incident Involving Personal Data of Members of Shopping Loyalty Programme`,
    zhTitle: `购物会员数据泄露事件质询`,
    date: '2023-11-22',
    parliament: '14',
    type: 'Oral Answers to Questions',
    speakers: ['Hany Soh', 'Josephine Teo', 'Minister for Communications and Information'],
    topics: ['AI & National Security'],
    zhSummary: `议员质询关于新加坡奢侈度假村运营商购物会员数据泄露事件的报告时间及延迟通知原因。通讯及资讯部长回应事件已按规定时间向监管机构报告，解释延迟通知因需优先控制泄露、评估影响及确认通知要求。监管机构正调查事件是否对个人造成重大伤害及通知是否及时。`,
    keyPoints: ['事件按规定及时报告', '延迟通知因优先控制泄露', '监管机构正在调查'],
    governmentStance: '重视数据保护，严格执法',
    oppositionStance: '关注通知延迟及调查进度',
    controversyLevel: 2,
    policySignal: '强化数据泄露管理规范',
    notableQuote: 'Singapore takes breaches of personal data seriously.',
    summary: `9
Ms Hany Soh
asked the Minister for Communications and Information with regard to the data security incident involving the personal data of about 655,000 members of a shopping loyalty programme operated by a luxury resort operator in Singapore (a) whether the incident was reported to the authorities and, if so, when was it reported; and (b) what was the reason provided to the authorities for the three-week delay in notifying affected members.
The Minister for Communications and Information (Mrs Josephine Teo)
: Mr Speaker, on 7 November 2023, Marina Bay Sands (MBS) announced a breach of its c`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=oral-answer-3383',
  },
  {
    id: 'written-answer-15158',
    title: `Government's Approach and Policy on Governing Safe and Responsible Artificial Intelligence Development`,
    zhTitle: `新加坡AI安全治理政策`,
    date: '2023-11-22',
    parliament: '14',
    type: 'Written Answers to Questions',
    speakers: ['Chua Kheng Wee Louis', 'Josephine Teo'],
    topics: ['AI Governance & Regulation', 'AI Safety & Ethics', 'AI Economy & Industry', 'AI & National Security'],
    zhSummary: `议员质询政府关于新加坡安全且负责任发展人工智能的政策及后续治理步骤。政府回应强调已有多次详细说明，支持国际合作与标准对齐，推动企业参与AI伦理认证，并通过双边及多边机制深化AI治理合作。核心争议点在于如何平衡技术发展与伦理安全，以及国际合作的具体落实。`,
    keyPoints: ['持续推动AI伦理标准', '支持国际AI治理合作', '鼓励企业参与AI认证'],
    governmentStance: '推动安全负责任AI发展',
    oppositionStance: '质询政府AI治理措施',
    controversyLevel: 2,
    policySignal: '加强国际合作与本地认证',
    notableQuote:
      'Singapore has been consistent in our support for international efforts that enhance alignment on AI governance.',
    summary: `37
Mr Chua Kheng Wee Louis
asked the Minister for Communications and Information (a) what is the Government's approach and policy governing the safe and responsible development of artificial intelligence (AI) in Singapore; and (b) what are the subsequent steps that the Government is planning to take in AI governance following the signing of the Bletchley Declaration.
Mrs Josephine Teo
: Singapore's approach to the responsible development and deployment of a
rtificial intelligence (
AI) has been explained at the Sittings on:
(a) 21 April 2023; [
Please refer to "Regulatory Framework for Artific`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-15158',
  },
  {
    id: 'oral-answer-3375',
    title: `Developing Indigenous Capabilities for Artificial Intelligence Solutions`,
    zhTitle: `发展本土AI基础模型能力`,
    date: '2023-11-07',
    parliament: '14',
    type: 'Oral Answers to Questions',
    speakers: [
      'Gerald Giam Yean Song',
      'Janil Puthucheary',
      'Senior Minister of State for Communications and Information and Health',
    ],
    topics: ['AI Economy & Industry', 'AI & National Security', 'AI Infrastructure & Research', 'AI in Public Sector'],
    zhSummary: `议员质询政府是否有整体计划发展本土AI基础模型能力，包括设立国家研究机构。政府回应新加坡AI研究实力强，但不强调完全依赖本土能力，倾向快速采用国际先进技术。核心争议在于是否应自主研发基础模型及相关长期风险。`,
    keyPoints: ['新加坡AI研究实力强', '无整体本土基础模型计划', '倾向快速采用国际技术'],
    governmentStance: '支持快速采用国际AI技术，重视人才与创新',
    oppositionStance: '质疑缺乏整体本土AI基础模型计划',
    controversyLevel: 3,
    policySignal: '强调引进与本土研发并重',
    notableQuote:
      'It is not usually necessary or beneficial to rely solely on indigenous capabilities to advance our economic interests.',
    summary: `14
Mr Gerald Giam Yean Song
asked the Prime Minister (a) whether there exists a whole-of-Government plan to develop indigenous capabilities in creating and deploying artificial intelligence (AI) foundation models, including establishing a National Foundation Model Research Institute, so as to help local researchers build core AI foundation model expertise; and (b) if such an AI foundation model plan already exists, what are its core and strategic aims.
The Senior Minister of State for Communications and Information (Dr Janil Puthucheary) (for the Prime Minister)
: Sir, Singapore's research cap`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=oral-answer-3375',
  },
  {
    id: 'written-answer-14629',
    title: `Use of Artificial Intelligence in Singapore Police Force's Enforcement Work`,
    zhTitle: `警务中的人工智能应用`,
    date: '2023-10-03',
    parliament: '14',
    type: 'Written Answers to Questions',
    speakers: ['Desmond Choo', 'K Shanmugam'],
    topics: ['AI & National Security', 'AI in Public Sector'],
    zhSummary: `议员质询新加坡警察部队如何将人工智能应用于执法工作，是否带来成效，以及未来发展方向。政府回应指出，AI已用于打击儿童性虐待材料和诈骗信息识别，提升调查效率，并将继续与相关机构合作，推动AI技术在警务中的应用。辩论核心在于AI技术的实际效果及未来潜力。`,
    keyPoints: ['AI提升执法效率', '打击儿童性虐待材料', '防范诈骗信息'],
    governmentStance: '积极推动AI提升警务能力',
    oppositionStance: '质询AI应用成效与前景',
    controversyLevel: 2,
    policySignal: '深化AI在公共安全应用',
    notableQuote:
      'The Singapore Police Force (SPF) has been leveraging artificial intelligence (AI) to enhance its capabilities and operational effectiveness.',
    summary: `11
Mr Desmond Choo
asked the Minister for Home Affairs (a) how has the Singapore Police Force incorporated artificial intelligence (AI) into its enforcement work; (b) whether this has led to improved outcomes; and (c) what is the future role of AI in policing.
Mr K Shanmugam
: The Singapore Police Force (SPF) has been leveraging artificial intelligence (AI) to enhance its capabilities and operational effectiveness.
For example, it has used AI in its efforts against child sexual abuse materials. Investigators use an AI programme to sieve out possible obscene materials from seized devices. This`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-14629',
  },
  {
    id: 'written-answer-13935',
    title: `Impact of Artificial Intelligence on Trading Platforms in Financial Markets`,
    zhTitle: `人工智能对金融交易平台影响`,
    date: '2023-08-02',
    parliament: '14',
    type: 'Written Answers to Questions',
    speakers: ['Lawrence Wong', 'Tan Wu Meng'],
    topics: ['AI Governance & Regulation', 'AI Safety & Ethics', 'AI Economy & Industry', 'AI & National Security'],
    zhSummary: `质询关注AI在金融交易平台中可能导致的“羊群效应”风险及利益冲突问题。政府回应称，新加坡金融管理局（MAS）已实施技术中立的监管措施，推行FEAT原则保障公平与透明，认为当前AI模型应用尚处初期，风险较低，但将持续监控并与业界合作推动负责任使用AI。`,
    keyPoints: ['监管要求防范利益冲突', '推行FEAT原则保障公平', 'AI交易风险目前较低'],
    governmentStance: '强调监管与持续监控AI风险',
    oppositionStance: '关注AI引发的利益冲突与羊群效应',
    controversyLevel: 2,
    policySignal: '推动负责任AI金融应用',
    notableQuote:
      'MAS requires regulated financial institutions to have controls in place to avoid or mitigate conflicts between their interests and those of their customers.',
    summary: `2
Dr Tan Wu Meng
asked the Prime Minister whether MAS has assessed the impact of artificial intelligence (AI) on trading platforms in financial markets for (i) the risk of "herding" where individual actors make similar decisions due to similar trained AI models or similar data aggregates and (ii) the potential for conflict of interest when a trading AI platform system is simultaneously considering both the platform's interest and the customers' interests, especially if without disclosure to customers.
Mr Lawrence Wong (for the Prime Minister)
: The Monetary Authority of Singapore (MAS) require`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-13935',
  },
  {
    id: 'oral-answer-3295',
    title: `Feasibility of Establishing Body to Regulate Artificial Intelligence`,
    zhTitle: `新加坡AI监管机构可行性`,
    date: '2023-07-06',
    parliament: '14',
    type: 'Oral Answers to Questions',
    speakers: ['Josephine Teo', 'Minister for Communications and Information', 'Tin Pei Ling'],
    topics: ['AI Governance & Regulation', 'AI Safety & Ethics', 'AI Economy & Industry', 'AI & National Security'],
    zhSummary: `质询方询问政府是否研究设立AI监管机构及国际合作情况。政府回应强调采用实用且基于风险的治理方式，反对一刀切监管，介绍了现有IMDA和PDPC的多项AI治理举措，并强调国际合作重要性。核心争议在于是否设立专门监管机构及如何平衡创新与风险管理。`,
    keyPoints: ['反对一刀切监管', '推行风险为本治理', '加强国际合作'],
    governmentStance: '支持实用风险导向AI治理',
    oppositionStance: '关注设立专门监管机构',
    controversyLevel: 3,
    policySignal: '强化多边合作与风险治理',
    notableQuote: 'We cannot and should not adopt a one-size-fits-all approach to regulate it.',
    summary: `13
Ms Tin Pei Ling
asked the Minister for Communications and Information (a) whether the Government will be studying the feasibility of establishing a new body to regulate artificial intelligence (AI) in Singapore; and (b) what are the efforts made in working with other governments to coordinate responsible development and deployment of AI.
The Minister for Communications and Information (Mrs Josephine Teo)
: Mdm Deputy Speaker, I thank Ms Tin for her question. Singapore supports the responsible development and deployment of artificial intelligence (AI) to unlock its transformative potential o`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=oral-answer-3295',
  },
  {
    id: 'motion-2194',
    title: `Supporting Healthcare`,
    zhTitle: `支持医疗健康发展`,
    date: '2023-05-10',
    parliament: '14',
    type: 'Motions',
    speakers: [
      'Assoc Prof Jamus Jerome Lim',
      'Community and Youth and Minister for Social and Family Development',
      'Hoon Hian Teck',
      'Janet Ang',
      'Koh Lian Pin',
      'Leon Perera',
      'Leong Mun Wai',
      'Mark Chay',
      'Minister of State for Education',
      'Ong Ye Kung',
      'Raj Joshua Thomas',
      'Senior Minister of State for Health',
      'Senior Parliamentary Secretary to the Minister for Culture',
      'Tan Yia Swam',
      'Wan Rizal',
      'Yip Hon Weng',
    ],
    topics: ['AI Economy & Industry', 'AI in Education', 'AI in Healthcare', 'AI Infrastructure & Research'],
    zhSummary: `辩论聚焦疫情后持续支持医疗健康，特别强调学术界心理健康问题。议员指出学术压力导致研究人员和研究生焦虑抑郁比例高，呼吁关注精神健康。政府未直接回应，核心争议在于如何平衡学术绩效压力与心理健康保障。`,
    keyPoints: ['学术界心理健康问题突出', '学术压力导致焦虑抑郁', '需持续支持医疗健康'],
    governmentStance: null,
    oppositionStance: null,
    controversyLevel: 2,
    policySignal: '关注学术心理健康',
    notableQuote:
      'graduate students are more than six times as likely to experience anxiety and depression compared to the general population.',
    summary: `[(proc text) Order read for the Resumption of Debate on Question [9 May 2023]. (proc text)]
[(proc text) "That this House commits to supporting healthcare beyond the COVID-19 pandemic and the whole-of-Government efforts for consistent and sustainable support.” – [Dr Tan Yia Swam] (proc text)]
[(proc text) Question again proposed. (proc text)]
Mr Deputy Speaker
: Prof Koh Lian Pin.
1.39 pm
Prof Koh Lian Pin (Nominated Member)
: Mr Deputy Speaker, I stand in support of this Motion. I would like to join the debate today by highlighting a growing healthcare issue facing the academic community.
Our`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=motion-2194',
  },
  {
    id: 'motion-2190',
    title: `Supporting Healthcare`,
    zhTitle: `支持后疫情时代医疗保障`,
    date: '2023-05-09',
    parliament: '14',
    type: 'Motions',
    speakers: [
      'Abdul Samad',
      'Gerald Giam Yean Song',
      'Leong Mun Wai',
      'Ng Ling Ling',
      'Shahira Abdullah',
      'Tan Yia Swam',
    ],
    topics: ['AI Governance & Regulation', 'AI in Healthcare', 'AI in Public Sector'],
    zhSummary: `议员Tan Yia Swam质询医疗体系在后疫情时代的可持续支持，强调医生与患者关系的复杂性及医疗资源有限。她呼吁政府采取全方位措施，关注医疗支出、慢性病管理及医疗服务质量。辩论聚焦医疗费用、患者权益与医生责任的平衡，体现对医疗系统长期发展的关切。`,
    keyPoints: ['医生应关爱患者', '患者更自主质疑医生', '医疗支出需持续支持'],
    governmentStance: null,
    oppositionStance: null,
    controversyLevel: 3,
    policySignal: '推动全政府医疗支持',
    notableQuote:
      'Why does anyone stand up to advocate for certain causes? We want to leave behind a better world than what we were born in.',
    summary: `Mdm Deputy Speaker
: Dr Tan Yia Swam.
4.01 pm
Dr Tan Yia Swam (Nominated Member)
: Madam, I beg to move*, "That this House commits to supporting healthcare beyond the COVID-19 pandemic and the whole-of-Government efforts for consistent and sustainable support".
[(proc text) *
The Motion also stood in the name of Mr Abdul Samad and Dr Shahira Abdullah.
(proc text)]
I declare my interest as a breast surgeon in private practice and my various medical leadership roles as an appointed member of the Singapore Medical Council and the Vice President of the Singapore Medical Association. More important`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=motion-2190',
  },
  {
    id: 'oral-answer-3240',
    title: `Ensuring Development and Maintenance of Ethical Artificial Intelligence Standards`,
    zhTitle: `确保伦理AI标准发展维护`,
    date: '2023-05-09',
    parliament: '14',
    type: 'Oral Answers to Questions',
    speakers: ['Janil Puthucheary', 'Senior Minister of State for Communications and Information', 'Tan Wu Meng'],
    topics: ['AI Governance & Regulation', 'AI Safety & Ethics', 'AI Economy & Industry', 'AI & National Security'],
    zhSummary: `质询关注如何推动符合人类价值观的伦理AI发展及其标准维护。政府回应介绍了新加坡已有的AI治理框架、自测工具及个人数据使用指导，强调责任制和数据安全。质询方关注责任归属及AI身份标识，核心争议在于如何落实责任和透明度。`,
    keyPoints: ['推广负责任AI发展', '引入AI治理框架', '强调责任与透明'],
    governmentStance: '支持负责任且安全的AI发展',
    oppositionStance: '关注AI责任与透明度',
    controversyLevel: 2,
    policySignal: '强化AI责任与数据保护',
    notableQuote:
      'Singapore supports the responsible development and deployment of artificial intelligence (AI), so that its benefits may be enjoyed in a trusted and safe manner.',
    summary: `16
Dr Tan Wu Meng
asked the Minister for Communications and Information considering the advances in artificial intelligence (AI) with platforms such as ChatGPT and the GPT-4 architecture, what attention is being given to promoting and ensuring (i) the development of ethical AI which responds in a manner consistent with human values and (ii) maintenance of ethical standards in the development, dataset training and deployment of AI.
The Senior Minister of State for Communications and Information (Dr Janil Puthucheary) (for the Minister for Communications and Information)
: Madam, Singapore suppo`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=oral-answer-3240',
  },
  {
    id: 'written-answer-13437',
    title: `Leveraging New Artificial Intelligence Technologies in e-Government Services`,
    zhTitle: `新加坡政府AI技术应用`,
    date: '2023-05-09',
    parliament: '14',
    type: 'Written Answers to Questions',
    speakers: ['Josephine Teo', 'Melvin Yong Yik Chye'],
    topics: [
      'AI Governance & Regulation',
      'AI & National Security',
      'AI Infrastructure & Research',
      'AI in Public Sector',
    ],
    zhSummary: `议员质询政府如何利用ChatGPT等新型人工智能技术提升电子政务服务，是否会替代现有聊天机器人以改善用户体验。政府回应已在多项数字服务中应用AI，强调新技术可提升服务质量和效率，但需确保准确性和可靠性，且将制定使用指南保障责任和数据安全。核心争议点在于技术应用的安全性与实用性平衡。`,
    keyPoints: ['政府已应用AI服务', '新技术提升服务质量', '强调准确性与安全'],
    governmentStance: '积极探索AI提升政务服务',
    oppositionStance: '关注技术替代与用户体验',
    controversyLevel: 2,
    policySignal: '推动AI安全应用于公共服务',
    notableQuote:
      'We must, however, ensure the accuracy and reliability of responses before such service enhancements can be deployed for public use.',
    summary: `6
Mr Melvin Yong Yik Chye
asked the Prime Minister (a) how does the Public Service intend to leverage new artificial intelligence technologies, such as ChatGPT, in e-Government services; and (b) whether such tools will augment and replace existing chatbot services to provide a better user experience for citizens.
Mrs Josephine Teo (for the Prime Minister)
: The Government has integrated artificial intelligence (AI) in digital services, such as chatbots on Government websites, the OneService Chatbot for reporting municipal issues through social messaging platforms, and the SG Translate Together`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-13437',
  },
  {
    id: 'oral-answer-3212',
    title: `Concept of "Indivisible Security” in Speech on Russia-Ukraine War and Impact on Southeast Asia`,
    zhTitle: `不可分割安全概念解析`,
    date: '2023-05-08',
    parliament: '14',
    type: 'Oral Answers to Questions',
    speakers: ['Minister for Law', 'Vikram Nair'],
    topics: ['AI Governance & Regulation', 'AI & National Security'],
    zhSummary: `质询围绕“不可分割安全”概念及其在俄乌战争中的应用。政府回应强调主权、自决和领土完整为国际法基本原则，俄方以不可分割安全为由入侵乌克兰不被认可。核心争议在于不可分割安全是否为国际法原则，政府明确否认其法律地位，指出该概念被俄美双方引用但不具法律效力。`,
    keyPoints: ['主权与自决为国际法基石', '俄乌战争违反国际法', '不可分割安全非法律原则'],
    governmentStance: '不可分割安全不能为侵略辩护',
    oppositionStance: null,
    controversyLevel: 2,
    policySignal: '坚持国际法基本原则',
    notableQuote:
      'Indivisible Security is not of the same status as self-determination, sovereignty, or territorial integrity and the non-recourse to use of force.',
    summary: `The following question stood in the name of
Mr Vikram Nair –
8 To ask the Minister for Law whether he can elaborate on the concept of “indivisible security” as referenced in his speech entitled “The Russia-Ukraine War and Southeast Asia One Year On: Implications and Outlook” that was delivered on 8 March 2023 at the ISEAS-Yusof Ishak Institute workshop.
Mr Murali Pillai (Bukit Batok)
: Question No 8.
The Minister for Law (Mr K Shanmugam)
: Thank you, Mr Deputy Speaker. I will first start with the point of sovereignty. Self-determination, sovereignty and territorial integrity as well as the non`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=oral-answer-3212',
  },
  {
    id: 'oral-answer-3225',
    title: `Reports of Unauthorised Bank Transaction taking Place despite Absence of Alerts on Customer's Telephone Records`,
    zhTitle: `未收到短信OTP的银行交易纠纷`,
    date: '2023-05-08',
    parliament: '14',
    type: 'Oral Answers to Questions',
    speakers: ['Alvin Tan', 'Gerald Giam Yean Song', 'Minister of State for Trade and Industry', 'Tan Wu Meng'],
    topics: ['AI Economy & Industry'],
    zhSummary: `质询涉及客户未收到短信OTP却发生未授权银行交易的争议，政府回应此类情况极为罕见，警方无相关报告，金融纠纷调解中心仅接获少数争议案例。政府强调客户应及时联系银行及警方，银行需公平处理纠纷并可提供善意赔偿，客户可诉诸调解或法律途径。质询方关注银行与电信记录冲突时的复核机制及防范未来诈骗的准备。`,
    keyPoints: ['未授权交易极罕见', '银行需公平处理纠纷', '客户可诉诸调解和法律'],
    governmentStance: '强调银行责任与客户保护',
    oppositionStance: '关注复核机制与防诈骗准备',
    controversyLevel: 3,
    policySignal: '加强金融诈骗防范与纠纷机制',
    notableQuote:
      'MAS expects banks to treat customers fairly in all cases of disputes over unauthorised transactions.',
    summary: `24
Dr Tan Wu Meng
asked the Prime Minister (a) whether there are claims filed with the Financial Dispute Resolution Centre which involve an unauthorised bank transaction reportedly taking place and the bank has assessed that the One-Time Password (OTP) SMS messaging was used, but the customer's telephone operator records do not show transmission or receipt of such SMS OTP; and (b) whether there are other avenues available for these customers to seek redress.
The Minister of State for Trade and Industry (Mr Alvin Tan) (for the Prime Minister)
: Sir, the scenario Dr Tan described is quite rare:`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=oral-answer-3225',
  },
  {
    id: 'written-answer-13336',
    title: `Credibility and Adoption of AI-based Diagnostic Solutions`,
    zhTitle: `AI诊断方案的可信度与监管`,
    date: '2023-05-08',
    parliament: '14',
    type: 'Written Answers to Questions',
    speakers: ['Assoc Prof Jamus Jerome Lim', 'Ong Ye Kung'],
    topics: ['AI Governance & Regulation', 'AI Safety & Ethics', 'AI in Healthcare', 'AI & National Security'],
    zhSummary: `质询聚焦于AI诊断方案的可信度及其广泛应用的监管考量。政府回应指出新加坡已在医疗领域广泛应用AI，强调安全、临床有效性和成本效益为采用前提，介绍了现有的监管框架和未来发布的治理指南，同时关注伦理问题。核心争议在于如何平衡技术创新与安全监管。`,
    keyPoints: ['AI广泛应用医疗', '安全有效为前提', '完善监管与伦理'],
    governmentStance: '支持安全有效的AI医疗应用',
    oppositionStance: '关注AI诊断可信度与监管',
    controversyLevel: 2,
    policySignal: '加强AI医疗监管框架',
    notableQuote:
      'The Ministry of Health (MOH) is open to the use of AI technologies in healthcare where they are proven to be safe, clinically efficacious and cost-effective.',
    summary: `39
Assoc Prof Jamus Jerome Lim
asked the Minister for Health (a) whether the Ministry has explored the credibility of AI-based diagnostic solutions; and (b) if so, what are the regulatory considerations that will be most important if there are more widespread adoption of such technologies.
Mr Ong Ye Kung
: Artificial intelligence (AI) is ubiquitous and being used in healthcare in Singapore. For example, it is used in JARVISDHL, a programme by SingHealth and NUS to prevent diabetes, hypertension, hyperlipidemia. It is the engine for SELENA+ (Singapore Eye LEsioN Analyzer plus) to diagnose diabe`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-13336',
  },
  {
    id: 'oral-answer-3193',
    title: `Regulatory Framework for Artificial Intelligence Governance in Singapore`,
    zhTitle: `新加坡人工智能监管框架`,
    date: '2023-04-21',
    parliament: '14',
    type: 'Oral Answers to Questions',
    speakers: ['He Ting Ru', 'Janil Puthucheary', 'Senior Minister of State for Communications and Information'],
    topics: ['AI Governance & Regulation', 'AI Safety & Ethics', 'AI Economy & Industry', 'AI & National Security'],
    zhSummary: `质询方关注新加坡是否借鉴欧盟和中国的AI监管框架，重点领域及立法时间表。政府回应介绍现有的《AI治理模型框架》和AI Verify工具，强调持续审视监管策略，并计划发布个人数据保护指导。质询方进一步关注AI诈骗等具体风险，政府指出AI技术多样性，强调区别对待不同AI技术的必要性，体现审慎推进监管的态度。`,
    keyPoints: ['支持负责任AI发展', '已有AI治理框架', '关注AI诈骗风险'],
    governmentStance: '审慎推进AI监管，持续评估调整',
    oppositionStance: '关注AI诈骗等具体保护措施',
    controversyLevel: 2,
    policySignal: '完善AI伦理与数据保护',
    notableQuote: 'AI is a group of technologies. Currently, there is a lot of excitement around ChatGPT.',
    summary: `19
Ms He Ting Ru
asked the Minister for Communications and Information in view of the proposed regulatory frameworks for artificial intelligence (AI) governance in the European Union and China (a) whether the current approach to AI regulation in Singapore is being reviewed; (b) whether there are any areas in the field that are currently being prioritised for regulation; and (c) what is the anticipated timeline for the introduction of any regulation.
The Senior Minister of State for Communications and Information (Dr Janil Puthucheary) (for the Minister for Communications and Information)
: Mr`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=oral-answer-3193',
  },
  {
    id: 'budget-2078',
    title: `Committee of Supply – Head S (Ministry of Manpower)`,
    zhTitle: `新加坡劳动力老龄化挑战`,
    date: '2023-03-01',
    parliament: '14',
    type: 'Budget',
    speakers: [
      'Abdul Samad',
      'Cheng Hsing Yao',
      'Chua Kheng Wee Louis',
      'Denise Phua Lay Peng',
      'Desmond Choo',
      'Edward Chia Bing Hui',
      'Gerald Giam Yean Song',
      'Hazel Poa',
      'Hoon Hian Teck',
      'Janet Ang',
      'Leon Perera',
      'Leong Mun Wai',
      'Liang Eng Hwa',
      'Louis Ng Kok Kwang',
      'Melvin Yong Yik Chye',
      'Minister for Manpower',
      'Minister of State for Manpower',
      'Miss Cheng Li Hui',
      'Miss Rachel Ong',
      'Mohd Fahmi Aliman',
      'Patrick Tay Teck Guan',
      'Pritam Singh',
      'Raj Joshua Thomas',
      'Saktiandi Supaat',
      'Senior Minister of State for Manpower',
      'Sharael Taha',
      'Yeo Wan Ling',
      'Yip Hon Weng',
    ],
    topics: ['AI Economy & Industry', 'AI & Employment', 'AI in Public Sector'],
    zhSummary: `议员质询新加坡劳动力老龄化及人口结构变化对经济的影响，指出部分行业老年员工比例高，未来劳动力可能快速流失。强调技术变革与工作态度转变带来的挑战，呼吁政府关注灵活工作安排。政府回应未见，核心争议在于如何应对老龄化与技术变革带来的就业结构调整。`,
    keyPoints: ['人口老龄化加剧', '部分行业老年工人多', '技术与工作态度变化'],
    governmentStance: null,
    oppositionStance: '关注老龄化影响与就业调整',
    controversyLevel: 3,
    policySignal: '推动灵活就业与技能培训',
    notableQuote:
      'Technology, digitisation and artificial intelligence (AI) have already changed the nature of many jobs.',
    summary: `The Chairman
: Head S, Ministry of Manpower. Mr Desmond Choo.
1.08 pm
Workforce for New Era
Mr Desmond Choo (Tampines)
: Chairman, I beg to move, "That the total sum to be allocated for Head S of the Estimates to be reduced by $100".
When it was reported in January this year that China's population declined for the first time since 1961, the Chinese stock markets wobbled. It was widely expected because of its ageing population and declining fertility. But it was still a sobering reality. A reality of potential shrinking consumption and most certainly, a declining workforce. It faces perhaps a`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-2078',
  },
  {
    id: 'budget-2072',
    title: `Committee of Supply – Head Q (Ministry of Communications and Information)`,
    zhTitle: `数字经济与网络安全监管`,
    date: '2023-02-28',
    parliament: '14',
    type: 'Budget',
    speakers: [
      'Baey Yam Keng',
      'Christopher de Souza',
      'Eric Chua',
      'Gerald Giam Yean Song',
      'Hany Soh',
      'He Ting Ru',
      'Janet Ang',
      'Jessica Tan Soon Neo',
      'Leon Perera',
      'Minister for Communications and Information',
      'Pritam Singh',
      'Rahayu Mahzam',
      'Senior Minister of State for Communications and Information',
      'Sharael Taha',
      'Tin Pei Ling',
    ],
    topics: ['AI Governance & Regulation', 'AI Safety & Ethics', 'AI Economy & Industry', 'AI & National Security'],
    zhSummary: `议员质询了新加坡在数字经济发展中如何平衡数据利用与用户保护，关注在线安全法案实施进展及元宇宙等新兴领域的监管。强调法规需保护用户同时避免抑制创新，特别是中小企业的数字化发展。政府回应尚未详述，核心争议在于如何在促进数字经济与保障网络安全之间取得平衡。`,
    keyPoints: ['数据驱动创新与风险', '在线安全法案实施', '监管与创新平衡'],
    governmentStance: null,
    oppositionStance: '强调保护用户与支持中小企业数字化',
    controversyLevel: 3,
    policySignal: '加强网络安全与数字经济协调发展',
    notableQuote: 'We must protect our people online just as we do in the real world.',
    summary: `The Chairman
: Head Q, Ministry of Communications and Information. Ms Tin Pei Ling.
Building and Protecting Singapore
Ms Tin Pei Ling (MacPherson)
: Chairman, I beg leave to move "that the total sum to be allocated for Head Q of the Estimates be reduced by $100".
Singapore has great ambitions to achieve a thriving digital economy and smart nation. In past Parliamentary debates, I argued that talent and data are, in my opinion, the most basic yet most important success factors. We need data to innovate and we need people to get things done. This remains true.
But along with new capabilities com`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-2072',
  },
  {
    id: 'budget-2073',
    title: `Committee of Supply – Head K (Ministry of Education)`,
    zhTitle: `教育经费与职业发展支持`,
    date: '2023-02-28',
    parliament: '14',
    type: 'Budget',
    speakers: [
      'Assoc Prof Jamus Jerome Lim',
      'Baey Yam Keng',
      'Carrie Tan',
      'Chua Kheng Wee Louis',
      'Darryl David',
      'Denise Phua Lay Peng',
      'Foo Mee Har',
      'Gerald Giam Yean Song',
      'Hazel Poa',
      'He Ting Ru',
      'Koh Lian Pin',
      'Leon Perera',
      'Lim Biow Chuan',
      'Mariam Jaafar',
      'Mark Chay',
      'Minister of State for Education',
      'Muhamad Faisal Bin Abdul Manap',
      'Patrick Tay Teck Guan',
      'Rahayu Mahzam',
      'Sharael Taha',
      'Shawn Huang Wei Zhong',
      'Wan Rizal',
    ],
    topics: ['AI Economy & Industry', 'AI & Employment', 'AI in Education', 'AI in Public Sector'],
    zhSummary: `议员质询教育预算及职业指导支持，强调疫情期间教育工作者的贡献及未来技能培养的重要性。提出加强青年及在职人士的职业辅导，建议扩大SkillsFuture学分使用范围以促进终身学习。政府回应未见，核心争议在于如何更好支持青年职业发展及技能匹配。`,
    keyPoints: ['加强青年职业指导', '提升继续教育培训', '扩大技能学分使用'],
    governmentStance: null,
    oppositionStance: '支持扩大职业辅导及技能发展',
    controversyLevel: 3,
    policySignal: '推动终身学习与职业辅导',
    notableQuote:
      'We owe it to our youth, especially those who have given up much during the pandemic years, to help them get a strong footing on the career ladder.',
    summary: `The Chairman
: Head K, Ministry of Education. Mr Patrick Tay.
5.30 pm
Education and the Way Forward
Mr Patrick Tay Teck Guan (Pioneer)
: Sir, I beg to move, "That the total sum to be allocated for Head K of the Estimates be reduced by $100".
The past few years have undoubtedly been a test of mettle. Especially so for our educators and school staff who have worked tirelessly to ensure our students are safe and schools remained open during the pandemic, all while balancing their own demands and caregiving needs. Not to forget the staff in MOE headquarters who have toiled in the background, coord`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-2073',
  },
  {
    id: 'budget-2054',
    title: `Committee of supply – Head J (Ministry of Defence)`,
    zhTitle: `国防预算与安全趋势质询`,
    date: '2023-02-24',
    parliament: '14',
    type: 'Budget',
    speakers: [
      'Alex Yam',
      'Chong Kee Hiong',
      'Dennis Tan Lip Fong',
      'Deputy Leader of the House',
      'Don Wee',
      'Gerald Giam Yean Song',
      'Kwek Hian Chuan Henry',
      'Miss Rachel Ong',
      'Shawn Huang Wei Zhong',
      'Vikram Nair',
    ],
    topics: [
      'AI Governance & Regulation',
      'AI Safety & Ethics',
      'AI & National Security',
      'AI Infrastructure & Research',
    ],
    zhSummary: `议员质询国防部关于当前全球及区域安全形势的评估，特别关注美中战略竞争、俄乌战争及朝鲜导弹试验等风险。政府回应了对多边主义衰退和地区安全复杂化的关注，强调新加坡需加强防务准备以应对不确定性。核心争议在于如何平衡国防投入与区域外交策略，确保国家安全与稳定。`,
    keyPoints: ['多边主义承诺减弱', '美中战略竞争加剧', '区域安全环境复杂'],
    governmentStance: '加强防务准备应对复杂安全环境',
    oppositionStance: '关注国防预算及安全威胁评估',
    controversyLevel: 3,
    policySignal: '强化国防应对区域风险',
    notableQuote:
      'Every time an act of aggression takes place without consequences for the aggressor, the more each country has to fear for its own safety.',
    summary: `The Chairman
: Head J, Ministry of Defence. Mr Vikram Nair.
Security Trends
Mr Vikram Nair (Sembawang)
: Chairman, I beg to move "That the total sum to be allocated for Head J of the Estimates be reduced by $100".
Singapore had a turbulent journey to Independence, with our pioneer generation of leaders living through both World War II, and at the cusp of independence, the Konfrontasi between Indonesia and Malaysia. We started National Service in 1967 and over the years, have slowly and steadily built the SAF into a strong and credible defence force. Singapore has lived with relative peace and`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-2054',
  },
  {
    id: 'written-answer-12799',
    title: `Manage Use of Artificial Intelligence Bots in Schools`,
    zhTitle: `学校人工智能工具管理`,
    date: '2023-02-07',
    parliament: '14',
    type: 'Written Answers to Questions',
    speakers: ['Chan Chun Sing', 'Shawn Huang Wei Zhong'],
    topics: ['AI Safety & Ethics', 'AI in Education', 'AI & National Security', 'AI in Public Sector'],
    zhSummary: `质询了教育部如何管理学校中ChatGPT等人工智能工具的使用。政府回应指出，AI工具既有机遇也有挑战，强调通过教师指导、数字素养教育和多元评估防范滥用，培养学生诚信和责任感。核心争议在于如何平衡AI辅助学习与防止学术不端。`,
    keyPoints: ['AI具机遇与挑战', '加强数字素养教育', '多元评估防止滥用'],
    governmentStance: '支持合理利用AI促进学习',
    oppositionStance: '关注AI工具管理风险',
    controversyLevel: 2,
    policySignal: '推动AI教育规范与素养培养',
    notableQuote:
      'When used appropriately, these tools can support students in their learning when students have mastered basic concepts and thinking skills.',
    summary: `26
Mr Shawn Huang Wei Zhong
asked the Minister for Education how will the Ministry manage the use of artificial intelligence (AI) bots such as ChatGPT in schools given the proliferation of AI toolkits.
Mr Chan Chun Sing
: As with any technology, generative AI tools such as ChatGPT present both opportunities and challenges. When used appropriately, these tools can support students in their learning when students have mastered basic concepts and thinking skills.
The Ministry of Education (MOE) provides teachers with guidance and resources to effectively harness the use of digital technology to e`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-12799',
  },
  {
    id: 'oral-answer-3032',
    title: `Students Using Artificial Intelligence Technologies for Exams and Assignments`,
    zhTitle: `学生使用AI技术考试作业`,
    date: '2023-02-06',
    parliament: '14',
    type: 'Oral Answers to Questions',
    speakers: [
      'Chan Chun Sing',
      'Lim Wee Kiak',
      'Minister for Education',
      'Shahira Abdullah',
      'Tan Wu Meng',
      'Wan Rizal',
    ],
    topics: ['AI Safety & Ethics', 'AI Economy & Industry', 'AI & Employment', 'AI in Education'],
    zhSummary: `议员质询AI技术如ChatGPT对学生作业和考试的影响、作弊问题及教育应对措施。教育部长回应，AI带来机遇与挑战，教育部提供指导资源，鼓励合理利用AI，同时强调基础知识掌握，防止过度依赖和作弊。核心争议在于如何平衡AI辅助学习与防范学术不端。`,
    keyPoints: ['AI带来机遇与挑战', '提供教师指导资源', '防范学生作弊行为'],
    governmentStance: '支持合理利用AI防止作弊',
    oppositionStance: '关注AI作弊风险与监管',
    controversyLevel: 3,
    policySignal: '推动AI教育规范与防作弊',
    notableQuote:
      'ChatGPT can be a useful tool for learning only when students have mastered basic concepts and thinking skills.',
    summary: `19
Dr Tan Wu Meng
asked the Minister for Education (a) whether artificial intelligence (AI) technologies such as ChatGPT are expected to affect student coursework and open-book assessments and, if so, how; (b) what challenges and opportunities exist in the educational and skills landscape due to the rise of such AI; and (c) what is being done to inculcate life skills, soft skills, and other competencies so that human workers can remain competitive and relevant amidst a landscape encompassing international competition and AI advancements.
20
Dr Wan Rizal
asked the Minister for Education (a) whe`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=oral-answer-3032',
  },
  {
    id: 'written-answer-12692',
    title: `Ensuring Integrity of Online Examinations and Assignments Given Availability of Artificial Intelligence Technologies`,
    zhTitle: `保障在线考试诚信`,
    date: '2023-02-06',
    parliament: '14',
    type: 'Written Answers to Questions',
    speakers: ['Chan Chun Sing', 'Melvin Yong Yik Chye'],
    topics: ['AI Governance & Regulation', 'AI Safety & Ethics', 'AI in Education', 'AI & National Security'],
    zhSummary: `质询关注AI技术（如ChatGPT）对学生在线考试和作业诚信的影响，政府回应强调技术既带来机遇也有挑战，学校和高等院校通过明确规则、监考措施及多元评估防范学术不端，持续教育学生诚信重要性，并将随AI发展调整应对策略。核心争议在于如何平衡AI辅助学习与防止作弊。`,
    keyPoints: ['AI既是机遇也是挑战', '严格监考防止作弊', '多元评估识别异常'],
    governmentStance: '支持利用AI同时防范学术不端',
    oppositionStance: '关注AI对考试诚信影响',
    controversyLevel: 2,
    policySignal: '加强学术诚信与AI监管',
    notableQuote:
      'ChatGPT and similar generative artificial intelligence (AI) tools present both opportunities and challenges for teaching and learning.',
    summary: `20
Mr Melvin Yong Yik Chye
asked the Minister for Education with the advent of ChatGPT and other artificial intelligence technologies readily available to students of all levels, what safeguards will schools and educators put in place to ensure the integrity of online examinations and assignments.
Mr Chan Chun Sing
: As with any technology, ChatGPT and similar generative artificial intelligence (AI) tools present both opportunities and challenges for teaching and learning. When used judiciously, these tools can help teachers in the planning and delivery of lessons and can support students in t`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-12692',
  },
  {
    id: 'written-answer-12075',
    title: `Impact of Malaysia's Intended Legal Action at ICJ on Singapore's Development Plans In and Around Pedra Branca`,
    zhTitle: `马来西亚诉讼对新加坡珊瑚礁影响`,
    date: '2022-11-09',
    parliament: '14',
    type: 'Written Answers to Questions',
    speakers: ['Gerald Giam Yean Song', 'Vivian Balakrishnan'],
    topics: ['AI Governance & Regulation', 'AI Infrastructure & Research', 'AI Strategy'],
    zhSummary: `质询马来西亚拟在国际法院继续诉讼是否影响新加坡珊瑚礁开发。外交部长回应称2008年判决终局且时效已过，未收到马方具体诉讼细节。新加坡准备应对任何法律行动，开发活动均符合法律，核心争议在于主权维护与法律程序时效。`,
    keyPoints: ['2008年判决终局', '诉讼时效已过', '开发符合法律'],
    governmentStance: '坚定维护珊瑚礁主权',
    oppositionStance: '关注法律诉讼影响',
    controversyLevel: 2,
    policySignal: '坚持国际法与主权维护',
    notableQuote: 'Singapore stands ready to deal with whatever legal action Malaysia may pursue.',
    summary: `3
Mr Gerald Giam Yean Song
asked the Minister for Foreign Affairs (a) whether Malaysia's intention to continue legal action at the International Court of Justice in the case concerning Singapore's sovereignty over Pedra Branca, Middle Rocks and South Ledge impacts Singapore's existing and planned development and land reclamation works in and around Pedra Branca; and (b) if so, how.
Dr Vivian Balakrishnan
: After the International Court of Justice's (ICJ’s) judgment in 2008 awarding sovereignty over Pedra Branca to Singapore, both Singapore and Malaysia publicly announced that they will accept`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-12075',
  },
  {
    id: 'oral-answer-2914',
    title: `Successful Implementation of Age Verification for Joining Social Media Platforms`,
    zhTitle: `社交媒体年龄验证实施情况`,
    date: '2022-10-05',
    parliament: '14',
    type: 'Oral Answers to Questions',
    speakers: [
      'Janil Puthucheary',
      'Melvin Yong Yik Chye',
      'Senior Minister of State for Communications and Information',
    ],
    topics: ['AI Safety & Ethics', 'AI in Education', 'AI & National Security', 'AI Infrastructure & Research'],
    zhSummary: `质询涉及是否设定社交媒体最低年龄限制及借鉴海外年龄验证经验。政府回应指出现行多数平台要求13岁以上注册，采用AI等技术检测未成年账户，但年龄验证技术难度大且涉及儿童数据保护问题。政府将推行线上安全行为守则，强化对年轻用户保护，同时鼓励家长积极引导。核心争议在于年龄验证技术的可行性与数据隐私保护的平衡。`,
    keyPoints: ['多数平台要求13岁以上', 'AI技术辅助年龄检测', '数据保护与技术难题'],
    governmentStance: '支持技术与守则并行保护青少年',
    oppositionStance: '鼓励家长积极引导孩子',
    controversyLevel: 3,
    policySignal: '推行线上安全守则强化保护',
    notableQuote:
      'Age verification, to a high degree of certainty, is technically difficult and the technology continues to evolve.',
    summary: `7
Mr Melvin Yong Yik Chye
asked the Minister for Communications and Information (a) whether the Ministry is considering a minimum age limit for children to join social media platforms, to mitigate the potential harm that social media sites can cause on young children; and (b) whether the Ministry has studied any overseas jurisdictions that have successfully implemented age verification for the use of social media platforms.
The Senior Minister of State for Communications and Information (Dr Janil Puthucheary) (for the Minister for Communications and Information)
: Sir, currently, most major so`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=oral-answer-2914',
  },
  {
    id: 'budget-1862',
    title: `Committee of Supply – Head Q (Ministry of Communications and Information)`,
    zhTitle: `数字转型与包容性平衡`,
    date: '2022-03-04',
    parliament: '14',
    type: 'Budget',
    speakers: [
      'Baey Yam Keng',
      'Christopher de Souza',
      'Don Wee',
      'Eric Chua',
      'Hany Soh',
      'Jessica Tan Soon Neo',
      'Leong Mun Wai',
      'Mariam Jaafar',
      'Minister for Communications and Information',
      'Minister of State for Communications and Information',
      'Mohd Fahmi Aliman',
      'Parliamentary Secretary to the Minister for Communications and Information',
      'Pritam Singh',
      'Seah Kian Peng',
      'Senior Minister of State for Communications and Information',
      'Shahira Abdullah',
      'Sharael Taha',
      'Shawn Huang Wei Zhong',
      'Tin Pei Ling',
      'Wan Rizal',
      'Xie Yao Quan',
    ],
    topics: [
      'AI Governance & Regulation',
      'AI Economy & Industry',
      'AI & National Security',
      'AI Infrastructure & Research',
    ],
    zhSummary: `议员质询政府如何在推动数字基础设施和技术创新（如6G、Web 4.0）的同时，保障弱势群体数字包容，防止数字鸿沟扩大。关注数字监管的及时性与适度性，尤其是加密货币和元宇宙等新兴领域的风险与机遇。政府需在经济活力与社会凝聚力之间寻求平衡，确保全民赋能与安全防护。`,
    keyPoints: ['数字基础设施领先布局', '数字包容防止边缘化', '数字监管需及时适度'],
    governmentStance: '推动技术创新与包容发展并重',
    oppositionStance: null,
    controversyLevel: 3,
    policySignal: '强化数字包容与监管创新',
    notableQuote: 'Singapore has to continually invest in next bound infrastructure and our people.',
    summary: `The Chairman
: Head Q, Ministry of Communications and Information. Ms Tin Pei Ling.
Balancing Competing Considerations
Ms Tin Pei Ling (MacPherson)
: Mr Chairman, I beg to move, "That the total sum to be allocated for Head Q of the Estimates by reduced by $100."
Singapore is progressing surely and steadily in our digital transformation. With this comes several competing considerations that we need to balance.
On the one hand, for survival and to keep relevant, Singapore has to continually invest in next bound infrastructure and our people. When others look at 5G, we must look at 6G and when ot`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-1862',
  },
  {
    id: 'budget-1851',
    title: `Committee of Supply – Head J (Ministry of Defence)`,
    zhTitle: `国防部医疗分类系统优化`,
    date: '2022-03-03',
    parliament: '14',
    type: 'Budget',
    speakers: [
      'Chong Kee Hiong',
      'Denise Phua Lay Peng',
      'Don Wee',
      'Kwek Hian Chuan Henry',
      'Lim Biow Chuan',
      'Minister for Defence',
      'Miss Rachel Ong',
      'Mohd Fahmi Aliman',
      'Seah Kian Peng',
      'Senior Minister of State for Defence',
      'Vikram Nair',
      'Wan Rizal',
      'Yeo Wan Ling',
      'Zhulkarnain Abdul Rahim',
    ],
    topics: ['AI & Employment', 'AI in Healthcare', 'AI & National Security', 'AI in Public Sector'],
    zhSummary: `议员质询国防部关于更新医疗分类系统的进展，关注如何实现更全面的服役能力评估及岗位匹配。政府回应该系统旨在提升人力资源运用效率，结合服役者技能与职业背景。核心争议在于如何确保评估的全面性及实际部署中技能的合理匹配。`,
    keyPoints: ['医疗分类系统更新', '服役能力全面评估', '技能与岗位匹配'],
    governmentStance: '优化国防人力资源配置，提升服役效率',
    oppositionStance: '关注评估全面性及技能匹配合理性',
    controversyLevel: 3,
    policySignal: '推动服役人员能力精准匹配',
    notableQuote:
      'The review will focus on the operational effectiveness of each individual instead of a binary classification.',
    summary: `[(proc text) Head J (cont) – (proc text)]
[(proc text) Resumption of Debate on Question [2 March 2022], (proc text)]
[(proc text) "That the total sum to be allocated for Head J of the Estimates be reduced by $100." – [Mr Vikram Nair]. (proc text)]
[(proc text) Question again proposed. (proc text)]
The Chairman
: Mr Alex Yam. Not here. Mr Mohd Fahmi Bin Aliman.
Medical Classification System
Mr Mohd Fahmi Bin Aliman (Marine Parade)
: Chairman, at the COS debate last year, the Minister for Defence mentioned that the Singapore Armed Forces (SAF) would use, update and refresh the medical classifica`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-1851',
  },
  {
    id: 'budget-1846',
    title: `Committee of Supply – Head J (Ministry of Defence)`,
    zhTitle: `国防预算与安全挑战`,
    date: '2022-03-02',
    parliament: '14',
    type: 'Budget',
    speakers: [
      'Ang Wei Neng',
      'Dennis Tan Lip Fong',
      'Desmond Choo',
      'Don Wee',
      'Kwek Hian Chuan Henry',
      'Minister for Defence',
      'Patrick Tay Teck Guan',
      'Saktiandi Supaat',
      'Shawn Huang Wei Zhong',
      'Vikram Nair',
      'Zhulkarnain Abdul Rahim',
    ],
    topics: [
      'AI Governance & Regulation',
      'AI & National Security',
      'AI Infrastructure & Research',
      'Deepfakes & Disinformation',
    ],
    zhSummary: `议员质询国防预算，强调俄乌战争暴露小国自卫重要性及信息战威胁。辩论聚焦地缘政治紧张、技术竞争及网络信息战的安全影响。政府回应强调加强自卫能力与技术防御，核心争议在于如何平衡预算与应对新兴安全威胁。`,
    keyPoints: ['小国自卫重要性', '信息战与假旗行动', '美中技术竞争加剧'],
    governmentStance: '加强国防与技术防御能力',
    oppositionStance: '预算应更审慎分配',
    controversyLevel: 3,
    policySignal: '强化国防科技与信息安全',
    notableQuote: 'We cannot assume other countries will come to our assistance when we are at war.',
    summary: `The Chairman
: Head J, Ministry of Defence. Mr Vikram Nair.
Security Trends and SAF's Priorities
Mr Vikram Nair (Sembawang)
: Chairman, I beg to move "That the total sum to be allocated for Head J of the Estimates be reduced by $100".
We live in a dangerous world. In the past week, we have witnessed Russia's invasion of Ukraine, the largest war on the European continent since World War II. The signs of this conflict had been brewing for a long time. The Russian troop build-up along the Ukrainian border had taken place over many months and various NATO countries, including the US, had anticipat`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-1846',
  },
  {
    id: 'written-answer-9674',
    title: `Ensuring Formidable and Mission-ready Singapore Armed Forces Using Technological Advancement`,
    zhTitle: `科技助力国防应对少子化`,
    date: '2022-01-11',
    parliament: '14',
    type: 'Written Answers to Questions',
    speakers: ['Christopher de Souza', 'Ng Eng Hen'],
    topics: ['AI & National Security', 'AI Strategy'],
    zhSummary: `议员质询新加坡低生育率对武装部队兵力的影响，国防部长回应指出，国防部早已将人力需求纳入战略规划，通过技术提升兵力效能，如自动化雷达、无人舰艇及AI应用，持续优化人力资源，确保国防力量不因兵源减少而削弱。`,
    keyPoints: ['低生育率影响兵力', '技术提升人力效率', '持续优化作业流程'],
    governmentStance: '通过技术创新保障国防实力',
    oppositionStance: '关注少子化对兵力影响',
    controversyLevel: 2,
    policySignal: '推动AI与自动化军事应用',
    notableQuote:
      'The SAF will have to incorporate advancements in robotics, data analytics and artificial intelligence (AI) to further improve its work processes and raise productivity.',
    summary: `2
Mr Christopher de Souza
asked the Minister for Defence in light of the falling total fertility rate in Singapore to 1.1 in 2020, how will the Singapore Armed Forces use technological advancement to ensure its forces continue to be formidable and mission-ready.
Dr Ng Eng Hen
: MINDEF agrees with the hon Member Christopher de Souza that Singapore's low fertility rates represent a significant structural challenge to SAF in maintaining a strong national defence. SAF has indeed recognised this as a core challenge some three decades ago by incorporating manpower requirements for all operations as`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-9674',
  },
  {
    id: 'written-answer-9318',
    title: `Initiatives to Develop Artificial Intelligence Ecosystem and Its Deployment in Singapore`,
    zhTitle: `新加坡人工智能生态建设举措`,
    date: '2021-11-02',
    parliament: '14',
    type: 'Written Answers to Questions',
    speakers: ['Josephine Teo', 'Shawn Huang Wei Zhong'],
    topics: ['AI Safety & Ethics', 'AI Economy & Industry', 'AI in Education', 'AI in Healthcare'],
    zhSummary: `议员质询新加坡通讯与资讯部关于发展人工智能生态系统及其应用的举措。政府回应介绍了国家人工智能战略及五大国家AI项目，强调通过产学研合作、资金投入及人才培养推动AI创新与应用，同时注重AI治理与国际合作。核心争议点在于如何平衡技术发展与伦理监管，确保AI安全可信。`,
    keyPoints: ['国家人工智能战略', '五大国家AI项目', 'AI治理与国际合作'],
    governmentStance: '推动AI创新应用与安全监管并重',
    oppositionStance: null,
    controversyLevel: 2,
    policySignal: '加强AI研发与治理框架',
    notableQuote:
      'The National Artificial Intelligence (AI) Strategy outlines our plans for Singapore to be a leader in developing and deploying scalable, impactful AI solutions.',
    summary: `36
Mr Shawn Huang Wei Zhong
asked the Minister for Communications and Information what are the initiatives undertaken by the Ministry to develop the artificial intelligence ecosystem and its deployment in Singapore.
Mrs Josephine Teo
: The National Artificial Intelligence (AI) Strategy outlines our plans for Singapore to be a leader in developing and deploying scalable, impactful AI solutions, in key sectors of high value and relevance to our citizens and businesses, by 2030.
Under the Strategy, five National AI Projects in logistics, smart estates, education, healthcare and border security, a`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-9318',
  },
  {
    id: 'written-answer-8049',
    title: `Update on Progress of Adaptive Learning Initiative in Schools`,
    zhTitle: `学校自适应学习计划进展`,
    date: '2021-07-05',
    parliament: '14',
    type: 'Written Answers to Questions',
    speakers: ['Chan Chun Sing', 'Shawn Huang Wei Zhong'],
    topics: ['AI in Education', 'AI Infrastructure & Research', 'AI Strategy'],
    zhSummary: `质询聚焦于学校自适应学习计划的最新进展、试点安排及基础设施建设。教育部长回应称该计划是国家AI战略的一部分，强调教师核心作用，计划2022年先在部分学校试点数学科目，后续将推广至更多科目和年级。系统将整合入新加坡学生学习空间，确保便捷访问和资源融合。核心争议点在于如何平衡技术与教师角色，以及试点成效如何影响推广。`,
    keyPoints: ['AI支持个性化学习', '2022年数学试点启动', '整合国家在线平台'],
    governmentStance: '推动AI辅助教学，重视教师作用',
    oppositionStance: '关注试点及基础设施需求',
    controversyLevel: 2,
    policySignal: '推进AI教育系统建设',
    notableQuote:
      'The system will use machine learning to tell how each student responds to learning materials and activities, and customise learning for each student.',
    summary: `39
Mr Shawn Huang Wei Zhong
asked the Minister for Education (a) whether he will provide an update on the progress of the adaptive learning initiative in schools; (b) whether there are pilot programmes planned in schools which will facilitate the adaptive learning initiative; and (c) what infrastructure developments are necessary to be undertaken in schools that will facilitate adaptive learning.
Mr Chan Chun Sing
: Developing an AI-enabled adaptive learning system to support teaching and learning in our schools is part of MOE’s plans under Singapore’s National AI Strategy. This approach compl`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-8049',
  },
  {
    id: 'budget-1605',
    title: `Committee of Supply – Head Q (Ministry of Communications and Information)`,
    zhTitle: `新加坡数字人才与性别多样性`,
    date: '2021-03-02',
    parliament: '14',
    type: 'Budget',
    speakers: [
      'Alex Yam',
      'Cheng Hsing Yao',
      'Christopher de Souza',
      'Don Wee',
      'Edward Chia Bing Hui',
      'Eric Chua',
      'Hany Soh',
      'Jessica Tan Soon Neo',
      'Liang Eng Hwa',
      'Mariam Jaafar',
      'Minister for Communications and Information',
      'Miss Cheng Li Hui',
      'Nadia Ahmad Samdin',
      'S Iswaran',
      'Saktiandi Supaat',
      'Seah Kian Peng',
      'Senior Minister of State for Communications and Information',
      'Shahira Abdullah',
      'Sharael Taha',
      'Shawn Huang Wei Zhong',
      'Sim Ann',
      'Sitoh Yih Pin',
      'Sylvia Lim',
      'Tin Pei Ling',
      'Xie Yao Quan',
    ],
    topics: ['AI Economy & Industry', 'AI & Employment', 'AI Infrastructure & Research', 'AI in Public Sector'],
    zhSummary: `议员质询政府如何培养数字领导人才及推动女性进入科技领域，建议设立导师计划并关注性别比例失衡。政府已推出多项人才培养计划，但具体针对数字领导和女性参与的措施尚未明确。核心争议在于如何有效吸引和留住高端科技人才及缩小性别差距。`,
    keyPoints: ['数字人才培养', '导师计划建议', '女性科技参与'],
    governmentStance: '已推多项人才计划，关注技能提升',
    oppositionStance: '建议设立导师计划，促进女性参与',
    controversyLevel: 2,
    policySignal: '加强数字人才培养与性别多样性',
    notableQuote: 'We need data to innovate and we need people to get things done.',
    summary: `The Chairman
: Head Q, Ministry of Communications and Information. Ms Tin Pei Ling.
Industry Capabilities and Leaders
Ms Tin Pei Ling (MacPherson)
: Chairman, I beg to move, "That the total sum to be allocated for Head Q of the Estimates be reduced by $100".
Sir, Singapore has great ambitions to achieve a thriving digital economy and Smart Nation. Talent and data are, in my opinion, the most basic yet most important success factors. We need data to innovate and we need people to get things done.
In my Budget debate speech in February 2020, I talked about the need for a high concentration of sk`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-1605',
  },
  {
    id: 'oral-answer-2352',
    title: `Legal Provisions and Safeguards in Using TraceTogether Data`,
    zhTitle: `TraceTogether数据使用法律保障`,
    date: '2021-01-04',
    parliament: '14',
    type: 'Oral Answers to Questions',
    speakers: ['Christopher de Souza', 'Desmond Tan', 'Gerald Giam Yean Song', 'Minister of State for Home Affairs'],
    topics: ['AI Governance & Regulation', 'AI & National Security', 'AI in Public Sector', 'AI Strategy'],
    zhSummary: `议员质询TraceTogether数据是否会用于刑事调查及相关法律保障。政府回应称警方可依刑事程序法获取数据，且设有严格访问权限和处罚措施保护数据安全。争议焦点在于数据是否仅限于防疫用途，及使用于刑事调查是否影响公众信任和应用率。`,
    keyPoints: ['警方可依法获取数据', '数据访问权限严格', '担忧影响公众信任'],
    governmentStance: '数据仅限授权用途，严防滥用',
    oppositionStance: '担忧隐私保护与信任下降',
    controversyLevel: 4,
    policySignal: '强化数据使用法律监管',
    notableQuote:
      'The Government is the custodian of the TT data submitted by individuals, and stringent measures are in place to safeguard this personal data.',
    summary: `15
Mr Christopher de Souza
asked the Minister for Home Affairs whether TraceTogether data will be used for criminal investigations and, if so, what are the legal provisions and safeguards in using such data.
The Minister of State for Home Affairs (Mr Desmond Tan) (for the Minister for Home Affairs)
: Mr Speaker, the Singapore Police Force is empowered under the Criminal Procedure Code or CPC to obtain any data, including TraceTogether or TT data, for criminal investigations.
The Government is the custodian of the TT data submitted by individuals, and stringent measures are in place to safeguar`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=oral-answer-2352',
  },
  {
    id: 'written-answer-6772',
    title: `Use of CPF Contribution History in 2020 as Alternative Criteria to Determine Eligibility for GST Vouchers`,
    zhTitle: `以2020年CPF记录评估GST券资格`,
    date: '2020-11-04',
    parliament: '14',
    type: 'Written Answers to Questions',
    speakers: ['Heng Swee Keat', 'Leon Perera'],
    topics: ['AI Economy & Industry', 'AI & Employment', 'AI in Public Sector'],
    zhSummary: `议员质询是否可用2020年CPF缴纳记录替代2018年收入等标准，尤其关注自雇人士低收入情况。政府回应称，GST券资格以综合评估收入为准，CPF记录仅反映部分收入，且已有灵活申诉机制和疫情专项补助，确保援助精准。核心争议点在于是否应调整资格标准以反映疫情影响。`,
    keyPoints: ['GST券支持中低收入户', '资格以综合收入评估', 'CPF记录覆盖有限收入'],
    governmentStance: '坚持综合收入标准，兼顾灵活申诉',
    oppositionStance: '建议用2020年CPF记录评估资格',
    controversyLevel: 3,
    policySignal: '强化收入评估与灵活援助机制',
    notableQuote:
      "AI is more comprehensive, and is a better reflection of an individual's means and income, regardless of source.",
    summary: `1
Mr Leon Perera
asked the Deputy Prime Minister and Minister for Finance in light of the effect of the COVID-19 pandemic on incomes in 2020, whether the Government will consider (i) using Singaporean citizens' CPF contribution history in 2020 as an alternative criteria to the current criteria of income earned in 2018, annual value of home, and HDB flat type to determine their eligibility for GST Vouchers and (ii) allowing self-employed persons who are not mandatorily subject to the CPF contribution scheme and who are receiving no or low income in 2020 to receive GST vouchers through reporting`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-6772',
  },
  {
    id: 'oral-answer-2283',
    title: `Training for Public Service Staff in Procurement and Measures to Tackle Recurrent IT Lapses Highlighted in Auditor-General's Reports`,
    zhTitle: `公共采购培训与IT漏洞应对`,
    date: '2020-10-05',
    parliament: '14',
    type: 'Oral Answers to Questions',
    speakers: ['Alex Yam', 'Liang Eng Hwa', 'Second Minister for Finance'],
    topics: ['AI Governance & Regulation', 'AI in Public Sector'],
    zhSummary: `议员质询政府公务员在采购流程培训及IT控制漏洞问题，关注是否有定期培训及系统性问题。政府回应承认审计报告指出的IT控制薄弱环节，说明政府IT系统复杂且分散，依赖人工调整权限易出错，正由智慧国与数字政府组推动自动化改进，逐步部署新工具以减少错误。`,
    keyPoints: ['公务员采购培训问题', 'IT权限管理漏洞', '推动自动化改进'],
    governmentStance: '重视审计意见，推动系统自动化',
    oppositionStance: '关注培训及系统性漏洞',
    controversyLevel: 2,
    policySignal: '推进政府IT系统自动化',
    notableQuote: 'Actions have been taken at the whole-of-Government level to address the gaps identified.',
    summary: `25
Mr Alex Yam
asked the Deputy Prime Minister and Minister for Finance in view of the weak links highlighted annually in the Auditor-General's Reports (a) how does the Civil Service ensure that officers are adequately trained and supervised to meet the Government's procurement processes; and (b) whether officers handling tenders have to attend regular refresher courses to stay abreast with new regulations and processes.
26
Mr Liang Eng Hwa
asked the Deputy Prime Minister and Minister for Finance in view of the recurring lapses in IT controls highlighted in the latest Auditor-General's Report,`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=oral-answer-2283',
  },
  {
    id: 'written-answer-5800',
    title: `Consideration to Formulate Regulations Binding on Artificial Intelligence Systems Deployed Locally`,
    zhTitle: `本地AI系统监管考量`,
    date: '2020-03-04',
    parliament: '13',
    type: 'Written Answers to Questions',
    speakers: ['S Iswaran]', '[Mr Leon Perera'],
    topics: ['AI Governance & Regulation', 'AI Safety & Ethics', 'AI Economy & Industry', 'AI & National Security'],
    zhSummary: `议员质询政府是否考虑制定对本地部署AI系统具有约束力的法规，以确保AI的伦理和安全使用。政府回应称AI技术尚处于初期阶段，暂无立即立法计划，但已推出多项举措促进安全和伦理使用，包括模型治理框架、伦理咨询委员会及相关研究项目，并强调将持续关注全球动态，平衡监管与创新。`,
    keyPoints: ['暂无立即立法计划', '推行模型治理框架', '持续监测全球动态'],
    governmentStance: '暂不立法，推动伦理治理',
    oppositionStance: '建议制定约束性法规',
    controversyLevel: 2,
    policySignal: '强化伦理治理框架',
    notableQuote:
      'As AI technology is still nascent, MCI does not have immediate plans to introduce new laws to regulate AI.',
    summary: `4
Mr Leon Perera
asked the Minister for Communications and Information whether the Government is considering formulating regulations binding on artificial intelligence (AI) systems deployed locally so as to ensure the ethical and safe use of AI.
Mr S Iswaran
: As AI technology is still nascent, MCI does not have immediate plans to introduce new laws to regulate AI.
However, MCI has launched several initiatives to ensure the safe and ethical use of AI, and to promote consumer trust and innovation. These include:
(a)  A Model AI Governance Framework ("Model Framework") which translates ethical A`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-5800',
  },
  {
    id: 'budget-1313',
    title: `Committee of Supply – Head Q (Ministry of Communications and Information)`,
    zhTitle: `数字化与AI治理议题质询`,
    date: '2020-03-03',
    parliament: '13',
    type: 'Budget',
    speakers: [
      'Cedric Foo Chee Keng',
      'Cedric Foo Chee Keng (Pioneer)]',
      'Darryl David',
      'Douglas Foo',
      'Janil Puthucheary',
      'Lim Sun Sun',
      'Minister for Communications and Information',
      'Mohamed Irshad',
      'Ong Teng Koon',
      'Patrick Tay Teck Guan',
      'Pritam Singh',
      'Rahayu Mahzam',
      'S Iswaran',
      'Senior Minister of State for Communications and Information',
      'Sim Ann',
      'Sylvia Lim',
      'Teo Ho Pin',
      'Teo Ser Luck',
      'Tin Pei Ling',
      'Vikram Nair',
      'Yee Chia Hsing',
      '[Mr Ong Teng Koon',
    ],
    topics: ['AI Governance & Regulation', 'AI Economy & Industry', 'AI & Employment', 'AI in Education'],
    zhSummary: `议员质询数字化转型中的数据共享、隐私保护、设计思维创新及AI伦理框架等问题，关注新加坡在数据量不足和中小企业数字化能力上的挑战。政府回应涉及数字贸易协定、数据隐私原则及推动创新的措施，强调制定AI伦理框架。核心争议点在于如何平衡数据共享与隐私保护，以及提升本地企业数字化能力。`,
    keyPoints: ['数字化推动经济转型', '数据共享与隐私权衡', 'AI伦理框架建设'],
    governmentStance: '推动数字贸易协定，制定数据隐私及AI伦理原则',
    oppositionStance: null,
    controversyLevel: 3,
    policySignal: '加强数字贸易与AI伦理监管',
    notableQuote:
      'Traditional factors like land, labour, capital, or ageing population are no longer hard constraints in the digital economy.',
    summary: `Partnering for Digitalisation
Mr Cedric Foo Chee Keng (Pioneer)
: Mr Chairman, I beg to move, "That the total sum to be allocated for Head Q of the Estimates be reduced by $100".
Digitalisation is transforming how people live, work, play and interact. Business enterprises must embrace it to remain relevant. Our future is being shaped by digitalisation in ways unimaginable and at a pace unprecedented.
As a result of the digital economy, many of our top companies in the world are now in the technology space. By market capitalisation, seven out of top 10 companies worldwide are technology compani`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-1313',
  },
  {
    id: 'budget-1306',
    title: `Committee of Supply – Head J (Ministry of Defence)`,
    zhTitle: `国防预算与未来威胁应对`,
    date: '2020-03-02',
    parliament: '13',
    type: 'Budget',
    speakers: [
      'Ang Hin Kee',
      'Arasu Duraisamy',
      'Charles Chong',
      'Chong Kee Hiong',
      'Desmond Choo',
      'Douglas Foo',
      'Heng Chee How',
      'Joan Pereira',
      'Kwek Hian Chuan Henry',
      'Minister for Defence',
      'Mohamad Maliki Bin Osman',
      'Ng Eng Hen',
      'Seah Kian Peng',
      'Senior Minister of State for Defence',
      'Sylvia Lim',
      'Teo Ho Pin',
      'Vikram Nair',
    ],
    topics: ['AI & National Security', 'Deepfakes & Disinformation', 'AI in Public Sector'],
    zhSummary: `议员质询国防预算及新兴威胁应对，强调全球大国竞争及区域不稳定带来的安全挑战。政府回应指出新加坡需通过科技创新和装备升级（如F-35战机）应对人力减少和训练空间有限等问题。核心争议在于如何平衡有限资源与不断演变的安全威胁。`,
    keyPoints: ['全球大国竞争加剧', '区域政治不稳定', '科技创新应对挑战'],
    governmentStance: '推动科技升级，保持防卫能力',
    oppositionStance: '关注预算效率与威胁多样性',
    controversyLevel: 3,
    policySignal: '强化科技驱动国防现代化',
    notableQuote:
      'The only way forward for SAF is to evolve, to invest in technology so that we can do more with less resources.',
    summary: `The Chairman
: Head J, Ministry of Defence, Mr Vikram Nair.
Next Generation SAF
Mr Vikram Nair (Sembawang)
: Chairman, I beg to move, "That the total sum to be allocated for Head J of the Estimates be reduced by $100".
The last year has seen global tensions rise on multiple fronts. The rivalry between China and the US is playing out on many fronts, including the South China Sea, in the context of a trade war and even over the 5G network and the next generation of technologies. The tensions between Russia and the West are also continuing, with President Putin recently declaring he is ready for`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-1306',
  },
  {
    id: 'budget-1308',
    title: `Committee of Supply – Head V (Ministry of Trade and Industry)`,
    zhTitle: `新加坡经济国际化与连接力`,
    date: '2020-03-02',
    parliament: '13',
    type: 'Budget',
    speakers: [
      'Anthea Ong',
      'Assoc Prof Walter Theseira',
      'Charles Chong',
      'Deputy Speaker',
      'Desmond Choo',
      'Douglas Foo',
      'Foo Mee Har',
      'Joan Pereira',
      'Kwek Hian Chuan Henry',
      'Lee Yi Shyan',
      'Leon Perera',
      'Liang Eng Hwa',
      'Lim Biow Chuan',
      'Miss Cheryl Chan Wei Ling',
      'Saktiandi Supaat',
      'Teo Ser Luck',
    ],
    topics: ['AI Governance & Regulation', 'AI Economy & Industry', 'AI & Employment', 'AI Infrastructure & Research'],
    zhSummary: `议员质询政府在支持企业国际化方面的措施是否充足，特别是在新兴和边缘市场的布局与能力建设。强调疫情凸显市场多元化的重要性，关注政府如何通过经济机构和商会帮助企业应对复杂的国际环境。核心争议点在于政府支持力度及市场多元化策略的有效性。`,
    keyPoints: ['提升市场连接力', '支持企业国际化', '拓展新兴市场'],
    governmentStance: null,
    oppositionStance: '质疑政府支持企业国际化力度',
    controversyLevel: 2,
    policySignal: '强化国际市场多元化',
    notableQuote:
      'We need to continually expand and upgrade our network of trade partnerships and investment agreements.',
    summary: `5.45 pm
Growing Our Economy
Mr Liang Eng Hwa (Holland-Bukit Timah)
: Mr Chairman, Sir, I beg to move, "That the total sum to be allocated for Head V of the Estimates be reduced by $100."
As a small and open economy, Singapore can only be a price-taker in the global marketplace realistically. Staying competitive is a given but that just puts you in the starting line. We need to develop both value-adding capabilities, which I will touch on later, and, equally important, our market connectivity capabilities, so that we can sell our products and services to the consumers of the world. Having both`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-1308',
  },
  {
    id: 'oral-answer-2113',
    title: `Disclosure of Personal Data when Government Addresses Public Complaints`,
    zhTitle: `政府公开投诉个人资料规范`,
    date: '2020-02-03',
    parliament: '13',
    type: 'Oral Answers to Questions',
    speakers: [
      'Anthea Ong',
      'Assoc Prof Walter Theseira',
      'Janil Puthucheary',
      'Janil Puthucheary]',
      '[The Senior Minister of State for Communications and Information',
    ],
    topics: ['AI in Healthcare', 'AI in Public Sector'],
    zhSummary: `质询政府在公众投诉中披露个人资料的考虑和保障措施，政府回应称为纠正错误信息维护公众信任，披露限于必要范围且保护隐私，同时强调多渠道服务保障公众诉求。核心争议在于如何平衡信息公开与个人隐私保护。`,
    keyPoints: ['纠正错误信息', '披露限于必要', '保障公众诉求'],
    governmentStance: '为维护公众信任，必要时披露个人资料',
    oppositionStance: '关注个人隐私保护与公开透明平衡',
    controversyLevel: 3,
    policySignal: '加强个人资料披露规范',
    notableQuote:
      'Government agencies sometimes need to disclose personal data in the public interest, to counter inaccuracies about the Government’s processes or policies.',
    summary: `11
Assoc Prof Walter Theseira
asked the Prime Minister when individuals publicise complaints or petitions to Government agencies which may contain inaccuracies (a) what are the considerations behind whether Government agencies may publicly disclose identifying information and personal details of these individuals; (b) what safeguards exist to ensure that only the minimum personal information is disclosed to establish the facts of the case; and (c) what can be done to ensure that individuals with genuine grievances or unmet needs are not deterred from seeking help publicly
The Senior Minister o`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=oral-answer-2113',
  },
  {
    id: 'written-answer-5627',
    title: `Update on Work of Advisory Council Set Up in 2019 to Promote Ethical Collection and Use of Data Obtained from Persons without Their Knowledge or Consent for Commercial Use`,
    zhTitle: `伦理数据使用咨询会工作汇报`,
    date: '2020-02-03',
    parliament: '13',
    type: 'Written Answers to Questions',
    speakers: ['S Iswaran]', '[Mr Murali Pillai'],
    topics: ['AI Governance & Regulation', 'AI Safety & Ethics', 'AI Economy & Industry', 'AI in Education'],
    zhSummary: `质询关于2018年成立的伦理数据使用咨询会的工作进展。政府回应该咨询会推动了新加坡AI治理框架的制定和推广，促进组织负责任使用AI和数据，提升公众信任。核心争议点在于如何确保数据在未获知情同意情况下的商业使用符合伦理标准。`,
    keyPoints: ['咨询会推动AI治理', '制定模型治理框架', '促进公众信任AI'],
    governmentStance: '支持伦理AI治理，推广模型框架',
    oppositionStance: '关注数据伦理使用进展',
    controversyLevel: 2,
    policySignal: '强化AI伦理治理框架',
    notableQuote:
      'The Advisory Council on the Ethical Use of AI and Data was formed in 2018 to provide guidance to the Government on the responsible development and deployment of AI.',
    summary: `21
Mr Murali Pillai
asked the Minister for Communications and Information whether he can provide an update on the work of the advisory council set up in 2018 to promote the ethical collection and use of data obtained from persons without their specific knowledge or consent for commercial use.
Mr S Iswaran
: The Advisory Council on the Ethical Use of AI and Data was formed in 2018 to provide guidance to the Government on the responsible development and deployment of AI.
It has made a good start in helping organisations improve their AI governance practices. It obtained industry views and advise`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-5627',
  },
  {
    id: 'oral-answer-2047',
    title: `Hiring, Developing and Strengthening Singaporean Core`,
    zhTitle: `强化新加坡科技人才核心`,
    date: '2019-09-02',
    parliament: '13',
    type: 'Oral Answers to Questions',
    speakers: [
      'Chan Chun Sing',
      'Chan Chun Sing]',
      'Patrick Tay Teck Guan',
      'Pritam Singh',
      '[The Minister for Trade and Industry',
    ],
    topics: ['AI Economy & Industry', 'AI Infrastructure & Research', 'AI in Public Sector'],
    zhSummary: `质询方关注在当前经济形势下，Tech@SG计划是否仍需继续以协助科技企业雇佣外籍人才。政府回应强调科技人才短缺的全球竞争，必须加快培养本地科技人才，同时通过培训和教育扩大人才池，确保新加坡在全球科技生态中保持竞争力。核心争议点在于如何平衡引进外籍人才与优先发展本地人才。`,
    keyPoints: ['科技人才全球短缺', '加速本地人才培养', '科技企业需专业人才'],
    governmentStance: '加快培养本地科技人才，保持竞争力',
    oppositionStance: '质疑是否仍需依赖外籍人才',
    controversyLevel: 3,
    policySignal: '优先发展本地科技人才',
    notableQuote: 'If Singapore sits back and does nothing, we will almost certainly be left behind.',
    summary: `13
Mr Patrick Tay Teck Guan
asked the Minister for Trade and Industry in light of the current economic conditions and our focus on hiring, developing and strengthening the Singaporean Core, whether there is a need for the Tech@SG programme which facilitates technology firms in the hiring of foreign talent.
The Minister for Trade and Industry (Mr Chan Chun Sing)
: Mr Speaker, Sir, deep tech industries and companies are the lynchpin for the future economy. Digital technologies have transformed the way we work and live. Today, technology companies are among the fastest growing in the world and oc`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=oral-answer-2047',
  },
  {
    id: 'written-answer-4736',
    title: `Public Agencies’ Exemption from Personal Data Protection Act`,
    zhTitle: `公共机构数据保护免责问题`,
    date: '2019-05-06',
    parliament: '13',
    type: 'Written Answers to Questions',
    speakers: ['Irene Quay Siew Ching', 'Lee Hsien Loong'],
    topics: ['AI Governance & Regulation', 'AI Safety & Ethics', 'AI & National Security', 'AI in Public Sector'],
    zhSummary: `议员质询公共机构是否享有《个人数据保护法》豁免权及其数据泄露责任。政府回应指出公共机构受《公共部门治理法》和《指令手册8》等法规约束，设有刑事处罚和内部纪律处分，并通过技术和管理措施防范数据泄露。核心争议在于公共机构数据保护责任的法律基础及执行力度。`,
    keyPoints: ['公共机构受多法规约束', '刑事及纪律处分并行', '技术管理措施严格'],
    governmentStance: '公共机构严格承担数据保护责任',
    oppositionStance: '质询公共机构免责条款及责任',
    controversyLevel: 3,
    policySignal: '强化公共部门数据安全管理',
    notableQuote:
      'The PSGA criminalises the acts of unauthorised disclosure of data, misuse of data and the re-identification of individuals from anonymised data.',
    summary: `1
Ms Irene Quay Siew Ching
asked the Prime Minister with regard to public agencies' exemption from the Personal Data Protection Act (a) whether he can list out the specific clauses in the current laws and instruction manuals that provide for public agencies' accountability on data breaches (not misuse of data) in public IT systems; and (b) whether he can explain how these clauses in the laws collectively impose a high standard of responsibility on all public agencies.
Mr Teo Chee Hean (for the Prime Minister):
Public agencies and their officers are subject to data protection provisions set out`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-4736',
  },
  {
    id: 'oral-answer-1955',
    title: `Role of Personal Data Protection Commission in Investigating Blood Donors' Data Leak`,
    zhTitle: `个人数据保护调查职能`,
    date: '2019-04-01',
    parliament: '13',
    type: 'Oral Answers to Questions',
    speakers: [
      'Dennis Tan Lip Fong',
      'Edwin Tong Chun Fai',
      'Irene Quay Siew Ching',
      'Minister for Communications and Information',
      'Miss Cheng Li Hui',
      'S Iswaran',
      'Senior Minister of State for Health',
      'Sylvia Lim',
    ],
    topics: ['AI Governance & Regulation', 'AI Economy & Industry', 'AI in Healthcare', 'AI & National Security'],
    zhSummary: `议员质询个人数据保护委员会（PDPC）在血液捐赠者数据泄露事件中的调查职责及公共机构是否应受《个人数据保护法》（PDPA）约束。政府回应PDPC正调查涉事私营IT供应商，公共机构受其他法规监管，数据保护标准不低于PDPA。核心争议在于公共机构是否应免于PDPA监管及其问责机制。`,
    keyPoints: ['PDPC调查私营供应商', '公共机构受别法规监管', '公共机构数据保护标准高'],
    governmentStance: '公共机构受专门法规监管，非PDPA',
    oppositionStance: '质疑公共机构免于PDPA合理性',
    controversyLevel: 3,
    policySignal: '强化公共机构数据保护监管',
    notableQuote:
      'Public sector agencies have to comply with the Government Instruction Manuals and the Public Sector (Governance) Act.',
    summary: `13
Ms Sylvia Lim
asked the Minister for Communications and Information regarding the recent data leak of more than 800,000 blood donors' personal information from the database of HSA (a) what is the role of the Personal Data Protection Commission in investigating this incident; and (b) whether any review is being done to ascertain whether HSA has acted reasonably in protecting the personal data including whether the contractual obligations between HSA and its IT vendor reasonably safeguarded the personal information entrusted to these parties.
14
Ms Irene Quay Siew Ching
asked the Minister for`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=oral-answer-1955',
  },
  {
    id: 'budget-1131',
    title: `Committee of Supply - Head Q (Ministry of Communications and Information)`,
    zhTitle: `推动企业数字化转型`,
    date: '2019-03-04',
    parliament: '13',
    type: 'Budget',
    speakers: [
      'Assoc Prof Daniel Goh Pei Siong',
      'Cedric Foo Chee Keng',
      'Chairman]',
      'Darryl David',
      'Douglas Foo',
      'Janil Puthucheary',
      'Leon Perera',
      'Lim Sun Sun',
      'Low Thia Khiang',
      'Minister for Communications and Information',
      'Mohamed Irshad',
      'Ong Teng Koon',
      'Rahayu Mahzam',
      'S Iswaran',
      'Senior Minister of State for Communications and Information',
      'Sim Ann',
      'Sylvia Lim',
      'Teo Ho Pin',
      'Teo Ser Luck',
      'Tin Pei Ling',
      'Vikram Nair',
      '[Ms Sim Ann',
    ],
    topics: ['AI Safety & Ethics', 'AI Economy & Industry', 'AI & Employment', 'AI Infrastructure & Research'],
    zhSummary: `议员质询新加坡企业，尤其是中小企业在数字化转型中的挑战，关注如何帮助企业克服资金、技术和人才适应等问题。政府强调数字经济对提升生产力和应对人口老龄化的重要性，支持企业创新与能力建设。核心争议点在于中小企业数字化的实际困难及政府支持的有效性。`,
    keyPoints: ['数字经济促进生产力', '中小企业数字化难题', '人口老龄化带来压力'],
    governmentStance: '支持企业数字化转型，提供资金与技术援助',
    oppositionStance: null,
    controversyLevel: 2,
    policySignal: '推动中小企业数字化升级',
    notableQuote: 'Digitalisation is transforming companies, economies and our very way of life.',
    summary: `The Chairman
: Head Q, Ministry of Communications and Information. Mr Cedric Foo.
Digital Economy
–
For Businesses
Mr Cedric Foo Chee Keng (Pioneer)
: Mr Chairman, Sir, I beg to move, "That the total sum to be allocated for Head Q of the Estimates be reduced by $100".
One of the basic building blocks of a strong nation is a vibrant economy. An economy that is driven by competitive companies with skilled and creative employees, and underpinned by an efficient infrastructure. Strong business and productivity growth are pre-conditions for higher wages for our workers. Hence, it is critically impo`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-1131',
  },
  {
    id: 'budget-1120',
    title: `Committee of Supply – Head J (Ministry of Defence)`,
    zhTitle: `国防预算与区域安全合作`,
    date: '2019-03-01',
    parliament: '13',
    type: 'Budget',
    speakers: [
      'Heng Chee How',
      'Minister for Defence',
      'Mohamad Maliki Bin Osman',
      'Ng Eng Hen',
      'Pritam Singh',
      'Senior Minister of State for Defence',
      'Tan Chuan-Jin',
      'Vikram Nair',
    ],
    topics: ['AI & National Security', 'AI in Public Sector'],
    zhSummary: `议员质询国防预算及安全部署，政府回应强调新加坡在国际重大活动中加强安保，部署大量军力保障安全，并推动区域反恐合作。核心争议点在于国防开支的合理性及应对新兴安全威胁的能力。`,
    keyPoints: ['国防预算获跨党派支持', '重大国际活动强化安保', '推动区域反恐信息共享'],
    governmentStance: '支持加强国防与区域安全合作',
    oppositionStance: '建议适度调整国防预算',
    controversyLevel: 2,
    policySignal: '强化国防与区域反恐合作',
    notableQuote:
      "It is particularly gratifying and reassuring for our future, for Singapore's future, that despite Defence, Security, Home Affairs and Foreign Affairs accounting for one-third of our expenditure, that we have got support across the aisle.",
    summary: `Head J (cont)
–
[(proc text) Resumption of Debate on Question [28 February 2019], (proc text)]
[(proc text) "That the total sum to be allocated for Head J of the Estimates to be reduced by $100." − [Mr Vikram Nair]. (proc text)]
[(proc text) Question again proposed. (proc text)]
The Chairman
: Minister Ng Eng Hen.
The Minister for Defence (Dr Ng Eng Hen)
: Thank you, Mr Chairman. Let me thank Members for their continued commitment to a strong defence for Singapore.
I note the speeches that many Members in this House have given during the Budget debate. It is particularly gratifying and reassur`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-1120',
  },
  {
    id: 'budget-1114',
    title: `Committee of Supply - Head J (Ministry of Defence)`,
    zhTitle: `国防预算与未来威胁应对`,
    date: '2019-02-28',
    parliament: '13',
    type: 'Budget',
    speakers: [
      'Arasu Duraisamy',
      'Assoc Prof Dr Muhammad Faishal Ibrahim',
      'Charles Chong',
      'Chong Kee Hiong',
      'Community and Youth',
      'Desmond Choo',
      'Fatimah Lateef',
      'Joan Pereira',
      'Kwek Hian Chuan Henry',
      'Miss Cheng Li Hui',
      'Miss Cheng Li Hui (Tampines)]',
      'Muhamad Faisal Bin Abdul Manap',
      'Pritam Singh',
      'Seah Kian Peng',
      'Senior Parliamentary Secretary to the Minister for Culture',
      'Senior Parliamentary Secretary to the Ministers for Education and Minister for Social and Family Development',
      'Senior Parliamentary Secretary to the Ministers for Foreign Affairs and Trade and Industry',
      'Sylvia Lim',
      'Tan Wu Meng',
      'Teo Ho Pin',
      'Vikram Nair',
      'Zainal Sapari',
      '[Mr Kwek Hian Chuan Henry',
    ],
    topics: ['AI & National Security', 'AI in Public Sector'],
    zhSummary: `议员质询新加坡武装部队面临的地缘政治和安全威胁，包括大国竞争、地区紧张局势及恐怖主义威胁。讨论了兵源减少和训练空间受限的挑战，强调需依赖自动化和先进装备提升防御能力。政府回应聚焦提升科技应用以应对新型威胁，核心争议在于如何平衡传统训练与未来科技投入。`,
    keyPoints: ['地缘政治威胁升级', '兵源减少挑战', '依赖自动化装备'],
    governmentStance: '加强科技装备应对未来威胁',
    oppositionStance: '关注预算调整与战略适应性',
    controversyLevel: 3,
    policySignal: '推动国防自动化与智能化',
    notableQuote: 'Our only hope appears to be that if we rely more on automation and sophisticated equipment',
    summary: `The Chairman
: Head J, Ministry of Defence. Mr Vikram Nair.
Future SAF
Mr Vikram Nair (Sembawang)
: Mr Chairman, I beg to move, "That the total sum to be allocated for Head J of the Estimates be reduced by $100".
In 2017, we celebrated 50 years of National Service and Singaporeans of all generations joined in. The SAF has been an integral part of Singapore and we are all either serving National Servicemen or family members of one. Yet, the SAF was set up over 50 years ago and much of the training involved training in jungle warfare which reflected the terrain of our region.
Yet, the nature of`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-1114',
  },
  {
    id: 'budget-1112',
    title: `Committee of Supply − Head U (Prime Minister's Office)`,
    zhTitle: `公共服务数字化转型`,
    date: '2019-02-28',
    parliament: '13',
    type: 'Budget',
    speakers: [
      'Alex Yam',
      'Ang Hin Kee',
      'Anthea Ong',
      'Anthea Ong]',
      'Assoc Prof Daniel Goh Pei Siong',
      'Cedric Foo Chee Keng',
      'Chan Chun Sing',
      'Darryl David',
      'Dennis Tan Lip Fong',
      'Desmond Choo',
      'Fatimah Lateef',
      'Gan Thiam Poh',
      'Government Whip',
      'Janil Puthucheary',
      'Josephine Teo',
      'Lim Wee Kiak',
      'Louis Ng Kok Kwang',
      'Minister for Education',
      'Minister for Foreign Affairs',
      'Minister for Manpower and Second Minister for Home Affairs',
      'Minister for Trade and Industry',
      'Ong Teng Koon',
      'Ong Ye Kung',
      'Patrick Tay Teck Guan',
      'Png Eng Huat',
      'Pritam Singh',
      'Rahayu Mahzam',
      'Saktiandi Supaat',
      'Senior Minister of State for Communications and Information and Transport',
      'Sylvia Lim',
      'Teo Ho Pin',
      'Teo Ser Luck',
      'Tin Pei Ling',
      'Vikram Nair',
      'Vivian Balakrishnan',
      '[Mr Louis Ng Kok Kwang',
    ],
    topics: ['AI Economy & Industry', 'AI & Employment', 'AI in Public Sector'],
    zhSummary: `质询聚焦公共服务如何利用AI和数据分析提升效率，整合服务，满足市民需求。强调技术应以市民为中心，避免机械执法。政府需推动公共部门高科技、高触感和高适应性转型，提升生产力和服务质量。`,
    keyPoints: ['公共服务需数字化转型', '技术应以市民需求为本', 'AI助力提升服务效率'],
    governmentStance: null,
    oppositionStance: '推动公共服务智能化转型',
    controversyLevel: 2,
    policySignal: '推动公共部门智能化升级',
    notableQuote:
      'Technology is a potential game changer that can allow us to overcome our resource constraints and embark on a new S curve in our growth trajectory.',
    summary: `Public Sector Transformation
Mr Patrick Tay Teck Guan (West Coast)
:
Mr Chairman, I beg to move, "That the total sum to be allocated for Head U of the Estimates be reduced by $100."
The global operating environment is evolving rapidly. There are many growth opportunities in Asia, but economic competition is also intensifying and technological changes are reshaping competitive advantages across economies. Domestically, we are faced with an ageing local workforce which can pose constraints on our growth. But not if we can enable our people to learn, unlearn and re-learn to stay employable over a`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-1112',
  },
  {
    id: 'oral-answer-1935',
    title: `Malaysian Government's Detention of Greek Vessel Piraes and Crew`,
    zhTitle: `马来西亚扣押希腊船只事件`,
    date: '2019-02-26',
    parliament: '13',
    type: 'Oral Answers to Questions',
    speakers: ['Assoc Prof Walter Theseira]', '[The Minister for Foreign Affairs'],
    topics: ['AI & National Security', 'AI in Public Sector'],
    zhSummary: `质询马来西亚政府是否在新加坡领海行使主权，以及如何保障新加坡船只不受外国管辖。外交部长回应事件发生在新加坡领海内，新加坡警方在场并记录，马来西亚未在新加坡水域扣押船只，强调不允许外国政府在新加坡水域行使权力。核心争议为外国政府是否有权在新加坡领海执法及新加坡的应对措施。`,
    keyPoints: ['马来西亚未在新加坡水域扣押', '新加坡不容外国行使主权', '船只应听从新加坡海事局'],
    governmentStance: '坚决维护新加坡领海主权',
    oppositionStance: '关注外国船只管辖风险',
    controversyLevel: 3,
    policySignal: '强化领海主权执法',
    notableQuote: 'We will not allow foreign government vessels to assert any authority in our waters.',
    summary: `4
Assoc Prof Walter Theseira
asked the Minister for Foreign Affairs (a) whether the Malaysian government's detention of Greek vessel Piraes and crew, which collided with the Malaysian vessel Polaris in Singapore territorial waters, represents an exercise of foreign sovereignty in Singapore territorial waters; and (b) what measures can be taken to ensure that vessels, crew and passengers, particularly Singapore-flagged, will not be subject to foreign authority whilst in Singapore territorial waters or for acts committed in Singapore territorial waters.
The Minister for Foreign Affairs (Dr Vivia`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=oral-answer-1935',
  },
  {
    id: 'oral-answer-1900',
    title: `Preventive Measures Implemented Following Data Leak Involving Persons with HIV`,
    zhTitle: `HIV数据泄露防范措施`,
    date: '2019-02-12',
    parliament: '13',
    type: 'Oral Answers to Questions',
    speakers: [
      'Anthea Ong',
      'Assoc Prof Daniel Goh Pei Siong',
      'Assoc Prof Walter Theseira',
      'Dennis Tan Lip Fong',
      'Leon Perera',
      'Lim Sun Sun',
      'Png Eng Huat',
      'Seah Kian Peng',
      'Senior Minister of State for Health',
    ],
    topics: ['AI Governance & Regulation', 'AI in Healthcare', 'AI in Public Sector'],
    zhSummary: `议员质询涉及1.42万名HIV患者数据泄露后的具体防范措施，包括数据访问权限、数据泄露追踪、受害者心理保护及社会歧视应对。政府需回应如何防止数据扩散、保障患者权益及维护公众对HIV检测的信任。核心争议点在于数据安全管理漏洞、信息公开透明度及社会歧视问题。`,
    keyPoints: ['加强数据访问控制', '保护患者心理健康', '防止社会歧视扩散'],
    governmentStance: null,
    oppositionStance: '要求透明调查与保护措施',
    controversyLevel: 4,
    policySignal: '强化数据安全与公众教育',
    notableQuote:
      'what specific measures will be taken to reduce the spread of, and access to, the personal data and HIV status of the affected persons',
    summary: `1
Ms Anthea Ong
asked the Minister for Health with the data leak involving 14,200 people with HIV, what specific measures will be taken to (i) reduce the spread of, and access to, the personal data and HIV status of the affected persons (ii) ensure that the psychosocial welfare of these persons are protected in view of the stigmatisation and discrimination that exists at the workplace and in society and (iii) ensure that this incident does not negate years of painstaking efforts in providing a safe climate for people to come forward for HIV testing.
2
Mr Leon Perera
asked the Minister for Heal`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=oral-answer-1900',
  },
  {
    id: 'oral-answer-1902',
    title: `Review of Public Agencies Exemption Provisions in Personal Data Protection Act`,
    zhTitle: `公共机构数据保护豁免审议`,
    date: '2019-02-12',
    parliament: '13',
    type: 'Oral Answers to Questions',
    speakers: ['Minister for Communications and Information', 'S Iswaran', 'Sylvia Lim'],
    topics: ['AI Governance & Regulation', 'AI & National Security', 'AI in Public Sector', 'AI Strategy'],
    zhSummary: `议员质询是否应修订个人数据保护法，取消公共机构豁免条款以应对数据泄露风险。政府回应公共部门已有多重法律和政策保障数据安全，强调公共部门数据管理与私营部门不同，采用不同法律体系，且将持续审视相关法规。核心争议在于公共机构数据保护是否应纳入个人数据保护法统一监管。`,
    keyPoints: ['公共部门数据有多重法律保护', '公共部门数据管理与私营部门不同', '将持续审视相关法律法规'],
    governmentStance: '公共部门数据由多法规保障，维持现行豁免',
    oppositionStance: '建议取消公共机构数据保护豁免',
    controversyLevel: 3,
    policySignal: '持续强化公共部门数据治理',
    notableQuote:
      'Because of these important differences, we need and have adopted different approaches to the protection of personal data in the public and in the private sectors.',
    summary: `12
Ms Sylvia Lim
asked the Minister for Communications and Information given the gravity of data protection breaches in the public sector, whether the Personal Data Protection Act should be amended to remove the exemptions for public agencies.
The Minister for Communications and Information (Mr S Iswaran)
: Mr Speaker, the Personal Data Protection Act (PDPA) came into force in 2012. With the gathering pace of digitalisation, we recognised the need to strengthen data protection in the private sector. The PDPA establishes a baseline standard for data protection in the private sector, balanced ag`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=oral-answer-1902',
  },
  {
    id: 'budget-832',
    title: `Committee of Supply – Head Q (Ministry of Communications and Information)`,
    zhTitle: `新加坡数字经济与公共服务转型`,
    date: '2018-03-06',
    parliament: '13',
    type: 'Budget',
    speakers: [
      'Assoc Prof Dr Yaacob Ibrahim',
      'Chee Hong Tat',
      'Liang Eng Hwa',
      'Minister for Communications and Information',
      'Senior Minister of State for Communications and Information',
      'Senior Minister of State for Communications and Information and Education',
      'Yee Chia Hsing',
      'Zaqy Mohamad',
    ],
    topics: ['AI in Public Sector'],
    zhSummary: `议员质询数字经济发展及公共部门数字化转型，政府回应介绍了数字化提升民众生活便利和企业运营效率的具体案例，强调数字经济和数字素养提升的重要性。辩论聚焦于如何通过技术创新促进经济发展和社会包容，争议较低，更多为政策宣示和成效展示。`,
    keyPoints: ['数字化提升生活便利', '推动数字经济发展', '加强数字素养培训'],
    governmentStance: '积极推动数字经济与全民数字素养',
    oppositionStance: null,
    controversyLevel: 2,
    policySignal: '加快数字经济与公共服务融合',
    notableQuote: 'Digitalisation has created many exciting opportunities and improved Singaporeans’ lives.',
    summary: `Head Q (cont) –
[(proc text) Resumption of Debate on Question [5 March 2018], (proc text)]
[(proc text) "That the total sum to be allocated for Head Q of the Estimates to be reduced by $100." – [Mr Zaqy Mohamad.] (proc text)]
[(proc text) Question again proposed. (proc text)]
The Chairman
: Order. In view of the Statement made in Parliament earlier on and the amount of time used, I will now revise the guillotine time for Head Q – Ministry of Communications and Information to 11.40 am. Hon Members will be notified of the revised conclusion times for the subsequent Heads of Expenditure. Head Q –`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-832',
  },
  {
    id: 'budget-842',
    title: `Committee of Supply – Head Q (Ministry of Communications and Information)`,
    zhTitle: `数字经济与信息产业发展`,
    date: '2018-03-05',
    parliament: '13',
    type: 'Budget',
    speakers: [
      'Assoc Prof Daniel Goh Pei Siong',
      'Cedric Foo Chee Keng',
      'Darryl David',
      'Desmond Choo',
      'Ganesh Rajaram',
      'Low Thia Khiang',
      'Ong Teng Koon',
      'Saktiandi Supaat',
      'Sun Xueling',
      'Teo Ho Pin',
      'Teo Ser Luck',
      'Vikram Nair',
      'Yee Chia Hsing',
      'Zaqy Mohamad',
    ],
    topics: ['AI Economy & Industry', 'AI & Employment', 'AI in Public Sector', 'AI Strategy'],
    zhSummary: `议员质询政府如何推动数字经济发展，特别关注信息通信媒体（ICM）行业的数字化转型、国际化及创新能力。政府介绍了物流、零售等行业的数字化计划及中小企业支持措施，并强调通过人工智能、金融科技等深科技领域推动ICM行业成长。核心争议在于如何更有效帮助本地企业国际化及提升竞争力。`,
    keyPoints: ['数字经济带来机遇', '推动中小企业数字化', '支持ICM行业国际化'],
    governmentStance: '推动数字转型与国际化发展',
    oppositionStance: null,
    controversyLevel: 2,
    policySignal: '深化数字经济与产业升级',
    notableQuote:
      'The Ministry has launched several initiatives to help the various industries transform and thrive in the digital era.',
    summary: `Gearing the Economy for a Digital Future
Mr Zaqy Mohamad (Chua Chu Kang)
: Sir, I beg to move, "That the total sum to be allocated for Head Q of the Estimates be reduced by $100".
Thank you, Sir, for allowing me to speak on the Digital Economy, which presents many opportunities for Singapore and Singaporeans.
We are living in a world where industries and businesses are swarmed by digital disruption. Yet, the infocomm industry and technology-based startups that have emerged could form a key growth sector of our future economy, as it provides good jobs, stronger businesses and a better quality o`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-842',
  },
  {
    id: 'budget-847',
    title: `Committee of Supply – Head J (Ministry of Defence)`,
    zhTitle: `国防预算与安全挑战`,
    date: '2018-03-02',
    parliament: '13',
    type: 'Budget',
    speakers: [
      'Amrin Amin',
      'Assoc Prof Dr Muhammad Faishal Ibrahim',
      'Assoc Prof Fatimah Lateef',
      'Assoc Prof Randolph Tan',
      'Baey Yam Keng',
      'Cedric Foo Chee Keng',
      'Community and Youth',
      'Jessica Tan Soon Neo',
      'Joan Pereira',
      'Lim Wee Kiak',
      'Low Thia Khiang',
      'Low Yen Ling',
      'Minister for Defence',
      'Mohamad Maliki Bin Osman',
      'Ng Eng Hen',
      'Ong Teng Koon',
      'Parliamentary Secretary to the Minister for Culture',
      'Parliamentary Secretary to the Minister for Health and Home Affairs',
      'Pritam Singh',
      'Second Minister for Defence',
      'Senior Minister of State for Defence',
      'Senior Parliamentary Secretaries to the Ministers for Education and Trade and Industry',
      'Senior Parliamentary Secretary to the Ministers for Education and Minister for Social and Family Development',
      'Teo Ho Pin',
      'Teo Ser Luck',
      'Vikram Nair',
      'Zainal Sapari',
    ],
    topics: ['AI Safety & Ethics', 'AI & National Security', 'AI Infrastructure & Research', 'AI in Public Sector'],
    zhSummary: `议员质询新加坡国防预算，强调国防自主的重要性及面临的多元安全威胁，包括恐怖主义、核武风险及网络安全。政府回应需持续投资国防力量和维护国际防务联盟，以应对复杂且不断演变的安全环境。核心争议在于如何平衡有限资源与不断增长的安全需求。`,
    keyPoints: ['国防自主迫切需求', '多元安全威胁增加', '维护国际防务联盟'],
    governmentStance: '持续投资国防与联盟建设',
    oppositionStance: '支持国防预算但关注资源分配',
    controversyLevel: 3,
    policySignal: '加强国防投入与多边合作',
    notableQuote:
      'Singapore needs to be a strong and valued partner in order for other countries to want to form alliances with us.',
    summary: `Defence Spending and Rising Tensions
Mr Vikram Nair (Sembawang)
: Chairman, I beg to move, "That the total sum to be allocated for Head J of the Estimates be reduced by $100".
Singapore's need to develop its own defence capabilities came almost as suddenly as our Independence. Shortly after our Independence, the British forces who had been stationed here announced they would be pulling out ahead of schedule and Singapore would be responsible for its own defence thereafter.
This precipitated the start of National Service in 1967 and the focused development of Singapore’s armed forces. As a smal`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-847',
  },
  {
    id: 'written-answer-4214',
    title: `Profile and Success Rate of Singapore Startups`,
    zhTitle: `新加坡创业青年趋势与成效`,
    date: '2018-02-27',
    parliament: '13',
    type: 'Written Answers to Questions',
    speakers: ['Foo Mee Har', 'S Iswaran'],
    topics: ['AI Economy & Industry', 'AI in Education', 'AI in Public Sector'],
    zhSummary: `质询新加坡年轻人创业趋势及创业公司成功率，政府回应指出本地年轻创业者比例上升，创业意愿增强，创业生态系统稳步发展，且国际排名优异。核心争议在于如何定义创业成功及与其他国家的比较。`,
    keyPoints: ['年轻创业者比例提升', '创业生态持续成长', '国际排名表现良好'],
    governmentStance: '支持创业，营造创新环境',
    oppositionStance: '关注创业成功率及国际对比',
    controversyLevel: 2,
    policySignal: '推动青年创业与创新生态',
    notableQuote: "Singapore's startup ecosystem has seen significant progress over the past decade.",
    summary: `4
Ms Foo Mee Har
asked the Minister for Trade and Industry (Industry) what is Singapore's trend of young people joining startups and the success rate of our startups as compared to that of other countries, including US and Israel.
Mr S Iswaran
: Singapore's startup ecosystem has seen significant progress over the past decade. This is due, in part, to the concerted efforts of the Government, industry and other stakeholders to create an environment that is conducive for innovation and entrepreneurship.
Young Singaporeans increasingly recognise entrepreneurship as a viable career pathway. Between`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-4214',
  },
  {
    id: 'oral-answer-1504',
    title: `Introduction of Regulations with Advent of Artificial Intelligence and Autonomous Machines`,
    zhTitle: `人工智能法规引入讨论`,
    date: '2018-02-06',
    parliament: '13',
    type: 'Oral Answers to Questions',
    speakers: [
      'Janil Puthucheary',
      'Patrick Tay Teck Guan',
      'Senior Minister of State for Communications and Information and Education',
      'Tan Wu Meng',
    ],
    topics: ['AI Governance & Regulation', 'AI Safety & Ethics', 'AI in Education', 'AI & National Security'],
    zhSummary: `议员质询随着人工智能和自动机器的发展，是否会制定新法规或修订现有法律以涵盖伦理、道德、紧急停止装置及责任问题。政府回应强调将采取领域特定的监管策略，举例交通领域的自动驾驶车辆安全测试和保险要求，以及金融领域的算法监管。政府还提到将提升相关技术能力，推动智慧国建设。核心争议在于如何平衡技术发展与风险管理，确保公众利益和安全。`,
    keyPoints: ['领域特定监管策略', '自动驾驶严格安全测试', '持续提升技术能力'],
    governmentStance: '采取领域专属监管，保障安全与责任',
    oppositionStance: '关注伦理、道德及责任问题',
    controversyLevel: 2,
    policySignal: '推动领域差异化AI监管',
    notableQuote: 'The regulatory approach would thus also have to be domain-specific.',
    summary: `7
Mr Patrick Tay Teck Guan
asked the Prime Minister with the advent and drive towards the use of artificial intelligence and autonomous machines, whether new laws and regulations will be promulgated or existing ones reviewed to ensure we address the issues of ethics, morality, provision of kill switches as well as liability.
8
Dr Tan Wu Meng
asked the Prime Minister what policy principles and legal frameworks are being developed to update Singapore's governance and laws to address the issues arising from autonomous algorithms and devices.
The Senior Minister of State for Communications and Inf`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=oral-answer-1504',
  },
  {
    id: 'written-answer-3762',
    title: `Time Spent by Teachers on Marking Assignments and Administrative Work`,
    zhTitle: `教师批改与行政工作时间`,
    date: '2017-08-01',
    parliament: '13',
    type: 'Written Answers to Questions',
    speakers: ['Dennis Tan Lip Fong', 'Ng Chee Meng'],
    topics: ['AI in Education', 'AI in Public Sector'],
    zhSummary: `议员质询教师在批改作业及行政工作上所花时间及减负措施，政府回应强调教师批改作业的重要性，介绍了教学指导及团队合作分担批改工作，同时采用技术自动批改选择题和数字测验，未来将继续推动技术应用与简化流程。核心争议在于如何平衡教师专业职责与减轻工作负担。`,
    keyPoints: ['教师批改作业重要', '团队合作分担批改', '技术辅助自动批改'],
    governmentStance: '支持技术减负并保障教学质量',
    oppositionStance: '关注教师工作负担减轻',
    controversyLevel: 2,
    policySignal: '推动教育技术应用',
    notableQuote:
      'Teachers will deploy technology in assessment work when it is educationally purposeful to support teaching and learning.',
    summary: `28
Mr Dennis Tan Lip Fong
asked the Minister for Education (Schools) (a) what measures have been taken in the last three years to reduce the time spent by teachers on marking assignments and administrative work; and (b) whether the Ministry has considered measures, such as (i) consolidating and centralising tasks, such as marking and (ii) the use of more online tests.
Mr Ng Chee Meng
: The well-being of our teachers is important and we have put in place a set of measures to guide schools in the allocation and management of teachers’ workload, which includes teaching and administrative responsi`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=written-answer-3762',
  },
  {
    id: 'budget-929',
    title: `Committee of Supply − Head J (Ministry of Defence)`,
    zhTitle: `国防预算与安全挑战质询`,
    date: '2017-03-03',
    parliament: '13',
    type: 'Budget',
    speakers: [
      'Amrin Amin',
      'Assoc Prof Fatimah Lateef',
      'Assoc Prof Randolph Tan',
      'Cedric Foo Chee Keng',
      'Community and Youth',
      'Dennis Tan Lip Fong',
      'Jessica Tan Soon Neo',
      'Joan Pereira',
      'Lee Yi Shyan',
      'Low Yen Ling',
      'Minister for Defence',
      'Ng Eng Hen',
      'Parliamentary Secretary to the Minister for Culture',
      'Parliamentary Secretary to the Minister for Home Affairs',
      'Parliamentary Secretary to the Ministers for Trade and Industry and the Ministers for Education',
      'Pritam Singh',
      'Second Minister for Defence',
      'Senior Minister of State for Defence',
      'Teo Ho Pin',
      'Vikram Nair',
      'Zainal Sapari',
    ],
    topics: ['AI & National Security', 'AI Infrastructure & Research', 'AI in Public Sector'],
    zhSummary: `议员质询国防部当前面临的主要安全威胁，包括地区大国冲突、朝鲜核试验、恐怖主义及网络攻击。政府强调多元威胁并重视网络安全，呼吁加强防御能力。核心争议在于如何平衡传统与非传统安全威胁的资源分配及应对策略。`,
    keyPoints: ['地区大国安全威胁', '恐怖主义持续存在', '网络攻击成新挑战'],
    governmentStance: '重视多元安全威胁，强化网络防御',
    oppositionStance: '预算应更审慎，关注威胁多样性',
    controversyLevel: 3,
    policySignal: '加强网络安全防御',
    notableQuote:
      'The security threats we face come from far, wide, in many forms, and MINDEF is very much in the frontline.',
    summary: `The Chairman:
Head J, Ministry of Defence. Mr Vikram Nair.
11.52 am
Our Security Environment
Mr Vikram Nair (Sembawang)
: Madam, I beg to move, "That the total sum to be allocated for Head J of the Estimates be reduced by $100".
This year marks the 75th Anniversary of the fall of Singapore in World War II. The events in the 20 years since that day have marked the tumultuous journey of Singapore to Independence.
Even after Independence, security became one of our concerns and National Service (NS) started shortly after. This year, we also celebrate the 50th Anniversary of NS. Happily, Singapore`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-929',
  },
  {
    id: 'budget-711',
    title: `Committee of Supply – Head J (Ministry of Defence)`,
    zhTitle: `国防预算与安全挑战`,
    date: '2016-04-07',
    parliament: '13',
    type: 'Budget',
    speakers: [
      'Assoc Prof Fatimah Lateef',
      'Baey Yam Keng',
      'Cedric Foo Chee Keng',
      'Jessica Tan Soon Neo',
      'Joan Pereira',
      'Lee Yi Shyan',
      'Lim Wee Kiak',
      'Low Thia Khiang',
      'Low Yen Ling',
      'Minister for Defence',
      'Muhamad Faisal Bin Abdul Manap',
      'Ng Eng Hen',
      'Ong Ye Kung',
      'Parliamentary Secretary to the Minister for Home Affairs',
      'Pritam Singh',
      'Senior Minister of State for Defence',
      'Teo Ho Pin',
      'Vikram Nair',
      'Zainal Sapari',
      'Zaqy Mohamad',
    ],
    topics: ['AI Safety & Ethics', 'AI & National Security', 'AI in Public Sector'],
    zhSummary: `议员质询新加坡国防预算，强调国家安全环境复杂多变，包括恐怖主义威胁、南海争端、朝鲜核威胁及海盗问题。政府回应强调新加坡武装力量的建设成就及应对多元安全威胁的必要性。核心争议点在于如何平衡有限资源与多重安全挑战的防御需求。`,
    keyPoints: ['恐怖主义持续威胁', '南海局势紧张', '朝鲜核威胁升级'],
    governmentStance: '加强军力应对多重威胁',
    oppositionStance: '关注预算合理性与安全挑战',
    controversyLevel: 3,
    policySignal: '强化国防科技与人才培养',
    notableQuote: 'The Singapore Armed Forces (SAF) is now one of the most respected armed forces in the region.',
    summary: `Security Environment
Mr Vikram Nair (Sembawang)
: Madam, I beg to move, "That the total sum to be allocated for Head J of the Estimates be reduced by $100."
In 1971, when the British armed forces withdrew from Singapore, that marked the end of some 150 years during which the British oversaw Singapore's defence.
Quite suddenly, for the first time in history, Singapore was left to take care of its own defence. There were many challenges at the time. We had barely been independent for six years and were still finding our feet as a nation. The withdrawal of the British forces also had serious econ`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-711',
  },
  {
    id: 'oral-answer-1251',
    title: `Quality of Upcoming New Jobs in Tech and IT Sector`,
    zhTitle: `新加坡科技新岗位质量分析`,
    date: '2016-03-24',
    parliament: '13',
    type: 'Oral Answers to Questions',
    speakers: ['Minister for Communications and Information', 'Patrick Tay Teck Guan'],
    topics: ['AI Economy & Industry', 'AI & Employment', 'AI in Education', 'AI & National Security'],
    zhSummary: `议员质询新加坡科技与IT行业新增1.5万个岗位的类型、分布、层级及技能要求。政府回应称岗位涵盖多个行业，主要为专业及技术职位，技能需求多样，包括编程、网络安全和数据分析。政府强调技术岗位需求持续增长，配合智慧国战略。核心争议点在于岗位质量及技能匹配，政府承诺后续推出人力发展计划。`,
    keyPoints: ['岗位涵盖多行业', '主要为技术与管理岗', '技能需求多样化'],
    governmentStance: '推动智慧国，强化技术人才培养',
    oppositionStance: null,
    controversyLevel: 2,
    policySignal: '加强信息通信人才培养',
    notableQuote: 'Demand for technical specialists has been growing by 6.3% annually from 2011 to 2014.',
    summary: `9
Mr Patrick Tay Teck Guan
asked
the Minister for Communications and Information in view of IDA's announcement of 15,000 vacancies in the tech and IT sector (a) what kind of jobs are these; (b) which companies/industries will these jobs be found; (c) at what level of the organisation hierarchy are these jobs set; and (d) what are the skills required for these jobs.
The Minister for Communications and Information (Assoc Prof Dr Yaacob Ibrahim)
: Madam, the 15,000 vacancies were based on the Infocomm Development Authority of Singapore (IDA)'s latest annual survey on infocomm manpower for 2014, w`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=oral-answer-1251',
  },
  {
    id: 'budget-444',
    title: `Committee of Supply – Head K (Ministry of Education)`,
    zhTitle: `教育预算与就业匹配`,
    date: '2015-03-06',
    parliament: '12',
    type: 'Budget',
    speakers: [
      'Ang Wei Neng',
      'Baey Yam Keng',
      'Benedict Tan',
      'Chia Yong Yong',
      'Denise Phua Lay Peng',
      'Hri Kumar Nair',
      'Inderjit Singh',
      'Intan Azura Mokhtar',
      'Irene Ng Phek Hoong',
      'Kuik Shiao-Yin',
      'Lee Li Lian',
      'Lim Biow Chuan',
      'Lina Chiam',
      'Minister for Education',
      'Minister of State for Education',
      'Muhamad Faisal Bin Abdul Manap',
      'Patrick Tay Teck Guan',
      'Png Eng Huat',
      'Rita Soh Siow Lan',
      'Senior Minister of State for Education and Law',
      'Senior Parliamentary Secretary to the Minister for Education and Minister for Manpower',
      'Tan Tai Yong',
      'Thomas Chua Kee Seng',
      'Tin Pei Ling',
      'Yee Jenn Jong',
      'Zainal Sapari',
      'Zainudin Nordin',
    ],
    topics: ['AI & Employment', 'AI in Education', 'AI in Public Sector'],
    zhSummary: `质询方关注新加坡大学毕业生就业匹配问题，借鉴韩国、中国毕业生高失业率案例，担忧新加坡青年失业风险。强调教育应注重实用技能，呼吁政府通过SkillsFuture推动终身学习，提升就业竞争力。政府回应聚焦投资公民技能，支持未来就业准备。核心争议在于教育与就业市场需求的匹配及青年失业风险防范。`,
    keyPoints: ['毕业生就业匹配问题', '教育应注重实用技能', '推动终身学习机制'],
    governmentStance: '支持SkillsFuture促进技能提升',
    oppositionStance: '担忧青年失业与教育脱节',
    controversyLevel: 3,
    policySignal: '强化技能培训与终身学习',
    notableQuote: 'Singaporeans cannot take full employment for granted.',
    summary: `General Education Policies
Mr Lim Biow Chuan (Mountbatten)
: Madam, I beg to move, "That the total sum to be allocated for Head K of the Estimates be reduced by $100".
A recent article in The Straits Times caught my eye. In the article, it was reported that there were too many Koreans chasing after too few jobs. The report stated that the college entrance rate stands at 80%, up from 30% in the 1990s. South Korean parents were reported to spend up to 19 trillion won, or S$22.4 billion, on extra tuition. But many college graduates were unable to find jobs due to severe labour mismatch. The joble`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-444',
  },
  {
    id: 'budget-437',
    title: `Committee of Supply – Head J (Ministry of Defence)`,
    zhTitle: `国防与国民服役回顾`,
    date: '2015-03-05',
    parliament: '12',
    type: 'Budget',
    speakers: [
      'Alex Yam',
      'Assoc Prof Fatimah Lateef',
      'Chia Shi-Lu',
      'Ellen Lee',
      'Fatimah Lateef',
      'Intan Azura Mokhtar',
      'Irene Ng Phek Hoong',
      'Lim Wee Kiak',
      'Low Thia Khiang',
      'Minister for Defence',
      'Minister of State for Defence',
      'Mohamad Maliki Bin Osman',
      'Muhamad Faisal Bin Abdul Manap',
      'Ng Eng Hen',
      'Ong Teng Koon',
      'Pritam Singh',
      'Seah Kian Peng',
      'Second Minister for Defence',
      'Sitoh Yih Pin',
    ],
    topics: ['AI & National Security', 'AI in Public Sector'],
    zhSummary: `议员质询国防部关于SAF50纪念活动及国民服役历史，强调国民服役需认同防卫对象。政府回应介绍SAF志愿者招募情况，强调国民服役的重要性及历史教训。核心争议在于国民服役的认同感及其演变过程。`,
    keyPoints: ['SAF50纪念意义', '国民服役历史回顾', '服役认同感重要'],
    governmentStance: '支持国民服役及志愿者计划',
    oppositionStance: null,
    controversyLevel: 2,
    policySignal: '强化国防认同与志愿服役',
    notableQuote: 'The most powerful weapon that Singapore and SAF ha',
    summary: `SAF50
Mr Sitoh Yih Pin (Potong Pasir)
: Madam, I beg to move,
"That the total sum to be allocated for Head J of the Estimates be reduced by $100".
Madam, 2015 marks both SG50 as well as SAF50. Last month, MINDEF kicked off the first in a series of commemorative events with SAF50@Vivo. I would like to begin by asking the Minister for Defence to share with the House his thoughts on the significance of SAF50 and what the Singapore Armed Forces (SAF) intend to do to honour the contributions of our SAF pioneers?
Madam, last year, I encouraged people to sign up as an SAF Volunteer in this House. I a`,
    sourceUrl: 'https://sprs.parl.gov.sg/search/#/sprs3topic?reportid=budget-437',
  },
];

export const DEBATE_STATS = {
  total: 150,
  yearRange: { from: 2015, to: 2026 },
  byYear: {
    '2015': 2,
    '2016': 2,
    '2017': 2,
    '2018': 5,
    '2019': 10,
    '2020': 8,
    '2021': 4,
    '2022': 6,
    '2023': 21,
    '2024': 34,
    '2025': 28,
    '2026': 28,
  },
  byType: { Budget: 59, 'Oral Answers to Questions': 40, 'Written Answers to Questions': 48, Motions: 4 },
  byTopic: {
    'AI Economy & Industry': 85,
    'AI & National Security': 75,
    'AI Governance & Regulation': 63,
    'AI in Public Sector': 69,
    'AI Infrastructure & Research': 50,
    'AI Safety & Ethics': 52,
    'AI & Employment': 46,
    'AI in Education': 41,
    'AI in Healthcare': 21,
    'AI Strategy': 16,
    'Deepfakes & Disinformation': 5,
  },
  topSpeakers: {
    'Gerald Giam Yean Song': 25,
    'Patrick Tay Teck Guan': 22,
    'Pritam Singh': 21,
    'Vikram Nair': 21,
    'Josephine Teo': 20,
    'Sylvia Lim': 19,
    'Desmond Choo': 16,
    'Tan Wu Meng': 15,
    'Janil Puthucheary': 14,
    'Assoc Prof Jamus Jerome Lim': 13,
    'Sharael Taha': 14,
    'Tin Pei Ling': 14,
  },
};

export const POLICY_EVOLUTION = [
  {
    period: '2015-2017 萌芽期',
    years: '2015-2017',
    theme: 'AI基础设施与初步监管探索',
    description:
      '此阶段聚焦AI基础设施建设和初步的政策框架探索，强调技术潜力及风险意识，政府开始关注AI对就业和经济的影响，监管尚处于起步阶段。',
    keyDebates: ['版权法防范深度伪造', '公共服务智能化与人力政策'],
  },
  {
    period: '2018-2020 发展期',
    years: '2018-2020',
    theme: 'AI人才培养与产业应用推广',
    description:
      '重点推动AI人才培养和产业应用，SkillsFuture培训体系逐步完善，教育领域开始引入AI教学元素，关注劳动力转型和技能升级。',
    keyDebates: ['SkillsFuture AI培训参与率及支持', '强化工程人才培养路径'],
  },
  {
    period: '2021-2023 成熟期',
    years: '2021-2023',
    theme: '数据主权与AI治理强化',
    description:
      '随着AI技术成熟，数据主权和治理成为焦点，政府加强对AI企业收购监管，推动AI伦理和安全法规，兼顾创新与风险控制。',
    keyDebates: ['Meta收购Manus的监管评估', '物业代理AI编辑图像声明'],
  },
  {
    period: '2024-2026 深化期',
    years: '2024-2026',
    theme: 'AI经济安全与包容性转型',
    description:
      '聚焦AI对经济安全、就业结构调整及社会包容性，强化数据主权，推动本地人才培养和技能转移，教育领域强调AI与脑科学融合。',
    keyDebates: ['新加坡AI经济与数据主权', 'AI企业收购与本地人才保障', 'AI对中小企业劳动力影响研究'],
  },
];

export const RECURRING_CONTROVERSIES = [
  {
    issue: '数据主权与外资监管',
    description: '担忧外资企业主导本地AI市场，数据流失及技术依赖风险。',
    frequency: 4,
    relatedTopics: ['AI & National Security'],
    governmentPosition: '推动数据安全与国际合作',
    oppositionPosition: '担忧外企主导与依赖',
    resolutionStatus: 'ongoing',
  },
  {
    issue: 'AI对就业影响',
    description: 'AI替代与互补效应，裁员透明度及劳动力转型支持。',
    frequency: 5,
    relatedTopics: ['AI & Employment'],
    governmentPosition: '支持劳动力转型与再培训',
    oppositionPosition: '关注裁员数据透明与影响',
    resolutionStatus: 'ongoing',
  },
  {
    issue: 'AI企业并购监管',
    description: '是否应强化对AI初创企业被大企业收购的审查。',
    frequency: 3,
    relatedTopics: ['AI Governance & Regulation'],
    governmentPosition: '维持灵活自愿申报制度',
    oppositionPosition: '质疑监管是否充分',
    resolutionStatus: 'ongoing',
  },
  {
    issue: 'AI伦理与信息透明',
    description: 'AI生成内容声明及广告透明规范的必要性。',
    frequency: 3,
    relatedTopics: ['AI Safety & Ethics'],
    governmentPosition: '支持更新指引保障消费者',
    oppositionPosition: '要求明确AI编辑声明',
    resolutionStatus: 'ongoing',
  },
  {
    issue: '技能培训与资金支持',
    description: 'AI培训课程参与率、课程定制及资金支持力度争议。',
    frequency: 3,
    relatedTopics: ['AI & Employment'],
    governmentPosition: '鼓励终身学习，持续优化支持',
    oppositionPosition: '建议定制课程及增加资金',
    resolutionStatus: 'ongoing',
  },
  {
    issue: '版权法与深度伪造治理',
    description: '是否利用版权法打击AI深度伪造内容的争议。',
    frequency: 2,
    relatedTopics: ['Deepfakes & Disinformation'],
    governmentPosition: '版权法非主要治理工具',
    oppositionPosition: '借鉴国外版权法加强保护',
    resolutionStatus: 'ongoing',
  },
  {
    issue: '教育公平与AI技能培养',
    description: '如何平衡学术严谨与创新能力培养及资源分配。',
    frequency: 3,
    relatedTopics: ['AI in Education'],
    governmentPosition: '强调多元教学与能力培养',
    oppositionPosition: '关注教学公平与国际经验',
    resolutionStatus: 'ongoing',
  },
];

export const MP_PROFILES = [
  {
    name: 'Gerald Giam Yean Song',
    zhName: '江源松',
    role: '反对党',
    focusAreas: ['AI经济', 'AI治理', '国家安全'],
    debateCount: 25,
    notablePosition: '强调防止全球科技巨头垄断本地AI市场，推动政府设立AI公司保障数据主权',
  },
  {
    name: 'Patrick Tay Teck Guan',
    zhName: '郑德源',
    role: '执政党',
    focusAreas: ['AI经济', 'AI就业', 'AI治理'],
    debateCount: 22,
    notablePosition: '持续追踪AI裁员透明度，要求公开AI替代就业数据及再就业支持情况',
  },
  {
    name: 'Pritam Singh',
    zhName: '毕丹星',
    role: '反对党',
    focusAreas: ['国家安全', '公共部门', 'AI经济'],
    debateCount: 21,
    notablePosition: '工人党领袖，关注AI对国家安全、公共部门效率及民主问责的影响',
  },
  {
    name: 'Vikram Nair',
    zhName: '维克拉姆·奈尔',
    role: '执政党',
    focusAreas: ['国家安全', '公共部门', 'AI治理'],
    debateCount: 21,
    notablePosition: '聚焦AI治理与国家安全，支持政府在AI监管框架上的审慎立场',
  },
  {
    name: 'Josephine Teo',
    zhName: '杨莉明',
    role: '执政党',
    focusAreas: ['国家安全', 'AI经济', 'AI基础设施'],
    debateCount: 19,
    notablePosition: '数字发展部长，主导国家AI战略2.0，强调数据安全与国际合作并重',
  },
  {
    name: 'Sylvia Lim',
    zhName: '林瑞莲',
    role: '反对党',
    focusAreas: ['AI经济', 'AI治理', '公共部门'],
    debateCount: 19,
    notablePosition: '工人党副主席，质询AI在公共部门的透明度与问责机制',
  },
  {
    name: 'Desmond Choo',
    zhName: '朱德明',
    role: '执政党',
    focusAreas: ['公共部门', 'AI经济', 'AI就业'],
    debateCount: 16,
    notablePosition: '关注AI对基层就业与公共服务的影响，推动包容性数字转型',
  },
  {
    name: 'Janil Puthucheary',
    zhName: '贾尼尔·普图查里',
    role: '执政党',
    focusAreas: ['AI经济', '国家安全', 'AI伦理'],
    debateCount: 15,
    notablePosition: '推动AI技能培训个性化，强调终身学习与资金支持体系建设',
  },
];

export const KEY_INSIGHTS = [
  {
    title: '数据主权成核心议题',
    description: '随着AI产业发展，数据主权和防止外资垄断成为持续关注焦点，政府强调国际合作与安全防护并重。',
    evidence: '新加坡AI经济与数据主权，AI企业收购与本地人才保障',
    significance: 'high',
  },
  {
    title: '劳动力转型政策深化',
    description: '政府推动包容性劳动力转型，支持中年员工再培训及技能转移，回应AI替代与互补争议。',
    evidence: 'AI对中小企业劳动力影响研究，就业转型图及中年员工支持',
    significance: 'high',
  },
  {
    title: 'AI教育多元融合',
    description: '教育政策强调分龄AI使用指导、脑科学融合及多元教学法，平衡学术严谨与创新能力培养。',
    evidence: '分龄生成式AI使用框架，脑科学与自适应AI教育合作，PSLE学术严谨与AI技能平衡',
    significance: 'medium',
  },
  {
    title: '监管机制趋于灵活',
    description: 'AI企业并购采用自愿申报，监管强调创新与竞争平衡，存在监管充分性争议。',
    evidence: 'Meta收购Manus的监管评估',
    significance: 'medium',
  },
  {
    title: 'AI伦理与透明度提升',
    description: '针对AI生成内容声明及广告规范，政府推动指引更新，兼顾消费者保护与行业创新。',
    evidence: '物业代理AI编辑图像声明',
    significance: 'medium',
  },
  {
    title: '医疗AI预防性应用加速',
    description:
      "卫生部推出ACE-AI工具预测慢性病风险，强调'AI增强而非AI决定'原则，BRCA基因检测补贴与MediShield Life扩展标志医疗AI进入实质部署阶段。",
    evidence: '2026卫生部供给委员会辩论：ACE-AI工具部署、BRCA1/2基因检测补贴',
    significance: 'high',
  },
  {
    title: '技能培训资金支持不足',
    description: 'AI相关培训课程参与度提升，资金支持及课程定制仍为争议焦点，政府持续优化。',
    evidence: 'SkillsFuture AI培训参与率及支持，扩展SkillsFuture信用涵盖AI工具订阅',
    significance: 'medium',
  },
];

export const POLICY_SIGNALS = [
  {
    signal: '加强AI相关投资与风险管理',
    year: '2026',
    status: '进行中',
    context: '应对全球地缘政治紧张与经济不确定性',
  },
  {
    signal: '加强数据主权与知识产权保护',
    year: '2026',
    status: '进行中',
    context: '防止外资主导及数据流失风险',
  },
  {
    signal: '强化本地人才培养与技能转移',
    year: '2026',
    status: '进行中',
    context: '保障AI企业收购后本地劳动力利益',
  },
  {
    signal: '推动包容性劳动力转型',
    year: '2026',
    status: '进行中',
    context: '支持被替代员工转岗和再培训',
  },
  {
    signal: '推动个性化AI培训支持',
    year: '2026',
    status: '进行中',
    context: '提升SkillsFuture培训质量与覆盖',
  },
  {
    signal: '推动AI广告透明规范',
    year: '2026',
    status: '进行中',
    context: '防止误导消费者，规范行业行为',
  },
  {
    signal: '持续跟踪AI采纳数据',
    year: '2026',
    status: '进行中',
    context: '监测不同规模企业AI应用差异',
  },
  {
    signal: '医疗AI预防性应用与健保制度改革',
    year: '2026',
    status: '进行中',
    context: 'ACE-AI部署、BRCA基因检测补贴、MediSave/MediShield Life改革应对超老龄社会',
  },
  {
    signal: '推动AI与人力协同发展',
    year: '2025',
    status: '进行中',
    context: '公共服务智能化与岗位调整',
  },
];

export const TENSION_MAP = [
  {
    dimension: '创新速度 vs 监管安全',
    sideA: '鼓励快速创新与市场活力',
    sideB: '强调风险控制与公平竞争',
    currentBalance: '采用灵活监管，鼓励自愿申报',
  },
  {
    dimension: '数据开放 vs 数据主权',
    sideA: '推动国际数据合作与共享',
    sideB: '防范外资垄断与数据流失',
    currentBalance: '强调数据安全与国际合作并重',
  },
  {
    dimension: 'AI替代 vs 劳动力转型',
    sideA: 'AI替代部分岗位提升效率',
    sideB: '保障就业，支持再培训转岗',
    currentBalance: '推动包容性转型与技能提升',
  },
  {
    dimension: '教育公平 vs 创新能力培养',
    sideA: '注重学术严谨与核心能力',
    sideB: '强调探究式与协作式创新学习',
    currentBalance: '融合多元教学，兼顾公平与创新',
  },
  {
    dimension: '资金支持 vs 培训课程定制',
    sideA: '增加资金支持扩大培训覆盖',
    sideB: '优化课程内容满足多样需求',
    currentBalance: '持续优化课程与资金配置',
  },
];

export function getDebatesByTopic(topic: string): Debate[] {
  return debates.filter((d) => d.topics.includes(topic));
}

export function getDebatesByYear(year: string): Debate[] {
  return debates.filter((d) => d.date.startsWith(year));
}

export function getHighControversyDebates(minLevel = 4): Debate[] {
  return debates.filter((d) => d.controversyLevel >= minLevel).sort((a, b) => b.controversyLevel - a.controversyLevel);
}
