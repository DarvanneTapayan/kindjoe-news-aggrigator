// lib/fetchNews.ts
import { Article, NewsItem } from './newsData'; // Keep interfaces here
import { breakingNews, mockNewsData, trendingTopics, featuredArticle } from './mockData'; // Import mock data from a new file

// Simulate an API call delay
const simulateApiDelay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getBreakingNews() {
  await simulateApiDelay(200); // Simulate network latency
  // In a real app, you'd fetch from an API:
  // const res = await fetch('YOUR_API_ENDPOINT/breaking-news');
  // const data = await res.json();
  // return data;
  return breakingNews;
}

export async function getLatestNews(): Promise<NewsItem[]> {
  await simulateApiDelay(300); // Simulate network latency
  // In a real app:
  // const res = await fetch('YOUR_API_ENDPOINT/latest-news');
  // const data = await res.json();
  // return data;
  return mockNewsData;
}

export async function getTrendingTopics() {
  await simulateApiDelay(150); // Simulate network latency
  // In a real app:
  // const res = await fetch('YOUR_API_ENDPOINT/trending-topics');
  // const data = await res.json();
  // return data;
  return trendingTopics;
}

export async function getFeaturedArticle() {
  await simulateApiDelay(250); // Simulate network latency
  // In a real app:
  // const res = await fetch('YOUR_API_ENDPOINT/featured-article');
  // const data = await res.json();
  // return data;
  return featuredArticle;
}