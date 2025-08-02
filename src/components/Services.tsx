import { motion } from 'framer-motion';

const services = [
  {
    title: 'All-in-One CRM & Automation',
    description: 'No more manual follow-ups, missed appointments, or lost customers. We create easy-to-use systems that automatically track leads, nurture your clients, and keep you organized—no tech headaches.',
  },
  {
    title: 'Branding & Digital Presence',
    description: 'Does your brand make the right first impression? We design a look and message that fits you—across your website, social media, and every digital touchpoint—building trust before customers even call.',
  },
  {
    title: 'Marketing & Online Reach',
    description: 'Your next client is searching—somewhere new every day. We automate your marketing across all major search and voice platforms, ensuring your business is discoverable on Google, Alexa, Siri, and beyond.',
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
    <section id="services" className="py-20 px-4 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">What We Offer</h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="bg-gray-800 p-8 rounded-lg border border-cyan-400/30 text-left transform transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/20 shadow-lg"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
