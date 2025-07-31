import { useState } from 'react';
import { motion } from 'framer-motion';
import ContactImage from '../Assets/12. Contact Section.png';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission for demonstration
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  return (
    <section id="contact" className="relative py-24">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ContactImage})` }}
        role="img"
        aria-label="A professional and clean office background with a laptop displaying a CRM dashboard."
      >
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-sans text-text-primary">Ready to Grow Your Business?</h2>
          <p className="text-lg text-text-secondary mt-4 max-w-2xl mx-auto">Fill out the form below to schedule a free strategy session. Let's build a plan to automate your marketing and scale your operations.</p>
        </div>

        <motion.div 
          className="max-w-2xl mx-auto bg-surface/90 backdrop-blur-sm border border-gray-200 rounded-lg p-8 md:p-12 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {isSubmitted ? (
            <div className="text-center">
              <h3 className="text-3xl text-accent mb-4">Thank You</h3>
              <p className="text-text-secondary">Your inquiry has been received. Our team will be in touch with you shortly.</p>
            </div>
          ) : (
            <motion.form 
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <input type="hidden" name="form-name" value="contact" />
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-sans text-text-primary mb-2">Full Name</label>
                <input type="text" name="name" id="name" className="w-full px-4 py-3 bg-background border border-gray-300 rounded-md text-text-primary placeholder-text-secondary/70 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300" required />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-sans text-text-primary mb-2">Email Address</label>
                <input type="email" name="email" id="email" className="w-full px-4 py-3 bg-background border border-gray-300 rounded-md text-text-primary placeholder-text-secondary/70 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300" required />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-sans text-text-primary mb-2">Message</label>
                <textarea name="message" id="message" rows={5} className="w-full px-4 py-3 bg-background border border-gray-300 rounded-md text-text-primary placeholder-text-secondary/70 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300" required></textarea>
              </motion.div>
              <motion.div variants={itemVariants} className="text-center">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-accent text-white font-bold py-3 px-8 rounded-md uppercase tracking-wider transition-all duration-300 hover:bg-accent-hover hover:shadow-lg w-full md:w-auto disabled:opacity-70 disabled:cursor-wait"
                >
                  {isSubmitting ? 'Scheduling...' : 'Schedule My Free Session'}
                </button>
              </motion.div>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
