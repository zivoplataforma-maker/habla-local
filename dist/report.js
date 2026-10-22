/* Resumen descriptivo local. Fechas de calendario del dispositivo, sin UTC implícito. */
(function(root){
  'use strict';
  function dayKey(date){return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;}
  function day(value){
    if(!/^\d{4}-\d{2}-\d{2}$/.test(value))throw Error('Elegí las dos fechas del período.');
    const [y,m,d]=value.split('-').map(Number),result=new Date(0);result.setFullYear(y,m-1,d);result.setHours(0,0,0,0);
    if(y<1970||dayKey(result)!==value)throw Error('Revisá las fechas del período.');return result;
  }
  function range(from,to){const start=day(from),end=day(to);if(start>end)throw Error('La fecha inicial debe ser anterior o igual a la final.');end.setDate(end.getDate()+1);return {start:start.getTime(),end:end.getTime()};}
  function summarize(history,from,to){
    const bounds=range(from,to),rows=history.filter(x=>x.at>=bounds.start&&x.at<bounds.end),kinds=new Map(),words=new Map(),days=new Set();
    for(const row of rows){kinds.set(row.kind,(kinds.get(row.kind)||0)+1);days.add(dayKey(new Date(row.at)));const key=row.word.normalize('NFC').toLocaleLowerCase('es');const entry=words.get(key)||{word:key,count:0,kinds:new Set(),first:row.at,last:row.at};entry.count++;entry.kinds.add(row.kind);entry.first=Math.min(entry.first,row.at);entry.last=Math.max(entry.last,row.at);words.set(key,entry);}
    return {from,to,total:rows.length,days:days.size,kinds:[...kinds].sort((a,b)=>a[0].localeCompare(b[0],'es')),words:[...words.values()].map(x=>({...x,kinds:[...x.kinds].sort()})).sort((a,b)=>b.count-a.count||a.word.localeCompare(b.word,'es'))};
  }
  const api={dayKey,range,summarize};if(typeof module!=='undefined')module.exports=api;else root.HablaReport=api;
})(typeof window!=='undefined'?window:this);
