import { getRssString } from '@astrojs/rss';

import { SITE, APP_BLOG } from 'astrowind:config';
import { fetchPosts } from '~/utils/blog';
import { getPermalink } from '~/utils/permalinks';

export const GET = async () => {
  if (!APP_BLOG.isEnabled) {
    return new Response(null, { status: 404, statusText: 'Not found' });
  }

  const posts = (await fetchPosts()).filter((p) => p.lang === 'en');

  const rss = await getRssString({
    title: `Singapore AI Observatory`,
    description: 'Independent analysis of Singapore’s AI strategy.',
    site: import.meta.env.SITE,

    items: posts.map((post) => ({
      link: getPermalink(post.permalink, 'post'),
      title: post.title,
      description: post.excerpt,
      pubDate: post.publishDate,
    })),

    trailingSlash: SITE.trailingSlash,
  });

  return new Response(rss, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
