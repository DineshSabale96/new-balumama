import { stats } from '../data.js';
import Counter from './Counter.jsx';
import Reveal from './Reveal.jsx';

export default function Stats() {
  return (
    <section id="stats" className="relative border-y border-white/10 bg-navy-900">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-white/10 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 120} className="bg-navy-900 px-6 py-12 text-center">
            <p className="font-display text-5xl font-extrabold text-brand-yellow sm:text-6xl">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-white/65">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
