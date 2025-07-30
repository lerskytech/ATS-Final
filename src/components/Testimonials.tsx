import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../data/testimonials';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-4 bg-gray-900/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-white">What Our Clients Say</h2>
        <div className="relative h-64">
          <AnimatePresence mode='wait'>
            <motion.div
              key={index}
              className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-black/30 backdrop-blur-lg rounded-xl border border-cyan-400/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <img src={testimonials[index].avatar} alt={testimonials[index].author} className="w-20 h-20 rounded-full mb-4 border-2 border-cyan-400" loading="lazy"/>
              <p className="text-xl italic text-gray-300 mb-4">"{testimonials[index].quote}"</p>
              <h3 className="font-bold text-cyan-400">{testimonials[index].author}</h3>
              <p className="text-sm text-gray-500">{testimonials[index].role}</p>
              <div className="flex text-yellow-400 mt-2">
                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
