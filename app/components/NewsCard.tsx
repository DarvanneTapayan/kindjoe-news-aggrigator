// app/components/NewsCard.tsx
import React from 'react';

interface NewsCardProps {
  timeAgo: string;
  imageUrl: string;
  imageAlt: string;
  headline: string;
  relatedArticles?: {
    text: string;
    href: string;
  }[];
}

const NewsCard: React.FC<NewsCardProps> = ({
  timeAgo,
  imageUrl,
  imageAlt,
  headline,
  relatedArticles = [],
}) => {
  return (
    <article className="flex flex-col gap-3 p-4 bg-white rounded-md shadow-sm text-gray-900">
      <div className="bg-red-700 px-2.5 py-0.5 self-start rounded">
        <span className="text-white text-[11px] font-medium tracking-wide">
          {timeAgo}
        </span>
      </div>

      <div className="relative w-full overflow-hidden rounded aspect-video">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={imageUrl}
          alt={imageAlt}
        />
      </div>

      <h3 className="text-lg md:text-xl font-semibold leading-snug text-gray-900">
        {headline}
      </h3>

      <div className="h-px bg-gray-200" />

      {relatedArticles.length > 0 && (
        <ul className="flex flex-col gap-2">
          {relatedArticles.map((article, i) => (
            <li key={i}>
              <a
                href={article.href}
                className="text-[15px] text-gray-800 font-medium underline hover:text-blue-600"
              >
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
