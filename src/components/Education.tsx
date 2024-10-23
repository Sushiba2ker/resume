import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <div className="bg-[#181818] p-3 rounded-lg">
      <h2 className="text-lg font-bold mb-2 text-gray-200">EDUCATION</h2>
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-gray-400" />
          <h3 className="text-sm font-semibold text-gray-200">HUTECH University</h3>
        </div>
        <div className="ml-6 text-xs text-gray-300">
          <p>Software Engineering • Expected: June 2025</p>
          <p>GPA: 3.2/4.0</p>
          <p>Key Courses: OOP, Database, Data Structures, Machine Learning</p>
        </div>
      </div>
    </div>
  );
}