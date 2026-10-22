# Plan maestro de Habla Local

Fecha: 22/10/2026. Base: `33ecf5c`. Rama local: `mejora-infantil-local`.

## Alcance y reglas

Evolucionar la versión aprobada hacia un espacio visual y lúdico para 4–16 años. Una etapa principal a la vez, con cambios y pruebas independientes. Conservar vocabulario, licencias, funcionamiento local y prácticas existentes. Sin cuentas, APIs pagas ni datos personales. Nueva autorización recibida el 22/10/2026: «al finalizar actualiza github». Se permite actualizar el repositorio y verificar su flujo de publicación existente. No sobrescribir la copia anterior con cambios preexistentes.

## Diagnóstico confirmado

- HTML/CSS/JS sin framework, dependencias externas ni build. Servidor Node opcional, despliegue estático a Pages, 7 pruebas aprobadas.
- Sin base de datos, autenticación, claves ni archivos .env detectados. Datos en localStorage, audio y trazos en memoria.
- 56.725 grafías base; corpus no exhaustivo. Sin definiciones generales ni validación clínica.
- Registro exportable pero no restaurable. Lectura de JSON guardado inválido se silencia y permite sobrescribirlo después. La exportación no cubre fallos de guardado persistente.
- Service worker activa nuevas versiones inmediatamente; cachea cualquier solicitud del mismo origen aunque esté fuera de su aplicación. Estado offline no comprobado, solo registro del worker.
- Manifest sin PNG 192/512 ni icono iOS. Sin flujo de actualización/instalación.
- Interfaz serena y adaptable pero sin recorrido lúdico ni adaptación de presentación por edad.
- Audio tiene una carrera posible entre solicitudes de permiso y callbacks anteriores. Trazos se pierden al cambiar de palabra/modelo o cerrar.
- Sin pruebas UI; pruebas unitarias e HTTP sí. Sin auditoría completa de accesibilidad o dispositivos físicos.

## Etapas

### E1 — Integridad y recuperación de datos (P1)
- [x] Objetivo: validar y restaurar copias JSON, conservar datos previos al fallar lectura/escritura.
- Dependencias: ninguna. Archivos: core.js, nuevo storage.js, app.js, tests.
- Alcance: versiones 1/2, mezcla sin duplicados, previsualización/confirmación, backup previo local descargable, límites.
- Conservar: clave heredada, datos válidos, formatos de audio, licencias. Riesgo: migración/duplicación.
- Aceptación: exportar/restaurar conserva favoritas/palabras/historial; una copia inválida no muta nada; guardado bloqueado no finge persistencia; no sobrescribir JSON corrupto.
- Verificación: tests de restauración, migración, límites, fechas, almacenamiento fallido; regresión existente.
- Recuperación: descartar cambios de la etapa en esta rama; ningún cambio de datos reales.

### E2 — Experiencia visual y juego educativo (P2)
- [x] Objetivo: misiones cortas opcionales, tres presentaciones (4–7, 8–11, 12–16) y juego de sílabas con teclado/tacto/mouse.
- Dependencias: E1. Archivos: index.html, style.css, app.js, play.js, assets propios.
- Alcance: conservar identidad verde/papel, isla de actividades, acompañante visual, progreso de participación sin presión, vocabulario revisable.
- Conservar: actividades originales y acceso a banco/cuaderno/guía. No pedir edad exacta ni perfil personal. Riesgo: infantilización de adolescentes, contraste, excesos de animación.
- Aceptación: cambiar presentación y misión, jugar con sílabas reales de selección (no inferidas), completar y reiniciar recorrido sin perder historial; motion reducido y foco visible.
- Verificación: pruebas puras del juego y de navegación; UI si navegador disponible, control responsive y teclado.
- Recuperación: volver a estilos y marcado de base manteniendo E1.

### E3 — Compatibilidad y estabilidad esenciales (P2)
- [x] Objetivo: prevenir callbacks obsoletos de audio, dar control a trazos, hacer servidor/dev portables.
- Dependencias: E2. Archivos: app.js, server.cjs, tests.
- Conservar: micrófono solo por acción, sin reconocimiento remoto. Riesgo: limpieza prematura del audio.
- Aceptación: permisos tardíos no activan micro al salir; conservar borrador de trazos por palabra durante sesión; errores de voz no acreditan escucha; control de entrada y codificación del servidor.
- Verificación: tests de cancelación, HTTP, inspección de flujos y pruebas UI posibles.
- Recuperación: restaurar módulos afectados desde commits locales.

### E4 — Instalación, offline y actualización (P2)
- [x] Objetivo: manifest completo y caché acotada; nueva versión se aplica cuando usuario decide.
- Dependencias: E3. Archivos: sw.js, pwa.js, manifest, iconos, index.
- Conservar: rutas relativas para Pages/subdominio y ejecución file://. Riesgo: mezcla de recursos y pérdida de sesión.
- Aceptación: PNG 192/512 + Apple 180, estado de archivos cacheados verificable, controles instalar/actualizar, no borrar cachés de otras apps ni recargar sin elección.
- Verificación: pruebas del worker con entorno simulado, manifiesto/recursos, prueba offline de navegador si disponible.
- Recuperación: mantener worker previo hasta instalación íntegra; nunca borrar localStorage para actualizar.

### E5 — Verificación final y continuidad (P3)
- [x] Objetivo: documentación, inventario, análisis de seguridad/rendimiento, build estático validado y entrega local recuperable.
- Dependencias: E1–E4. Archivos: docs, README, PLANS, PROGRESO, scripts de comprobación.
- Conservar: sin analítica de niños ni promesas de cobertura total. Riesgo: exagerar evidencia.
- Aceptación: todas las pruebas y comprobaciones relevantes pasan; nueva UI revisada en navegador o bloqueo explícito; docs coinciden; cambios en commits locales; producción intacta.
- Verificación: pruebas, sintaxis, referencias, tamaño, secretos por patrones sin imprimir valores y git diff/status.
- Recuperación: revertir commits locales selectivamente; producción conserva la versión aprobada.

## Bloqueos externos

- Revisión clínica/lingüística profesional y dispositivos físicos Android/iOS: no disponibles en este entorno.
- Cobertura total del español/argentino: requiere definición de inventario y fuentes reutilizables; no prometer totalidad ni inventar cifras.
- Publicación/push/deploy autorizados posteriormente; ver E6.

### E6 — Actualizar GitHub y verificar publicación (autorizada)
- [x] Objetivo: subir revisión probada a main y verificar Tests/Pages sin forzar ni sobrescribir cambios ajenos.
- Dependencias: E1–E5. Alcance: archivos modificados, documentos y assets propios. No permisos, facturación ni dominio.
- Riesgo: CI o caché de clientes. Criterio: lease de main respetado, CI exitoso, HTML/worker nuevos accesibles por HTTPS.
- Recuperación: commit de reversión sobre la revisión anterior si aparece un fallo de despliegue.

## Cierre de la revisión

E1–E6 ejecutadas. GitHub actualizado por etapas. La distribución estática se verificó por HTTPS y coincide byte por byte con HTML, worker e icono locales. Las 24 pruebas y el build pasaron dentro del trabajo build de Pages. Al registrar el cierre, el paso Publicar y Complete job informaban success; GitHub aún mostraba la ejecución global en progreso y el workflow separado Tests en cola. Es seguimiento externo de CI, no un fallo de código identificado. Evidencia y enlaces en PROGRESO_CODEX.md.

Siguiente tarea: comprobar la versión en Android/iOS físicos y revisar objetivos/material con profesional; no ampliar cobertura ni prometer validación sin esa evidencia.

### E7 — Taller gráfico: refinamiento visual (pedido del usuario)
- [x] Objetivo: identidad editorial y lúdica propia, conservando todas las opciones y funciones.
- Motivo: usuario aprueba la amplitud funcional, rechaza apariencia genérica. Prioridad: diseño. Dependencias: E1–E6.
- Alcance: tipografía local con licencia, paleta de tintas, composición, fichas e ilustración decorativa. Archivos: CSS, index, assets, worker, documentos.
- Conservar: IDs, controles, lógica de actividades, datos guardados, voces, importación/exportación y modos por edad. No añadir actividades.
- Riesgos: desbordamiento, distracción, contraste, caché incompleta. Aceptación: todas las funciones conservadas, lectura clara, móviles sin overflow, fuente disponible offline.
- Verificar: suite completa/build, navegador escritorio y 320/390/768/1024, navegación y controles. Recuperar: revertir commit visual sin tocar almacenamiento.
- Publicar al finalizar por autorización vigente; verificar Pages.
