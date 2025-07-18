import React from 'react';
import { Trophy } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      title: "Best Innovation Award",
      organization: "Tech Conference 2023",
      description: "Recognized for developing an AI-powered solution that improved efficiency by 60%"
    },
    {
      title: "Certified Solutions Architect",
      organization: "AWS",
      description: "Professional certification in cloud architecture and scalable systems design"
    },
    {
      title: "Open Source Contributor",
      organization: "GitHub",
      description: "Active contributor to popular open-source projects with 1000+ stars"
    },
    {
      title: "Hackathon Winner",
      organization: "DevFest 2022",
      description: "First place in national hackathon for building innovative fintech solution"
    }
  ];

  return (
    <section id="achievements" className="section">
      <div className="container">
        <h2 className="text-5xl font-bold text-center mb-16 gradient-text">
          Achievements & Certifications
        </h2>
        
        <div className="grid-2">
          {achievements.map((achievement, index) => (
            <div key={index} className="tech-card">
              <div className="flex items-start gap-4">
                <div className="text-yellow-400 mt-1">
                  <Trophy size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
                  <h4 className="text-cyan-400 font-medium mb-3">{achievement.organization}</h4>
                  <p className="text-gray-300">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
