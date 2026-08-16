// Minimal service worker — exists mainly to satisfy Android Chrome's
// "installable web app" criteria so the Install/Add to Home Screen
// prompt appears. Does not cache anything; just passes requests through.
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
