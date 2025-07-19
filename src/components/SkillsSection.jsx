import React from 'react';
import { Code, Terminal, Database, Zap } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code size={24} />,
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "TypeScript"]
    },
    {
      title: "Backend",
      icon: <Terminal size={24} />,
      skills: ["Node.js", "Express.js", "RESTful APIs"]
    },
    {
      title: "Database",
      icon: <Database size={24} />,
      skills: ["MongoDB", "Mongoose", "Firebase", "MySQL"]
    }
    // DevOps & Tools section commented out for now
    // {
    //   title: "DevOps & Tools",
    //   icon: <Zap size={24} />,
    //   skills: ["Git", "GitHub", "VS Code", "Postman"]
    // }
  ];

  return (
    <section id="skills" className="section bg-gray-950">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8 gradient-text">
          Technical Skills
        </h2>
        
        <div className="grid-2">
          {skillCategories.map((category, index) => (
            <div key={index} className="tech-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-white">{category.icon}</div>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="p-2 bg-black border border-gray-400/20 rounded-lg text-center text-gray hover:text-white hover:border-white transition-all duration-300 text-sm"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
