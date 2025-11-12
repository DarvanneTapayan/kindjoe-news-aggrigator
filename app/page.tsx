import RssHubSection, { mockStocks, leftCol, middleCol, rightCol } from "@/components/sections/RssHubSection";

export default function Home() {
  return (
    <main className="page-pad-40">
      <RssHubSection stocks={mockStocks} left={leftCol} middle={middleCol} right={rightCol} />
    </main>
  );
}
