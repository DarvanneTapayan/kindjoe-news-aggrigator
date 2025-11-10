export interface ArticleLink {
  text: string;
  href: string;
}

export interface UiNewsItem {
  timeAgo: string;
  source: string;
  imageUrl: string;
  imageAlt: string;
  headline: string;
  headlineHref: string;
  relatedArticles: ArticleLink[];
}

export interface BreakingNews {
  tag: string;
  headline: string;
  callToActionText: string;
  callToActionHref: string;
  className?: string;
  source?: string;
  timeAgo?: string;
}

export interface TrendingTopic {
  name: string;
  href: string;
}

export interface FeaturedArticle {
  imageUrl: string;
  imageAlt: string;
  href: string;
  headline: string;
  description: string;
}
