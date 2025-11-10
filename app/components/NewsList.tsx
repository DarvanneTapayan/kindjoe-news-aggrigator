'use client';

import React from 'react';
import NewsCard from './NewsCard';
import type { UiNewsItem } from '../../lib/types/ui';

interface NewsListProps {
  newsData: UiNewsItem[];
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
