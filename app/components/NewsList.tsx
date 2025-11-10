// app/components/NewsList.tsx
'use client';

import React from 'react';
import NewsCard from './NewsCard';

interface Article {
  text: string;
  href: string;
}

interface NewsItem {
  timeAgo: string;
  imageUrl: string;
  imageAlt: string;
  headline: string;
  headlineHref: string;
  relatedArticles: Article[];
}

interface NewsListProps {
  newsData: NewsItem[];
}

const NewsList: React.FC<NewsListProps> = ({ newsData }) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {newsData.map((data, index) => (
        <NewsCard key={index} {...data} />
      ))}
    </section>
  );
};

export default NewsList;
