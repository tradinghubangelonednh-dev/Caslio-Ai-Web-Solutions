import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CheckIcon, whatsappLink } from '../data/siteData.js';

export function ServiceCard({ service, index = 0, detailed = false }) {
  const Icon = service.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.55, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="glass-card group rounded-[1.75rem] p-6 transition hover:border-royal/25 hover:shadow-[0_28px_90px_rgba(15,61,145,0.15)]"
    >
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky text-royal transition group-hover:scale-105">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold tracking-tight text-navy">{service.title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{service.description}</p>
      {detailed && (
        <div className="mt-6 grid gap-3">
          {service.benefits.map((benefit) => (
            <p key={benefit} className="flex items-center gap-3 text-sm font-medium text-navy">
              <CheckIcon size={17} className="text-royal" /> {benefit}
            </p>
          ))}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="whatsapp-cta mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold shadow-[0_16px_38px_rgba(15,61,145,0.22)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_54px_rgba(15,61,145,0.32)]"
          >
            Discuss on WhatsApp <ArrowRight size={16} />
          </a>
        </div>
      )}
    </motion.article>
  );
}

export function ProjectCard({ project, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      whileHover={{ y: -10 }}
      className="group overflow-hidden rounded-[2rem] border border-border bg-white shadow-[0_22px_80px_rgba(7,27,59,0.07)]"
    >
      <div className={`relative h-64 bg-gradient-to-br ${project.accent} p-5`}>
        <div className="absolute inset-0 mockup-grid opacity-80" />
        <div className="relative mx-auto h-full max-w-[360px] rounded-[1.5rem] border border-white/70 bg-white/82 p-4 shadow-2xl backdrop-blur">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff6b6b]" />
            <span className="h-3 w-3 rounded-full bg-[#ffd166]" />
            <span className="h-3 w-3 rounded-full bg-[#06d6a0]" />
          </div>
          <div className="rounded-2xl premium-gradient p-5 text-white">
            <p className="text-xs uppercase tracking-[0.15em] text-white/60">{project.type}</p>
            <p className="mt-8 text-2xl font-semibold">{project.title}</p>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            <span className="h-16 rounded-2xl bg-sky" />
            <span className="h-16 rounded-2xl bg-white shadow-sm" />
            <span className="h-16 rounded-2xl bg-sky" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-sm font-semibold text-royal">{project.type}</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-navy">{project.title}</h3>
        <p className="mt-3 text-sm leading-7 text-muted">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-border bg-sky/60 px-3 py-1 text-xs font-semibold text-royal">
              {tag}
            </span>
          ))}
        </div>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="whatsapp-cta mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold shadow-[0_16px_38px_rgba(15,61,145,0.22)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_54px_rgba(15,61,145,0.32)]"
        >
          Discuss Similar Project <ArrowRight size={16} className="transition group-hover:translate-x-1" />
        </a>
      </div>
    </motion.article>
  );
}

export function PageHero({ eyebrow, title, text, cta = true }) {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="animated-blob absolute left-[6%] top-10 h-60 w-60 rounded-full opacity-60" />
      <div className="animated-blob absolute right-[8%] top-28 h-72 w-72 rounded-full opacity-50" />
      <div className="container-premium relative text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-royal">{eyebrow}</p>
        <h1 className="mx-auto max-w-4xl text-balance text-4xl font-semibold tracking-tight text-navy md:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted md:text-lg">{text}</p>
        {cta && (
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="whatsapp-cta mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold shadow-[0_18px_48px_rgba(15,61,145,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_68px_rgba(15,61,145,0.38)]"
          >
            Start on WhatsApp <ArrowRight size={16} />
          </a>
        )}
      </div>
    </section>
  );
}
