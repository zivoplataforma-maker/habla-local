# Plan maestro de Habla Local

Fecha: 22/10/2026. Base: `33ecf5c`. Rama local: `mejora-infantil-local`.

## Alcance y reglas

Evolucionar la versión aprobada hacia un espacio visual y lúdico para 4–16 años. Una etapa principal a la vez, con cambios y pruebas independientes. Conservar vocabulario, licencias, funcionamiento local y prácticas existentes. Sin cuentas, APIs pagas ni datos personales. No hacer push, publicar ni desplegar sin nueva autorización. No sobrescribir la copia anterior con cambios preexistentes.

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
- [ ] Objetivo: misiones cortas opcionales, tres presentaciones (4–7, 8–11, 12–16) y juego de sílabas con teclado/tacto/mouse.
- Dependencias: E1. Archivos: index.html, style.css, app.js, play.js, assets propios.
- Alcance: conservar identidad verde/papel, isla de actividades, acompañante visual, progreso de participación sin presión, vocabulario revisable.
- Conservar: actividades originales y acceso a banco/cuaderno/guía. No pedir edad exacta ni perfil personal. Riesgo: infantilización de adolescentes, contraste, excesos de animación.
- Aceptación: cambiar presentación y misión, jugar con sílabas reales de selección (no inferidas), completar y reiniciar recorrido sin perder historial; motion reducido y foco visible.
- Verificación: pruebas puras del juego y de navegación; UI si navegador disponible, control responsive y teclado.
- Recuperación: volver a estilos y marcado de base manteniendo E1.

### E3 — Compatibilidad y estabilidad esenciales (P2)
- [ ] Objetivo: prevenir callbacks obsoletos de audio, dar control a trazos, hacer servidor/dev portables.
- Dependencias: E2. Archivos: app.js, server.cjs, tests.
- Conservar: micrófono solo por acción, sin reconocimiento remoto. Riesgo: limpieza prematura del audio.
- Aceptación: permisos tardíos no activan micro al salir; conservar borrador de trazos por palabra durante sesión; errores de voz no acreditan escucha; control de entrada y codificación del servidor.
- Verificación: tests de cancelación, HTTP, inspección de flujos y pruebas UI posibles.
- Recuperación: restaurar módulos afectados desde commits locales.

### E4 — Instalación, offline y actualización (P2)
- [ ] Objetivo: manifest completo y caché acotada; nueva versión se aplica cuando usuario decide.
- Dependencias: E3. Archivos: sw.js, pwa.js, manifest, iconos, index.
- Conservar: rutas relativas para Pages/subdominio y ejecución file://. Riesgo: mezcla de recursos y pérdida de sesión.
- Aceptación: PNG 192/512 + Apple 180, estado de archivos cacheados verificable, controles instalar/actualizar, no borrar cachés de otras apps ni recargar sin elección.
- Verificación: pruebas del worker con entorno simulado, manifiesto/recursos, prueba offline de navegador si disponible.
- Recuperación: mantener worker previo hasta instalación íntegra; nunca borrar localStorage para actualizar.

### E5 — Verificación final y continuidad (P3)
- [ ] Objetivo: documentación, inventario, análisis de seguridad/rendimiento, build estático validado y entrega local recuperable.
- Dependencias: E1–E4. Archivos: docs, README, PLANS, PROGRESO, scripts de comprobación.
- Conservar: sin analítica de niños ni promesas de cobertura total. Riesgo: exagerar evidencia.
- Aceptación: todas las pruebas y comprobaciones relevantes pasan; nueva UI revisada en navegador o bloqueo explícito; docs coinciden; cambios en commits locales; producción intacta.
- Verificación: pruebas, sintaxis, referencias, tamaño, secretos por patrones sin imprimir valores y git diff/status.
- Recuperación: revertir commits locales selectivamente; producción conserva la versión aprobada.

## Bloqueos externos

- Revisión clínica/lingüística profesional y dispositivos físicos Android/iOS: no disponibles en este entorno.
- Cobertura total del español/argentino: requiere definición de inventario y fuentes reutilizables; no prometer totalidad ni inventar cifras.
- Publicación/push/deploy: requieren autorización separada del titular al final.
