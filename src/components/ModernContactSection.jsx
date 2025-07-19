import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const ModernContactSection = () => {
  return (
    <section className="relative py-32 bg-beige overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        {/* Asymmetric layout - content aligned to left */}
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Main content - left side */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="serif text-hero text-primary leading-tight">
                Let's create
                <span className="block text-accent italic">together</span>
              </h2>
              
              <p className="sans text-medium text-secondary max-w-2xl leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you're a company looking to hire, or you're a fellow creative 
                looking to collaborate, I'd love to hear from you.
              </p>
              
              {/* Contact methods */}
              <div className="space-y-6 pt-8">
                <motion.a
                  href="mailto:hello@example.com"
                  className="block group"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <span className="sans text-sm text-secondary tracking-wide uppercase block mb-1">
                    Email
                  </span>
                  <span className="serif text-large text-primary group-hover:text-accent transition-colors duration-300">
                    hello@example.com
                  </span>
                </motion.a>
                
                <motion.a
                  href="https://linkedin.com/in/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <span className="sans text-sm text-secondary tracking-wide uppercase block mb-1">
                    LinkedIn
                  </span>
                  <span className="serif text-large text-primary group-hover:text-accent transition-colors duration-300">
                    @yourname
                  </span>
                </motion.a>
                
                <motion.a
                  href="https://github.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <span className="sans text-sm text-secondary tracking-wide uppercase block mb-1">
                    GitHub
                  </span>
                  <span className="serif text-large text-primary group-hover:text-accent transition-colors duration-300">
                    @yourname
                  </span>
                </motion.a>
              </div>
              
              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="pt-8"
              >
                <a href="mailto:hello@example.com" className="btn-accent">
                  Send a Message
                </a>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Right side - decorative space */}
          <div className="relative">
            <motion.div
              className="absolute top-20 right-0 w-32 h-32 border border-accent opacity-20"
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <motion.div
              className="absolute bottom-20 right-20 serif text-6xl text-primary opacity-10"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Hello
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <motion.div
        className="absolute top-40 left-10 w-2 h-24 bg-soft-blue opacity-30"
        animate={{ height: [96, 120, 96] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      
      <motion.div
        className="absolute bottom-20 right-40 w-16 h-16 bg-accent opacity-10 rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </section>
  );
};

export default ModernContactSection;
