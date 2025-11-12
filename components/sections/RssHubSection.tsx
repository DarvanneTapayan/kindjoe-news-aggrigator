// components/sections/RssHubSection.tsx
import React from "react";

/* ---------- Types ---------- */
export type StockItem = { label: string; changePct: number };
export type FeedCard = {
  id: string;
  title: string;
  url?: string;
  image?: string;
  source?: string;
  publishedAt?: string;
  accent?: "blue" | "red" | "default";
  size?: "lg" | "md" | "sm";
  dek?: string;
};
export type ColumnData = {
  hero?: FeedCard;
  blocks?: FeedCard[];
  /** NEW optional Figma control: */
  bulletsTop?: string[];
  bulletsBottom?: string[];
  /** Back-compat with your previous shape: */
  bullets?: string[];
};

/* ---------- Helpers ---------- */
function pctColor(n: number) { if (n > 0) return "text-green-700"; if (n < 0) return "text-red-600"; return "text-zinc-500"; }
function dotClass(n: number) {
  if (n > 0) return "w-2 h-2 outline outline-[3px] outline-offset-[-1.5px] outline-green-700 rounded-[2px]";
  if (n < 0) return "w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[8px] border-t-red-600";
  return "w-2 h-2 rounded-full bg-zinc-400";
}
function accentTitle(a?: FeedCard["accent"]) { if (a === "blue") return "text-blue-950"; if (a === "red") return "text-red-700"; return "text-black"; }
const Divider = () => <div className="h-px w-full border-t border-neutral-300" />;

function timeAgo(iso?: string) {
  if (!iso) return "";
  const d = new Date(iso); const mins = Math.round((Date.now() - d.getTime()) / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.round(mins / 60); if (hrs < 24) return `${hrs}h ago`;
  return `${Math.round(hrs / 24)}d ago`;
}

/* ---------- Stocks Ticker ---------- */
function StocksTicker({ stocks }: { stocks: StockItem[] }) {
  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 lg:flex-nowrap lg:justify-between">
        {stocks.map((s) => (
          <div key={s.label} className="flex items-center gap-2 min-w-[120px]">
            <div className="text-black text-sm md:text-base font-bold font-[Poppins]">{s.label}</div>
            <div className={dotClass(s.changePct)} />
            <div className={`${pctColor(s.changePct)} text-sm md:text-base font-normal font-[Poppins]`}>
              {s.changePct > 0 ? "+" : ""}{s.changePct.toFixed(2)}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Card Variants ---------- */
// Big (left & middle hero)
function RSSBigCard({ c, titleClass = "text-xl md:text-2xl" }: { c: FeedCard; titleClass?: string }) {
  return (
    <a href={c.url ?? "#"} target={c.url ? "_blank" : undefined} rel={c.url ? "noopener" : undefined} className="group block">
      {c.image && (
        <div className="w-full overflow-hidden rounded-md">
          <img src={c.image} alt="" className="h-full w-full object-cover transition group-hover:scale-[1.01]" style={{ aspectRatio: "16/9" }} />
        </div>
      )}
      <div className={`mt-2 font-[Poppins] font-bold ${titleClass} ${accentTitle(c.accent)} leading-tight`}>
        {c.title}
      </div>
      {c.dek && <p className="mt-1 text-sm md:text-base text-zinc-700 line-clamp-2">{c.dek}</p>}
      <MetaRow c={c} />
    </a>
  );
}

// Medium SPLIT (image left, text right) — matches your Figma middle row
function RSSMediumSplitCard({ c }: { c: FeedCard }) {
  return (
    <a href={c.url ?? "#"} target={c.url ? "_blank" : undefined} rel={c.url ? "noopener" : undefined}
       className="group grid grid-cols-12 gap-3 items-start">
      {c.image && (
        <img src={c.image} alt="" className="col-span-5 h-28 md:h-32 w-full rounded-md object-cover" />
      )}
      <div className={c.image ? "col-span-7" : "col-span-12"}>
        <div className={`font-[Poppins] font-semibold text-base md:text-xl ${accentTitle(c.accent)} leading-tight`}>
          {c.title}
        </div>
        {c.dek && <p className="mt-1 text-sm text-zinc-700 line-clamp-2">{c.dek}</p>}
        <MetaRow c={c} compact />
      </div>
    </a>
  );
}

// Small (right & left lists)
function RSSSmallCard({ c }: { c: FeedCard }) {
  return (
    <a href={c.url ?? "#"} target={c.url ? "_blank" : undefined} rel={c.url ? "noopener" : undefined}
       className="group grid grid-cols-12 gap-3 items-start">
      {c.image && (
        <img src={c.image} alt="" className="col-span-4 h-20 md:h-24 w-full rounded-md object-cover" />
      )}
      <div className={c.image ? "col-span-8" : "col-span-12"}>
        <div className={`font-[Poppins] font-medium text-sm md:text-base ${accentTitle(c.accent)} leading-tight`}>
          {c.title}
        </div>
        <MetaRow c={c} compact />
      </div>
    </a>
  );
}

function MetaRow({ c, compact = false }: { c: FeedCard; compact?: boolean }) {
  if (!c.source && !c.publishedAt) return null;
  return (
    <div className={`mt-1 flex items-center gap-2 text-zinc-500 ${compact ? "text-[11px] md:text-xs" : "text-xs md:text-sm"}`}>
      {c.source && <span className="truncate">{c.source}</span>}
      {(c.source && c.publishedAt) && <span>•</span>}
      {c.publishedAt && <time dateTime={c.publishedAt}>{timeAgo(c.publishedAt)}</time>}
    </div>
  );
}

/* ---------- Main Section (matches Figma) ---------- */
export default function RssHubSection({
  stocks, left, middle, right,
}: { stocks: StockItem[]; left: ColumnData; middle: ColumnData; right: ColumnData; }) {
  const leftBulletsTop = left.bulletsTop ?? left.bullets ?? [];
  const leftBulletsBottom = left.bulletsBottom ?? [];

  const rightBulletsTop = right.bulletsTop ?? right.bullets ?? [];
  const rightBulletsBottom = right.bulletsBottom ?? [];

  // classify by size
  const leftBig = (left.blocks ?? []).filter((c) => (c.size ?? "lg") === "lg");
  const midBig  = [ ...(middle.hero ? [middle.hero] : []), ...(middle.blocks ?? []).filter((c) => c.size === "lg") ];
  const midMed  = (middle.blocks ?? []).filter((c) => (c.size ?? "md") === "md");
  const rightSm = (right.blocks ?? []).filter((c) => (c.size ?? "sm") === "sm");
  const leftSm  = (left.blocks ?? []).filter((c) => (c.size ?? "sm") === "sm");

  return (
    <section className="w-full">
      {/* Heading + Ticker */}
      <div className="flex flex-col gap-4 md:gap-6">
        <h2 className="text-slate-950 text-3xl md:text-5xl font-bold font-[Poppins]">From Around the Web</h2>
        <Divider />
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <div className="text-black text-xl md:text-3xl font-bold font-[Poppins]">Live Stocks Chart</div>
            <div className="text-blue-700 text-xs md:text-base font-bold font-[Poppins]">AS OF TODAY</div>
          </div>
          <StocksTicker stocks={stocks} />
        </div>
      </div>

      {/* Grid */}
      <div className="mt-6 grid grid-cols-12 gap-5">
        {/* LEFT — big → bullets → big → bullets (then any smalls) */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4 flex flex-col gap-4">
          {leftBig[0] && (<><RSSBigCard c={{ ...leftBig[0], accent: leftBig[0].accent ?? "blue" }} /><Divider /></>)}
          {leftBulletsTop.length > 0 && (<><Bullets items={leftBulletsTop} /><Divider /></>)}
          {leftBig[1] && (<><RSSBigCard c={{ ...leftBig[1], accent: leftBig[1].accent ?? "blue" }} /><Divider /></>)}
          {leftBulletsBottom.length > 0 && (<><Bullets items={leftBulletsBottom} /><Divider /></>)}
          {/* render leftover smalls if any */}
          {leftSm.map((c) => (<React.Fragment key={c.id}><RSSSmallCard c={c} /><Divider /></React.Fragment>))}
        </div>

        {/* MIDDLE — big hero(s) red → bullets → medium split → ad */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:max-w-[516px] xl:mx-auto flex flex-col gap-4">
          {midBig.map((c) => (<React.Fragment key={c.id}><RSSBigCard c={{ ...c, accent: c.accent ?? "red" }} titleClass="text-2xl md:text-[28px]" /><Divider /></React.Fragment>))}
          {middle.bulletsTop?.length ? (<><Bullets items={middle.bulletsTop} /><Divider /></>) : null}
          {midMed.map((c) => (<React.Fragment key={c.id}><RSSMediumSplitCard c={c} /><Divider /></React.Fragment>))}
          {/* Ad block like your orange rectangle */}
          <div className="rounded-md bg-[#F8A93B] text-white p-6 md:p-8 font-[Poppins]">
            <div className="text-xs opacity-70 mb-2">Sponsored</div>
            <div className="text-2xl md:text-3xl font-bold tracking-wide">QUICK OVERVIEW:</div>
          </div>
          <div className="flex items-start justify-between text-[10px] text-zinc-500 font-[Poppins]">
            <span>Ad</span><button className="underline decoration-dotted underline-offset-2">Ad feedback</button>
          </div>
        </div>

        {/* RIGHT — small card → bullets → small card → bullets */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
          {rightSm[0] && (<><RSSSmallCard c={rightSm[0]} /><Divider /></>)}
          {rightBulletsTop.length > 0 && (<><Bullets items={rightBulletsTop} /><Divider /></>)}
          {rightSm.slice(1).map((c) => (<React.Fragment key={c.id}><RSSSmallCard c={c} /><Divider /></React.Fragment>))}
          {rightBulletsBottom.length > 0 && (<><Bullets items={rightBulletsBottom} /><Divider /></>)}
        </div>
      </div>
    </section>
  );
}

/* ---------- Bullets list ---------- */
function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((t, i) => (
        <li key={i} className="font-[Poppins] text-sm md:text-base text-black leading-snug">
          {t}
        </li>
      ))}
    </ul>
  );
}

/* ---------- Mock data (arranged to mirror your Figma) ---------- */
export const mockStocks: StockItem[] = [
  { label: "GOLD", changePct: 1.18 }, { label: "NASDAQ", changePct: 1.18 }, { label: "APPLE", changePct: -1.18 },
  { label: "NVIDIA", changePct: 1.18 }, { label: "META", changePct: -1.18 }, { label: "TESLA", changePct: -1.18 },
  { label: "GOOGLE", changePct: -1.18 }, { label: "YOUTUBE", changePct: -1.18 }, { label: "MICROSOFT", changePct: -1.18 },
];

export const leftCol: ColumnData = {
  blocks: [
    { id: "l-lg-1", size: "lg", title: "South Park’ Creators Break Silence on Why This Season Keeps Slamming Trump", image: "https://placehold.co/1200x675", accent: "blue" },
    { id: "l-lg-2", size: "lg", title: "South Park’ Creators Break Silence on Why This Season Keeps Slamming Trump", image: "https://placehold.co/1200x900", accent: "blue" },
  ],
  bulletsTop: [
    "South Park’ Creators Break Silence on Why This Season Keeps Slamming Trump",
    "FEDERALIST Boss Savages 'Weak and Rudderless' Don in Scathing Rant",
    "TRAVEL HELL DAY 41: FAA 'Effectively Prohibits' Private Jets at Major Airports...",
  ],
  bulletsBottom: [
    "South Park’ Creators Break Silence on Why This Season Keeps Slamming Trump",
    "FEDERALIST Boss Savages 'Weak and Rudderless' Don in Scathing Rant",
    "TRAVEL HELL DAY 41: FAA 'Effectively Prohibits' Private Jets at Major Airports...",
  ],
};

export const middleCol: ColumnData = {
  hero: { id: "m-lg-hero", size: "lg", title: "Putin clenching fists 'in agony' as bulging veins spark health rumors...", image: "https://placehold.co/1200x675", accent: "red" },
  blocks: [
    { id: "m-md-1", size: "md", title: "President's enforcer inspires fear and vexation across Washington...", image: "https://placehold.co/640x480" },
  ],
  bulletsTop: [
    "South Park’ Creators Break Silence on Why This Season Keeps Slamming Trump",
    "South Park’ Creators Break Silence on Why This Season Keeps Slamming Trump",
    "South Park’ Creators Break Silence on Why This Season Keeps Slamming Trump",
  ],
};

export const rightCol: ColumnData = {
  blocks: [
    { id: "r-sm-1", size: "sm", title: "South Park’ Creators Break Silence on Why This Season Keeps Slamming Trump", image: "https://placehold.co/320x240", accent: "default" },
    { id: "r-sm-2", size: "sm", title: "South Park’ Creators Break Silence on Why This Season Keeps Slamming Trump", image: "https://placehold.co/320x240", accent: "red" },
  ],
  bulletsTop: [
    "South Park’ Creators Break Silence on Why This Season Keeps Slamming Trump",
    "FEDERALIST Boss Savages 'Weak and Rudderless' Don in Scathing Rant",
    "TRAVEL HELL DAY 41: FAA 'Effectively Prohibits' Private Jets at Major Airports...",
  ],
  bulletsBottom: [
    "South Park’ Creators Break Silence on Why This Season Keeps Slamming Trump",
    "FEDERALIST Boss Savages 'Weak and Rudderless' Don in Scathing Rant",
  ],
};
