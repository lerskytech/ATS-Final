import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">Get in Touch</h2>
        <p className="text-lg text-gray-400 mb-12">Have a project in mind? We'd love to hear from you.</p>
        
        <motion.form 
          className="bg-gray-900/50 backdrop-blur-md p-8 rounded-lg border border-cyan-400/30 space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input type="text" placeholder="Your Name" className="w-full bg-gray-800/50 border-2 border-gray-700 rounded-md p-3 text-white focus:outline-none focus:border-cyan-400 transition-colors" />
            <input type="email" placeholder="Your Email" className="w-full bg-gray-800/50 border-2 border-gray-700 rounded-md p-3 text-white focus:outline-none focus:border-cyan-400 transition-colors" />
          </div>
          <textarea placeholder="Your Message" rows={5} className="w-full bg-gray-800/50 border-2 border-gray-700 rounded-md p-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"></textarea>
          <motion.button 
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-cyan-500 text-black font-bold py-3 px-6 rounded-md transition-all duration-300 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => e.preventDefault()} // Prevent actual form submission
          >
            Send Message <FaPaperPlane />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
