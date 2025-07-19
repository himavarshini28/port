import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8 gradient-text">
          Get In Touch
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-base text-gray">
              I'm always open to discussing new opportunities, interesting projects, 
              and potential collaborations. Let's create something amazing together!
            </p>
          </div>
          
          <div className="grid-3">
            <a
              href="mailto:your.email@domain.com"
              className="tech-card text-center block"
            >
              <Mail size={36} className="mx-auto mb-3 text-white" />
              <h3 className="text-lg font-semibold mb-1 text-white">Email</h3>
              <p className="text-gray text-sm">your.email@domain.com</p>
            </a>
            
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="tech-card text-center block"
            >
              <Linkedin size={36} className="mx-auto mb-3 text-white" />
              <h3 className="text-lg font-semibold mb-1 text-white">LinkedIn</h3>
              <p className="text-gray text-sm">Connect with me</p>
            </a>
            
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="tech-card text-center block"
            >
              <Github size={36} className="mx-auto mb-3 text-white" />
              <h3 className="text-lg font-semibold mb-1 text-white">GitHub</h3>
              <p className="text-gray text-sm">Check out my work</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
