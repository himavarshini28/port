import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const ModernNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#work', label: 'Work' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`navbar ${scrolled ? 'bg-opacity-95' : 'bg-opacity-80'}`}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a href="#home" className="serif text-2xl font-semibold text-primary">
            Portfolio
          </a>
        </motion.div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-12">
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="nav-link"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 3) }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-primary">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default ModernNavbar;
