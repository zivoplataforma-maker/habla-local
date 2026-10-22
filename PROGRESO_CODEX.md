# Progreso técnico

## 22/10/2026 — Reconocimiento e inspección inicial completados

- Base remota descargada de solo lectura: `33ecf5c`. Copia aislada `habla-evolucion`, rama `mejora-infantil-local`. Copias anteriores con cambios preservadas.
- Recursos: Node 24.19, Python 3.12, Git, tests node:test, utilidades de archivos e imágenes Pillow, GitHub con lectura/escritura (escritura remota no autorizada en esta fase), búsqueda web, Sites y CUA cloud browser. No navegador de extensión ni herramientas específicas de seguridad/axe/DOM expuestas. Sin instalación de dependencias.
- Skills identificadas: catálogo global/proyecto y plugins de la sesión. Aplicadas/leídas completas Sites y Browser; referencia managed-preview leída. Skills de presentaciones/documentos/Supabase/juego de criaturas no aplican. No AGENTS.md aplicable ni plan previo encontrados. Instrucciones globales de sesión activas.
- MCP/aplicaciones: GitHub, Sites, Library y demás conectores disponibles; no hay servidor del proyecto ni integración de datos necesaria. No se probaron conectores ajenos sin motivo.
- Diagnóstico seguro: 7/7 pruebas unitarias/HTTP; Node/Python disponibles; sin dependencias npm ni backend de datos. Se leyó HTML/CSS/JS, documentación, corpus metadata, servidor y CI.
- Defectos y riesgos clasificados en PLANS.md. Sin exposición de secretos ni modificaciones durante inspección.
- Etapa activa: E1, integridad/recuperación. Próxima acción: añadir validación de estado y tests antes de integrar restauración UI.
- Producción: sin modificaciones. Publicación bloqueada por autorización separada según instrucción del titular.

## E1 completada — Integridad y recuperación

- Se añadió storage.js con validación estricta y compatibilidad con clave/formato heredados, exportación v2 y mezcla idempotente.
- Restauración con resumen y confirmación, descarga previa del registro original; una copia inválida o escritura fallida no reemplaza el estado.
- Un JSON corrupto queda protegido contra sobrescritura silenciosa y puede descargarse intacto. Detección de cambios en otra pestaña para evitar sobreescrituras.
- Evidencia: 12/12 pruebas aprobadas (7 existentes + 5 de almacenamiento). No se tocaron datos reales del usuario.
- Etapa activa: E2. Próxima acción: presentación por franjas, misiones y juego silábico accesible.

## E2 completada — Mapa visual y juego

- Cinco estaciones opcionales, misión de 3/5 estaciones diferentes, reinicio sin borrar historial. Sin temporizador, rankings, premios aleatorios ni puntuación de articulación.
- Luma y formas en SVG/CSS propios; se conserva paleta y navegación previa. Presentaciones Descubrir/Explorar/Enfocar sin recolectar edad exacta. Calma visual y prefers-reduced-motion.
- Juego de piezas silábicas seleccionables por botón, sin depender de arrastrar; solo sílabas editoriales de la selección. Banco inicia en selección educativa, corpus completo sigue accesible.
- Evidencia: 15/15 pruebas. En navegador local real: carga sin error de app visible, render de escritorio, palabra perro armada con botones, escritura comparada, pronunciación registrada manualmente, celebración tras 3 estaciones, modo 12–16 y reinicio. La UI de 1348 px se inspeccionó visualmente.
- El navegador ahora abre la vista local; el bloqueo anterior no afectó esta copia y configuración. No implica validación clínica ni prueba en móvil físico.
- Etapa activa E3. Próxima acción: audio cancelable y borradores temporales del cuaderno, servidor portable.

## E3 completada — Captura y estabilidad

- Captura extraída a audio.js con cancelación por generación, cierre de pistas y callbacks ligados a cada recorder; limpieza al navegar/reconstruir actividad.
- Cuatro pruebas de captura: permiso tardío, audio normal, cancelación durante grabación, límite temporal/error de permiso. No se abrió un micrófono real ni se pidió acceso al usuario.
- Borradores del cuaderno por texto/estilo durante la sesión; al volver a una palabra se recuperan. Capacidad: 100 modelos, máximo 4.000 puntos por trazo antes de reducir muestras; repintado con requestAnimationFrame. No persiste dibujos al cerrar.
- Servidor usa ruta real para bloquear enlaces simbólicos externos; métodos GET/HEAD; tipos MIME PNG; dev portable con --host y puerto efímero para pruebas.
- Evidencia: 20/20 tests; sintaxis correcta. Flujos UI finales se revisarán al completar E4 (para no probar con la caché vieja).
- Etapa activa E4: instalación y offline con cambio de versión explícito.
