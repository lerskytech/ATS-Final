import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Discovery & Strategy',
    description: 'We start by understanding your vision, goals, and challenges to craft a bespoke digital strategy.',
    image: '/assets/15.png',
  },
  {
    title: 'Design & Development',
    description: 'Our team designs and develops a stunning, high-performance website that embodies your brand.',
    image: '/assets/16.png',
  },
  {
    title: 'Launch & Optimization',
    description: 'We deploy your new site and continuously monitor and optimize for peak performance and engagement.',
    image: '/assets/17.png',
  },
];

const Process = () => {
  return (
    <section className="py-20 px-4 bg-gray-900/20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">Our Approach</h2>
        <p className="text-lg text-gray-400 mb-16">A streamlined process for guaranteed success.</p>
        <div className="relative">
          {/* The connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-cyan-400/30" />
          <motion.div 
            className="grid md:grid-cols-3 gap-16 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.4 }}
          >
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="relative z-10 text-center"
                variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
              >
                <div className="relative mb-6">
                  <img src={step.image} alt={step.title} className="w-full h-auto rounded-lg shadow-lg border-2 border-gray-700" loading="lazy"/>
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center text-black font-bold text-2xl border-4 border-black">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-cyan-400">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Process;
