# kaampo.com — page brief

Source: https://www.kaampo.com/ (Angular SPA, redirects to `/home`; content lives in a perfect-scrollbar container, language picked from browser locale — cloned in Spanish).

## Route map
| Source | Local | Files |
| --- | --- | --- |
| `/` → `/home` | `/` | `src/app/page.tsx`, `src/components/sites/kaampo/*`, `public/sites/kaampo/*` |

Nav/footer links to other source pages (`/home/software-agricola`, `/home/cuaderno-de-campo-digital`, `/home/certificacion`, `/kit_digital`, legal pages) stay pointed at www.kaampo.com.

## Sections (desktop 1440 y-offsets, all matched ±1px)
hero video 0 (810) · slogan 810 · audience 1273 (hidden <960) · 4-colour band 1855 (hidden <960) · interoperability 2706 · certificaciones 3485 · productividad 4224 · costes 4919 · clientes 5755 · cuaderno/kit digital 6895 (hidden <960) · banner 7683 · smart hub 8492 · productos + contacto 9187 · footer 11759 (hidden <960).

## Type & colour
Archivo 400–700 (body 14px; body copy 19.6/35.28, 2px tracking, weight 300 → renders 400), Roboto 300–900 for headings, Poppins requested but never loaded (falls back to sans-serif), Material Icons. Navy #090d33, blue #004a71, green #00c853, muted #78909c.

## Behaviour
- Fixed nav with slide-down; language menu (6 options); hamburger menu <960.
- Hero webm video, muted autoplay, sound toggle; floating phone (3s ease-in-out 15px).
- Fade-up reveal (opacity 0, translateY 40px) on entering the viewport.
- "Contacto / Más información / Cuéntanos tu caso" → contact dialog. "Prueba gratis / Comenzar ahora" → right login drawer that flips to the sign-up form.
