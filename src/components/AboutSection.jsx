import React from 'react';
import { User } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="text-5xl font-bold text-center mb-16 gradient-text">
          About Me
        </h2>
        
        <div className="grid-2 items-center">
          <div className="glass-card p-8">
            <h3 className="text-3xl font-semibold mb-6 glow-text">
              Hello, I'm a Developer
            </h3>
            <p className="text-gray-300 mb-6">
              With over X years of experience in software development, I specialize in creating 
              robust, scalable applications using modern technologies. My passion lies in solving 
              complex problems and building user-centric solutions.
            </p>
            <p className="text-gray-300 mb-6">
              I have extensive experience in full-stack development, from designing intuitive 
              user interfaces to architecting scalable backend systems. I'm always eager to 
              learn new technologies and take on challenging projects.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">X+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="glass-card p-8 max-w-md">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-cyan-400 to-pink-400 rounded-full flex items-center justify-center">
                <User size={120} className="text-white" />
              </div>
              <p className="text-center mt-6 text-gray-300">
                "Code is like humor. When you have to explain it, it's bad." - Cory House
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
