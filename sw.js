/* ============================================================
   LUXURY RESIDENCES — SERVICE WORKER
   Cache-first para assets estáticos (incluindo imagens locais),
   stale-while-revalidate para fontes externas
   ============================================================ */

const CACHE_VERSION = 'luxe-v1';
const CACHE_STATIC  = `${CACHE_VERSION}-static`;

// Assets que entram no cache na instalação
const STATIC_ASSETS = [
  './index.html',
  './luxe.css',
  './luxe.js',
  './i18n.js',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap',
];

// ── INSTALL: pré-cacheia os assets estáticos ─────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_STATIC).then(cache => {
      return cache.addAll(STATIC_ASSETS).catch(err => {
        // Falha parcial não impede a instalação
        console.warn('[SW] Alguns assets não foram cacheados:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// ── ACTIVATE: limpa caches de versões antigas ────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k.startsWith('luxe-') && k !== CACHE_STATIC)
          .map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// ── FETCH: estratégia por tipo de recurso ────────────────────
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Ignora requests que não são GET ou são de outras origens não-whitelisted
  if (request.method !== 'GET') return;

  // Google Fonts → stale-while-revalidate
  if (url.hostname.includes('fonts.googleapis.com') || url.hostname.includes('fonts.gstatic.com')) {
    event.respondWith(staleWhileRevalidate(request, CACHE_STATIC));
    return;
  }

  // Assets estáticos locais → cache-first
  if (url.origin === self.location.origin) {
    event.respondWith(cacheFirst(request));
    return;
  }
});

// ── ESTRATÉGIAS ──────────────────────────────────────────────

/** Cache-first: retorna do cache se existir, senão busca na rede e cacheia */
async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_STATIC);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    // Offline e sem cache — retorna página principal como fallback
    return caches.match('./index.html');
  }
}

/** Stale-while-revalidate: retorna cache imediatamente e atualiza em background */
async function staleWhileRevalidate(request, cacheName) {
  const cache  = await caches.open(cacheName);
  const cached = await cache.match(request);

  const networkPromise = fetch(request).then(response => {
    if (response.ok) cache.put(request, response.clone());
    return response;
  }).catch(() => null);

  return cached || networkPromise;
}

// ── PUSH NOTIFICATIONS (base para futuro) ───────────────────
self.addEventListener('push', event => {
  if (!event.data) return;
  const data = event.data.json();
  event.waitUntil(
    self.registration.showNotification(data.title || 'Luxury Residences', {
      body: data.body || '',
      icon: './icon-192.png',
      badge: './icon-192.png',
      data: { url: data.url || './' },
    })
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then(windowClients => {
      for (const client of windowClients) {
        if (client.url === event.notification.data.url && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) return clients.openWindow(event.notification.data.url);
    })
  );
});
