import { motion } from 'framer-motion';
import { services } from '../data/services';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

const Services = () => {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">Core Services</h2>
        <p className="text-lg text-gray-400 mb-12">We deliver transformative digital solutions tailored to your business needs.</p>
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-gray-900/50 backdrop-blur-md p-8 rounded-lg border border-cyan-400/30 text-left transform transition-transform duration-300 hover:scale-105 hover:border-cyan-400"
              variants={itemVariants}
            >
              <motion.img 
                src={service.icon} 
                alt={`${service.title} icon`} 
                className="h-12 w-12 mb-6 bg-cyan-900/50 p-2 rounded-full border border-cyan-500"
                whileHover={{ scale: 1.2, rotate: 15 }}
              />
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
