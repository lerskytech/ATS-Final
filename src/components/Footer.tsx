import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

import React from 'react';

interface SocialIconProps {
  children: React.ReactNode;
  href: string;
}

const SocialIcon = ({ children, href }: SocialIconProps) => (
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
    <footer className="bg-gray-900/50 border-t border-cyan-400/20 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div>
          <h3 className="text-2xl font-bold text-white">Alpha Trust Solutions</h3>
          <p className="text-gray-400">Innovate. Transform. Succeed.</p>
        </div>
        <div className="flex gap-6 my-6 md:my-0 text-3xl">
          <SocialIcon href="https://twitter.com"><FaTwitter /></SocialIcon>
          <SocialIcon href="https://linkedin.com"><FaLinkedin /></SocialIcon>
          <SocialIcon href="https://github.com"><FaGithub /></SocialIcon>
        </div>
        <div>
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Alpha Trust Solutions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
