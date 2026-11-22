/** CuaderCampo mark: an open field notebook whose pages are furrows, with a sprouting leaf. */
export function LogoMark({ size = 48, className }: { size?: number; className?: string }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <rect x="1.5" y="1.5" width="45" height="45" rx="9" stroke="currentColor" strokeWidth="3" />
      <path
        d="M24 15.5c-3.6-2.2-8.4-2.6-13 -1.2v19.2c4.6-1.4 9.4-1 13 1.2 3.6-2.2 8.4-2.6 13-1.2V14.3c-4.6-1.4-9.4-1-13 1.2Z"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path d="M24 15.5v19.2" stroke="currentColor" strokeWidth="2.6" />
      <path
        d="M14.5 21.5c2.6-.6 5.2-.4 7 .5M14.5 26.5c2.6-.6 5.2-.4 7 .5M26.5 22c1.8-.9 4.4-1.1 7-.5M26.5 27c1.8-.9 4.4-1.1 7-.5"
        stroke="#00c853"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M24 13.2c0-3.6 2.6-6.4 6.6-6.7.2 4-2.5 6.8-6.6 6.7Z"
        fill="#00c853"
      />
    </svg>
  );
}

export function Logo({ tone = "light", className = "" }: { tone?: "light" | "dark"; className?: string }) {
  return (
    <span className={`cc-logo cc-logo--${tone} ${className}`}>
      <LogoMark className="cc-logo__mark" />
      <span className="cc-logo__word">
        cuader<span className="cc-logo__accent">campo</span>
      </span>
    </span>
  );
}
