import { useState } from 'react';
import { HardHat } from 'lucide-react';

// Renders an image from /public. If it fails, tries an optional fallbackSrc once,
// then shows a branded panel so the layout never breaks. Failures are logged to the console.
export default function ImageWithFallback({
  src,
  alt,
  fallbackSrc,
  width,
  height,
  className = '',
  imgClassName = '',
  loading = 'lazy',
}) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [failed, setFailed] = useState(false);

  const handleError = () => {
    console.warn(`[image] Failed to load "${currentSrc}". Check that the file exists in public/images/.`);
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else {
      setFailed(true);
    }
  };

  if (failed || !currentSrc) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex h-full w-full items-center justify-center bg-gradient-to-br from-navy-700 via-navy-800 to-navy-950 ${className}`}
      >
        <HardHat className="h-16 w-16 text-brand-yellow/40" aria-hidden="true" />
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
      onError={handleError}
      className={`h-full w-full object-cover ${imgClassName} ${className}`}
    />
  );
}
