"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { asset } from "./content";

/** Fade-and-rise on first entry into the viewport (mirrors the source's Angular animation). */
export function Reveal({
  children,
  delay = 0,
  className = "",
  style,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  as?: "div" | "p" | "h1" | "h2" | "h3" | "h5" | "span";
}) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`cc-reveal${inView ? " is-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}

export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !muted;
    if (v.paused) void v.play();
    setMuted(!muted);
  };

  return (
    <>
      <video
        ref={ref}
        className="cc-hero__video"
        autoPlay
        muted
        loop
        playsInline
        poster={asset("sliders/video_cover2.jpg")}
      >
        <source src={asset("sliders/video_web.webm")} type="video/webm" />
        Su navegador no soporta video HTML5.
      </video>
      <button
        type="button"
        className="cc-hero__sound"
        aria-label={muted ? "Activar sonido" : "Silenciar"}
        onClick={toggle}
      >
        <span className="mi" aria-hidden>{muted ? "volume_up" : "volume_off"}</span>
      </button>
    </>
  );
}
