import * as Icons from 'lucide-react';
import { services, specialService } from '../data.js';
import { BUSINESS } from '../config.js';
import ImageWithFallback from './ImageWithFallback.jsx';
import Reveal from './Reveal.jsx';

export default function Services() {
  return (
    <section id="services" className="section-pad bg-navy-900">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow">What We Do</p>
          <h2 className="heading-xl mt-4">Our Services</h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = Icons[s.icon] || Icons.Wrench;
            return (
              <Reveal key={s.title} delay={(i % 4) * 80}>
                <div className="card group h-full p-7 hover:-translate-y-1 hover:border-brand-yellow/40">
                  <div className="mb-5 inline-flex rounded-2xl bg-brand-yellow/10 p-3 text-brand-yellow transition group-hover:bg-brand-yellow group-hover:text-navy-900">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-2xl font-bold uppercase">{s.title}</h3>
                  <p className="mt-3 text-sm text-white/65">{s.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-20">
          <div className="grid overflow-hidden rounded-[2rem] border border-brand-yellow/30 bg-navy-800 shadow-card lg:grid-cols-2">
            <div className="relative min-h-72 lg:min-h-full">
              <ImageWithFallback src={specialService.image} alt={specialService.alt} />
              <span className="absolute left-5 top-5 rounded-full bg-brand-orange px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-navy-950">
                Special Service
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <p className="font-display text-lg font-semibold uppercase tracking-[0.2em] text-brand-yellow">
                {specialService.range}
              </p>
              <h3 className="mt-3 font-display text-4xl font-extrabold uppercase leading-none sm:text-5xl">
                {specialService.title}
              </h3>
              <p className="mt-5 text-white/75">{specialService.text}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {specialService.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-white/85">
                    <Icons.CheckCircle2 className="h-4 w-4 shrink-0 text-brand-orange" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
              <a href={`tel:${BUSINESS.phoneTel}`} className="btn-primary mt-10 self-start">
                <Icons.Phone className="h-4 w-4" aria-hidden="true" />
                Book Well Digging
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
