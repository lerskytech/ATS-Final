import { motion } from 'framer-motion';
import HeroImage from '../Assets/1. Hero Section.png';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative w-full h-screen mx-auto flex items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Automate & Amplify Your Growth
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto">
            Effortless business solutions for busy professionals. Modern CRM, iconic branding, and unified online visibility made easy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
