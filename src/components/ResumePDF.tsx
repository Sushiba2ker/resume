import React from 'react';
import { usePDF } from 'react-to-pdf';
import MusicPlayer from './MusicPlayer';

interface ResumePDFProps {
  children: React.ReactNode;
}

const ResumePDF: React.FC<ResumePDFProps> = ({ children }) => {
  const { toPDF, targetRef } = usePDF({
    filename: 'resume.pdf',
    page: { 
      format: 'A4',
      orientation: 'portrait',
      margin: 20
    },
    method: 'save'
  });

  return (
    <div>
      <button 
        onClick={() => toPDF()} 
        className="fixed top-4 right-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full z-50 transition-colors"
      >
        Xuất PDF
      </button>
      <div 
        ref={targetRef} 
        className="w-[210mm] mx-auto bg-[#121212] flex flex-col"
        style={{ minHeight: '297mm' }}
      >
        <div className="flex-grow">
          {children}
        </div>
        <div className="mt-auto">
          <MusicPlayer />
        </div>
      </div>
    </div>
  );
};

export default ResumePDF;