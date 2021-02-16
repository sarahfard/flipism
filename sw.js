const version = "0.0.1";
const cacheName = 'flipism-'+version;
const assets = [
  '/',
  '/index.html',
  '/js/app.js',
  '/js/main.js',
  '/style.css',
  '/images/head.jpg',
  '/images/tail.jpg',
  '/images/favicon.ico',
  '/images/icons/72x72.png',
  '/images/icons/152x152.png',
  '/images/icons/256x256.png',
  '/images/favicon-32x32.png',
  '/images/favicon-16x16.png',
  '/css/fonts.css',
  '/css/fonts.min.css',
  '/fonts/BRoya.eot',
  '/fonts/BRoya.ttf',
  '/fonts/BRoya.woff',
  '../fonts/BRoya.eot?#',
  '../fonts/BRoya.woff',
  '../fonts/BRoya.ttf'
]

self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});

self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== cacheName)
        .map(key => caches.delete(key))
        )
    })
  );
});

self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});