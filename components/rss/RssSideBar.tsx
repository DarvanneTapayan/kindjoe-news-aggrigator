// components/rss/RssSideBar.tsx
import React from "react";

type SidebarNewsItem = {
  id: string;
  title: string;
  imageSrc: string;
};

export function RssSidebar({
  moreNews,
  adImageSrc,
  adHref,
}: {
  moreNews: SidebarNewsItem[];
  adImageSrc: string;
  adHref?: string;
}) {
  return (
    <div className="w-full max-w-[240px] flex flex-col gap-6 font-[Poppins]">
      <h3 className="text-slate-950 text-sm font-bold">More News</h3>

      <div className="flex flex-col gap-4">
        {moreNews.map((item) => (
          <div key={item.id} className="flex flex-col gap-2">
            <div className="flex justify-between items-start gap-3">
              <img
                src={item.imageSrc}
                alt={item.title}
                className="w-24 h-14 rounded-md object-cover"
              />
              <p className="w-[130px] text-blue-900 text-[11px] font-semibold leading-tight">
                {item.title}
              </p>
            </div>
            <div className="w-full h-px bg-neutral-300" />
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <img
          src={adImageSrc}
          alt="Advertisement"
          className="w-full rounded-md"
        />
        <div className="flex justify-between text-[8px] text-zinc-500">
          <span>Advertisement</span>
          <a href={adHref} className="underline">
            Ad feedback
          </a>
        </div>
      </div>
    </div>
  );
}
