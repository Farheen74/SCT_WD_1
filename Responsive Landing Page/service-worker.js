const CACHE = 'webnova-v1';
const ASSETS = ['/','/manifest.json','/static/css/style.css','/static/js/main.js','/static/img/favicon.svg'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('fetch', e=> e.respondWith(caches.match(e.request).then(r=> r || fetch(e.request))));
