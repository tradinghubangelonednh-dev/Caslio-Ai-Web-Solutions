import { motion } from 'framer-motion';

const clientBrands = [
  'DAAZLY',
  'PITANGA FOODS',
  'PHD LAB',
  'URBANSPHERE CORPORATE',
  'NEXORA GROUP',
  'VELORA ENTERPRISES',
  'ZENITH CORPORATE',
  'AURIX SOLUTIONS',
  'BLUEPEAK CONSULTING',
  'RESTAURANTS & CAFES',
  'HEALTHCARE BRANDS',
  'DENTAL CLINICS',
  'LOCAL BUSINESSES',
  'LUXURY SALONS',
  'FITNESS STUDIOS',
  'REAL ESTATE GROUPS',
  'CORPORATE OFFICES',
  'RETAIL BUSINESSES',
  'E-COMMERCE BRANDS',
  'HOSPITALITY BRANDS',
];

export default function ClientBrandTicker() {
  return (
    <section className="px-4 pb-24">
      <div className="container-premium">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-white py-8 shadow-[0_22px_80px_rgba(7,27,59,0.07)]">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-white to-transparent" />

          <div className="mb-7 px-5 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-royal">
              Brands & Industries We Serve
            </p>

            <h2 className="mx-auto mt-3 max-w-3xl text-balance text-2xl font-semibold tracking-tight text-navy md:text-3xl">
              Trusted by growing businesses across multiple sectors
            </h2>
          </div>

          <div className="relative flex overflow-hidden">
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 38, repeat: Infinity, ease: 'linear' }}
              className="flex min-w-max gap-4 pr-4"
            >
              {[...clientBrands, ...clientBrands].map((brand, index) => (
                <div
                  key={`${brand}-${index}`}
                 className="flex h-12 min-w-max items-center justify-center rounded-full border border-white/10 bg-[rgba(7,27,59,0.92)] px-6 text-[13px] font-semibold tracking-[0.18em] text-white shadow-[0_18px_46px_rgba(0,0,0,0.18)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-[rgba(15,61,145,0.96)] hover:shadow-[0_24px_68px_rgba(15,61,145,0.32)]"
                >
                  {brand}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}