/* XSMB Predictor PWA – app-shell cache; cached user data stays in localStorage */
const CACHE_NAME = 'xsmb-predictor-v1-0-3';
const APP_SHELL = [
  './', './index.html', './manifest.webmanifest', './assets/tailwind.js',
  './assets/chart.umd.js', './icons/icon-180.png', './icons/icon-192.png', './icons/icon-512.png'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('xsmb-predictor-') && k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const req=event.request;
  if(req.method!=='GET') return;
  const url=new URL(req.url);
  if(url.origin !== self.location.origin) return;
  // Network-first for page loads to receive updates, cache fallback when offline.
  if(req.mode==='navigate') {
    event.respondWith(fetch(req).then(response => {
      if(response.ok) { const copy=response.clone(); caches.open(CACHE_NAME).then(cache => cache.put('./index.html',copy)); }
      return response;
    }).catch(() => caches.match('./index.html')));
    return;
  }
  event.respondWith(caches.match(req).then(hit => hit || fetch(req).then(response => {
    if(response.ok && url.pathname.startsWith(new URL(self.registration.scope).pathname)) {
      const copy=response.clone(); caches.open(CACHE_NAME).then(cache => cache.put(req,copy));
    }
    return response;
  })));
});
