/** Símbolo CuaderCampo: cuaderno abierto con un brote (registro y campo). */
export function LogoMark({
  size = 48,
  className,
  detail = true,
}: {
  size?: number;
  className?: string;
  /** Furrow lines and second leaf; drop them at small sizes. */
  detail?: boolean;
}) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 96 96" aria-hidden="true">
      <rect width="96" height="96" rx="26" fill="#234B2C" />
      <path d="M20 66c9-4 19-4 28 2 9-6 19-6 28-2V30c-9-4-19-4-28 2-9-6-19-6-28-2z" fill="#F3F1E7" />
      <path d="M48 32v36" stroke="#234B2C" strokeWidth="3" strokeLinecap="round" />
      <path d="M48 50c0-11 7-18 17-19 0 11-7 18-17 19z" fill="#7FA35E" />
      {detail && (
        <>
          <path d="M48 56c0-8-5-13-13-14 0 8 5 13 13 14z" fill="#A9C48A" />
          <path
            d="M27 58c7-2 13-2 18 1M51 59c5-3 11-3 18-1"
            stroke="#C9BFA6"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        </>
      )}
    </svg>
  );
}

/** Wordmark: "Cuader" en DM Sans 800 + "Campo" en Dancing Script. */
export function Wordmark() {
  return (
    <span className="cc-logo__word">
      Cuader<span className="cc-logo__accent">Campo</span>
    </span>
  );
}

export function Logo({ tone = "light", className = "" }: { tone?: "light" | "dark"; className?: string }) {
  return (
    <span className={`cc-logo cc-logo--${tone} ${className}`}>
      <LogoMark className="cc-logo__mark" />
      <Wordmark />
    </span>
  );
}
