# Habla · Exploradores de palabras

Aplicación web educativa en español rioplatense para acompañar la práctica de escucha, pronunciación, escritura y caligrafía, especialmente entre los 4 y 16 años. Sin cuentas, anuncios ni servicios de IA.

**Versión 1.2.0.** [Abrir Habla](https://zivoplataforma-maker.github.io/habla-local/) · [Estado de publicación](https://github.com/zivoplataforma-maker/habla-local/actions). La revisión local está documentada en VALIDACION.md.

[Guía de uso](docs/GUIA_DE_USO.md) · [Validación](docs/VALIDACION.md) · [Plan maestro](PLANS.md) · [Progreso técnico](PROGRESO_CODEX.md) · [Cambios](CHANGELOG.md)

## Experiencia

- Mapa con cinco estaciones: eco, escritura, sílabas, escucha de pares y trazos.
- Acompañante visual Luma y presentaciones orientativas Descubrir (4–7, con compañía), Explorar (8–11) y Enfocar (12–16). No se recoge edad exacta ni identidad.
- Recorridos opcionales de 3 o 5 estaciones diferentes, sin límite de tiempo ni rankings. El avance refleja participación, no habilidad clínica. Se puede pausar o seguir practicando libremente.
- Juego de sílabas con piezas seleccionables mediante dedo, mouse, Tab y Enter; modelo opcional y posibilidad de quitar la última pieza.
- Calma visual y respeto de reducción de movimiento del sistema.

## Ejecutar localmente

Con Node.js 20 o posterior:

```sh
node server.cjs
```

Abrí http://localhost:4173. No hace falta `npm install`. En Windows se puede usar `INICIAR-WINDOWS.bat`.

También podés abrir `dist/index.html` directamente para banco, escritura y cuaderno. El almacenamiento, voz y micrófono en modo archivo dependen del navegador; instalación y caché PWA necesitan HTTPS o localhost.

Para acceder desde otro equipo o celular de la misma red privada:

```sh
node server.cjs --host 0.0.0.0
```

En el celular abrí `http://IP-DE-LA-COMPUTADORA:4173`, usando la IPv4 de tu equipo. En esta modalidad la computadora debe seguir encendida. La grabación y las funciones PWA pueden no estar disponibles por HTTP de red local. No abras puertos del router. La web pública HTTPS evita depender de una computadora encendida.

## Funciones y cobertura

- **56.725 grafías base** de RLA-ES es_ES y es_AR, sin expansión automática de afijos. No es un diccionario completo de definiciones.
- **94 palabras en la selección educativa**, con sílabas editoriales, emojis ilustrativos y explicaciones breves. La unión del corpus y selección da **56.737 entradas iniciales**; las palabras propias pueden aumentar el total.
- Banco inicia en la selección educativa; un adulto puede seleccionar el corpus general, que no está filtrado por edad. Búsqueda que tolera tildes y distingue ñ de n, filtros, paginación y favoritas.
- Copia/dictado, modelo ocultable y comparación de escritura. Tildes y diéresis importan; mayúsculas/minúsculas no se distinguen.
- Síntesis de voz del navegador, con preferencia es-AR y solo voces locales por defecto. La existencia, calidad y acento de la voz dependen del sistema.
- Grabación temporal de hasta 30 segundos, reproducción y descarga voluntaria. No hay análisis automático de pronunciación.
- Cuaderno de trazado libre, deshacer, grosor, descarga PNG, impresión y escritura alternativa con teclado. Hasta 100 borradores de modelos durante la sesión, no al cerrar o recargar.
- Registro de las últimas 1.000 actividades, con las 30 más recientes visibles. Exportación y restauración combinada de JSON v1/v2, con validación y resumen previo. Sin audios/dibujos en el registro.
- Importación TXT de palabras: hasta 2 MB y 50.000 palabras propias. JSON de restauración: hasta 8 MB. Ver [guía](docs/GUIA_DE_USO.md).

## Instalación y offline

Manifest con iconos PNG 192/512 y Apple 180; botón de instalación cuando el navegador lo ofrece e instrucciones para Android/iOS. No se distribuye APK ni aplicación de App Store.

En HTTPS o localhost, se intenta guardar una copia de los archivos. **Comprobar copia y actualizaciones** verifica que la caché esté completa. La primera carga y las actualizaciones requieren conexión; el navegador puede eliminar la caché. Las voces sin conexión requieren voces locales. Instalación/offline real aún pendientes de comprobar en Android/iOS físicos.

Una versión nueva queda esperando hasta elegir **Aplicar actualización y recargar**. Descargá antes audio y dibujos temporales. El registro guardado permanece. El worker no limpia cachés de otras apps del mismo dominio. No borres todos los datos del sitio para actualizar.

## Privacidad

La aplicación no sube tus palabras practicadas, audios, dibujos ni registro. Se guarda en el navegador y origen usados, sin sincronización ni perfiles separados para pacientes. Otra persona con acceso al mismo navegador puede ver el registro; no hay contraseña de la app.

Si el almacenamiento falla, se informa y la práctica continúa en memoria para poder exportarla. Un registro ilegible se preserva contra sobrescritura silenciosa. Antes de restaurar, se muestra un resumen y se intenta descargar el registro previo; conservá esa copia. Se detectan cambios en otra pestaña para evitar sobreescrituras.

En la web publicada se solicitan archivos a GitHub Pages. GitHub registra IP por seguridad, según su [documentación](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection). Los enlaces externos requieren Internet. Si se desactiva el filtro de voces locales, el proveedor de voz remoto puede recibir el texto reproducido.

## Alcance educativo

No contiene todas las palabras del español o del habla argentina. Tampoco reproduce el DLE o las definiciones de la Academia Argentina de Letras. «Uso argentino» no significa exclusivo de Argentina. La segmentación silábica y selección de grupos son editoriales y necesitan revisión profesional; la prueba automática solo confirma que las partes reconstruyen la palabra.

No es un producto clínicamente validado. No diagnostica, califica articulación ni reemplaza terapia. Los objetivos, contrastes y duración deben elegirse con el profesional. Las variantes dialectales argentinas no son errores. El cuaderno incluye una guía opcional de construcción de las 27 mayúsculas; es un ejemplo, no un método universal ni una evaluación de motricidad. Para quienes no leen, se necesita acompañamiento.

## Desarrollo y verificación

```sh
npm test
npm run check
npm run build
```

Sin compilador ni bundler: `dist/` contiene la web completa. `build` valida sintaxis, recursos y coherencia de la distribución, sin fabricar un bundle. Las pruebas cubren lógica, almacenamiento, juego, captura simulada, servidor y worker simulado; no sustituyen hardware, auditoría completa de accesibilidad o revisión clínica.

`python scripts/build-corpus.py` reconstruye el índice a partir de los originales incluidos. `.github/workflows/pages.yml` verifica y publica `dist/` al cambiar `main` cuando Pages usa GitHub Actions. **No hacer push a main sin autorización: dispara despliegue.**

## Licencias y participación

Corpus: Santiago Bosio y colaboradores de RLA-ES. Régimen original GPL-3.0+, LGPL-3.0+ o MPL-1.1+; esta distribución selecciona MPL-2.0. Incluye originales, afijos, avisos, texto de licencia, hashes y transformación. Ver [procedencia](dist/data/SOURCE.md).

No se ha concedido una licencia abierta al código propio; su elección requiere decisión del titular. La visibilidad pública no concede por sí sola licencia general para reutilizarlo. Las licencias del corpus se mantienen separadas.

Repositorio de `zivoplataforma-maker`. No se añadieron colaboradores ni se cambiaron permisos. Para reportar errores, usá [Issues](https://github.com/zivoplataforma-maker/habla-local/issues), incluyendo dispositivo, navegador y pasos. Los reportes son públicos: no adjuntes registros privados, nombres de pacientes ni grabaciones de menores.

### Diseño 1.1.1
Identidad de taller gráfico: títulos Bricolage Grotesque (Mathieu Triay, OFL), recortes ilustrados propios, papel cálido y tintas. Todas las opciones y actividades se conservan. Fuente servida localmente, también en la caché offline. Origen y licencia: `dist/assets/fonts/`.

### Mejoras 1.2.0
- Filtros en «A tu medida», plegados al empezar; íconos SVG propios y primera acción en registro vacío.
- Público 4–16 explícito y vista previa social con imagen local.
- Mi recorrido: resumen por fechas, actividades y palabras; imprimir/guardar PDF mediante navegador, sin envío automático.
- Mi cuaderno: guía opcional de 27 mayúsculas con animación, pausa, pasos manuales e inicial del texto. Respeta Calma visual y movimiento reducido. Minúscula/cursiva continúan como modelos libres.
- 29 pruebas automatizadas y build estático; sin paquetes nuevos. [Prueba con amigos](docs/PRUEBAS_AMIGOS.md).
