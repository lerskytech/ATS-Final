export interface ImageMetadata {
  ratio: string;
  useCase: string;
  dimensions?: string;
}

export const imageMap: { [key: string]: ImageMetadata } = {
  '/assets/ATSLOGO.JPG': {
    ratio: '1/1', 
    useCase: 'Main Site Logo',
  },
  '/assets/banners/hero.png': { ratio: '3:2', useCase: 'Hero banner', dimensions: '1500x1000' },
  '/assets/portraits/about.png': { ratio: '2:3', useCase: 'About team visual', dimensions: '600x900' },
  '/assets/portraits/service1.png': { ratio: '2:3', useCase: 'Services card 1', dimensions: '600x900' },
  '/assets/portraits/service2.png': { ratio: '2:3', useCase: 'Services card 2', dimensions: '600x900' },
  '/assets/portraits/service3.png': { ratio: '2:3', useCase: 'Services card 3', dimensions: '600x900' },
  '/assets/projects/project1_before.png': { ratio: '2:3', useCase: 'E-commerce Overhaul Before', dimensions: '800x1200' },
  '/assets/projects/project1_after.png': { ratio: '2:3', useCase: 'E-commerce Overhaul After', dimensions: '800x1200' },
  '/assets/projects/project2_before.png': { ratio: '2:3', useCase: 'Corporate Rebranding Before', dimensions: '800x1200' },
  '/assets/projects/project2_after.png': { ratio: '2:3', useCase: 'Corporate Rebranding After', dimensions: '800x1200' },
  '/assets/process/step1.png': { ratio: '3:2', useCase: 'Discovery & Strategy', dimensions: '1200x800' },
  '/assets/process/step2.png': { ratio: '3:2', useCase: 'Design & Development', dimensions: '1200x800' },
  '/assets/process/step3.png': { ratio: '3:2', useCase: 'Launch & Optimization', dimensions: '1200x800' },
  '/assets/icons/crm.png': { ratio: '1:1', useCase: 'CRM icon', dimensions: '512x512' },
  '/assets/icons/branding.png': { ratio: '1:1', useCase: 'Branding icon', dimensions: '512x512' },
  '/assets/icons/social.png': { ratio: '1:1', useCase: 'Social Media icon', dimensions: '512x512' },
  '/assets/icons/seo.png': { ratio: '1:1', useCase: 'Voice Search SEO icon', dimensions: '512x512' },
  '/assets/icons/website.png': { ratio: '1:1', useCase: 'Website Design icon', dimensions: '512x512' },
  '/assets/avatars/client1.png': { ratio: '1:1', useCase: 'Testimonial avatar 1', dimensions: '512x512' },
  '/assets/avatars/client2.png': { ratio: '1:1', useCase: 'Testimonial avatar 2', dimensions: '512x512' },
  '/assets/avatars/client3.png': { ratio: '1:1', useCase: 'Testimonial avatar 3', dimensions: '512x512' },
  '/assets/avatars/team1.png': { ratio: '1:1', useCase: 'Team member Alex Johnson', dimensions: '512x512' },
  '/assets/avatars/team2.png': { ratio: '1:1', useCase: 'Team member Maria Garcia', dimensions: '512x512' },
  '/assets/avatars/team3.png': { ratio: '1:1', useCase: 'Team member Sam Lee', dimensions: '512x512' },
  '/assets/avatars/team4.png': { ratio: '1:1', useCase: 'Team member Emily White', dimensions: '512x512' },
};
