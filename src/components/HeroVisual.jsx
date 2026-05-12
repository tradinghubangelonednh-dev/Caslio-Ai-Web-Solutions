import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Bot, CalendarCheck, MessageCircle, MousePointer2, Sparkles, TrendingUp } from 'lucide-react';

export default function HeroVisual() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-160, 160], [7, -7]);
  const rotateY = useTransform(x, [-160, 160], [-7, 7]);

  function handleMove(event) {
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
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="relative mx-auto h-[520px] max-w-[560px] perspective-distant"
    >
      <motion.div
        animate={{ scale: [1, 1.04, 1], rotate: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="animated-blob absolute left-6 top-2 h-56 w-56 rounded-full opacity-80"
      />
      <motion.div
        animate={{ y: [0, -16, 0], x: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="animated-blob absolute bottom-12 right-4 h-72 w-72 rounded-full opacity-70"
      />

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="mockup-grid glass-card absolute left-2 top-20 h-72 w-[86%] rounded-[2rem] p-4 md:left-0"
      >
        <div className="flex items-center gap-2 border-b border-border pb-3">
          <span className="h-3 w-3 rounded-full bg-[#ff6b6b]" />
          <span className="h-3 w-3 rounded-full bg-[#ffd166]" />
          <span className="h-3 w-3 rounded-full bg-[#06d6a0]" />
          <span className="ml-auto rounded-full bg-sky px-3 py-1 text-xs font-semibold text-royal">Live growth dashboard</span>
        </div>
        <div className="grid h-[calc(100%-44px)] grid-cols-[1fr_0.8fr] gap-4 pt-4">
          <div className="rounded-3xl bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-navy">
              <TrendingUp size={18} className="text-royal" /> Business Growth
            </div>
            <div className="space-y-3">
              <span className="block h-3 w-3/4 rounded-full bg-sky" />
              <span className="block h-3 w-1/2 rounded-full bg-border" />
              <span className="block h-3 w-5/6 rounded-full bg-sky" />
            </div>
            <div className="mt-8 h-24 rounded-2xl premium-gradient p-4 text-white">
              <p className="text-xs text-white/70">Qualified leads</p>
              <p className="mt-1 text-3xl font-semibold">+48%</p>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="rounded-3xl bg-white p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Automation</p>
              <div className="mt-3 flex items-center gap-2 text-sm font-semibold">
                <Bot size={18} className="text-royal" /> WhatsApp reply ready
              </div>
            </div>
            <div className="rounded-3xl bg-white p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Booking</p>
              <div className="mt-3 flex items-center gap-2 text-sm font-semibold">
                <CalendarCheck size={18} className="text-royal" /> 18 new requests
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
        className="glass-card absolute bottom-0 right-2 h-[340px] w-[170px] rounded-[2rem] border-navy/10 bg-navy p-2 shadow-[0_26px_90px_rgba(7,27,59,0.24)] md:right-10"
      >
        <div className="h-full overflow-hidden rounded-[1.55rem] bg-white">
          <div className="bg-navy px-4 py-4 text-white">
            <div className="mx-auto mb-3 h-4 w-16 rounded-full bg-white/15" />
            <p className="text-xs font-semibold">Caslio Bot</p>
            <p className="text-[10px] text-white/58">Solutions to growth</p>
          </div>
          <div className="space-y-3 p-3 text-[10px]">
            <div className="ml-auto max-w-[110px] rounded-2xl bg-[#dcf8c6] p-3">Hi, I want to grow my business online.</div>
            <div className="max-w-[118px] rounded-2xl bg-sky p-3">Hello. We can help with a premium website and WhatsApp system.</div>
            {['Website', 'Automation', 'Google Growth'].map((item) => (
              <div key={item} className="rounded-full border border-border bg-white px-3 py-2 text-center font-semibold text-royal">
                {item}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -18, 0], rotate: [0, -2, 0] }}
        transition={{ duration: 6.8, repeat: Infinity, ease: 'easeInOut' }}
        className="glass-card absolute left-0 top-[340px] z-10 hidden rounded-3xl p-4 shadow-xl sm:block"
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
        animate={{ y: [0, 14, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut' }}
        className="glass-card absolute right-6 top-8 z-10 rounded-3xl p-4 shadow-xl"
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

      <motion.div
        animate={{ x: [0, 12, 0], y: [0, -10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-10 top-10 text-royal"
      >
        <MousePointer2 size={30} />
      </motion.div>
    </motion.div>
  );
}
