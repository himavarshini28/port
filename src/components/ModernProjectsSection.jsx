import React, { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from 'framer-motion';

const ModernProjectsSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [150, -150]);

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Full Stack Development",
      description: "A sophisticated e-commerce solution with modern UI/UX, built using React, Node.js, and advanced payment integrations.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
      year: "2024",
      tech: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Design System",
      category: "UI/UX Design",
      description: "Comprehensive design system with reusable components, typography scales, and consistent visual language for enterprise applications.",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop&crop=center",
      year: "2024",
      tech: ["Figma", "React", "Storybook"]
    },
    {
      title: "Analytics Dashboard",
      category: "Data Visualization",
      description: "Real-time analytics dashboard with interactive charts, data insights, and machine learning predictions for business intelligence.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
      year: "2023",
      tech: ["D3.js", "Python", "FastAPI"]
    }
  ];

  return (
    <section ref={containerRef} className="relative py-32 bg-cream overflow-hidden">
      {/* Section Title - Overlapping */}
      <div className="relative max-w-7xl mx-auto px-8 lg:px-16 mb-24">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="serif text-hero text-primary"
        >
          Selected
          <span className="block text-accent italic">Work</span>
        </motion.h2>
        
        {/* Floating year indicator */}
        <motion.div
          style={{ y: y1 }}
          className="absolute -top-10 right-0 serif text-6xl text-secondary opacity-20"
        >
          2024
        </motion.div>
      </div>

      {/* Projects Grid - Asymmetric */}
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`relative mb-32 ${
              index % 2 === 0 ? 'ml-0 mr-auto max-w-4xl' : 'ml-auto mr-0 max-w-4xl'
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <span className="sans text-sm text-secondary tracking-wide uppercase">
                    {project.category}
                  </span>
                  <h3 className="serif text-large text-primary mt-2 mb-4">
                    {project.title}
                  </h3>
                  <p className="sans text-medium text-secondary leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="sans text-sm text-accent border border-accent px-3 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href="#"
                    className="btn-minimal inline-flex items-center gap-2"
                  >
                    View Project
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 17l10-10M17 7H7m10 0v10"/>
                    </svg>
                  </a>
                </motion.div>
              </div>
              
              {/* Image */}
              <motion.div
                className={`relative ${index % 2 === 0 ? 'order-2' : 'order-1'}`}
                style={{ 
                  y: index === 0 ? y1 : index === 1 ? y2 : y3 
                }}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-96 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Floating caption */}
                  <motion.div
                    className="absolute -bottom-8 -right-8 bg-accent text-white p-4 serif text-xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {project.year}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Decorative elements */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-40 right-20 w-2 h-32 bg-soft-blue opacity-30"
      />
      
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-40 left-20 w-16 h-16 border border-accent opacity-20"
      />
    </section>
  );
};

export default ModernProjectsSection;
