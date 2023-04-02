'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "44efed9c343d1e2dc567a46160d3b01e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "649398c8ab6441b3893c9c5590928435",
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
".git/index": "c318b7ce345fe78e3d642b89e720205c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3f4b6ea97acb620123a0e5e5ecca318b",
".git/logs/refs/heads/main": "3f4b6ea97acb620123a0e5e5ecca318b",
".git/logs/refs/remotes/origin/HEAD": "0807f66ca0f960c85bfe3e3bc99cedd9",
".git/logs/refs/remotes/origin/main": "38967f5faabb0e402b805ed550b48dac",
".git/objects/00/7a72db28177e4a2da1125b0a59090da5b9f850": "751366d1ffd2dd38daec7c0e0e3037e8",
".git/objects/08/3492ec7a4853a7310199c4f8900b69cdc1e9c5": "34ecadd6d5405d223aab26df9e6f4a76",
".git/objects/09/9e9ffdc426941ff71cb368bb42fa486ddafe22": "53b40fe424237c58c89fa6dfd2558940",
".git/objects/09/c62801a4119cafef24222144dd3797c38b01d0": "ede035f415a9157cf28eb0af98d33b11",
".git/objects/0c/4fab842eb64a732719b453b0b58084ff0f4c0e": "b51a67fcc440b4898e9bba89df14d6be",
".git/objects/0f/a87f0d4d8e6a76e750474cf8815ba18db100d4": "f5bf2122ac2f91e28f0b1ae750edb0e6",
".git/objects/12/8cb55159cd52cce99a26801b3f56e5652b0423": "ef3ad55e0dfd95200d00e994b1e494fe",
".git/objects/13/e2e4589ca6d6535470f3a19c7f80b3a073e6fa": "9dc895c799f21a5f1e87f5fbe1aa1783",
".git/objects/21/41f45a1cf9073175684b2ff24d9b83434223ed": "de90db725e27233104514372d3192488",
".git/objects/2c/886b3ca1351521f8d13625ede21f716e4d09ec": "eea004096d5176e737149896ecfe7175",
".git/objects/3a/8600653ec84cbf1590bc4a58d0359739bf4134": "ea39c11c976eddf6e2c50d548af483b0",
".git/objects/50/dac7b63ba396a1204e7a285cbffec4762a72c2": "968763663c5ada4e8312f70580252d0c",
".git/objects/56/5bb5757f10e9f52810322a4a4d1f195696701c": "fdf3c097da4e28c76fb1c2c678b4af69",
".git/objects/6d/35681054e9381996ffd6635930eeb1fc1826f5": "b2f59ce0ca685866da17b6494f67733b",
".git/objects/7e/321344e84f069863399e282e27e8304afb9d5b": "1ae520df9836063ffd5407275304d5d4",
".git/objects/81/50c4ff8258afc2afe3092c063f26a1f5a72d51": "a980dc5c4dc8c55b9a1efbb18e02be9c",
".git/objects/86/8b6fbbc7d2e5a915d48aa6da9cae13c9d2217b": "d8149ff798c64ec5a65227ef5ff2bcb6",
".git/objects/8e/ae92644c68bcfeaffe62ee428144f7aed00305": "4f90b559797ebb473d0dc646a87fd51b",
".git/objects/91/4d983f5412396e2d63cbf0dab024581ac0e444": "7efd20ef8c207b649212650c0df8937d",
".git/objects/98/c4ad8a902e37e2f6583f0b5f96348524c8eb8c": "937bcb465d68ee198b25df25b061a8bc",
".git/objects/b4/a98a7926c3a6969323bc6a3add3d7151653943": "b86ddd2fab66368bb361d257c5a732a2",
".git/objects/bc/91e3cd88e48ad57b9d95b47833fb8460b19b77": "8c1b07a8a287e93acb83f665b4f066ae",
".git/objects/be/a3f8aa8430fb0f88555bb4cfab707ce8eb5fb0": "b22c545c028188e3a46c962fcb8ba7e1",
".git/objects/bf/044fe08601195c22288329de30cd6efb0954bb": "861da14c73b09f924142a572ed06a3ea",
".git/objects/bf/2d5cabadea6ff674f925980192e5d5380ac3d1": "1218f3b42884f3267359a51529298e32",
".git/objects/c1/b7e1cff4ad8671bc2ee5b9fa336dfd5b5ca29b": "90e365eb509e625abefabb8e69a25387",
".git/objects/c4/8cc03d988652c49807789dc6f24b3a62fd5716": "33e1a67c55953271939483bab810d4b2",
".git/objects/cf/ce3d7890703ced668abfa0aeba4849ec08c15d": "1b561fbe940df464a5897c853173a305",
".git/objects/f5/10d41331f84ed80d240f0da6d34fca52014a75": "999cd78e30949ab6afa2c4023d21d91d",
".git/objects/f5/80aa1d41c487b6adabe20e0d13765502973132": "4fe62ed40e874eacb73647e61366c092",
".git/objects/pack/pack-edba652baa6fd94d7786a9ddce0be6e848591ee3.idx": "ac66eaa15948eceb4d8261f16db08354",
".git/objects/pack/pack-edba652baa6fd94d7786a9ddce0be6e848591ee3.pack": "0f7713d123d32decfcf3fb25bd99166e",
".git/ORIG_HEAD": "6005259c1e5e939e2aab897d863adbe9",
".git/packed-refs": "10e75bc9dbb25f6963bfc589d6b7576b",
".git/refs/heads/main": "6005259c1e5e939e2aab897d863adbe9",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "6005259c1e5e939e2aab897d863adbe9",
"assets/AssetManifest.json": "703699f824e679438b7ffbcad09a7959",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/lib/src/assets/images/avatar-caua-old.png": "9a92ff1441289740079486c4463827e6",
"assets/lib/src/assets/images/avatar-caua.png": "5bbe39ac8f1e5684ff7480a8500f6db3",
"assets/lib/src/assets/images/background-container.png": "4081cdec6cda4d120ba3750378bd3463",
"assets/lib/src/assets/images/background.png": "6c50732842efab5fbdecacc93673be7b",
"assets/NOTICES": "4457227f3b646eed77a3371884a93842",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"CNAME": "911c000b37960f3d7d559781613cadec",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "44226cc00ba3fcd31a06099090edbbd1",
"/": "44226cc00ba3fcd31a06099090edbbd1",
"main.dart.js": "9b269a0091b589657a439f5973b862ef",
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
