const staticCacheName = "site-static";
const dynamicCache = "site-dynamic";
const assets = [
  "/",
  "/index.html",
  "https://kit.fontawesome.com/b99e675b6e.js",
  "https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap",
  "../src/index.js",
  "/manifest.json",
  "/static/js/bundle.js",
  "/static/js/0.chunk.js",
  "/static/js/main.chunk.js",
  "/favicon.ico",
  "/icons/maskable_icon_x192.png",
  "../src/questions.js",
  "../src/App.js",
  "../src/logo.png",
  "../src/styles/Achievements.scss",
  "../src/styles/App.scss",
  "../src/styles/button.scss",
  "../src/styles/colors.scss",
  "../src/styles/GameMode.scss",
  "../src/styles/multiplayer.scss",
  "../src/styles/multiplayerGame.scss",
  "../src/styles/nav.scss",
  "/fallback.html",
];
//install service worker
self.addEventListener("install", (evt) => {
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log("caching shell assets");
      cache.addAll(assets);
    })
  );
});

//activate service worker
self.addEventListener("activate", (evt) => {
  evt.waitUntil(
    caches.keys().then((keys) => {
      console.log(keys);
      return Promise.all(
        keys
          .filter((key) => key !== staticCacheName && key !== dynamicCache)
          .map((key) => caches.delete(key))
      );
    })
  );
});

//fetch event
self.addEventListener("fetch", (evt) => {
  evt.respondWith(
    caches
      .match(evt.request)
      .then((cacheRes) => {
        return (
          cacheRes ||
          fetch(evt.request).then((fetchRes) => {
            return caches.open(dynamicCache).then((cache) => {
              cache.put(evt.request.url, fetchRes.clone());
              return fetchRes;
            });
          })
        );
      })
      .catch(() => {
        if (evt.request.url.indexOf(".html") > -1) {
          return caches.match("/fallback.html");
        }
      })
  );
});
