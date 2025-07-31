import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { imageMap } from '../utils/imageMap';
import RatioBox from './RatioBox';

const testimonials = [
  {
    name: 'John D.',
    title: 'CEO, Tech Innovators',
    quote: 'Alpha Trust Solutions transformed our digital presence. Their expertise in web development and branding is unmatched. Our engagement has skyrocketed!',
    avatar: '/assets/avatars/client1.png',
  },
  {
    name: 'Jane S.',
    title: 'Marketing Director, Creative Minds',
    quote: 'Working with the ATS team was a breeze. They are professional, creative, and delivered a stunning website that exceeded all our expectations.',
    avatar: '/assets/avatars/client2.png',
  },
  {
    name: 'Sam L.',
    title: 'Founder, Eco Goods',
    quote: 'Their social media strategies doubled our online reach in just three months. An incredible team that delivers real, measurable results.',
    avatar: '/assets/avatars/client3.png',
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 7000); // Change testimonial every 7 seconds
    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = testimonials[index];
  const imageData = imageMap[currentTestimonial.avatar as keyof typeof imageMap];

  // This safety check prevents the entire application from crashing.
  if (!imageData) {
    return null; 
  }

  return (
    <section id="testimonials" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>
        <div className="relative h-80">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="absolute inset-0 flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-24 h-24 mb-6">
                <RatioBox
                  src={currentTestimonial.avatar}
                  alt={imageData.useCase}
                  ratio={imageData.ratio}
                  className="rounded-full border-4 border-cyan-400 object-cover"
                />
              </div>
              <p className="text-xl italic max-w-3xl mx-auto mb-4">"{currentTestimonial.quote}"</p>
              <h3 className="text-lg font-bold text-cyan-400">{currentTestimonial.name}</h3>
              <p className="text-gray-400">{currentTestimonial.title}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
