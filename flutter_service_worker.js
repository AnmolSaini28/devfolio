'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c9a48c4e8b7b85b533ea2b671d05e5d8",
".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "154efaaa67424cbba7d6cf88cc163a8d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "032124192c3ff57b579b82ba9cd862ce",
".git/logs/refs/heads/master": "032124192c3ff57b579b82ba9cd862ce",
".git/objects/3e/3b8aca9e07196e79d42493a02e8ada1ac77bd4": "aef4e4d21f917ed7be5406c756c45bfd",
".git/objects/6c/523934d224a412d15e3db11b629e039d7446fb": "0be3b2380eea6b11e53cfa938314d20c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c9/716eab1aa1d976b41bf2a3e57bf45b2c8b39d1": "f5f67c81d484e1b64900be24f8d46a79",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fe/7a5a21d0c35ece72e2420a9058bccb6f42b617": "6acaeaa06edaacab1b3a6741eb1bc4bf",
".git/refs/heads/master": "c899a7ec053ba2e919f3e2ab9338ca8b",
"assets/AssetManifest.bin": "a2ce9350a2e04de92ae9e2efab5bd707",
"assets/AssetManifest.bin.json": "4cd896d47e93e16434a6f80ce79dfb32",
"assets/AssetManifest.json": "befb647696490228ab7b01427f88e427",
"assets/assets/fonts/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/assets/fonts/HelveticaNowDisplay-ExtraBold.ttf": "d62cd5734d3a8ec9c487fa9aafcd9c68",
"assets/assets/fonts/HelveticaNowDisplay-Medium.ttf": "53b5d05abde1c9192de6f6a954a5fef9",
"assets/assets/fonts/HelveticaNowDisplay-Regular.ttf": "9632144b89660f0f032a3a0a01e533c7",
"assets/assets/images/1.png": "ac0755bf66a1cdad775b2f08f0dd841e",
"assets/assets/images/2.png": "985b13aa52a405f9a012043c0a6aa2cc",
"assets/assets/images/3.png": "bda56b7eb0e6606c42d1868bef531f91",
"assets/assets/images/4.png": "0815c5ef1b6f9f2fb53f3a890d8c7807",
"assets/assets/images/5.png": "c8277ea770e07773b74b449752a479b6",
"assets/assets/images/6.png": "495803058ea3042cfcab17cdfb5c17a0",
"assets/assets/images/android.png": "43b3444519d5f09c1807642ab00f7858",
"assets/assets/images/app.png": "2097592043bf6f86152a38634ceab747",
"assets/assets/images/arrowhead-up.png": "1ea3dc170d4f90fd9bac0b905ab425ce",
"assets/assets/images/bg_img_2.png": "05f9366b25efab54ebdc4a8a3f840647",
"assets/assets/images/blog.png": "cc7380c398e6ea45bff2a56a4d17f3d9",
"assets/assets/images/canyfix.png": "b3749b57219ce0bee17b00e3c10c9f28",
"assets/assets/images/chegg.png": "a57df75970cb829f8c34b1ddbf114e52",
"assets/assets/images/CodeChef.jpeg": "6d459d88ac2bf2c468c26d45ee368aa1",
"assets/assets/images/CodeChef.png": "27c789e3547d18b1d9551abfd16fcf2a",
"assets/assets/images/Codeforces.png": "d89590ea966cf72e58cd9e855daafcd2",
"assets/assets/images/CodeStudio.jpeg": "8b03110aaffc275a398169e5c8aac373",
"assets/assets/images/CodeStudio.png": "83532db3b0c98ffb7daa02c9a2560a37",
"assets/assets/images/codolio.png": "1a817511e5064d5b7935a3c94d23787a",
"assets/assets/images/contact_icon.png": "332a94f5463bdc9dd03f1edbf466ae9b",
"assets/assets/images/cursor.png": "3caf09ec7bbf6ebbc1884791f3d1ff0a",
"assets/assets/images/desktop.png": "ad7ddd5dbc79fa0a7d6d033c37ddb806",
"assets/assets/images/download.png": "2d060656c52190ea70e1369d070a7df6",
"assets/assets/images/email.png": "0583ba9496da3d94af09d31e16f881f5",
"assets/assets/images/fiverr.png": "b09388ddb27c59ec784e16a4fb0b492d",
"assets/assets/images/flutter.png": "c17a21f0dda5a09b4bb6c53b2282df65",
"assets/assets/images/foodpe.jpg": "c500c4a372b45f25a8562eb95ab01661",
"assets/assets/images/GeeksForGeeks.png": "c1b22342517f028b424964f3ca3298d3",
"assets/assets/images/GFG.jpeg": "beaed9a9fb56b10a0d57a2e4558d1c18",
"assets/assets/images/github.png": "debe7d123136dc24c8424dc950f94ca9",
"assets/assets/images/google-play.png": "c2f7cb5d825facf8539eb2148f728f21",
"assets/assets/images/graphic.png": "36a92cf63221f1dd5f7ffee8a2949182",
"assets/assets/images/hand.png": "4fda2189f83f90fb67f1d6bca807c013",
"assets/assets/images/hi.gif": "a8a03e12ce08a2d350e56855c86ba08b",
"assets/assets/images/Hover.png": "69d6ec3d7c1be11ffe53d0229bb3a6ee",
"assets/assets/images/Hover_flip.png": "df97236aab3ec332d72669a82b374385",
"assets/assets/images/Insta.jpeg": "0f5d7340f44b8b69a3f1518efdb8849a",
"assets/assets/images/Intreaction_design.png": "104ddac74cb693f00ba3cac288957483",
"assets/assets/images/lamp.png": "82ce89808abc7c779aacff48af723e56",
"assets/assets/images/landing_image1.jpg": "569a92e10d9fee5263ef2e32a233518a",
"assets/assets/images/landing_image2.jpg": "99ee37e20fba1249b834ad2ed289c8d0",
"assets/assets/images/landing_image3.jpg": "f2be4888063033db0c0cc19a809fda96",
"assets/assets/images/LeetCode.jpeg": "2fb59858cf3513fc4d14c08d607d09fc",
"assets/assets/images/LeetCode.png": "9360338feffa891369686a25b86cfbf2",
"assets/assets/images/linkedIn.png": "f6aea02515bb123f0760dff656f90898",
"assets/assets/images/LinkedIn1.png": "cebb5e1fe86d3d148d04792fe1d5dffb",
"assets/assets/images/logo.png": "0593849dafe54e9ab90616c94fbc4b7b",
"assets/assets/images/logo.webp": "b9e964782c32406581e176293cd452f4",
"assets/assets/images/night.png": "10c76f05a94233767ecffbc692375fa2",
"assets/assets/images/qrcode_app_image.jpg": "00775b11cf658369eb2b5b28dd3a2ad0",
"assets/assets/images/rapid.png": "3744a57bb225d93059bc7c3f055109bb",
"assets/assets/images/recent_work_bg.png": "786558e55743bf2de6cf8a90301191c5",
"assets/assets/images/safari_retreats_image.png": "b28cf2b2b3922890d6394ed67e117066",
"assets/assets/images/stacked-circles.png": "f2befd0509a54bf18100337c0a094235",
"assets/assets/images/StockCake-Elegant%2520Wavy%2520Pattern_1720961147.jpg": "623fc072b0898a1747f4dec376528877",
"assets/assets/images/ui.png": "bd174b5760899a0e8328bf3140fbb01c",
"assets/assets/images/whatsapp.jpeg": "e08359c1eda0dc3f2e30ad15c7db23e2",
"assets/assets/images/whats_app.png": "031110a4836eb303b0ca5ab048c21566",
"assets/assets/images/yui.png": "b7eccff75e4b59ac0369d1fcc73af0c5",
"assets/FontManifest.json": "83c3d7625dc91665dfaaf2a5682a21da",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "0676644d07d484efbaa20c15798adcab",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "32cc31c7f950543ad75e035fcaeb2892",
"canvaskit/canvaskit.js.symbols": "bb7854ddbcaa2e58e5bdef66b58d4b47",
"canvaskit/canvaskit.wasm": "6134e7617dab3bf54500b0a2d94fe17a",
"canvaskit/chromium/canvaskit.js": "6a5bd08897043608cb8858ce71bcdd8a",
"canvaskit/chromium/canvaskit.js.symbols": "f23279209989f44e047062055effde63",
"canvaskit/chromium/canvaskit.wasm": "ad6f889daae572b3fd08afc483572ecd",
"canvaskit/skwasm.js": "e95d3c5713624a52bf0509ccb24a6124",
"canvaskit/skwasm.js.symbols": "dc16cade950cfed532b8c29e0044fe42",
"canvaskit/skwasm.wasm": "aff2178f40209a9841d8d1b47a6e6ec7",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "5de281a37b2308e43846d3a0b545c921",
"flutter_bootstrap.js": "1a367e01eedee1dc5c8ab6f6deb58675",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8c2bb04e41e9aab2230cdbfd7fbf2868",
"/": "8c2bb04e41e9aab2230cdbfd7fbf2868",
"main.dart.js": "22a3502cf531c5d0ab2e261ec9aba376",
"manifest.json": "88e2c1e2e34b25a4ba73188b19188c63",
"version.json": "ac7d57fe31a91f73b206e297d700b7c5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
