const CACHE_NAME = 'foundry-calc-v1';
const ASSETS = [
  './index.html',
  './manifest.json'
  // Add icon filenames here once you create them
];

// Install the service worker and cache the files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Serve cached files when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});