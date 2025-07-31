import { motion } from 'framer-motion';
import CrmImage from '../assets/Custom CRM & Automation.png';
import BrandingImage from '../assets/Branding & Digital Presence.png';
import MarketingImage from '../assets/Marketing & Outreach.png';

const services = [
  {
    title: 'Custom CRM & Automation',
    description: 'Build powerful systems to automate follow-ups, lead nurturing, and client retention.',
    image: CrmImage,
    alt: 'A clean, intuitive CRM dashboard on a laptop screen.',
  },
  {
    title: 'Branding & Digital Presence',
    description: 'Create a unified brand identity, compelling content, and a conversion-focused website.',
    image: BrandingImage,
    alt: 'A mood board showcasing a cohesive brand identity for a modern business.',
  },
  {
    title: 'Marketing & Outreach',
    description: 'Automate social media, set appointments, and rank on voice search to connect with more customers.',
    image: MarketingImage,
    alt: 'Abstract visualization of automated marketing pathways.',
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
    <section id="services" className="py-20 px-4 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 font-sans text-accent">Our Solutions</h2>
        <p className="text-lg text-text-secondary mb-12 max-w-3xl mx-auto">We blend technology and creativity to deliver results that help your business grow.</p>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="bg-surface p-8 rounded-lg border border-gray-200 text-left transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:border-accent"
              variants={itemVariants}
            >
              <div className="w-full h-48 mb-6 rounded-lg overflow-hidden">
                <img src={service.image} alt={service.alt} className="w-full h-full object-cover" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-text-primary">{service.title}</h3>
              <p className="text-text-secondary">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
