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

## E4 completada — PWA y caché

- Manifest con rutas relativas, scope/id, PNG propios 192/512 maskable y Apple 180. Botón de instalación cuando el navegador lo permite e instrucciones para Safari/Android.
- Worker 1.1.0 con caché completa de recursos, estado comprobable mediante mensaje y scope exclusivo. No intercepta ni elimina cachés de otras aplicaciones del origen. Las cachés heredadas ambiguas se conservan por seguridad.
- No usa skipWaiting automático: la UI avisa y ofrece aplicar/recargar, con advertencia sobre audio y borradores. Registro local intacto.
- Evidencia: 24/24 tests; worker probado en entorno Node simulado: instalación, STATUS, actualización explícita, navegación offline y aislamiento. Iconos verificados por dimensiones PNG. No equivale a prueba física de instalación/offline.
- Navegador local confirma integración de scripts y render a 1363 px sin desbordamiento horizontal. Etapa activa E5: verificación de flujos, tamaños y documentación.

## E5 completada — Verificación integral local

- 24/24 pruebas aprobadas. Build estático: scripts válidos, 84 IDs únicos, referencias completas, iconos/versiones correctos. dist pesa 2,42 MiB incluyendo fuentes de corpus. Sin paquetes instalados.
- QA Chrome: mapa/estaciones, juego con teclado, escritura, celebración, presentación 12–16 y reinicio. Layout con viewports fijos 320/390/768/1024 y escritorio 1363; se corrigió min-content de grid que causaba overflow en 320. Modos sílabas/escritura/pares/pronunciación y recorrido sin overflow de página en 320.
- Cuaderno: mouse dibuja; cambiar modelo y regresar recupera trazo; alternativa teclado compara correctamente. Búsqueda lapiz encuentra lápiz. Control de restauración visible; lógica cubierta en tests, selector de archivo real pendiente.
- README, guía, diseño, pendientes y validación actualizados. Auditoría de recursos en docs/RECURSOS_DIAGNOSTICO.md. No se afirma cobertura total, validación clínica ni conformidad WCAG.
- Pruebas de micrófono/PWA/offline físico y revisión profesional pendientes externos.
- Autorización adicional recibida: «al finalizar actualiza github». Próxima acción: verificar HEAD remoto, subir cambios conservando historia y observar CI/Pages.

## E6 ejecutada — GitHub actualizado y web verificada

- Autorización del titular: «al finalizar actualiza github». Se preservó main previo `33ecf5c` y se publicaron seis commits de etapas sin force ni cambios de permisos.
- Revisión funcional remota: `2bf40b024ea55b44b0f5a6ec1d3ef371ba8168c4`. Los árboles remotos se compararon con los árboles locales de cada etapa: idénticos, incluidos los PNG.
- Pages: https://github.com/zivoplataforma-maker/habla-local/actions/runs/39798990058. Trabajo build completado exitosamente con 24 pruebas y validación estática. Pasos Publicar y Complete job: success. En la consulta de cierre el trabajo/global todavía figuraba in_progress.
- Workflow redundante Tests: https://github.com/zivoplataforma-maker/habla-local/actions/runs/39798990069, en cola al registrar esta evidencia. La misma suite ya pasó dentro del build de Pages y localmente. No se deshabilitaron pruebas.
- Verificación HTTPS de index.html, sw.js y assets/icon-192.png: HTTP 200 y coincidencia byte por byte con los archivos locales. Aplicación 1.1.0 disponible en https://zivoplataforma-maker.github.io/habla-local/.
- La espera del despliegue se investigó: environment github-pages solo tiene política de rama, sin revisores ni temporizador configurado. No se cambiaron protecciones ni permisos.
- No se requiere intervención para código/publicación. Se conserva una rama local con todos los pasos y se sincroniza una rama de entrega con main remoto. Preview detenido.

## Continuidad y límites

Revisión funcional terminada. Seguimiento externo: estado terminal de los workflows enlazados, instalación/offline/voz/micro en hardware Android/iOS, revisión profesional de material y definición de inventario léxico. No hay hallazgo de regresión introducida en los flujos probados. Las pruebas responsive no equivalen a hardware físico ni a certificación WCAG.

Si una pestaña conserva la versión previa, cerrá todas las pestañas de Habla y abrila con conexión. No borres los datos del sitio. En versiones nuevas se ofrece aplicar actualización desde Guía y ajustes.

## Verificación terminal de Pages

Consulta posterior: build y deploy de la ejecución 39798990058 quedaron completed/success. La versión funcional 1.1.0 está publicada y su contenido HTTPS ya se verificó. Solo el workflow adicional Tests seguía en cola; no bloqueó el despliegue y repite la suite de 24 pruebas ya aprobada en Pages. No se requiere repetir la publicación de código.
