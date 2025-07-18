import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const ModernHeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-off-white">
      {/* Floating elements */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-accent rounded-full opacity-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-40 left-10 w-24 h-24 border border-soft-blue opacity-30"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -3, 3, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="asymmetric-grid w-full px-8 lg:px-16">
        {/* Left side - Empty space for asymmetry */}
        <div></div>
        
        {/* Center - Main content */}
        <div className="relative py-32">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Large overlapping text */}
            <h1 className="serif text-display text-primary mb-8">
              Creative
              <span className="block text-accent italic">Developer</span>
            </h1>
            
            {/* Subtitle with delay */}
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="sans text-medium text-secondary max-w-2xl mb-12 leading-relaxed"
            >
              Crafting digital experiences that merge aesthetics with functionality. 
              Passionate about clean code, thoughtful design, and innovative solutions.
            </motion.p>
            
            {/* CTA buttons with staggered animation */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex gap-6 flex-wrap"
            >
              <a href="#work" className="btn-accent">
                View My Work
              </a>
              <a href="#contact" className="btn-minimal">
                Get In Touch
              </a>
            </motion.div>
          </motion.div>
          
          {/* Floating name/title overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute -top-10 -right-20 transform rotate-12"
          >
            <span className="serif text-6xl lg:text-8xl text-accent opacity-10">
              Portfolio
            </span>
          </motion.div>
        </div>
        
        {/* Right side - Abstract shape/floating element */}
        <div className="relative flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Abstract SVG shape */}
            <svg
              width="200"
              height="300"
              viewBox="0 0 200 300"
              className="opacity-70"
            >
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#b8860b" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#6b7cbb" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              <path
                d="M50,50 Q150,20 150,100 Q180,150 120,200 Q80,250 50,200 Q20,150 50,100 Z"
                fill="url(#gradient1)"
                stroke="#b8860b"
                strokeWidth="1"
              />
            </svg>
            
            {/* Floating text elements */}
            <motion.span
              className="absolute top-10 -left-10 sans text-sm text-secondary opacity-50"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              React
            </motion.span>
            
            <motion.span
              className="absolute bottom-20 -right-5 sans text-sm text-secondary opacity-50"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            >
              TypeScript
            </motion.span>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-16 bg-accent opacity-50"
        />
      </motion.div>
    </section>
  );
};

export default ModernHeroSection;
