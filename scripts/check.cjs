'use strict';
const fs=require('node:fs'),path=require('node:path'),{spawnSync}=require('node:child_process'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),dist=path.join(root,'dist');
function requireCondition(ok,message){if(!ok)throw Error(message)}
function files(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?files(path.join(dir,e.name)):[path.join(dir,e.name)])}
for(const file of files(dist).filter(f=>f.endsWith('.js'))){const result=spawnSync(process.execPath,['--check',file],{encoding:'utf8'});requireCondition(result.status===0,result.stderr)}
const html=fs.readFileSync(path.join(dist,'index.html'),'utf8');const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);requireCondition(ids.length===new Set(ids).size,'Hay IDs duplicados');
for(const [,url]of html.matchAll(/(?:src|href)="([^"]+)"/g)){if(/^(https?:|#)/.test(url))continue;requireCondition(fs.existsSync(path.resolve(dist,url)),`Recurso faltante: ${url}`)}
const manifest=JSON.parse(fs.readFileSync(path.join(dist,'manifest.json')));for(const icon of manifest.icons)requireCondition(fs.existsSync(path.join(dist,icon.src)),'Icono faltante');
const pkg=JSON.parse(fs.readFileSync(path.join(root,'package.json')));requireCondition(fs.readFileSync(path.join(dist,'sw.js'),'utf8').includes(`VERSION='${pkg.version}'`),'Versión del worker y paquete no coinciden');
for(const file of ['PLANS.md','PROGRESO_CODEX.md'])requireCondition(fs.existsSync(path.join(root,file)),`Falta ${file}`);
let corpus={window:{}};vm.runInNewContext(fs.readFileSync(path.join(dist,'data/words.js'),'utf8'),corpus);const meta=JSON.parse(fs.readFileSync(path.join(dist,'data/metadata.json')));requireCondition(corpus.window.LEXICON.length===meta.count,'Conteo de corpus inconsistente');
const total=files(dist).reduce((sum,file)=>sum+fs.statSync(file).size,0);console.log(`Comprobación estática correcta: ${ids.length} IDs únicos, recursos completos, scripts válidos, ${meta.count} grafías. dist: ${(total/1024/1024).toFixed(2)} MiB.`);
