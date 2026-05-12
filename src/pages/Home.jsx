import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroVisual from '../components/HeroVisual.jsx';
import { SecondaryLink, WhatsAppButton } from '../components/Button.jsx';
import { ProjectCard, ServiceCard } from '../components/Cards.jsx';
import { Reveal, SectionIntro } from '../components/Section.jsx';
import { deliverables, projects, services, testimonials, trustStrip, whyCaslio } from '../data/siteData.js';

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-14 md:pb-24 md:pt-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_74%_16%,rgba(220,238,255,0.95),transparent_30rem)]" />
        <div className="container-premium grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mb-5 inline-flex rounded-full border border-border bg-white/80 px-4 py-2 text-sm font-semibold text-royal shadow-sm"
            >
              Web Development • AI Automation • Google Business Growth
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.06 }}
              className="text-balance text-5xl font-semibold tracking-tight text-navy md:text-7xl"
            >
              Premium Websites & AI Automation
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-muted"
            >
              We help businesses grow online with elegant websites, smart automation, WhatsApp systems, and modern
              digital experiences.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.18 }}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <WhatsAppButton>Start on WhatsApp</WhatsAppButton>
              <SecondaryLink to="/work">View Our Work</SecondaryLink>
            </motion.div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="border-y border-border bg-white/70 py-5">
        <div className="container-premium grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {trustStrip.map((item) => (
            <div key={item} className="rounded-2xl border border-border bg-white px-4 py-4 text-center text-sm font-semibold text-navy shadow-sm">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-premium">
          <SectionIntro
            eyebrow="Services"
            title="Premium digital systems built for business growth"
            text="Every service is designed around credibility, speed, conversion, and a cleaner customer journey."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8fbff] py-20 md:py-28">
        <div className="container-premium grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionIntro
            align="left"
            eyebrow="What We Deliver"
            title="Sharper presence, smoother communication, stronger conversion"
            text="Caslio turns your digital presence into a polished business asset that works across website, WhatsApp, Google, and automation."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {deliverables.map((item, index) => (
              <Reveal key={item} delay={index * 0.04}>
                <div className="glass-card flex items-center gap-4 rounded-3xl p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-sky text-royal">
                    <CheckCircle2 size={19} />
                  </span>
                  <p className="font-semibold text-navy">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-premium">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionIntro
              align="left"
              eyebrow="Featured Work"
              title="Business-focused websites with premium visual systems"
              text="A selection of elegant website and growth-system concepts for service businesses."
            />
            <Link to="/work" className="inline-flex items-center gap-2 text-sm font-semibold text-royal">
              Explore portfolio <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 text-white md:py-28">
        <div className="container-premium">
          <SectionIntro
            eyebrow="Why Caslio"
            title="A refined digital partner for modern businesses"
            text="We focus on the details that make a business feel trustworthy, responsive, and ready for growth."
            inverse
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {whyCaslio.map((item, index) => (
              <Reveal key={item} delay={index * 0.04}>
                <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur">
                  <p className="mb-5 text-4xl font-semibold text-sky">0{index + 1}</p>
                  <p className="text-lg font-semibold">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-premium">
          <SectionIntro
            eyebrow="Testimonials"
            title="Trusted by businesses that care about presentation"
            text="Clear communication, premium design, and practical growth thinking."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.by} delay={index * 0.07}>
                <figure className="glass-card h-full rounded-[1.75rem] p-7">
                  <blockquote className="text-lg leading-8 text-navy">“{testimonial.quote}”</blockquote>
                  <figcaption className="mt-6 text-sm font-semibold text-royal">— {testimonial.by}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="container-premium overflow-hidden rounded-[2.25rem] premium-gradient p-8 text-center text-white shadow-[0_28px_100px_rgba(7,27,59,0.22)] md:p-16">
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">Ready to Grow Your Business Online?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/74 md:text-lg">
            Let’s build a premium digital presence that helps your business attract, engage, and convert more customers.
          </p>
          <WhatsAppButton className="mt-8">Chat on WhatsApp</WhatsAppButton>
        </div>
      </section>
    </>
  );
}
