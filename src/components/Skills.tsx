import { Brain, Wrench } from 'lucide-react';

interface SkillCategoryProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

export default function Skills() {
  return (
    <div className="bg-[#181818] p-3 rounded-lg">
      <h2 className="text-lg font-bold mb-2 text-gray-200">SKILLS</h2>
      <div className="space-y-2">
        <SkillCategory
          icon={<Wrench className="w-4 h-4" />}
          title="Technical Skills"
          skills={[
            "Languages: Python, SQL, Java, C++, C#, R, Scala",
            "Data Tech: AWS, Spark, Hadoop, SQL Server, PostgreSQL",
            "Tools: Docker, Git, Power BI, Tableau, LookerStudio"
          ]}
        />
        <SkillCategory
          icon={<Brain className="w-4 h-4" />}
          title="Soft Skills"
          skills={["Problem Solving, Time Management, Communication, Teamwork"]}
        />
      </div>
    </div>
  );
}

function SkillCategory({ icon, title, skills }: SkillCategoryProps) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-1">
        {icon}
        <h3 className="text-xs font-semibold text-gray-200">{title}</h3>
      </div>
      <ul className="space-y-1 ml-6">
        {skills.map((skill, index) => (
          <li key={index} className="text-xs text-gray-300">{skill}</li>
        ))}
      </ul>
    </div>
  );
}