// lib/types/news.ts
export interface RelatedLink {
  title: string;
  href: string;
}

export interface NewsItem {
  id: string;
  title: string;
  href: string;
  summary?: string;
  publishedAt?: string;
  imageUrl?: string;
  imageAlt?: string;
  source: string;            // <- make this REQUIRED
  related?: RelatedLink[];
}

export interface BreakingNews {
  tag: string;
  headline: string;
  description?: string;
  href?: string;
  callToActionText?: string;
  callToActionHref?: string;
  imageUrl?: string;
  imageAlt?: string;
}

export interface TrendingTopic {
  name: string;
  href: string;
}

export interface FeaturedArticle {
  headline: string;
  description: string;
  href: string;
  imageUrl: string;
  imageAlt: string;
}
