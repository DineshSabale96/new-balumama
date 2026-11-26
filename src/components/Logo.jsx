// Original Balumama mark: a stylised bucket over a ground line.
export default function Logo({ className = 'h-10 w-10' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="bm-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fbbf24" />
          <stop offset="1" stopColor="#f97316" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="#071026" />
      <path d="M10 46h44" stroke="url(#bm-grad)" strokeWidth="4" strokeLinecap="round" />
      <path d="M16 38l6-14h20l6 14z" fill="url(#bm-grad)" />
      <path d="M40 24l10-8" stroke="url(#bm-grad)" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}
