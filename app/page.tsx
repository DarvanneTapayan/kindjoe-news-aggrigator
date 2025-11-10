// app/page.tsx
import NewsCard from './components/NewsCard';
import BreakingNewsCard from './components/BreakingNewsCard';
import Link from 'next/link';

export default function Home() {
  const breakingNews = {
    tag: 'EXCLUSIVE',
    headline: 'Biden approval dips amid new controversy',
    callToActionText: 'Read the full story →',
    callToActionHref: '/politics/biden-scandal',
  };

  const mainNewsCardsData = [
    {
      timeAgo: '15m ago',
      imageUrl: 'https://placehold.co/586x390/007bff/ffffff?text=SPACE+NEWS',
      imageAlt: 'Astronauts stranded in space after their capsule is struck by mystery object',
      headline: 'Astronauts stranded after capsule hit by “mystery object”',
      relatedArticles: [
        { text: "NASA investigates 'mystery object' in space", href: '/tech/nasa-investigation' },
        { text: 'Future of space travel in question', href: '/tech/space-travel-future' },
      ],
    },
    {
      timeAgo: '30m ago',
      imageUrl: 'https://placehold.co/586x390/28a745/ffffff?text=TECH+BREAKTHROUGH',
      imageAlt: 'AI chip breakthrough',
      headline: 'Revolutionary AI chip breaks speed records in Silicon Valley',
      relatedArticles: [
        { text: 'Impact on computing industry', href: '/tech/ai-impact' },
        { text: 'Competitors scramble for answers', href: '/business/ai-competitors' },
      ],
    },
    {
      timeAgo: '1h ago',
      imageUrl: 'https://placehold.co/586x390/ffc107/333333?text=LOCAL+HERO',
      imageAlt: 'Local hero saving pets',
      headline: 'Local woman rescues dozens of animals from floods',
      relatedArticles: [
        { text: 'Community reaction', href: '/local-news/community-reaction' },
        { text: 'How to help rescued animals', href: '/lifestyle/help-animals' },
      ],
    },
    {
      timeAgo: '2h ago',
      imageUrl: 'https://placehold.co/586x390/17a2b8/ffffff?text=BUSINESS+UPDATE',
      imageAlt: 'Stock market dip',
      headline: 'Global markets dip amid inflation concerns',
      relatedArticles: [
        { text: 'Recovery timeline', href: '/business/recovery-timeline' },
        { text: 'Impact on consumer spending', href: '/business/consumer-spending' },
      ],
    },
  ];

  const trendingTopics = [
    { name: 'Artificial Intelligence', href: '/topic/ai' },
    { name: 'Space Exploration', href: '/topic/space' },
    { name: 'Climate Change', href: '/topic/climate' },
    { name: 'Election 2024', href: '/topic/election' },
    { name: 'Healthy Living', href: '/topic/health' },
  ];

  const featuredArticle = {
    imageUrl: 'https://placehold.co/1200x600/6f42c1/ffffff?text=FEATURED+ARTICLE',
    imageAlt: 'Featured article image',
    headline: 'How remote work is reshaping cities',
    description:
      'A look at the long-term effects of WFH on urban development, economies, and communities.',
    href: '/lifestyle/remote-work-cities',
  };

  return (
    <main className="flex flex-col text-gray-900">
      <BreakingNewsCard {...breakingNews} className="w-full" />

      <div className="w-full max-w-5xl mx-auto px-4 md:px-5 lg:px-6 py-6 md:py-8 flex flex-col gap-8">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 border-b border-red-600 pb-2">
          Latest News
        </h2>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainNewsCardsData.map((data, idx) => (
            <NewsCard key={idx} {...data} />
          ))}
        </section>

        <section className="bg-white rounded-md shadow-sm overflow-hidden flex flex-col md:flex-row text-gray-900">
          <div className="md:w-1/2">
            <img
              src={featuredArticle.imageUrl}
              alt={featuredArticle.imageAlt}
              className="w-full h-auto object-cover md:h-full"
            />
          </div>
          <div className="md:w-1/2 p-5 md:p-6 flex flex-col justify-center gap-3">
            <h3 className="text-xl md:text-2xl font-semibold leading-snug text-gray-900">
              <Link href={featuredArticle.href} className="hover:text-blue-600">
                {featuredArticle.headline}
              </Link>
            </h3>
            <p className="text-sm md:text-base text-gray-800">
              {featuredArticle.description}
            </p>
            <Link
              href={featuredArticle.href}
              className="self-start text-blue-700 font-medium hover:underline text-sm md:text-base"
            >
              Read more →
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 border-b border-red-600 pb-2 mb-4">
            Trending Topics
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {trendingTopics.map((topic, index) => (
              <Link
                key={index}
                href={topic.href}
                className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-3 py-1.5 rounded-full text-sm md:text-[15px]"
              >
                #{topic.name}
              </Link>
            ))}
          </div>
        </section>

        <div className="bg-blue-50 p-6 rounded-md text-center text-blue-900">
          <p className="text-base md:text-lg font-medium">
            Get the top stories, once a day.
          </p>
          <button className="mt-3 px-5 py-2.5 bg-blue-700 text-white rounded-md hover:bg-blue-800 text-sm md:text-base">
            Subscribe
          </button>
        </div>
      </div>
    </main>
  );
}
