import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { imageMap } from '../utils/imageMap';
import RatioBox from './RatioBox';

const navLinks = [
  { to: 'about', label: 'About' },
  { to: 'services', label: 'Services' },
  { to: 'process', label: 'Process' },
  { to: 'portfolio', label: 'Work' },
  { to: 'testimonials', label: 'Testimonials' },
  { to: 'team', label: 'Team' },
  { to: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-lg border-b border-cyan-400/20 shadow-lg shadow-cyan-500/10' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="hero" smooth={true} duration={500} className="cursor-pointer w-16 h-16">
            <RatioBox 
              src="/assets/ATSLOGO.png"
              alt="Alpha Trust Solutions Logo"
              ratio={imageMap['/assets/ATSLOGO.png'].ratio}
            />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link 
                key={link.to}
                to={link.to} 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500} 
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
                activeClass="text-cyan-400 border-b-2 border-cyan-400"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl">
          {navLinks.map(link => (
            <Link 
              key={link.to}
              to={link.to} 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500} 
              className="block text-center py-4 text-lg text-gray-300 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
              activeClass="text-cyan-400"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
