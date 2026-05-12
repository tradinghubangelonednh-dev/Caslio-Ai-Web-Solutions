import { motion } from 'framer-motion';

export function SectionIntro({ eyebrow, title, text, align = 'center', inverse = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-90px' }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`mx-auto mb-12 max-w-3xl ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      {eyebrow && (
        <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.18em] ${inverse ? 'text-sky' : 'text-royal'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-balance text-3xl font-semibold tracking-tight md:text-5xl ${inverse ? 'text-white' : 'text-navy'}`}>
        {title}
      </h2>
      {text && <p className={`mt-5 text-base leading-8 md:text-lg ${inverse ? 'text-white/68' : 'text-muted'}`}>{text}</p>}
    </motion.div>
  );
}

export function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
