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
          title="Kỹ thuật Dữ liệu sử dụng AWS Data Analytics"
          date="20 Tháng 7 năm 2024"
        />
        <CertificationItem
          title="Python cho Người mới bắt đầu - Học Tất cả Các Kiến thức Cơ bản của Python"
          date="23 Tháng 5 năm 2024"
        />
        <CertificationItem
          title="Lập trình Hướng đối tượng trong C++ & Chuẩn bị Phỏng vấn"
          date="20 Tháng 5 năm 2024"
        />
      </div>
    </div>
  );
}

function CertificationItem({ title, date }: CertificationItemProps) {
  return (
    <div className="text-xs">
      <div className="flex items-center gap-1">
        <Award className="w-4 h-4 text-gray-400" />
        <p className="text-gray-300">{title}</p>
      </div>
      <p className="text-gray-400 ml-5">{date}</p>
    </div>
  );
}