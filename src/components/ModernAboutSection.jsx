import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const ModernAboutSection = () => {
  return (
    <section className="relative py-32 bg-off-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        {/* Asymmetric grid layout */}
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          {/* Left side - Large typography */}
          <div className="lg:col-span-3 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Large overlapping text */}
              <h2 className="serif text-display text-primary leading-none mb-8">
                About
              </h2>
              
              {/* Background decorative text */}
              <div className="absolute -top-10 -left-5 serif text-9xl text-accent opacity-5 -z-10">
                Me
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p className="sans text-medium text-secondary leading-relaxed">
                  I'm a creative developer with a passion for crafting beautiful, 
                  functional digital experiences. With over 5 years of experience 
                  in frontend development, I specialize in creating user-centered 
                  solutions that bridge design and technology.
                </p>
                
                <p className="sans text-medium text-secondary leading-relaxed">
                  My approach combines technical expertise with design sensibility, 
                  always focusing on clean code, performance, and accessibility. 
                  I believe great products come from understanding both user needs 
                  and business objectives.
                </p>
              </motion.div>
              
              {/* Skills with floating layout */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-12 space-y-4"
              >
                <h3 className="serif text-large text-primary mb-6">
                  What I do
                </h3>
                
                <div className="space-y-3">
                  {[
                    "Frontend Development",
                    "UI/UX Design",
                    "Creative Direction",
                    "Brand Strategy"
                  ].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-4"
                    >
                      <div className="w-2 h-2 bg-accent"></div>
                      <span className="sans text-medium text-secondary">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Right side - Floating elements and stats */}
          <div className="lg:col-span-2 relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              {/* Stats with floating layout */}
              <div className="space-y-8">
                <div className="relative">
                  <motion.div
                    className="absolute -top-5 -left-5 serif text-4xl text-accent opacity-20"
                    animate={{ rotate: [0, 2, -2, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                  >
                    5+
                  </motion.div>
                  <span className="sans text-sm text-secondary tracking-wide uppercase block">
                    Years Experience
                  </span>
                </div>
                
                <div className="relative">
                  <motion.div
                    className="absolute -top-5 -left-5 serif text-4xl text-soft-blue opacity-20"
                    animate={{ rotate: [0, -2, 2, 0] }}
                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  >
                    50+
                  </motion.div>
                  <span className="sans text-sm text-secondary tracking-wide uppercase block">
                    Projects Completed
                  </span>
                </div>
                
                <div className="relative">
                  <motion.div
                    className="absolute -top-5 -left-5 serif text-4xl text-accent opacity-20"
                    animate={{ rotate: [0, 3, -3, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                  >
                    10+
                  </motion.div>
                  <span className="sans text-sm text-secondary tracking-wide uppercase block">
                    Happy Clients
                  </span>
                </div>
              </div>
              
              {/* Abstract shapes */}
              <div className="relative pt-16">
                <motion.div
                  className="w-24 h-24 border border-accent opacity-30"
                  animate={{
                    rotate: [0, 45, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                <motion.div
                  className="absolute top-8 left-8 w-16 h-16 bg-soft-blue opacity-20 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 right-20 serif text-8xl text-primary opacity-5"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        Creative
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 left-10 w-1 h-32 bg-accent opacity-40"
        animate={{ height: [128, 160, 128] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </section>
  );
};

export default ModernAboutSection;
