import { PageHero, ProjectCard } from '../components/Cards.jsx';
import ClientBrandTicker from '../components/ClientBrandTicker.jsx';
import StatsCounterSection from '../components/StatsCounterSection.jsx';
import { projects } from '../data/siteData.js';

export default function Work() {
  return (
    <>
      <PageHero
        eyebrow="Work / Portfolio"
        title="Premium Web Concepts for Modern Businesses"
        text="Each concept is designed around stronger credibility, clearer service presentation, and faster WhatsApp inquiries."
      />

      <section className="pb-24">
        <div className="container-premium grid gap-7 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </section>

      <StatsCounterSection />

      <ClientBrandTicker />
    </>
  );
}