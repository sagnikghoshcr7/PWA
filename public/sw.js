self.addEventListener('install', function(event) {
  console.log('[Service Worker] Installing Service Worker ...', event);
});

self.addEventListener('actvate', function(event) {
  console.log('[Service Worker] Avtivating Service Worker ...', event);
  return self.clients.claim;
});
