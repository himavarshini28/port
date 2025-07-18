

import React from 'react';
import {
  Navbar,
  HeroSection,
  ExperienceSection,
  ProjectsSection,
  SkillsSection,
  AchievementsSection,
  CodingProfilesSection,
  ContactSection
} from './components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <AchievementsSection />
      <CodingProfilesSection />
      <ContactSection />
    </div>
  );
}

export default App;
