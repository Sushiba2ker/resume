import React from 'react';
import ActionButtons from './ActionButtons';

export default function Summary() {
  return (
    <div className="bg-[#181818] p-3 rounded-lg">
      <div className="flex flex-col mb-2">
        <ActionButtons />
        <h2 className="text-lg font-bold text-gray-200 mt-2">Summary</h2>
      </div>
      <p className="text-sm text-gray-300">
        Final year student with 2 years of experience in data system optimization and process automation. Proficient in AWS, Python, and Big Data. Improved query performance by 20% through AWS and Apache Spark data pipeline optimization.
      </p>
    </div>
  );
}