import React from 'react';
import { Code, Terminal, Database, Zap } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code size={32} />,
      skills: ["React", "Vue.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "SASS", "Tailwind CSS"]
    },
    {
      title: "Backend",
      icon: <Terminal size={32} />,
      skills: ["Node.js", "Python", "Java", "Express.js", "FastAPI", "Django", "RESTful APIs", "GraphQL"]
    },
    {
      title: "Database",
      icon: <Database size={32} />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "Prisma", "Mongoose"]
    },
    {
      title: "DevOps & Tools",
      icon: <Zap size={32} />,
      skills: ["AWS", "Docker", "Git", "GitHub Actions", "Jenkins", "Kubernetes", "Linux", "Nginx"]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="text-5xl font-bold text-center mb-16 gradient-text">
          Technical Skills
        </h2>
        
        <div className="grid-2">
          {skillCategories.map((category, index) => (
            <div key={index} className="tech-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-cyan">{category.icon}</div>
                <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="p-3 bg-black border border-cyan/20 rounded-lg text-center text-gray hover:text-white hover:border-cyan transition-all duration-300"
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
