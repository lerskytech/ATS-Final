import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Make Your Business Stand Out Everywhere?</h2>
        <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">Get a Free Visibility Audit & Strategy Session. Fill out this quick form and our team will show you where your business is missing out—and how to fix it, fast.</p>
        
        <motion.div 
          className="max-w-lg mx-auto bg-gray-900 rounded-lg p-8 shadow-lg border border-cyan-400/30"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <form action="https://formspree.io/f/xovllplj" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-left text-gray-300 mb-2">Full Name</label>
              <input type="text" name="name" id="name" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-400" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-left text-gray-300 mb-2">Email Address</label>
              <input type="email" name="email" id="email" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-400" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-left text-gray-300 mb-2">Message</label>
              <textarea name="message" id="message" rows={4} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-400" required></textarea>
            </div>
            <div className="text-center">
              <button 
                type="submit"
                className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-lg uppercase tracking-wider transition-all duration-300 hover:bg-cyan-600 hover:shadow-lg w-full"
              >
                Schedule My Free Session
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
