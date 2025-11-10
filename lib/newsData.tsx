// lib/newsData.ts (new purpose: just interfaces)
export interface Article {
  text: string;
  href: string;
}

export interface BreakingNews { // Added this interface for breaking news specifically
  tag: string;
  headline: string;
  callToActionText: string;
  callToActionHref: string;
}

export interface NewsItem {
  timeAgo: string;
  imageUrl: string;
  imageAlt: string;
  headline: string;
  headlineHref: string;
  relatedArticles: Article[];
}

export interface TrendingTopic { // Added this interface for trending topics
  name: string;
  href: string;
}

export interface FeaturedArticle { // Added this interface for featured article
  imageUrl: string;
  imageAlt: string;
  headline: string;
  description: string;
  href: string;
}