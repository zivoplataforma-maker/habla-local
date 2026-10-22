"""Deriva el índice de grafías de los originales Hunspell incluidos, sin expandir afijos."""
from pathlib import Path
import json,re,hashlib
p=Path(__file__).resolve().parents[1]/'dist'/'data'
words=set();sources=[]
for name in ('index.dic','argentina.dic'):
 b=(p/name).read_bytes(); lines=b.decode('utf-8-sig').splitlines()
 for line in lines[1:]:
  w=line.split('/')[0].split('\t')[0].strip().lower()
  if re.fullmatch('[a-záéíóúüñ]+(?:[ -][a-záéíóúüñ]+)*',w):words.add(w)
 sources.append({'file':name,'sha256':hashlib.sha256(b).hexdigest(),'declaredEntries':lines[0]})
meta={'count':len(words),'sources':sources,'description':'RLA-ES: unión de las entradas base es_ES (2.8, distribución wooorm) y es_AR (distribución LibreOffice). No se expanden reglas de afijos. Datos derivados bajo MPL-2.0, opción permitida por la licencia de origen.'}
(p/'words.js').write_text('/* Corpus derivado RLA-ES; MPL-2.0. Ver LICENSE.md y SOURCE.md. */\nwindow.CORPUS_META='+json.dumps(meta,ensure_ascii=False)+';\nwindow.LEXICON='+json.dumps(sorted(words),ensure_ascii=False,separators=(',',':'))+';\n',encoding='utf8')
(p/'metadata.json').write_text(json.dumps(meta,ensure_ascii=False,indent=2),encoding='utf8')
print(json.dumps(meta,ensure_ascii=False,indent=2))
