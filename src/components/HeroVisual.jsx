import {
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from 'framer-motion';

import {
  Bot,
  CalendarCheck,
  MessageCircle,
  MousePointer2,
  Sparkles,
  TrendingUp,
} from 'lucide-react';

export default function HeroVisual() {
  const prefersReducedMotion = useReducedMotion();

  const isMobile =
    typeof window !== 'undefined' && window.innerWidth < 768;

  const lowPerformance =
    typeof navigator !== 'undefined' &&
    ((navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) ||
      (navigator.deviceMemory && navigator.deviceMemory <= 4));

  const mobileLite = isMobile && (lowPerformance || prefersReducedMotion);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-160, 160], mobileLite ? [2, -2] : [6, -6]);
  const rotateY = useTransform(x, [-160, 160], mobileLite ? [-2, 2] : [-6, 6]);

  function handleMove(event) {
    if (mobileLite) return;

    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="relative mx-auto h-[470px] w-full max-w-[560px] md:ml-auto md:h-[560px] md:max-w-[620px]"
    >
      <motion.div
        animate={
          mobileLite
            ? { opacity: [0.72, 0.85, 0.72] }
            : { scale: [1, 1.08, 1], rotate: [0, 8, 0] }
        }
        transition={{ duration: mobileLite ? 5 : 8, repeat: Infinity, ease: 'easeInOut' }}
        className="animated-blob absolute left-4 top-0 h-52 w-52 rounded-full opacity-75 md:left-12 md:h-64 md:w-64"
      />

      <motion.div
        animate={
          mobileLite
            ? { opacity: [0.68, 0.8, 0.68] }
            : { y: [0, -16, 0], x: [0, 14, 0] }
        }
        transition={{ duration: mobileLite ? 5.5 : 7, repeat: Infinity, ease: 'easeInOut' }}
        className="animated-blob absolute bottom-12 right-2 h-64 w-64 rounded-full opacity-70 md:right-0 md:h-80 md:w-80"
      />

      <motion.div
        animate={mobileLite ? { y: [0, -4, 0] } : { y: [0, -12, 0] }}
        transition={{ duration: mobileLite ? 4.5 : 6, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={mobileLite ? {} : { y: -10, scale: 1.015, transition: { duration: 0.18, ease: 'easeOut' } }}
        className="mockup-grid glass-card absolute left-1 top-14 h-[290px] w-[88%] rounded-[2rem] p-4 shadow-[0_28px_90px_rgba(7,27,59,0.14)] md:left-12 md:top-20 md:h-72 md:w-[74%]"
      >
        <div className="flex items-center gap-2 border-b border-border pb-3">
          <span className="h-3 w-3 rounded-full bg-[#ff6b6b]" />
          <span className="h-3 w-3 rounded-full bg-[#ffd166]" />
          <span className="h-3 w-3 rounded-full bg-[#06d6a0]" />

          <span className="ml-auto rounded-full bg-sky px-3 py-1 text-xs font-semibold text-royal">
            Live growth dashboard
          </span>
        </div>

        <div className="grid h-[calc(100%-44px)] grid-cols-[1fr_0.8fr] gap-4 pt-4">
          <div className="rounded-3xl bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-navy">
              <TrendingUp size={18} className="text-royal" />
              Business Growth
            </div>

            <div className="space-y-3">
              <span className="block h-3 w-3/4 rounded-full bg-sky" />
              <span className="block h-3 w-1/2 rounded-full bg-border" />
              <span className="block h-3 w-5/6 rounded-full bg-sky" />
            </div>

            <motion.div
              whileHover={mobileLite ? {} : { scale: 1.03 }}
              className="mt-8 rounded-2xl premium-gradient p-4 text-white"
            >
              <p className="text-xs text-white/70">Qualified leads</p>
              <p className="mt-1 text-3xl font-semibold">+48%</p>
            </motion.div>
          </div>

          <div className="grid gap-4">
            <motion.div
              whileHover={mobileLite ? {} : { y: -5 }}
              className="rounded-3xl bg-white p-4 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                Automation
              </p>

              <div className="mt-3 flex items-center gap-2 text-sm font-semibold">
                <Bot size={18} className="text-royal" />
                WhatsApp reply ready
              </div>
            </motion.div>

            <motion.div
              whileHover={mobileLite ? {} : { y: -5 }}
              className="rounded-3xl bg-white p-4 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                Booking
              </p>

              <div className="mt-3 flex items-center gap-2 text-sm font-semibold">
                <CalendarCheck size={18} className="text-royal" />
                18 new requests
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={mobileLite ? { y: [0, 5, 0] } : { y: [0, 16, 0] }}
        transition={{ duration: mobileLite ? 5 : 7.5, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={mobileLite ? {} : { y: -8, scale: 1.03 }}
        className="glass-card absolute bottom-0 right-0 h-[320px] w-[165px] rounded-[2rem] border-navy/10 bg-navy p-2 shadow-[0_30px_100px_rgba(7,27,59,0.28)] md:right-2 md:h-[340px] md:w-[175px]"
      >
        <div className="h-full overflow-hidden rounded-[1.55rem] bg-white">
          <div className="bg-navy px-4 py-4 text-white">
            <div className="mx-auto mb-3 h-4 w-16 rounded-full bg-white/15" />
            <p className="text-xs font-semibold">Caslio Bot</p>
            <p className="text-[10px] text-white/58">Solutions to growth</p>
          </div>

          <div className="space-y-3 p-3 text-[10px]">
            <div className="ml-auto max-w-[110px] rounded-2xl bg-[#dcf8c6] p-3">
              Hi, I want to grow my business online.
            </div>

            <div className="max-w-[118px] rounded-2xl bg-sky p-3">
              Hello. We can help with a premium website and WhatsApp system.
            </div>

            {['Website', 'Automation', 'Google Growth'].map((item) => (
              <motion.div
                key={item}
                whileHover={mobileLite ? {} : { scale: 1.04 }}
                className="rounded-full border border-border bg-white px-3 py-2 text-center font-semibold text-royal"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={
          mobileLite
            ? { y: [0, -4, 0] }
            : { y: [0, -16, 0], rotate: [0, -2, 0] }
        }
        transition={{ duration: mobileLite ? 4.5 : 6.8, repeat: Infinity, ease: 'easeInOut' }}
        className="glass-card absolute left-0 top-[330px] z-10 hidden rounded-3xl p-4 shadow-xl sm:block md:left-8"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky text-royal">
            <Sparkles size={20} />
          </span>

          <div>
            <p className="text-sm font-semibold text-navy">Premium UI system</p>
            <p className="text-xs text-muted">Brand-ready and responsive</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={
          mobileLite
            ? { y: [0, 4, 0] }
            : { y: [0, 14, 0], rotate: [0, 2, 0] }
        }
        transition={{ duration: mobileLite ? 4.5 : 6.2, repeat: Infinity, ease: 'easeInOut' }}
        className="glass-card absolute right-3 top-4 z-10 rounded-3xl p-4 shadow-xl md:right-4 md:top-8"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-navy text-white">
            <MessageCircle size={20} />
          </span>

          <div>
            <p className="text-sm font-semibold text-navy">WhatsApp-first leads</p>
            <p className="text-xs text-muted">Instant customer action</p>
          </div>
        </div>
      </motion.div>

      {!mobileLite && (
        <motion.div
          animate={{ x: [0, 12, 0], y: [0, -10, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-10 top-10 text-royal md:left-16"
        >
          <MousePointer2 size={30} />
        </motion.div>
      )}
    </motion.div>
  );
}