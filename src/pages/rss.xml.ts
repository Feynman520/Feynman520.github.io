import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const updates = (await getCollection('updates')).sort((a, b) => b.data.date.localeCompare(a.data.date));
  return rss({
    title: '함세준의 책 — 업데이트',
    description: '실습 자료 갱신과 정오표 소식을 전합니다.',
    site: context.site!,
    items: updates.map((update) => ({
      title: update.data.title,
      pubDate: new Date(`${update.data.date}T00:00:00+09:00`),
      link: '/updates/',
      description: update.body ?? '',
    })),
    customData: '<language>ko</language>',
  });
}
