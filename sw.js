const CACHE='crazy-radio-app-v1';
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./','./index.html','./crazy-radio-design.jpg','./manifest.webmanifest']))));
self.addEventListener('fetch',e=>{if(new URL(e.request.url).origin===location.origin)e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
