import React from 'react';
import Link from 'next/link';
import type { UiNewsItem } from '../../lib/types/ui';

type NewsCardProps = UiNewsItem;

const NewsCard: React.FC<NewsCardProps> = ({
  timeAgo,
  source,
  imageUrl,
  imageAlt,
  headline,
  headlineHref,
  relatedArticles = [],
}) => {
  return (
    <article className="flex flex-col gap-3 p-4 bg-white rounded-md text-gray-900">
      <div className="flex items-center gap-2 text-[11px] font-medium tracking-wide">
        <span className="bg-red-700 text-white px-2.5 py-0.5 rounded">{timeAgo}</span>
        <span className="text-gray-600 uppercase">{source}</span>
      </div>

      <div className="relative w-full overflow-hidden rounded aspect-video">
        <img className="absolute inset-0 w-full h-full object-cover" src={imageUrl} alt={imageAlt} />
      </div>

      <h3 className="text-lg md:text-xl font-semibold leading-snug">
        <Link href={headlineHref} className="hover:underline hover:text-blue-700">
          {headline}
        </Link>
      </h3>

      <div className="h-px bg-gray-200" />

      {relatedArticles.length > 0 && (
        <ul className="flex flex-col gap-2">
          {relatedArticles.map((article, i) => (
            <li key={i}>
              <a href={article.href} className="text-[15px] text-gray-800 font-medium underline hover:text-blue-600">
                {article.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default NewsCard;
