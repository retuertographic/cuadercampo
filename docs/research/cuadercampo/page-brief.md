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
Logo en `logo.tsx` (cuaderno abierto con surcos y brote, palabra "cuader**campo**"), favicon `src/app/icon.svg`. Colores: navy #090d33, azul #004a71, verde #00c853. Tipografías: Archivo, Roboto, Poppins 300, Material Icons.

## Pendiente antes de publicar
- Datos de contacto: los de `CONTACT` en `content.ts` son **ficticios**.
- Textos legales de `/legal/*`.
- Acceso/registro: el panel de login muestra un aviso; falta conectarlo a la plataforma real.
- Formulario de contacto: abre el correo del visitante (mailto a contacto@cuadercampo.com); falta un backend.
- Recursos heredados del sitio de referencia que hay que sustituir por material propio: capturas de la app (`landpage/movil*.jpg`, `image3-6.png`, `app-movil.png`, que muestran el logo de Kaampo), vídeo del hero, fotografías y textos de marketing. Las insignias de Google Play / App Store anuncian la app como "próximamente".
