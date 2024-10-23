import { Award } from 'lucide-react';

interface CertificationItemProps {
  title: string;
  date: string;
}

export default function Certifications() {
  return (
    <div className="bg-[#181818] p-3 rounded-lg">
      <h2 className="text-lg font-bold mb-2 text-gray-200">CERTIFICATIONS</h2>
      <div className="space-y-1">
        <CertificationItem
          title="AWS Data Analytics"
          date="July 2024"
        />
        <CertificationItem
          title="Python Fundamentals"
          date="May 2024"
        />
        <CertificationItem
          title="OOP in C++"
          date="May 2024"
        />
      </div>
    </div>
  );
}

function CertificationItem({ title, date }: CertificationItemProps) {
  return (
    <div className="flex items-center gap-1 text-xs">
      <Award className="w-3 h-3 text-gray-400" />
      <p className="text-gray-300">{title}</p>
      <span className="text-gray-400 ml-auto">{date}</span>
    </div>
  );
}