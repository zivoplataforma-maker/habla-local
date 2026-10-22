# Habla · Palabra a palabra

Aplicación web en español rioplatense para acompañar la práctica de pronunciación, escritura y caligrafía. Se puede usar desde el navegador o ejecutar en una computadora. Sin cuentas de usuario, anuncios ni servicios de IA.

**[Abrir Habla Local](https://zivoplataforma-maker.github.io/habla-local/)** · [Guía de uso](docs/GUIA_DE_USO.md) · [Estado de validación](docs/VALIDACION.md)

Es una herramienta educativa de apoyo, no un tratamiento validado ni un sistema de diagnóstico.

## Usar desde el celular o la computadora

Abrí **https://zivoplataforma-maker.github.io/habla-local/** en tu navegador. No necesitás descargar el repositorio ni mantener encendida una computadora. La primera carga requiere Internet. Las prácticas se guardan en ese navegador, sin sincronización entre dispositivos.

La web ya está publicada por HTTPS. La compatibilidad funcional completa, la instalación como PWA y el uso sin conexión en Android e iOS todavía requieren pruebas en dispositivos reales. No se distribuyen APK ni una app de App Store.

## Ejecutar una copia local en la computadora

**Opción sencilla en computadora:** descomprimí el proyecto y abrí `dist/index.html`. Banco de palabras, escritura y cuaderno funcionan con los archivos incluidos. El almacenamiento bajo `file://` y las voces varían entre navegadores.

**Opción recomendada:** con Node.js instalado, ejecutá `node server.cjs` en esta carpeta. En Windows podés abrir `INICIAR-WINDOWS.bat`. Abrí http://localhost:4173. No hace falta `npm install`.

Para detener el servidor: Ctrl+C. `npm test` ejecuta las pruebas con Node.js 20 o posterior.

### Alternativa: acceder al servidor de tu computadora por Wi-Fi

1. En PowerShell de la computadora: `$env:HOST="0.0.0.0"; node server.cjs`.
2. Consultá la IPv4 de la computadora con `ipconfig`.
3. En el celular abrí `http://IP-DE-LA-COMPUTADORA:4173` (reemplazá IP-DE-LA-COMPUTADORA por esa IPv4).
4. Si Windows pide permiso de firewall, permití únicamente la red privada que estés usando. No abras puertos del router.

En esta alternativa por Wi-Fi, la computadora debe permanecer encendida. El micrófono y la caché offline necesitan un contexto seguro: localhost en el propio dispositivo o HTTPS. No están garantizados desde una dirección HTTP de la red local. El resto de las actividades se puede usar por Wi-Fi. No se ha preparado un instalador Android autónomo.

## Funciones

- Banco de **56.725 grafías únicas**, unión normalizada de RLA-ES es_ES y es_AR; búsqueda que tolera tildes pero distingue ñ de n, filtro por letras, paginación, selección argentina y favoritas.
- Selección educativa original con separación silábica editorial, emojis ilustrativos y explicaciones breves. La revisión automatizada comprueba que las sílabas reconstruyen la palabra; no valida su corrección lingüística ni la adecuación terapéutica.
- Síntesis de voz con preferencia es-AR y filtro de voces locales activado por defecto. No se incluye un motor de voz ni audio humano grabado.
- Grabación temporal de hasta 30 segundos: escuchar y descargar, sin subir audio ni evaluar automáticamente la pronunciación.
- Copia, modelo ocultable, dictado, comparación de escritura que conserva tildes y diéresis.
- Escucha de pares de palabras, por ejemplo pero/perro y pala/para.
- Cuaderno con dedo, lápiz táctil y mouse: renglones, modelo en imprenta o cursiva del dispositivo, grosor, deshacer, borrar, descarga PNG e impresión.
- Alternativa de escritura con teclado; navegación con controles HTML accesibles, foco visible y diseño adaptable.
- Registro local de las últimas 1.000 actividades; se muestran las 30 más recientes. Exportación JSON y borrado confirmado. La exportación incluye favoritas y palabras propias, pero no audios ni dibujos. No existe una función de restauración desde JSON.
- Importación TXT de palabras (máximo 2 MB, 50.000 entradas propias).

## Alcance real

**No contiene todas las palabras del español ni todas las expresiones argentinas.** Incluye entradas base de dos diccionarios ortográficos abiertos, sin expandir los afijos Hunspell. No es una copia del DLE ni del Diccionario del habla de los argentinos, ni ofrece sus definiciones. El corpus general no está filtrado por edad: un adulto debe seleccionar las palabras antes de trabajar con niños.

No es un producto clínicamente validado. No diagnostica, puntúa la articulación ni reemplaza terapia. Los objetivos, selección de contrastes y duración deben adaptarse con el profesional. Las diferencias dialectales argentinas no son errores. El cuaderno ofrece modelos visuales, no secuencias animadas del orden de trazos ni evaluación de motricidad.

## Privacidad y offline

Los datos se guardan en `localStorage` del navegador y origen utilizados. Otra computadora, otro navegador o el modo incógnito no comparten ese registro. Borrar datos del navegador puede eliminarlo. No ingresar información sensible que no desees conservar allí. La exportación JSON es local y contiene las palabras y fechas registradas.

La aplicación no incorpora analítica propia ni envía palabras practicadas, dibujos o grabaciones a un servidor. En la versión publicada, el navegador descarga los archivos de GitHub Pages; GitHub registra la dirección IP de las visitas por motivos de seguridad, según su [documentación](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection). Los enlaces de fuentes abren sitios externos. Si desactivás «solo voces locales», una voz remota del sistema puede usar su proveedor de red. La app no usa reconocimiento de voz remoto.

Desde HTTPS o localhost, el service worker intenta guardar los archivos para próximas aperturas sin conexión. Esto no garantiza su disponibilidad: el navegador puede restringir o eliminar la caché. Comprobá el funcionamiento en tu dispositivo antes de depender de él. Las voces sin conexión requieren voces locales instaladas.

Para quienes mantienen el proyecto: al modificar archivos publicados, incrementá la versión de caché en `dist/sw.js`. Después de actualizar, cerrá las pestañas de la app y volvé a abrirla con conexión. No borres todos los datos del sitio como primer paso: también podrías perder el registro y las palabras guardadas.

Las grabaciones y los trazos son temporales. Descargalos antes de salir si querés conservarlos. El guardado local no está protegido por una contraseña de la app; otra persona que use el mismo navegador puede acceder al registro.

## Orden de ejecución seguido

1. Investigación de corpus, licencias y cobertura.
2. Investigación de técnicas y límites clínicos/educativos.
3. Diseño e implementación de interfaz y actividades.
4. Pruebas automatizadas, revisión de código y preparación de pruebas manuales.
5. Publicación del código en https://github.com/zivoplataforma-maker/habla-local.

Detalles: [Investigación](docs/INVESTIGACION.md), [diseño](docs/DISENO.md), [validación](docs/VALIDACION.md) y [pendientes](docs/PENDIENTES.md).

## GitHub y permisos

Repositorio: https://github.com/zivoplataforma-maker/habla-local

El repositorio es público. La cuenta propietaria es `zivoplataforma-maker`. La publicación no añade colaboradores ni concede permisos de escritura a otras personas. La visibilidad pública permite leer y copiar el contenido; no autoriza modificar el repositorio original. ChatGPT trabaja mediante los permisos que el titular autorice.

Para descargar el proyecto, usá Code → Download ZIP o cloná el repositorio. No publicar exportaciones de prácticas ni grabaciones.

## Licencias y procedencia

Corpus original RLA-ES: Santiago Bosio y colaboradores; multilicencia GPL-3.0+, LGPL-3.0+ o MPL-1.1+. Esta distribución selecciona **MPL-2.0** para los datos y el índice derivado. Se incluyen originales, afijos, avisos, texto de licencia, hashes y script de transformación. Ver [procedencia y licencias del corpus](dist/data/SOURCE.md).

El código propio no tiene una licencia abierta concedida en esta entrega; su elección queda pendiente del titular. La visibilidad pública por sí sola no concede una licencia general de reutilización del código propio. Las condiciones del corpus se mantienen separadas.

## Informar un problema o proponer mejoras

Usá [Issues](https://github.com/zivoplataforma-maker/habla-local/issues) e indicá el dispositivo, navegador, pasos y resultado esperado. Para errores lingüísticos, incluí la palabra y una fuente verificable. No adjuntes nombres de pacientes, grabaciones de menores ni registros personales: los reportes son públicos.

## Desarrollo y publicación

- `npm test`: pruebas automatizadas con Node.js 20 o posterior; el flujo de GitHub usa Node.js 22.
- `python scripts/build-corpus.py`: reconstruye el índice a partir de los diccionarios incluidos; requiere Python 3.
- `.github/workflows/pages.yml`: verifica el proyecto y publica únicamente `dist/` en GitHub Pages al actualizar `main`.
- La pantalla Settings → Pages debe conservar GitHub Actions como origen de publicación.

La publicación exitosa y las pruebas automatizadas no equivalen a una validación visual, de accesibilidad completa o clínica.
