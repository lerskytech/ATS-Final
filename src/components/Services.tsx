import { motion } from 'framer-motion';
import RatioBox from './RatioBox';
import { imageMap } from '../utils/imageMap';

const services = [
  {
    title: 'Transformative Web Development',
    description: 'Crafting high-performance websites that captivate and convert, using cutting-edge technologies for a seamless user experience.',
    icon: '/assets/portraits/service1.webp',
  },
  {
    title: 'Strategic Digital Branding',
    description: 'Building powerful brand identities that resonate with your audience and establish a lasting presence in the digital landscape.',
    icon: '/assets/portraits/service2.webp',
  },
  {
    title: 'Innovative UI/UX Design',
    description: 'Designing intuitive and visually stunning interfaces that drive engagement and deliver an unparalleled user journey.',
    icon: '/assets/portraits/service3.webp',
  },
];

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
    <section id="services" className="py-20 px-4 bg-black">
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
          {services.map((service) => {
            const imageData = imageMap[service.icon as keyof typeof imageMap];
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
