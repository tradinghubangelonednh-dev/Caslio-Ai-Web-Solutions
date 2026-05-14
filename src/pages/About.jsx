import { useEffect, useState } from 'react';

import {
  Globe2,
  Laptop,
  Layers3,
  Rocket,
  SearchCheck,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingUp,
  Zap
} from 'lucide-react';

import { approachCards } from '../data/siteData.js';
import { PageHero } from '../components/Cards.jsx';
import { Reveal } from '../components/Section.jsx';

const trustStats = [
  { label: 'Fast', text: 'Delivery', icon: Rocket },
  { label: 'Mobile', text: 'Optimized', icon: Smartphone },
  { label: 'Premium', text: 'Design', icon: Sparkles },
  { label: 'Growth', text: 'Focused', icon: TrendingUp },
  { label: 'counter', text: 'Designs Created', icon: Layers3 },
  { label: 'SEO-Focused', text: 'Systems', icon: SearchCheck }
];

const businessTypes = [
  'Clinics',
  'Dental Clinics',
  'Cafes',
  'Restaurants',
  'Coaches',
  'Local Businesses',
  'Startups',
  'Professionals',
  'Salons',
  'Gyms'
];

const chooseCards = [
  {
    title: 'Premium Design',
    text: 'Modern websites that build trust instantly and make your business look professional online.',
    icon: Laptop
  },
  {
    title: 'Practical Automation',
    text: 'Reduce manual work with WhatsApp, AI systems, booking flows, and smart customer communication.',
    icon: Zap
  },
  {
    title: 'Local Growth Focus',
    text: 'Designed to help businesses improve visibility, attract local customers, and grow with clarity.',
    icon: Globe2
  },
  {
    title: 'Long-Term Support',
    text: 'We support businesses even after delivery with improvements, guidance, and growth-focused updates.',
    icon: ShieldCheck
  }
];

function AnimatedCounter() {
  const [count, setCount] = useState(0);
  const [showPlus, setShowPlus] = useState(false);

  useEffect(() => {
    let current = 0;

    const timer = setInterval(() => {
      current += 1;

      if (current <= 100) {
        setCount(current);
      }

      if (current === 100) {
        clearInterval(timer);

        setTimeout(() => {
          setShowPlus(true);
        }, 180);
      }
    }, 18);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-0.5">
      <span>{count}</span>

      <span
        className={`inline-block transition-all duration-500 ${
          showPlus
            ? 'translate-y-0 scale-100 opacity-100'
            : 'translate-y-3 scale-75 opacity-0'
        }`}
      >
        +
      </span>
    </div>
  );
}

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Caslio"
        title="We build premium digital systems that help businesses grow faster online"
        text="Caslio AI & Web Solutions helps businesses build modern websites, automate communication, improve visibility, and generate more customer inquiries through practical digital systems."
      />

      <section className="pb-16">
        <div className="container-premium">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {trustStats.map((stat, index) => {
              const Icon = stat.icon;
              const isCounter = stat.label === 'counter';

              return (
                <Reveal key={stat.text} delay={index * 0.04}>
                  <article className="group relative h-full min-h-[148px] overflow-hidden rounded-[1.5rem] border border-royal/18 bg-gradient-to-br from-white via-[#eef6ff] to-[#f8fbff] p-5 shadow-premium transition-all duration-500 hover:-translate-y-1 hover:border-royal/30">
                    <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-royal/10 blur-3xl opacity-0 transition duration-700 group-hover:scale-150 group-hover:opacity-100" />

                    <div className="relative">
                      <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-sky text-royal transition duration-500 group-hover:scale-110 group-hover:bg-royal group-hover:text-white group-hover:shadow-lg group-hover:shadow-royal/20">
                        <Icon size={19} />
                      </span>

                      <h3
                        className={`tracking-tight text-navy ${
                          isCounter
                            ? 'text-3xl font-bold'
                            : 'text-[1.18rem] font-semibold'
                        }`}
                      >
                        {isCounter ? <AnimatedCounter /> : stat.label}
                      </h3>

                      <p
                        className={`mt-1 leading-5 ${
                          isCounter
                            ? 'text-sm font-semibold text-royal'
                            : 'text-[0.78rem] font-medium text-muted'
                        }`}
                      >
                        {stat.text}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-premium grid gap-6 md:grid-cols-2">
          {approachCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <Reveal key={card.title} delay={index * 0.06}>
                <article className="glass-card group h-full rounded-[2rem] p-8 transition duration-500 hover:-translate-y-1 hover:shadow-premium">
                  <span className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky text-royal transition duration-500 group-hover:scale-110 group-hover:bg-royal group-hover:text-white">
                    <Icon size={25} />
                  </span>

                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    {card.title}
                  </h2>

                  <p className="mt-4 text-base leading-8 text-muted">
                    {card.text}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="pb-24">
        <div className="container-premium">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-royal">
                Who We Help
              </p>

              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-navy md:text-5xl">
                Businesses we commonly help
              </h2>

              <p className="mt-5 text-lg leading-8 text-muted">
                We work with growth-focused local businesses, service brands,
                and professionals who want a stronger digital presence.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {businessTypes.map((business, index) => (
              <Reveal key={business} delay={index * 0.035}>
                <span className="inline-flex rounded-full border border-royal/15 bg-sky/70 px-5 py-3 text-sm font-semibold text-navy shadow-sm transition duration-500 hover:-translate-y-1 hover:border-royal/30 hover:bg-white hover:shadow-soft">
                  {business}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-premium">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-royal">
                Why Choose Caslio
              </p>

              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-navy md:text-5xl">
                Premium design with business clarity underneath
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {chooseCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <Reveal key={card.title} delay={index * 0.06}>
                  <article className="glass-card group h-full rounded-[2rem] p-8 transition duration-500 hover:-translate-y-1 hover:shadow-premium">
                    <span className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky text-royal transition duration-500 group-hover:scale-110 group-hover:bg-royal group-hover:text-white">
                      <Icon size={25} />
                    </span>

                    <h3 className="text-2xl font-semibold tracking-tight text-navy">
                      {card.title}
                    </h3>

                    <p className="mt-4 text-base leading-8 text-muted">
                      {card.text}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mb-24 bg-white py-20 text-black">
        <div className="container-premium grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/55">
              Difference
            </p>

            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-black md:text-5xl">
              We create digital systems that make businesses look trusted,
              modern, and ready to grow.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-lg leading-9 text-black/65">
              Caslio exists for businesses that want to be taken seriously
              online. We keep the experience elegant, responsive, and
              conversion-aware, then connect it to the customer communication
              channels that already matter: WhatsApp, Google, booking flows,
              and automation.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}