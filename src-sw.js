workbox.precaching.precacheAndRoute(self.__precacheManifest);

workbox.routing.registerRoute(
  /https\:\/\/firestore\.googleapis\.com\/v1\/projects\/gemsdeck-9e9a8\/databases\/\(default\)\/documents\/gems/,
  new workbox.strategies.NetworkFirst()
);