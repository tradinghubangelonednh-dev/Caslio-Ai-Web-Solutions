import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { WhatsAppButton } from '../components/Button.jsx';
import { PageHero } from '../components/Cards.jsx';
import { Reveal } from '../components/Section.jsx';
import { contact, whatsappLink } from '../data/siteData.js';

const cards = [
  { title: 'Call Us', text: contact.phone, icon: Phone, href: `tel:${contact.phone.replaceAll(' ', '')}` },
  { title: 'WhatsApp Us', text: contact.phone, icon: MessageCircle, href: whatsappLink },
  { title: 'Email Us', text: contact.email, icon: Mail, href: `mailto:${contact.email}` },
  { title: 'Visit Us', text: contact.address, icon: MapPin, href: 'https://maps.google.com/?q=4/37%20A%20Moti%20Nagar%2C%20New%20Delhi%20110015' },
];

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start your project with a direct WhatsApp conversation"
        text="Share your business, goals, and timeline directly so the next step stays fast and clear."
        cta={false}
      />
      <section className="pb-24">
        <div className="container-premium grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="premium-gradient rounded-[2rem] p-8 text-white shadow-[0_24px_90px_rgba(7,27,59,0.2)] md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/58">WhatsApp-first</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-5xl">Ready to build something premium?</h2>
              <p className="mt-5 text-base leading-8 text-white/74">
                Tell us what you want to improve: website, automation, Google presence, WhatsApp inquiries, or online booking.
              </p>
              <WhatsAppButton className="mt-8">Start Your Project on WhatsApp</WhatsAppButton>
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.title} delay={index * 0.06}>
                  <a
                    href={card.href}
                    target={card.title === 'Visit Us' || card.title === 'WhatsApp Us' ? '_blank' : undefined}
                    rel={card.title === 'Visit Us' || card.title === 'WhatsApp Us' ? 'noreferrer' : undefined}
                    className="glass-card group block h-full rounded-[1.75rem] p-7 transition hover:-translate-y-1 hover:border-royal/25"
                  >
                    <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky text-royal">
                      <Icon size={23} />
                    </span>
                    <h3 className="text-xl font-semibold text-navy">{card.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted">{card.text}</p>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
