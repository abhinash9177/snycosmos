'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "ff1e871924222b17e6c5912aaed760fa",
"index.html": "1d6ce6509f1f5f6edb9f94f213d028ad",
"/": "1d6ce6509f1f5f6edb9f94f213d028ad",
"main.dart.js": "533ccf23f60ca085f0b2a917580b4a24",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f30c8be071a6e3dfc9a3fe194702e33f",
"assets/AssetManifest.json": "7bf50f1788e3b0164e8b88b66efd1dbb",
"assets/NOTICES": "8d047fa1494d6b1f320a9fa362f2ab8f",
"assets/FontManifest.json": "c29c2c006e6fa47af6a54c1d06d24436",
"assets/AssetManifest.bin.json": "877645b1deb90bbc9becdf2f7e6d7807",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "1d2ade3e30c6bbbb81ebfe9373780041",
"assets/fonts/MaterialIcons-Regular.otf": "03a8af3cd521683fb212f970e6981206",
"assets/assets/images/svg/menu/snymaterials.svg": "299089081f59d386f95266f7710aaf96",
"assets/assets/images/svg/menu/updates_fill.svg": "c6fd8ea0ebc6a7605dacf09633da570e",
"assets/assets/images/svg/menu/applications_fill.svg": "0372a13ca17f07ac327c5627c402b0a5",
"assets/assets/images/svg/menu/visa.svg": "bdc6ef76948eb1d3d7be915c6e753efb",
"assets/assets/images/svg/menu/visa_fill.svg": "87d06e450b35855c7e93921bce777b04",
"assets/assets/images/svg/menu/dashboard.svg": "283003d382204c4a005c535d01def9e9",
"assets/assets/images/svg/menu/employees.svg": "e1c7afd72197be5b53e90b21a7adfb5d",
"assets/assets/images/svg/menu/housing_fill.svg": "2e5cc59f3bf9daba984c0c9a910775a4",
"assets/assets/images/svg/menu/housing.svg": "0990e53b070c496387976d82b5bf08d6",
"assets/assets/images/svg/menu/dashboard_fill.svg": "2f881f37186f3fd25b59ff70038a85bc",
"assets/assets/images/svg/menu/updates.svg": "2e7af9dc0c9277e5f25f9da4dfe7dfc4",
"assets/assets/images/svg/menu/applications.svg": "ce18f102541c368b6d34708d2c59dada",
"assets/assets/images/svg/menu/databases_fill.svg": "32f41b511b27a2f418b38b90ce7021c4",
"assets/assets/images/svg/menu/databases.svg": "2e1a7f2eeac3aaa66ec7d1e0c93a02e9",
"assets/assets/images/svg/menu/snymaterials_fill.svg": "494d4cd66a8e2b2314a06dedf313667b",
"assets/assets/images/svg/menu/employees_fill.svg": "11d91c6d06befc5bde2e0361345ad46f",
"assets/assets/images/svg/Logo.svg": "8ee61887b90491647d0facf156c26032",
"assets/assets/images/png/logo.png": "88572b870e8c32fa352b191b659d2e00",
"assets/assets/fonts/worksans/WorkSans-Regular.ttf": "a3d6c7f7606fc33a6ab5bed9688d1fe8",
"assets/assets/fonts/worksans/WorkSans-Light.ttf": "02db4b738c689e05f3f12b3f22969815",
"assets/assets/fonts/worksans/WorkSans-ExtraBold.ttf": "bbd6edc88df326a3283424a0a1c711f0",
"assets/assets/fonts/worksans/WorkSans-ExtraLight.ttf": "16ad283672151ea426e8c98d8ad0cfb5",
"assets/assets/fonts/worksans/WorkSans-Medium.ttf": "73f5c36f3da9740c41b2c1aeb7fc94e5",
"assets/assets/fonts/worksans/WorkSans-SemiBold.ttf": "c1b2dde1705db3ada7fd668c36523f66",
"assets/assets/fonts/worksans/WorkSans-Thin.ttf": "6b3fb1a15d5c60fd9944e8c218525984",
"assets/assets/fonts/worksans/WorkSans-Black.ttf": "b2aba36e3bf90520d734ccf777833847",
"assets/assets/fonts/worksans/WorkSans-Bold.ttf": "1559ffc7cf61cbae7ea55a250722009c",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
