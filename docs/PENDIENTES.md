# Estado y mejoras pendientes

Actualizado el 22 de octubre de 2026. Esta lista separa lo implementado de lo que todavía requiere trabajo.

## Implementado

- Web pública por HTTPS y ejecución local opcional.
- Banco de 56.725 entradas base; selección educativa y vocabulario de uso argentino.
- Voz del navegador, grabación temporal, copia/dictado, pares de palabras y cuaderno.
- Registro local, favoritas, importación TXT y exportación JSON.
- Pruebas automatizadas y publicación mediante GitHub Actions.

## Prioridad siguiente

1. Probar los flujos en Android Chrome, iOS Safari y escritorio: audio, permisos, teclado, trazado, impresión y descargas.
2. Completar y validar instalación PWA, iconos específicos para plataformas, aviso de actualización y modo sin conexión.
3. Revisar lingüísticamente la separación silábica, los grupos de sonidos, los ejemplos y la adecuación por edad con una persona especializada.
4. Auditar accesibilidad con lectores de pantalla, zoom, contraste y navegación con teclado. El diseño adaptable no acredita una norma de accesibilidad.
5. Añadir restauración del registro exportado, si se necesita migración entre equipos. Hoy solo existe exportación.
6. Ampliar el léxico y sus metadatos mediante fuentes reutilizables; distinguir lemas, flexiones, regionalismos y definiciones. No anunciar cobertura total sin un inventario verificable.

## Decisiones del titular

- Elegir una licencia para el código propio. Las licencias del corpus ya están documentadas y no se deben reemplazar por una licencia general incompatible.
- Elegir si se usará un dominio propio. Cambiar de dominio cambia el almacenamiento del navegador; el registro no migra automáticamente.

## Presentación en GitHub

La descripción actual es coherente con la versión local, pero puede describir mejor la disponibilidad web y el carácter educativo. Texto sugerido para About, inferior a 350 caracteres:

> Aplicación web educativa de apoyo a la práctica fonoaudiológica: 56.725 entradas ortográficas y selección argentina, escucha, grabación de voz, dictado, escritura y trazado. Uso web o local, con registro en el navegador. No diagnostica ni reemplaza la atención profesional.

Website sugerido para About: https://zivoplataforma-maker.github.io/habla-local/

La revisión de archivos no cambia automáticamente esos campos de configuración del repositorio.
