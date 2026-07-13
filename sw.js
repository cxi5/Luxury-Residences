/* ============================================================
   LUXURY RESIDENCES — SERVICE WORKER
   Cache-first para assets estáticos (incluindo imagens locais),
   stale-while-revalidate para fontes externas
   ============================================================ */

// IMPORTANTE: sempre que fizer deploy de mudanças em index.html/auth.js/
// luxe.js/i18n.js/luxe.css, BUMPE esse número de versão. É a única forma do
// navegador dos usuários que já visitaram o site perceber que o sw.js mudou
// e instalar a nova versão — senão eles ficam presos na versão em cache
// mesmo depois de você atualizar os arquivos no servidor.
const CACHE_VERSION = 'luxe-v2';
const CACHE_STATIC  = `${CACHE_VERSION}-static`;

// Extensões de "código" — sempre buscadas da rede primeiro, cache só como
// fallback offline. Evita servir JS/HTML desatualizado depois de um deploy.
const NETWORK_FIRST_EXTS = ['.html', '.js', '.css', '.json'];

// Assets que entram no cache na instalação (código, pra ter fallback offline)
const STATIC_ASSETS = [
  './index.html',
  './luxe.css',
  './luxe.js',
  './auth.js',
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

  // Assets locais de código (html/js/css/json) → network-first, pra sempre
  // pegar a versão mais nova do servidor quando há internet
  if (url.origin === self.location.origin) {
    const isCode = NETWORK_FIRST_EXTS.some(ext => url.pathname.endsWith(ext)) || url.pathname === '/' || url.pathname.endsWith('/');
    if (isCode) {
      event.respondWith(networkFirst(request));
      return;
    }
    // Resto (imagens, ícones etc.) → cache-first, são pesados e raramente mudam
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

/** Network-first: tenta a rede (sempre atualizado), cai pro cache se offline/falhar */
async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_STATIC);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await caches.match(request);
    return cached || caches.match('./index.html');
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
