// Single source of truth for persons across the site.
// Consumed by debates.ts (personIds), policies.ts (authorPersonIds),
// levers.ts (championPersonIds), timeline.ts (personIds), voices.ts
// (re-exports), blog frontmatter (relatedPersonIds), and /people/[id].

import mpStubsJson from './mp-stubs.json';

export type PersonRole =
  | 'minister'
  | 'mp'
  | 'civil-servant'
  | 'academic'
  | 'researcher'
  | 'founder'
  | 'executive'
  | 'investor';

export type Affiliation =
  | 'PMO'
  | 'MDDI'
  | 'MTI'
  | 'MOH'
  | 'MOE'
  | 'MOF'
  | 'MAS'
  | 'MND'
  | 'MOM'
  | 'MHA'
  | 'MFA'
  | 'MCCY'
  | 'MSF'
  | 'MEWR'
  | 'MTI-Workforce'
  | 'IMDA'
  | 'EDB'
  | 'A*STAR'
  | 'AISG'
  | 'NUS'
  | 'NTU'
  | 'SMU'
  | 'SUTD'
  | 'NRF'
  | 'GovTech'
  | 'CSA'
  | 'SkillsFuture'
  | 'PA' // People's Association
  | 'WP' // Workers' Party as institutional affiliation for opposition MPs
  | 'PSP' // Progress Singapore Party
  | 'NMP' // Nominated MP
  | 'Industry'
  | 'Other';

export interface SocialChannel {
  platform: string; // 'twitter' | 'linkedin' | 'facebook' | 'website' | 'newsletter' | 'github'
  url: string;
  /** Display label in zh. May be Latin (e.g. "@handle") if the label is
   *  language-neutral. When `label` contains CJK characters, callers MUST
   *  also set `labelEn` so EN pages can display the English equivalent. */
  label?: string;
  /** English sibling of `label`. Required if `label` contains CJK. */
  labelEn?: string;
  primary?: boolean;
}

export interface Person {
  id: string; // kebab-case stable, e.g. 'josephine-teo'
  name: string; // Latin canonical
  zhName: string;
  aliases?: string[]; // tolerates "Mrs Josephine Teo", "Dr Janil Puthucheary", etc.
  title: string;
  zhTitle: string;
  category: 'government' | 'academic' | 'industry';
  // Stored as plain string[] / string — typed widely on purpose because
  // 200+ literal records cause tsserver OOM when the field is a strict union.
  // Callers that need narrow types can import PersonRole/Affiliation aliases
  // and cast at the use site.
  roles: string[];
  affiliations: string[];
  party?: string | null;
  summary: string;
  summaryEn?: string;
  channels: SocialChannel[];
  // Build-time computed (set by getRelated() / verify-graph script).
  debateCount?: number;
  videoCount?: number;
  policyAuthorCount?: number;
  blogMentionCount?: number;
}

export const people: Person[] = [
  {
    id: 'josephine-teo',
    name: 'Josephine Teo',
    zhName: '杨莉明',
    aliases: ['Mrs Josephine Teo', 'Mrs Teo'],
    title: 'Minister for Digital Development and Information',
    zhTitle: '数码发展及新闻部长',
    category: 'government',
    roles: ['minister', 'mp'],
    affiliations: ['MDDI', 'PMO'],
    party: 'PAP',
    summary: '新加坡 AI 政策的核心推动者，主导国家 AI 战略、Agentic AI 治理框架、AI 双语人才计划。',
    summaryEn:
      "The primary driver of Singapore's AI policy agenda; leads the National AI Strategy, the Agentic AI governance framework, and the bilingual AI talent programme.",
    channels: [
      { platform: 'twitter', url: 'https://x.com/joteo_ylm', label: '@joteo_ylm' },
      {
        platform: 'linkedin',
        url: 'https://www.linkedin.com/in/josephine-teo-ylm/',
        primary: true,
      },
      { platform: 'facebook', url: 'https://www.facebook.com/JosephineTeoYLM/' },
      { platform: 'website', url: 'https://www.mddi.gov.sg/', label: 'MDDI 官网', labelEn: 'MDDI website' },
    ],
  },
  {
    id: 'lawrence-wong',
    name: 'Lawrence Wong',
    zhName: '黄循财',
    aliases: ['Mr Lawrence Wong', 'PM Wong'],
    title: 'Prime Minister of Singapore',
    zhTitle: '新加坡总理',
    category: 'government',
    roles: ['minister', 'mp'],
    affiliations: ['PMO', 'MOF'],
    party: 'PAP',
    summary: '亲自担任国家 AI 委员会主席，2026 预算案将 AI 列为国家优先事项。',
    summaryEn:
      'Personally chairs the National AI Council; Budget 2026 elevated AI to a national priority under his direction.',
    channels: [
      {
        platform: 'facebook',
        url: 'https://www.facebook.com/lawrencewongst/',
        primary: true,
      },
      { platform: 'website', url: 'https://www.pmo.gov.sg/', label: 'PMO 官网', labelEn: 'PMO website' },
    ],
  },
  {
    id: 'vivian-balakrishnan',
    name: 'Vivian Balakrishnan',
    zhName: '维文',
    aliases: ['Dr Vivian Balakrishnan', 'Dr Balakrishnan'],
    title: 'Minister for Foreign Affairs',
    zhTitle: '外交部长',
    category: 'government',
    roles: ['minister', 'mp'],
    affiliations: ['MFA'],
    party: 'PAP',
    summary: 'Smart Nation 倡议发起人，推动新加坡 AI 国际合作，包括新韩 AI 连接峰会。',
    summaryEn:
      "Architect of the Smart Nation initiative; drives Singapore's international AI cooperation, including the Singapore–Korea AI Connectivity Summit.",
    channels: [
      {
        platform: 'facebook',
        url: 'https://www.facebook.com/VivianBalakrishnan/',
        primary: true,
      },
      { platform: 'website', url: 'https://www.mfa.gov.sg/', label: 'MFA 官网', labelEn: 'MFA website' },
    ],
  },
  {
    id: 'tharman',
    name: 'Tharman Shanmugaratnam',
    zhName: '尚达曼',
    aliases: ['Mr Tharman Shanmugaratnam', 'President Tharman'],
    title: 'President of Singapore',
    zhTitle: '新加坡总统',
    category: 'government',
    roles: ['minister'],
    affiliations: ['PMO'],
    party: null,
    summary: '在国际论坛频繁发声谈 AI 治理与社会影响，推动全球 AI 安全对话。',
    summaryEn:
      'A frequent voice at international forums on AI governance and societal impact; advances the global AI safety dialogue.',
    channels: [
      {
        platform: 'website',
        url: 'https://www.istana.gov.sg/',
        label: 'Istana 官网',
        labelEn: 'Istana website',
        primary: true,
      },
    ],
  },
  {
    id: 'tan-kiat-how',
    name: 'Tan Kiat How',
    zhName: '陈杰豪',
    aliases: ['Mr Tan Kiat How'],
    title: 'Senior Minister of State for Digital Development and Information',
    zhTitle: 'MDDI 高级政务部长',
    category: 'government',
    roles: ['minister', 'mp', 'civil-servant'],
    affiliations: ['MDDI', 'IMDA'],
    party: 'PAP',
    summary: '前 IMDA CEO，主管数字经济、AI 治理、数据中心政策的具体落地。',
    summaryEn:
      'Former CEO of IMDA; oversees the operational rollout of digital economy, AI governance and data centre policy.',
    channels: [
      {
        platform: 'linkedin',
        url: 'https://www.linkedin.com/in/kiat-how-tan-59933736/',
        primary: true,
      },
      { platform: 'facebook', url: 'https://www.facebook.com/TanKiatHow/' },
    ],
  },
  {
    id: 'ho-teck-hua',
    name: 'Ho Teck Hua',
    zhName: '何德华',
    aliases: ['Prof Ho Teck Hua', 'Professor Ho Teck Hua'],
    title: 'President of NTU, Founding Executive Chairman of AI Singapore',
    zhTitle: 'NTU 校长 / AI Singapore 创始主席',
    category: 'academic',
    roles: ['academic', 'researcher'],
    affiliations: ['NTU', 'AISG'],
    party: null,
    summary: 'AI Singapore 创始人，推动 SEA-LION、AIAP 等核心项目，新加坡 AI 研究生态的奠基者。',
    summaryEn:
      "Founder of AI Singapore; drives flagship programmes including SEA-LION and AIAP, and is the founding figure of Singapore's AI research ecosystem.",
    channels: [
      {
        platform: 'website',
        url: 'https://www.ntu.edu.sg/about-us/university-leadership/profiles/professor-ho-teck-hua',
        label: 'NTU 官方档案',
        labelEn: 'NTU official profile',
        primary: true,
      },
    ],
  },
  {
    id: 'laurence-liew',
    name: 'Laurence Liew',
    zhName: '刘劲松',
    aliases: [],
    title: 'Director of AI Innovation, AI Singapore',
    zhTitle: 'AI Singapore AI 创新总监',
    category: 'academic',
    roles: ['academic', 'executive'],
    affiliations: ['AISG'],
    party: null,
    summary: '100E、AIAP、LearnAI 计划的推动者，20 万+新加坡人接受 AI 教育，GPAI 创新商业化联合主席。',
    summaryEn:
      "Drives the 100E, AIAP and LearnAI programmes — 200,000+ Singaporeans have received AI education through these initiatives; co-chairs GPAI's Innovation and Commercialisation working group.",
    channels: [
      {
        platform: 'linkedin',
        url: 'https://www.linkedin.com/in/laurenceliew/',
        primary: true,
      },
      {
        platform: 'website',
        url: 'https://aifirstnation.org/',
        label: 'AI-First Nation 博客',
        labelEn: 'AI-First Nation blog',
      },
    ],
  },
];

// ── Auto-seeded MP / minister stubs (Phase 1) ────────────────────────────
// 213 records from `npx tsx scripts/audit-speakers.ts` + `generate-people-stubs.ts`.
// Hand-curate zhName / zhTitle / summary / party / channels over time.
//
// JSON-imported so the 213 records aren't a TypeScript literal in src/.
// Shape enforced by scripts/verify-graph.ts in CI.
export const mpStubs: Person[] = mpStubsJson as Person[];

// Master list — every Person known to the graph. Used by findPersonId,
// /people/[id] static paths, and the verify-graph script. Do not iterate
// this in render templates with 220+ output nodes — voices.ts only
// re-exports the curated `people` array for the /voices page.
export const allPeople: Person[] = [...people, ...mpStubs];
