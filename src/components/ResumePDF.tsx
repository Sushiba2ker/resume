import React from 'react';
import { usePDF } from 'react-to-pdf';
import MusicPlayer from './MusicPlayer';

interface ResumePDFProps {
  children: React.ReactNode;
}

const ResumePDF: React.FC<ResumePDFProps> = ({ children }) => {
  const { toPDF, targetRef } = usePDF({
    filename: 'resume.pdf',
    page: { format: 'A4' }
  });

  return (
    <div>
      <button onClick={() => toPDF()} className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full z-50">
        Xuất PDF
      </button>
      <div ref={targetRef} className="w-[210mm] min-h-[297mm] mx-auto bg-white flex flex-col justify-between">
        <div>{children}</div>
        <MusicPlayer />
      </div>
    </div>
  );
};

export default ResumePDF;