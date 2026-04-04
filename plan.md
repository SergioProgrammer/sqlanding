# Plan de Cookies y Consentimiento Real para `sqstudio.es`

## Objetivo
Pasar del banner actual, que hoy funciona como capa visual y guarda preferencias en `localStorage`, a un sistema real de consentimiento que controle de verdad qué scripts se cargan, qué datos se recogen y bajo qué categorías se activan.

## Estado actual
- Ya existe banner de cookies con categorías:
  - técnicas
  - preferencias
  - analítica
  - marketing
- Ya existen páginas legales:
  - `/politica-cookies`
  - `/politica-privacidad`
  - `/aviso-legal`
- El consentimiento se guarda en `localStorage`.
- El sistema todavía no bloquea ni habilita herramientas reales de terceros.
- No hay analítica ni marketing conectados a partir del consentimiento.
- No existe reapertura del panel de cookies desde un botón persistente.

## Problema actual
Aunque el usuario puede elegir categorías, esa elección todavía no controla nada real. Ahora mismo:

- no se cargan scripts en función del consentimiento
- no se bloquean etiquetas de analítica o marketing
- no se actualiza ningún estado para Google Consent Mode
- no hay integración con GTM, GA4, Meta Pixel u otras herramientas

Conclusión:
el sistema es visualmente correcto, pero todavía no funciona como gestor real de consentimiento.

## Objetivo técnico real
Conseguir que:

- las cookies técnicas sigan activas por defecto
- las categorías opcionales solo se activen tras consentimiento explícito
- ningún script de analítica o marketing cargue antes de aceptar
- el usuario pueda reabrir y modificar su decisión cuando quiera
- el sitio quede preparado para medir tráfico, conversiones y campañas de forma controlada

## Arquitectura recomendada

### 1. Fuente única de consentimiento
Crear una utilidad centralizada para:

- leer consentimiento guardado
- guardarlo de forma consistente
- actualizarlo
- consultar si una categoría está permitida

Ejemplo de estructura:

```ts
type CookieConsent = {
  necessary: true;
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
};
```

Funciones recomendadas:

- `getCookieConsent()`
- `setCookieConsent(consent)`
- `hasConsent(category)`
- `openCookiePreferences()`

## 2. Bloqueo real de scripts
No cargar herramientas de terceros directamente en el layout si dependen de consentimiento.

En su lugar:

- comprobar primero el consentimiento
- inyectar scripts solo si la categoría correspondiente está aceptada

Ejemplo:

```js
const consent = getCookieConsent();

if (consent.analytics) {
  loadGoogleAnalytics();
}

if (consent.marketing) {
  loadMetaPixel();
}
```

## 3. Herramientas previstas

### Analítica
- Google Analytics 4
- Microsoft Clarity

### Gestión de etiquetas
- Google Tag Manager

### Marketing
- Meta Pixel
- Google Ads conversion tracking
- otras etiquetas futuras, si se añaden

## 4. Implementación recomendada por capas

### Fase 1 · Infraestructura de consentimiento
- Extraer la lógica del banner actual a una utilidad reusable.
- Mantener `localStorage` como base inicial.
- Añadir eventos custom del navegador para avisar cuando cambia el consentimiento.
- Crear un botón persistente en footer tipo `Configurar cookies`.
- Permitir reabrir el panel y cambiar la selección.

### Fase 2 · Google Tag Manager
- Integrar GTM como capa de gestión central.
- No disparar etiquetas opcionales hasta que el consentimiento lo permita.
- Preparar el sitio para centralizar futuras herramientas sin tocar el layout cada vez.

### Fase 3 · Consent Mode v2
- Implementar Google Consent Mode v2.
- Definir estado por defecto denegado para categorías opcionales.
- Actualizar estado cuando el usuario acepte o rechace.
- Alinear especialmente:
  - `analytics_storage`
  - `ad_storage`
  - `ad_user_data`
  - `ad_personalization`

### Fase 4 · Herramientas reales
- Cargar GA4 solo si `analytics = true`.
- Cargar Clarity solo si `analytics = true`.
- Cargar Meta Pixel solo si `marketing = true`.
- Cargar Google Ads solo si `marketing = true`.

### Fase 5 · Eventos
Medir al menos:

- envío de formulario
- clic en CTA principal
- clic en `Solicitar auditoría`
- navegación a páginas de servicio
- scroll profundo en artículos del blog
- visualización de `/gracias`

## 5. Requisitos legales mínimos
Para un uso razonable en España / UE:

- no cargar analítica ni marketing antes de aceptación
- permitir rechazar tan fácil como aceptar
- permitir cambiar preferencias después
- explicar claramente categorías y finalidad
- mantener política de cookies accesible

## 6. Qué no hacer
- No cargar GA4 por defecto “y ya preguntar después”.
- No disparar Meta Pixel antes de consentimiento de marketing.
- No esconder el botón de rechazo.
- No dejar el panel sin una forma posterior de reconfiguración.
- No mezclar cookies técnicas con marketing en una única aceptación obligatoria.

## 7. Estructura técnica sugerida

### Archivos recomendados
- `src/lib/cookie-consent.ts`
- `src/components/CookieBanner.astro`
- `src/components/CookiePreferencesButton.astro`
- `src/lib/tracking/load-ga.ts`
- `src/lib/tracking/load-meta-pixel.ts`
- `src/lib/tracking/load-clarity.ts`

### Responsabilidades
- `cookie-consent.ts`: lectura, escritura y validación del estado
- `CookieBanner.astro`: interfaz
- `CookiePreferencesButton.astro`: reapertura
- `load-*.ts`: carga condicional de herramientas

## 8. Estrategia recomendada de despliegue

### Paso 1
Implementar primero la capa de consentimiento real sin herramientas externas activas.

Objetivo:
- asegurar que la lógica de aceptación, rechazo y reapertura funciona bien

### Paso 2
Conectar GTM y Consent Mode.

Objetivo:
- dejar listo el framework de control antes de medir usuarios reales

### Paso 3
Activar GA4.

Objetivo:
- empezar a recoger tráfico y eventos de forma básica

### Paso 4
Activar marketing si realmente vas a hacer campañas.

Objetivo:
- evitar meter píxeles innecesarios si aún no hay inversión publicitaria

## 9. Checklist de implementación
- [ ] Crear utilidad central de consentimiento
- [ ] Unificar formato de consentimiento guardado
- [ ] Añadir reapertura del panel
- [ ] Añadir botón persistente `Configurar cookies`
- [ ] Integrar GTM
- [ ] Implementar Consent Mode v2
- [ ] Bloquear GA4 hasta consentimiento analítico
- [ ] Bloquear Clarity hasta consentimiento analítico
- [ ] Bloquear Meta Pixel hasta consentimiento marketing
- [ ] Crear eventos de conversión básicos
- [ ] Revisar textos legales finales
- [ ] Verificar funcionamiento en modo incógnito

## 10. Resultado esperado
- Consentimiento real y no solo visual
- Carga controlada de scripts
- Base legal y técnica más sólida
- Seguimiento fiable de usuarios y conversiones
- Preparación correcta para SEO, analítica y campañas

## 11. Siguiente implementación recomendada
Cuando se ejecute este plan, el primer paso práctico debería ser:

1. crear `cookie-consent.ts`
2. añadir botón de reapertura del panel
3. preparar GTM + Consent Mode
4. conectar GA4 con consentimiento analítico

Ese sería el punto donde la capa de cookies empezaría a ser real de verdad.
