import Parser from 'rss-parser';
import type { UiNewsItem, TrendingTopic, FeaturedArticle, BreakingNews, ArticleLink } from './types/ui';

const parser = new Parser({
  requestOptions: {
    headers: {
      'User-Agent': 'KindJoeNewsBot/1.0 (+https://kindjoe.example)',
      'Accept': 'application/rss+xml, application/atom+xml, application/xml;q=0.9, */*;q=0.8',
    },
    // @ts-expect-error forwarded to undici/fetch
    redirect: 'follow',
  },
  customFields: {
    item: [
      ['media:content', 'mediaContent', { keepArray: true }],
      ['media:thumbnail', 'mediaThumbnail', { keepArray: true }],
      ['content:encoded', 'contentEncoded'],
    ],
  },
});

function transformTitle(raw?: string): string {
  if (!raw) return '';
  let t = raw.trim();
  t = t.replace(/\s[-–|]\s(?:[^-–|]{2,40})$/i, '');
  t = t.replace(/^[\[(](?:breaking|update|opinion|watch|video):?\s*[\])]\s*/i, '');
  t = t.replace(/\s+/g, ' ').replace(/\s([:;,.!?])/g, '$1');
  if (t === t.toUpperCase() && /[A-Z]/.test(t)) t = t.charAt(0) + t.slice(1).toLowerCase();
  return t;
}

function timeAgoFrom(dateStr?: string): string {
  const now = new Date();
  const d = dateStr ? new Date(dateStr) : now;
  const diffMs = Math.max(0, now.getTime() - d.getTime());
  const mins = Math.floor(diffMs / 60000);
  if (mins < 1) return 'Just now';
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 7) return `${days}d ago`;
  const weeks = Math.floor(days / 7);
  if (weeks < 5) return `${weeks}w ago`;
  const months = Math.floor(days / 30);
  return `${months}mo ago`;
}

function firstImgFromHtml(html?: string): string | null {
  if (!html) return null;
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match?.[1] ?? null;
}

function pickImage(item: any): string | null {
  const enc = item?.enclosure?.url || item?.enclosure?.url?.href;
  if (enc) return enc;

  const media = Array.isArray(item?.mediaContent) ? item.mediaContent : item?.mediaContent ? [item.mediaContent] : [];
  for (const m of media) {
    if (!m) continue;
    if (m?.$?.url) return m.$.url;
    if (m?.url) return m.url;
  }

  const thumbs = Array.isArray(item?.mediaThumbnail) ? item.mediaThumbnail : item?.mediaThumbnail ? [item.mediaThumbnail] : [];
  for (const t of thumbs) {
    if (t?.$?.url) return t.$.url;
    if (t?.url) return t.url;
  }

  return firstImgFromHtml(item?.contentEncoded || item?.['content:encoded'] || item?.content || item?.summary);
}

function normalizeUrl(u?: string): string {
  return u || '#';
}

async function safeParseURL(url: string) {
  try {
    return await parser.parseURL(url);
  } catch (err: any) {
    console.error('RSS fetch failed:', url, err?.message ?? err);
    return { items: [] as any[] };
  }
}

export async function getBreakingNews(): Promise<BreakingNews> {
  try {
    const feed = await parser.parseURL('https://feeds.bbci.co.uk/news/rss.xml');
    const firstItem = feed.items?.[0];
    if (!firstItem) throw new Error('No breaking news item found');
    const headline = transformTitle(firstItem.title ?? 'Breaking News');
    const link = normalizeUrl(firstItem.link as string);
    const timeAgo = timeAgoFrom(firstItem.isoDate || firstItem.pubDate);

    return {
      tag: 'BREAKING',
      headline,
      callToActionText: 'Read on BBC News →',
      callToActionHref: link,
      className: 'bg-red-700 text-white',
      source: 'BBC News',
      timeAgo,
    };
  } catch {
    return {
      tag: 'BREAKING',
      headline: 'Major global event unfolding — stay tuned for live updates from around the world.',
      callToActionText: 'View live coverage',
      callToActionHref: '/latest',
      className: 'bg-red-700 text-white',
      source: 'KindJoe Aggregator',
      timeAgo: 'Just now',
    };
  }
}

export async function getTrendingTopics(): Promise<TrendingTopic[]> {
  return [
    { name: 'OpenAI', href: '/tech' },
    { name: 'Climate', href: '/lifestyle' },
    { name: 'Euro 2025', href: '/sports' },
    { name: 'AI Regulation', href: '/politics' },
    { name: 'SpaceX', href: '/tech' },
  ];
}

export async function getFeaturedArticle(): Promise<FeaturedArticle> {
  return {
    imageUrl: 'https://placehold.co/960x540/jpg',
    imageAlt: 'Featured story',
    href: '/featured',
    headline: 'Inside the race to build safer, smaller, and smarter AI models',
    description:
      'We explore the research, risks, and the real-world use cases reshaping AI in 2025—and what it means for businesses and creators.',
  };
}

export async function fetchNewsFromRssFeed(
  feedUrl: string,
  mainCount: number,
  relatedPerCard: number,
  sourceName: string
): Promise<UiNewsItem[]> {
  const feed = await safeParseURL(feedUrl);
  const items = Array.isArray(feed.items) ? feed.items : [];

  const mapped = items.map((it) => {
    const title = transformTitle(it.title ?? '');
    const link = normalizeUrl((it.link as string) ?? '#');
    const image = pickImage(it) || 'https://placehold.co/800x450/jpg';
    const timeAgo = timeAgoFrom(it.isoDate || it.pubDate);
    return { title, link, image, timeAgo };
  });

  const result: UiNewsItem[] = [];
  for (let i = 0; i < mainCount && i < mapped.length; i++) {
    const main = mapped[i];

    const relatedPool = mapped.slice(i + 1, i + 1 + relatedPerCard);
    const related: ArticleLink[] = relatedPool.map((r) => ({ text: r.title, href: r.link }));

    result.push({
      timeAgo: main.timeAgo,
      source: sourceName,
      imageUrl: main.image,
      imageAlt: main.title,
      headline: main.title,
      headlineHref: main.link,
      relatedArticles: related,
    });
  }

  return result;
}
