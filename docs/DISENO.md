# Diseño

Nombre de trabajo: Habla. Concepto: «Palabra a palabra».

Paleta: verde profundo #245c50, papel #f8f8f2, verde pálido y acento terracota. Tipografía de sistema sin descargas: serif para palabras y títulos, sans serif para controles. La palabra es el centro visual; las opciones quedan a un lado en escritorio y debajo en móvil. No se muestran puntuaciones clínicas.

Navegación: práctica, banco, cuaderno, recorrido, guía. En móvil pasa de barra lateral a navegación horizontal desplazable. Breakpoints 1150, 850 y 600 px; botones con altura mínima de 44 px (no es una auditoría completa de objetivos táctiles); foco de alto contraste; estados con texto; respeto por movimiento reducido.

Arquitectura: HTML/CSS/JavaScript sin compilación ni dependencias. Scripts clásicos permiten abrir archivos locales sin fetch del corpus. Servidor Node opcional y caché de service worker. El registro se guarda por navegador y origen; no hay sincronización entre la web publicada y las copias locales. La grabación usa MediaRecorder; Pointer Events permite dedo, lápiz o mouse. El dibujo se conserva como puntos normalizados al redimensionar.

El trazado requiere movimiento de puntero; se ofrece práctica de escritura con teclado como alternativa, sin afirmar equivalencia motora.
