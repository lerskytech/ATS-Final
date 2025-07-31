import { motion } from 'framer-motion';
import CaseStudy1Image from '../assets/9. Case Study 1.png';
import CaseStudy2Image from '../assets/10. Case Study 2.png';
import CaseStudy3Image from '../assets/11. Case Study 3.png';

const portfolioItems = [
  {
    title: 'Local Plumber Gets 3x More Bookings',
    category: 'CRM & Automation',
    description: 'Implemented a custom CRM and automated follow-up system that tripled appointment bookings in 90 days.',
    image: CaseStudy1Image,
    alt: 'Split-screen showing a messy desk transformed into an organized CRM dashboard.',
  },
  {
    title: 'Fitness Studio Brand Launch',
    category: 'Branding & Web Design',
    description: 'Designed a modern brand identity and a high-converting website, leading to a fully booked opening month.',
    image: CaseStudy2Image,
    alt: 'Vibrant collage of a fitness studio\'s new branding and website.',
  },
  {
    title: 'Consulting Firm Lead Generation',
    category: 'Marketing & Outreach',
    description: 'Developed an automated social media and email outreach campaign that generated a 5x increase in qualified leads.',
    image: CaseStudy3Image,
    alt: 'A visual representation of an automated sales funnel.',
  },
];

const Portfolio = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="portfolio" className="py-20 px-4 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sans text-text-primary">Success Stories</h2>
          <p className="text-lg text-text-secondary mt-4 max-w-3xl mx-auto">See how we've helped service-based businesses transform their operations and growth.</p>
        </div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {portfolioItems.map((item) => (
            <motion.div 
              key={item.title}
              className="bg-surface rounded-lg border border-gray-200 overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:border-accent"
              variants={itemVariants}
            >
              <div className="w-full h-56 bg-background overflow-hidden border-b border-gray-200">
                <img src={item.image} alt={item.alt} className="w-full h-full object-cover" />
              </div>

              <div className="p-6">
                <h3 className="text-sm font-sans uppercase tracking-wider text-accent">{item.category}</h3>
                <p className="text-2xl font-bold text-text-primary mt-1">{item.title}</p>
                <p className="text-text-secondary font-sans mt-4">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
