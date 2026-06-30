// =====================================================
// sw.js  -  Service Worker
// Proposta Mari Amaral. Artefato estatico soberano:
// uma vez carregado, abre offline. Cache-first com
// fallback de rede. Sem analytics, sem push, sem
// dependencia externa.
// =====================================================

const VERSION = "mari-amaral-proposta-v2";
const PRECACHE = [
  "/",
  "/index.html",
];

// -----------------------------------------------------
// install: pre-carrega a casca e ativa de imediato
// -----------------------------------------------------
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(VERSION)
      .then((cache) => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
});

// -----------------------------------------------------
// activate: remove caches de versoes antigas
// -----------------------------------------------------
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => k !== VERSION)
            .map((k) => caches.delete(k))
        )
      )
      .then(() => self.clients.claim())
  );
});

// -----------------------------------------------------
// fetch: cache-first, atualiza em segundo plano.
// so intercepta GET de mesma origem.
// -----------------------------------------------------
self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET") return;
  if (new URL(request.url).origin !== self.location.origin) return;

  event.respondWith(
    caches.match(request).then((cached) => {
      const network = fetch(request)
        .then((response) => {
          // so cacheia respostas validas
          if (response && response.status === 200) {
            const copy = response.clone();
            caches.open(VERSION).then((cache) =>
              cache.put(request, copy)
            );
          }
          return response;
        })
        .catch(() => cached);

      // entrega cache imediato, rede revalida atras
      return cached || network;
    })
  );
});