import React from 'react';
import Header from './components/Header';
import ActionButtons from './components/ActionButtons';
import MusicPlayer from './components/MusicPlayer';
import ResumePDF from './components/ResumePDF';
import Summary from './components/Sumary';
import CareerObjectives from './components/CareerObjectives';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Project';
import Skills from './components/Skills';
import Certifications from './components/Certifications';

function App() {
  return (
    <ResumePDF>
      <div className="min-h-screen bg-[#121212] text-[#b3b3b3] pb-24">
        <Header />
        <div className="container mx-auto px-2 mt-2 space-y-2">
          <Summary />
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-2">
              <CareerObjectives />
              <Education />
              <Experience />
            </div>
            <div className="space-y-2">
              <Projects />
              <Skills />
              <Certifications />
            </div>
          </div>
        </div>
      </div>
    </ResumePDF>
  );
}

export default App;
