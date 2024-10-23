import React from 'react';
import { Code } from 'lucide-react';

export default function Projects() {
  return (
    <div className="bg-[#181818] p-3 rounded-lg">
      <h2 className="text-lg font-bold mb-2 text-gray-200">PROJECTS</h2>
      <div className="space-y-2">
        <ProjectItem
          title="Đặt bàn với Chatbot CozeAI"
          date="05/2024"
          description="Phát triển hệ thống đặt bàn trực tuyến với .NET, SQL Server, WebSockets, giảm 100% sự can thiệp của nhân viên trực chatbot, thời gian xử lý 2 giây, tăng hài lòng khách hàng 95%."
        />
        <ProjectItem
          title="Hệ thống Tự động hóa Chấm công Hàng tháng"
          date="05/2024"
          description="Xây dựng hệ thống quản lý chấm công tự động với C#, Python, SQL Server, tiết kiệm 4 giờ/tháng, tăng độ chính xác dữ liệu 98%."
        />
        <ProjectItem
          title="Hệ thống Quản lý Cửa hàng Điện tử"
          date="07/2023"
          description="Phát triển phần mềm quản lý cửa hàng với WPF, C#, SQL Server, giảm thời gian quản lý kho từ 20 giờ xuống 14 giờ/tháng (giảm 30%), tăng độ chính xác tồn kho 95%."
        />
      </div>
    </div>
  );
}

interface ProjectItemProps {
  title: string;
  date: string;
  description: string;
}

function ProjectItem({ title, date, description }: ProjectItemProps) {
  return (
    <div className="text-xs">
      <div className="flex items-center gap-1">
        <Code className="w-4 h-4 text-gray-400" />
        <p className="text-gray-200 font-semibold">{title}</p>
        <span className="text-gray-400">({date})</span>
      </div>
      <p className="text-gray-300 ml-5">{description}</p>
    </div>
  );
}