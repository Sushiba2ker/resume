import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4 text-gray-200">{title}</h2>
      {children}
    </div>
  );
}