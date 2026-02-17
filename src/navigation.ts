import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '政策库',
      href: getPermalink('/policies'),
    },
    {
      text: '政策演进',
      href: getPermalink('/evolution'),
    },
    {
      text: '执行追踪',
      href: getPermalink('/tracker'),
    },
    {
      text: '挑战分析',
      href: getPermalink('/challenges'),
    },
    {
      text: '参考资料',
      href: getPermalink('/references'),
    },
  ],
  actions: [{ text: 'GitHub', href: 'https://github.com/meltflake/aisg', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: '核心内容',
      links: [
        { text: '政策库', href: getPermalink('/policies') },
        { text: '政策演进', href: getPermalink('/evolution') },
        { text: '执行追踪', href: getPermalink('/tracker') },
      ],
    },
    {
      title: '深度分析',
      links: [
        { text: '挑战分析', href: getPermalink('/challenges') },
        { text: '参考资料', href: getPermalink('/references') },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/meltflake/aisg' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    新加坡 AI 政策洞察站 · 由 <a class="text-blue-600 underline dark:text-muted" href="https://github.com/meltflake">meltflake</a> 维护
  `,
};
