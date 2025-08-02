import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const trustPoints = [
  'No jargon, no runaround. We explain everything in plain English.',
  'Your info, everywhere. One update, every platform.',
  'Results you can see. Track new leads, appointments, and calls.',
  'Simple enrollment. We do the heavy lifting. You see the results.',
];

const SocialIcon = ({ children, href }: { children: React.ReactNode; href: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 hover:text-cyan-400 transition-colors duration-300"
    whileHover={{ y: -3, scale: 1.1 }}
  >
    {children}
  </motion.a>
);

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-cyan-400/20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold text-white mb-4">Why Businesses Trust Us</h3>
            <ul className="space-y-3">
              {trustPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-cyan-400 font-bold mr-3">✓</span>
                  <span className="text-gray-300">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center md:text-right">
            <h3 className="text-3xl font-bold text-white">Alpha Trust Solutions</h3>
            <p className="text-gray-400 text-lg">Automate. Simplify. Grow.</p>
            <div className="flex justify-center md:justify-end gap-6 my-6 text-3xl">
              <SocialIcon href="https://twitter.com"><FaTwitter /></SocialIcon>
              <SocialIcon href="https://linkedin.com"><FaLinkedin /></SocialIcon>
              <SocialIcon href="https://github.com"><FaGithub /></SocialIcon>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500">
          <p>&copy; 2025 Alpha Trust Solutions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
