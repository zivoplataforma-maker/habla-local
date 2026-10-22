/* Instalación y actualización: la persona decide cuándo recargar. */
(function(){
  'use strict';
  const status=document.querySelector('#offlineStatus'),notice=document.querySelector('#updateNotice'),apply=document.querySelector('#updateApp'),check=document.querySelector('#checkUpdates'),install=document.querySelector('#installApp');
  let registration=null,waitingPrompt=null,applying=false;
  function connection(){document.querySelector('#connectionBadge').textContent=navigator.onLine?'En línea':'Sin conexión';}
  connection();window.addEventListener('online',connection);window.addEventListener('offline',connection);
  function showWaiting(){if(registration?.waiting){notice.hidden=false;apply.hidden=false;}}
  async function offlineState(){
    if(!navigator.serviceWorker.controller){status.textContent='Preparando archivos para uso sin conexión. Volvé a comprobar en unos segundos.';return;}
    const result=await new Promise(resolve=>{const channel=new MessageChannel(),timer=setTimeout(()=>resolve(null),3000);channel.port1.onmessage=event=>{clearTimeout(timer);channel.port1.close();resolve(event.data);};navigator.serviceWorker.controller.postMessage({type:'STATUS'},[channel.port2]);});
    status.textContent=result?.ready?`Archivos preparados para uso sin conexión · versión ${result.version}. La voz requiere una voz local instalada. El navegador puede liberar esta copia.`:'Todavía no se pudo verificar una copia completa sin conexión. Abrí con Internet y volvé a comprobar.';
  }
  if(!('serviceWorker'in navigator)||location.protocol==='file:'){
    status.textContent='Este navegador o modo de apertura no permite instalar la copia sin conexión. Usá un navegador compatible en HTTPS o localhost; si abriste archivos, conservá la carpeta completa.';check.disabled=true;return;
  }
  navigator.serviceWorker.register('./sw.js',{updateViaCache:'none'}).then(async reg=>{
    registration=reg;showWaiting();reg.addEventListener('updatefound',()=>{const installing=reg.installing;installing?.addEventListener('statechange',()=>{if(installing.state==='installed'){showWaiting();offlineState();}});});
    await navigator.serviceWorker.ready;offlineState();
  }).catch(()=>{status.textContent='No se pudo preparar la copia sin conexión. La web sigue disponible con Internet.';});
  navigator.serviceWorker.addEventListener('controllerchange',()=>{if(applying)location.reload();else offlineState();});
  check.onclick=async()=>{if(!registration)return;check.disabled=true;status.textContent='Comprobando archivos y actualizaciones…';try{await registration.update();showWaiting();await offlineState();}catch{status.textContent='No se pudo comprobar. Revisá la conexión e intentá de nuevo.';}finally{check.disabled=false;}};
  apply.onclick=()=>{if(!registration?.waiting)return;applying=true;registration.waiting.postMessage({type:'ACTIVATE'});};
  window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();waitingPrompt=event;install.hidden=false;});
  install.onclick=async()=>{if(!waitingPrompt)return;try{await waitingPrompt.prompt();await waitingPrompt.userChoice;}finally{waitingPrompt=null;install.hidden=true;}};
  window.addEventListener('appinstalled',()=>{install.hidden=true;});
})();
