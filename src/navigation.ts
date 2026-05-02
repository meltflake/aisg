import { getPermalink, getAsset } from './utils/permalinks';
import { SITE_VERSION, SITE_UPDATED } from './version';
import { localizedHref, t, type Lang } from './i18n';

// i18n (v0.3.0): navigation is now a function of lang. Header passes the
// current lang from URL; Footer uses the same. Both groups + sub-links
// resolve their labels through the dictionary.

const labelKeys = {
  analysis: 'navAnalysis',
  policy: 'navPolicy',
  debates: 'navDebates',
  data: 'navData',
  about: 'navAbout',
  policies: 'navPolicies',
  levers: 'navLevers',
  legalAi: 'navLegalAi',
  timeline: 'navTimeline',
  ecosystem: 'navEcosystem',
  parliament: 'navParliament',
  voices: 'navVoices',
  videos: 'navVideos',
  tracker: 'navTracker',
  startups: 'navStartups',
  talent: 'navTalent',
  opensource: 'navOpensource',
  communityOpensource: 'navCommunityOpensource',
  benchmarking: 'navBenchmarking',
  aboutSite: 'navAboutSite',
  fieldnotes: 'navFieldnotes',
  references: 'navReferences',
} as const;

function lh(path: string, lang: Lang): string {
  return localizedHref(getPermalink(path), lang);
}

export function getHeaderData(lang: Lang) {
  return {
    links: [
      { text: t(lang, labelKeys.analysis), href: lh('/blog', lang) },
      {
        text: t(lang, labelKeys.policy),
        links: [
          { text: t(lang, labelKeys.policies), href: lh('/policies', lang) },
          { text: t(lang, labelKeys.levers), href: lh('/levers', lang) },
          { text: t(lang, labelKeys.legalAi), href: lh('/legal-ai', lang) },
          { text: t(lang, labelKeys.timeline), href: lh('/timeline', lang) },
          { text: t(lang, labelKeys.ecosystem), href: lh('/ecosystem', lang) },
        ],
      },
      {
        text: t(lang, labelKeys.debates),
        links: [
          { text: t(lang, labelKeys.parliament), href: lh('/debates', lang) },
          { text: t(lang, labelKeys.voices), href: lh('/voices', lang) },
          { text: t(lang, labelKeys.videos), href: lh('/videos', lang) },
        ],
      },
      {
        text: t(lang, labelKeys.data),
        links: [
          { text: t(lang, labelKeys.tracker), href: lh('/tracker', lang) },
          { text: t(lang, labelKeys.startups), href: lh('/startups', lang) },
          { text: t(lang, labelKeys.talent), href: lh('/talent', lang) },
          { text: t(lang, labelKeys.opensource), href: lh('/opensource', lang) },
          { text: t(lang, labelKeys.communityOpensource), href: lh('/community-opensource', lang) },
          { text: t(lang, labelKeys.benchmarking), href: lh('/benchmarking', lang) },
          { text: t(lang, labelKeys.fieldnotes), href: lh('/fieldnotes', lang) },
          { text: t(lang, labelKeys.references), href: lh('/references', lang) },
        ],
      },
      // About moved to footer-only per request — keeps the header focused
      // on content navigation rather than meta links.
    ],
    actions: [],
  };
}

export function getFooterData(lang: Lang) {
  const updatedLabel = lang === 'en' ? 'Last updated' : '最近更新';
  const maintainedBy = lang === 'en' ? 'Maintained by' : '由';
  const closing = lang === 'en' ? '' : '维护';
  const handle = 'wulujia';
  return {
    links: [
      {
        title: t(lang, labelKeys.analysis),
        links: [{ text: lang === 'en' ? 'All articles' : '全部文章', href: lh('/blog', lang) }],
      },
      {
        title: t(lang, labelKeys.policy),
        links: [
          { text: t(lang, labelKeys.policies), href: lh('/policies', lang) },
          { text: t(lang, labelKeys.levers), href: lh('/levers', lang) },
          { text: t(lang, labelKeys.legalAi), href: lh('/legal-ai', lang) },
          { text: t(lang, labelKeys.timeline), href: lh('/timeline', lang) },
          { text: t(lang, labelKeys.ecosystem), href: lh('/ecosystem', lang) },
        ],
      },
      {
        title: t(lang, labelKeys.debates),
        links: [
          { text: t(lang, labelKeys.parliament), href: lh('/debates', lang) },
          { text: t(lang, labelKeys.voices), href: lh('/voices', lang) },
          { text: t(lang, labelKeys.videos), href: lh('/videos', lang) },
        ],
      },
      {
        title: t(lang, labelKeys.data),
        links: [
          { text: t(lang, labelKeys.tracker), href: lh('/tracker', lang) },
          { text: t(lang, labelKeys.startups), href: lh('/startups', lang) },
          { text: t(lang, labelKeys.talent), href: lh('/talent', lang) },
          { text: t(lang, labelKeys.opensource), href: lh('/opensource', lang) },
          { text: t(lang, labelKeys.communityOpensource), href: lh('/community-opensource', lang) },
          { text: t(lang, labelKeys.benchmarking), href: lh('/benchmarking', lang) },
        ],
      },
    ],
    secondaryLinks: [],
    socialLinks: [
      { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/meltflake/sgai' },
      { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset(lang === 'en' ? '/en/rss.xml' : '/rss.xml') },
    ],
    footNote: `${t(lang, 'siteName')} v${SITE_VERSION} · ${updatedLabel} ${SITE_UPDATED} · ${maintainedBy} ${handle}${closing ? ' ' + closing : ''}`,
  };
}

// Backwards-compatibility shims for any caller still importing the old
// constants. These resolve to the zh variant. New callers should use the
// getter functions above.
export const headerData = getHeaderData('zh');
export const footerData = getFooterData('zh');
