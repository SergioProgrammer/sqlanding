# Plan SEO y Captación para `sqstudio.es`

## Objetivo
Transformar la web actual en una máquina de captación de leads, sin alterar la estética, mediante:

- SEO técnico sólido
- Arquitectura orientada a búsqueda
- Landings específicas de alta intención
- Blog para captación de tráfico
- Interlinking estratégico
- Mejora de conversión

## 1. Estrategia SEO (base crítica)

### 1.1 Keywords objetivo
Core (intención comercial alta)
- diseño web profesional
- desarrollo web a medida
- branding estratégico
- estudio de diseño gráfico
Long-tail (oportunidad real)
- cuánto cuesta una web profesional
- branding para empresas
- diseño web para negocios
- estudio de diseño en España

### 1.2 Intención de búsqueda
- Comercial -> páginas de servicio
- Informacional -> blog
- Navegacional -> marca

### 1.3 Posicionamiento estratégico
SQ Studio no debe posicionarse como:

- diseñador freelance
- portfolio visual

Debe posicionarse como:

- estudio estratégico
- partner de negocio
- diseño orientado a resultados

Esto debe reflejarse en:

- H1
- copy de home
- metadatos

## 2. Estado actual detectado
- Metadatos básicos presentes.
- Sin canonical global.
- Sin `robots.txt`.
- Sin sitemap.
- Sin `JSON-LD`.
- Sin control de indexación en páginas como `/gracias`.
- Arquitectura débil a nivel SEO.
- Falta intención de búsqueda en headings.
- No hay estrategia de contenido.

Diagnóstico técnico actual del proyecto:
- [`src/layouts/Layout.astro`](/Users/sergiosandovalpacheco/Desktop/sqlanding/src/layouts/Layout.astro) ya incluye `title`, `description`, Open Graph y Twitter Cards, pero la capa SEO sigue siendo básica.
- [`astro.config.mjs`](/Users/sergiosandovalpacheco/Desktop/sqlanding/astro.config.mjs) no define `site`, así que la base para canonical/sitemap está incompleta.
- No existe `public/robots.txt`.
- No existe sitemap generado.
- No hay schemas de `schema.org`.
- La imagen social configurada apunta a `https://sqstudio.es/og-image.jpg`, pero ese archivo no está en `public/`.
- [`src/pages/gracias.astro`](/Users/sergiosandovalpacheco/Desktop/sqlanding/src/pages/gracias.astro) y probablemente [`src/pages/working.astro`](/Users/sergiosandovalpacheco/Desktop/sqlanding/src/pages/working.astro) no deberían indexarse.

## 3. Prioridad 1 · SEO técnico base
- Definir `site` en [`astro.config.mjs`](/Users/sergiosandovalpacheco/Desktop/sqlanding/astro.config.mjs).
- Implementar sitemap automático.
- Crear `robots.txt`.
- Añadir canonical global.
- Añadir control de robots por página.
- Marcar `/gracias` como `noindex, follow`.
- Revisar `/working` y no indexarla si es temporal.
- Añadir Open Graph completo y consistente.
- Crear imagen OG real en `public/`.

## 4. Prioridad 2 · SEO semántico
- Alinear `title`, `description` y `H1` con keywords reales.
- Garantizar estructura:
- 1 H1
- H2 por secciones
- H3 de apoyo
- Mejorar el copy de home para responder con claridad:
- qué haces
- para quién
- dónde operas
- Introducir keywords de forma natural.
- Añadir contexto de servicios y propuesta de valor.

Aplicación directa al proyecto actual:
- Revisar [`src/pages/index.astro`](/Users/sergiosandovalpacheco/Desktop/sqlanding/src/pages/index.astro) para que la home deje más claro que SQ Studio vende servicios estratégicos y no solo una presencia visual premium.
- Replantear titulares y metadatos de [`src/pages/web.astro`](/Users/sergiosandovalpacheco/Desktop/sqlanding/src/pages/web.astro), [`src/pages/branding.astro`](/Users/sergiosandovalpacheco/Desktop/sqlanding/src/pages/branding.astro), [`src/pages/diseño.astro`](/Users/sergiosandovalpacheco/Desktop/sqlanding/src/pages/diseño.astro) y [`src/pages/redes.astro`](/Users/sergiosandovalpacheco/Desktop/sqlanding/src/pages/redes.astro) para acercarlos a intención comercial real.

## 5. Prioridad 3 · Arquitectura SEO (clave)

### 5.1 Crear landings específicas
Obligatorias:

- `/diseno-web`
- `/desarrollo-web`
- `/branding`
- `/diseno-grafico`

Opcionales:

- `/diseno-web-espana`
- `/estudio-diseno`

Nota para este proyecto:
- Ya existe [`src/pages/branding.astro`](/Users/sergiosandovalpacheco/Desktop/sqlanding/src/pages/branding.astro), así que la decisión es si se reutiliza esa URL como landing principal o se rehace su enfoque sin cambiar el diseño base.
- Conviene evitar duplicidad semántica entre `/web` y `/diseno-web` o entre `/diseño` y `/diseno-grafico`. Hay que decidir qué URL será principal y cuál redirige o se reconvierte.

### 5.2 Estructura de cada landing
```html
<article>
  <h1>Servicio + keyword</h1>

  <section>
    <h2>Qué hacemos</h2>
  </section>

  <section>
    <h2>Para quién es</h2>
  </section>

  <section>
    <h2>Cómo trabajamos</h2>
  </section>

  <section>
    <h2>Resultados</h2>
  </section>

  <section>
    <h2>FAQ</h2>
  </section>

  <section>
    <h2>CTA</h2>
  </section>
</article>
```

Objetivo:

- posicionar búsquedas comerciales
- aumentar tiempo en página
- mejorar conversión

## 6. Prioridad 4 · Blog SEO

### 6.1 Crear sistema de blog
Rutas:

- `/blog`
- `/blog/[slug]`

### 6.2 Crear artículos iniciales
- cuánto cuesta una web profesional
- qué incluye un branding completo
- errores al diseñar una web
- cuánto tarda hacer una web
- diseñador vs estudio de diseño

### 6.3 Requisitos de contenido
- 800-1200 palabras
- keywords naturales
- estructura clara
- CTA hacia servicios
- enlaces internos

Objetivo:
- captar tráfico informacional con intención comercial latente
- madurar visitas frías
- derivar tráfico hacia landings de servicio

## 7. Prioridad 5 · Interlinking (muy importante)

### Estrategia
- Home -> servicios con anchors SEO.
- Servicios -> proyectos relacionados.
- Blog -> servicios.
- Proyectos -> contacto.

Evitar:

- ver más
- click aquí

Usar:

- diseño web profesional
- branding estratégico

Objetivo:

- distribuir autoridad
- mejorar posicionamiento
- guiar conversión

Aplicación práctica:
- Revisar anchors en [`src/pages/index.astro`](/Users/sergiosandovalpacheco/Desktop/sqlanding/src/pages/index.astro) para que no todo quede en CTAs genéricos.
- Añadir conexiones semánticas entre [`src/pages/proyectos.astro`](/Users/sergiosandovalpacheco/Desktop/sqlanding/src/pages/proyectos.astro) y futuras landings de servicio.

## 8. Prioridad 6 · Datos estructurados
Añadir:

- `ProfessionalService`
- `WebSite`
- `ContactPage`
- `BreadcrumbList` si aplica

Objetivo:

- mejorar comprensión de Google
- enriquecer resultados

Implementación sugerida:
- Inyectar schemas desde [`src/layouts/Layout.astro`](/Users/sergiosandovalpacheco/Desktop/sqlanding/src/layouts/Layout.astro) y ampliar por página cuando haga falta.

## 9. Prioridad 7 · Imágenes y media
- Revisar `alt` descriptivos.
- Optimizar peso.
- Usar formatos eficientes.
- No hacer lazy load en la imagen LCP.
- Definir `width` y `height`.
- Usar imágenes stock coherentes con estética solo si se incorporan nuevas piezas de apoyo.

Objetivo:

- mejorar rendimiento
- mejorar SEO

Aplicación actual:
- Revisar hero y bloques visuales principales en [`src/pages/index.astro`](/Users/sergiosandovalpacheco/Desktop/sqlanding/src/pages/index.astro) y [`src/pages/web.astro`](/Users/sergiosandovalpacheco/Desktop/sqlanding/src/pages/web.astro).

## 10. Prioridad 8 · Core Web Vitals
Optimizar:

- LCP (<2.5s)
- CLS (sin saltos)
- TTFB

Especial foco en:

- hero
- imágenes grandes

## 11. Prioridad 9 · Conversión
Crear componente reutilizable:

- Lead Magnet
- auditoría gratuita
- revisión de web

Debe:

- tener CTA claro
- copy persuasivo
- integrarse en:
- home
- servicios
- blog

Objetivo:
- convertir tráfico SEO en leads reales
- elevar la intención comercial de la web

## 12. Prioridad 10 · SEO local
Definir ámbito:

- España
- remoto

Unificar en:

- metadata
- schema
- footer

Añadir NAP si aplica.

## 13. Prioridad 11 · Medición
- Google Search Console
- enviar sitemap
- revisar indexación
- analizar queries
- monitorizar Core Web Vitals

## 14. Fases de implementación

### Fase 1 (rápido impacto)
- `site` config
- sitemap
- robots
- canonical
- OG
- noindex

### Fase 2
- metadatos
- headings
- interlinking
- home

### Fase 3
- landings SEO
- blog
- contenido

### Fase 4
- `JSON-LD`
- imágenes
- performance

## 15. Checklist
- [ ] Configurar `site`
- [ ] Crear sitemap
- [ ] Crear `robots.txt`
- [ ] Añadir canonical
- [ ] Configurar `noindex`
- [ ] Optimizar metadata
- [ ] Ajustar headings
- [ ] Crear landings
- [ ] Crear blog
- [ ] Añadir interlinking
- [ ] Implementar `JSON-LD`
- [ ] Optimizar imágenes
- [ ] Crear OG image
- [ ] Conectar Search Console

## Resultado esperado
- Mejor indexación.
- Mayor tráfico cualificado.
- Posicionamiento en keywords comerciales.
- Aumento de leads.
- Web escalable sin cambiar diseño.