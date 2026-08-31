/* ============================================================
   Lohnwerk — Service Worker
   Macht die App offline verfügbar. Er speichert nur die
   Programmdateien im Cache, niemals Nutzerdaten. Die Daten
   des Nutzers liegen ausschließlich im localStorage seines
   Browsers und werden hier weder gelesen noch weitergegeben.
   ============================================================ */

/* Bei jeder neuen Fassung der App diese Zahl erhöhen.
   Dann lädt der Browser die Dateien frisch. */
const CACHE_NAME = "lohnwerk-v4";

/* Diese Dateien machen die App aus. */
const DATEIEN = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon.svg"
];

/* Beim Installieren alles in den Cache legen. */
self.addEventListener("install", (ereignis) => {
  ereignis.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(DATEIEN))
      .then(() => self.skipWaiting())
      .catch(() => {
        /* Wenn eine Datei fehlt, bricht die Installation nicht die App.
           Sie läuft dann eben nur online. */
      })
  );
});

/* Beim Aktivieren die Caches älterer Fassungen aufräumen. */
self.addEventListener("activate", (ereignis) => {
  ereignis.waitUntil(
    caches.keys()
      .then((namen) => Promise.all(
        namen
          .filter((name) => name.startsWith("lohnwerk-") && name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      ))
      .then(() => self.clients.claim())
  );
});

/* ------------------------------------------------------------
   Abrufstrategie:
   - Seitenaufrufe zuerst aus dem Netz, damit Aktualisierungen
     ankommen; ohne Netz aus dem Cache.
   - Alles Übrige zuerst aus dem Cache, damit es sofort da ist,
     und im Hintergrund still aktualisiert.
   ------------------------------------------------------------ */
self.addEventListener("fetch", (ereignis) => {
  const anfrage = ereignis.request;

  /* Nur eigene Dateien und nur normale Abrufe behandeln. */
  if(anfrage.method !== "GET") return;
  const url = new URL(anfrage.url);
  if(url.origin !== self.location.origin) return;

  if(anfrage.mode === "navigate"){
    ereignis.respondWith(
      fetch(anfrage)
        .then((antwort) => {
          const kopie = antwort.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(anfrage, kopie)).catch(() => {});
          return antwort;
        })
        .catch(() => caches.match(anfrage)
          .then((treffer) => treffer || caches.match("./index.html"))
          .then((treffer) => treffer || new Response(
            "<!doctype html><meta charset='utf-8'><title>Lohnwerk</title>" +
            "<body style=\"font-family:-apple-system,'Segoe UI',sans-serif;padding:40px;line-height:1.5\">" +
            "<h1>Lohnwerk ist gerade nicht erreichbar</h1>" +
            "<p>Öffne die Seite noch einmal, sobald du wieder Netz hast.</p>",
            { headers: { "Content-Type": "text/html; charset=utf-8" } }
          ))
        )
    );
    return;
  }

  ereignis.respondWith(
    caches.match(anfrage).then((treffer) => {
      const ausDemNetz = fetch(anfrage)
        .then((antwort) => {
          if(antwort && antwort.status === 200 && antwort.type === "basic"){
            const kopie = antwort.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(anfrage, kopie)).catch(() => {});
          }
          return antwort;
        })
        .catch(() => treffer);
      return treffer || ausDemNetz;
    })
  );
});
