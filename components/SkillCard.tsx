interface SkillCardProps {
  skill: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

export default function SkillCard({ skill, level }: SkillCardProps) {
  const levelColors: Record<string, string> = {
    Beginner: 'bg-yellow-100 text-yellow-800',
    Intermediate: 'bg-blue-100 text-blue-800',
    Advanced: 'bg-green-100 text-green-800',
  };

  return (
    <div className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white flex justify-between items-center">
      <span className="font-semibold text-gray-900">{skill}</span>
      <span className={`text-xs font-medium px-3 py-1 rounded-full ${levelColors[level]}`}>
        {level}
      </span>
    </div>
  );
}