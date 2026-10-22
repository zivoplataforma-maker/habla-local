# Habla · Palabra a palabra

Web local, en español rioplatense, para acompañar práctica de pronunciación, escritura y caligrafía. Sin cuentas, servicios de IA, pagos ni dependencias de ejecución.

## Empezar

**Opción sencilla en computadora:** descomprimí el proyecto y abrí `dist/index.html`. Banco de palabras, escritura y cuaderno funcionan con los archivos incluidos. El almacenamiento bajo `file://` y las voces varían entre navegadores.

**Opción recomendada:** con Node.js instalado, ejecutá `node server.cjs` en esta carpeta. En Windows podés abrir `INICIAR-WINDOWS.bat`. Abrí http://localhost:4173. No hace falta `npm install`.

Para detener el servidor: Ctrl+C. `npm test` ejecuta las pruebas con Node.js 20 o posterior.

### Celular y tablet en la misma Wi-Fi

1. En PowerShell de la computadora: `$env:HOST="0.0.0.0"; node server.cjs`.
2. Consultá la IPv4 de la computadora con `ipconfig`.
3. En el celular abrí `http://IP-DE-LA-COMPUTADORA:4173` (reemplazá IP-DE-LA-COMPUTADORA por esa IPv4).
4. Si Windows pide permiso de firewall, permití únicamente la red privada que estés usando. No abras puertos del router.

La computadora debe permanecer encendida. El micrófono y la caché offline necesitan un contexto seguro: localhost en el propio dispositivo o HTTPS. No están garantizados desde una dirección HTTP de la red local. El resto de las actividades se puede usar por Wi-Fi. No se ha preparado un instalador Android autónomo.

## Funciones

- Banco de **56.725 grafías únicas**, unión normalizada de RLA-ES es_ES y es_AR; búsqueda que tolera tildes pero distingue ñ de n, filtro por letras, paginación, selección argentina y favoritas.
- Selección educativa original con separación silábica revisada, pictogramas y explicaciones breves.
- Síntesis de voz con preferencia es-AR y filtro de voces locales activado por defecto. No se incluye un motor de voz ni audio humano grabado.
- Grabación temporal de hasta 30 segundos: escuchar y descargar, sin subir audio ni evaluar automáticamente la pronunciación.
- Copia, modelo ocultable, dictado, comparación de escritura que conserva tildes y diéresis.
- Escucha de pares de palabras, por ejemplo pero/perro y pala/para.
- Cuaderno con dedo, lápiz táctil y mouse: renglones, modelo en imprenta o cursiva del dispositivo, grosor, deshacer, borrar, descarga PNG e impresión.
- Alternativa de escritura con teclado; navegación con controles HTML accesibles, foco visible y diseño adaptable.
- Registro local, exportación JSON y borrado confirmado. Las grabaciones no forman parte del registro.
- Importación TXT de palabras (máximo 2 MB, 50.000 entradas propias).

## Alcance real

**No contiene todas las palabras del español ni todas las expresiones argentinas.** Incluye entradas base de dos diccionarios ortográficos abiertos, sin expandir los afijos Hunspell. No es una copia del DLE ni del Diccionario del habla de los argentinos, ni ofrece sus definiciones. El corpus general no está filtrado por edad: un adulto debe seleccionar las palabras antes de trabajar con niños.

No es un producto clínicamente validado. No diagnostica, puntúa la articulación ni reemplaza terapia. Los objetivos, selección de contrastes y duración deben adaptarse con el profesional. Las diferencias dialectales argentinas no son errores. El cuaderno ofrece modelos visuales, no secuencias animadas del orden de trazos ni evaluación de motricidad.

## Privacidad y offline

Los datos se guardan en `localStorage` del navegador y origen utilizados. Otra computadora, otro navegador o el modo incógnito no comparten ese registro. Borrar datos del navegador puede eliminarlo. No ingresar información sensible que no desees conservar allí. La exportación JSON es local y contiene las palabras y fechas registradas.

No hay analítica ni peticiones de la app a terceros al practicar. Los enlaces de fuentes abren sitios externos. Si desactivás «solo voces locales», una voz remota del sistema puede usar su proveedor de red. La app no usa reconocimiento de voz remoto.

Desde localhost, el service worker guarda los archivos necesarios para próximas aperturas offline. Para actualizar una versión manualmente, cambiá la versión de caché en `dist/sw.js` o borrá el almacenamiento del sitio. La primera apertura necesita que el servidor local esté disponible. Las voces offline requieren voces locales instaladas.

## Orden de ejecución seguido

1. Investigación de corpus, licencias y cobertura.
2. Investigación de técnicas y límites clínicos/educativos.
3. Diseño e implementación de interfaz y actividades.
4. Pruebas automatizadas, revisión de código y preparación de pruebas manuales.
5. Publicación del código en https://github.com/zivoplataforma-maker/habla-local.

Detalles: `docs/INVESTIGACION.md`, `docs/DISENO.md`, `docs/VALIDACION.md`.

## GitHub y permisos

Repositorio: https://github.com/zivoplataforma-maker/habla-local

El repositorio es público. La cuenta propietaria es `zivoplataforma-maker`. La publicación no añade colaboradores ni concede permisos de escritura a otras personas. La visibilidad pública permite leer y copiar el contenido; no autoriza modificar el repositorio original. ChatGPT trabaja mediante los permisos que el titular autorice.

Para descargar el proyecto, usá Code → Download ZIP o cloná el repositorio. No publicar exportaciones de prácticas ni grabaciones.

## Licencias y procedencia

Corpus original RLA-ES: Santiago Bosio y colaboradores; multilicencia GPL-3.0+, LGPL-3.0+ o MPL-1.1+. Esta distribución selecciona **MPL-2.0** para los datos y el índice derivado. Se incluyen originales, afijos, avisos, texto de licencia, hashes y script de transformación. Ver `dist/data/SOURCE.md`.

El código propio no tiene una licencia abierta concedida en esta entrega; el titular puede elegirla antes de la publicación. La visibilidad pública por sí sola no concede una licencia general de reutilización del código propio. Las condiciones del corpus se mantienen separadas.
