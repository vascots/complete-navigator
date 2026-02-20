
const CACHE_NAME='complete-navigator-v1';
const ASSETS=[
  '/', '/index.html','/styles.css','/app.js','/manifest.webmanifest','/src/utils.js',
  '/src/modules/sunAzimuth.js','/src/modules/starAzimuth.js','/src/modules/planeSailing.js',
  '/src/modules/drPlane.js','/src/modules/ctsTide.js','/src/modules/mercator.js','/src/modules/greatCircle.js'
];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))))})
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))})
