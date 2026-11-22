# CuaderCampo

Web de **CuaderCampo** (https://cuadercampo.com): cuaderno de campo digital y software de gestión agrícola.

Next.js 16 (App Router) · React 19 · TypeScript · CSS propio con prefijo `cc-`.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run check    # lint + typecheck + build
```

## Estructura

- `src/app/` — rutas (`/`, `/legal/[slug]`, `robots.ts`, `sitemap.ts`, `icon.svg`)
- `src/components/sites/cuadercampo/` — componentes, contenido (`content.ts`), logo y estilos
- `public/sites/cuadercampo/` — imágenes y vídeo
- `docs/research/cuadercampo/page-brief.md` — resumen de la página y tareas pendientes antes de publicar

Base generada con [ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) (MIT).
