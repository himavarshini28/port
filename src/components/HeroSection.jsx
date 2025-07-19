import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import Avatar from './Avatar';

const HeroSection = () => {
  return (
    <section id="home" className="section">
      <div className="container">
        <div className="grid-2 items-center" style={{ minHeight: '80vh' }}>
          {/* Left Side - Intro */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl font-bold text-white mb-4">
                Hi, I'm{' '}
                <span className="gradient-text">Your Name</span>
              </h1>
              <h2 className="text-2xl text-gray font-medium">
                Full Stack Developer
              </h2>
              <p className="text-lg text-gray max-w-lg">
                I create digital experiences that bridge the gap between design and technology. 
                Passionate about building scalable applications.
              </p>
            </div>
            
            <div className="flex gap-4 flex-wrap items-center">
              <a href="#contact" className="btn btn-primary">
                Get In Touch
              </a>
              <a href="/resume.html" className="btn btn-outline">
                <Download size={18} />
                Resume
              </a>
            </div>
            
            <div className="flex gap-6 mt-8">
              <a 
                href="https://github.com" 
                className="text-gray hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                className="text-gray hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:your.email@domain.com" 
                className="text-gray hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          {/* Right Side - Avatar */}
          <div className="flex justify-center items-center">
            <Avatar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
