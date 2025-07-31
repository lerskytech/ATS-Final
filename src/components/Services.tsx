import { motion } from 'framer-motion';
import { imageMap } from '../utils/imageMap';
import RatioBox from './RatioBox';

const services = [
  {
    title: 'Website Design & Development',
    description: 'Creating stunning, high-performance websites that are tailored to your brand and designed to convert. We focus on user experience and cutting-edge technology.',
    icon: '/assets/icons/website.png',
  },
  {
    title: 'Brand Identity & Strategy',
    description: 'We help you build a strong, memorable brand that resonates with your target audience. From logo design to brand guidelines, we\'ve got you covered.',
    icon: '/assets/icons/branding.png',
  },
  {
    title: 'Social Media Management',
    description: 'Engage your community and grow your online presence with our data-driven social media strategies. We create content that captures attention and drives results.',
    icon: '/assets/icons/social.png',
  },
  {
    title: 'Advanced CRM Integration',
    description: 'Streamline your sales and customer service processes with a fully integrated CRM system. We specialize in platforms like Salesforce and HubSpot.',
    icon: '/assets/icons/crm.png',
  },
  {
    title: 'Voice Search & SEO',
    description: 'Optimize your content for the future of search. We\'ll help you rank higher and reach more customers through voice-activated queries and comprehensive SEO.',
    icon: '/assets/icons/seo.png',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-900/70 backdrop-blur-sm">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">Our Services</h2>
        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">We deliver comprehensive solutions that blend creativity with technology to help you achieve your business goals.</p>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => {
            const imageData = imageMap[service.icon as keyof typeof imageMap];
            if (!imageData) {
              console.error(`Image data not found for icon: ${service.icon}`);
              return null;
            }

            return (
              <motion.div
                key={service.title}
                className="bg-gray-900/50 backdrop-blur-md p-8 rounded-lg border border-cyan-400/30 text-left transform transition-transform duration-300 hover:scale-105 hover:border-cyan-400"
                variants={itemVariants}
              >
                <div className="w-full mb-6">
                  <RatioBox 
                    src={service.icon} 
                    alt={imageData.useCase} 
                    ratio={imageData.ratio} 
                    className="rounded-lg border-2 border-cyan-500/50"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
