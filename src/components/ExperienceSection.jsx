import React from 'react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Web Developer Intern",
      company: "Zeepty",
      period: "April 2025 - July 2025",
      description: "Developed the Supplier Page interface using Next.js framework with TypeScript for type safety. Implemented RESTful API endpoints for supplier data management and integrated third-party services. Deployed application components on AWS cloud platform with focus on performance optimization. Worked directly with product team to implement supplier registration workflow and data validation systems."
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
