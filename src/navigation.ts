import { getPermalink, getAsset } from './utils/permalinks';
import { SITE_VERSION } from './version';

export const headerData = {
  links: [
    {
      text: '政策观察',
      links: [
        { text: '政策文件', href: getPermalink('/policies') },
        { text: '发展时间线', href: getPermalink('/timeline') },
        { text: '生态地图', href: getPermalink('/ecosystem') },
      ],
    },
    {
      text: 'AI 追踪',
      links: [
        { text: '关键指标', href: getPermalink('/tracker') },
        { text: '人才培养', href: getPermalink('/talent') },
        { text: '官方开源与研究', href: getPermalink('/opensource') },
        { text: '产学研开源生态', href: getPermalink('/community-opensource') },
        { text: 'AI 创业生态', href: getPermalink('/startups') },
      ],
    },
    {
      text: '参考资源',
      href: getPermalink('/references'),
    },
  ],
  actions: [{ text: 'GitHub', href: 'https://github.com/meltflake/aisg', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: '政策观察',
      links: [
        { text: '政策文件', href: getPermalink('/policies') },
        { text: '发展时间线', href: getPermalink('/timeline') },
        { text: '生态地图', href: getPermalink('/ecosystem') },
      ],
    },
    {
      title: 'AI 追踪',
      links: [
        { text: '关键指标', href: getPermalink('/tracker') },
        { text: '人才培养', href: getPermalink('/talent') },
        { text: '官方开源与研究', href: getPermalink('/opensource') },
        { text: '产学研开源生态', href: getPermalink('/community-opensource') },
        { text: 'AI 创业生态', href: getPermalink('/startups') },
      ],
    },
    {
      title: '更多',
      links: [
        { text: '参考资源', href: getPermalink('/references') },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/meltflake/aisg' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: 'SG AI 观察 v' + SITE_VERSION + ' · 由 <a class="text-blue-600 underline dark:text-muted" href="https://github.com/meltflake">meltflake</a> 维护',
};
