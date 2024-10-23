import { Brain, Wrench } from 'lucide-react';

interface SkillCategoryProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

export default function Skills() {
  return (
    <div className="bg-[#181818] p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-gray-200">SKILLS</h2>
      <div className="space-y-4">
        <SkillCategory
          icon={<Wrench className="w-5 h-5" />}
          title="Kỹ năng về Kỹ thuật"
          skills={[
            "Ngôn ngữ Lập trình: Python, SQL, Java, C++, C#, R, Scala",
            "Công nghệ Dữ liệu: AWS, Apache Spark, Hadoop, SQL Server, PostgreSQL, MongoDB",
            "Công cụ và Nền tảng: Docker, Git, Power BI, Tableau, LookerStudio, Kaggle"
          ]}
        />
        <SkillCategory
          icon={<Brain className="w-5 h-5" />}
          title="Kỹ năng Mềm"
          skills={["Tư duy phân tích, Giải quyết vấn đề, Quản lý thời gian, Giao tiếp, Làm việc nhóm, Chú ý đến chi tiết, Thích nghi và Linh hoạt"]}
        />
      </div>
    </div>
  );
}

function SkillCategory({ icon, title, skills }: SkillCategoryProps) {
    return (
      <div>
        <div className="flex items-center gap-2 mb-2">
          {icon}
          <h3 className="text-sm font-semibold text-gray-200">{title}</h3>
        </div>
        <ul className="space-y-1">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 mr-2"></span>
              <span className="text-xs text-gray-300">{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }