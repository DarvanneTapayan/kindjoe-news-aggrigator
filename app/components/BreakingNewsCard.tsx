// app/components/BreakingNewsCard.tsx
import React from 'react';
import Link from 'next/link';

interface BreakingNewsCardProps {
  tag: string;
  headline: string;
  callToActionText: string;
  callToActionHref: string;
  className?: string;
}

const BreakingNewsCard: React.FC<BreakingNewsCardProps> = ({
  tag,
  headline,
  callToActionText,
  callToActionHref,
  className,
}) => {
  return (
    <div
      className={`bg-white border-b border-gray-200 px-4 md:px-6 lg:px-8 py-4 flex flex-col gap-3 ${className || ''}`}
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col gap-2">
        {/* Tag */}
        <div className="inline-flex">
          <span className="bg-red-700 text-white text-[11px] md:text-xs font-semibold rounded px-2.5 py-1">
            {tag}
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-snug text-red-700">
          {headline}
        </h2>

        {/* CTA */}
        <Link
          href={callToActionHref}
          className="text-sm md:text-base text-blue-900 hover:underline font-medium"
        >
          {callToActionText}
        </Link>
      </div>
    </div>
  );
};

export default BreakingNewsCard;
