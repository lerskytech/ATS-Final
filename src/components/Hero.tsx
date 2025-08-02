import { motion } from 'framer-motion';
import HeroImage from '../Assets/1. Hero Section.png';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative w-full h-screen mx-auto flex items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      {/* This container wraps the text and provides the transparent background */}
      <div className="relative z-10 text-center bg-black bg-opacity-60 p-10 rounded-xl max-w-4xl mx-auto">
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
