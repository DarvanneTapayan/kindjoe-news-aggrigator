// components/rss/RssStocksTicker.tsx
import React from "react";
import type { StockItem } from "@/lib/rss/types";

function pctColor(n: number) {
  if (n > 0) return "text-green-700";
  if (n < 0) return "text-red-600";
  return "text-zinc-500";
}

function dotClass(n: number) {
  if (n > 0) {
    return "w-2 h-2 outline outline-[3px] outline-offset-[-1.5px] outline-green-700 rounded-[2px]";
  }
  if (n < 0) {
    return "w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[8px] border-t-red-600";
  }
  return "w-2 h-2 rounded-full bg-zinc-400";
}

export function RssStocksTicker({ stocks }: { stocks: StockItem[] }) {
  return (
    <div className="w-full overflow-x-auto">
      {/* On small screens: single row, scroll horizontally.
          On >= sm: items can wrap nicely and fill space. */}
      <div className="flex flex-nowrap sm:flex-wrap sm:justify-between gap-x-6 gap-y-3 min-w-max sm:min-w-0">
        {stocks.map((s) => (
          <div
            key={s.label}
            className="flex items-center gap-2 shrink-0"
          >
            <div className="text-black text-sm md:text-base font-bold font-[Poppins]">
              {s.label}
            </div>

            <div className={dotClass(s.changePct)} />

            <div
              className={`${pctColor(
                s.changePct
              )} text-sm md:text-base font-normal font-[Poppins]`}
            >
              {s.changePct > 0 ? "+" : ""}
              {s.changePct.toFixed(2)}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
