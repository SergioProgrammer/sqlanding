export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  excerpt: string;
  readingTime: string;
  publishDate: string;
  ctaLabel: string;
  ctaHref: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "cuanto-cuesta-una-web-profesional",
    title: "Cuánto cuesta una web profesional y de qué depende realmente el presupuesto",
    description:
      "Guía para entender cuánto cuesta una web profesional, qué factores influyen en el presupuesto y cuándo compensa invertir en diseño y desarrollo a medida.",
    eyebrow: "Precio web",
    excerpt:
      "El precio de una web profesional no depende solo del número de páginas. Depende de estrategia, estructura, contenido, diseño, desarrollo y del papel que esa web tendrá en el negocio.",
    readingTime: "8 min",
    publishDate: "2026-04-03",
    ctaLabel: "Solicitar presupuesto web",
    ctaHref: "/contacto",
    sections: [
      {
        heading: "El error más común al hablar de precio web",
        paragraphs: [
          "Muchas empresas comparan presupuestos de web como si todas las webs resolvieran el mismo problema. No es así. Una web profesional puede funcionar como tarjeta de presentación, como canal de captación o como pieza central de un proceso comercial. El precio cambia según esa responsabilidad.",
          "Cuando una web tiene que explicar una propuesta compleja, filtrar mejor a los leads y reforzar la percepción de marca, el trabajo deja de ser solo visual. Entra estrategia, arquitectura de información, copy, diseño, desarrollo y optimización técnica. Por eso dos presupuestos aparentemente para una web pueden estar resolviendo cosas muy distintas.",
        ],
      },
      {
        heading: "Qué variables hacen subir o bajar el presupuesto",
        paragraphs: [
          "La primera variable es el alcance. No cuesta lo mismo una web corporativa simple que una web con varias landings, blog, formularios, integraciones o un sistema visual más trabajado. La segunda es el nivel de definición previo: si el negocio todavía no tiene claro qué vender, para quién o cómo ordenarlo, parte del trabajo será estratégico.",
          "También influyen el volumen de contenido, la calidad de las imágenes, la necesidad de redactar o rehacer textos, la complejidad del desarrollo, el SEO técnico y la exigencia visual. Una web rápida y correcta es distinta de una web pensada para captar, posicionar y sostener una marca con más autoridad.",
        ],
      },
      {
        heading: "Qué suele incluir una web profesional bien planteada",
        paragraphs: [
          "Una web profesional bien resuelta suele incluir diagnóstico inicial, definición de estructura, jerarquía de contenidos, diseño, desarrollo responsive, rendimiento técnico, metadatos, SEO base, formularios y revisión final. Si además se trabaja con intención comercial, conviene incluir CTAs claros, páginas de servicio específicas y un sistema de enlaces internos.",
          "Esto importa porque el coste no debería medirse por pantallas entregadas, sino por si la web ayuda a vender mejor, explicar mejor el servicio y transmitir más confianza. Si una web no mejora esas tres cosas, el problema no es que sea barata o cara, sino que está mal enfocada.",
        ],
      },
      {
        heading: "Cuándo compensa una solución a medida",
        paragraphs: [
          "Compensa cuando la web tiene que apoyar un posicionamiento claro, una oferta con margen suficiente o un proceso comercial donde cada lead importa. También cuando la marca necesita dejar de parecer amateur, desordenada o intercambiable frente a su competencia.",
          "En esos casos, un desarrollo a medida evita encajar el negocio dentro de una plantilla genérica. Permite trabajar la estructura con más libertad, priorizar velocidad, mejorar el SEO y ajustar la experiencia a lo que realmente necesita el proyecto.",
        ],
      },
      {
        heading: "Cómo pedir presupuesto sin perder el tiempo",
        paragraphs: [
          "La mejor forma es explicar qué vendes, a quién, qué problema tiene ahora la web y qué resultado esperas. No hace falta llegar con la solución cerrada, pero sí con contexto suficiente para que el presupuesto responda a una necesidad real y no a una lista genérica de entregables.",
          "Si estás valorando una nueva web o un rediseño, conviene revisar primero la estructura, el mensaje y la intención comercial. Desde ahí es mucho más fácil decidir qué nivel de web necesita el negocio y cuánto sentido tiene invertir en diseño web profesional o en desarrollo web a medida.",
        ],
      },
    ],
  },
  {
    slug: "que-incluye-un-branding-completo",
    title: "Qué incluye un branding completo y por qué va mucho más allá del logo",
    description:
      "Explicación clara de qué incluye un branding completo, qué piezas forman un sistema de marca y por qué el logo por sí solo no resuelve posicionamiento ni coherencia.",
    eyebrow: "Branding",
    excerpt:
      "Un branding completo no se limita a elegir un logo bonito. Define percepción, ordena el mensaje y construye un sistema visual que pueda sostener la marca en el tiempo.",
    readingTime: "7 min",
    publishDate: "2026-04-03",
    ctaLabel: "Revisar mi marca",
    ctaHref: "/branding",
    sections: [
      {
        heading: "Por qué el logo no basta",
        paragraphs: [
          "El logo es una pieza del sistema, no el sistema entero. Puede funcionar bien como firma, pero si alrededor no hay decisiones claras sobre tono, composición, jerarquía o aplicaciones, la marca seguirá viéndose inconsistente. Eso se nota rápido en la web, en presentaciones, en redes y en cualquier material comercial.",
          "Cuando una empresa dice que necesita branding, normalmente lo que necesita de verdad es coherencia. Quiere dejar de parecer improvisada, ordenar su propuesta y transmitir un nivel más alto de confianza. Un logo aislado no resuelve ninguna de esas tres cosas por sí solo.",
        ],
      },
      {
        heading: "Las capas que suele incluir un branding completo",
        paragraphs: [
          "La primera capa es estratégica: posicionamiento, atributos, tono y marco de diferenciación. La segunda es visual: tipografía, color, composición, recursos gráficos, estilos de imagen y criterios de uso. La tercera es de aplicación: cómo baja todo eso a web, documentos, presentaciones, redes, campañas y materiales de venta.",
          "Sin esa tercera capa, muchas identidades se quedan en presentación bonita y no llegan a funcionar en el día a día. La marca no necesita solo ser atractiva; necesita ser usable, repetible y reconocible cuando se aplica en distintos contextos.",
        ],
      },
      {
        heading: "Qué problemas resuelve un branding bien hecho",
        paragraphs: [
          "Un branding bien resuelto mejora comprensión, percepción y consistencia. Hace que el negocio se vea más claro, más serio y más fácil de recordar. También ayuda a que marketing, web y contenido trabajen con el mismo lenguaje, en lugar de competir entre sí.",
          "Esto es especialmente importante cuando la empresa está creciendo, subiendo precios, cambiando de segmento o intentando vender servicios con más valor. Si la marca se queda atrás, la percepción también se queda atrás y la venta se vuelve más difícil.",
        ],
      },
      {
        heading: "Cómo saber si tu marca necesita un sistema nuevo",
        paragraphs: [
          "Las señales habituales son bastante visibles: cada pieza se diseña de una manera distinta, la web no parece conectada con las campañas, el negocio no proyecta el nivel que promete y el equipo no tiene criterios claros para producir materiales nuevos. También ocurre cuando la marca actual ya no representa el tipo de cliente que quieres atraer.",
          "En ese punto, el branding deja de ser una cuestión estética y pasa a ser una herramienta de negocio. La pregunta correcta no es si necesitas un logo nuevo, sino si necesitas un sistema que te permita vender con más claridad y crecer sin fricción visual.",
        ],
      },
      {
        heading: "Qué esperar del proceso",
        paragraphs: [
          "Un proceso sólido de branding combina análisis, decisiones de posicionamiento, traducción visual y aplicación. No debería entregarte solo archivos, sino criterios. Cuando eso se hace bien, la marca gana estabilidad y deja de depender de ocurrencias puntuales.",
          "Si quieres revisar tu caso, lo sensato es empezar por la percepción actual, los puntos de fricción y el tipo de negocio que quieres construir. A partir de ahí se puede decidir si hace falta un ajuste visual, un rebranding completo o un sistema más amplio.",
        ],
      },
    ],
  },
  {
    slug: "errores-al-disenar-una-web",
    title: "Errores al diseñar una web que hacen perder claridad, confianza y conversiones",
    description:
      "Errores habituales al diseñar una web corporativa o comercial y cómo corregirlos para mejorar claridad, percepción y capacidad de captación.",
    eyebrow: "Errores web",
    excerpt:
      "Muchas webs fallan por exceso de ruido, estructura débil y falta de intención comercial. El problema no suele ser solo visual; suele ser estratégico.",
    readingTime: "8 min",
    publishDate: "2026-04-03",
    ctaLabel: "Solicitar revisión web",
    ctaHref: "/web",
    sections: [
      {
        heading: "Querer explicar demasiado al mismo tiempo",
        paragraphs: [
          "Uno de los errores más comunes es intentar contar toda la empresa en el primer scroll. Eso produce páginas saturadas, mensajes genéricos y una experiencia que obliga al usuario a descifrar la propuesta. Cuando la estructura falla, el diseño no puede compensarlo.",
          "Una web eficaz no necesita decirlo todo de golpe. Necesita ordenar la información para que el visitante entienda rápido qué haces, para quién y por qué debería seguir leyendo. La claridad es una ventaja competitiva, no una simplificación pobre.",
        ],
      },
      {
        heading: "Diseñar sin jerarquía real",
        paragraphs: [
          "Si todos los bloques tienen el mismo peso, nada destaca. Esto ocurre cuando no hay un criterio claro sobre qué mensaje debe liderar, qué secciones sostienen la decisión y dónde debe aparecer el siguiente paso. El resultado es una web que parece correcta pero no guía nada.",
          "La jerarquía visual no es solo tamaño tipográfico. También es ritmo, contraste, espacio, densidad de contenido y prioridad de CTA. Cuando todo eso está alineado, la web se entiende mejor y se navega con menos fricción.",
        ],
      },
      {
        heading: "Usar un lenguaje visual bonito pero genérico",
        paragraphs: [
          "Otro error frecuente es caer en una estética de plantilla: recursos visuales intercambiables, fotos sin relación con la marca y textos que podrían pertenecer a cualquier empresa. Esa capa puede parecer profesional a primera vista, pero no construye diferenciación.",
          "Una web profesional necesita coherencia con el posicionamiento de la marca. Si el negocio quiere vender como estudio estratégico o partner de negocio, la experiencia tiene que sostener esa idea en copy, tono, composición y estructura.",
        ],
      },
      {
        heading: "No pensar en SEO desde la estructura",
        paragraphs: [
          "Muchas webs intentan optimizar SEO solo añadiendo palabras clave a posteriori. Eso suele llegar tarde. Si la arquitectura no separa bien servicios, si no hay landings específicas y si el enlazado interno es débil, la web se queda corta para posicionar búsquedas comerciales.",
          "El SEO útil empieza antes del desarrollo final. Empieza cuando decides qué páginas necesitas, qué intención de búsqueda cubre cada una y cómo se relacionan entre sí la home, los servicios, el blog y el contacto.",
        ],
      },
      {
        heading: "Olvidar la conversión",
        paragraphs: [
          "Hay webs que se ven bien pero no piden nada. No ofrecen siguiente paso, no explican qué pasa tras el contacto y no convierten interés en lead. Eso reduce el valor comercial de todo el trabajo anterior.",
          "Si la web forma parte del proceso de captación, debe integrar llamadas a la acción claras, contextuales y coherentes con el momento del usuario. No se trata de gritar más, sino de facilitar la decisión correcta en el momento adecuado.",
        ],
      },
    ],
  },
  {
    slug: "cuanto-tarda-hacer-una-web",
    title: "Cuánto tarda hacer una web profesional y qué fases determinan los tiempos",
    description:
      "Estimación realista sobre cuánto tarda hacer una web profesional, qué fases intervienen y por qué el plazo depende del nivel de definición del proyecto.",
    eyebrow: "Tiempos web",
    excerpt:
      "El tiempo para hacer una web profesional depende menos del diseño visual en sí y más de la claridad estratégica, el contenido y la complejidad de implementación.",
    readingTime: "7 min",
    publishDate: "2026-04-03",
    ctaLabel: "Planificar una web",
    ctaHref: "/contacto",
    sections: [
      {
        heading: "No todas las webs tardan lo mismo porque no resuelven lo mismo",
        paragraphs: [
          "Preguntar cuánto tarda una web sin contexto es parecido a preguntar cuánto tarda una reforma. Puede haber proyectos rápidos y otros bastante más complejos. Lo determinante es el objetivo de negocio, el número de páginas, el volumen de contenido, la necesidad de SEO y la calidad visual que se espera.",
          "Una web sencilla con contenido ya claro puede resolverse relativamente rápido. Una web que exige reordenar la propuesta, redactar mejor, crear varias landings y ajustar desarrollo a medida necesita más tiempo porque está resolviendo un problema más profundo.",
        ],
      },
      {
        heading: "Fases que suelen marcar el calendario",
        paragraphs: [
          "La primera fase es de definición: entender el negocio, ordenar la estructura y decidir qué debe comunicar cada página. Después llega el diseño, donde se trabaja jerarquía, sistema visual y experiencia. Luego entra el desarrollo, la carga de contenidos, las revisiones y la optimización técnica final.",
          "Cuando alguna de esas fases se solapa mal o se improvisa, los plazos se alargan. Lo habitual no es que el diseño retrase el proyecto; lo habitual es que falten textos, decisiones o prioridades claras.",
        ],
      },
      {
        heading: "Qué puede ralentizar un proyecto web",
        paragraphs: [
          "Los bloqueos más frecuentes son la falta de contenido, la indefinición sobre servicios, cambios constantes de alcance y la ausencia de un interlocutor claro. También ralentiza bastante intentar decidir cada detalle visual antes de tener resuelta la estructura.",
          "Por eso conviene abordar primero el orden del mensaje y la intención comercial. Cuando esa base está clara, el diseño y el desarrollo avanzan con mucha más coherencia y menos retrabajo.",
        ],
      },
      {
        heading: "Qué acelera el proceso",
        paragraphs: [
          "Lo que más acelera una web es tener claro qué vendes, a quién y qué necesitas que haga el usuario en cada página. También ayuda disponer de material visual usable, referencias de posicionamiento y capacidad de respuesta para validar hitos sin demoras largas.",
          "Un proceso bien dirigido no consiste en correr más, sino en decidir mejor. Cuando la estructura está bien planteada desde el inicio, el calendario se vuelve más previsible y el resultado suele ser mucho más sólido.",
        ],
      },
      {
        heading: "Cómo plantear tiempos con criterio",
        paragraphs: [
          "Si lo que buscas es una web profesional que capte mejor y respalde la marca, conviene plantear tiempos realistas y priorizar decisiones que afectan a negocio. Eso incluye arquitectura, SEO base, CTAs, claridad del mensaje y revisión técnica final.",
          "Antes de fijar una fecha cerrada, merece la pena revisar el alcance exacto y el material disponible. Esa conversación inicial evita expectativas poco realistas y ayuda a construir un calendario coherente con el objetivo del proyecto.",
        ],
      },
    ],
  },
  {
    slug: "disenador-vs-estudio-de-diseno",
    title: "Diseñador vs estudio de diseño: qué cambia realmente y cuándo conviene cada opción",
    description:
      "Comparativa entre trabajar con un diseñador freelance o con un estudio de diseño para proyectos de branding, diseño gráfico y web con intención comercial.",
    eyebrow: "Modelo de trabajo",
    excerpt:
      "No siempre conviene la misma estructura. La diferencia entre diseñador y estudio no es solo de tamaño; es de enfoque, sistema y capacidad para resolver problemas más amplios.",
    readingTime: "8 min",
    publishDate: "2026-04-03",
    ctaLabel: "Hablar con SQ Studio",
    ctaHref: "/contacto",
    sections: [
      {
        heading: "La diferencia no es solo quién ejecuta",
        paragraphs: [
          "Comparar diseñador freelance con estudio de diseño como si fueran opciones equivalentes simplifica demasiado. La diferencia real suele estar en el alcance que cada uno puede sostener, en la profundidad estratégica y en la capacidad de conectar branding, diseño gráfico y web dentro de un mismo sistema.",
          "Hay proyectos que encajan perfectamente con un perfil freelance. Otros, en cambio, necesitan una visión más articulada y una estructura de trabajo que no trate cada pieza como algo aislado.",
        ],
      },
      {
        heading: "Cuándo suele encajar mejor un freelance",
        paragraphs: [
          "Suele encajar cuando el problema está muy acotado, el alcance es concreto y la dirección ya está bastante definida. Por ejemplo, una pieza puntual, una adaptación o una ejecución cerrada con pocos condicionantes estratégicos.",
          "En esos casos, un freelance puede ser una solución ágil y eficiente. El problema aparece cuando se espera que esa misma lógica resuelva posicionamiento, sistema de marca, estructura web y captación sin un marco más amplio.",
        ],
      },
      {
        heading: "Cuándo aporta más un estudio de diseño",
        paragraphs: [
          "Un estudio aporta más cuando hay que ordenar el problema antes de ejecutar. Eso pasa en rebrandings, rediseños de web, sistemas visuales complejos o proyectos donde marketing, negocio y experiencia digital tienen que avanzar en la misma dirección.",
          "La ventaja no es solo producir más piezas. Es construir criterios, priorizar mejor y evitar que cada decisión visual se tome en vacío. Cuando el negocio necesita vender con más claridad, esa capa estratégica pesa mucho.",
        ],
      },
      {
        heading: "Qué deberías evaluar antes de elegir",
        paragraphs: [
          "Más que fijarte solo en precio o portfolio, conviene revisar si la persona o el equipo entienden el problema comercial, si tienen criterio para ordenar la propuesta y si pueden sostener el nivel de ejecución que necesita la marca. También importa si conectan bien SEO, conversión y percepción visual.",
          "No se trata de elegir la opción más grande o más pequeña, sino la más adecuada al nivel de complejidad del proyecto. Una mala elección en esta fase suele producir trabajo correcto pero insuficiente.",
        ],
      },
      {
        heading: "La clave está en el tipo de negocio que quieres construir",
        paragraphs: [
          "Si el objetivo es solo resolver una pieza, el marco puede ser más simple. Si el objetivo es construir una marca más fuerte, una web más clara y un sistema visual consistente, necesitas una estructura capaz de conectar esas capas entre sí.",
          "Ahí es donde un estudio estratégico cobra más sentido. No porque sustituya a un buen diseñador, sino porque organiza mejor el trabajo cuando el reto es más amplio que una entrega puntual.",
        ],
      },
    ],
  },
];

export const getBlogPostBySlug = (slug: string) => blogPosts.find((post) => post.slug === slug);
