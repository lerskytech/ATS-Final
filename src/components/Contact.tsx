import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPaperPlane, FaSpinner } from 'react-icons/fa';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="text-4xl font-bold text-center mb-4 text-cyan-300 uppercase tracking-widest"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Secure Transmission
        </motion.h2>
        <motion.div 
          className="w-24 h-1 bg-cyan-400 mx-auto mb-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        />

        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {isSubmitted ? (
            <div className="text-center p-8 bg-gray-900/50 border border-cyan-500 rounded-lg shadow-lg shadow-cyan-500/20">
              <h3 className="text-2xl font-bold text-cyan-300 mb-4">Transmission Received</h3>
              <p className="text-gray-300">Thank you for your message. We will be in contact shortly.</p>
            </div>
          ) : (
            <form 
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="futuristic-form space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="relative">
                <FaUser className="absolute top-1/2 left-4 -translate-y-1/2 text-cyan-400" />
                <input type="text" name="name" placeholder="Your Identifier" className="futuristic-input" required />
              </div>
              <div className="relative">
                <FaEnvelope className="absolute top-1/2 left-4 -translate-y-1/2 text-cyan-400" />
                <input type="email" name="email" placeholder="Your Secure Channel (Email)" className="futuristic-input" required />
              </div>
              <textarea name="message" placeholder="Your Data Packet (Message)" rows={6} className="futuristic-input" required></textarea>
              <motion.button 
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 bg-cyan-500 text-black font-bold py-3 px-6 rounded-full transition-all duration-300 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    Transmitting...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Initiate Transmission
                  </>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
