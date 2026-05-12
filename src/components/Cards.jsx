import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CheckIcon, whatsappLink } from '../data/siteData.js';

const cardReveal = {
  hidden: { opacity: 0, y: 18, scale: 0.985 },
  show: { opacity: 1, y: 0, scale: 1 },
};

const fastPremiumTransition = {
  duration: 0.28,
  ease: [0.16, 1, 0.3, 1],
};

export function ServiceCard({ service, index = 0, detailed = false }) {
  const Icon = service.icon;

  return (
    <motion.article
      variants={cardReveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-90px' }}
      transition={{ ...fastPremiumTransition, delay: index * 0.025 }}
      whileHover={{
        y: -14,
        scale: 1.025,
        transition: { duration: 0.18, ease: 'easeOut' },
      }}
      whileTap={{ scale: 0.985 }}
      className="glass-card group rounded-[1.75rem] p-6 transition-all duration-200 hover:border-royal/35 hover:shadow-[0_34px_100px_rgba(15,61,145,0.22)]"
    >
      <motion.div
        className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky text-royal transition-all duration-200 group-hover:bg-royal group-hover:text-white group-hover:shadow-[0_18px_42px_rgba(15,61,145,0.32)]"
        whileHover={{ rotate: -3, scale: 1.08 }}
        transition={{ duration: 0.16 }}
      >
        <Icon size={24} />
      </motion.div>

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
            className="whatsapp-cta mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold shadow-[0_16px_38px_rgba(15,61,145,0.22)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_24px_58px_rgba(15,61,145,0.38)]"
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
      variants={cardReveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-90px' }}
      transition={{ ...fastPremiumTransition, delay: index * 0.03 }}
      whileHover={{
        y: -16,
        scale: 1.018,
        transition: { duration: 0.18, ease: 'easeOut' },
      }}
      whileTap={{ scale: 0.985 }}
      className="group overflow-hidden rounded-[2rem] border border-border bg-white shadow-[0_22px_80px_rgba(7,27,59,0.07)] transition-all duration-200 hover:border-royal/25 hover:shadow-[0_34px_110px_rgba(7,27,59,0.16)]"
    >
      <div className={`relative h-[310px] bg-gradient-to-br ${project.accent} p-5 md:h-[330px]`}>
        <div className="absolute inset-0 mockup-grid opacity-80" />

        <motion.div
          className="relative mx-auto h-full max-w-[390px] rounded-[1.6rem] border border-white/70 bg-white/85 p-5 shadow-2xl backdrop-blur"
          whileHover={{
            y: -6,
            rotateX: 2,
            rotateY: -2,
            transition: { duration: 0.18, ease: 'easeOut' },
          }}
        >
          <div className="mb-4 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff6b6b]" />
            <span className="h-3 w-3 rounded-full bg-[#ffd166]" />
            <span className="h-3 w-3 rounded-full bg-[#06d6a0]" />
          </div>

          <div className="rounded-2xl premium-gradient p-5 text-white shadow-[0_18px_45px_rgba(7,27,59,0.18)]">
            <p className="text-xs uppercase tracking-[0.18em] text-white/65">
              {project.type}
            </p>
            <p className="mt-8 text-2xl font-semibold leading-tight">
              {project.title}
            </p>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            <span className="h-16 rounded-2xl bg-sky transition duration-200 group-hover:-translate-y-1" />
            <span className="h-16 rounded-2xl bg-white shadow-sm transition duration-200 group-hover:-translate-y-2" />
            <span className="h-16 rounded-2xl bg-sky transition duration-200 group-hover:-translate-y-1" />
          </div>
        </motion.div>
      </div>

      <div className="p-7 md:p-8">
        <p className="text-sm font-semibold text-royal">{project.type}</p>

        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-navy">
          {project.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-muted">
          {project.description}
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-sky/60 px-3 py-1 text-xs font-semibold text-royal transition-all duration-200 group-hover:border-royal/25 group-hover:bg-sky"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="whatsapp-cta mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold shadow-[0_16px_38px_rgba(15,61,145,0.22)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_24px_58px_rgba(15,61,145,0.38)]"
        >
          Discuss Similar Project <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
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
            className="whatsapp-cta mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold shadow-[0_18px_48px_rgba(15,61,145,0.28)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,61,145,0.42)]"
          >
            Start on WhatsApp <ArrowRight size={16} />
          </a>
        )}
      </div>
    </section>
  );
}