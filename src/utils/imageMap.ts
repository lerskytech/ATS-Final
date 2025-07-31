export interface ImageMetadata {
  ratio: string;
  useCase: string;
  dimensions?: string;
}

export const imageMap: { [key: string]: ImageMetadata } = {
  '/assets/ATSLOGO.png': { ratio: '1/1', useCase: 'Main Site Logo' },
  '/assets/avatars/client1.png': { ratio: '1/1', useCase: 'Client 1 Avatar' },
  '/assets/avatars/client2.png': { ratio: '1/1', useCase: 'Client 2 Avatar' },
  '/assets/avatars/client3.png': { ratio: '1/1', useCase: 'Client 3 Avatar' },
  '/assets/avatars/team1.png': { ratio: '1/1', useCase: 'Team Member 1 Avatar' },
  '/assets/avatars/team2.png': { ratio: '1/1', useCase: 'Team Member 2 Avatar' },
  '/assets/avatars/team3.png': { ratio: '1/1', useCase: 'Team Member 3 Avatar' },
  '/assets/avatars/team4.png': { ratio: '1/1', useCase: 'Team Member 4 Avatar' },
  '/assets/banners/hero.png': { ratio: '16/9', useCase: 'Hero Banner' },
  '/assets/icons/branding.png': { ratio: '1/1', useCase: 'Branding Icon' },
  '/assets/icons/crm.png': { ratio: '1/1', useCase: 'CRM Icon' },
  '/assets/icons/seo.png': { ratio: '1/1', useCase: 'SEO Icon' },
  '/assets/icons/social.png': { ratio: '1/1', useCase: 'Social Media Icon' },
  '/assets/icons/website.png': { ratio: '1/1', useCase: 'Website Icon' },
  '/assets/portraits/about.png': { ratio: '2/3', useCase: 'About Us Portrait' },
  '/assets/portraits/service1.png': { ratio: '2/3', useCase: 'Service 1 Portrait' },
  '/assets/portraits/service2.png': { ratio: '2/3', useCase: 'Service 2 Portrait' },
  '/assets/portraits/service3.png': { ratio: '2/3', useCase: 'Service 3 Portrait' },
  '/assets/process/step1.png': { ratio: '4/3', useCase: 'Process Step 1' },
  '/assets/process/step2.png': { ratio: '4/3', useCase: 'Process Step 2' },
  '/assets/process/step3.png': { ratio: '4/3', useCase: 'Process Step 3' },
  '/assets/projects/project1_after.png': { ratio: '16/9', useCase: 'Project 1 After' },
  '/assets/projects/project1_before.png': { ratio: '16/9', useCase: 'Project 1 Before' },
  '/assets/projects/project2_after.png': { ratio: '16/9', useCase: 'Project 2 After' },
  '/assets/projects/project2_before.png': { ratio: '16/9', useCase: 'Project 2 Before' },
};
