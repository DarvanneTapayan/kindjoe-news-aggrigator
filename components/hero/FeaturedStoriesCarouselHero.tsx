"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
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
  const [chunkSize, setChunkSize] = useState(3);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;

      if (width < 640) {
        setChunkSize(1);
      } else if (width < 1024) {
        setChunkSize(2);
      } else {
        setChunkSize(3);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Split stories into groups based on chunkSize
  const grouped = chunk(displayed, chunkSize);

  // ---- carousel API + dot indicators ----
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);

  // Keep current dot in sync with carousel
  useEffect(() => {
    if (!api) return;

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // 🎞️ Autoplay: infinite moving cards
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000); // 5 seconds per slide

    return () => clearInterval(interval);
  }, [api]);

  const handleDotClick = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <div className="relative w-full px-6 md:px-10 py-8 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a')",
        }}
      />

      {/* Red Overlay */}
      <div className="absolute inset-0 bg-red-950/90" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex flex-col gap-6">
        <h2 className="text-white text-3xl md:text-5xl font-bold font-[Poppins]">
          Today’s Kind Joe Featured Stories
        </h2>

        <Carousel
          className="w-full"
          setApi={setApi}
          opts={{ loop: true }} // 🔁 infinite loop
        >
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

                      {/* Card Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-xl p-4">
                        <div className="w-6 h-1 bg-red-600 mb-2" />

                        <h3 className="text-white text-sm md:text-base font-bold leading-snug">
                          {story.title}
                        </h3>

                        <p className="text-white text-xs mt-1">
                          By {story.author} • {story.readTime}{" "}
                          <span className="text-blue-400">
                            Read Full Story →
                          </span>
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Dot indicators – now move with autoplay */}
        <div className="flex justify-center gap-2 mt-2">
          {grouped.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleDotClick(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={idx === current}
              className={`h-2 rounded-full transition-all ${
                idx === current
                  ? "w-6 bg-white"
                  : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        <p className="text-white text-sm font-bold">{dateLabel}</p>
      </div>
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
