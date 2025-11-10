// lib/newsData.ts
export interface Article {
  text: string;
  href: string;
}

export interface NewsItem {
  timeAgo: string;
  imageUrl: string;
  imageAlt: string;
  headline: string;
  headlineHref: string;
  relatedArticles: Article[];
}

// You can swap this back to your internal route if you prefer:
export const breakingNews = {
  tag: 'EXCLUSIVE',
  headline: 'U.S. judge temporarily blocks Trump move for states to “undo” food-aid benefits',
  callToActionText: 'Read the full story →',
  callToActionHref: 'https://www.reuters.com/world/us/us-judge-temporarily-blocks-trump-move-states-undo-food-aid-benefits-2025-11-10/',
};

export const mockNewsData: NewsItem[] = [
  {
    timeAgo: '10m ago',
    imageUrl: 'https://placehold.co/586x390/007bff/ffffff?text=HONDA+EV+CHALLENGE',
    imageAlt: 'Honda faces competition from Chinese EV makers',
    headline: 'Honda’s bigger threat comes from China’s EV makers, not tariffs or chips',
    headlineHref: 'https://www.reuters.com/business/autos-transportation/hondas-bigger-threat-comes-chinas-ev-makers-not-tariffs-or-chips-2025-11-10/',
    relatedArticles: [
      { text: 'Honda cuts profit outlook by 1/5', href: 'https://www.reuters.com/business/autos-transportation/hondas-bigger-threat-comes-chinas-ev-makers-not-tariffs-or-chips-2025-11-10/' },
      { text: 'Chinese EV makers gain ground globally', href: 'https://www.reuters.com/business/autos-transportation/china-ev-makers-expand-global-sales-2025-11-10/' },
      { text: 'U.S. tariffs hit auto supply chains', href: 'https://www.reuters.com/business/autos-transportation/us-tariffs-auto-supply-chain-2025-11-10/' },
      { text: 'EV battery costs rise amid chip shortage', href: 'https://www.reuters.com/business/autos-transportation/ev-battery-costs-rise-chip-shortage-2025-11-10/' },
      { text: 'Japan auto exports shrink in Asia outside China', href: 'https://www.reuters.com/business/autos-transportation/japan-auto-exports-shrink-asia-2025-11-10/' },
    ],
  },
  {
    timeAgo: '25m ago',
    imageUrl: 'https://placehold.co/586x390/28a745/ffffff?text=FOOD+AID+RULING',
    imageAlt: 'Court blocks Trump move to undo food-aid benefits',
    headline: 'US judge temporarily blocks Trump move for states to “undo” food-aid benefits',
    headlineHref: 'https://www.reuters.com/world/us/us-judge-temporarily-blocks-trump-move-states-undo-food-aid-benefits-2025-11-10/',
    relatedArticles: [
      { text: 'Court order for full SNAP funding', href: 'https://www.reuters.com/world/us/trump-administration-cannot-withhold-4-billion-food-aid-us-appeals-court-rules-2025-11-10/' },
      { text: 'Impact of shutdown on 42 million Americans', href: 'https://www.reuters.com/world/us/us-judge-temporarily-blocks-trump-move-states-undo-food-aid-benefits-2025-11-10/' },
      { text: 'US appeals court backs food-aid funding', href: 'https://www.reuters.com/world/us/trump-administration-cannot-withhold-4-billion-food-aid-us-appeals-court-rules-2025-11-10/' },
      { text: 'States scramble to issue benefits during shutdown', href: 'https://www.reuters.com/world/us/states-snap-benefits-2025-11-10/' },
      { text: 'What this means for low-income Americans', href: 'https://www.reuters.com/world/us/what-this-means-for-low-income-americans-snap-2025-11-10/' },
    ],
  },
  {
    timeAgo: '40m ago',
    imageUrl: 'https://placehold.co/586x390/ffc107/333333?text=RETAIL+RISK+ALERT',
    imageAlt: 'Retail investors pull back after record rally',
    headline: 'Retail rally running out of steam after record streak, J.P. Morgan warns',
    headlineHref: 'https://www.reuters.com/business/retail-consumer/retail-rally-running-out-of-steam-after-record-streak-jp-morgan-warns-2025-11-10/',
    relatedArticles: [
      { text: 'Call volumes slump as risk appetite fades', href: 'https://www.reuters.com/business/retail-consumer/retail-rally-running-out-of-steam-after-record-streak-jp-morgan-warns-2025-11-10/' },
      { text: 'Retail investors reassess bullish bets', href: 'https://www.reuters.com/business/retail-consumer/retail-investors-reassess-bullish-bets-2025-11-10/' },
      { text: 'Longest bullish streak ends, data shows', href: 'https://www.reuters.com/business/retail-consumer/longest-bullish-streak-ends-2025-11-10/' },
      { text: 'Government shutdown weighs on markets', href: 'https://www.reuters.com/business/retail-consumer/government-shutdown-markets-2025-11-10/' },
      { text: 'What comes next for consumer sentiment', href: 'https://www.reuters.com/business/retail-consumer/consumer-sentiment-next-phase-2025-11-10/' },
    ],
  },
  {
    timeAgo: '1h ago',
    imageUrl: 'https://placehold.co/586x390/17a2b8/ffffff?text=TRUMP+PARDONS',
    imageAlt: 'Trump pardons allies accused of election interference',
    headline: 'Trump pardons allies accused of seeking to overturn his 2020 election loss',
    headlineHref: 'https://www.reuters.com/legal/government/trump-pardons-allies-accused-seeking-overturn-his-2020-election-loss-2025-11-10/',
    relatedArticles: [
      { text: 'Who was pardoned and why?', href: 'https://www.reuters.com/legal/government/trump-pardons-allies-accused-seeking-overturn-his-2020-election-loss-2025-11-10/' },
      { text: 'Impact on justice department and politics', href: 'https://www.reuters.com/legal/government/impact-trump-pardons-justice-department-2025-11-10/' },
      { text: 'Reaction from congressional leaders', href: 'https://www.reuters.com/legal/government/reaction-congress-trump-pardons-2025-11-10/' },
      { text: 'Legal experts weigh precedent set', href: 'https://www.reuters.com/legal/government/legal-experts-weigh-precedent-trump-pardons-2025-11-10/' },
      { text: 'Election 2020 investigation continues', href: 'https://www.reuters.com/legal/government/election-2020-investigation-continues-2025-11-10/' },
    ],
  },
];

export const trendingTopics = [
  { name: 'Artificial Intelligence', href: '/topic/ai' },
  { name: 'Space Exploration', href: '/topic/space' },
  { name: 'Climate Change', href: '/topic/climate' },
  { name: 'Election 2024', href: '/topic/election' },
  { name: 'Healthy Living', href: '/topic/health' },
];

export const featuredArticle = {
  imageUrl: 'https://placehold.co/1200x600/6f42c1/ffffff?text=FEATURED+ARTICLE',
  imageAlt: 'Featured article image',
  headline: 'How remote work is reshaping cities',
  description:
    'A look at the long-term effects of WFH on urban development, economies, and communities.',
  href: '/lifestyle/remote-work-cities',
};
