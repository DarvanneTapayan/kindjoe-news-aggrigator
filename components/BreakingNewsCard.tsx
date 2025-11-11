import React from 'react';
import Link from 'next/link';

interface BreakingNewsCardProps {
  tag: string;
  headline: string;
  callToActionText: string;
  callToActionHref: string;
  source?: string;
  timeAgo?: string;
  className?: string;
}

const BreakingNewsCard: React.FC<BreakingNewsCardProps> = ({
  tag,
  headline,
  callToActionText,
  callToActionHref,
  source,
  timeAgo,
  className,
}) => {
  return (
    <div className={`bg-red-700 text-white px-4 md:px-6 lg:px-8 py-4 flex flex-col gap-3 ${className || ''}`}>
      <div className="max-w-5xl mx-auto w-full flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="bg-white text-red-700 text-[11px] md:text-xs font-semibold rounded px-2.5 py-1 w-fit">
            {tag || 'BREAKING'}
          </span>
          {(timeAgo || source) && (
            <span className="text-white/90 text-xs md:text-sm font-medium">
              {timeAgo ? `${timeAgo}` : ''}
              {timeAgo && source ? ' • ' : ''}
              {source ? `${source}` : ''}
            </span>
          )}
        </div>

        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-snug">
          {headline}
        </h2>

        <Link
          href={callToActionHref}
          className="text-sm md:text-base font-semibold underline underline-offset-4 hover:text-yellow-200 transition-colors"
        >
          {callToActionText}
        </Link>
      </div>
    </div>
  );
};

export default BreakingNewsCard;
