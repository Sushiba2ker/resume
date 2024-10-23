import { Target } from 'lucide-react';

interface ObjectiveItemProps {
  title: string;
  description: string;
}

export default function CareerObjectives() {
  return (
    <div className="bg-[#181818] p-3 rounded-lg">
      <h2 className="text-lg font-bold mb-2 text-gray-200">OBJECTIVES</h2>
      <div className="space-y-2">
        <ObjectiveItem
          title="Short-term"
          description="Become a Data Engineering expert in 2-3 years, leading major data optimization projects."
        />
        <ObjectiveItem
          title="Long-term"
          description="Advance to Data Engineering Team Lead within 5 years."
        />
      </div>
    </div>
  );
}

function ObjectiveItem({ title, description }: ObjectiveItemProps) {
  return (
    <div className="text-xs">
      <div className="flex items-center gap-1">
        <Target className="w-3 h-3 text-gray-400" />
        <p className="text-gray-200 font-semibold">{title}</p>
      </div>
      <p className="text-gray-300 ml-4">{description}</p>
    </div>
  );
}