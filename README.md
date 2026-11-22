# CuaderCampo

Web de **CuaderCampo** (https://cuadercampo.com) — *Tu cuaderno de campo, siempre al día*.

Next.js 16 (App Router, exportación estática) · React 19 · TypeScript · CSS propio con prefijo `cc-` · Marca: paleta Huerta, DM Sans + Dancing Script.

Despliegue: GitHub Pages mediante `.github/workflows/deploy-pages.yml` en cada push.

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
