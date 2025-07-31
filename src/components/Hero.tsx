import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { type Container, type Engine, type ISourceOptions } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

const Hero = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log('Particles container loaded', container);
  };

  const particlesOptions: ISourceOptions = {
    background: {
      color: {
        value: '#000000',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'repulse',
        },
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#00ffff',
      },
      links: {
        color: '#00ffff',
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 80,
      },
      opacity: {
        value: 0.2,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {init && <Particles id="tsparticles" options={particlesOptions} loaded={particlesLoaded} />}
      <div className="relative z-10 p-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 
            className="text-5xl md:text-7xl font-bold text-white uppercase glitch"
            data-text="Digital Excellence"
          >
            Digital Excellence
          </h1>
          <motion.p 
            className="text-lg md:text-2xl text-cyan-300 mt-4 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            We don't just build websites. We architect digital futures.
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <button className="mt-8 px-8 py-4 bg-cyan-500 text-black font-bold text-lg rounded-full transition-transform duration-300 hover:scale-110 pulse-glow">
            Discover Your Future
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
