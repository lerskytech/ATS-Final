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
    before: 'https://placehold.co/800x600/cccccc/000000/png?text=Before',
    after: 'https://placehold.co/800x600/00FFFF/000000/png?text=After',
  },
  {
    title: 'Corporate Rebranding',
    description: 'A comprehensive rebranding project for a Fortune 500 company, including a new logo, brand guidelines, and a stunning new website.',
    before: 'https://placehold.co/800x600/cccccc/000000/png?text=Old+Dashboard',
    after: 'https://placehold.co/800x600/FF00FF/000000/png?text=New+Dashboard',
  },
];
