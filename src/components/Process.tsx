import { motion } from 'framer-motion';
import DiscoveryImage from '../Assets/5. Discovery & Strategy.png';
import DevelopmentImage from '../Assets/6. System & Brand Development.png';
import LaunchImage from '../Assets/7. Automation & Launch.png';
import ScalingImage from '../Assets/8. Optimization & Scaling.png';

const processSteps = [
  {
    title: '1. Discovery & Strategy',
    description: 'Every successful project starts with a deep dive. We immerse ourselves in your world—your goals, your challenges, your customers—to architect a bespoke growth strategy that serves as the blueprint for everything that follows.',
    image: DiscoveryImage,
    alt: 'Illustration of a magnifying glass over a business blueprint.',
  },
  {
    title: '2. System & Brand Development',
    description: 'This is where the vision takes shape. We build your custom automation engine, forge a powerful brand identity, and develop the high-performance digital assets that will become the foundation of your elevated business.',
    image: DevelopmentImage,
    alt: 'Split-screen showing CRM dashboard development and brand design.',
  },
  {
    title: '3. Automation & Launch',
    description: 'With the core systems in place, we deploy intelligent automation across your marketing and sales funnels. We then execute a seamless launch of your new, powerful digital presence, ready to capture and convert.',
    image: LaunchImage,
    alt: 'Illustration of interconnected gears representing automation.',
  },
  {
    title: '4. Optimization & Scaling',
    description: 'Your launch is just the beginning. We continuously monitor performance analytics, refine strategies for maximum impact, and provide dedicated support to ensure your business doesn\'t just grow—it scales.',
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
          <h2 className="text-4xl md:text-5xl font-sans text-text-primary">The Blueprint for Your Success</h2>
          <p className="text-lg text-text-secondary mt-4 max-w-3xl mx-auto">From initial strategy to continuous scaling, our process is designed for one thing: to deliver measurable results and a powerful return on your investment.</p>
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
