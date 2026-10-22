# Diseño

Nombre de trabajo: Habla. Concepto: «Palabra a palabra».

Paleta: verde profundo #245c50, papel #f8f8f2, verde pálido y acento terracota. Tipografía de sistema sin descargas: serif para palabras y títulos, sans serif para controles. La palabra es el centro visual; las opciones quedan a un lado en escritorio y debajo en móvil. No se muestran puntuaciones clínicas.

Navegación: práctica, banco, cuaderno, recorrido, guía. En móvil pasa de barra lateral a navegación horizontal desplazable. Breakpoints 1150, 850 y 600 px; botones con altura mínima de 44 px (no es una auditoría completa de objetivos táctiles); foco de alto contraste; estados con texto; respeto por movimiento reducido.

Arquitectura: HTML/CSS/JavaScript sin compilación ni dependencias. Scripts clásicos permiten abrir archivos locales sin fetch del corpus. Servidor Node opcional y caché de service worker. El registro se guarda por navegador y origen; no hay sincronización entre la web publicada y las copias locales. La grabación usa MediaRecorder; Pointer Events permite dedo, lápiz o mouse. El dibujo se conserva como puntos normalizados al redimensionar.

El trazado requiere movimiento de puntero; se ofrece práctica de escritura con teclado como alternativa, sin afirmar equivalencia motora.

## Revisión local 1.1.0 — aventura visual

La portada pasa a un mapa de cinco estaciones. Se conservan verde profundo, papel y serif; se agregan menta, durazno, lavanda, celeste y amarillo suave. Luma es una semilla exploradora en SVG original sin descargas remotas. Los iconos PWA se generan con primitivas gráficas propias.

Tres presentaciones orientativas: Descubrir, Explorar y Enfocar. Cambian títulos, decoración y densidad visual, no estiman nivel clínico ni recolectan edad exacta. Calma visual y prefers-reduced-motion evitan animación. La voz de consignas completas no está implementada; 4–7 se orienta a uso acompañado.

Los recorridos no obligan a terminar, no tienen temporizador, rachas ni clasificación. La celebración reconoce estaciones exploradas. Las piezas de sílabas son botones para no depender de arrastre fino. La navegación y las pestañas pueden desplazarse dentro de su propio contenedor en móvil.

El nuevo storage.js separa validación y copias de la UI; audio.js encapsula captura cancelable; play.js contiene reglas puras y pwa.js administra instalación/actualización. El servidor sigue siendo opcional; no hay framework, base de datos ni dependencias nuevas.

## Diseño vigente 1.1.1 — taller gráfico

La revisión anterior queda como antecedente. Identidad actual: papel #f5f0e4, tinta verde #28533c, terracota #b5482d, amarillo y recortes de color. Títulos Bricolage Grotesque de Mathieu Triay, fuente abierta OFL obtenida del repositorio oficial de Google Fonts; se distribuye íntegra en WOFF con licencia y procedencia en assets/fonts. Palabras de práctica en Arial para formas sencillas; caligrafía conserva modelos previos.

Referencias consultadas: https://ateliertriay.github.io/bricolage/ y https://github.com/google/fonts/tree/main/ofl/bricolagegrotesque. Se tomó la expresividad editorial de la tipografía, sin copiar ilustraciones del sitio. Collage letter-workshop.svg propio, Luma conservada. No se usan CDN, fotos de terceros ni peticiones externas para diseño.

Fichas con esquinas discretas, números visibles y sombras de papel; jerarquía compartida por las seis pantallas. Se mantienen presentaciones por edad, calma visual, foco visible y reducción de movimiento. Ningún control eliminado ni agregado.
