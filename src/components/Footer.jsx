import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { contact } from '../data/siteData.js';
import { WhatsAppButton } from './Button.jsx';

const links = [
  ['Home', '/'],
  ['Services', '/services'],
  ['Work', '/work'],
  ['About', '/about'],
  ['Contact', '/contact'],
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-premium grid gap-12 py-14 lg:grid-cols-[1.2fr_0.65fr_1fr]">
        <div>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-white p-1 shadow-[0_18px_46px_rgba(0,0,0,0.18)]">
              <img src="/caslio-logo-symbol.jpeg" alt="Caslio logo" className="h-full w-full object-cover object-center" />
            </span>
            <div>
              <p className="text-lg font-semibold">Caslio AI & Web Solutions</p>
              <p className="text-sm text-white/58">New Delhi, India</p>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-7 text-white/68">
            Premium websites, AI automation, and digital growth systems for modern businesses.
          </p>
          <WhatsAppButton className="mt-8" />
        </div>
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white/42">Quick Links</p>
          <div className="grid gap-3">
            {links.map(([name, to]) => (
              <Link key={to} to={to} className="text-sm text-white/70 transition hover:text-white">
                {name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white/42">Contact</p>
          <div className="grid gap-4 text-sm text-white/72">
            <p className="flex gap-3"><Phone size={18} className="text-sky" /> {contact.phone}</p>
            <p className="flex gap-3"><Mail size={18} className="text-sky" /> {contact.email}</p>
            <p className="flex gap-3"><MapPin size={18} className="text-sky" /> {contact.address}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © 2026 Caslio AI & Web Solutions. All rights reserved.
      </div>
    </footer>
  );
}
