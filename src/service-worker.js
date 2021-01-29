import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute'
import { createHandlerForURL } from 'workbox-precaching/createHandlerForURL'
import { NavigationRoute } from 'workbox-routing/NavigationRoute'
import { registerRoute } from 'workbox-routing/registerRoute'


precacheAndRoute(__WB_MANIFEST)

registerRoute(
    new NavigationRoute(createHandlerForURL('/index.html'))
)



importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
    "/precache-manifest.6c05415315464b46ff516bca67982f54.js"
);

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

workbox.core.clientsClaim();

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"), {

    blacklist: [/^\/_/, /\/[^/?]+\.[^/]+$/],
});