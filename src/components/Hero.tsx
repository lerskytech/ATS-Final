import { motion } from 'framer-motion';

const Hero = () => {
  const tagline = 'Empowering Businesses with Digital Excellence';

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section 
      className="relative h-screen flex items-center justify-center text-center"
      style={{ backgroundImage: `url('/assets/14.png')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 p-8 bg-black bg-opacity-30 backdrop-blur-lg rounded-xl border border-cyan-400/50 shadow-lg shadow-cyan-500/20">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-wider"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {tagline.split('').map((char, index) => (
            <motion.span key={char + '-' + index} variants={letter}>
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.button
          className="px-8 py-3 bg-cyan-500 text-black font-bold rounded-full shadow-lg shadow-cyan-500/50 transform transition-transform duration-300 hover:scale-105"
          whileHover={{ scale: 1.1, textShadow: '0px 0px 8px rgb(255,255,255)', boxShadow: '0px 0px 8px rgb(0,255,255)' }}
          animate={{
            scale: [1, 1.05, 1],
            transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          Discover Our Solutions
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
