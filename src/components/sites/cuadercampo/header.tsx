"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "./content";
import { Logo } from "./logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="cc-nav" ref={ref}>
      <Link href="/" aria-label="CuaderCampo, inicio" className="cc-nav__home">
        <Logo />
      </Link>
      <span className="cc-nav__spacer" />
      <nav className="cc-nav__links" aria-label="Principal">
        {NAV_LINKS.map((l) => (
          <Link key={l.label} className="cc-navbtn" href={l.href}>
            {l.label}
          </Link>
        ))}
      </nav>
      <span className="cc-nav__spacer" />
      <span className="cc-nav__balance" aria-hidden />
      <button
        type="button"
        className="cc-iconbtn cc-nav__burger"
        aria-label="Menú"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="mi" aria-hidden>{open ? "close" : "menu"}</span>
      </button>

      {open && (
        <div className="cc-menu" role="menu">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              role="menuitem"
              className="cc-menu__item"
              href={l.href}
              onClick={() => setOpen(false)}
            >
              <span className="mi" aria-hidden>chevron_right</span>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
