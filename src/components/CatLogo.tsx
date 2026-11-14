interface CatLogoProps {
  className?: string;
  showWordmark?: boolean;
}

export function CatLogo({ className = '', showWordmark = true }: CatLogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect
          width="36"
          height="36"
          rx="10"
          className="fill-[#D96B27] dark:fill-[#EA823E]"
        />
        <path
          d="M10.5 14.2L9.5 8.2C9.4 7.6 10.1 7.2 10.6 7.5L15.1 10.5C16.0 10.2 17.0 10.0 18.0 10.0C19.0 10.0 20.0 10.2 20.9 10.5L25.4 7.5C25.9 7.2 26.6 7.6 26.5 8.2L25.5 14.2C26.4 15.6 27.0 17.3 27.0 19.1C27.0 24.1 23.0 27.5 18.0 27.5C13.0 27.5 9.0 24.1 9.0 19.1C9.0 17.3 9.6 15.6 10.5 14.2Z"
          fill="#FAF7F2"
        />
        <circle cx="14.4" cy="18.4" r="1.4" fill="#2C221E" />
        <circle cx="21.6" cy="18.4" r="1.4" fill="#2C221E" />
        <path
          d="M16.7 21.4L18.0 22.7L19.3 21.4H16.7Z"
          fill="#D96B27"
        />
        <path
          d="M15.4 24.1C16.2 24.7 17.1 24.8 18.0 24.0C18.9 24.8 19.8 24.7 20.6 24.1"
          stroke="#2C221E"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
      {showWordmark && (
        <span className="font-serif text-lg sm:text-xl font-semibold tracking-tight text-[#2C221E] dark:text-[#F5EFE6] whitespace-nowrap">
          CAT WORLD
        </span>
      )}
    </span>
  );
}
