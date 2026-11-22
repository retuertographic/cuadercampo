"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { asset, LANGUAGES, NAV_LINKS } from "./content";

type Menu = "none" | "lang" | "nav";

export function Header() {
  const [menu, setMenu] = useState<Menu>("none");
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (menu === "none") return;
    const onDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setMenu("none");
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenu("none");
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [menu]);

  const toggle = (m: Menu) => setMenu((cur) => (cur === m ? "none" : m));
  const current = LANGUAGES[0];

  return (
    <header className="kp-nav" ref={ref}>
      <Link href="/" aria-label="Kaampo, inicio">
        <img className="kp-nav__logo" src={asset("mainlogo.png")} alt="Kaampo" width={168} height={60} />
      </Link>
      <span className="kp-nav__spacer" />
      <nav className="kp-nav__links" aria-label="Principal">
        {NAV_LINKS.map((l) => (
          <a key={l.label} className="kp-navbtn" href={l.href}>
            {l.label}
          </a>
        ))}
      </nav>
      <span className="kp-nav__spacer" />
      <button
        type="button"
        className="kp-navbtn kp-nav__lang"
        aria-haspopup="menu"
        aria-expanded={menu === "lang"}
        onClick={() => toggle("lang")}
      >
        <img className="kp-navbtn__flag" src={asset(current.flag)} alt="" width={30} height={20} />
        {current.label}
      </button>
      <button
        type="button"
        className="kp-iconbtn kp-nav__burger"
        aria-label="Menú"
        aria-haspopup="menu"
        aria-expanded={menu === "nav"}
        onClick={() => toggle("nav")}
      >
        <span className="mi" aria-hidden>menu</span>
      </button>

      {menu === "lang" && (
        <div className="kp-menu kp-menu--lang" role="menu">
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              type="button"
              role="menuitemradio"
              aria-checked={l.code === current.code}
              aria-disabled={l.code !== current.code}
              title={l.code === current.code ? undefined : "Este clon solo incluye la versión en español"}
              className="kp-menu__item"
              onClick={() => setMenu("none")}
            >
              <img src={asset(l.flag)} alt="" width={30} height={20} />
              {l.label}
            </button>
          ))}
        </div>
      )}
      {menu === "nav" && (
        <div className="kp-menu" role="menu">
          {NAV_LINKS.map((l) => (
            <a key={l.label} role="menuitem" className="kp-menu__item" href={l.href} onClick={() => setMenu("none")}>
              <span className="mi" aria-hidden>chevron_right</span>
              <span style={{ textTransform: l.label === "KIT DIGITAL" ? "none" : "capitalize" }}>
                {l.label}
              </span>
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
