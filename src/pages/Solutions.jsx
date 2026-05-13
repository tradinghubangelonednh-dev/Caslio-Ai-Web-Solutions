import { motion } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Crown,
  Globe2,
  MapPinned,
  MessageCircle,
  MonitorSmartphone,
  Search,
  Sparkles,
} from 'lucide-react';

const phoneNumber = '918287933577';

function createWhatsAppLink(packageName) {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    `Hi Caslio, I’m interested in the ${packageName} solution. Please share details.`
  )}`;
}

const solutions = [
  {
    title: 'Website Development',
    price: 'Starting from ₹15,000+',
    icon: MonitorSmartphone,
    description:
      'Premium business websites designed for trust, visibility, customer experience, and digital growth.',
    features: [
      'Premium custom website design',
      'Fully responsive mobile experience',
      'Modern luxury UI/UX',
      'Fast loading optimization',
      'SEO-ready structure',
      'WhatsApp integration',
      'Contact inquiry system',
      'Conversion-focused layout',
      'Premium animations',
      'Business branding design',
      'Social media integration',
      'Secure hosting guidance',
      'Google-friendly structure',
      'Professional service presentation',
      'Ongoing support guidance',
    ],
  },
  {
    title: 'AI Automation',
    price: 'Custom Pricing',
    icon: Bot,
    description:
      'Smart automation systems that simplify workflows, improve efficiency, and reduce repetitive business tasks.',
    features: [
      'Business workflow automation',
      'AI-powered lead systems',
      'Smart inquiry handling',
      'Automated customer flows',
      'AI productivity systems',
      'Internal process optimization',
      'Automation consultation',
      'CRM integration support',
      'Lead management systems',
      'AI response systems',
      'Business efficiency optimization',
      'Custom automation strategy',
    ],
  },
  {
    title: 'WhatsApp Systems',
    price: 'Starting from ₹6,000+',
    icon: MessageCircle,
    description:
      'Conversion-focused WhatsApp systems designed to improve customer communication and increase inquiries.',
    features: [
      'WhatsApp integration',
      'Click-to-chat systems',
      'Inquiry automation',
      'WhatsApp lead flow',
      'Auto response setup',
      'Business inquiry management',
      'Customer communication optimization',
      'WhatsApp CTA placement',
      'Conversion-focused interaction',
      'Mobile-friendly communication flow',
    ],
  },
  {
    title: 'Google Business Growth',
    price: 'Starting from ₹8,000+',
    icon: MapPinned,
    description:
      'Local visibility optimization focused on improving Google Business presence and customer trust.',
    features: [
      'Google Business optimization',
      'Business profile setup',
      'Local SEO improvement',
      'Google Maps visibility',
      'Review optimization strategy',
      'Business category optimization',
      'Service optimization',
      'Photo optimization guidance',
      'Local ranking improvements',
      'Business credibility enhancement',
    ],
  },
  {
    title: 'SEO & Local Growth',
    price: 'Starting from ₹12,000+',
    icon: Search,
    description:
      'SEO-focused growth strategies designed to improve search visibility, local reach, and organic traffic.',
    features: [
      'Website SEO optimization',
      'Local keyword targeting',
      'SEO content structure',
      'Blog SEO strategy',
      'Google indexing setup',
      'Search visibility improvement',
      'Technical SEO basics',
      'Mobile SEO optimization',
      'Performance optimization',
      'Local search growth strategy',
    ],
  },
  {
    title: 'AI Chatbot Systems',
    price: 'Custom Pricing',
    icon: MessageCircle,
    description:
      'Intelligent chatbot experiences that improve customer interaction and automate communication.',
    features: [
      'AI website chatbot',
      'Customer support automation',
      'Smart visitor interaction',
      'Lead qualification systems',
      'Inquiry handling automation',
      'Business FAQ automation',
      'Website interaction enhancement',
      'WhatsApp chatbot integration',
      'Conversion-focused chatbot flows',
    ],
  },
  {
    title: 'All-in-One Premium Growth System',
    price: 'Custom Premium Pricing',
    icon: Crown,
    featured: true,
    description:
      'A complete digital growth ecosystem combining website, SEO, AI automation, Google Business optimization, and lead generation systems.',
    features: [
      'Premium website',
      'SEO setup',
      'Google Business optimization',
      'WhatsApp integration',
      'AI automation',
      'AI chatbot',
      'Local SEO strategy',
      'Conversion-focused design',
      'Branding optimization',
      'Blog setup',
      'Lead generation system',
      'Mobile optimization',
      'Premium animations',
      'Customer inquiry flow',
      'Business growth consultation',
      'Performance optimization',
      'Ongoing growth strategy',
    ],
  },
  {
    title: 'Custom Business Solution',
    price: 'Tailored Pricing',
    icon: Sparkles,
    description:
      'Custom digital solutions designed specifically around business goals, workflow, services, and growth requirements.',
    features: [
      'Flexible service selection',
      'Custom feature requests',
      'Personalized growth strategy',
      'Scalable business solutions',
      'Industry-specific requirements',
      'Advanced integrations',
      'Long-term digital planning',
    ],
  },
];

export default function Solutions() {
  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="animated-blob absolute left-[8%] top-8 h-64 w-64 rounded-full opacity-50" />
        <div className="animated-blob absolute right-[8%] top-28 h-72 w-72 rounded-full opacity-40" />

        <div className="container-premium relative text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-royal">
            Premium Solutions
          </p>

          <h1 className="mx-auto max-w-5xl text-balance text-4xl font-semibold tracking-tight text-navy md:text-6xl">
            Strategic digital growth solutions for modern businesses
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-muted md:text-lg">
            Choose a focused solution or build a complete growth system with website development,
            AI automation, SEO, Google Business growth, WhatsApp systems, and chatbot experiences.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-premium grid gap-7 lg:grid-cols-2">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <motion.article
                key={solution.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.22, delay: index * 0.015, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -10, scale: 1.01, transition: { duration: 0.1, ease: 'easeOut' } }}
                className={[
                  'group relative overflow-hidden rounded-[2rem] border bg-white p-7 shadow-[0_22px_80px_rgba(7,27,59,0.07)] transition-all duration-150 md:p-8',
                  solution.featured
                    ? 'border-royal/35 shadow-[0_30px_110px_rgba(15,61,145,0.18)]'
                    : 'border-border hover:border-royal/25 hover:shadow-[0_34px_110px_rgba(7,27,59,0.13)]',
                ].join(' ')}
              >
                {solution.featured && (
                  <div className="absolute right-6 top-6 rounded-full bg-navy px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-lg">
                    Most Popular
                  </div>
                )}

                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-sky/70 blur-3xl transition group-hover:bg-royal/15" />

                <div className="relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky text-royal shadow-sm transition duration-150 group-hover:bg-royal group-hover:text-white">
                    <Icon size={24} />
                  </div>

                  <div className="flex flex-col gap-3 pr-0 md:pr-28">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-royal">
                      {solution.price}
                    </p>

                    <h2 className="text-2xl font-semibold tracking-tight text-navy md:text-3xl">
                      {solution.title}
                    </h2>

                    <p className="text-sm leading-7 text-muted">
                      {solution.description}
                    </p>
                  </div>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {solution.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex gap-3 rounded-2xl border border-border bg-[#f8fbff] px-4 py-3 text-sm font-medium text-navy"
                      >
                        <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-royal" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <motion.a
                    href={createWhatsAppLink(solution.title)}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -3, scale: 1.025 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.12, ease: 'easeOut' }}
                    className="mt-8 inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#17479E] via-[#103B84] to-[#071B3B] px-7 text-[0.95rem] font-semibold tracking-[-0.01em] text-white shadow-[0_16px_38px_rgba(7,27,59,0.20)] transition-shadow duration-150 hover:shadow-[0_22px_55px_rgba(7,27,59,0.30)]"
                  >
                    <span className="text-white">Discuss Solution on WhatsApp</span>
                    <ArrowRight size={17} className="text-white" />
                  </motion.a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="container-premium overflow-hidden rounded-[2.25rem] bg-navy p-8 text-center text-white shadow-[0_28px_100px_rgba(7,27,59,0.22)] md:p-16">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-sky">
            <Globe2 size={25} />
          </div>

          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Not sure which solution fits your business?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
            Tell us your business goals on WhatsApp. We’ll help you understand which solution
            makes the most sense for your growth.
          </p>

          <motion.a
            href={createWhatsAppLink('Custom Business Solution')}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -3, scale: 1.025 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.12, ease: 'easeOut' }}
            className="mt-8 inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#17479E] via-[#103B84] to-[#071B3B] px-8 text-[0.95rem] font-semibold tracking-[-0.01em] text-white shadow-[0_16px_38px_rgba(7,27,59,0.20)] transition-shadow duration-150 hover:shadow-[0_22px_55px_rgba(7,27,59,0.30)]"
          >
            <span className="text-white">Get Custom Recommendation</span>
            <ArrowRight size={17} className="text-white" />
          </motion.a>
        </div>
      </section>
    </>
  );
}