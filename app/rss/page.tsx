import Link from "next/link";
import RssHubSection, { mockStocks, leftCol as defaultLeft, middleCol as defaultMiddle, rightCol as defaultRight } from "@/components/sections/RssHubSection";

export const metadata = {
  title: "From Around the Web — KindJoe",
  description: "A fuller view of curated RSS across categories and sources.",
};

export default function RssPage() {
  const left = defaultLeft;
  const middle = defaultMiddle;
  const right = defaultRight;

  return (
    <main className="page-pad-40">
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">From Around the Web</h1>
        <Link href="/" className="text-sm font-medium underline underline-offset-4 hover:opacity-80">← Back to Home</Link>
      </header>

      <RssHubSection stocks={mockStocks} left={left} middle={middle} right={right} />
    </main>
  );
}
