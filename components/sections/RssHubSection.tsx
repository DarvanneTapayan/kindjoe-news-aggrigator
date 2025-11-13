// components/sections/RssHubSection.tsx
import React from "react";
import type { StockItem } from "@/lib/rss/types";
import { RssStocksTicker } from "@/components/rss/RssStocksTicker";

const Divider = () => <div className="h-px w-full border-t border-neutral-300" />;

type RssHubSectionProps = {
  stocks: StockItem[];
  leftCards: React.ReactNode[];
  middleCards: React.ReactNode[];
  rightCards: React.ReactNode[];
  sidebar?: React.ReactNode;
};

export default function RssHubSection({
  stocks,
  leftCards,
  middleCards,
  rightCards,
  sidebar,
}: RssHubSectionProps) {
  return (
    <section className="w-full">
      {/* Heading + Ticker */}
      <div className="flex flex-col gap-4 md:gap-6">
        <h2 className="text-slate-950 text-3xl md:text-5xl font-bold font-[Poppins]">
          From Around the Web
        </h2>

        <Divider />

        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <div className="text-black text-xl md:text-3xl font-bold font-[Poppins]">
              Live Stocks Chart
            </div>
            <div className="text-blue-700 text-xs md:text-base font-bold font-[Poppins]">
              AS OF TODAY
            </div>
          </div>

          <RssStocksTicker stocks={stocks} />
        </div>
      </div>

      {/* Main content: feeds + divider + sidebar */}
      <div className="mt-6 flex flex-col gap-5 md:flex-row">
        {/* RSS FEEDS */}
        {/* On mobile: flex-col, reordered by `order-*`
            On md+: grid with 3 columns [3fr,7fr,3fr] in normal left–middle–right order */}
        <div className="md:flex-1 flex flex-col gap-5 md:grid md:grid-cols-[3fr_7fr_3fr]">
          {/* LEFT column (mobile: 3rd, desktop: 1st) */}
          <div className="flex flex-col gap-3 order-3 md:order-0">
            {leftCards.map((card, index) => (
              <React.Fragment key={index}>
                {card}
                {index !== leftCards.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </div>

          {/* MIDDLE column (mobile: 1st, desktop: 2nd) */}
          <div className="flex flex-col gap-5 order-1 md:order-0">
            {middleCards.map((card, index) => (
              <React.Fragment key={index}>
                {card}
                {index !== middleCards.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </div>

          {/* RIGHT column (mobile: 2nd, desktop: 3rd) */}
          <div className="flex flex-col gap-3 order-2 md:order-0">
            {rightCards.map((card, index) => (
              <React.Fragment key={index}>
                {card}
                {index !== rightCards.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Divider between feeds and sidebar */}
        {sidebar && (
          <div className="bg-neutral-300 w-full h-px md:w-px md:h-auto md:self-stretch" />
        )}

        {/* SIDEBAR (stays last on mobile, right on desktop) */}
        {sidebar && (
          <aside className="flex justify-start md:justify-end w-full md:w-auto">
            {sidebar}
          </aside>
        )}
      </div>
    </section>
  );
}
