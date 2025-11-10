// lib/mockData.ts (updated with diverse news sources and public image URLs)
import { Article, NewsItem } from './newsData';

export const breakingNews = {
  tag: 'BREAKING',
  headline: 'Global Leaders Convene for Emergency Climate Summit Amid Rising Temperatures',
  callToActionText: 'Read the full story on BBC News →',
  callToActionHref: 'https://www.bbc.com/news/science-environment-67343419', // Example BBC link
};

export const mockNewsData: NewsItem[] = [
  {
    timeAgo: '15m ago',
    imageUrl: 'https://images.unsplash.com/photo-1596526159265-d03f02e6e7d1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Image of a person using VR/AR headset
    imageAlt: 'Person wearing a futuristic VR/AR headset',
    headline: 'New Apple Vision Pro Apps Transform Entertainment and Productivity',
    headlineHref: 'https://www.theverge.com/2024/2/1/24058444/apple-vision-pro-apps-launch-entertainment-productivity', // Example The Verge link
    relatedArticles: [
      { text: 'The future of spatial computing', href: 'https://www.theverge.com/2024/2/1/24058444/apple-vision-pro-apps-launch-entertainment-productivity' },
      { text: 'Developers flock to Vision Pro platform', href: 'https://www.theverge.com/2024/2/1/24058444/apple-vision-pro-apps-launch-entertainment-productivity' },
      { text: 'Mixed reality trends in 2024', href: 'https://www.theverge.com/2024/2/1/24058444/apple-vision-pro-apps-launch-entertainment-productivity' },
    ],
  },
  {
    timeAgo: '45m ago',
    imageUrl: 'https://images.unsplash.com/photo-1563852028681-3006a88e9990?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Image of a futuristic urban landscape with green tech
    imageAlt: 'Sustainable city with green energy solutions and modern architecture',
    headline: 'Innovations in Green Energy Promise a Cleaner Future for Urban Centers',
    headlineHref: 'https://www.theguardian.com/environment/2024/jan/31/renewable-energy-innovation-cities-report', // Example The Guardian link
    relatedArticles: [
      { text: 'Solar panel breakthroughs', href: 'https://www.theguardian.com/environment/2024/jan/31/renewable-energy-innovation-cities-report' },
      { text: 'Wind power advancements', href: 'https://www.theguardian.com/environment/2024/jan/31/renewable-energy-innovation-cities-cities-report' },
      { text: 'Smart grid technologies', href: 'https://www.theguardian.com/environment/2024/jan/31/renewable-energy-innovation-cities-report' },
    ],
  },
  {
    timeAgo: '1h 30m ago',
    imageUrl: 'https://images.unsplash.com/photo-1517430816045-df4b7de1160e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Image of a space rocket launch
    imageAlt: 'Space rocket launching into the night sky',
    headline: 'NASA Announces Next Steps for Human Mission to Mars by 2030',
    headlineHref: 'https://www.bbc.com/news/science-environment-67343420', // Example BBC link
    relatedArticles: [
      { text: 'Challenges of deep space travel', href: 'https://www.bbc.com/news/science-environment-67343420' },
      { text: 'New propulsion technologies', href: 'https://www.bbc.com/news/science-environment-67343420' },
      { text: 'International collaboration in space', href: 'https://www.bbc.com/news/science-environment-67343420' },
    ],
  },
  {
    timeAgo: '3h ago',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Image of a diverse team collaborating
    imageAlt: 'Diverse business team collaborating in a modern office',
    headline: 'Future of Work: Hybrid Models Show Increased Productivity and Employee Satisfaction',
    headlineHref: 'https://www.theguardian.com/business/2024/feb/02/hybrid-work-productivity-employee-satisfaction-study', // Example The Guardian link
    relatedArticles: [
      { text: 'Balancing remote and office work', href: 'https://www.theguardian.com/business/2024/feb/02/hybrid-work-productivity-employee-satisfaction-study' },
      { text: 'Impact on company culture', href: 'https://www.theguardian.com/business/2024/feb/02/hybrid-work-productivity-employee-satisfaction-study' },
      { text: 'Tech tools for hybrid teams', href: 'https://www.theguardian.com/business/2024/feb/02/hybrid-work-productivity-employee-satisfaction-study' },
    ],
  },
];

export const trendingTopics = [
  { name: 'Artificial Intelligence', href: '/topic/ai' },
  { name: 'Space Exploration', href: '/topic/space' },
  { name: 'Climate Change', href: '/topic/climate' },
  { name: 'Tech Innovations', href: '/topic/tech-innovation' },
  { name: 'Hybrid Work', href: '/topic/hybrid-work' },
];

export const featuredArticle = {
  imageUrl: 'https://images.unsplash.com/photo-1542475510-c1157e937d55?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Image of a global network/data connections
  imageAlt: 'Interconnected glowing lines representing global data network',
  headline: 'The Metaverse and Web3: Bridging Virtual and Real-World Experiences',
  description:
    'Explore how the latest advancements in the metaverse and Web3 technologies are redefining digital interaction and ownership.',
  href: 'https://www.theverge.com/2024/2/2/24058500/metaverse-web3-future-virtual-real-world-experiences', // Example The Verge link
};