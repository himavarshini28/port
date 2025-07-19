import React from 'react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Company Inc.",
      period: "2022 - Present",
      description: "Led development of scalable web applications using React, Node.js, and cloud technologies. Managed a team of 5 developers and improved system performance by 40%.",
      technologies: ["React", "Node.js", "AWS", "MongoDB", "TypeScript"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description: "Developed responsive web applications and improved user experience across multiple platforms. Collaborated with design teams to implement pixel-perfect UIs.",
      technologies: ["React", "Vue.js", "SASS", "JavaScript", "Figma"]
    },
    {
      title: "Junior Developer",
      company: "StartUp Innovations",
      period: "2019 - 2020",
      description: "Built and maintained web applications, gained experience in full-stack development and agile methodologies.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="text-5xl font-bold text-center mb-16 gradient-text">
          Professional Experience
        </h2>
        
        <div className="timeline max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="card">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{exp.title}</h3>
                    <h4 className="text-xl text-white mb-2">{exp.company}</h4>
                  </div>
                  <div className="text-black font-medium bg-white px-3 py-1 rounded-full text-sm">
                    {exp.period}
                  </div>
                </div>
                
                <p className="text-gray mb-6">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-black border border-white rounded-full text-sm text-white hover:bg-white hover:text-black transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
