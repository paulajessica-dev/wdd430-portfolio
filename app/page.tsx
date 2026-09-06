import ProjectList from '@/components/ProjectList';

const projects = [
  {
    title: 'Fortaleza Chamber of Commerce',
    description: 'A responsive business directory site for a local chamber of commerce, featuring member spotlights, upcoming events, and live weather data for Fortaleza, Brazil.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://paulajessica-dev.github.io/wdd231/chamber/index.html'
  },
  {
    title: 'Dog Explorer',
    description: 'A dog breed discovery app that pulls data from The Dog API, letting users browse breeds by temperament, weight, and life span, plus dog facts and a pet services directory.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'REST API'],
    link: 'https://paulajessica-dev.github.io/wdd231/finalproject/index.html'
  }
];

export default function Home() { 
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I'm a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}