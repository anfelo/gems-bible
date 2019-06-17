importScripts("precache-manifest.d811ba1dc67cecc5deca5730529ecab2.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.precaching.precacheAndRoute(self.__precacheManifest);

workbox.routing.registerRoute(
  /https\:\/\/firestore\.googleapis\.com\/v1\/projects\/gemsdeck-9e9a8\/databases\/\(default\)\/documents\/gems/,
  new workbox.strategies.NetworkFirst()
);
