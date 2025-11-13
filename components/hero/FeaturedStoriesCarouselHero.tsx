// components/hero/FeaturedStoriesCarouselHero.tsx
"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function FeaturedStoriesCarouselHero({
  stories,
  dateLabel,
}: {
  stories: {
    id: string;
    title: string;
    imageSrc: string;
    href: string;
    author: string;
    readTime: string;
  }[];
  dateLabel: string;
}) {
  const displayed = stories.slice(0, 6);

  // ---- responsive chunk size ----
  const [chunkSize, setChunkSize] = useState(3); // default desktop

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;

      if (width < 640) {
        setChunkSize(1); // mobile
      } else if (width < 1024) {
        setChunkSize(2); // tablet
      } else {
        setChunkSize(3); // desktop
      }
    }

    handleResize(); // run once
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Split stories into groups based on chunkSize
  const grouped = chunk(displayed, chunkSize);

  return (
    <div className="w-full bg-red-950/90 px-6 md:px-10 py-8 flex flex-col gap-6">
      <h2 className="text-white text-3xl md:text-5xl font-bold font-[Poppins]">
        Today’s Kind Joe Featured Stories
      </h2>

      <Carousel className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {grouped.map((group, idx) => (
            <CarouselItem key={idx} className="pl-2 md:pl-4 basis-full">
              <div
                className={`grid gap-4 ${
                  chunkSize === 1
                    ? "grid-cols-1"
                    : chunkSize === 2
                    ? "grid-cols-2"
                    : "grid-cols-3"
                }`}
              >
                {group.map((story) => (
                  <a
                    key={story.id}
                    href={story.href}
                    className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden group"
                  >
                    <img
                      src={story.imageSrc}
                      className="w-full h-full object-cover"
                      alt={story.title}
                    />

                    {/* Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-xl p-4">
                      <div className="w-6 h-1 bg-red-600 mb-2" />

                      <h3 className="text-white text-sm md:text-base font-bold leading-snug">
                        {story.title}
                      </h3>

                      <p className="text-white text-xs mt-1">
                        By {story.author} • {story.readTime}{" "}
                        <span className="text-blue-400">Read Full Story →</span>
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <p className="text-white text-sm font-bold">{dateLabel}</p>
    </div>
  );
}

// Split array into chunks
function chunk(arr: any[], size: number) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) {
    out.push(arr.slice(i, i + size));
  }
  return out;
}
