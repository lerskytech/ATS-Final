import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import RatioBox from './RatioBox';
import { imageMap } from '../utils/imageMap';

const testimonials = [
  {
    quote: 'Alpha Trust Solutions transformed our digital presence. Their strategic approach is unparalleled. We saw a 200% increase in engagement.',
    author: 'Jane Doe',
    role: 'CEO, Innovate Inc.',
    avatar: '/assets/avatars/client1.webp',
  },
  {
    quote: 'The team at ATS is brilliant. They delivered a visually stunning and high-performance website that has become the cornerstone of our marketing efforts.',
    author: 'John Smith',
    role: 'Marketing Director, TechCorp',
    avatar: '/assets/avatars/client2.webp',
  },
  {
    quote: 'A seamless experience from start to finish. Their attention to detail and commitment to quality is evident in the final product. Truly exceptional work.',
    author: 'Emily White',
    role: 'Founder, Creative Solutions',
    avatar: '/assets/avatars/client3.webp',
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 px-4 bg-gray-900/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-white">What Our Clients Say</h2>
        <div className="relative h-64">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-black/30 backdrop-blur-lg rounded-xl border border-cyan-400/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-20 h-20 mb-4">
                <RatioBox
                  src={testimonials[index].avatar}
                  alt={imageMap[testimonials[index].avatar as keyof typeof imageMap].useCase}
                  ratio={imageMap[testimonials[index].avatar as keyof typeof imageMap].ratio}
                  className="rounded-full border-2 border-cyan-400"
                />
              </div>
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
