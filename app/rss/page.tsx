// app/rss/page.tsx
import {
  RSSBigCard,
  RSSMediumSplitCard,
  RSSSmallTopImageCard,
  RSSSmallTopTitleCard,
} from "@/components/rss/RssCards";

import RssHubSection from "@/components/sections/RssHubSection";
import { RssSidebar } from "@/components/rss/RssSideBar";

import { mockStocks } from "@/lib/rss/mockData";
import type { RssLink } from "@/lib/rss/types";

// -----------------------------
// Random long news title generator
// -----------------------------
function randomTitle() {
  const pool = [
    "President's enforcer inspires fear and vexation across Washington as insiders warn of escalating political turmoil...",
    "Explosive new documents reveal weeks of secretly negotiated power deals shaking both Congress and Wall Street...",
    "International watchdog raises alarms after unprecedented cyber infiltration impacts major infrastructure systems...",
    "Major airlines scramble as regulatory overhaul triggers mass schedule disruption ahead of holiday travel season...",
    "Technology giants face renewed scrutiny amid revelations of large-scale data harvesting practices and privacy concerns...",
    "Unexpected economic surge shocks analysts as global markets reposition ahead of critical monetary decisions...",
    "Witness testimony in landmark corruption case paints chaotic picture of behind-the-scenes Washington maneuvering...",
    "Astronomers detect mysterious deep-space signal repeating with unusual mathematical precision, sparking debate...",
    "Key intelligence memo leaked overnight warns of increasing geopolitical instability across multiple regions...",
    "Historic weather anomalies batter coastal cities, prompting emergency declarations and long-term climate planning...",
  ];

  return pool[Math.floor(Math.random() * pool.length)];
}

// -----------------------------
// LINKS SHARED BY ALL CARDS
// -----------------------------
const links: RssLink[] = [
  { label: "South Park’ Creators Break Silence...", href: "#" },
  { label: "FEDERALIST Boss Savages 'Weak and Rudderless' Don...", href: "#" },
  { label: "TRAVEL HELL DAY 41: FAA 'Effectively Prohibits'...", href: "#" },
  { label: "Another headline goes here...", href: "#" },
  { label: "Fifth headline link...", href: "#" },
];

// -----------------------------
// LEFT COLUMN
// -----------------------------
const leftCards = [
  <RSSSmallTopImageCard imageSrc="https://placehold.co/400x300" title={randomTitle()} links={links} aspectRatio="1/1" />,
  <RSSSmallTopTitleCard imageSrc="https://placehold.co/400x300" title={randomTitle()} links={links} aspectRatio="1/1" />,
  <RSSSmallTopImageCard imageSrc="https://placehold.co/400x300" title={randomTitle()} links={links} aspectRatio="1/1" />,
  <RSSSmallTopTitleCard imageSrc="https://placehold.co/400x300" title={randomTitle()} links={links} aspectRatio="1/1" />,
];

// -----------------------------
// MIDDLE COLUMN
// -----------------------------
const middleCards = [
  <RSSBigCard imageSrc="https://placehold.co/1200x675" title={randomTitle()} links={links} aspectRatio="16/9" />,
  <RSSMediumSplitCard imageSrc="https://placehold.co/600x400" title={randomTitle()} links={links} aspectRatio="4/3" />,
  <RSSMediumSplitCard imageSrc="https://placehold.co/600x400" title={randomTitle()} links={links} aspectRatio="4/3" />,
];

// -----------------------------
// RIGHT COLUMN
// -----------------------------
const rightCards = [
  <RSSSmallTopTitleCard imageSrc="https://placehold.co/400x300" title={randomTitle()} links={links} aspectRatio="1/1" />,
  <RSSSmallTopImageCard imageSrc="https://placehold.co/400x300" title={randomTitle()} links={links} aspectRatio="1/1" />,
  <RSSSmallTopTitleCard imageSrc="https://placehold.co/400x300" title={randomTitle()} links={links} aspectRatio="1/1" />,
  <RSSSmallTopImageCard imageSrc="https://placehold.co/400x300" title={randomTitle()} links={links} aspectRatio="1/1" />,
];

// -----------------------------
// SIDEBAR CONTENT
// -----------------------------
const sidebarNews = [
  { id: "s1", title: randomTitle(), imageSrc: "https://placehold.co/95x60" },
  { id: "s2", title: randomTitle(), imageSrc: "https://placehold.co/95x60" },
  { id: "s3", title: randomTitle(), imageSrc: "https://placehold.co/95x60" },
  { id: "s4", title: randomTitle(), imageSrc: "https://placehold.co/95x60" },
];

const sidebar = (
  <RssSidebar moreNews={sidebarNews} adImageSrc="https://placehold.co/235x316" adHref="#" />
);

// -----------------------------
// MAIN PAGE EXPORT
// -----------------------------
export default function RssPage() {
  return (
    <main className="page-pad-40">
      <RssHubSection
        stocks={mockStocks}
        leftCards={leftCards}
        middleCards={middleCards}
        rightCards={rightCards}
        sidebar={sidebar}
      />
    </main>
  );
}
