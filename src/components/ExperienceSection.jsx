import React from 'react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Web Developer Intern",
      company: "Zeepty",
      period: "April 2025 - July 2025",
      description: "Developed comprehensive Supplier Page interface using Next.js and TypeScript. Designed RESTful API endpoints for supplier data management and CRUD operations. Integrated third-party services including payment gateways and authentication providers. Deployed scalable application components on AWS with performance optimization. Collaborated with cross-functional teams on supplier registration workflow and participated in agile development practices."
    }
  ];

  return (
    <section id="experience" className="section-compact bg-gray-950">
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
