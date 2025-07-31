import { motion } from 'framer-motion';
import DiscoveryImage from '../Assets/5. Discovery & Strategy.png';
import DevelopmentImage from '../Assets/6. System & Brand Development.png';
import LaunchImage from '../Assets/7. Automation & Launch.png';
import ScalingImage from '../Assets/8. Optimization & Scaling.png';

const processSteps = [
  {
    title: '1. Discovery & Strategy',
    description: 'We start by deeply understanding your business, goals, and customers to build a custom roadmap for growth.',
    image: DiscoveryImage,
    alt: 'Illustration of a magnifying glass over a business blueprint.',
  },
  {
    title: '2. System & Brand Development',
    description: 'We build your custom CRM, design a compelling brand identity, and create content that converts.',
    image: DevelopmentImage,
    alt: 'Split-screen showing CRM dashboard development and brand design.',
  },
  {
    title: '3. Automation & Launch',
    description: 'We implement automation for marketing and outreach, then launch your new systems and digital presence.',
    image: LaunchImage,
    alt: 'Illustration of interconnected gears representing automation.',
  },
  {
    title: '4. Optimization & Scaling',
    description: 'We monitor performance, refine strategies based on data, and provide ongoing support to ensure you continue to scale.',
    image: ScalingImage,
    alt: 'Upward-trending line graph on a digital interface.',
  },
];

const Process = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="process" className="py-20 px-4 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sans text-text-primary">Our Strategic Process</h2>
          <p className="text-lg text-text-secondary mt-4 max-w-3xl mx-auto">A proven framework for building the systems and brand you need to scale.</p>
        </div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {processSteps.map((step, index) => (
            <motion.div key={index} className="text-left flex flex-col" variants={itemVariants}>
              <div className="w-full h-40 mb-6 rounded-lg overflow-hidden">
                <img src={step.image} alt={step.alt} className="w-full h-full object-cover" />
              </div>

              <h4 className="text-2xl font-bold font-sans text-text-primary mb-3">{step.title}</h4>
              <p className="text-text-secondary leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
