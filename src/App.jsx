
import React from 'react';
import {
  Navbar,
  HeroSection,
  ExperienceSection,
  ProjectsSection,
  SkillsSection,
  AchievementsSection,
  CodingProfilesSection,
  ContactSection,
  Footer
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
      <Footer />
    </div>
  );
}

export default App;
