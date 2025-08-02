import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-20 px-4 bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={variants}>
          <h2 className="text-4xl font-bold mb-6">
            Why Alpha Trust Solutions?
          </h2>
          <p className="text-lg text-gray-300 mb-10">
            Tired of chasing leads and wrestling with scattered online profiles? We streamline your digital world so your business appears everywhere it matters—on Google, Siri, Alexa, Bing, and future search tools your customers use (even if you haven’t heard of them yet).
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-gray-900 p-8 rounded-lg shadow-lg border border-cyan-400/30"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{ ...variants, visible: { ...variants.visible, transition: { ...variants.visible.transition, delay: 0.3 }}}}
        >
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">
            Our Promise
          </h3>
          <p className="text-lg text-gray-200">
            You focus on what you do best.
            <br />
            We handle the tech, the automation, and the brand presence—so you never miss an opportunity.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
