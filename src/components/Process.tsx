import { motion } from 'framer-motion';

const processSteps = [
  {
    title: 'Discovery & Planning',
    description: 'We learn about your business, goals, and challenges—then map a step-by-step strategy for growth.',
  },
  {
    title: 'Build & Design',
    description: 'Our team builds your CRM, updates your brand, and unifies your business info everywhere it matters.',
  },
  {
    title: 'Launch & Automate',
    description: 'We set your systems live and automate your outreach, so leads come to you.',
  },
  {
    title: 'Optimize & Scale',
    description: 'As you grow, we provide ongoing support and data-driven tweaks for even better results.',
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
    <section id="process" className="py-20 px-4 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Our Proven Process</h2>
        </div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {processSteps.map((step, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-900 p-6 rounded-lg border border-cyan-400/30 text-center flex flex-col items-center"
              variants={itemVariants}
            >
              <div className="text-3xl font-bold text-cyan-400 mb-4">{`0${index + 1}`}</div>
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-300 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
