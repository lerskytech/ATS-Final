import { motion } from 'framer-motion';
import { FaSearch, FaDraftingCompass, FaLaptopCode, FaBullhorn } from 'react-icons/fa';

const processSteps = [
  {
    icon: <FaSearch className="w-8 h-8 text-cyan-300" />,
    title: 'Phase 1: Discovery',
    description: 'Analyze requirements, define project scope, and establish strategic goals.',
  },
  {
    icon: <FaDraftingCompass className="w-8 h-8 text-cyan-300" />,
    title: 'Phase 2: Architecture',
    description: 'Design system architecture, create wireframes, and develop interactive prototypes.',
  },
  {
    icon: <FaLaptopCode className="w-8 h-8 text-cyan-300" />,
    title: 'Phase 3: Development',
    description: 'Build the core application, integrate APIs, and conduct rigorous unit testing.',
  },
  {
    icon: <FaBullhorn className="w-8 h-8 text-cyan-300" />,
    title: 'Phase 4: Deployment',
    description: 'Deploy to production, monitor performance, and provide ongoing strategic support.',
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-4 text-cyan-300 uppercase tracking-widest"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Execution Protocol
        </motion.h2>
        <motion.div 
          className="w-24 h-1 bg-cyan-400 mx-auto mb-20"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        />
        <div className="relative">
          <div className="process-flow-line">
            <div className="data-packet" style={{ animationDelay: '0s' }}></div>
            <div className="data-packet" style={{ animationDelay: '1s' }}></div>
            <div className="data-packet" style={{ animationDelay: '2s' }}></div>
            <div className="data-packet" style={{ animationDelay: '3s' }}></div>
          </div>
          <div className="space-y-24">
            {processSteps.map((step, index) => (
              <div key={index} className="relative flex items-center w-full">
                {/* Left Side */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-16' : 'pl-16'}`}>
                  {index % 2 === 0 && (
                    <motion.div initial={{opacity: 0, x: -50}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.5, delay: 0.2}} viewport={{once: true}}>
                      <h3 className="text-2xl font-bold text-cyan-400 mb-2">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
                    </motion.div>
                  )}
                </div>

                {/* Center Node */}
                <motion.div 
                  className="absolute left-1/2 -translate-x-1/2"
                  initial={{scale: 0}}
                  whileInView={{scale: 1}}
                  transition={{duration: 0.5}}
                  viewport={{once: true}}
                >
                  <div className="w-16 h-16 rounded-full bg-cyan-900/50 border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                    {step.icon}
                  </div>
                </motion.div>

                {/* Right Side */}
                <div className={`w-1/2 ${index % 2 !== 0 ? 'text-left pl-16' : 'pr-16'}`}>
                  {index % 2 !== 0 && (
                     <motion.div initial={{opacity: 0, x: 50}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.5, delay: 0.2}} viewport={{once: true}}>
                      <h3 className="text-2xl font-bold text-cyan-400 mb-2">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
                    </motion.div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
