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
      <div className="pb-16">
        <Header />
        <div className="container mx-auto px-4 mt-4 space-y-4">
          <Summary />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="space-y-4">
              <CareerObjectives />
              <Education />
              <Experience />
            </div>
            <div className="space-y-4">
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