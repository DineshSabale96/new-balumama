import { useState } from 'react';
import { Phone, Mail, MapPin, User, MessageCircle, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { BUSINESS } from '../config.js';
import { serviceOptions } from '../data.js';
import Reveal from './Reveal.jsx';

const empty = { name: '', mobile: '', location: '', service: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', text: '' });
  const [sending, setSending] = useState(false);

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(BUSINESS.mapQuery)}&output=embed`;

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!/^[+]?[0-9\s-]{10,15}$/.test(form.mobile.trim())) e.mobile = 'Enter a valid mobile number.';
    if (!form.location.trim()) e.location = 'Please enter your project location.';
    if (!form.service) e.service = 'Please select a service.';
    if (form.message.trim().length < 5) e.message = 'Please describe your requirement.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: undefined });
  };

  const buildMessage = () =>
    `Hello ${BUSINESS.name},\n\nName: ${form.name}\nMobile: ${form.mobile}\nLocation: ${form.location}\nService: ${form.service}\n\n${form.message}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', text: '' });
    if (!validate()) return;

    if (BUSINESS.formEndpoint) {
      setSending(true);
      try {
        const res = await fetch(BUSINESS.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ ...form, _subject: `New enquiry from ${form.name}` }),
        });
        if (!res.ok) throw new Error('Request failed');
        setStatus({ type: 'success', text: 'Thank you! Your enquiry has been sent. We will contact you shortly.' });
        setForm(empty);
      } catch {
        setStatus({ type: 'error', text: `Could not send right now. Please call ${BUSINESS.phoneDisplay} or use WhatsApp.` });
      } finally {
        setSending(false);
      }
      return;
    }

    // No backend configured: open WhatsApp with the enquiry pre-filled.
    const url = `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(buildMessage())}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setStatus({ type: 'success', text: 'WhatsApp opened with your enquiry. Press send there to reach us.' });
    setForm(empty);
  };

  const field = (name) =>
    `w-full rounded-2xl border bg-navy-950/60 px-4 py-3.5 text-white placeholder-white/35 outline-none transition focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/30 ${
      errors[name] ? 'border-red-500' : 'border-white/15'
    }`;

  return (
    <section id="contact" className="section-pad bg-navy-900">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow">Get In Touch</p>
          <h2 className="heading-xl mt-4">Let&apos;s Start Your Next Project</h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="card h-full p-8">
              <h3 className="font-display text-3xl font-bold uppercase text-brand-yellow">{BUSINESS.name}</h3>
              <ul className="mt-8 space-y-6">
                <li className="flex gap-4">
                  <User className="mt-1 h-5 w-5 shrink-0 text-brand-yellow" aria-hidden="true" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/50">Contact Person</p>
                    <p className="font-semibold">{BUSINESS.owner}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-brand-yellow" aria-hidden="true" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/50">Mobile</p>
                    <a href={`tel:${BUSINESS.phoneTel}`} className="font-semibold hover:text-brand-yellow">{BUSINESS.phoneDisplay}</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-brand-yellow" aria-hidden="true" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/50">Email</p>
                    <a href={`mailto:${BUSINESS.email}`} className="break-all font-semibold hover:text-brand-yellow">{BUSINESS.email}</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-yellow" aria-hidden="true" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/50">Location</p>
                    <p className="font-semibold">{BUSINESS.address}</p>
                  </div>
                </li>
              </ul>

              <a
                href={`https://wa.me/${BUSINESS.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:brightness-110"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-3">
            <form onSubmit={handleSubmit} noValidate className="card space-y-5 p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/80">Name *</label>
                  <input id="name" name="name" value={form.name} onChange={handleChange} className={field('name')} placeholder="Your full name" autoComplete="name" />
                  {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="mobile" className="mb-2 block text-sm font-medium text-white/80">Mobile *</label>
                  <input id="mobile" name="mobile" type="tel" value={form.mobile} onChange={handleChange} className={field('mobile')} placeholder="+91 XXXXX XXXXX" autoComplete="tel" />
                  {errors.mobile && <p className="mt-1.5 text-xs text-red-400">{errors.mobile}</p>}
                </div>
                <div>
                  <label htmlFor="location" className="mb-2 block text-sm font-medium text-white/80">Project Location *</label>
                  <input id="location" name="location" value={form.location} onChange={handleChange} className={field('location')} placeholder="Village / City, District" />
                  {errors.location && <p className="mt-1.5 text-xs text-red-400">{errors.location}</p>}
                </div>
                <div>
                  <label htmlFor="service" className="mb-2 block text-sm font-medium text-white/80">Required Service *</label>
                  <select id="service" name="service" value={form.service} onChange={handleChange} className={`${field('service')} appearance-none`}>
                    <option value="" className="bg-navy-900">Select a service</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s} className="bg-navy-900">{s}</option>
                    ))}
                  </select>
                  {errors.service && <p className="mt-1.5 text-xs text-red-400">{errors.service}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/80">Message *</label>
                <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} className={field('message')} placeholder="Tell us about your project, depth, timeline, etc." />
                {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
              </div>

              {status.text && (
                <div role="status" className={`flex items-start gap-3 rounded-2xl p-4 text-sm ${status.type === 'success' ? 'bg-emerald-500/15 text-emerald-300' : 'bg-red-500/15 text-red-300'}`}>
                  {status.type === 'success' ? <CheckCircle2 className="h-5 w-5 shrink-0" /> : <AlertCircle className="h-5 w-5 shrink-0" />}
                  {status.text}
                </div>
              )}

              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <button type="submit" disabled={sending} className="btn-primary flex-1 disabled:cursor-not-allowed disabled:opacity-60">
                  <Send className="h-4 w-4" aria-hidden="true" />
                  {sending ? 'Sending...' : 'Submit Enquiry'}
                </button>
                <a href={`https://wa.me/${BUSINESS.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="btn-ghost flex-1">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp
                </a>
              </div>
            </form>
          </Reveal>
        </div>

        <Reveal className="mt-10">
          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-card">
            <iframe
              title={`${BUSINESS.name} location on Google Maps`}
              src={mapSrc}
              className="h-80 w-full grayscale-[30%] invert-[5%] sm:h-96"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
