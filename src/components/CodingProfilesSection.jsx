import React from 'react';
import { Github, Code, Star, Trophy, ExternalLink } from 'lucide-react';

const CodingProfilesSection = () => {
  const profiles = [
    {
      platform: "GitHub",
      username: "yourusername",
      stats: "500+ Repositories",
      link: "https://github.com/yourusername",
      icon: <Github size={32} />
    },
    {
      platform: "LeetCode",
      username: "yourusername",
      stats: "1500+ Problems Solved",
      link: "https://leetcode.com/yourusername",
      icon: <Code size={32} />
    },
    {
      platform: "CodeForces",
      username: "yourusername",
      stats: "Expert Rating",
      link: "https://codeforces.com/profile/yourusername",
      icon: <Star size={32} />
    },
    {
      platform: "HackerRank",
      username: "yourusername",
      stats: "5 Star Rating",
      link: "https://hackerrank.com/yourusername",
      icon: <Trophy size={32} />
    }
  ];

  return (
    <section id="profiles" className="section">
      <div className="container">
        <h2 className="text-5xl font-bold text-center mb-16 gradient-text">
          Coding Profiles
        </h2>
        
        <div className="grid-2">
          {profiles.map((profile, index) => (
            <a
              key={index}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="tech-card block"
            >
              <div className="flex items-center gap-6">
                <div className="text-cyan-400">{profile.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{profile.platform}</h3>
                  <p className="text-gray-400 mb-2">@{profile.username}</p>
                  <p className="text-cyan-300 font-medium">{profile.stats}</p>
                </div>
                <div className="ml-auto">
                  <ExternalLink size={20} className="text-gray-400" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfilesSection;
