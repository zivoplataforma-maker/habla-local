/* Captura cancelable: ningún permiso tardío puede reactivar una actividad abandonada. */
(function(root){
  'use strict';
  function create(options){
    let generation=0,active=null,pending=false;
    const schedule=options.setTimeout||setTimeout,clear=options.clearTimeout||clearTimeout;
    const release=s=>s?.getTracks().forEach(t=>t.stop());
    function cancel(){generation++;pending=false;const old=active;active=null;if(old){clear(old.timer);old.recorder.onstop=null;old.recorder.onerror=null;old.recorder.ondataavailable=null;if(old.recorder.state==='recording')old.recorder.stop();release(old.stream);}}
    async function start(){if(pending)return;cancel();const token=generation;pending=true;options.onStatus('pending');let stream=null;
      try{stream=await options.getStream();if(token!==generation){release(stream);return;}const recorder=options.makeRecorder(stream),entry={stream,recorder,chunks:[],timer:null};active=entry;
        recorder.ondataavailable=e=>{if(token===generation&&e.data.size)entry.chunks.push(e.data);};
        recorder.onstop=()=>{clear(entry.timer);release(entry.stream);if(token!==generation)return;active=null;const blob=new Blob(entry.chunks,{type:recorder.mimeType||'audio/webm'});options.onComplete(blob);options.onStatus('ready');};
        recorder.onerror=()=>{if(token!==generation)return;cancel();options.onStatus('error');};
        recorder.start();pending=false;options.onStatus('recording');entry.timer=schedule(()=>{if(token===generation&&recorder.state==='recording')recorder.stop();},options.maxMs||30000);
      }catch{release(stream);if(token===generation){active=null;pending=false;options.onStatus('error');}}
    }
    return {start,cancel,stop(){if(active?.recorder.state==='recording')active.recorder.stop();},isRecording:()=>active?.recorder.state==='recording',isPending:()=>pending};
  }
  const api={create};if(typeof module!=='undefined')module.exports=api;else root.HablaAudio=api;
})(typeof window!=='undefined'?window:this);
