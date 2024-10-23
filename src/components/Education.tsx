import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <div className="bg-[#181818] p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-gray-200">EDUCATION</h2>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-gray-400" />
          <h3 className="text-lg font-semibold text-gray-200">Trường Đại Học Công Nghệ Thành phố Hồ Chí Minh (HUTECH)</h3>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-400">Công Nghệ Phần Mềm</p>
          <p className="text-sm text-gray-400">Dự kiến tốt nghiệp: Tháng 6 năm 2025</p>
        </div>
        <p className="text-gray-300">GPA: 3.2/4.0</p>
        <p className="text-gray-300">Các môn học liên quan: Lập trình Hướng đối tượng, Cơ sở dữ liệu, Cấu trúc dữ liệu và Giải thuật, Học máy, Khai thác dữ liệu, Cấu trúc dữ liệu và Giải thuật nâng cao, Truy xuất thông tin, Xử lý ảnh.</p>
      </div>
    </div>
  );
}