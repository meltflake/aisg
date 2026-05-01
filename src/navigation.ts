import { getPermalink, getAsset } from './utils/permalinks';
import { SITE_VERSION, SITE_UPDATED } from './version';

// Phase 3: navigation flattened from 4 dropdowns + 17 items to 5 groups
// with 观点 (深度分析) promoted to a top-level link. Emojis stripped from
// chrome — the only place emojis are allowed is inside narrative posts.

export const headerData = {
  links: [
    { text: '深度分析', href: getPermalink('/blog') },
    {
      text: '政策与战略',
      links: [
        { text: '政策文件', href: getPermalink('/policies') },
        { text: '国家 AI 抓手图谱', href: getPermalink('/levers') },
        { text: 'AI 法律框架', href: getPermalink('/legal-ai') },
        { text: '发展时间线', href: getPermalink('/timeline') },
        { text: '生态地图', href: getPermalink('/ecosystem') },
      ],
    },
    {
      text: '辩论与声音',
      links: [
        { text: '国会 AI 焦点', href: getPermalink('/debates') },
        { text: 'AI 影响力图谱', href: getPermalink('/voices') },
        { text: 'AI 视频观点', href: getPermalink('/videos') },
      ],
    },
    {
      text: '数据追踪',
      links: [
        { text: '关键指标', href: getPermalink('/tracker') },
        { text: 'AI 创业生态', href: getPermalink('/startups') },
        { text: '人才培养', href: getPermalink('/talent') },
        { text: '官方开源与研究', href: getPermalink('/opensource') },
        { text: '产学研开源生态', href: getPermalink('/community-opensource') },
        { text: '国际对标', href: getPermalink('/benchmarking') },
      ],
    },
    {
      text: '关于',
      links: [
        { text: '关于本站', href: getPermalink('/about') },
        { text: '实战经验', href: getPermalink('/fieldnotes') },
        { text: '参考资源', href: getPermalink('/references') },
      ],
    },
  ],
  actions: [{ text: 'GitHub', href: 'https://github.com/meltflake/sgai', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: '深度分析',
      links: [
        { text: '全部文章', href: getPermalink('/blog') },
        { text: '关于本站', href: getPermalink('/about') },
      ],
    },
    {
      title: '政策与战略',
      links: [
        { text: '政策文件', href: getPermalink('/policies') },
        { text: '国家 AI 抓手图谱', href: getPermalink('/levers') },
        { text: 'AI 法律框架', href: getPermalink('/legal-ai') },
        { text: '发展时间线', href: getPermalink('/timeline') },
        { text: '生态地图', href: getPermalink('/ecosystem') },
      ],
    },
    {
      title: '辩论与声音',
      links: [
        { text: '国会 AI 焦点', href: getPermalink('/debates') },
        { text: 'AI 影响力图谱', href: getPermalink('/voices') },
        { text: 'AI 视频观点', href: getPermalink('/videos') },
      ],
    },
    {
      title: '数据追踪',
      links: [
        { text: '关键指标', href: getPermalink('/tracker') },
        { text: 'AI 创业生态', href: getPermalink('/startups') },
        { text: '人才培养', href: getPermalink('/talent') },
        { text: '官方开源与研究', href: getPermalink('/opensource') },
        { text: '产学研开源生态', href: getPermalink('/community-opensource') },
        { text: '国际对标', href: getPermalink('/benchmarking') },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/meltflake/sgai' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote:
    'SG AI 观察 v' +
    SITE_VERSION +
    ' · 最近更新 ' +
    SITE_UPDATED +
    ' · 由 <a class="text-primary underline hover:text-secondary" href="https://github.com/meltflake">meltflake</a> 维护',
};
