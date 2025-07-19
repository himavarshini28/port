import React from 'react';
import { Github, Code, Star, Trophy, ExternalLink } from 'lucide-react';
import leetcodeLogo from '../assets/logos/leetcode.png';
import codechefLogo from '../assets/logos/codechef.png';
import geeksforgeeksLogo from '../assets/logos/image.png';

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
      icon: <img src={leetcodeLogo} alt="LeetCode" width="32" height="32" className="object-contain" />
    },
    {
      platform: "CodeChef",
      username: "yourusername",
      stats: "4 Star Rating",
      link: "https://codechef.com/users/yourusername",
      icon: <img src={codechefLogo} alt="CodeChef" width="32" height="32" className="object-contain" />
    },
    {
      platform: "GeeksforGeeks",
      username: "yourusername",
      stats: "500+ Problems Solved",
      link: "https://auth.geeksforgeeks.org/user/yourusername",
      icon: <img src={geeksforgeeksLogo} alt="GeeksforGeeks" width="32" height="32" className="object-contain" />
    }
  ];

  return (
    <section id="profiles" className="section">
      <div className="container">
        <h2 className="text-5xl font-bold text-center mb-16 gradient-text">
          Coding Profiles
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {profiles.map((profile, index) => (
            <a
              key={index}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="tech-card block"
            >
              <div className="flex items-center gap-6">
                <div className="text-white">{profile.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{profile.platform}</h3>
                  <p className="text-gray mb-2">@{profile.username}</p>
                  <p className="text-gray font-medium">{profile.stats}</p>
                </div>
                <div className="ml-auto">
                  <ExternalLink size={20} className="text-gray" />
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
