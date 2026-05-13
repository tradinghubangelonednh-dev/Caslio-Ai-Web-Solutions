import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { label: 'Projects Delivered', end: 250, suffix: '+', symbol: '↗' },
  { label: 'Happy Clients', end: 241, suffix: '+', symbol: '★' },
  { label: 'Performance Rate', end: 98, suffix: '%', symbol: '%' },
  { label: 'Support Hours', text: '24/7', symbol: '◷' },
  { label: 'Client Satisfaction', end: 97, suffix: '%', symbol: '✓' },
];

function CountUp({ end, suffix = '', start }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start || typeof end !== 'number') return;

    setValue(0);
    let current = 0;
    const increment = end / 80;

    const startDelay = setTimeout(() => {
      const timer = setInterval(() => {
        current += increment;

        if (current >= end) {
          current = end;
          clearInterval(timer);
        }

        setValue(Math.floor(current));
      }, 18);

      return () => clearInterval(timer);
    }, 450);

    return () => clearTimeout(startDelay);
  }, [end, start]);

  return (
    <>
      {value}
      {suffix}
    </>
  );
}

export default function StatsCounterSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.45 });

  return (
    <section ref={sectionRef} className="px-4 py-10 md:py-14">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[2rem] border border-border bg-white px-5 py-8 shadow-[0_22px_80px_rgba(7,27,59,0.07)] md:px-8 md:py-10"
        >
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky/60 blur-2xl" />
          <div className="absolute -right-20 top-8 h-72 w-72 rounded-full bg-sky/60 blur-2xl" />

          <div className="relative mx-auto mb-8 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-royal">
              Trusted Growth Numbers
            </p>

            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-navy md:text-5xl">
              Results that show our digital growth performance
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-muted md:text-lg">
              A premium snapshot of Caslio’s project delivery, client trust, performance quality,
              and support experience.
            </p>
          </div>

          <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 28, scale: 0.94 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.24, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, scale: 1.035 }}
                className="group rounded-[1.75rem] border border-border bg-[#f8fbff] p-5 text-center shadow-sm transition-all duration-300 hover:border-royal/30 hover:bg-white hover:shadow-[0_28px_90px_rgba(15,61,145,0.15)]"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xl font-semibold text-royal shadow-sm transition-all duration-300 group-hover:bg-navy group-hover:text-white">
                  {item.symbol}
                </div>

                <div className="text-4xl font-semibold tracking-tight text-navy md:text-5xl">
                  {item.text ? item.text : <CountUp end={item.end} suffix={item.suffix} start={isInView} />}
                </div>

                <p className="mt-3 text-sm font-semibold text-navy">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}