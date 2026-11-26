import * as Icons from 'lucide-react';
import { features } from '../data.js';
import Reveal from './Reveal.jsx';

export default function WhyUs() {
  return (
    <section id="about" className="section-pad relative overflow-hidden bg-navy-950">
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-brand-orange/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <Reveal>
            <p className="eyebrow">About Balumama Earthmovers</p>
            <h2 className="heading-xl mt-4">Why Choose Balumama Earthmovers?</h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-lg text-white/70">
              Balumama Earthmovers provides excavators, Poclain machines and hydraulic breakers for well digging,
              excavation and land development. Every job is run by experienced operators who put safety, accuracy
              and your schedule first.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = Icons[f.icon] || Icons.Star;
            return (
              <Reveal key={f.title} delay={(i % 3) * 100}>
                <div className="card h-full p-8 hover:-translate-y-1 hover:border-brand-yellow/40">
                  <Icon className="h-10 w-10 text-brand-yellow" aria-hidden="true" />
                  <h3 className="mt-6 font-display text-2xl font-bold uppercase">{f.title}</h3>
                  <p className="mt-3 text-white/65">{f.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
