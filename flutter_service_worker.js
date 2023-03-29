'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "45c9eb7fa6e6a781268f8a3b8d62d8b9",
".git/config": "44efed9c343d1e2dc567a46160d3b01e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "624afa19ccdef00b44463fdc5122e5e5",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "90b6d0b55e90c68d4f6269b1de11af86",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "09793fd04804a9c5775096232dddde4e",
".git/logs/refs/heads/main": "09793fd04804a9c5775096232dddde4e",
".git/logs/refs/remotes/origin/HEAD": "0807f66ca0f960c85bfe3e3bc99cedd9",
".git/logs/refs/remotes/origin/main": "4f9f1f04de09bf287688c4063457a99d",
".git/objects/08/3492ec7a4853a7310199c4f8900b69cdc1e9c5": "34ecadd6d5405d223aab26df9e6f4a76",
".git/objects/13/e2e4589ca6d6535470f3a19c7f80b3a073e6fa": "9dc895c799f21a5f1e87f5fbe1aa1783",
".git/objects/50/dac7b63ba396a1204e7a285cbffec4762a72c2": "968763663c5ada4e8312f70580252d0c",
".git/objects/86/8b6fbbc7d2e5a915d48aa6da9cae13c9d2217b": "d8149ff798c64ec5a65227ef5ff2bcb6",
".git/objects/91/4d983f5412396e2d63cbf0dab024581ac0e444": "7efd20ef8c207b649212650c0df8937d",
".git/objects/bc/91e3cd88e48ad57b9d95b47833fb8460b19b77": "8c1b07a8a287e93acb83f665b4f066ae",
".git/objects/pack/pack-edba652baa6fd94d7786a9ddce0be6e848591ee3.idx": "ac66eaa15948eceb4d8261f16db08354",
".git/objects/pack/pack-edba652baa6fd94d7786a9ddce0be6e848591ee3.pack": "0f7713d123d32decfcf3fb25bd99166e",
".git/ORIG_HEAD": "8fb927f39154256f5c5d17ac40a14de1",
".git/packed-refs": "10e75bc9dbb25f6963bfc589d6b7576b",
".git/refs/heads/main": "8fb927f39154256f5c5d17ac40a14de1",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "8fb927f39154256f5c5d17ac40a14de1",
"assets/AssetManifest.json": "703699f824e679438b7ffbcad09a7959",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/lib/src/assets/images/avatar-caua-old.png": "9a92ff1441289740079486c4463827e6",
"assets/lib/src/assets/images/avatar-caua.png": "5bbe39ac8f1e5684ff7480a8500f6db3",
"assets/lib/src/assets/images/background-container.png": "4081cdec6cda4d120ba3750378bd3463",
"assets/lib/src/assets/images/background.png": "6c50732842efab5fbdecacc93673be7b",
"assets/NOTICES": "4457227f3b646eed77a3371884a93842",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "bc4a0f2406aeadaf560b641c5617c18a",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "e275cb040a1d217b0f8f54b8fbd2ef52",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"CNAME": "911c000b37960f3d7d559781613cadec",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "79fd1b5f4b9ed5c1eb55814813698372",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "167e9d4419b962a633be724bd2a3f0c3",
"/": "167e9d4419b962a633be724bd2a3f0c3",
"main.dart.js": "ddf5a912ba5ff17b519b3a345107fff8",
"manifest.json": "75908e468a0e57c75f9e919e6db46a4f",
"version.json": "cff9ee4e1ddda628e396a879367bd752"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
