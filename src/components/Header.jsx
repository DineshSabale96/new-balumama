import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo.jsx';
import { BUSINESS } from '../config.js';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Machinery', href: '#machinery' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'bg-navy-950/90 shadow-card backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Main">
        <a href="#home" className="flex items-center gap-3" onClick={close} aria-label={`${BUSINESS.name} home`}>
          <Logo className="h-11 w-11" />
          <span className="font-display text-xl font-extrabold uppercase leading-none tracking-wide">
            Balumama
            <span className="block text-xs tracking-[0.3em] text-brand-yellow">Earthmovers</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative font-medium text-white/80 transition hover:text-white"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-brand-yellow transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href={`tel:${BUSINESS.phoneTel}`} className="btn-primary hidden !px-5 !py-2.5 sm:inline-flex">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call Now
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="rounded-full border border-white/20 p-2.5 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden bg-navy-950/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open ? 'max-h-[80vh] border-t border-white/10' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={close} className="block rounded-xl px-4 py-3 font-medium hover:bg-white/5 hover:text-brand-yellow">
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <a href={`tel:${BUSINESS.phoneTel}`} className="btn-primary w-full">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
