import React from 'react';
import { Briefcase, Building2, Users } from 'lucide-react';

export default function Experience() {
  return (
    <div className="bg-[#181818] p-3 rounded-lg">
      <h2 className="text-lg font-bold mb-2 text-gray-200">WORK EXPERIENCE</h2>
      <div className="space-y-3">
        <ExperienceItem
          icon={<Briefcase className="w-4 h-4" />}
          company="Freelance Data Engineer"
          position="Freelance"
          period="09/2021 - Present"
          responsibilities={[
            "Designed Data Pipeline with Python, SQL, Apache Airflow, improving data access from 75% to 95%.",
            "Optimized AWS Redshift and BigQuery warehouses, reducing query time by 20%, processing efficiency up 15%.",
            "Completed 10+ projects with 98% satisfaction, implemented Docker/Kubernetes, deployment time down 40%."
          ]}
        />
        <ExperienceItem
          icon={<Building2 className="w-4 h-4" />}
          company="BIDV Bank"
          position="Intern"
          period="02/2024 - 05/2024"
          responsibilities={[
            "Optimized Data Pipeline with Python and Apache Spark, reducing processing time by 25%.",
            "Implemented Automated Attendance System with SQL Server, reducing management time by 40%."
          ]}
        />
      </div>
    </div>
  );
}

interface ExperienceItemProps {
  icon: React.ReactNode;
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
}

function ExperienceItem({ icon, company, position, period, responsibilities }: ExperienceItemProps) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-1">
        {icon}
        <h3 className="text-sm font-semibold text-gray-200">{company}</h3>
        <span className="text-xs text-gray-400">• {position}</span>
        <span className="text-xs text-gray-400 ml-auto">{period}</span>
      </div>
      <ul className="list-disc list-inside text-xs text-gray-300 ml-5">
        {responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
    </div>
  );
}