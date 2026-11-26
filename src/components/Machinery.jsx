import { useState } from 'react';
import { X, Phone, MessageCircle, CheckCircle2 } from 'lucide-react';
import { machinery } from '../data.js';
import { BUSINESS } from '../config.js';
import ImageWithFallback from './ImageWithFallback.jsx';
import Reveal from './Reveal.jsx';

export default function Machinery() {
  const [active, setActive] = useState(null);

  return (
    <section id="machinery" className="section-pad bg-navy-950">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow">Our Fleet</p>
          <h2 className="heading-xl mt-4">Our Machinery</h2>
          <p className="mt-4 max-w-2xl text-white/70">
            Genuine Poclain and excavation equipment, maintained and ready for your site.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {machinery.map((m, i) => (
            <Reveal key={m.id} delay={i * 100}>
              <article className="card group flex h-full flex-col overflow-hidden hover:-translate-y-2 hover:border-brand-yellow/50 hover:shadow-glow">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={m.image}
                    alt={m.alt}
                    className="transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-3xl font-bold uppercase">{m.name}</h3>
                  <p className="mt-3 text-white/70">{m.description}</p>

                  <dl className="mt-6 grid grid-cols-3 gap-3 border-y border-white/10 py-4">
                    {m.specs.map(([k, v]) => (
                      <div key={k}>
                        <dt className="text-[11px] uppercase tracking-wider text-white/50">{k}</dt>
                        <dd className="mt-1 text-sm font-semibold text-brand-yellow">{v}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-auto grid gap-3 pt-7 sm:grid-cols-2">
                    <button type="button" onClick={() => setActive(m)} className="btn-ghost !py-3">
                      View Details
                    </button>
                    <a href={`tel:${BUSINESS.phoneTel}`} className="btn-primary !py-3">
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      Call for Booking
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="machine-title"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/85 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <div
            className="relative grid max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10 bg-navy-900 shadow-card md:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative min-h-64 md:min-h-full">
              <ImageWithFallback src={active.image} alt={active.alt} loading="eager" />
            </div>
            <div className="p-8">
              <h3 id="machine-title" className="font-display text-3xl font-bold uppercase">
                {active.name}
              </h3>
              <p className="mt-4 text-white/75">{active.description}</p>
              <ul className="mt-6 space-y-3">
                {active.specs.map(([k, v]) => (
                  <li key={k} className="flex items-center justify-between border-b border-white/10 pb-2 text-sm">
                    <span className="flex items-center gap-2 text-white/60">
                      <CheckCircle2 className="h-4 w-4 text-brand-yellow" aria-hidden="true" />
                      {k}
                    </span>
                    <span className="font-semibold">{v}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={`tel:${BUSINESS.phoneTel}`} className="btn-primary flex-1 !py-3">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call for Booking
                </a>
                <a
                  href={`https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(`Hello, I want to book the ${active.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost flex-1 !py-3"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp
                </a>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close details"
              className="absolute right-4 top-4 rounded-full bg-navy-950/80 p-2 text-white hover:text-brand-yellow"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
