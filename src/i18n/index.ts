// i18n core (v0.5.0).
//
// Multi-locale site. zh = default (unprefixed at /). Every other locale
// is prefixed (/en/, /ja/, /ko/, ...). All chrome strings live in
// dictionaries below; data records carry zh as the default field plus
// optional `*<Cap-Lang>` siblings (titleEn, titleJa, titleKo, ...).
//
// To add a new locale L:
//   1. Add 'L' to the Lang union and LOCALES array.
//   2. Add an `<L>` dictionary export below (mirroring `zh`'s keys).
//   3. Backfill `titleL` / `descriptionL` / etc. on user-visible data
//      fields you want translated (otherwise pickLocalized falls back
//      to zh — visible to the reader as "not yet translated").
//   4. Add a fallback chain entry for L in `FALLBACK_CHAINS` if you
//      want a different fallback than direct → zh.
//   5. Run `npm run check:i18n` (set ROOT=dist/L) to verify.

export type Lang = 'zh' | 'en';

export const LOCALES: Lang[] = ['zh', 'en'];
export const DEFAULT_LOCALE: Lang = 'zh';

/** Per-locale fallback chain. Looked up in order; the first non-empty
 *  hit wins. Always ends with `DEFAULT_LOCALE`. */
const FALLBACK_CHAINS: Record<Lang, Lang[]> = {
  zh: ['zh'],
  en: ['en', 'zh'],
};

/** Capitalize first char for sibling-field naming.
 *  zh → '' (uses bare `key`), en → 'En', ja → 'Ja', ... */
function siblingSuffix(lang: Lang): string {
  if (lang === DEFAULT_LOCALE) return '';
  return lang.charAt(0).toUpperCase() + lang.slice(1);
}

/** Read locale from a URL pathname. /en/foo → 'en', /foo → 'zh'. */
export function getLangFromPath(pathname: string): Lang {
  const seg = pathname.replace(/^\/+/, '').split('/')[0] as Lang;
  return LOCALES.includes(seg) && seg !== DEFAULT_LOCALE ? seg : DEFAULT_LOCALE;
}

/** Return URL prefix for a locale. zh → '', en → '/en'. */
export function localePrefix(lang: Lang): string {
  return lang === DEFAULT_LOCALE ? '' : `/${lang}`;
}

/** Build a localized href. localizedHref('/policies/', 'en') → '/en/policies/' */
export function localizedHref(path: string, lang: Lang): string {
  if (!path.startsWith('/')) path = '/' + path;
  if (lang === DEFAULT_LOCALE) return path;
  const prefix = `/${lang}`;
  if (path === prefix || path.startsWith(prefix + '/')) return path;
  return prefix + path;
}

/** Strip locale prefix to recover the canonical default-locale path. */
export function unprefixed(path: string): string {
  for (const lang of LOCALES) {
    if (lang === DEFAULT_LOCALE) continue;
    const prefix = `/${lang}`;
    if (path === prefix || path === prefix + '/') return '/';
    if (path.startsWith(prefix + '/')) return path.slice(prefix.length);
  }
  return path;
}

/** Pick a localized field from an object using the lang's fallback chain.
 *
 *  Two call shapes (kept compatible with the existing call sites):
 *
 *    pickLocalized(record, 'title', lang)              // shape A: scales to N langs
 *    pickLocalized(record, 'title', 'titleEn', lang)   // shape B: legacy 2-lang
 *
 *  Shape A computes the sibling field name automatically:
 *    lang='zh' → record.title
 *    lang='en' → record.titleEn   (fallback record.title)
 *    lang='ja' → record.titleJa   (fallback record.title)
 *
 *  Shape B is the legacy explicit form; both keys are honoured but the
 *  function only looks up exactly those two. New code should prefer
 *  shape A. */
export function pickLocalized<T = string>(record: unknown, baseKey: string, lang: Lang): T | null | undefined;
export function pickLocalized<T = string>(
  record: unknown,
  zhKey: string,
  enKey: string,
  lang: Lang
): T | null | undefined;
export function pickLocalized(
  record: unknown,
  baseOrZhKey: string,
  enKeyOrLang: string | Lang,
  maybeLang?: Lang
): string | null | undefined {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const r = record as any;
  if (r == null) return undefined;

  // Shape B (legacy): (record, zhKey, enKey, lang)
  if (typeof maybeLang === 'string') {
    const lang = maybeLang as Lang;
    const zhKey = baseOrZhKey;
    const enKey = enKeyOrLang as string;
    if (lang === 'en') {
      const v = r[enKey];
      if (v != null && v !== '') return v as string;
    }
    return r[zhKey] as string | null | undefined;
  }

  // Shape A: (record, baseKey, lang)
  const lang = enKeyOrLang as Lang;
  const baseKey = baseOrZhKey;
  for (const candidate of FALLBACK_CHAINS[lang] || [lang, DEFAULT_LOCALE]) {
    const key = candidate === DEFAULT_LOCALE ? baseKey : `${baseKey}${siblingSuffix(candidate)}`;
    const v = r[key];
    if (v != null && v !== '') return v as string;
  }
  return r[baseKey] as string | null | undefined;
}

/** Default English labels for known social-channel platforms. Pages may
 *  augment this map locally if they want platform-specific labels. */
const PLATFORM_LABELS_EN: Record<string, string> = {
  twitter: 'X (Twitter)',
  x: 'X',
  linkedin: 'LinkedIn',
  facebook: 'Facebook',
  website: 'Website',
  newsletter: 'Newsletter',
  github: 'GitHub',
  youtube: 'YouTube',
};

/** Resolve a SocialChannel display label for the given lang.
 *  EN: prefer labelEn → platform map → label fallback only if Latin-only.
 *  zh: prefer label → platform map.
 *  Never emits CJK on EN pages as long as channels with zh `label` also
 *  set `labelEn`. */
export function channelLabel(
  ch: { platform: string; label?: string; labelEn?: string },
  lang: Lang,
  platformLabelsOverride?: Record<string, string>
): string {
  const platformMap = platformLabelsOverride ?? PLATFORM_LABELS_EN;
  if (lang === 'en') {
    if (ch.labelEn) return ch.labelEn;
    if (platformMap[ch.platform]) return platformMap[ch.platform];
    if (ch.label && !/[一-鿿]/.test(ch.label)) return ch.label; // Latin label is safe
    return ch.platform;
  }
  return ch.label || platformMap[ch.platform] || ch.platform;
}

/** Dictionary lookup. Returns a stable string. */
export function t(lang: Lang, key: keyof typeof zh): string {
  const dict = lang === 'en' ? en : zh;
  return (dict[key] as string) ?? (zh[key] as string) ?? key;
}

// ---- Dictionaries ------------------------------------------------------

export const zh = {
  // Site identity
  siteName: '新加坡 AI 观察',
  siteShortName: '新加坡 AI',
  siteTagline: '深度观察新加坡 AI 生态与战略',
  siteDescription: '深度观察新加坡 AI 生态与战略——独立视角的中文分析平台。追踪政策、辩论、抓手与生态。',

  // Navigation labels (top-level)
  navAnalysis: '深度分析',
  navPolicy: '政策与战略',
  navDebates: '辩论与声音',
  navData: '数据追踪',
  navAbout: '关于',

  // Sub-navigation
  navPolicies: '政策文件',
  navLevers: '国家 AI 抓手图谱',
  navLegalAi: 'AI 法律框架',
  navTimeline: '发展时间线',
  navEcosystem: '生态地图',
  navParliament: '国会 AI 焦点',
  navVoices: 'AI 影响力图谱',
  navVideos: 'AI 视频观点',
  navTracker: '关键指标',
  navStartups: 'AI 创业生态',
  navTalent: '人才培养',
  navOpensource: '官方开源与研究',
  navCommunityOpensource: '产学研开源生态',
  navBenchmarking: '国际对标',
  navAboutSite: '关于本站',
  navFieldnotes: '实战经验',
  navReferences: '参考资源',

  // Common UI
  search: '搜索',
  searchPlaceholder: '搜索政策、辩论、抓手、人物、博文……',
  closeSearch: '关闭搜索',
  loadMore: '加载更多',
  readMore: '阅读全文',
  backTo: '返回',
  back: '返回',
  related: '关联',
  relatedReading: '相关阅读',
  source: '来源',
  sourcePdf: '原文 PDF',
  translation: '中文翻译',
  englishTranslation: 'English translation',
  participants: '参与人员',
  authors: '主要作者 / 推动者',
  policySignal: '政策信号',
  governmentStance: '政府立场',
  oppositionStance: '质询立场',
  keyPoints: '关键要点',
  fullTextEn: '英文原文',
  hansardSource: 'Hansard 原始记录',
  controversyLevel: '争议度',

  // Homepage chrome
  heroEyebrow: '新加坡 AI 观察',
  heroHeadline: '新加坡的 AI 战略，',
  heroHeadline2: '真正的护城河不在技术，在制度。',
  heroSubtitle:
    '这里追踪一个城邦在 AI 时代的国家级转型——政策文件、国会辩论、抓手图谱、创业生态、法律框架。不只是信息整理，更是独立的中文分析。',
  heroSubtitleNeutral: '一个城邦在 AI 时代的国家级转型——政策文件、国会辩论、抓手图谱、创业生态、法律框架的独立分析。',
  ctaReadCore: '阅读核心论证',
  ctaBrowseAll: '浏览全部分析 →',
  freshnessPolicies: '核心政策',
  freshnessDebates: '国会辩论',
  freshnessLevers: '抓手项目',
  freshnessUpdated: '最近更新',
  latestAnalyses: '最新分析',
  viewAll: '查看全部 →',
  viewAllLeversCta: '完整图谱 →',
  viewAllDebatesCta: '全部 {count} 场 →',
  leversSection: '国家 AI 抓手图谱',
  leversBlurb: '新加坡 AI 战略不能按部门理解，要按"AI 引入路径"理解。{count} 个具体落地项目，归到 6 个国家级抓手。',
  recentDebatesSection: '最近国会辩论',
  recentDebatesBlurb: '从 {from} 到 {to}，议会围绕 AI 的每一次质询、答复与辩论。',
  closingThesis: '新加坡的 AI 马六甲海峡在哪里？真正的护城河不在算法，在制度——快速识别问题并果断转向的能力。',
  closingCta: '读完整论证',
  leverWord: '抓手',

  // Listings / categories
  policiesPageTitle: 'AI 政策库',
  policiesPageBlurb: '新加坡核心 AI 相关政策文档汇编，按分类整理，每类按时间倒序排列。',
  debatesPageTitle: '国会 AI 焦点',
  blogIndexTitle: '深度分析',
  aboutPageTitle: '关于本站',

  // Banner: language switch suggestion
  langBannerEn: 'English version available',
  langBannerSwitch: 'Read in English →',
  langBannerDismiss: '关闭',
  langZh: '中文',
  langEn: 'English',
  langToggleLabel: '切换语言',

  // Footnotes
  footnotes: '参考文献',

  // Misc
  viewSource: '查看源码',
  countSuffix: '场',
  copyrightOpenSource: '源代码 MIT 许可证；内容 CC BY 4.0',
};

export const en: Partial<Record<keyof typeof zh, string>> = {
  siteName: 'Singapore AI Observatory',
  siteShortName: 'SG AI',
  siteTagline: 'In-depth coverage of Singapore’s AI strategy',
  siteDescription:
    'Independent analysis of Singapore’s AI strategy — tracking policies, parliamentary debates, levers, and the startup ecosystem.',

  navAnalysis: 'Analysis',
  navPolicy: 'Policy & Strategy',
  navDebates: 'Debates & Voices',
  navData: 'Data',
  navAbout: 'About',

  navPolicies: 'Policy Library',
  navLevers: 'National AI Levers',
  navLegalAi: 'AI Legal Framework',
  navTimeline: 'Timeline',
  navEcosystem: 'Ecosystem Map',
  navParliament: 'Parliament AI Focus',
  navVoices: 'Influence Map',
  navVideos: 'Video Library',
  navTracker: 'Key Metrics',
  navStartups: 'AI Startups',
  navTalent: 'Talent Pipeline',
  navOpensource: 'Official Open Source',
  navCommunityOpensource: 'Community Open Source',
  navBenchmarking: 'International Benchmarks',
  navAboutSite: 'About',
  navFieldnotes: 'Field Notes',
  navReferences: 'References',

  search: 'Search',
  searchPlaceholder: 'Search policies, debates, levers, people, articles…',
  closeSearch: 'Close search',
  loadMore: 'Load more',
  readMore: 'Read more',
  backTo: 'Back to',
  back: 'Back',
  related: 'Related',
  relatedReading: 'Related Reading',
  source: 'Source',
  sourcePdf: 'PDF',
  translation: 'Chinese translation',
  englishTranslation: 'English translation',
  participants: 'Participants',
  authors: 'Lead authors / drivers',
  policySignal: 'Policy Signal',
  governmentStance: 'Government Position',
  oppositionStance: 'Opposition Position',
  keyPoints: 'Key Points',
  fullTextEn: 'Original Text (English)',
  hansardSource: 'Hansard Source',
  controversyLevel: 'Controversy',

  heroEyebrow: 'Singapore AI Observatory',
  heroHeadline: 'Singapore’s AI strategy:',
  heroHeadline2: 'the real moat is institutional, not technical.',
  heroSubtitle:
    'Tracking how one city-state is reorganising itself for the AI era — policies, parliamentary debates, levers, startups, and law. Not just a feed. Independent analysis.',
  heroSubtitleNeutral:
    'How one city-state is reorganising itself for the AI era — independent analysis of policy, parliament, levers, startups, and law.',
  ctaReadCore: 'Read the core argument',
  ctaBrowseAll: 'Browse all analyses →',
  freshnessPolicies: 'Core policies',
  freshnessDebates: 'Parliamentary debates',
  freshnessLevers: 'Lever items',
  freshnessUpdated: 'Last updated',
  latestAnalyses: 'Latest Analyses',
  viewAll: 'View all →',
  viewAllLeversCta: 'Full lever map →',
  viewAllDebatesCta: 'All {count} debates →',
  leversSection: 'National AI Levers',
  leversBlurb:
    'Singapore’s AI strategy doesn’t map cleanly to ministries — read it by how AI gets pushed in. {count} concrete projects, 6 national-level levers.',
  recentDebatesSection: 'Recent Parliamentary Debates',
  recentDebatesBlurb: 'Every parliamentary question, response, and debate on AI from {from} to {to}.',
  closingThesis:
    'Where is Singapore’s AI Strait of Malacca? The real moat isn’t the algorithm — it’s the state’s ability to spot problems early and turn the ship fast.',
  closingCta: 'Read the full argument',
  leverWord: 'Lever',

  policiesPageTitle: 'AI Policy Library',
  policiesPageBlurb: 'Singapore’s core AI policy documents, grouped by category, newest first within each.',
  debatesPageTitle: 'Parliamentary AI Focus',
  blogIndexTitle: 'Analysis',
  aboutPageTitle: 'About',

  langBannerEn: 'English version available',
  langBannerSwitch: 'Read in English →',
  langBannerDismiss: 'Dismiss',
  langZh: '中文',
  langEn: 'English',
  langToggleLabel: 'Switch language',

  footnotes: 'References',

  viewSource: 'View source',
  countSuffix: '',
  copyrightOpenSource: 'Source MIT-licensed; content CC BY 4.0',
};
