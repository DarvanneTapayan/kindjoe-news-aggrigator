import Link from 'next/link';
import BreakingNewsCard from '../components/BreakingNewsCard';
import NewsList from '../components/NewsList';

import {
  getBreakingNews,
  getTrendingTopics,
  getFeaturedArticle,
  fetchNewsFromRssFeed,
} from '../lib/fetchNews';

import type { UiNewsItem } from '../lib/types/ui';

export default async function Home() {
  const numberOfMainNewsCardsPerFeed = 3;
  const numberOfRelatedArticlesPerCard = 5;

  const rssFeedUrls = [
    { name: 'BBC News – Top Stories', url: 'https://feeds.bbci.co.uk/news/rss.xml' },
    { name: 'The Guardian – World', url: 'https://www.theguardian.com/world/rss' },
    { name: 'Al Jazeera', url: 'https://www.aljazeera.com/xml/rss/all.xml' },
    { name: 'NPR News', url: 'https://feeds.npr.org/1001/rss.xml' },
    { name: 'DW News', url: 'https://rss.dw.com/rdf/rss-en-all' },
    { name: 'NY Times – Home Page', url: 'https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml' },
  ];

  const breakingNews =
    await getBreakingNews().catch(() => ({
      tag: 'BREAKING',
      headline: 'Stay tuned for live updates.',
      callToActionText: 'View live coverage',
      callToActionHref: '/latest',
      className: 'bg-red-700 text-white',
      source: 'KindJoe Aggregator',
      timeAgo: 'Just now',
    }));

  const trendingTopics =
    await getTrendingTopics().catch(() => []);

  const featuredArticle =
    await getFeaturedArticle().catch(() => ({
      imageUrl: 'https://placehold.co/960x540/jpg',
      imageAlt: 'Featured story',
      href: '/featured',
      headline: 'Featured story unavailable',
      description: 'Please check back later.',
    }));

  const rssPromises = rssFeedUrls.map(feed =>
    fetchNewsFromRssFeed(
      feed.url,
      numberOfMainNewsCardsPerFeed,
      numberOfRelatedArticlesPerCard,
      feed.name
    ).catch(() => [] as UiNewsItem[])
  );

  const rssNewsArrays = await Promise.all(rssPromises);
  const latestNewsFromRss: UiNewsItem[] = rssNewsArrays.flat();

  return (
    <main className="flex flex-col text-gray-900">
      {/* Breaking News */}
      {breakingNews && (
        <BreakingNewsCard
          className="w-full"
          tag={breakingNews.tag ?? 'BREAKING'}
          headline={breakingNews.headline ?? ''}
          callToActionText={breakingNews.callToActionText ?? 'Read more'}
          callToActionHref={breakingNews.callToActionHref ?? '#'}
          source={breakingNews.source}
          timeAgo={breakingNews.timeAgo}
        />
      )}

      {/* Main Content */}
      <div className="w-full max-w-5xl mx-auto px-4 md:px-5 lg:px-6 py-6 md:py-8 flex flex-col gap-8">
        {/* Latest News */}
        {latestNewsFromRss.length > 0 && (
          <>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 border-b border-red-600 pb-2">
              Latest News
            </h2>
            <NewsList newsData={latestNewsFromRss} />
          </>
        )}

        {/* Featured Article */}
        {featuredArticle && (
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
              <p className="text-sm md:text-base text-gray-800">{featuredArticle.description}</p>
              <Link
                href={featuredArticle.href}
                className="self-start text-blue-700 font-medium hover:underline text-sm md:text-base"
              >
                Read more →
              </Link>
            </div>
          </section>
        )}

        {/* Trending Topics */}
        {trendingTopics.length > 0 && (
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
        )}

        {/* Go to News Page Button */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/news"
            className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
          >
            Go to News Page →
          </Link>
        </div>

        {/* Newsletter Section */}
        <div className="bg-blue-50 p-6 rounded-md text-center text-blue-900">
          <p className="text-base md:text-lg font-medium">Get the top stories, once a day.</p>
          <button className="mt-3 px-5 py-2.5 bg-blue-700 text-white rounded-md hover:bg-blue-800 text-sm md:text-base">
            Subscribe
          </button>
        </div>
      </div>
    </main>
  );
}
