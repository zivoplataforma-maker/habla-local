# Validación · actualizado el 22 de octubre de 2026

## Ejecutado en la versión inicial y su publicación

- `node --check` sobre JavaScript de aplicación y servidor: sin errores sintácticos.
- `npm test`: 7 pruebas automatizadas, todas aprobadas.
- 56.725 entradas únicas, coherencia de metadatos y comprobación de grafías representativas.
- Tildes, Unicode compuesto, distinción ñ/n, rechazo de líneas HTML y números, duplicados de importación.
- Selección educativa: palabras únicas y correspondencia entre sílabas y palabra completa.
- Existencia de recursos declarados en la caché.
- Servidor HTTP: página inicial, corpus, MIME, inexistentes, rutas fuera del directorio y codificación inválida.
- Revisión de código: datos externos renderizados con textContent; micrófono bajo acción explícita; cancelación de permisos pendientes; cierre de pistas; revocación de audio temporal; confirmación de borrado; fallback cuando no existen voces.

## Bloqueo de verificación visual

El navegador del entorno no pudo abrir la vista local; un segundo intento devolvió un bloqueo de política del navegador. No se intentó eludirlo. **No se verificaron visualmente los layouts ni se ejecutaron flujos UI en un navegador real.** Las pruebas automatizadas no sustituyen esa comprobación.

## Pendiente en dispositivos reales

- Android Chrome: anchos 360/412 px, orientación, teclado virtual, scroll y trazado con dedo.
- Windows Chrome/Edge: navegación completa con teclado, mouse, impresión y descarga PNG.
- iPhone/iPad Safari: Pointer Events, voz y formato MediaRecorder.
- Micrófono: aceptar/denegar, detener, límite de 30 s, cambiar de palabra durante grabación.
- Instalar voz española local y verificar reproducción sin conexión, diferenciando la variante es-AR de otras.
- Abrir desde localhost, esperar instalación de caché, cerrar servidor y recargar; verificar actualización de versiones.
- Buscar, marcar favorita, recargar, importar TXT, escribir con tildes, comparar pares y exportar registro.
- Revisar vocabulario y tareas con profesional. No hubo evaluación clínica ni pruebas con pacientes.

## Publicación

Repositorio público: https://github.com/zivoplataforma-maker/habla-local.

Web: https://zivoplataforma-maker.github.io/habla-local/.

El flujo de publicación del commit `248648d3b895cd0757ac9201851150a0da34ac48` finalizó correctamente tras habilitar Pages; build y deploy exitosos, con 7 pruebas aprobadas. Se verificó una respuesta HTTP 200 y el contenido esperado en la página publicada. Esta comprobación no ejecutó interacciones en el navegador.

La revisión editorial del 22 de octubre actualiza instrucciones para la web publicada, alcance, privacidad y mensajes. No añade evidencia de pruebas clínicas o de compatibilidad móvil completa.
