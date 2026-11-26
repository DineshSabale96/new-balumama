import { Phone, Mail, MessageCircle, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import Logo from './Logo.jsx';
import { BUSINESS } from '../config.js';

const quick = [
  ['Home', '#home'],
  ['About Us', '#about'],
  ['Our Services', '#services'],
  ['Machinery', '#machinery'],
  ['Gallery', '#gallery'],
  ['Contact Us', '#contact'],
];

const socials = [
  { key: 'facebook', Icon: Facebook, label: 'Facebook' },
  { key: 'instagram', Icon: Instagram, label: 'Instagram' },
  { key: 'youtube', Icon: Youtube, label: 'YouTube' },
  { key: 'linkedin', Icon: Linkedin, label: 'LinkedIn' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const activeSocials = socials.filter((s) => BUSINESS.social[s.key]);

  return (
    <footer className="border-t border-white/10 bg-navy-950">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:px-16">
        <div>
          <a href="#home" className="flex items-center gap-3">
            <Logo className="h-12 w-12" />
            <span className="font-display text-xl font-extrabold uppercase leading-none">
              Balumama
              <span className="block text-xs tracking-[0.3em] text-brand-yellow">Earthmovers</span>
            </span>
          </a>
          <p className="mt-5 max-w-xs text-sm text-white/60">{BUSINESS.tagline}</p>
          {activeSocials.length > 0 && (
            <div className="mt-6 flex gap-3">
              {activeSocials.map(({ key, Icon, label }) => (
                <a
                  key={key}
                  href={BUSINESS.social[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="rounded-full border border-white/15 p-2.5 transition hover:-translate-y-0.5 hover:border-brand-yellow hover:text-brand-yellow"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          )}
        </div>

        <div>
          <h4 className="font-display text-lg font-bold uppercase tracking-wider text-brand-yellow">Quick Links</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {quick.map(([label, href]) => (
              <li key={href}>
                <a href={href} className="text-white/70 transition hover:text-brand-yellow">{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-bold uppercase tracking-wider text-brand-yellow">Our Services</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li>Well Digging (35–50 ft, no ramp)</li>
            <li>Excavation Work</li>
            <li>Rock Breaking</li>
            <li>Land Development</li>
            <li>Heavy Machinery Rental</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-bold uppercase tracking-wider text-brand-yellow">Contact</h4>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-brand-yellow" aria-hidden="true" />
              <a href={`tel:${BUSINESS.phoneTel}`} className="hover:text-brand-yellow">{BUSINESS.phoneDisplay}</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-brand-yellow" aria-hidden="true" />
              <a href={`mailto:${BUSINESS.email}`} className="break-all hover:text-brand-yellow">{BUSINESS.email}</a>
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle className="h-4 w-4 text-brand-yellow" aria-hidden="true" />
              <a href={`https://wa.me/${BUSINESS.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow">WhatsApp us</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-white/50 sm:flex-row sm:px-8 lg:px-16">
          <p>© {year} {BUSINESS.name}. All rights reserved.</p>
          <p>Owner: {BUSINESS.owner}</p>
        </div>
      </div>
    </footer>
  );
}
