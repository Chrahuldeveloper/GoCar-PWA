let CACHE_NAME = "PWA";
const Urls = ["index.html"];

self.addEventListener("install", (e) => {
  e.waitUnitl(
    caches.open(CACHE_NAME).then((res) => {
      console.log("sucess", res);
      return res.addAll(Urls);
    })
  );
});
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then(() => {
      return fetch(e.request).catch((err) => {
        console.log(err);
      });
    })
  );
});
self.addEventListener("activate", (e) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);
  e.waitUnitl(
    caches.keys().then((cachenames) =>
      Promise.all(
        cachenames.map((cachename) => {
          if (!cacheWhitelist.includes(cachename)) {
            return caches.delete(cachename);
          }
        })
      )
    )
  );
});
