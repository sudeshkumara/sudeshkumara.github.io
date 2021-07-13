'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "178949498299eeb88d0569ba66e59069",
"index.html": "2eb709c9c2e350d8488d185da6367a3e",
"/": "2eb709c9c2e350d8488d185da6367a3e",
"main.dart.js": "78af442c0827fc9f9a2bad6e4c29418f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "eb25edcd80801c80e8768afa4153c959",
"assets/AssetManifest.json": "99e413575160c201c83aefeed30e83e2",
"assets/NOTICES": "a32b7ff78903074126c6b6b0a501955c",
"assets/FontManifest.json": "312770223677b255499e213412af19df",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/Avenir-LightOblique.ttf": "0e057a2e798d0e04a5ff971691b8b343",
"assets/fonts/Avenir-Black.ttf": "968e784956ff9b6a05c29cc3be18cad0",
"assets/fonts/Avenir-Book.ttf": "995b34ab56b423abffe48e64bf8b8df1",
"assets/fonts/GantellineSignature.ttf": "03591c8aefa3c87e85ca781883f745c3",
"assets/fonts/Avenir-HeavyOblique.ttf": "bd62ce8814437ca3387d952462492f47",
"assets/fonts/Valencia.ttf": "8ea32e99070762d4e4803000c16f91d9",
"assets/fonts/Avenir-BlackOblique.ttf": "292dd00ef4db26314dd7911d08f723da",
"assets/fonts/Avenir-Heavy.ttf": "f080b6894f8375c59a197caa24aac91c",
"assets/fonts/Avenir-BookOblique.ttf": "aa0e2e73a41a5ba192347a6f600d344c",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Avenir-Light.ttf": "33f6570a328d84cb7d06e829a0c7ca1b",
"assets/assets/betmakers/bm_picnic.png": "575500150e3b9bdfa6048e3ce0277757",
"assets/assets/betmakers/bm_account.png": "fb82e8fee06be6e34796ccb9dae7069f",
"assets/assets/betmakers/bm_betNation.png": "8f0d3f5fa599c0e56d03bf0a53821e37",
"assets/assets/betmakers/bm_racecard.png": "59902cca5d4b191029721254ecee9aa5",
"assets/assets/betmakers/bm_rob.png": "4bc11919c9fd6bee89aa706a91c3481f",
"assets/assets/betmakers/bm_cross.png": "17f356f493925a3f1fca60bf3838f453",
"assets/assets/betmakers/bm_login_screen.png": "e7605439d537f743d92e87fc51850f64",
"assets/assets/betmakers/bm_zbet.png": "35032ebc7a3f21dbd92e72efe5906e4a",
"assets/assets/betmakers/bm_wish.png": "0a8f7b70ab7e65d97fb59a1575764e79",
"assets/assets/betmakers/bm_sport.png": "218054046fc75fccbb8f1e1421ab0c77",
"assets/assets/betmakers/bm_individual_sport.png": "5538e48d66c3fe64ec2d57919b08e5dc",
"assets/assets/betmakers/bm_deluxe.png": "ee876d61ec0101159e7af8b5604e2db1",
"assets/assets/betmakers/bm_tex.png": "73d3e6fa497fcd8d8d476540905c7e6d",
"assets/assets/betmakers/bm_loader.png": "4f97c6e6651d8db417640d98b85ba2e0",
"assets/assets/betmakers/bm_real.png": "35b234d898cc0fafb4f15265c36ec718",
"assets/assets/images/git.png": "6290a47deefc80ab8fd2ed95dff899b8",
"assets/assets/images/mail.png": "77b2c61d1172f04f7fcbf6cca0e17c59",
"assets/assets/images/signature.gif": "4728d2cf2aab09c65a565bf2febc2d01",
"assets/assets/images/twitter.png": "b69e6d9538bd0c78ad22fc5b8c16ceeb",
"assets/assets/images/insta.png": "5bbb2f63bb2146715f790a59eb9e5a52",
"assets/assets/images/linkedin.png": "ea5acfaf175fc1bfd555aeeaa91fe575",
"assets/assets/images/dribble.png": "c99ca8e00fb0f22fa02f43cd857cc4f8",
"assets/assets/micro_service_center/msc_home_screen.png": "dd7defd5c378e31561b078378198aad6",
"assets/assets/micro_service_center/msc_inspection_screen.png": "06324b047fd98a355503767ae932c63e",
"assets/assets/micro_service_center/msc_booking_screen.png": "eb178d56fbd5c4aa3ec719c3b98db9ee",
"assets/assets/micro_service_center/msc_splash_screen.png": "892dffc1f2f64bffbd080df9cfb60b99",
"assets/assets/micro_service_center/msc_menu_drawer.png": "d13864dfc8ea2d63ac6aaab86cdea719",
"assets/assets/micro_service_center/msc_login_screen.png": "89a6dbdce97ec50be275e8ce2a35aa33",
"assets/assets/tutor_link/tl_splash_screen.png": "27e111a547dd46fb95a7af705522c7fe",
"assets/assets/tutor_link/tl_login_screen.png": "bad3504bd34fd537228b8c7c05885a00",
"assets/assets/tutor_link/tl_map_screen.png": "cc18b9f205f2b83e9a83857a32a7ee0a",
"assets/assets/tutor_link/tl_market_screen.png": "6b850a501c66b0767ab3edaf79a0315d",
"assets/assets/tutor_link/tl_profile_screen.png": "be8d689c08f3541da615773a70931355",
"assets/assets/tutor_link/tl_home_screen.png": "1d96e7ddb37ecae06ef81af23a622168",
"assets/assets/tutor_link_sample/tls_splash_screen.png": "807afb8c1fcb31e232945049fd3f73e5",
"assets/assets/tutor_link_sample/tls_role_screen.png": "6c13112ae46a91d8be58b49ab722eece",
"assets/assets/tutor_link_sample/tls_login_screen.png": "3dc52df2f53321eb339184a261548a4f",
"assets/assets/tutor_link_sample/tls_registration_screen.png": "78dc5b7bc297e7b3da13d577a5e5b44b",
"assets/assets/chaya/c_home_screen.png": "ff908372040119129ad2d687a76655f5",
"assets/assets/chaya/c_premium_image_screen.png": "29a52f3010257b68dd59165dc90449bc",
"assets/assets/chaya/c_splash_screen.png": "f45e9891f086768043759be1c1093a57",
"assets/assets/chaya/c_add_new_image_screen.png": "dc7ca0d48b5f73870711a2f63bc3e682",
"assets/assets/chaya/c_free_image_screen.png": "1cb018f3463b5c70fede323d32f637c7",
"assets/assets/chaya/c_menu_drawer.png": "813e72e97c88b44a02b36ddbc2423fc0",
"assets/assets/appointedon/ao_home_screen.png": "178ef5c219290b2e25b37bf7187813df",
"assets/assets/appointedon/ao_appointment_screen.png": "3c58497aab74bb6b60db8b8181cbde3b",
"assets/assets/appointedon/ao_login_screen.png": "8f923b4959e5ec433d03f9a57e4ddf61",
"assets/assets/appointedon/ao_registration_screen.png": "a32aa900eb75b36bd5498127ff10321f",
"assets/assets/appointedon/ao_splash_screen.png": "2c92d7937bb2cf97f08ed5edd631b674",
"assets/assets/appointedon/ao_new_appoinment_screen.png": "9209dbf45d28e221baf0166f71edb111",
"assets/assets/appointedon/ao_profile_screen.png": "478c6b5833aa19f25b0543afe3706abd",
"assets/assets/tinfit/tf_workout_screen.png": "7af0b10abdc86f644271b9923c29612c",
"assets/assets/tinfit/tf_home_screen.png": "27cb4c2399de56e4853133de00af44da",
"assets/assets/tinfit/tf_discover_screen.png": "7d68180759c57adb26c63e34e6d04f5f",
"assets/assets/tinfit/tf_fitness_center_screen.png": "f35cad77816edfb27e91683f6cc18be1",
"assets/assets/tinfit/tf_menu_drawer.png": "5bc4005178ad91fdf0236b85faf4ce84",
"assets/assets/tinfit/tf_chat_screen.png": "827a95ff9e6822e1c3a78474675f2483",
"assets/assets/techone_assistant/ta_petty_cash_screen.png": "ed7cdc31c36093b29eb604acb37bdd16",
"assets/assets/techone_assistant/ta_home_screen.png": "01bf9dbeb813f742f3fb169b8d9b67b1",
"assets/assets/techone_assistant/ta_support_screen.png": "f37dc56f0378173877c9f12330817d12",
"assets/assets/techone_assistant/ta_login_screen.png": "6b976b3757cf30ea48dfabf7d7088425",
"assets/assets/techone_assistant/ta_splash_screen.png": "dcf5b7f608d9e0777a7067d2afa12731",
"assets/assets/techone_assistant/ta_menu_drawer.png": "04025b3554fec1dbdd5746d60b0bdd6e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
