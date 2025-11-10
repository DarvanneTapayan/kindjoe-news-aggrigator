import type { UiNewsItem } from './types/ui';

export const newsData: UiNewsItem[] = [
  {
    timeAgo: '2h ago',
    source: 'KindJoe',
    imageUrl: 'https://placehold.co/800x450',
    imageAlt: 'Placeholder image',
    headline: 'Local startup raises $10M for AI-driven seafood tracking',
    headlineHref: '/articles/startup-ai-seafood',
    relatedArticles: [
      { text: 'How AI is transforming fisheries', href: '/articles/ai-fisheries' },
      { text: 'Sustainable seafood trends in 2025', href: '/articles/seafood-trends' },
    ],
  },
  {
    timeAgo: '5h ago',
    source: 'KindJoe',
    imageUrl: 'https://placehold.co/800x450',
    imageAlt: 'Placeholder image',
    headline: 'Government announces new tech innovation grants',
    headlineHref: '/articles/innovation-grants',
    relatedArticles: [
      { text: 'Startup funding landscape shifts in 2025', href: '/articles/startup-funding' },
      { text: 'AI regulation updates', href: '/articles/ai-regulation' },
    ],
  },
];
