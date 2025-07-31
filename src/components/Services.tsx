import { motion } from 'framer-motion';
import CrmImage from '../Assets/2. Custom CRM & Automation.png';
import BrandingImage from '../Assets/3. Branding & Digital Presence.png';
import MarketingImage from '../Assets/4. Marketing & Outreach.png';

const services = [
  {
    title: 'Custom CRM & Automation',
    description: 'Tired of manual follow-ups and lost leads? We build intelligent automation engines that streamline your sales process, nurture relationships, and ensure no opportunity falls through the cracks.',
    image: CrmImage,
    alt: 'A clean, intuitive CRM dashboard on a laptop screen.',
  },
  {
    title: 'Branding & Digital Presence',
    description: 'Is your online presence failing to impress? We overhaul your digital footprint, creating a cohesive and powerful brand experience that builds trust and drives action.',
    image: BrandingImage,
    alt: 'A mood board showcasing a cohesive brand identity for a modern business.',
  },
  {
    title: 'Marketing & Outreach',
    description: 'Struggling to reach new customers consistently? We implement scalable marketing systems that automate your outreach, fill your pipeline, and position you in front of ready-to-buy clients.',
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
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans text-text-primary">Automate & Elevate Your Business</h2>
        <p className="text-lg text-text-secondary mb-12 max-w-3xl mx-auto">We deliver end-to-end digital solutions designed to automate your operations, amplify your brand, and accelerate your growth.</p>
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
