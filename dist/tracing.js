/* Modelos vectoriales propios. Un ejemplo de construcción de imprenta mayúscula. */
(function(root){
  'use strict';
  const stroke=(path,hint)=>({path,hint});
  const MODELS={
    A:[stroke('M100 40L45 180','Desde arriba, bajá en diagonal hacia la izquierda.'),stroke('M100 40L155 180','Volvé arriba y bajá en diagonal hacia la derecha.'),stroke('M67 125H133','Uní los lados de izquierda a derecha.')],
    B:[stroke('M55 40V180','Bajá por el lado izquierdo.'),stroke('M55 40H98C158 40 158 110 98 110H55','Desde arriba, hacé la curva superior hasta el medio.'),stroke('M55 110H103C167 110 167 180 103 180H55','Desde el medio, hacé la curva inferior.')],
    C:[stroke('M151 60C125 25 48 30 48 110C48 190 125 195 151 160','Empezá arriba a la derecha y rodeá hacia la izquierda, hasta abajo a la derecha.')],
    D:[stroke('M55 40V180','Bajá por el lado izquierdo.'),stroke('M55 40H85C180 40 180 180 85 180H55','Desde arriba, rodeá por la derecha y volvé abajo.')],
    E:[stroke('M55 40V180','Bajá por el lado izquierdo.'),stroke('M55 40H150','Arriba, trazá hacia la derecha.'),stroke('M55 110H135','En el medio, trazá hacia la derecha.'),stroke('M55 180H150','Abajo, trazá hacia la derecha.')],
    F:[stroke('M55 40V180','Bajá por el lado izquierdo.'),stroke('M55 40H150','Arriba, trazá hacia la derecha.'),stroke('M55 110H135','En el medio, trazá hacia la derecha.')],
    G:[stroke('M151 60C125 25 48 30 48 110C48 190 152 195 152 125','Rodeá hacia la izquierda y terminá en el lado derecho.'),stroke('M152 125H110','Trazá hacia la izquierda desde el extremo derecho.')],
    H:[stroke('M50 40V180','Bajá por el lado izquierdo.'),stroke('M150 40V180','Bajá por el lado derecho.'),stroke('M50 110H150','Uní los lados de izquierda a derecha.')],
    I:[stroke('M100 40V180','Bajá por el centro.'),stroke('M60 40H140','Arriba, trazá de izquierda a derecha.'),stroke('M60 180H140','Abajo, trazá de izquierda a derecha.')],
    J:[stroke('M145 40V140C145 195 55 195 55 145','Bajá por la derecha y curvá hacia la izquierda.'),stroke('M85 40H145','Arriba, trazá hacia la derecha.')],
    K:[stroke('M55 40V180','Bajá por el lado izquierdo.'),stroke('M150 40L55 115','Desde arriba a la derecha, bajá hasta el lado izquierdo.'),stroke('M90 88L155 180','Desde la unión, bajá en diagonal hacia la derecha.')],
    L:[stroke('M55 40V180H150','Bajá y después avanzá hacia la derecha.')],
    M:[stroke('M45 40V180','Bajá por el lado izquierdo.'),stroke('M45 40L100 130L155 40','Desde arriba a la izquierda, bajá al centro y subí a la derecha.'),stroke('M155 40V180','Bajá por el lado derecho.')],
    N:[stroke('M50 40V180','Bajá por el lado izquierdo.'),stroke('M50 40L150 180','Desde arriba a la izquierda, bajá en diagonal a la derecha.'),stroke('M150 40V180','Bajá por el lado derecho.')],
    'Ñ':[stroke('M50 55V180','Bajá por el lado izquierdo.'),stroke('M50 55L150 180','Desde arriba a la izquierda, bajá en diagonal a la derecha.'),stroke('M150 55V180','Bajá por el lado derecho.'),stroke('M65 28C85 7 115 49 135 28','Agregá la virgulilla de izquierda a derecha, como una pequeña onda.')],
    O:[stroke('M100 40C30 40 30 180 100 180C170 180 170 40 100 40','Desde arriba, rodeá por la izquierda y cerrá el óvalo.')],
    P:[stroke('M55 40V180','Bajá por el lado izquierdo.'),stroke('M55 40H100C165 40 165 115 100 115H55','Desde arriba, rodeá por la derecha hasta el medio.')],
    Q:[stroke('M100 40C30 40 30 180 100 180C170 180 170 40 100 40','Desde arriba, rodeá por la izquierda y cerrá el óvalo.'),stroke('M115 145L162 191','Agregá una diagonal corta hacia abajo a la derecha.')],
    R:[stroke('M55 40V180','Bajá por el lado izquierdo.'),stroke('M55 40H100C165 40 165 110 100 110H55','Desde arriba, rodeá por la derecha hasta el medio.'),stroke('M95 110L155 180','Desde el medio, bajá en diagonal hacia la derecha.')],
    S:[stroke('M150 60C125 20 48 30 50 80C52 120 150 100 150 145C150 195 70 195 45 162','Curvá hacia la izquierda, cruzá el centro y rodeá hacia abajo.')],
    T:[stroke('M40 40H160','Arriba, trazá de izquierda a derecha.'),stroke('M100 40V180','Desde el centro de la línea, bajá.')],
    U:[stroke('M50 40V130C50 197 150 197 150 130V40','Bajá por la izquierda, rodeá abajo y subí por la derecha.')],
    V:[stroke('M45 40L100 180L155 40','Bajá en diagonal al centro y subí hacia la derecha.')],
    W:[stroke('M30 40L65 180L100 75L135 180L170 40','Bajá, subí al centro, volvé a bajar y subí a la derecha.')],
    X:[stroke('M45 40L155 180','Desde arriba a la izquierda, bajá en diagonal a la derecha.'),stroke('M155 40L45 180','Desde arriba a la derecha, bajá en diagonal a la izquierda.')],
    Y:[stroke('M45 40L100 110','Desde arriba a la izquierda, bajá al centro.'),stroke('M155 40L100 110','Desde arriba a la derecha, bajá al centro.'),stroke('M100 110V180','Desde el centro, bajá.')],
    Z:[stroke('M45 40H155L45 180H155','Avanzá a la derecha, bajá en diagonal a la izquierda y avanzá a la derecha.')]
  };
  const LETTERS=Object.keys(MODELS);
  function initial(text){const letter=String(text).normalize('NFC').trim().charAt(0).toLocaleUpperCase('es').replace(/[ÁÉÍÓÚÜ]/g,c=>({'Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U','Ü':'U'})[c]);return LETTERS.includes(letter)?letter:null;}
  function mount(host){
    const $=s=>host.querySelector(s),select=$('#guideLetter'),svg=$('#guideSvg'),status=$('#guideStatus'),play=$('#guidePlay'),next=$('#guideNext'),previous=$('#guidePrevious'),reset=$('#guideReset'),motion=root.matchMedia('(prefers-reduced-motion: reduce)');
    let index=0,frame=0,started=0,elapsed=0,playing=false,progress=0,paths=[],dot=null;
    for(const letter of LETTERS){const option=document.createElement('option');option.value=letter;option.textContent=letter;select.append(option);}
    function element(tag,attrs){const node=document.createElementNS('http://www.w3.org/2000/svg',tag);for(const [key,value]of Object.entries(attrs))node.setAttribute(key,value);return node;}
    function reduced(){return motion.matches||document.body.classList.contains('quiet-mode');}
    function sync(){const model=MODELS[select.value];previous.disabled=index===0;next.disabled=index===model.length-1;play.disabled=reduced();play.textContent=playing?'Pausar animación':progress===1?'Repetir animación':'Ver movimiento';play.setAttribute('aria-pressed',String(playing));$('#guideMotionNote').textContent=reduced()?'Animación desactivada por Calma visual o la preferencia de movimiento reducido. Usá los pasos manuales.':'El punto muestra la dirección del movimiento. Podés pausar cuando quieras.';status.textContent=`${select.value} · Trazo ${index+1} de ${model.length}. ${model[index].hint}`;}
    function paint(){paths.forEach((path,i)=>{path.setAttribute('class',i<index?'guide-done':i===index?'guide-active':'guide-pending');path.style.strokeDasharray='';path.style.strokeDashoffset='';if(i===index){const length=path.getTotalLength();path.style.strokeDasharray=String(length);path.style.strokeDashoffset=String(length*(1-progress));const point=path.getPointAtLength(length*progress);dot.setAttribute('cx',point.x);dot.setAttribute('cy',point.y);}});}
    function pause(){playing=false;cancelAnimationFrame(frame);frame=0;sync();}
    function build(){pause();svg.replaceChildren();paths=[];const model=MODELS[select.value];svg.setAttribute('aria-label',`Letra ${select.value}. ${model.length} trazos. ${model[index].hint}`);
      for(const item of model)svg.append(element('path',{d:item.path,class:'guide-ghost'}));
      for(const item of model){const path=element('path',{d:item.path});paths.push(path);svg.append(path);}
      const match=model[index].path.match(/^M([\d.]+) ([\d.]+)/),x=Number(match[1]),y=Number(match[2]);svg.append(element('circle',{cx:x-16,cy:Math.max(12,y-10),r:10,class:'guide-start'}));const label=element('text',{x:x-16,y:Math.max(12,y-10)+4,class:'guide-number','text-anchor':'middle'});label.textContent=index+1;svg.append(label);dot=element('circle',{r:5,class:'guide-dot'});svg.append(dot);paint();sync();
    }
    function step(delta){pause();index=Math.max(0,Math.min(MODELS[select.value].length-1,index+delta));progress=1;elapsed=0;build();}
    function tick(now){if(!playing)return;if(reduced()||document.hidden||host.closest('[hidden]')||!host.open){pause();return;}if(!started)started=now;elapsed+=now-started;started=now;progress=Math.min(1,elapsed/2200);paint();if(progress===1){pause();return;}frame=requestAnimationFrame(tick);}
    play.onclick=()=>{if(playing){pause();return;}if(reduced())return;if(progress===1){elapsed=0;progress=0;}playing=true;started=0;sync();frame=requestAnimationFrame(tick);};
    previous.onclick=()=>step(-1);next.onclick=()=>step(1);reset.onclick=()=>{index=0;elapsed=0;progress=0;build();};select.onchange=()=>{index=0;elapsed=0;progress=0;build();};host.addEventListener('toggle',()=>{if(!host.open)pause();});document.addEventListener('visibilitychange',()=>{if(document.hidden)pause();});motion.addEventListener?.('change',()=>{pause();});
    select.value='A';build();return {pause,refresh:()=>{if(reduced())pause();else sync();},setLetter(letter){if(!LETTERS.includes(letter))return false;select.value=letter;select.onchange();return true;}};
  }
  const api={MODELS,LETTERS,initial,mount};if(typeof module!=='undefined')module.exports=api;else root.HablaTracing=api;
})(typeof window!=='undefined'?window:this);
