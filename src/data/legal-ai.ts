// 新加坡 AI 法律框架 — "训练宽松 + 输出严管"双轨
// 这个组合让新加坡成为目前世界上对 AI 公司最清晰可预测的法域之一。

export interface LegalItem {
  title: string;
  titleEn: string;
  date: string;
  /** English sibling of `date`. Required if `date` contains CJK
   *  (e.g. "2012 / 2020 修订" → dateEn: "2012 / 2020 (amended)"). */
  dateEn?: string;
  authority: string; // 主管机构
  authorityEn?: string; // English sibling of authority
  authorityUrl?: string;
  scope: 'training' | 'output' | 'liability' | 'governance'; // 训练侧 / 输出侧 / 责任 / 治理
  status: '已生效' | '已颁布' | '咨询中' | '提案';
  statusEn?: string; // English sibling of status
  summary: string;
  summaryEn?: string; // English sibling of summary
  body: string;
  bodyEn?: string; // English sibling of body
  sourceUrl?: string;
}

export interface LegalSection {
  title: string;
  titleEn?: string; // English sibling of title
  philosophy: string; // 该侧的整体哲学
  philosophyEn?: string; // English sibling of philosophy
  items: LegalItem[];
}

export const dataDate = '2026-04-26';

export const introBody = `新加坡的 AI 法律框架可以用一句话概括：**训练宽松 + 输出严管**。

- **训练侧**：合法获取的内容（不论是否有版权）可用于 AI 训练——与日本并列全球最宽松。
- **输出侧**：深伪、AI 私密图像、AI 生成的虚假信息、选举操纵——四件套立法严管。

这个组合让新加坡成为目前世界上**对 AI 公司最清晰可预测的法域之一**：你能做什么、不能做什么，边界清晰。这是 EDB 能引进 OpenAI、Anthropic、DeepMind、Mistral 等机构的关键背景之一。`;

export const introBodyEn = `Singapore's AI legal framework, in one line: **permissive on training, strict on output**.

- **Training side**: lawfully accessed content (copyrighted or not) may be used to train AI — among the most permissive regimes globally, alongside Japan.
- **Output side**: deepfakes, AI-generated intimate imagery, AI-generated misinformation, and election manipulation are tightly governed by a four-part legislative package.

This combination makes Singapore **one of the most predictable jurisdictions in the world for AI companies**: what you can and cannot do is sharply defined. It is one of the key reasons EDB has been able to attract OpenAI, Anthropic, DeepMind, Mistral and others.`;

export const sections: LegalSection[] = [
  {
    title: '训练侧 — 全球最宽松',
    titleEn: "Training side — among the world's most permissive",
    philosophy:
      '"Computational Data Analysis" 例外让 AI 训练数据使用免责。与日本《著作权法》第 30-4 条并列。美国仍在 fair use 案例法争议中、欧盟需依赖 TDM Exception 的 opt-out 机制——新加坡和日本是世界上目前唯二明确写入法律的国家。',
    philosophyEn:
      'The "Computational Data Analysis" exception immunises the use of training data for AI, on par with Article 30-4 of Japan\'s Copyright Act. The United States is still litigating fair use case-by-case and the EU relies on an opt-out TDM exception — Singapore and Japan are currently the only two jurisdictions to write this carve-out explicitly into statute.',
    items: [
      {
        title: 'Copyright Act §244',
        titleEn: 'Copyright Act 2021 — Section 244 (Computational Data Analysis Exception)',
        date: '2021-11',
        authority: 'MINLAW',
        authorityEn: 'Ministry of Law (MINLAW)',
        authorityUrl: 'https://www.mlaw.gov.sg/',
        scope: 'training',
        status: '已生效',
        statusEn: 'In force',
        summary: 'AI 训练免责条款——合法获取的内容可用于 AI 模型训练、文本与数据挖掘等用途，不构成版权侵权。',
        summaryEn:
          'AI training safe harbour: lawfully accessed content may be used for AI model training, text and data mining and similar purposes without constituting copyright infringement.',
        body: 'Copyright Act 2021 第 244 条 "Computational Data Analysis" 给 AI 训练数据使用提供明确的免责条款。"合法获取" 意指通过订阅、购买、合法 API、公开网页等正常渠道获取的内容。这条规定使新加坡成为全球 AI 训练版权立场最清晰的法域之一，也是 EDB 引进 OpenAI / Anthropic / DeepMind 等机构的关键背景。',
        bodyEn:
          'Section 244 of the Copyright Act 2021 ("Computational Data Analysis") provides an explicit safe harbour for the use of training data for AI. "Lawfully accessed" means content obtained through normal channels — subscriptions, purchases, legitimate APIs, public web pages and so on. This makes Singapore one of the jurisdictions with the clearest stated position on AI training and copyright globally, and is a core reason EDB has been able to attract OpenAI, Anthropic, DeepMind and similar institutions.',
        sourceUrl: 'https://sso.agc.gov.sg/Act/CA2021?ProvIds=P14-#pr244-',
      },
      {
        title: 'IPOS "When Code Creates" 报告',
        titleEn: 'IPOS — When Code Creates: AI Authorship Position Paper',
        date: '2024',
        authority: 'IPOS（知识产权局）',
        authorityEn: 'IPOS (Intellectual Property Office of Singapore)',
        authorityUrl: 'https://www.ipos.gov.sg/',
        scope: 'training',
        status: '已颁布',
        statusEn: 'Issued',
        summary: '明确 AI 生成内容的 Authorship 立场：人类有实质创作贡献时方可主张著作权。',
        summaryEn:
          "Clarifies IPOS's position on authorship of AI-generated content: copyright can be asserted only where a human has made a substantive creative contribution.",
        body: '"When Code Creates" 是 IPOS 2024 年发布的官方立场文件，回应 GenAI 时代著作权归属问题。核心立场：完全 AI 生成、无人类实质创作贡献的输出不构成著作权法意义上的"作品"；但如果人类做了实质性的创作选择（prompt 设计、输出筛选、迭代修改），则人类可主张为作者。这与英国 1988 法案"无作者计算机生成作品"模式不同，更接近美国 USCO 立场。',
        bodyEn:
          '"When Code Creates" is IPOS\'s 2024 official position paper on copyright authorship in the era of generative AI. Core position: fully AI-generated output with no substantive human creative input does not qualify as a "work" under copyright law; but where a human makes substantive creative choices (prompt design, output curation, iterative refinement), that human can claim authorship. This diverges from the UK\'s 1988 "computer-generated works without an author" model and aligns more closely with the US Copyright Office position.',
      },
    ],
  },
  {
    title: '输出侧 — 四件套严管',
    titleEn: 'Output side — a tight four-part regime',
    philosophy:
      '训练宽松不等于输出宽松。深伪、AI 私密图像、AI 生成虚假信息、选举操纵——四件套立法严管。这是新加坡防止"AI 自由"被滥用的政策对冲。',
    philosophyEn:
      'Permissive on training does not mean permissive on output. Deepfakes, AI-generated intimate imagery, AI-generated disinformation and election manipulation are all governed by a tight four-part legislative package — Singapore\'s policy hedge against "AI freedom" being abused.',
    items: [
      {
        title: 'Online Criminal Harms Act (OCHA)',
        titleEn: 'Online Criminal Harms Act (OCHA)',
        date: '2023-07',
        authority: 'MHA',
        authorityEn: 'Ministry of Home Affairs (MHA)',
        authorityUrl: 'https://www.mha.gov.sg/',
        scope: 'output',
        status: '已生效',
        statusEn: 'In force',
        summary: '统一治理网络刑事伤害——AI 生成的诈骗、勒索、恐吓内容均覆盖。',
        summaryEn:
          'A unified toolkit for online criminal harms — covers AI-generated scams, extortion and intimidation.',
        body: 'OCHA 2023 年通过，给警察、检察官提供统一的网络刑事伤害治理工具。AI 时代特别相关：AI 生成的诈骗信息、深伪勒索内容、自动化骚扰——都可以依据 OCHA 进行治理性命令、内容下架、限制访问、阻止支付等。OCHA 是新加坡 AI 输出侧治理的"基础底座"，不专门针对 AI，但 AI 触发的行为大多可以按 OCHA 处理。',
        bodyEn:
          "Passed in 2023, OCHA gives police and prosecutors a unified toolkit for governing online criminal harms. It is particularly relevant in the AI era: AI-generated scam messages, deepfake extortion content and automated harassment can all be addressed through governance orders, takedowns, access restrictions and payment-blocking under OCHA. The Act is the foundational layer of Singapore's output-side AI governance — not AI-specific, but most AI-enabled criminal conduct falls within its scope.",
        sourceUrl: 'https://sso.agc.gov.sg/Acts-Supp/22-2023/',
      },
      {
        title: 'Elections (Integrity of Online Advertising) (Amendment) Bill',
        titleEn: 'Elections (Integrity of Online Advertising) (Amendment) Bill',
        date: '2024-09',
        authority: 'MDDI / Elections Department',
        authorityEn: 'MDDI / Elections Department',
        authorityUrl: 'https://www.mddi.gov.sg/',
        scope: 'output',
        status: '已生效',
        statusEn: 'In force',
        summary: '选举期间禁止深伪：禁止发布"误导性、AI 生成的、声称是候选人发言或行为"的内容。',
        summaryEn:
          'Bans deepfakes during elections: prohibits publishing "misleading, AI-generated content that purports to depict candidates\' statements or conduct".',
        body: '2024 年通过的选举法修正案，针对深伪进行专项立法。核心条款：在选举期间（writ of election 颁布到投票日）禁止发布"误导性、AI 生成、深度伪造的、声称表示候选人发言或行为"的内容。任何人发布、转发、出资制作此类内容均属犯罪。竞选期内可发出"corrective directions"要求平台移除内容、阻止访问、显示更正声明。这是世界上较早的针对选举深伪的专项立法，比欧盟 AI Act 选举条款落地更早。',
        bodyEn:
          'A 2024 amendment to the Elections Act targeting deepfakes specifically. Core clause: during the campaign period (from issuance of the writ of election to polling day) it is unlawful to publish "misleading, AI-generated, deepfake content purporting to represent statements or conduct of candidates". Anyone who publishes, shares or funds such content commits an offence. During the campaign window the authorities may issue corrective directions requiring platforms to take down content, block access or display correction statements. This is among the earliest targeted election-deepfake laws in the world, ahead of the corresponding provisions in the EU AI Act.',
      },
      {
        title: 'Criminal Law (Miscellaneous Amendments) Bill 2025',
        titleEn: 'Criminal Law (Miscellaneous Amendments) Bill 2025',
        date: '2025',
        authority: 'MHA',
        authorityEn: 'Ministry of Home Affairs (MHA)',
        authorityUrl: 'https://www.mha.gov.sg/',
        scope: 'output',
        status: '已颁布',
        statusEn: 'Enacted',
        summary: 'AI 生成的私密图像与儿童性剥削图像入刑——制作、持有、传播均可起诉。',
        summaryEn:
          'Criminalises AI-generated intimate imagery and child sexual exploitation material — production, possession and distribution are all prosecutable.',
        body: '2025 年的 Criminal Law 修正案明确把 AI 生成的私密图像（裸露、性图像）和儿童性剥削图像纳入刑法。创新点：(1) 即便图像中的"人"是虚构的（AI 生成而非真实人物），如果看起来像未成年人，依然入刑；(2) 制作、持有、传播均构成犯罪；(3) 加重刑罚针对针对实名个人的深伪私密图像。这填补了"AI 生成不存在的人"这种新型情形的法律空白。',
        bodyEn:
          'The 2025 Criminal Law amendments expressly bring AI-generated intimate imagery (nudity, sexual imagery) and child sexual exploitation material into the criminal code. Notable innovations: (1) even where the "person" in the image is fictitious (AI-generated rather than a real individual), the offence still applies if the depicted person appears to be a minor; (2) production, possession and distribution all constitute offences; (3) aggravated penalties apply to deepfake intimate imagery targeting identifiable individuals. The amendment closes the legal gap for the new category of "AI-generated non-existent persons".',
      },
      {
        title: 'Online Safety (Relief and Accountability) Bill 2025',
        titleEn: 'Online Safety (Relief and Accountability) Bill 2025',
        date: '2025',
        authority: 'MDDI',
        authorityEn: 'Ministry of Digital Development and Information (MDDI)',
        authorityUrl: 'https://www.mddi.gov.sg/',
        scope: 'output',
        status: '已颁布',
        statusEn: 'Enacted',
        summary: '受害者快速救济通道 + 平台问责机制——24 小时内须处理 AI 滥用投诉。',
        summaryEn:
          'Fast-track victim relief plus platform accountability — AI-abuse complaints must be acted on within 24 hours.',
        body: '2025 年通过的 Online Safety 新法，重点是受害者救济与平台问责：(1) 受害者可向 Online Safety Commission（OSC）提交投诉，平台 24 小时内须处理；(2) 平台未履行义务可面临高额罚款；(3) AI 生成的诽谤、骚扰、性图像均覆盖。这是新加坡输出侧治理从"事后惩罚"转向"过程问责"的关键一步。',
        bodyEn:
          "The 2025 Online Safety Act focuses on victim relief and platform accountability: (1) victims may file complaints with the Online Safety Commission (OSC), which platforms must act on within 24 hours; (2) platforms that fail to comply face significant fines; (3) AI-generated defamation, harassment and sexual imagery all fall within scope. This marks a key step in Singapore's output-side governance shifting from after-the-fact punishment to in-process accountability.",
      },
    ],
  },
  {
    title: '责任与治理',
    titleEn: 'Liability and Governance',
    philosophy: '原则到工具到执法的渐进式路径——FEAT → Veritas → MindForge → AI Risk Management Guidelines。',
    philosophyEn:
      'A gradual path from principles to tools to enforcement — FEAT → Veritas → MindForge → AI Risk Management Guidelines.',
    items: [
      {
        title: '法院生成式 AI 使用指南',
        titleEn: 'Guide on Use of Generative AI Tools by Court Users',
        date: '2024-10',
        authority: '新加坡最高法院',
        authorityEn: 'Supreme Court of Singapore',
        authorityUrl: 'https://www.judiciary.gov.sg/',
        scope: 'liability',
        status: '已颁布',
        statusEn: 'Issued',
        summary: '律师和当事人对使用 AI 准备的法律文件负最终责任，须披露 AI 使用情况。',
        summaryEn:
          'Lawyers and litigants bear ultimate responsibility for legal documents prepared with AI assistance and must disclose any AI use.',
        body: "新加坡最高法院 2024 年发布的 Registrar's Circular No. 1 of 2024 适用于所有法院体系。三大原则：(1) 律师和当事人对提交法院的所有内容负最终责任，无论是否使用 AI 生成；(2) 使用 GenAI 辅助准备的法律文件须披露 AI 使用情况；(3) 引用的案例和法律条文须经人工核实（防止 AI 编造判例的风险）。这是司法系统对 AI 工具的务实态度——不禁止使用，但人类责任不可转移。",
        bodyEn:
          "The Supreme Court of Singapore's Registrar's Circular No. 1 of 2024 applies across the entire court system. Three principles: (1) lawyers and litigants bear ultimate responsibility for all content submitted to court, whether or not AI was used; (2) legal documents prepared with the assistance of generative AI must disclose that AI was used; (3) cited cases and legal provisions must be verified by a human (to prevent the risk of AI fabricating precedent). This represents a pragmatic judicial posture toward AI tools — not banning use, but holding human responsibility non-transferable.",
        sourceUrl: 'https://www.judiciary.gov.sg/news-and-resources/news',
      },
      {
        title: 'MAS AI Risk Management Guidelines',
        titleEn: 'AI Risk Management Guidelines for Banks',
        date: '2024-12',
        authority: 'MAS',
        authorityEn: 'Monetary Authority of Singapore (MAS)',
        authorityUrl: 'https://www.mas.gov.sg/',
        scope: 'governance',
        status: '已生效',
        statusEn: 'In force',
        summary: '金融业 AI 模型风险管理的正式监管期望书——全球首批专门针对银行业 AI 的监管文件。',
        summaryEn:
          'Formal supervisory expectations for AI model risk management in financial services — among the first dedicated banking-AI regulations globally.',
        body: 'MAS 把 FEAT (2018) → Veritas (2021) → MindForge (2024) 多年实践累积的经验固化为正式监管期望书。覆盖：模型治理、第三方 AI 风险、模型监控、人在回路、事件应对与责任。配套 BuildFin.ai 平台让被监管机构能持续测试和报告。这是全球首批专门针对银行业 AI 的监管文件，比欧盟 AI Act 金融条款落地更快。',
        bodyEn:
          'MAS has codified the experience accumulated through FEAT (2018) → Veritas (2021) → MindForge (2024) into a formal set of supervisory expectations. Coverage spans model governance, third-party AI risk, model monitoring, human-in-the-loop, and incident response and accountability. The companion BuildFin.ai platform allows regulated institutions to continuously test and report. This is among the first dedicated banking-AI regulations in the world, landing earlier than the financial services provisions of the EU AI Act.',
        sourceUrl: 'https://www.mas.gov.sg/regulation/notices/notice-fsm-n29',
      },
      {
        title: 'CSA Securing AI Systems Guidelines',
        titleEn: 'Guidelines and Companion Guide on Securing AI Systems',
        date: '2024-10',
        authority: 'CSA',
        authorityEn: 'Cyber Security Agency of Singapore (CSA)',
        authorityUrl: 'https://www.csa.gov.sg/',
        scope: 'governance',
        status: '已颁布',
        statusEn: 'Issued',
        summary: 'AI 系统全生命周期安全最佳实践——填补 AI 安全治理空白。',
        summaryEn:
          'Best practices for AI system security across the full lifecycle — filling a gap in AI security governance.',
        body: 'CSA 2024 年 10 月发布，覆盖 AI 系统全生命周期：规划与设计阶段的威胁建模、开发阶段的数据与模型安全、部署阶段的安全测试、运维阶段的监控与事件响应。重点关注对抗性攻击防御、数据投毒防范、模型窃取防护、供应链安全等 AI 特有风险。配套 Securing Agentic AI 增补稿（2025）扩展到 Agentic AI 场景。',
        bodyEn:
          'Issued by CSA in October 2024, the guidelines cover the full AI system lifecycle: threat modelling at the planning and design stage, data and model security during development, security testing at deployment, and monitoring and incident response in operations. Particular focus is given to AI-specific risks such as adversarial attacks, data poisoning, model theft and supply-chain security. A 2025 companion paper, "Securing Agentic AI", extends the framework to agentic AI use cases.',
      },
      {
        title: 'PDPA × AI 边界',
        titleEn: 'Personal Data Protection Act (PDPA) — AI Application',
        date: '2012 / 2020 修订',
        dateEn: '2012 / 2020 (amended)',
        authority: 'PDPC',
        authorityEn: 'Personal Data Protection Commission (PDPC)',
        authorityUrl: 'https://www.pdpc.gov.sg/',
        scope: 'governance',
        status: '已生效',
        statusEn: 'In force',
        summary: '为 AI 数据使用划定法律边界——合法利益例外（Business Improvement Exception）让 AI 训练有空间。',
        summaryEn:
          'Sets the legal perimeter for personal data in AI — the Business Improvement Exception leaves room for AI training.',
        body: 'PDPA 2012 年通过，2020 年大幅修订加入 AI 相关条款。AI 时代特别重要的修改：(1) Business Improvement Exception——允许在不获取用户同意的情况下使用个人数据改进产品和服务（包括 AI 训练，需符合合理性测试）；(2) 数据可携带权；(3) 强化执法与处罚力度。配合 Copyright Act §244 形成新加坡 AI 训练数据使用的双重法律基础。',
        bodyEn:
          'Enacted in 2012 and substantially amended in 2020 to add AI-relevant provisions. The most important changes for the AI era: (1) the Business Improvement Exception — allowing personal data to be used to improve products and services, including AI training, without user consent, subject to a reasonableness test; (2) the right to data portability; (3) strengthened enforcement and penalties. Together with Copyright Act §244, the PDPA forms the dual legal foundation for the use of training data for AI in Singapore.',
      },
    ],
  },
];

export const conclusion = `**为什么这套法律组合对 AI 公司有吸引力**：

1. **训练数据明确合法**——不像美国还在 fair use 法庭案例堆里挣扎
2. **输出端严但清晰**——你不能做什么写得很明白，而不是泛泛"风险"
3. **金融、医疗、法律分行业有规则**——而不是一个 EU AI Act 式的横切监管
4. **责任分配明确**——人在回路、披露义务、第三方 AI 责任都有书面规则

这是新加坡战略中"Trust 杠杆"（让企业敢部署）和"International 杠杆"（让外资把治理总部放新加坡）的法律支柱。`;

export const conclusionEn = `**Why this legal combination is attractive to AI companies**:

1. **Training data is unambiguously legal** — unlike the US, which is still working through fair-use case law.
2. **Output rules are strict but clear** — what you cannot do is spelled out plainly, not left as vague "risks".
3. **Sector-specific rules for finance, healthcare and law** — instead of one EU AI Act-style cross-cutting regime.
4. **Liability is explicit** — human-in-the-loop, disclosure duties and third-party AI responsibility are all codified.

This is the legal pillar of Singapore's "Trust" lever (giving enterprises the confidence to deploy) and "International" lever (drawing foreign firms to base governance functions in Singapore).`;
