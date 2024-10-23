import React from 'react';
import ActionButtons from './ActionButtons';

export default function Summary() {
  return (
    <div className="bg-[#181818] p-3 rounded-lg">
      <div className="flex flex-col mb-2">
        <ActionButtons />
        <h2 className="text-lg font-bold text-gray-200 mt-2">Tóm tắt</h2>
      </div>
      <p className="text-sm text-gray-300">
        Sinh viên năm cuối với 2 năm kinh nghiệm trong tối ưu hóa hệ thống dữ liệu và tự động hóa quy trình. Thành thạo AWS,
        Python, và Big Data. Đã nâng cao hiệu suất truy vấn 20% cho các doanh nghiệp thông qua việc tối ưu data pipeline trên
        AWS và Apache Spark.
      </p>
    </div>
  );
}