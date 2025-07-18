import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import AnimatedImage from './AnimatedImage';
import { getResumeUrls } from '../config/resumeConfig';

const HeroSection = () => {
  const { viewUrl } = getResumeUrls();
  
  return (
    <section id="home" className="section">
      <div className="container">
        <div className="grid-2 items-center" style={{ minHeight: '80vh' }}>
          {/* Left Side - Intro */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl text-white mb-4">
                <span className="text-4xl font-normal">Hi, I'm</span><br />
                <span className="gradient-text font-bold">HimaVarshini M</span>
              </h1>
              <h2 className="text-3xl text-gray font-medium">
                Developer & Tech Enthusiast
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
              {/* Resume button */}
              <a 
                href={viewUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline flex items-center gap-2"
              >
                <Download size={18} />
                Resume
              </a>
            </div>
            
            <div className="flex gap-6 mt-8">
              <a 
                href="https://github.com/himavarshini28" 
                className="text-gray hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/himavarshini-mahapatruni/" 
                className="text-gray hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:himavarshini28245@gmail.com" 
                className="text-gray hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          {/* Right Side - Animated Image */}
          <div className="flex justify-center items-center">
            <AnimatedImage 
              alt="Profile Picture" 
              size={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
