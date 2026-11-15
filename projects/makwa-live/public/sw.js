// Basic offline app shell cache | تخزين أساسي لواجهة التطبيق دون اتصال
const CACHE_NAME = 'makwa-live-v2';
const scopeUrl = new URL(self.registration.scope);
const shell = ['.', 'index.html', 'manifest.webmanifest', 'icon.svg'].map(path => new URL(path, scopeUrl).href);
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(shell)).then(() => self.skipWaiting())));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('makwa-live-') && key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim())));
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  event.respondWith(caches.match(request).then(cached => cached || fetch(request).then(response => {
    if (response.ok && response.type === 'basic') { const copy = response.clone(); caches.open(CACHE_NAME).then(cache => cache.put(request, copy)); }
    return response;
  }).catch(() => request.mode === 'navigate' ? caches.match(new URL('index.html', scopeUrl).href) : Response.error())));
});
