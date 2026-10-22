'use strict';
const VERSION='1.1.0';
const SCOPE=self.registration.scope;
const PREFIX='habla:'+encodeURIComponent(SCOPE)+':';
const CACHE=PREFIX+VERSION;
const ASSETS=['./','./index.html','./style.css','./adventure.css','./app.js','./core.js','./play.js','./storage.js','./audio.js','./pwa.js','./curated.js','./data/words.js','./data/license','./data/LICENSE.md','./data/MPL-2.0.txt','./manifest.json','./icon.svg','./assets/luma.svg','./assets/icon-192.png','./assets/icon-512.png','./assets/apple-touch-icon.png'];
const URLS=ASSETS.map(p=>new URL(p,SCOPE).href);
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(URLS))));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith(PREFIX)&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('message',event=>{
  if(event.data?.type==='ACTIVATE')event.waitUntil(self.skipWaiting());
  if(event.data?.type==='STATUS'&&event.ports?.[0])event.waitUntil(caches.open(CACHE).then(async cache=>{const entries=await Promise.all(URLS.map(url=>cache.match(url)));event.ports[0].postMessage({version:VERSION,ready:entries.every(Boolean),count:entries.filter(Boolean).length,total:URLS.length});}));
});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);url.hash='';url.search='';
  if(!url.href.startsWith(SCOPE))return;
  if(!URLS.includes(url.href)&&event.request.mode!=='navigate')return;
  event.respondWith(caches.open(CACHE).then(async cache=>{
    const cached=await cache.match(url.href);
    if(cached)return cached;
    try{return await fetch(event.request);}catch(error){if(event.request.mode==='navigate'){const home=await cache.match(new URL('./index.html',SCOPE).href);if(home)return home;}throw error;}
  }));
});
