import { useState } from 'react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

export function SafeImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#EBE3D5] to-[#DFD3C0] dark:from-[#2B231F] dark:to-[#1E1815] text-[#6B574C] dark:text-[#B8A89A] p-4 text-center ${className}`}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="mb-2 opacity-60"
          aria-hidden="true"
        >
          <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z" />
          <path d="M8 14v.5" />
          <path d="M16 14v.5" />
          <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
        </svg>
        <span className="text-xs font-medium line-clamp-2 max-w-[180px]">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
