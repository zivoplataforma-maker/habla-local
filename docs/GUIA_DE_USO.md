# Guía de uso

## Abrir la aplicación

Entrá a https://zivoplataforma-maker.github.io/habla-local/ desde el navegador del celular, la tablet o la computadora. No necesitás una cuenta ni descargar un ZIP. La primera carga requiere conexión.

El diseño se adapta al ancho de pantalla. En pantallas pequeñas, desplazá horizontalmente la barra de navegación si no ves todas sus opciones. La instalación como PWA y la compatibilidad completa en Android e iOS siguen pendientes de validación.

## Practicar

1. Elegí un grupo de práctica y la extensión de la palabra. Los grupos se basan en una selección editorial; no identifican automáticamente todos los sonidos de cada palabra del banco.
2. Tocá **Escuchar palabra**. Si no suena, entrá a **Guía y ajustes** y revisá la voz disponible.
3. En **Pronunciar**, probá decirla a tu ritmo. **Grabar mi voz** solicita permiso del micrófono y permite escucharte; no analiza ni califica la articulación.
4. En **Escribir**, copiá el modelo o escuchá el dictado. Podés ocultar el modelo. **Comparar escritura** comprueba letras, tildes y diéresis; no distingue mayúsculas de minúsculas ni evalúa la letra manuscrita.
5. En **Escuchar pares**, escuchá primero y elegí la palabra que sonó. Los pares siguen su propia secuencia: no cambian con el filtro del grupo de práctica.

La actividad de pronunciación se registra al tocar **Ya practiqué**; escritura y pares se registran al acertar la comparación. Ese registro representa acciones realizadas en la app, no progreso clínico. Los contadores se basan en las últimas 1.000 actividades conservadas.

## Banco de palabras

Buscá una palabra y tocala para practicar. La búsqueda permite omitir tildes, pero distingue `ñ` de `n`. El banco general no está filtrado por edad. Con niños, seleccioná previamente el material junto a un adulto o profesional.

La estrella guarda o quita una favorita. Podés agregar palabras propias o importar un TXT con una entrada por línea, hasta 2 MB. Se admiten letras españolas, espacios y guiones; máximo 50 caracteres por entrada y 50.000 entradas propias. Las palabras propias se normalizan a minúscula.

Las explicaciones y sílabas pertenecen a la selección educativa. Las demás entradas del banco no incluyen definición ni segmentación silábica.

## Cuaderno

Escribí un modelo de hasta 24 caracteres. Elegí imprenta minúscula, mayúscula o la cursiva disponible en el dispositivo. Trazá con dedo, lápiz táctil o mouse; usá Deshacer para quitar el último trazo. El campo de teclado ofrece práctica de escritura alternativa.

Descargá el PNG para conservar el dibujo o imprimí una ficha. **Registrar práctica de caligrafía** es una marca manual: no evalúa el dibujo. Al cambiar el modelo o seleccionar otra palabra se borran los trazos; tampoco se conservan al cerrar la app.

## Audio y conexión

- **No aparece una voz:** el navegador no expone una voz española compatible. Revisá las voces instaladas del sistema o usá el modelo de un acompañante. No se garantiza una voz argentina en todos los equipos.
- **Solo voces locales:** viene activado. Si lo desactivás, una voz remota puede transmitir el texto a su proveedor y necesitar Internet.
- **No funciona Grabar:** comprobá el permiso del micrófono y usá el enlace HTTPS. La grabación depende del soporte del navegador; se puede practicar sin ella.
- **Sin conexión:** la app intenta guardar sus archivos mediante una caché. La primera apertura y las actualizaciones necesitan conexión; verificá su disponibilidad en tu equipo. El navegador puede eliminar los archivos guardados.

## Guardado y privacidad

Favoritas, palabras propias y registro permanecen en el navegador y dirección web usados. No se sincronizan con otra computadora, otro navegador ni una dirección nueva. No hay perfiles separados para pacientes.

**Exportar registro JSON** descarga las actividades, favoritas y palabras propias. No incluye audios ni dibujos y no hay restauración JSON implementada. **Borrar registro** elimina únicamente las actividades. Borrar todos los datos del sitio desde el navegador también puede eliminar favoritas y palabras propias.

La versión publicada descarga archivos de GitHub Pages. La aplicación no sube el contenido de tus prácticas; GitHub conserva registros de acceso por seguridad. Si compartís una exportación o grabación, revisá antes lo que contiene.
