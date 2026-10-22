# Guía de uso · versión 1.1.0

Guía de la revisión 1.1.0. El estado de publicación está en GitHub Actions del repositorio.

## Abrir

En una computadora, abrí `dist/index.html` para practicar directamente, o iniciá `node server.cjs` y entrá a http://localhost:4173 para usar las funciones PWA compatibles. No hace falta instalar paquetes npm. En Windows también está `INICIAR-WINDOWS.bat`.

La web publicada es https://zivoplataforma-maker.github.io/habla-local/. No requiere una computadora encendida.

## Mi aventura

Elegí una presentación: **Descubrir · 4–7 con compañía**, **Explorar · 8–11** o **Enfocar · 12–16**. Son estilos de interfaz orientativos, no niveles de desarrollo ni una evaluación. No se guarda la edad ni se pide un nombre. Para quien aún no lee, se necesita una persona que acompañe las consignas.

El mapa ofrece cinco estaciones:

- **La cueva del eco:** escuchar, decir y, si se desea, grabarse.
- **El taller de letras:** copiar o escuchar un dictado y comparar la escritura.
- **El puente de sílabas:** elegir piezas para construir una palabra.
- **El bosque de sonidos:** escuchar una de dos palabras y reconocerla.
- **El jardín de trazos:** dibujar sobre un modelo o practicar con teclado.

Podés elegir un recorrido de 3 o 5 estaciones diferentes, en cualquier orden. El avance registra participación y comparaciones educativas, no precisión clínica. Se puede parar en cualquier momento. **Nuevo recorrido** reinicia el mapa, sin borrar el historial. El recorrido y la presentación se reinician al recargar. **Calma visual** reduce decoraciones y animaciones; también se respeta la preferencia del sistema de reducir movimiento.

## Palabras y actividades

El banco empieza en la selección educativa. Para explorar todas las grafías, cambiá Origen a **Banco completo · revisar con un adulto**. No es un corpus filtrado por edad. La búsqueda tolera omitir tildes, pero distingue ñ de n. La estrella guarda una favorita.

Hay 56.725 grafías base y 94 palabras en la selección. Al combinar ambas fuentes, el banco inicial muestra 56.737 grafías únicas; las palabras propias pueden aumentar ese total. No son todas las palabras del español o del habla argentina. Solo la selección incluye explicaciones breves y segmentación silábica editorial.

Los grupos R fuerte, R suave, L, S y grupos consonánticos son listas editoriales, no un analizador de fonemas. La selección argentina no significa que todas sus palabras sean exclusivas de Argentina. Los pares de escucha tienen su propia secuencia, independiente del filtro de grupo.

La pronunciación se registra al tocar **Ya practiqué**; escritura y sílabas al coincidir con el modelo; pares al elegir la palabra después de terminar la reproducción. Se conserva el último millar de actividades y se muestran las 30 más recientes. No hay puntajes terapéuticos.

## Sílabas y teclado

Escuchá la palabra o mostrá el modelo; elegí las piezas en orden. Se puede usar dedo, mouse o Tab y Enter. Quitar la última permite cambiar el orden. Solo se ofrecen sílabas de la selección editorial: no se inventa una segmentación para palabras importadas. La segmentación necesita revisión lingüística profesional; la prueba automática solo verifica que las partes reconstruyan la palabra.

## Cuaderno

Ingresá un modelo de hasta 24 caracteres. Elegí imprenta minúscula, mayúscula o la cursiva disponible en el dispositivo. Trazá con dedo, lápiz táctil o mouse; Deshacer quita el último trazo. El campo de teclado ofrece práctica escrita alternativa.

Se conservan borradores por texto y estilo durante la sesión (hasta 100 modelos). Volver al mismo texto/estilo recupera sus trazos. Los borradores se pierden al recargar o cerrar. Descargá el PNG para conservarlo o imprimí una ficha. El botón de registrar caligrafía es manual y no evalúa la calidad del trazo.

## Voz y micrófono

La voz depende del navegador y de lo instalado en el sistema. Se prefiere una voz es-AR si existe; no se garantiza acento argentino. El filtro de voces locales está activado por defecto. Desactivarlo puede usar un proveedor remoto y transmitirle el texto reproducido.

La grabación solicita permiso solo al pulsar Grabar, dura como máximo 30 segundos y se puede detener antes. La aplicación no sube audio ni califica articulación. Al cambiar de palabra, actividad o sección, se cancela la grabación y se descarta el audio temporal. Descargalo antes si querés conservarlo. Se puede practicar sin micrófono. Para grabar se necesita HTTPS o localhost y soporte del navegador.

## Copias del registro

**Exportar registro JSON** descarga actividades, favoritas y palabras propias; no incluye dibujos ni audios. **Restaurar copia JSON** permite seleccionar hasta 8 MB, valida todo el archivo y muestra un resumen antes de confirmar. Combina con el registro actual sin duplicar actividades iguales. Si se supera el límite de 1.000 actividades, el resumen informa cuántas antiguas quedarían fuera.

Al confirmar se intenta descargar el registro previo: conservá esa copia. Una copia inválida o un error de escritura no aplica la restauración. Si otra pestaña cambió los datos, exportá esta sesión y recargá antes de importar de nuevo.

Si el registro guardado es ilegible, la app lo protege contra sobrescritura. En Mi recorrido se puede descargar el original y restaurar una copia válida. Si el navegador bloquea el almacenamiento, la práctica continúa en memoria: exportá antes de cerrar. No hay sincronización automática entre equipos ni perfiles separados para pacientes.

## Instalar, actualizar y usar sin conexión

Desde HTTPS o localhost, la app intenta preparar sus archivos sin conexión. En Guía y ajustes, **Comprobar copia y actualizaciones** indica si la caché está completa. El navegador puede liberar esa copia; comprobá su disponibilidad en el dispositivo antes de depender de ella. Las voces offline necesitan voces locales.

El botón **Instalar Habla** aparece solo si el navegador ofrece instalación. También podés usar el menú de Chrome/Edge en Android; en Safari de iPhone/iPad, Compartir → Agregar a inicio. La instalación y el audio aún requieren pruebas en dispositivos físicos.

Cuando hay una versión nueva, se ofrece **Aplicar actualización y recargar**. No recarga durante la práctica sin elección. Descargá antes audio y dibujos; el registro ya guardado se conserva. No borres los datos del sitio para actualizar: podrías perder las palabras y el historial.

## Privacidad y apoyo profesional

No hay cuentas, anuncios ni analítica propia. Las prácticas quedan en el navegador. Al visitar la web pública, GitHub recibe solicitudes de archivos y registra IP por seguridad. En copias locales no se necesita contactar a GitHub para practicar. Los enlaces externos y voces remotas tienen sus propios proveedores.

La herramienta no reemplaza evaluación o tratamiento fonoaudiológico. Elegí objetivos y material con tu profesional. Las variantes del habla argentina no son errores. No se han validado clínicamente los ejercicios ni la caligrafía.

## Opciones nuevas 1.2.0

En Practicar, abrí «A tu medida» para cambiar grupo, extensión y velocidad. Podés abrirlo con Enter o Espacio. Todas las opciones anteriores siguen allí.

En Mi recorrido, elegí Desde/Hasta y pulsá Ver resumen; por defecto son los últimos siete días de calendario del dispositivo. «Todo el registro» usa las fechas del historial conservado. «Imprimir / guardar PDF» abre la impresión del sistema: elegí Guardar como PDF si tu dispositivo lo ofrece. No genera un archivo automáticamente ni envía el resumen. Los conteos describen actividades; no aciertos ni evolución clínica. Podés compartirlo vos después de revisarlo.

En Mi cuaderno, abrí «Mirar cómo se forma una letra». Elegí una de las 27 mayúsculas o usá la inicial del texto. Ver movimiento reproduce el trazo elegido; Pausar lo detiene y conserva su posición. Trazo siguiente/anterior permite recorrer el modelo sin animación; Volver al inicio reinicia la demostración. El círculo numerado marca el inicio y el punto móvil muestra la dirección. Calma visual o movimiento reducido desactivan la reproducción y conservan los pasos manuales. Salir, cerrar el panel o cambiar letra pausa.

Los trazos son modelos propios de imprenta mayúscula y un ejemplo posible, sin validación escolar o clínica. Seguí la forma elegida por tu docente/profesional. La guía no corrige tu dibujo, no cambia el modelo libre y no registra práctica por mirar. Minúsculas y cursiva guiadas no están incluidas.
