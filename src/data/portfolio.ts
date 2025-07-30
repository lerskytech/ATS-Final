export interface PortfolioItem {
  title: string;
  description: string;
  before: string;
  after: string;
}

export const portfolio: PortfolioItem[] = [
  {
    title: 'E-commerce Platform Overhaul',
    description: 'A complete redesign and rebuild of a major e-commerce platform, resulting in a 40% increase in conversions and a 60% improvement in page load times.',
    before: '/assets/4.png',
    after: '/assets/5.png',
  },
  {
    title: 'Corporate Rebranding',
    description: 'A comprehensive rebranding project for a Fortune 500 company, including a new logo, brand guidelines, and a stunning new website.',
    before: '/assets/6.png',
    after: '/assets/7.png',
  },
];
