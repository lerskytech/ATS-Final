import { motion } from 'framer-motion';
import HeroImage from '../Assets/1. Hero Section.png';
import { Link } from 'react-scroll';

const Hero = () => {
  const headline = "Automate & Elevate Your Brand.";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 12 }
    },
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center bg-background">
      <div 
        className="absolute inset-0 bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: `url(${HeroImage})` }}
        role="img"
        aria-label="A modern digital agency dashboard UI showing client growth metrics."
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <motion.div 
        className="relative z-10 container mx-auto px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl max-w-4xl mx-auto">
          <motion.h1 
            className="font-sans font-bold text-5xl md:text-7xl text-white mb-4"
            variants={itemVariants}
          >
            {headline}
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10"
            variants={itemVariants}
          >
            Bespoke CRM systems, iconic branding, and intelligent digital strategy for ambitious service-based businesses.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            variants={itemVariants}
          >
          <Link to="services" smooth={true} duration={800} className="bg-accent text-white font-bold py-3 px-8 rounded-sm uppercase tracking-wider transition-all duration-300 hover:bg-accent-hover hover:shadow-lg cursor-pointer">
            Our Solutions
          </Link>
          <Link to="contact" smooth={true} duration={800} className="bg-transparent border-2 border-accent text-accent font-bold py-3 px-8 rounded-sm uppercase tracking-wider transition-all duration-300 hover:bg-accent hover:text-white cursor-pointer">
            Get Started
          </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
