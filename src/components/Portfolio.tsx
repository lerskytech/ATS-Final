import { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { portfolio, PortfolioItem } from '../data/portfolio';

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem>(portfolio[0]);

  const x = useMotionValue(250);
  const width = 500; // a fixed width for the container
  const clipPath = useTransform(x, [0, width], [`inset(0 ${width}px 0 0)`, `inset(0 0 0 0)`]);

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">Our Work</h2>
        <p className="text-lg text-gray-400 mb-12">A glimpse into the transformations we've delivered.</p>
        
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-cyan-400 mb-2">{selectedItem.title}</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">{selectedItem.description}</p>
        </div>

        <div className="relative w-full max-w-2xl mx-auto aspect-[2/3] rounded-lg overflow-hidden border-2 border-cyan-400/50 shadow-lg shadow-cyan-500/20">
          <motion.div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${selectedItem.before})` }} />
          <motion.div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${selectedItem.after})`, clipPath: clipPath }}
          />
          <motion.div
            className="absolute top-0 bottom-0 w-1 bg-cyan-400 cursor-ew-resize"
            style={{ x }}
            drag="x"
            dragConstraints={{ left: 0, right: width }}
            dragElastic={0.1}
            dragMomentum={false}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-8 h-8 bg-cyan-400 rounded-full border-2 border-black flex items-center justify-center">
              <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path></svg>
            </div>
          </motion.div>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          {portfolio.map((item) => (
            <button 
              key={item.title}
              onClick={() => setSelectedItem(item)}
              className={`w-24 h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 ${selectedItem.title === item.title ? 'border-cyan-400 scale-110' : 'border-gray-600 hover:border-cyan-400'}`}
            >
              <img src={item.after} alt={item.title} className="w-full h-full object-cover" loading="lazy"/>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
