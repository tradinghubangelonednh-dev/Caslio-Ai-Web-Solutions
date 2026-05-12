import { PageHero, ServiceCard } from '../components/Cards.jsx';
import { WhatsAppButton } from '../components/Button.jsx';
import { Reveal } from '../components/Section.jsx';
import { services } from '../data/siteData.js';

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Premium services for websites, automation, and local digital growth"
        text="Six focused capabilities, built to help businesses look sharper, answer faster, and convert more customers through WhatsApp-first digital systems."
      />
      <section className="pb-24">
        <div className="container-premium grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} detailed />
          ))}
        </div>
      </section>
      <section className="bg-[#f8fbff] py-20">
        <div className="container-premium grid items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
          <Reveal>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-navy md:text-5xl">
              Built around the way real customers take action.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
              Your website should present your business clearly, load beautifully on mobile, and guide inquiries toward
              a fast WhatsApp conversation.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass-card rounded-[2rem] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-royal">Project CTA</p>
              <h3 className="mt-4 text-2xl font-semibold text-navy">Discuss your service needs directly on WhatsApp.</h3>
              <p className="mt-4 text-sm leading-7 text-muted">Share your business goals and get a practical next step.</p>
              <WhatsAppButton className="mt-7">Start on WhatsApp</WhatsAppButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
