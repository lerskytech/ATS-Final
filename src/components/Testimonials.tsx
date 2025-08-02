import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    business: 'Local Service Business',
    quote: '“Went from missed calls to a full calendar—just by automating follow-up and fixing our online listings.”',
  },
  {
    business: 'Fitness Studio',
    quote: '“Professional branding and a fresh website helped us fill classes in our first month.”',
  },
  {
    business: 'Consulting Firm',
    quote: '“Automated lead funnels turned cold prospects into high-value clients—without lifting a finger.”',
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
        <h2 className="text-4xl font-bold mb-6 text-center">Real Results, Real Businesses</h2>
        <p className="text-lg text-gray-400 mb-12 text-center">Hear from our clients.</p>
        <motion.div ref={carousel} className="cursor-grab overflow-hidden">
          <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} className="min-w-[300px] md:min-w-[400px] bg-gray-800 p-8 rounded-lg shadow-lg border border-cyan-400/30">
                <p className="text-gray-300 italic text-lg mb-4">{testimonial.quote}</p>
                <h3 className="text-lg font-bold text-cyan-400 text-right">- {testimonial.business}</h3>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
