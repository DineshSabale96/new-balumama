import { steps } from '../data.js';
import Reveal from './Reveal.jsx';

export default function HowItWorks() {
  return (
    <section className="section-pad relative bg-navy-950">
      <div className="mx-auto max-w-7xl">
        <Reveal className="text-center">
          <p className="eyebrow justify-center">Simple Process</p>
          <h2 className="heading-xl mt-4">How It Works</h2>
        </Reveal>

        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          <div className="absolute left-[16%] right-[16%] top-10 hidden h-px bg-gradient-to-r from-transparent via-brand-yellow/50 to-transparent md:block" />
          {steps.map((s, i) => (
            <Reveal key={s.no} delay={i * 150} className="relative text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand-yellow to-brand-orange font-display text-3xl font-extrabold text-navy-900 shadow-glow">
                {s.no}
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold uppercase">{s.title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-white/65">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
