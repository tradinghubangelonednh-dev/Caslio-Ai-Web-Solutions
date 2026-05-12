import { motion, AnimatePresence } from 'framer-motion';

export default function IntroLoader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#071B3B]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,61,145,0.55),transparent_34rem)]" />

          <div className="absolute inset-0 opacity-40">
            {[...Array(22)].map((_, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0.35],
                  scale: [0, 1, 0.7],
                  y: [0, -24, 0],
                }}
                transition={{
                  duration: 1.8,
                  delay: index * 0.04,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                className="absolute h-1.5 w-1.5 rounded-full bg-[#DCEEFF]"
                style={{
                  left: `${8 + ((index * 17) % 84)}%`,
                  top: `${12 + ((index * 23) % 76)}%`,
                }}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative text-center"
          >
            <motion.div
              animate={{ boxShadow: ['0 0 0 rgba(220,238,255,0)', '0 0 70px rgba(220,238,255,0.45)', '0 0 0 rgba(220,238,255,0)'] }}
              transition={{ duration: 1.4, repeat: Infinity }}
              className="mx-auto mb-6 flex h-20 w-20 items-center justify-center overflow-hidden rounded-3xl bg-white p-2 shadow-2xl"
            >
              <img
                src="/caslio-logo-symbol.jpeg"
                alt="Caslio"
                className="h-full w-full object-cover object-center"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, letterSpacing: '0.12em' }}
              animate={{ opacity: 1, letterSpacing: '0.36em' }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-2xl font-semibold text-white"
            >
              CASLIO
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-3 text-xs font-medium uppercase tracking-[0.26em] text-[#DCEEFF]"
            >
              AI & Web Solutions
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="mt-8 flex items-center justify-center gap-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/90"
            >
              <span>AI</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#DCEEFF]" />
              <span>Web</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#DCEEFF]" />
              <span>Growth</span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}