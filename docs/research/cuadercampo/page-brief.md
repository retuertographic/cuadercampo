# CuaderCampo — home page brief

Dominio: https://cuadercampo.com · Ruta: `/` · Código: `src/components/sites/cuadercampo/` · Recursos: `public/sites/cuadercampo/`.

La maqueta parte de una réplica de la estructura de www.kaampo.com, adaptada a la marca CuaderCampo.

## Rutas
| Ruta | Contenido |
| --- | --- |
| `/` | Página principal |
| `/legal/[slug]` | Términos y servicios, Política de cookies, Compromiso de igualdad, Transparencia (texto pendiente) |
| `/robots.txt`, `/sitemap.xml` | Generados con el dominio cuadercampo.com |

Menú: Inicio `/`, Productos `#productos`, Cuaderno de campo `#cuaderno-de-campo`, Certificación `#certificaciones`, Kit Digital `#kit-digital`.

## Marca
Según `CuaderCampo — marca` (PDF/HTML de referencia):
- Logotipo: símbolo (cuaderno abierto con brote, `logo.tsx`) + "Cuader" en DM Sans 800 + "Campo" en Dancing Script 700. Eslogan: "Tu cuaderno de campo, *siempre al día*". Favicon: `src/app/icon.svg`.
- Paleta Huerta: Bosque #234B2C (principal), Salvia #DCE5D0, Crema #F3F1E7 (fondo), Terracota #8A3B1E (avisos), Brote #7FA35E, Agua #DCE9E6, Trigo #F1E7CC, Tierra #1E2A1F (texto); bordes #E2DFD0. Variables `--cc-*` en `cuadercampo.css`.
- Tipografía: DM Sans para todo (títulos 800, botones 700, texto 400–500, mínimo 14 px); Dancing Script solo para acentos (logo, saludo, eslogan), nunca en botones ni formularios.
- Botones con radio 14 px; tarjetas con radio 24–28 px.

## Despliegue
GitHub Pages con exportación estática (`output: "export"`), workflow `.github/workflows/deploy-pages.yml`. `NEXT_PUBLIC_BASE_PATH` lo fija `actions/configure-pages`: vacío con el dominio cuadercampo.com y `/cuadercampo` sin él.

## Pendiente antes de publicar
- Datos de contacto: los de `CONTACT` en `content.ts` son **ficticios**.
- Textos legales de `/legal/*`.
- Acceso/registro: el panel de login muestra un aviso; falta conectarlo a la plataforma real.
- Formulario de contacto: abre el correo del visitante (mailto a contacto@cuadercampo.com); falta un backend.
- Recursos heredados del sitio de referencia que hay que sustituir por material propio: capturas de la app (`landpage/movil*.jpg`, `image3-6.png`, `app-movil.png`, que muestran el logo de Kaampo), vídeo del hero, fotografías y textos de marketing. Las insignias de Google Play / App Store anuncian la app como "próximamente".
