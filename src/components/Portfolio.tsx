import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PortfolioItem {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
}

const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project Terminus',
    description: 'AI-driven logistics platform.',
    longDescription: 'A complete overhaul of a legacy logistics system, introducing an AI-powered prediction engine that reduced routing costs by 30% and improved delivery times by 15%. The UI was redesigned for a modern, intuitive user experience.',
    image: '/assets/projects/project1_after.webp',
    tags: ['AI/ML', 'React', 'Node.js', 'Cloud']
  },
  {
    title: 'Project Cygnus',
    description: 'Next-gen e-commerce experience.',
    longDescription: 'A futuristic e-commerce platform built with a headless architecture, featuring AR product previews and a personalized shopping assistant. The project resulted in a 50% increase in user engagement and a 25% conversion uplift.',
    image: '/assets/projects/project2_after.webp',
    tags: ['E-commerce', 'AR', 'Next.js', 'GraphQL']
  },
  {
    title: 'Project Nova',
    description: 'Decentralized finance application.',
    longDescription: 'A secure DeFi application for staking and yield farming, built on Ethereum. The platform features a custom wallet, real-time analytics, and a governance token system, handling over $10M in TVL post-launch.',
    image: '/assets/projects/project3_after.webp',
    tags: ['DeFi', 'Blockchain', 'Solidity', 'Web3']
  },
];

const Portfolio = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedItem = portfolioItems.find(item => item.title === selectedId);

  return (
    <section id="portfolio" className="py-24 bg-black">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="text-4xl font-bold text-center mb-4 text-cyan-300 uppercase tracking-widest"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Case Files
        </motion.h2>
        <motion.div 
          className="w-24 h-1 bg-cyan-400 mx-auto mb-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map(item => (
            <motion.div
              key={item.title}
              layoutId={item.title}
              onClick={() => setSelectedId(item.title)}
              className="portfolio-card cursor-pointer"
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-48 bg-cover bg-center rounded-t-lg" style={{ backgroundImage: `url(${item.image})` }}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-2">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-cyan-900/50 text-cyan-300 text-xs rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && selectedItem && (
            <motion.div 
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
                className="bg-gray-900 rounded-lg w-full max-w-3xl overflow-hidden border border-cyan-500 shadow-2xl shadow-cyan-500/20"
                layoutId={selectedId}
              >
                <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${selectedItem.image})` }}></div>
                <div className="p-8">
                  <motion.h2 className="text-3xl font-bold text-cyan-300 mb-4">{selectedItem.title}</motion.h2>
                  <motion.p className="text-gray-300 mb-6">{selectedItem.longDescription}</motion.p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedItem.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-cyan-800/70 text-cyan-200 text-sm rounded-full">{tag}</span>
                    ))}
                  </div>
                  <motion.button 
                    onClick={() => setSelectedId(null)} 
                    className="px-6 py-2 bg-cyan-500 text-black font-bold rounded-full hover:bg-cyan-400 transition-colors"
                  >
                    Close
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
