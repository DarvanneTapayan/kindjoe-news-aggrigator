// components/rss/RssCards.tsx
import React from "react";
import type { RssLink } from "@/lib/rss/types";

const Divider = () => <div className="h-px w-full border-t border-neutral-300" />;

// Shared list for RSS links under each card
export function RssLinksList({ links }: { links: RssLink[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {links.map((link, index) => (
        <li key={index} className="text-sm md:text-base leading-snug">
          <a
            href={link.href}
            className="text-slate-900 hover:text-blue-700 hover:underline underline-offset-2"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

// ============================
// BIG CARD
// Image top, big headline, then links
// ============================
export function RSSBigCard(props: {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  links: RssLink[];
  aspectRatio?: string; // e.g. "16/9"
  href?: string; // optional click target for the main headline
}) {
  const { imageSrc, imageAlt = "", title, links, aspectRatio = "16/9", href = "#" } = props;

  return (
    <article className="flex flex-col gap-3 font-[Poppins]">
      <div className="w-full overflow-hidden rounded-md">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-auto object-cover"
          style={{ aspectRatio }}
        />
      </div>

      {/* Clickable headline, full text (no truncation) */}
      <a
        href={href}
        className="text-2xl md:text-[28px] font-bold text-slate-900 leading-snug hover:text-blue-700 hover:underline"
      >
        {title}
      </a>

      <Divider />

      <RssLinksList links={links} />
    </article>
  );
}

// ============================
// MEDIUM SPLIT CARD
// Image left, headline right, then links
// ============================
export function RSSMediumSplitCard(props: {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  links: RssLink[];
  aspectRatio?: string; // e.g. "4/3"
  href?: string;
}) {
  const { imageSrc, imageAlt = "", title, links, aspectRatio = "4/3", href = "#" } = props;

  return (
    <article className="flex flex-col gap-2 font-[Poppins]">
      <div className="grid grid-cols-12 gap-3 items-start">
        <div className="col-span-5 overflow-hidden rounded-md">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto object-cover"
            style={{ aspectRatio }}
          />
        </div>

        {/* Clickable headline, full wrap */}
        <a
          href={href}
          className="col-span-7 text-lg md:text-xl font-bold text-slate-900 leading-snug hover:text-blue-700 hover:underline"
        >
          {title}
        </a>
      </div>

      <Divider />

      <RssLinksList links={links} />
    </article>
  );
}

// ============================
// SMALL CARD: TOP IMAGE
// Image top, small headline below, then links
// ============================
export function RSSSmallTopImageCard(props: {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  links: RssLink[];
  aspectRatio?: string; // e.g. "1/1"
  href?: string;
}) {
  const { imageSrc, imageAlt = "", title, links, aspectRatio = "1/1", href = "#" } = props;

  return (
    <article className="flex flex-col gap-2 font-[Poppins]">
      <div className="w-full overflow-hidden rounded-md">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-auto object-cover"
          style={{ aspectRatio }}
        />
      </div>

      {/* Clickable headline, slightly smaller */}
      <a
        href={href}
        className="text-base md:text-lg font-semibold text-slate-900 leading-snug hover:text-blue-700 hover:underline"
      >
        {title}
      </a>

      <Divider />

      <RssLinksList links={links} />
    </article>
  );
}

// ============================
// SMALL CARD: TOP TITLE
// Headline on top, image below, then links
// ============================
export function RSSSmallTopTitleCard(props: {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  links: RssLink[];
  aspectRatio?: string; // e.g. "1/1"
  href?: string;
}) {
  const { imageSrc, imageAlt = "", title, links, aspectRatio = "1/1", href = "#" } = props;

  return (
    <article className="flex flex-col gap-2 font-[Poppins]">
      {/* Clickable headline on top */}
      <a
        href={href}
        className="text-base md:text-lg font-semibold text-slate-900 leading-snug hover:text-blue-700 hover:underline"
      >
        {title}
      </a>

      <div className="w-full overflow-hidden rounded-md">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-auto object-cover"
          style={{ aspectRatio }}
        />
      </div>

      <Divider />

      <RssLinksList links={links} />
    </article>
  );
}
