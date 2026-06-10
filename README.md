# UCM — Universidad Cultural Metropolitana

Sitio web oficial de la **Universidad Cultural Metropolitana A.C.** (UCMAC), Tampico, Tamaulipas.

Desarrollado por [iKingdom](https://www.ikingdom.org) — Digital Growth Architecture.

## Stack

- **Next.js 15** (App Router, SSG)
- **Tailwind CSS** + paleta de marca extraída del logo institucional
- **Framer Motion** para animaciones
- **lucide-react** para iconografía

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
```

## Estructura

- `src/data/site.ts` — contenido institucional (programas, respaldos, NAP, RVOE)
- `src/components/` — UI (Header, Hero, ProgramCard, Footer, etc.)
- `src/app/` — páginas (Home, Oferta, Admisiones, Costos y Becas, Nosotros, Respaldos, Contacto)

## SEO

- Schema `CollegeOrUniversity` + `Course` por programa
- `lang="es-MX"`, metadata por página, sitemap y robots dinámicos
