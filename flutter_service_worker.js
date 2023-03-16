'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "44efed9c343d1e2dc567a46160d3b01e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "446b334f5398e172587030c03cc09496",
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
".git/index": "75cfd69f956397399df2e0aba59074f8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7a84d5891452560e8f89d7c43bb7ca6f",
".git/logs/refs/heads/main": "67f8068b50371bee61fd193da2a5b789",
".git/logs/refs/remotes/origin/main": "135a8f840a07af5d649f2c267e85156d",
".git/objects/02/f3280ffb78a8bcd6615fed08a0753e5810eee6": "166cdd1f0d19cbe3a063f466b176e078",
".git/objects/05/d6e649578d4e5945a73af745f1b3c0354d43fd": "7ed49491a8769226f173082f471cff78",
".git/objects/07/488afed9fec35bf6f8056bdfc484253aa92d04": "e30e0d26a1db61ec75e313c96dae99b4",
".git/objects/0c/d59e4c8e512ea98ed5bf0073e10fbfeeab4530": "427361ef520685dd45c774ab3f111aba",
".git/objects/10/2a3c13113123ab390409ae4e719177bb76897a": "026f0896b7ce18991f0dc7d9302902de",
".git/objects/11/cac789828799c3953126da039ab8c67eaa5dfe": "5e1e1178ee11b4e687e5fee278e00331",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/13/4db08b36a9a0a41c41ae6b6b4a376340389ab8": "a51d780daa956bb30ba218744655bdae",
".git/objects/13/68b172f4f83c2ce388ba7eed29f08c12c6b3e9": "ae97ba9b960d411222bf5c612bece9c9",
".git/objects/13/b471ac19c1e7e6b04d9724ff07f17ac58487e3": "e40f92a62bf127d5de034b58e50dce64",
".git/objects/16/b9e7be2371c0cb0879fd4625cb777ff7b2eafc": "0f7a9b7010dfe6ebded8afd543271714",
".git/objects/26/029bac775551680912927c05f3ce91a3f736f5": "29149b7ccc5554a60d0889ff8e551fcc",
".git/objects/29/aa463b4d5b509d55934cea83dddd11eba2a5e3": "b9bf2a19add2fec9a5d632a5418e7b40",
".git/objects/2c/b4071b451a564a994eeb0ca77654065438ccf2": "543a3e8be6d64960f0c94370003c0fe2",
".git/objects/32/c06fa89424b53b0b9fadb52156ca41cd4a750b": "c7717d51a1fa603d6f3d7c70b912adb8",
".git/objects/33/cb7a30c674272d1b96c9776ff62487cf7341a1": "6ee57f92803c24b664437afce9f0c8ed",
".git/objects/34/066a54ccd3cf9b049f2660f90646dc2567f606": "a1d3ba20461845bf8959e1493e15099a",
".git/objects/37/6ee60eb8081bf97c1581fd498c35b8de47056c": "5ef1c48bd108ff043b95c8a777c3de8f",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/e64aad43a1a7368c242a8bb454a276e8b3c475": "04322aaa4df6fafc4643ffb706bc77a2",
".git/objects/45/3dcd89bf468ca605329767201d7d27926596c2": "9eca36196cc5bb1328ea98e41a26bf4c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/eec89023df96f2454fbec97070bad7f30175b8": "3f92b3dcdece47299c7d173d24822659",
".git/objects/47/17040bb3eb904348b7c38c1026bd3006a99166": "7fc83e196a000982190f32e3ce794e1e",
".git/objects/48/b5299719e26fe571cf157c4faabbc1726006d8": "39230b357d84a568d1faeffaea1c3882",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4c/b192fb4199138ee3ec5d5289c91933fbf06d8a": "03c0cdeff860b5980d487dde64dc94f8",
".git/objects/53/d60ef5c94086459017fe608b1dc8863ea5cfdb": "7136142ee98f3b94014de77a5bcd6593",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/56/cbb9b2df516d1fa002f91d67d5c938da9066a5": "0551d2690efeff0e8a3f80a1a6c94017",
".git/objects/57/22efa26f435b34ea8cbe340666ecd2e8e58413": "4848b99932c88e192cad1efd480333b1",
".git/objects/59/ea8f5a08b3715b2c40964577105ddfaa305100": "7bc49927d2737ad4665e93878ea207f2",
".git/objects/60/baf2b4f214461143954eb0818e0608567f0946": "1d2bba8c0305bae609183b9b2ed2c656",
".git/objects/64/bf7bea82b34da8c3805c98b611fba794b34d72": "0a7254e71ecc3e9b887153e8a29692f1",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6a/c8e5cf8c847f35f5ae7eba1267d1cbad13b8c1": "e5f85ab7fe9bd8cc77fd02dc1b53ac69",
".git/objects/6d/25697e034ee1cdf38be4b9930450a8a137a308": "d11ba8b353bfcd9f024f319ec234fa02",
".git/objects/6e/ae724b21d6e662bd06a9bf4e2fcf0cd0a56ee4": "9c2a4d3ff21b43e9ee2d447d5f74043d",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/4838e3d65d58687e2fa2006bd4de224886a0d4": "cf579f8b36726d336b0afec09430aa08",
".git/objects/76/ee2852ee3a8fa29aa9da1b45af39f16c0c5733": "ca4882886fdf9a57790becd12b036f8e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/501b91761bfb26b53d2c4bc6126cc98d999252": "a79b586053ff18974d8d9c43d425eaeb",
".git/objects/7e/cf7ae9669e9e08c3c6c6cbbd6da109505f6a8f": "69da59e1a7f0c0d9de8fe8e75758593f",
".git/objects/86/50f762faf8147200833e841924a593680ca5e7": "fa59ef883edc4a4f71ecb59db6da755d",
".git/objects/87/2b7b739997cee6740854795cc81f5a0ac584e3": "8aa5d5018c629051f2d4b0dfa3998e2e",
".git/objects/87/620533556303a77a9a3c23a3200cc1ef4770d5": "a7610b35e9c0d7e738f50de6190bc113",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/5bb6f6ef4bacbfd1c7a4f93f2f48da766b0c3d": "459a230e609861741c7714d487f14b16",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8e/1c658a485b7ecc52d95e6c8b5f4f781d55a2ae": "55c544dc07650b6e7b0fa3c2a2cc00ee",
".git/objects/9f/5a3b2ddd60e434485f8001c47e9eca1b45a7e0": "332d61c2a524e7254ddca4d1abc4f0ef",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/46990772b7be1ac954ae2b5c18dbd88ee55c04": "bb143ea801006ccf88e2a4c536c34f63",
".git/objects/a6/48e05379657ea137501b65facf3129c87a594a": "683ebb60f2e532a67bcbbefe88a5960a",
".git/objects/a6/6fae8da52978c51ba2ab5a8979382e29880ae8": "f9969d89318f80cb7406b5493fed04de",
".git/objects/a8/a7635f05ff9b86a441830ce357e824a2b5ddfb": "052ea757ae1f990920a28851dcb386ee",
".git/objects/aa/43571436a6826bbd85da6441fc11f5b09a8c4e": "f33f03c96b59dfd650c7e6e422ec19a6",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/37837aaa5ae379fefc2a3a1ac6509c09578b92": "24f822612097c4b1213bb01a72570135",
".git/objects/af/e246c1ec92dd1de422c08e7fc3d8a2632f1c26": "51469a9d6190d8af92b36a5c19922039",
".git/objects/b5/43ddc30bc162e224f56684556a5f851cc46d1d": "c68c2c334b838ea08177b034d2e744b4",
".git/objects/b6/a8daec4545bd7f1248af8cdba4acfe6d986bba": "6b2e89c7da62445759f04a8c9ca77252",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/45639d79721ec42fb5b5fdd5a5480b987e5123": "da7e853adc40f93d5cdfd496925edbed",
".git/objects/b8/67077f1d8080bc2f5dd5ce7ca533aaee86360c": "00a36efd5d7aeea774c7edd52b4e4210",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/ba61d45b138cd2321e94d2683589d9b2393f80": "32e80a430d5dd32fec59a085ced90d55",
".git/objects/c1/7ab2d4485f3b1d0dfc17379fe004ec2699dfe9": "425e6cf836ade1331d662d5d3e4904fe",
".git/objects/c4/25ea0c18f3a89590613bc89ceb39a3115f3fc6": "a7686a23c2c234912094b7d01c5ef424",
".git/objects/c9/da75123e20458f08791534db4c883de2f525bc": "e6d11785a0747b6af4f3f35594ac166d",
".git/objects/ca/1a26ca4458c4cc64b4860d342a053a10622049": "b1797cd582838e1837b3db2aa58b3311",
".git/objects/cb/097b687f9375f1fcdac3d09924cc62eb5667f1": "688f0444b46bec8ed52c5ce936362177",
".git/objects/ce/41edf44da558281c327079f5a90e703bad117d": "558aa5ac284b7c96b57443de51aba068",
".git/objects/d1/17bd00b84d70f355643b9a4904961064609051": "44f6b5aabaae91987b1c77e21cbc8ac4",
".git/objects/d3/0ce4f32f657a48ec1a7d579fe57da3babd59c2": "5d3d43ee208972e88e25b28661340b0b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/515749661d4ffca89c039e40a2d710efe5371c": "aed10d59082a3270fd3b1b7597a4c6b0",
".git/objects/da/4fdb8436d04f528d551aab44c5869db4ce09db": "d70a5ad8e46434145c68c7ddd1e9cc43",
".git/objects/da/761682fd7c1e4994f432432f3a1789ce8469e8": "df9131c10c9bb343fab9e5e0d1ae7efb",
".git/objects/dc/69e6c41c33dc3e15c76b7b90e9251a0077c534": "2ef9aba08156ef37df1953c1b6c274c4",
".git/objects/df/600ca02807b15bce1bc229e6922276e07e4ecd": "b979258ab9d370065c074ff1954eebaa",
".git/objects/e0/6006e938be6c0205076f2a3c6264e284c61d43": "c12cb7076e7e7c0f12c356b6b5314ea6",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/c5f438adaaf5a1c2fdb479adac0d2a8aea8b06": "d9dbd68a79232fc425858dbb50ba64b6",
".git/objects/e6/85c1d1490043c8fcbb609ad65bedb2aa477a70": "d0a43c631c0ecc3df57af7355f1b87d6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/96214706dcc8908dd1f9a559149e4af1f40f45": "f5bd4586ec787cfa00f9e3456266f13b",
".git/objects/ee/9036857dc05d4fd4fa869c4efa5599ed9d4a3f": "63e7f6f82bfd3ad6a092ef0d7a5007f7",
".git/objects/f4/428cc07266c12671439cc7d15f5cee7e7ebcbe": "4abac02a2e992e0807cb7c38c8341e2c",
".git/objects/f7/9548d6ad6f8735ad3a0c54aee16b54fa0843fa": "1f611c7b20ec6ef4c03fdcd958e0c469",
".git/objects/fb/eca7194a3d0db50f8227119f0574d568ca6743": "33d159cac9eccb4d760fd32a7de11e97",
".git/objects/fc/84d85fbe4a8099e614866c4de7de887fa5c537": "67b0da1e48f6b437a73f4e866bb325d0",
".git/objects/fe/9cc87580713c0f0238a4c887927ca8ee0df429": "dabdbad06cbcbc26cb39bdaf2e261a8a",
".git/ORIG_HEAD": "179add7b7ba4613ca1d3b7f22124abd6",
".git/refs/heads/main": "179add7b7ba4613ca1d3b7f22124abd6",
".git/refs/remotes/origin/main": "179add7b7ba4613ca1d3b7f22124abd6",
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
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "88f5148888bc2e5f2e8b564dc1faf978",
"/": "88f5148888bc2e5f2e8b564dc1faf978",
"main.dart.js": "a6a9a9e42606b1a2b1747812d763dc3b",
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
