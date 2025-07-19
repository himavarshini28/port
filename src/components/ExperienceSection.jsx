import React from 'react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Company Inc.",
      period: "2022 - Present",
      description: "Led development of scalable web applications using React, Node.js, and cloud technologies. Managed a team of 5 developers and improved system performance by 40%."
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description: "Developed responsive web applications and improved user experience across multiple platforms. Collaborated with design teams to implement pixel-perfect UIs."
    },
    {
      title: "Junior Developer",
      company: "StartUp Innovations",
      period: "2019 - 2020",
      description: "Built and maintained web applications, gained experience in full-stack development and agile methodologies."
    }
  ];

  return (
    <section id="experience" className="section-compact">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8 gradient-text">
          Professional Experience
        </h2>
        
        <div className="timeline max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item-compact">
              <div className="card-compact">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{exp.title}</h3>
                    <h4 className="text-base text-white mb-1">{exp.company}</h4>
                  </div>
                  <div className="bg-transparent text-white font-medium px-2 py-1 rounded-full text-xs">
                    {exp.period}
                  </div>
                </div>
                
                <p className="text-gray text-sm">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
