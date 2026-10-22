Desde esta revisión se conserva la distinción entre tests locales y comprobaciones de publicación.

# Validación · revisión 1.1.0 · 22/10/2026

## Evidencia confirmada

| Área | Evidencia | Alcance |
|---|---|---|
| Base inicial | 7 pruebas aprobadas antes de modificar | Corpus, escritura, importación TXT, archivos y servidor |
| Revisión local | 24 pruebas aprobadas | Incluye almacenamiento, juego, captura y worker simulados |
| Sintaxis/distribución | `npm run check`, `npm run build` | JS, IDs únicos, recursos locales, iconos, versión y conteo |
| Interfaz real | Chrome cloud, escritorio 1348/1363 px | Mapa, sílabas, escritura, registro manual, celebración, modo adolescente y reinicio |
| Responsive | Iframes con viewport fijo 320, 390, 768 y 1024 px | Inspección de layout; no emulación de hardware móvil |
| Pantalla 320 px | Aventuras, sílabas, escritura, pares, pronunciación y recorrido sin overflow de página | El menú y pestañas pueden desplazarse horizontalmente dentro de su contenedor |
| Búsqueda móvil | `lapiz` encuentra `lápiz` | 390 px; filtro inicial educativo |
| Cuaderno móvil | Trazo con mouse visible, recuperación al cambiar perro → gato → perro, coincidencia con teclado | Borrador temporal, no persistencia al cerrar |
| Teclado | Juego perro resuelto con Enter en piezas | Controles nativos; no auditoría completa de lector de pantalla |
| Consola | Sin errores con origen de la aplicación en los flujos inspeccionados | Errores internos de extensión del entorno separados |

Se detectó y corrigió overflow de la práctica en 320 px mediante min-width:0 en hijos de grid y ajuste de controles. Se corrigieron también textos de guardado fallido, plural de resultados y cancelación de voz entre actividades.

## Pruebas automatizadas

- Corpus: 56.725 grafías base, sin duplicados y con metadatos coherentes; integridad de selección editorial.
- Escritura: tildes, diéresis, Unicode compuesto y ñ/n.
- Estado: v1/v2, copias inválidas, fechas imposibles, mezcla idempotente, límite de 1.000 actividades, lectura protegida y fallos de escritura.
- Juego: identidad de piezas repetidas, orden de sílabas y estaciones diferentes.
- Captura: permiso tardío tras cancelación, final normal único, abandono sin entrega de audio, límite temporal y permiso denegado. Streams/recorder son falsos de prueba; no se abrió micrófono real.
- Worker: instalación completa, estado verificable, activación explícita, respuesta offline simulada e independencia de otras cachés del origen.
- Servidor: MIME, GET/HEAD, métodos rechazados, rutas inválidas y symlink externo.

## Implementado pero pendiente de verificar en entorno real

- Instalación PWA y funcionamiento offline completos en Android/iPhone/iPad.
- Voces reales (incluida es-AR), micrófono físico, formatos de audio, descarga e impresión en cada sistema.
- Restauración mediante selector de archivo en un navegador real: el parser y la transacción de datos están cubiertos por tests; los controles se comprobaron visualmente.
- Lectores de pantalla, zoom extremo, contraste en todas las combinaciones y auditoría WCAG completa.
- La vista HTTP interna de QA no acredita instalación PWA; el resultado de la publicación HTTPS se registra por separado en PROGRESO_CODEX.md.
- No hubo revisión clínica/lingüística profesional ni pruebas con pacientes.

## Producción y seguridad

La versión publicada anterior se desplegó correctamente desde `248648d`; la revisión editorial está en `33ecf5c`. La implementación parte de `33ecf5c` en una copia aislada, rama local `mejora-infantil-local`. El titular autorizó posteriormente actualizar GitHub, incluido el flujo de publicación existente. Los cambios y evidencias de publicación se registran en PROGRESO_CODEX.md.

No se añadieron dependencias, servicios de terceros, cuentas, analítica ni permisos remotos. No se detectaron archivos de secretos en el proyecto. La ausencia de hallazgos en esta revisión no equivale a una auditoría externa de seguridad.
