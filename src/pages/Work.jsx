import { PageHero, ProjectCard } from '../components/Cards.jsx';
import { projects } from '../data/siteData.js';

export default function Work() {
  return (
    <>
      <PageHero
        eyebrow="Work / Portfolio"
        title="Premium web concepts for clinics, salons, labs, and service businesses"
        text="Each project is designed around a result: better credibility, clearer service presentation, and faster WhatsApp inquiries."
      />
      <section className="pb-24">
        <div className="container-premium grid gap-7 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}
