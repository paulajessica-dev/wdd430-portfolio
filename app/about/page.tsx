import SkillCard from '@/components/SkillCard';

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700 mb-8">
        I'm a BI Analyst learning full-stack development through BYU Pathway.
        I work with data every day and I'm expanding into building the applications
        that generate that data.
      </p>

      <h3 className="text-2xl font-bold mb-4">Skills</h3>
      <div className="grid gap-3 md:grid-cols-2">
        <SkillCard skill="SQL" level="Advanced" />
        <SkillCard skill="Power BI" level="Advanced" />
        <SkillCard skill="React" level="Beginner" />
        <SkillCard skill="Next.js" level="Beginner" />
        <SkillCard skill="TypeScript" level="Beginner" />
        <SkillCard skill="Tailwind CSS" level="Beginner" />
      </div>
    </main>
  );
}