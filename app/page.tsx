/*
KINDJOE — "From Around the Web" (Responsive/Flexy)

Goal: keep your visual design but make it fluid/responsive, accessible, and easy to wire to real RSS data.
• Uses CSS Grid + Flex; the middle rail becomes a fixed width on xl and stacks gracefully on smaller screens.
• Tickers wrap on small screens and align in a single row on large.
• Cards use aspect ratios instead of fixed heights to avoid image squish and to stabilize layout.
• Typography mirrors your Poppins choices but uses utility classes that degrade gracefully if the font isn't loaded yet.

How to use:
  <RssHubSection stocks={mockStocks} left={leftCol} middle={middleCol} right={rightCol} />

Replace the mock data at the bottom or pass real props from your feed.
*/

import React from "react";

// ——— Types ———
export type StockItem = { label: string; changePct: number };
export type FeedCard = {
  id: string;
  title: string;
  image?: string;
  accent?: "blue" | "red" | "default";
  size?: "lg" | "md" | "sm";
};

export type ColumnData = {
  hero?: FeedCard; // large image + headline
  bullets?: string[]; // list of bullet headlines
  blocks?: FeedCard[]; // stacked blocks (image-first or title-first)
};

// ——— Utilities ———
function pctColor(n: number) {
  if (n > 0) return "text-green-700";
  if (n < 0) return "text-red-600";
  return "text-zinc-500";
}

function dotClass(n: number) {
  // green square for up, red triangle for down, gray dot for flat
  if (n > 0) return "w-2 h-2 outline outline-[3px] outline-offset-[-1.5px] outline-green-700 rounded-[2px]";
  if (n < 0) return "w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[8px] border-t-red-600"; // triangle
  return "w-2 h-2 rounded-full bg-zinc-400";
}

function accentTitleClass(accent?: FeedCard["accent"]) {
  if (accent === "blue") return "text-blue-950";
  if (accent === "red") return "text-red-700";
  return "text-black";
}

// ——— Components ———
function StocksTicker({ stocks }: { stocks: StockItem[] }) {
  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 md:flex-nowrap md:justify-between">
        {stocks.map((s) => (
          <div key={s.label} className="flex items-center gap-2 min-w-[120px]">
            <div className="text-black text-base font-bold font-[Poppins]">{s.label}</div>
            <div className={dotClass(s.changePct)} />
            <div className={`${pctColor(s.changePct)} text-base font-normal font-[Poppins]`}>
              {s.changePct > 0 ? "+" : s.changePct < 0 ? "" : ""}{s.changePct.toFixed(2)}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ImageCard({ card, titleClass = "text-xl" }: { card: FeedCard; titleClass?: string }) {
  return (
    <div className="flex flex-col gap-2.5">
      {card.image && (
        <div className="w-full overflow-hidden rounded-md">
          <img
            src={card.image}
            alt=""
            className="h-full w-full object-cover"
            style={{ aspectRatio: card.size === "lg" ? "1.6/1" : card.size === "sm" ? "1/1" : "4/3" }}
          />
        </div>
      )}
      <div className={`font-[Poppins] font-bold ${titleClass} ${accentTitleClass(card.accent)}`}>{card.title}</div>
    </div>
  );
}

function Bullets({ items, size = "base" }: { items: string[]; size?: "base" | "lg" }) {
  const sizeCls = size === "lg" ? "text-xl" : "text-base";
  return (
    <div className="flex flex-col gap-3">
      {items.map((t, i) => (
        <div key={i} className={`font-[Poppins] ${sizeCls} text-black`}>{t}</div>
      ))}
    </div>
  );
}

function Divider() {
  return <div className="h-px w-full border-t border-neutral-300" />;
}

// ——— Main Section ———
export default function RssHubSection({
  stocks,
  left,
  middle,
  right,
}: {
  stocks: StockItem[];
  left: ColumnData;
  middle: ColumnData; // this becomes the fixed middle rail on xl
  right: ColumnData;
}) {
  return (
    <section className="w-full py-6">
      {/* Heading */}
      <div className="flex flex-col gap-6">
        <h2 className="text-slate-950 text-4xl md:text-5xl font-bold font-[Poppins]">From Around the Web</h2>
        <Divider />

        {/* Live Stocks */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <div className="text-black text-2xl md:text-3xl font-bold font-[Poppins]">Live Stocks Chart</div>
            <div className="text-blue-700 text-sm md:text-base font-bold font-[Poppins]">AS OF TODAY</div>
          </div>
          <StocksTicker stocks={stocks} />
        </div>
      </div>

      {/* Grid: left / middle rail / right */}
      <div className="mt-6 grid grid-cols-12 gap-5">
        {/* Left column (spans 12 on small, 5 on lg, 4 on xl) */}
        <div className="col-span-12 lg:col-span-5 xl:col-span-4 flex flex-col gap-4">
          {left.hero && <ImageCard card={{ ...left.hero, size: "lg" }} titleClass="text-xl text-blue-950" />}
          <Divider />
          {left.bullets && left.bullets.length > 0 && (
            <>
              <Bullets items={left.bullets} />
              <Divider />
            </>
          )}
          {left.blocks && left.blocks.length > 0 && (
            <div className="flex flex-col gap-4">
              {left.blocks.map((c) => (
                <React.Fragment key={c.id}>
                  {c.image ? (
                    <ImageCard card={c} />
                  ) : (
                    <div className="font-[Poppins] text-xl font-bold text-black">{c.title}</div>
                  )}
                  <Divider />
                </React.Fragment>
              ))}
            </div>
          )}
        </div>

        {/* Middle rail (fixed width on xl, stacks between) */}
        <div className="col-span-12 lg:col-span-7 xl:col-span-4 xl:max-w-[516px] xl:mx-auto flex flex-col gap-4 overflow-hidden">
          {middle.hero && <ImageCard card={{ ...middle.hero, size: "md" }} titleClass="text-2xl text-red-700" />}
          <Divider />
          {middle.blocks && middle.blocks.length > 0 && (
            <div className="flex flex-col gap-4">
              {middle.blocks.map((c) => (
                <div key={c.id} className="flex items-start gap-3">
                  {c.image && (
                    <img src={c.image} alt="" className="w-48 h-48 rounded-md object-cover" />
                  )}
                  <div className="flex-1 font-[Poppins] text-xl font-normal text-black">{c.title}</div>
                </div>
              ))}
            </div>
          )}
          <Divider />
          {/* Ad placeholder */}
          <div className="flex flex-col gap-2.5">
            <img src="https://placehold.co/516x272" alt="Advertisement" className="w-full rounded-md object-cover" style={{ aspectRatio: "16/9" }} />
            <div className="flex items-start justify-between text-[10px] text-zinc-500 font-[Poppins]">
              <span>Advertisement</span>
              <button className="underline decoration-dotted underline-offset-2">Ad feedback</button>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="col-span-12 xl:col-span-4 flex flex-col gap-3">
          {right.blocks && right.blocks.length > 0 && (
            <div className="flex flex-col gap-4">
              {/* Top block with big headline then image */}
              {right.blocks[0] && (
                <>
                  {!right.blocks[0].image && (
                    <div className="font-[Poppins] text-xl font-bold text-black">{right.blocks[0].title}</div>
                  )}
                  {right.blocks[0].image && (
                    <ImageCard card={{ ...right.blocks[0], size: "lg" }} titleClass="text-xl text-red-800" />
                  )}
                  <Divider />
                </>
              )}

              {/* Remaining bullets and blocks */}
              {right.bullets && <Bullets items={right.bullets} />}
              {right.blocks.slice(1).map((c) => (
                <React.Fragment key={c.id}>
                  {c.image ? (
                    <ImageCard card={c} />
                  ) : (
                    <div className="font-[Poppins] text-base text-black">{c.title}</div>
                  )}
                </React.Fragment>
              ))}
              <Divider />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ——— Mock data for quick preview ———
export const mockStocks: StockItem[] = [
  { label: "GOLD", changePct: 1.18 },
  { label: "NASDAQ", changePct: 1.18 },
  { label: "APPLE", changePct: -0.72 },
  { label: "NVIDIA", changePct: 0.85 },
  { label: "META", changePct: -1.18 },
  { label: "TESLA", changePct: -0.34 },
  { label: "GOOGLE", changePct: -0.18 },
  { label: "YOUTUBE", changePct: -0.44 },
  { label: "MICROSOFT", changePct: -0.21 },
];

export const leftCol: ColumnData = {
  hero: {
    id: "l-hero",
    title: "South Park’ Creators Break Silence on Why This Season Keeps Slamming Trump",
    image: "https://placehold.co/1200x675",
    accent: "blue",
    size: "lg",
  },
  bullets: [
    "South Park’ Creators Break Silence on Why This Season Keeps Slamming Trump",
    "FEDERALIST Boss Savages 'Weak and Rudderless' Don in Scathing Rant",
    "TRAVEL HELL DAY 41: FAA 'Effectively Prohibits' Private Jets at Major Airports...",
  ],
  blocks: [
    {
      id: "l-b1",
      title: "South Park’ Creators Break Silence on Why This Season Keeps Slamming Trump",
      image: "https://placehold.co/1200x900",
    },
  ],
};

export const middleCol: ColumnData = {
  hero: {
    id: "m-hero",
    title: "Putin clenching fists 'in agony' as bulging veins spark health rumors...",
    image: "https://placehold.co/516x344",
    accent: "red",
  },
  blocks: [
    {
      id: "m-b1",
      title: "President's enforcer inspires fear and vexation across Washington...",
      image: "https://placehold.co/193x193",
    },
    { id: "m-b2", title: "South Park’ Creators Break Silence on Why This Season Keeps Slamming Trump" },
    { id: "m-b3", title: "South Park’ Creators Break Silence on Why This Season Keeps Slamming Trump" },
  ],
};

export const rightCol: ColumnData = {
  blocks: [
    {
      id: "r-hero",
      title: "President's enforcer inspires fear and vexation across Washington...",
      image: "https://placehold.co/1200x900",
      accent: "red",
    },
    { id: "r-b1", title: "South Park’ Creators Break Silence on Why This Season Keeps Slamming Trump" },
    { id: "r-b2", title: "FEDERALIST Boss Savages 'Weak and Rudderless' Don in Scathing Rant" },
    { id: "r-b3", title: "TRAVEL HELL DAY 41: FAA 'Effectively Prohibits' Private Jets at Major Airports..." },
  ],
};
