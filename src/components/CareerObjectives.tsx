import { Target } from 'lucide-react';

interface ObjectiveItemProps {
  title: string;
  description: string;
}

export default function CareerObjectives() {
  return (
    <div className="bg-[#181818] p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-gray-200">CAREER OBJECTIVES</h2>
      <div className="space-y-2">
        <ObjectiveItem
          title="Ngắn hạn"
          description="Đảm nhận vị trí Data Engineer, trở thành chuyên gia kỹ thuật dữ liệu trong 2-3 năm, đảm nhiệm các dự án lớn và tối ưu hóa hệ thống dữ liệu."
        />
        <ObjectiveItem
          title="Dài hạn"
          description="Thăng tiến lên trưởng bộ phận Kỹ thuật Dữ liệu trong vòng 5 năm."
        />
      </div>
    </div>
  );
}

function ObjectiveItem({ title, description }: ObjectiveItemProps) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Target className="w-5 h-5 text-gray-400" />
        <p className="text-gray-200 font-semibold">{title}</p>
      </div>
      <p className="text-sm text-gray-300 ml-7">{description}</p>
    </div>
  );
}