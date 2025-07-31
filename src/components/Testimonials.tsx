import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'John D.',
    title: 'CEO, Tech Innovators',
    quote: 'Alpha Trust Solutions transformed our digital presence. Their expertise in web development and branding is unmatched. Our engagement has skyrocketed!',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  },
  {
    name: 'Jane S.',
    title: 'Marketing Director, Creative Minds',
    quote: 'Working with the ATS team was a breeze. They are professional, creative, and delivered a stunning website that exceeded all our expectations.',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704e',
  },
  {
    name: 'Sam L.',
    title: 'Founder, Eco Goods',
    quote: 'Their social media strategies doubled our online reach in just three months. An incredible team that delivers real, measurable results.',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704f',
  },
];

const Testimonials = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">What Our Clients Say</h2>
        <motion.div ref={carousel} className="cursor-grab overflow-hidden">
          <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} className="min-w-[300px] md:min-w-[400px] bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4 border-2 border-cyan-400"/>
                  <div>
                    <h3 className="text-lg font-bold text-cyan-400">{testimonial.name}</h3>
                    <p className="text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">\"{testimonial.quote}\"</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
