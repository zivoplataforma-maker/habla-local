# Procedencia del corpus

Autores: Santiago Bosio y colaboradores de RLA-ES. Recursos obtenidos el 21 de octubre de 2026 (fecha de la sesión del usuario).

- `index.dic`, `index.aff`, `license`: https://github.com/wooorm/dictionaries/tree/main/dictionaries/es (aviso de versión 2.8, es_ES).
- `argentina.dic`, `argentina.aff`, `LICENSE.md`: https://github.com/LibreOffice/dictionaries/tree/master/es (originales `es_AR.dic` y `es_AR.aff`).
- Proyecto original: https://github.com/sbosio/rla-es

Régimen original: GPL versión 3 o posterior, LGPL versión 3 o posterior, o MPL versión 1.1 o posterior, a elección. Esta distribución selecciona MPL-2.0. Texto íntegro en `MPL-2.0.txt`. Los originales están incluidos para permitir verificar y modificar el corpus.

`words.js` es un índice derivado: se quitan flags de afijos, normalizan minúsculas y filtran entradas con caracteres fuera de letras españolas, espacios y guiones; se une y deduplica. No contiene definiciones ni expansión de afijos. Transformación reproducible: `python scripts/build-corpus.py`. Hashes y conteos originales en `metadata.json`.

Las palabras de `../curated.js` y sus explicaciones son una selección editorial propia; no se copiaron definiciones de obras académicas.
