import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { WhatsAppButton } from './Button.jsx';

const links = [
  { name: 'Home', to: '/' },
  { name: 'Services', to: '/services' },
  { name: 'Solutions', to: '/solutions' },
  { name: 'Work', to: '/work' },
  { name: 'About', to: '/about' },
  { name: 'Contact', to: '/contact' },
];

function Logo() {
  return (
    <Link to="/" className="flex min-w-0 items-center gap-2 sm:gap-3" aria-label="Caslio home">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-border bg-white p-1 shadow-[0_10px_30px_rgba(7,27,59,0.08)] sm:h-[52px] sm:w-[52px]">
        <img src="/caslio-logo-symbol.jpeg" alt="Caslio AI & Web Solutions logo" className="h-full w-full object-cover object-center" />
      </span>

      <span className="block min-w-0 leading-tight">
        <span className="block text-xs font-semibold tracking-[0.18em] text-navy sm:text-sm sm:tracking-[0.26em]">
          CASLIO
        </span>

        <span className="block text-[9px] font-medium uppercase tracking-[0.1em] text-muted sm:text-[11px] sm:tracking-[0.14em]">
          AI & Web Solutions
        </span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-white/78 backdrop-blur-2xl">
      <nav className="container-premium flex h-20 items-center justify-between gap-5">
        <Logo />

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                [
                  'group relative px-1 pb-2 pt-2 text-sm font-medium transition-colors duration-300',
                  'focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-royal/40',
                  isActive ? 'text-royal' : 'text-navy/70 hover:text-royal',
                ].join(' ')
              }
            >
              {({ isActive }) => (
                <>
                  <span>{link.name}</span>

                  <span
                    className={[
                      'pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-[20px] -translate-x-1/2 rounded-full bg-royal transition-all duration-300',
                      isActive
                        ? 'opacity-100 scale-x-100'
                        : 'opacity-0 scale-x-50 group-hover:opacity-60 group-hover:scale-x-75',
                    ].join(' ')}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <WhatsAppButton variant="compact" />
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-navy shadow-sm lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border bg-white lg:hidden"
          >
            <div className="container-premium flex flex-col gap-3 py-5">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-3 text-sm font-semibold ${
                      isActive ? 'bg-sky text-royal' : 'text-muted'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <WhatsAppButton className="mt-2 w-full" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}