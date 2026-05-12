import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { WhatsAppButton } from './Button.jsx';

const links = [
  { name: 'Home', to: '/' },
  { name: 'Services', to: '/services' },
  { name: 'Work', to: '/work' },
  { name: 'About', to: '/about' },
  { name: 'Contact', to: '/contact' },
];

function Logo() {
  return (
    <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Caslio home">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-border bg-white p-1 shadow-[0_10px_30px_rgba(7,27,59,0.08)] sm:h-[52px] sm:w-[52px]">
        <img src="/caslio-logo-symbol.jpeg" alt="Caslio AI & Web Solutions logo" className="h-full w-full object-cover object-center" />
      </span>
      <span className="hidden leading-tight sm:block">
        <span className="block text-sm font-semibold tracking-[0.26em] text-navy">CASLIO</span>
        <span className="block text-[11px] font-medium uppercase tracking-[0.14em] text-muted">AI & Web Solutions</span>
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
                `text-sm font-medium transition hover:text-royal ${isActive ? 'text-royal' : 'text-muted'}`
              }
            >
              {link.name}
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
                    `rounded-full px-4 py-3 text-sm font-semibold ${isActive ? 'bg-sky text-royal' : 'text-muted'}`
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
