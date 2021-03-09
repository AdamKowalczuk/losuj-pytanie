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
  // "../src/actions/index.js",

  // "../src/components/Achievements.js",
  // "../src/components/GameMode.js",
  // "../src/components/Multiplayer.js",
  // "../src/components/MultiplayerGame.js",
  // "../src/components/Nav.js",
  // "../src/components/NavMultiplayer.js",

  // "../src/reducers/actualPlayer.js",
  // "../src/reducers/category.js",
  // "../src/reducers/counter.js",
  // "../src/reducers/draw.js",
  // "../src/reducers/exp.js",
  // "../src/reducers/index.js",
  // "../src/reducers/isAchievementsOpen.js",
  // "../src/reducers/isCategorySelected.js",
  // "../src/reducers/isMenuDisabled.js",
  // "../src/reducers/isStarted.js",
  // "../src/reducers/level.js",
  // "../src/reducers/mode.js",
  // "../src/reducers/players.js",
  // "../src/reducers/playersNumber.js",
  // "../src/reducers/previousActive.js",
  // "../src/reducers/requiredExp.js",
];
//install service worker
self.addEventListener("install", (evt) => {
  // console.log("Service worker has been installed");
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log("caching shell assets");
      cache.addAll(assets);
    })
  );
});

//activate service worker
self.addEventListener("activate", (evt) => {
  // console.log("service worker has been activated");
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
  // console.log("fetch event", evt);
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

// // Names of the two caches used in this version of the service worker.
// // Change to v2, etc. when you update any of the local resources, which will
// // in turn trigger the install event again.
// const PRECACHE = "precache-v1";
// const RUNTIME = "runtime";

// // A list of local resources we always want to be cached.
// const PRECACHE_URLS = [
//   "index.html",
//   "./", // Alias for index.html
//   "styles.css",
//   "../../styles/main.css",
//   "demo.js",
//   "./styles/App.scss",
//   "./styles/button.scss",
//   "./styles/nav.scss",
//   "./components/Nav",
//   "react",
//   "./components/GameMode",
//   "./components/Achievements",
// ];

// // The install handler takes care of precaching the resources we always need.
// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     caches
//       .open(PRECACHE)
//       .then((cache) => cache.addAll(PRECACHE_URLS))
//       .then(self.skipWaiting())
//   );
// });

// // The activate handler takes care of cleaning up old caches.
// self.addEventListener("activate", (event) => {
//   const currentCaches = [PRECACHE, RUNTIME];
//   event.waitUntil(
//     caches
//       .keys()
//       .then((cacheNames) => {
//         return cacheNames.filter(
//           (cacheName) => !currentCaches.includes(cacheName)
//         );
//       })
//       .then((cachesToDelete) => {
//         return Promise.all(
//           cachesToDelete.map((cacheToDelete) => {
//             return caches.delete(cacheToDelete);
//           })
//         );
//       })
//       .then(() => self.clients.claim())
//   );
// });

// // The fetch handler serves responses for same-origin resources from a cache.
// // If no response is found, it populates the runtime cache with the response
// // from the network before returning it to the page.
// self.addEventListener("fetch", (event) => {
//   // Skip cross-origin requests, like those for Google Analytics.
//   if (event.request.url.startsWith(self.location.origin)) {
//     event.respondWith(
//       caches.match(event.request).then((cachedResponse) => {
//         if (cachedResponse) {
//           return cachedResponse;
//         }

//         return caches.open(RUNTIME).then((cache) => {
//           return fetch(event.request).then((response) => {
//             // Put a copy of the response in the runtime cache.
//             return cache.put(event.request, response.clone()).then(() => {
//               return response;
//             });
//           });
//         });
//       })
//     );
//   }
// });
