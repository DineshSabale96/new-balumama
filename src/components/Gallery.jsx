import { useEffect, useCallback, useState } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { gallery } from '../data.js';
import ImageWithFallback from './ImageWithFallback.jsx';
import Reveal from './Reveal.jsx';

export default function Gallery() {
  const [index, setIndex] = useState(null);
  const count = gallery.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);
  const close = () => setIndex(null);

  useEffect(() => {
    if (index === null) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [index, next, prev]);

  const current = index !== null ? gallery[index] : null;

  return (
    <section id="gallery" className="section-pad bg-navy-900">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow">Our Work</p>
          <h2 className="heading-xl mt-4">Our Work Gallery</h2>
        </Reveal>

        <div className="mt-14 grid auto-rows-[240px] grid-cols-2 gap-4 md:grid-cols-3">
          {gallery.map((g, i) => (
            <Reveal key={g.src} delay={(i % 3) * 80} className={i === 0 ? 'md:row-span-2' : ''}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Open photo: ${g.label}`}
                className="group relative h-full w-full overflow-hidden rounded-3xl border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
              >
                <ImageWithFallback src={g.src} alt={g.alt} className="transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/10 to-transparent opacity-80 transition group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
                  <span className="font-display text-xl font-bold uppercase tracking-wide">{g.label}</span>
                  <ZoomIn className="h-6 w-6 translate-y-2 text-brand-yellow opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100" aria-hidden="true" />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Gallery: ${current.label}`}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-950/95 p-4 backdrop-blur-md"
          onClick={close}
        >
          <button type="button" onClick={close} aria-label="Close gallery" className="absolute right-5 top-5 rounded-full border border-white/20 p-2.5 hover:text-brand-yellow">
            <X className="h-6 w-6" />
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous photo" className="absolute left-3 rounded-full border border-white/20 p-3 hover:text-brand-yellow sm:left-6">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <figure className="max-h-full w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <div className="aspect-video overflow-hidden rounded-2xl border border-white/10">
              <ImageWithFallback src={current.src} alt={current.alt} loading="eager" />
            </div>
            <figcaption className="mt-4 text-center font-display text-2xl font-bold uppercase">
              {current.label}
              <span className="ml-3 text-sm text-white/50">
                {index + 1} / {count}
              </span>
            </figcaption>
          </figure>
          <button type="button" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next photo" className="absolute right-3 rounded-full border border-white/20 p-3 hover:text-brand-yellow sm:right-6">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
}
