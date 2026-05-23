const CACHE_NAME = 'mrd-crm-v7.6';
const urlsToCache = [
  './',
  './index.html'
];

// Instalasi Service Worker & Simpan UI ke Cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Tarik dari Cache jika Offline
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
