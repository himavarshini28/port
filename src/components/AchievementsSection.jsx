import React from 'react';
import { Award, Trophy, Users } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      title: "GDG onCampus Organizer, VIIT",
      period: "2024",
      description: "Leading events, hackathons, and workshops to foster tech community engagement and student empowerment.",
      icon: <Users size={20} />
    },
    {
      title: "1st Prize – IWD Hackathon 2025",
      organization: "IWD Vizag Community",
      description: "Secured first place in the International Women's Day Hackathon 2025.",
      icon: <Trophy size={20} />
    },
    {
      title: "2nd Prize – HackHers 2K25",
      organization: "Vignan's Institute of Engineering for Women",
      description: "Achieved second place in the 24-hour hackathon competition.",
      icon: <Award size={20} />
    }
  ];

  return (
    <section id="achievements" className="section bg-gray-950">
      <div className="container px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 gradient-text">
          Achievements & Leadership
        </h2>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-4 sm:space-y-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-black border border-gray-800 border-opacity-30 rounded-lg hover:border-white hover:border-opacity-20 transition-all duration-300">
                <div className="text-white mt-1 flex-shrink-0">
                  {achievement.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                    <h3 className="text-base sm:text-lg font-semibold text-white leading-tight">{achievement.title}</h3>
                    {achievement.period && (
                      <span className="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-0 flex-shrink-0">{achievement.period}</span>
                    )}
                  </div>
                  {achievement.organization && (
                    <h4 className="text-gray-300 font-medium mb-2 text-sm sm:text-base">{achievement.organization}</h4>
                  )}
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
