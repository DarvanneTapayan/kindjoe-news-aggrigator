// lib/rss/mockData.ts
import type { StockItem, ColumnData } from "./types";

export const mockStocks: StockItem[] = [
  { label: "GOLD", changePct: 1.18 },
  { label: "NASDAQ", changePct: 1.18 },
  { label: "APPLE", changePct: -1.18 },
  { label: "NVIDIA", changePct: 1.18 },
  { label: "META", changePct: -1.18 },
  { label: "TESLA", changePct: -1.18 },
  { label: "GOOGLE", changePct: -1.18 },
  { label: "YOUTUBE", changePct: -1.18 },
  { label: "MICROSOFT", changePct: -1.18 },
];

export const leftCol: ColumnData = {
  blocks: [
    {
      id: "l-lg-1",
      size: "lg",
      title: "South Park’ Creators Break Silence on Why This Season Keeps Slamming Trump",
      image: "https://placehold.co/1200x675",
      accent: "blue",
    },
    {
      id: "l-lg-2",
      size: "lg",
      title: "South Park’ Creators Break Silence on Why This Season Keeps Slamming Trump",
      image: "https://placehold.co/1200x900",
      accent: "blue",
    },
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
  hero: {
    id: "m-lg-hero",
    size: "lg",
    title: "Putin clenching fists 'in agony' as bulging veins spark health rumors...",
    image: "https://placehold.co/1200x675",
    accent: "red",
  },
  blocks: [
    {
      id: "m-md-1",
      size: "md",
      title: "President's enforcer inspires fear and vexation across Washington...",
      image: "https://placehold.co/640x480",
    },
  ],
  bulletsTop: [
    "South Park’ Creators Break Silence on Why This Season Keeps Slamming Trump",
    "South Park’ Creators Break Silence on Why This Season Keeps Slamming Trump",
    "South Park’ Creators Break Silence on Why This Season Keeps Slamming Trump",
  ],
};

export const rightCol: ColumnData = {
  blocks: [
    {
      id: "r-sm-1",
      size: "sm",
      title: "South Park’ Creators Break Silence on Why This Season Keeps Slamming Trump",
      image: "https://placehold.co/320x240",
      accent: "default",
    },
    {
      id: "r-sm-2",
      size: "sm",
      title: "South Park’ Creators Break Silence on Why This Season Keeps Slamming Trump",
      image: "https://placehold.co/320x240",
      accent: "red",
    },
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
