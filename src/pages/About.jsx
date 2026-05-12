import { approachCards } from '../data/siteData.js';
import { PageHero } from '../components/Cards.jsx';
import { Reveal } from '../components/Section.jsx';

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Caslio"
        title="A modern digital agency for premium websites, AI automation, and practical growth"
        text="Caslio AI & Web Solutions is a modern digital agency helping businesses build premium online experiences through websites, automation, WhatsApp systems, and growth-focused digital strategy."
      />
      <section className="pb-24">
        <div className="container-premium grid gap-6 md:grid-cols-2">
          {approachCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={index * 0.06}>
                <article className="glass-card h-full rounded-[2rem] p-8">
                  <span className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky text-royal">
                    <Icon size={25} />
                  </span>
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">{card.title}</h2>
                  <p className="mt-4 text-base leading-8 text-muted">{card.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>
      <section className="bg-navy py-20 text-white">
        <div className="container-premium grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky">Difference</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
              Premium design with business clarity underneath.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg leading-9 text-white/72">
              Caslio exists for businesses that want to be taken seriously online. We keep the experience elegant,
              responsive, and conversion-aware, then connect it to the customer communication channels that already
              matter: WhatsApp, Google, booking flows, and automation.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
