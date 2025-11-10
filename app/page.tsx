// app/page.tsx
import Link from 'next/link';
import BreakingNewsCard from './components/BreakingNewsCard';
import NewsList from './components/NewsList';
import {
  breakingNews,
  mockNewsData,
  trendingTopics,
  featuredArticle,
} from '../lib/newsData';

export default function Home() {
  return (
    <main className="flex flex-col text-gray-900">
      {/* Breaking News – full width */}
      <BreakingNewsCard {...breakingNews} className="w-full" />

      {/* Main container */}
      <div className="w-full max-w-5xl mx-auto px-4 md:px-5 lg:px-6 py-6 md:py-8 flex flex-col gap-8">
        {/* Latest News */}
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 border-b border-red-600 pb-2">
          Latest News
        </h2>

        {/* Dynamic News List */}
        <NewsList newsData={mockNewsData} />

        {/* Featured Article */}
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

        {/* Trending Topics */}
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

        {/* Newsletter CTA */}
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
