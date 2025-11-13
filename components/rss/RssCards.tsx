// components/rss/RssCards.tsx
"use client";

import type { RssLink } from "@/lib/rss/types";

const Divider = () => <div className="h-px w-full border-t border-neutral-300" />;

/* ------------------------------------------------------------------ */
/*  RSS BIG CARD
    Layout: 
    [ big image ]
    [ headline ]
    [ line ]
    [ 5 rss links ]
    [ line ]
/* ------------------------------------------------------------------ */

export function RSSBigCard(props: {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  links: RssLink[];
  aspectRatio?: string;   // ⭐ ratio again
}) {
  const { imageSrc, imageAlt = "", title, links, aspectRatio = "16/9" } = props;

  return (
    <article className="flex flex-col gap-3 font-[Poppins]">
      <div className="overflow-hidden rounded-md">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
          style={{ aspectRatio }}
        />
      </div>

      <h3 className="text-[26px] md:text-[28px] font-extrabold leading-snug line-clamp-3">
        {title}
      </h3>

      <Divider />
      <RssLinksList links={links} />
    </article>
  );
}

/* ------------------------------------------------------------------ */
/*  RSS MEDIUM SPLIT CARD
    Layout:
    [ image | headline ]
    [ line ]
    [ 5 rss links ]
    [ line ]
/* ------------------------------------------------------------------ */
export function RSSMediumSplitCard(props: {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  links: RssLink[];
  aspectRatio?: string;
}) {
  const { imageSrc, imageAlt = "", title, links, aspectRatio = "4/3" } = props;

  return (
    <article className="flex flex-col gap-2 font-[Poppins]">

      <div className="grid grid-cols-12 gap-3 items-start">
        {/* Image becomes larger: col-span-6 */}
        <div className="col-span-6 overflow-hidden rounded-md">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover"
            style={{ aspectRatio }}
          />
        </div>

        {/* Title becomes slightly narrower */}
        <h3 className="col-span-6 text-xl md:text-2xl font-bold leading-tight line-clamp-3">
          {title}
        </h3>
      </div>

      <Divider />
      <RssLinksList links={links} />
    </article>
  );
}

/* ---------- SMALL CARD: TOP IMAGE, BOTTOM HEADLINE (square image) ---------- */
export function RSSSmallTopImageCard(props: {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  links: RssLink[];
  aspectRatio?: string; // ⭐ now default square
}) {
  const { imageSrc, imageAlt = "", title, links, aspectRatio = "1/1" } = props;

  return (
    <article className="flex flex-col gap-2 font-[Poppins]">

      <div className="overflow-hidden rounded-md">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
          style={{ aspectRatio }}
        />
      </div>

      <h3 className="mt-2 text-lg md:text-xl font-bold leading-snug line-clamp-3 text-slate-900">
        {title}
      </h3>

      <Divider />
      <RssLinksList links={links} />
    </article>
  );
}

/* ---------- SMALL CARD: TOP HEADLINE, BOTTOM IMAGE (square image) ---------- */

export function RSSSmallTopTitleCard(props: {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  links: RssLink[];
  aspectRatio?: string;
}) {
  const { imageSrc, imageAlt = "", title, links, aspectRatio = "1/1" } = props;

  return (
    <article className="flex flex-col gap-2 font-[Poppins]">

      <h3 className="text-lg md:text-xl font-bold leading-snug line-clamp-3 text-slate-900">
        {title}
      </h3>

      <div className="overflow-hidden rounded-md">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
          style={{ aspectRatio }}
        />
      </div>

      <Divider />
      <RssLinksList links={links} />
    </article>
  );
}

/* ------------------------------------------------------------------ */
/*  SHARED LINKS LIST (5 RSS bullets)
/* ------------------------------------------------------------------ */

function RssLinksList({ links }: { links: RssLink[] }) {
  if (!links.length) return null;

  return (
    <ul className="flex flex-col gap-2">
      {links.map((link, index) => (
        <li
          key={`${index}-${link.href || "nohref"}`}
          className="text-sm md:text-base leading-snug"
        >
          <a
            href={link.href}
            className="text-slate-900 hover:text-blue-700 hover:underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

