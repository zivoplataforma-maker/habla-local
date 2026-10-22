/* Reglas del juego educativo: independientes de la interfaz y sin puntuación clínica. */
(function(root){
  'use strict';
  const STATIONS=[
    {id:'Pronunciación',title:'La cueva del eco',short:'Escuchá y decí',icon:'♪',page:'practica',mode:'hablar',color:'mint'},
    {id:'Escritura',title:'El taller de letras',short:'Escribí una palabra',icon:'✎',page:'practica',mode:'escribir',color:'peach'},
    {id:'Sílabas',title:'El puente de sílabas',short:'Armá la palabra',icon:'▦',page:'practica',mode:'silabas',color:'lavender'},
    {id:'Escucha de pares',title:'El bosque de sonidos',short:'Escuchá las diferencias',icon:'♫',page:'practica',mode:'contrastes',color:'sky'},
    {id:'Caligrafía',title:'El jardín de trazos',short:'Dibujá las letras',icon:'〰',page:'cuaderno',color:'lemon'}
  ];
  function shuffled(parts,random=Math.random){const result=parts.map((text,id)=>({text,id}));for(let i=result.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[result[i],result[j]]=[result[j],result[i]];}if(result.length>1&&result.every((x,i)=>x.id===i))result.push(result.shift());return result;}
  function matches(parts,selection){return parts.length===selection.length&&parts.every((p,i)=>p===selection[i]);}
  function progress(completed,target){const unique=[...new Set(completed)].filter(id=>STATIONS.some(s=>s.id===id));return {completed:unique,count:unique.length,target,done:unique.length>=target,ratio:Math.min(1,unique.length/target)};}
  const api={STATIONS,shuffled,matches,progress};if(typeof module!=='undefined')module.exports=api;else root.HablaPlay=api;
})(typeof window!=='undefined'?window:this);
