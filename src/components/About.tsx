import React from 'react';
import { motion } from 'framer-motion';
import RatioBox from './RatioBox';
import { imageMap } from '../utils/imageMap';

const About: React.FC = () => {
  const services = [
    { name: 'Custom CRM Development', icon: '/assets/icons/crm.webp' },
    { name: 'Branding & Content Creation', icon: '/assets/icons/branding.webp' },
    { name: 'Social Media Marketing & Automation', icon: '/assets/icons/social.webp' },
    { name: 'Voice Search SEO', icon: '/assets/icons/seo.webp' },
    { name: 'Website Design & Optimization', icon: '/assets/icons/website.webp' },
  ];

  const aboutImageKey = '/assets/portraits/about.webp';
  const aboutImageData = imageMap[aboutImageKey as keyof typeof imageMap];

  return (
    <section id="about" className="py-20 px-4 bg-gray-900/20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">About Alpha Trust</h2>
        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
          We are a team of passionate developers, designers, and strategists dedicated to building the future of the web. Our focus is on creating beautiful, functional, and high-performance digital experiences that drive results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center mb-12">
          <div className="md:col-span-2">
            <RatioBox
              src={aboutImageKey}
              alt={aboutImageData.useCase}
              ratio={aboutImageData.ratio}
              className="rounded-lg shadow-lg border-2 border-cyan-400/50"
            />
          </div>
          <div className="md:col-span-3 text-left">
            <h3 className="text-3xl font-bold mb-4 text-cyan-400">Our Core Services</h3>
            <p className="text-gray-300 mb-6">We offer a comprehensive suite of services to elevate your brand's digital presence from start to finish.</p>
            <ul className="space-y-4">
              {services.map((service) => {
                const serviceIconData = imageMap[service.icon as keyof typeof imageMap];
                return (
                  <li key={service.name} className="flex items-center">
                     <div className="w-8 h-8 mr-4 flex-shrink-0">
                       <RatioBox src={service.icon} alt={serviceIconData.useCase} ratio={serviceIconData.ratio} />
                     </div>
                    <span className="text-lg text-gray-200">{service.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
