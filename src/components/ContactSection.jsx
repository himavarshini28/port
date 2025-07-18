import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="text-5xl font-bold text-center mb-16 gradient-text">
          Get In Touch
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl text-gray-300">
              I'm always open to discussing new opportunities, interesting projects, 
              and potential collaborations. Let's create something amazing together!
            </p>
          </div>
          
          <div className="grid-3">
            <a
              href="mailto:your.email@domain.com"
              className="tech-card text-center block"
            >
              <Mail size={48} className="mx-auto mb-4 text-cyan-400" />
              <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
              <p className="text-gray-300">your.email@domain.com</p>
            </a>
            
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="tech-card text-center block"
            >
              <Linkedin size={48} className="mx-auto mb-4 text-cyan-400" />
              <h3 className="text-xl font-semibold mb-2 text-white">LinkedIn</h3>
              <p className="text-gray-300">Connect with me</p>
            </a>
            
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="tech-card text-center block"
            >
              <Github size={48} className="mx-auto mb-4 text-cyan-400" />
              <h3 className="text-xl font-semibold mb-2 text-white">GitHub</h3>
              <p className="text-gray-300">Check out my work</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
