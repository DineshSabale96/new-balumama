import { ArrowDown, Phone } from 'lucide-react';
import { BUSINESS } from '../config.js';

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-navy-900">
      <img
        src="/images/hero.jpg"
        alt="Poclain excavator working at a construction site"
        width={1920}
        height={1080}
        onError={(e) => {
          console.warn('[image] Failed to load "/images/hero.jpg". Add the file to public/images/.');
          e.currentTarget.style.display = 'none';
        }}
        className="absolute inset-0 h-full w-full scale-105 object-cover animate-kenburns"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-navy-950/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #fbbf24 0 2px, transparent 2px 28px)',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-24 pt-32 sm:px-8 lg:px-16">
        <div className="max-w-3xl">
          <p className="eyebrow animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="h-px w-10 bg-brand-yellow" />
            {BUSINESS.category}
          </p>
          <h1
            className="mt-6 font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight animate-fade-up sm:text-6xl lg:text-7xl"
            style={{ animationDelay: '0.25s' }}
          >
            Powering Your Projects with{' '}
            <span className="bg-gradient-to-r from-brand-yellow to-brand-orange bg-clip-text text-transparent">
              Heavy Machinery
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/75 animate-fade-up sm:text-xl" style={{ animationDelay: '0.4s' }}>
            Reliable Excavation, Well Digging and Heavy Equipment Services with Professional Operators.
          </p>
          <div className="mt-10 flex flex-col gap-4 animate-fade-up sm:flex-row" style={{ animationDelay: '0.55s' }}>
            <a href="#services" className="btn-primary">
              Explore Our Services
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href={`tel:${BUSINESS.phoneTel}`} className="btn-ghost">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Now
            </a>
          </div>
        </div>
      </div>

      <a
        href="#stats"
        aria-label="Scroll to statistics"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 rounded-full border border-white/20 p-3 text-white/70 transition hover:text-brand-yellow md:block"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
