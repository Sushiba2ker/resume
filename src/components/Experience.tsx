import React from 'react';
import { Briefcase, Building2, Users } from 'lucide-react';

export default function Experience() {
  return (
    <div className="bg-[#181818] p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-gray-200">WORK EXPERIENCE</h2>
      <div className="space-y-6">
        <ExperienceItem
          icon={<Briefcase className="w-5 h-5" />}
          company="Freelance Data Engineer / Nhà phát triển Phần mềm"
          position="Freelance"
          period="09/2021 - Hiện tại"
          responsibilities={[
            "Thiết kế Data Pipeline với Python, SQL, Apache Airflow, nâng truy cập dữ liệu từ 75% lên 95% và độ tin cậy từ 85% lên 99% cho 5 khách hàng lớn.",
            "Tối ưu kho dữ liệu trên AWS Redshift và Google BigQuery, giảm thời gian truy vấn từ 10 giây xuống 8 giây (giảm 20%), tăng hiệu suất xử lý 15%.",
            "Hoàn thành hơn 10 dự án với tỷ lệ hài lòng 98%, triển khai Docker và Kubernetes, giảm thời gian triển khai từ 5 ngày xuống 3 ngày (giảm 40%)."
          ]}
        />
        <ExperienceItem
          icon={<Building2 className="w-5 h-5" />}
          company="Ngân hàng Đầu tư và Phát triển Việt Nam (BIDV)"
          position="Thực tập sinh"
          period="02/2024 - 05/2024"
          responsibilities={[
            "Tối ưu Data Pipline với Python và Apache Spark, giảm thời gian xử lý từ 8 giây xuống 6 giây (giảm 25%).",
            "Triển khai Hệ thống Chấm công Tự động với SQL Server, giảm thời gian quản lý từ 10 giờ xuống 6 giờ/tháng (giảm 40%)."
          ]}
        />
        <ExperienceItem
          icon={<Users className="w-5 h-5" />}
          company="Công ty cổ phần BStar Solutions"
          position="Fresher"
          period="10/2021 - 09/2022"
          responsibilities={[
            "Đào tạo chuyên sâu về tối ưu cơ sở dữ liệu và Data Pipeline với SQL, MongoDB, đạt điểm trung bình 90/100.",
            "Triển khai giải pháp quản lý dữ liệu trên Oracle SQL và PostgreSQL, cải thiện hiệu suất lưu trữ và truy vấn tăng 30%, giảm thời gian truy vấn từ 5 giây xuống 3.5 giây."
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
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <h3 className="text-lg font-semibold text-gray-200">{company}</h3>
      </div>
      <div className="flex justify-between items-center mb-2">
        <p className="text-sm text-gray-400">{position}</p>
        <p className="text-sm text-gray-400">{period}</p>
      </div>
      <ul className="list-disc list-inside text-sm text-gray-300">
        {responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
    </div>
  );
}