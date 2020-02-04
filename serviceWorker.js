/* eslint-disable no-undef */
this.addEventListener('install', function (event) {
  event.waitUntil(
    // eslint-disable-next-line no-undef
    caches.open('v1.2').then(function (cache) {
      return cache.addAll([
        '/',
        '/public/index.html',
        '/public/styles.css',
        '/public/build.js',
        '/public/images/android-icon-36x36.png',
        '/public/images/android-icon-48x48.png',
        '/public/images/android-icon-72x72.png',
        '/public/images/android-icon-96x96.png',
        '/public/images/android-icon-144x144.png',
        '/public/images/android-icon-192x192.png',
        '/public/images/apple-icon-57x57.png',
        '/public/images/apple-icon-60x60.png',
        '/public/images/apple-icon-72x72.png',
        '/public/images/apple-icon-76x76.png',
        '/public/images/apple-icon-120x120.png',
        '/public/images/apple-icon-144x144.png',
        '/public/images/apple-icon-152x152.png',
        '/public/images/apple-icon-180x180.png',
        '/public/images/apple-icon-114x114.png',
        '/public/images/apple-icon-precomposed.png',
        '/public/images/apple-icon.png',
        '/public/images/favicon-16x16.png',
        '/public/images/favicon-32x32.png',
        '/public/images/favicon-96x96.png',
        '/public/images/ms-icon-70x70.png',
        '/public/images/ms-icon-144x144.png',
        '/public/images/ms-icon-150x150.png',
        '/public/images/ms-icon-310x310.png'
      ])
    })
  )
})

this.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request)
    })
  )
})
