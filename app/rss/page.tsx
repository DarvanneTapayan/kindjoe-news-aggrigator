// app/rss/page.tsx
import {
  RSSBigCard,
  RSSMediumSplitCard,
  RSSSmallTopImageCard,
  RSSSmallTopTitleCard,
} from "@/components/rss/RssCards";

import RssHubSection from "@/components/sections/RssHubSection";
import { RssSidebar } from "@/components/rss/RssSideBar";
import { FeaturedStoriesCarouselHero } from "@/components/hero/FeaturedStoriesCarouselHero";

import { mockStocks } from "@/lib/rss/mockData";
import type { RssLink } from "@/lib/rss/types";

// -----------------------------
// FEATURED STORIES (HERO CAROUSEL)
// -----------------------------
const featuredStories = [
  {
    id: "f1",
    title:
      "Trump threatens to sue 'corrupt' BBC for $1.5b over 'salacious' documentary as media battle intensifies...",
    imageSrc: "https://placehold.co/900x500",
    href: "#",
    author: "KindJoe Staff",
    readTime: "6 min read",
  },
  {
    id: "f2",
    title:
      "Global markets wobble as unexpected inflation report sends shockwaves through Wall Street and beyond...",
    imageSrc: "https://placehold.co/900x500",
    href: "#",
    author: "KindJoe Business Desk",
    readTime: "4 min read",
  },
  {
    id: "f3",
    title:
      "Tech giants face fresh scrutiny amid sweeping data-privacy overhaul and tighter international regulations...",
    imageSrc: "https://placehold.co/900x500",
    href: "#",
    author: "KindJoe Tech Team",
    readTime: "7 min read",
  },
  {
    id: "f4",
    title:
      "Travel chaos deepens as major carriers struggle with staffing, storms, and new global airspace restrictions...",
    imageSrc: "https://placehold.co/900x500",
    href: "#",
    author: "KindJoe Travel",
    readTime: "5 min read",
  },
  {
    id: "f5",
    title:
      "Housing market surprises analysts as buyers return amid high rates and tight inventory across key cities...",
    imageSrc: "https://placehold.co/900x500",
    href: "#",
    author: "KindJoe Money",
    readTime: "6 min read",
  },
  {
    id: "f6",
    title:
      "Washington insiders brace for bruising budget showdown with spending cuts and new taxes on the table...",
    imageSrc: "https://placehold.co/900x500",
    href: "#",
    author: "KindJoe Politics",
    readTime: "8 min read",
  },
];

// -----------------------------
// SHARED LINKS FOR CARDS
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
  <RSSSmallTopImageCard
    key="l1"
    imageSrc="https://placehold.co/400x300"
    title="Regional banks rally as investors rotate back into overlooked financial names..."
    links={links}
    aspectRatio="1/1"
  />,
  <RSSSmallTopTitleCard
    key="l2"
    imageSrc="https://placehold.co/400x300"
    title="Consumers tighten budgets as cost-of-living pressures ripple through every income bracket..."
    links={links}
    aspectRatio="1/1"
  />,
  <RSSSmallTopImageCard
    key="l3"
    imageSrc="https://placehold.co/400x300"
    title="Oil prices edge higher as traders watch geopolitical tensions and production cuts..."
    links={links}
    aspectRatio="1/1"
  />,
  <RSSSmallTopTitleCard
    key="l4"
    imageSrc="https://placehold.co/400x300"
    title="Mortgage demand ticks up slightly despite elevated rates and affordability concerns..."
    links={links}
    aspectRatio="1/1"
  />,
];

// -----------------------------
// MIDDLE COLUMN
// -----------------------------
const middleCards = [
  <RSSBigCard
    key="m1"
    imageSrc="https://placehold.co/1200x675"
    title="President's enforcer inspires fear and vexation across Washington as key allies quietly push back..."
    links={links}
    aspectRatio="16/9"
  />,
  <RSSMediumSplitCard
    key="m2"
    imageSrc="https://placehold.co/600x400"
    title="Surprise economic data upends forecasts as analysts rethink recession odds for the coming year..."
    links={links}
    aspectRatio="4/3"
  />,
  <RSSMediumSplitCard
    key="m3"
    imageSrc="https://placehold.co/600x400"
    title="Major corporate shake-up reshapes leadership ranks at one of the country's most iconic brands..."
    links={links}
    aspectRatio="4/3"
  />,
];

// -----------------------------
// RIGHT COLUMN
// -----------------------------
const rightCards = [
  <RSSSmallTopTitleCard
    key="r1"
    imageSrc="https://placehold.co/400x300"
    title="Global airlines weigh capacity cuts as fuel costs spike and demand patterns shift again..."
    links={links}
    aspectRatio="1/1"
  />,
  <RSSSmallTopImageCard
    key="r2"
    imageSrc="https://placehold.co/400x300"
    title="Streaming giants battle for subscribers as new bundles and ad tiers flood the market..."
    links={links}
    aspectRatio="1/1"
  />,
  <RSSSmallTopTitleCard
    key="r3"
    imageSrc="https://placehold.co/400x300"
    title="Crypto markets lurch higher amid renewed speculation over regulatory breakthroughs..."
    links={links}
    aspectRatio="1/1"
  />,
  <RSSSmallTopImageCard
    key="r4"
    imageSrc="https://placehold.co/400x300"
    title="Auto makers race to pivot as EV incentives fade and hybrid demand surges unexpectedly..."
    links={links}
    aspectRatio="1/1"
  />,
];

// -----------------------------
// SIDEBAR CONTENT
// -----------------------------
const sidebarNews = [
  {
    id: "s1",
    title:
      "Investors brace for another volatile week as central bankers hint at shifting policy tone...",
    imageSrc: "https://placehold.co/95x60",
  },
  {
    id: "s2",
    title:
      "New report shows sharp divide between high-income and low-income household finances...",
    imageSrc: "https://placehold.co/95x60",
  },
  {
    id: "s3",
    title:
      "Tech layoffs ripple into secondary markets as startups rethink growth-at-all-costs strategy...",
    imageSrc: "https://placehold.co/95x60",
  },
  {
    id: "s4",
    title:
      "Analysts say travel demand may stay elevated despite economic clouds forming on the horizon...",
    imageSrc: "https://placehold.co/95x60",
  },
];

const sidebar = (
  <RssSidebar moreNews={sidebarNews} adImageSrc="https://placehold.co/235x316" adHref="#" />
);

// -----------------------------
// MAIN PAGE EXPORT
// -----------------------------
export default function RssPage() {
  return (
    <>
      {/* 🔥 Full-width hero carousel outside main (no 40px padding) */}
      <FeaturedStoriesCarouselHero
        stories={featuredStories}
        dateLabel="November 12 2025"
      />

      {/* RSS feeds with 40px page padding */}
      <main className="page-pad-40">
        <div className="mt-8">
          <RssHubSection
            stocks={mockStocks}
            leftCards={leftCards}
            middleCards={middleCards}
            rightCards={rightCards}
            sidebar={sidebar}
          />
        </div>
      </main>
    </>
  );
}
