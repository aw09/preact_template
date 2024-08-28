import { getFiles, setupPrecaching, setupRouting } from 'preact-cli/sw/';

setupRouting();
setupPrecaching(getFiles());

// // Force the waiting service worker to become the active service worker
// self.addEventListener('install', event => {
//   self.skipWaiting();
// });

// // Clear old caches on activate
// self.addEventListener('activate', event => {
//   event.waitUntil(
//     caches.keys().then(cacheNames => {
//       return Promise.all(
//         cacheNames.map(cache => {
//           if (cache !== 'preact-cli') { // Replace 'preact-cli' with your cache name if different
//             return caches.delete(cache);
//           }
//         })
//       );
//     })
//   );
//   return self.clients.claim();
// });

// // Fetch event to serve cached content
// self.addEventListener('fetch', event => {
//   event.respondWith(
//     caches.match(event.request).then(response => {
//       return response || fetch(event.request);
//     })
//   );
// });