import { motion } from 'framer-motion';
import HeroImage from '../assets/1. Hero Section.png';
import { Link } from 'react-scroll';

const Hero = () => {
  const headline = "Scale Your Business, Automatically.";

  const sentenceVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center bg-background">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HeroImage})` }}
        role="img"
        aria-label="A modern digital agency dashboard UI showing client growth metrics."
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h1 
          className="font-sans font-bold text-6xl md:text-8xl text-text-primary mb-4"
          variants={sentenceVariants}
          initial="hidden"
          animate="visible"
        >
          {headline.split(" ").map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              style={{ display: 'inline-block', marginRight: '15px' }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: "easeInOut" }}
        >
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-10">
            Custom CRM systems, branding, and digital strategy for service-based businesses.
          </p>
        </motion.div>
        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8, ease: "easeInOut" }}
        >
          <Link to="services" smooth={true} duration={800} className="bg-accent text-white font-bold py-3 px-8 rounded-sm uppercase tracking-wider transition-all duration-300 hover:bg-accent-hover hover:shadow-lg cursor-pointer">
            Our Solutions
          </Link>
          <Link to="contact" smooth={true} duration={800} className="bg-transparent border-2 border-accent text-accent font-bold py-3 px-8 rounded-sm uppercase tracking-wider transition-all duration-300 hover:bg-accent hover:text-white cursor-pointer">
            Get Started
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
