import { ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { whatsappLink } from '../data/siteData.js';

const base =
  'group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-sky/80';

export function WhatsAppButton({ children = 'WhatsApp Us', className = '', variant = 'primary' }) {
  const variantClass = 'whatsapp-cta shadow-[0_18px_48px_rgba(15,61,145,0.28)] hover:shadow-[0_24px_68px_rgba(15,61,145,0.38)]';

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -3, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${variantClass} ${variant === 'compact' ? 'min-h-11 px-5' : ''} ${className}`}
    >
      <MessageCircle size={18} />
      {children}
      <ArrowRight size={16} className="transition group-hover:translate-x-1" />
    </motion.a>
  );
}

export function SecondaryLink({ to, children, className = '' }) {
  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
      <Link
        to={to}
        className={`${base} border border-border bg-white/80 text-navy shadow-sm hover:border-royal/30 hover:bg-sky/50 ${className}`}
      >
        {children}
        <ArrowRight size={16} className="transition group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
}
