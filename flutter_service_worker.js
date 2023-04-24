'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "411c8fbe5506791ceadeb84e9a51c329",
"index.html": "d0c96d5df00962757a63829f0fb0ad02",
"/": "d0c96d5df00962757a63829f0fb0ad02",
"main.dart.js": "ac7c1252f32b17841500cdb2bc7ca1fa",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6bd56f834569038a49e9b608b6bbfdbc",
"assets/AssetManifest.json": "2b4e62458688053d4894c31bfd9bd5b2",
"assets/NOTICES": "db1c0d0f3d3bc051c315b7706a540c89",
"assets/FontManifest.json": "65620de7b66701530ad3d192f8364dac",
"assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/backup.svg": "3c3e18996aa81ec80e3d31da8bbc534b",
"assets/assets/images/water%2520sprinkler_on.svg": "8e57764da055bcf8c7d5e789ac244e45",
"assets/assets/images/dinner.svg": "feb33a210dc1bb15466415f0bb1136da",
"assets/assets/images/off_4.png": "15843ac8f929482a9a27d169f3b23580",
"assets/assets/images/ic_switch.svg": "cecae2eda3035d1c49bf521e4a3d857c",
"assets/assets/images/street%2520light_on.png": "dbcbc4159da1c7d8956da9e4184f19fb",
"assets/assets/images/schedule_off.svg": "c9e4ba92fe7efe90be80a2944b274ac3",
"assets/assets/images/projector_off.svg": "02f04b9f23335a6c4c1d1d9979e10595",
"assets/assets/images/teal_new.png": "b01fda1edf37ff5fbc49320f646cc423",
"assets/assets/images/lock_on.svg": "a2b8946565cdc15f03f3fa7afea8c4e1",
"assets/assets/images/muscles.png": "9c86a0fb9f7f9f810395bdadacb46478",
"assets/assets/images/gym.svg": "f97c8d930a2203a769661c3159e3965e",
"assets/assets/images/scene_off.png": "b2521b9f4499776ef46ebcb6aa324acc",
"assets/assets/images/delete%2520profile.svg": "a8bd64e2135ef7d1bb818e3323d31fca",
"assets/assets/images/home.svg": "f772f744e2af519dbc4694146004502f",
"assets/assets/images/device_info.svg": "fb8c699d26650f451fad8aecfcff0caa",
"assets/assets/images/morning.svg": "9081c8d0e3f1d220bb5963a8105e87f2",
"assets/assets/images/sn_logo.png": "029c9d6eca2c47754625ad08ef1dda86",
"assets/assets/images/tv_on.svg": "1661e2c19e637ab90737e64dff5d602c",
"assets/assets/images/child%2520lock_on.png": "7e394c17edae6f6ed73bc6d8aea00b99",
"assets/assets/images/av_on.svg": "01c62d3f14b48342765e082ca53bd4f9",
"assets/assets/images/support_email.svg": "1d94eded312d93a4dd87d598ec989984",
"assets/assets/images/room8.jpg": "823a6e6d3ce1dd44122edf833926b97a",
"assets/assets/images/set-top%2520box_off.svg": "c2250b3e927c8b22d5631a5461b35cd1",
"assets/assets/images/led_on.png": "2baf0f8090545c02261b8c84c6b5cb1a",
"assets/assets/images/celebration_2.svg": "9afa324a70857ed0b574068f1c0cc405",
"assets/assets/images/white%2520logo.png": "64cd61f9158f8d0cb5079a8929184c5f",
"assets/assets/images/fan_speed_low.png": "af8104a28bfb56b87543d694558c2e40",
"assets/assets/images/child%2520lock_off.png": "3cd6e8805773ff9ca27025c927f0beac",
"assets/assets/images/sunset.jpeg": "862d910019e437b728aa29947205d449",
"assets/assets/images/bulb_off_3.svg": "ee29d12d83cf9dfe9d7c7232c7de23ba",
"assets/assets/images/history_off.svg": "77a7f26999e135755db13523370260e0",
"assets/assets/images/edit_icon.png": "d72b76cbd8fc8e2c73257ef0664aa2d8",
"assets/assets/images/water%2520sprinkler_off.svg": "8a8e0a42988b2c091e971dff5920cfbf",
"assets/assets/images/sleep.svg": "a68707d628778c95adb7f2ddc425a3b0",
"assets/assets/images/room17.jpg": "7acc6391f266aba9e64f5e4c8ab201e2",
"assets/assets/images/setting_on.svg": "b12a751358e9c273bfece1f83d160b1b",
"assets/assets/images/room16.jpg": "235765796047f7fad08973fa4841376c",
"assets/assets/images/plug_on.svg": "1c4564d427a3b44f476a56650273354e",
"assets/assets/images/plug%25201_on.svg": "b134286446917160921c3771b80ef73d",
"assets/assets/images/fan_speed_medium.png": "118aa2019483b6f7c17699aa090bdc0b",
"assets/assets/images/support_email.png": "6ba1a9354f998bed4a15f426a600f46c",
"assets/assets/images/settings.svg": "c20338e6fa3338571d08c3cf8ef2eea1",
"assets/assets/images/game.svg": "30a04e44cce505cc60772533b88bfbd7",
"assets/assets/images/movie.svg": "c39c95477c7b610f369e0bc4d3eb8537",
"assets/assets/images/room14.jpg": "c52fd1b0ac70127f1155407da297d5b4",
"assets/assets/images/room28.jpg": "b8ee6d288346ab4a06a9db8eaad159dc",
"assets/assets/images/room15.jpg": "c4791bbd3abf1f09f87c876b905d0449",
"assets/assets/images/geyser_on.svg": "1d5f1794e2cbe5048e3dded22775b453",
"assets/assets/images/chandelier_on.svg": "3b7eccd30132904d60fa4d80982407e2",
"assets/assets/images/setting_off.svg": "f151b690b4fed83b52a26394e4c12638",
"assets/assets/images/pc_off.svg": "f2cf773b4cc4c8cc38e4513ef01ad060",
"assets/assets/images/projector_on.svg": "0c954c6da7df3f7b3855e0d742c19607",
"assets/assets/images/fan%25202_off.svg": "ed014903e789722c4b50d21b9753f055",
"assets/assets/images/table%2520light_on.svg": "0aca16f534601b21d4ed3d9f63d080cd",
"assets/assets/images/room11.jpg": "eee73f3f600a2b0dd35eef9d3772ded6",
"assets/assets/images/room10.jpg": "25a86ec96f6bcd502c7169ebdbc56bdf",
"assets/assets/images/acc%2520settings.png": "86ca5233b7f6d403e0647dc8c9351372",
"assets/assets/images/notification_on.svg": "5ceb64bbd73302b50eaaf6e8b4f2328a",
"assets/assets/images/room38.jpg": "7bc66de8ee8db434a540ca56dcfd1c60",
"assets/assets/images/lock_off.svg": "a8d8a53d8f6eade7c64ff6c3f154442c",
"assets/assets/images/bulb_on.svg": "c5045b80a11315baf3f38c78334ccb7f",
"assets/assets/images/rgb.svg": "f2a66bf5eb356eb451fecf80ddca943a",
"assets/assets/images/wifi_on.svg": "bbded48dd80633f1329e808e6bb69379",
"assets/assets/images/power%2520option.png": "da570d16485e35c7981a9c56b91d0613",
"assets/assets/images/new_fan_img.png": "ffb920945fbd3a40c2811cac12c84b7f",
"assets/assets/images/home_on.png": "c5fe90bb34cbc110b0adaeccc6ac76ae",
"assets/assets/images/work.svg": "08fb397e81efda97278def76d76a0042",
"assets/assets/images/schedule_on.svg": "6a63260ba25b8757a4b1e22822589e52",
"assets/assets/images/pc_on.svg": "b21ada6a6062e04c7cca514a48e28e6a",
"assets/assets/images/plus.svg": "3bddcd42b470a300c92ff79f8a51d6ae",
"assets/assets/images/garage_off.svg": "8ac52061f13c0cab116b3a16b9d2b17d",
"assets/assets/images/fan_speed_high.png": "5af0f8d7fb35bef10d1594e8bbf6d219",
"assets/assets/images/room12.jpg": "fcccc2719abd8321f5cbd1c49689382a",
"assets/assets/images/led_off.png": "121735f1b4cfd3816184f1f5af3e31f1",
"assets/assets/images/set-top%2520box_on.svg": "e7ecb5518ed67b701329ec262dd94a45",
"assets/assets/images/auto%2520backup.png": "d82ac9daacae32840b01c0e4b628cb1c",
"assets/assets/images/garage_on.svg": "59c08436590b32410ce26e8238daa60b",
"assets/assets/images/geyser_off.svg": "33657bec2104608d7d88f7a93b49574f",
"assets/assets/images/fan_speed_auto.png": "cac2dcd0e08157ce7adfe9c4deada1d5",
"assets/assets/images/hanging%2520light%25202_on.svg": "2506e17c03b5d2eb544d73cf0a06358f",
"assets/assets/images/room36.jpg": "19469613dc3b703cd6fef333dd75f954",
"assets/assets/images/room22.jpg": "e85da2e1ec95e6edadbc78081dbf6fce",
"assets/assets/images/room23.jpg": "18c6165bafba18aa06fce57d11735565",
"assets/assets/images/heart_on.svg": "71070bab74e6b0f7bdaf3bcfbc319bf7",
"assets/assets/images/room37.jpg": "5cb798a7c0170a8304c3e97942ec249f",
"assets/assets/images/bulb%25202_on.svg": "fd16fcef4fce05c8a8e5fb01a2af63b2",
"assets/assets/images/tv_off.svg": "68fb58f9c59e0da2f75ba6e73d5bacf6",
"assets/assets/images/on_entry.png": "716098a47484fc9924d26204587b1cea",
"assets/assets/images/change_power_option.svg": "4e8eb6b6f4faac74ba3518bc2523843b",
"assets/assets/images/curtain_on.svg": "e1bb1112a5d2044447489338f1902856",
"assets/assets/images/bulb_on_3.svg": "f786019a2672144bc1b317dd1c9ada05",
"assets/assets/images/subuser.svg": "103de8366eb22844e1985fbb2ad2fc43",
"assets/assets/images/setting.svg": "e194cfb94128ca552e83a19be7bd751d",
"assets/assets/images/plug_off.svg": "0704dbe18508297b5635167c599a2ee8",
"assets/assets/images/password.png": "fd0e528717031c7b01f2635e7bc3d605",
"assets/assets/images/motor_on.svg": "1a629c80cb180d5f2b39c59bbedf444c",
"assets/assets/images/room21.jpg": "c1b54a4ce36551e7441d57f6e26dfe61",
"assets/assets/images/street%2520light_off.png": "f5e10877e85ff8fe43ca40162313efb8",
"assets/assets/images/fan_off.png": "86d657e60643794cd890d0194eae3d19",
"assets/assets/images/logo_dark.png": "c3ac74468d539ec74ce63fb464a8abcc",
"assets/assets/images/room34.jpg": "381fd27efc573dc43f2a0590a2000b64",
"assets/assets/images/hanging_lights_on.svg": "b8d67cb41d1da87e89c797064c99cb49",
"assets/assets/images/support_call.svg": "1980b3805dd7424ae11a8eaa6f43a87b",
"assets/assets/images/door_on.svg": "cca3de194719dbb44e36f362da662d30",
"assets/assets/images/geo_fencing.svg": "bfbbfb5ca7d3edc9fb59772bc4a45e54",
"assets/assets/images/night.svg": "51290e8977fd244a4d03c6f81e7e819d",
"assets/assets/images/yoga.svg": "aed97029529c14ef7c681c54cc8d8dcb",
"assets/assets/images/ac_off.svg": "e81c95cd6113723357a0b0733aced020",
"assets/assets/images/gate%2520light_on.svg": "7646397132a934fa00be8d8793eb7aeb",
"assets/assets/images/av_off.svg": "f9d6bda74f7bfbb81a8860261db5f2e1",
"assets/assets/images/heart_off.png": "0ac1a747d151a676fdb7ca5a8c5437df",
"assets/assets/images/automation_on.png": "c120a4f13a679536c1f284ff42aba4ef",
"assets/assets/images/room30.jpg": "4f0ed5283e6f5b59ce65311429180daa",
"assets/assets/images/motor_off.svg": "4cf3514c918ceb74cd655e05bad0ee81",
"assets/assets/images/room25.jpg": "7286fa50452446537e0ad1d21461fc4c",
"assets/assets/images/setting_1.svg": "d82ca3a9a4856762baceba1d5ed3a853",
"assets/assets/images/logout_1.svg": "3c38bf651b4730dee2487d97f4a0a68f",
"assets/assets/images/night%2520lamp_off.svg": "222e7bb9efea28b0e779e120f676b6a7",
"assets/assets/images/factory_reset.svg": "c6d737c4f08287ad03d3afc6b9b7f80f",
"assets/assets/images/change%2520device%2520name.png": "50328c93f91b0aafe4388d7e8c074e66",
"assets/assets/images/share%2520account.svg": "8969bd6a4e1f63be4aaadd899500cfa8",
"assets/assets/images/fan%25202_on.svg": "cfb8867b0ddfbe3913315846a741e917",
"assets/assets/images/fan_on.png": "f1e1bfece2f2e44d28dcd35d3e195d46",
"assets/assets/images/reading.svg": "75a8e55eb0a8e8a82ed86e145c20a4fd",
"assets/assets/images/youtube.svg": "26af39dcc1ec302ef043c03d6b047849",
"assets/assets/images/geo_fencing_new.svg": "d0ea85d47353868ee47b6476d31ef288",
"assets/assets/images/ac_on.svg": "ceacbc7f2aa7f6360a8b668ce855ff25",
"assets/assets/images/plug%25202_off.svg": "ac6c5c316119584436f9f5fdb136a278",
"assets/assets/images/on_exit.png": "12debc166df07775b9024e4385bc5943",
"assets/assets/images/sales_support.svg": "9c382753619d9091cd8d73b04b9dc0d2",
"assets/assets/images/room4.jpg": "438662fa8abdcb1224ecbdb731f9ae4b",
"assets/assets/images/configuration_mode.svg": "4b045a7ecc8ec77f83f8f508c099a467",
"assets/assets/images/notification_off.svg": "79649e35d396f70388db4309cdf129ad",
"assets/assets/images/logo_light.png": "9c8e0d6b29716a556569b2b360dedd4f",
"assets/assets/images/location.svg": "ceaad20c93ea9fdbe0fc36d6642f475e",
"assets/assets/images/home_off.png": "1bb23dbf4f1892bdf6f7b4233e1f0b7e",
"assets/assets/images/power_saving.png": "2b72cbe29a4de6b75e096dfceef35225",
"assets/assets/images/restore.svg": "2a31c4407ed1c9bbcc2f2b680285b1cb",
"assets/assets/images/hanging_lights_off.svg": "3e42662a4f164c9d588b95d6eada1085",
"assets/assets/images/room5.jpg": "ae347a9cb0b481da9b7dc9dbfa09f0fa",
"assets/assets/images/wifi_off.svg": "c85263aa1aa72a8d0efac1e0ad0f44ab",
"assets/assets/images/room7.jpg": "e69d157bf648f7b943e32f7a95a1458b",
"assets/assets/images/bulb_off.svg": "f55eb67df0d578efceaa31a065db0d96",
"assets/assets/images/door_off.svg": "6ce712f19c2f5253a780c6fc41e6d253",
"assets/assets/images/SmartNode_Logo.png": "7736cee2e757ba8dbbae82897d11dcf5",
"assets/assets/images/heart_off.svg": "955e42a6e51a7e5800053c34f4f58019",
"assets/assets/images/scene_on.png": "fe4dc69ecdadc42114ba0b44772f0777",
"assets/assets/images/device_identity.svg": "97b4ca6547718e1997f95f308f2590db",
"assets/assets/images/bulb%25202_off.svg": "087549a43f6074860c13511f07ced999",
"assets/assets/images/gate%2520light_off.svg": "6ac79628d938dba096de1b7c157fe3bd",
"assets/assets/images/tech_support.svg": "678e50bc836210ad88b34e60859e645e",
"assets/assets/images/installation_video.svg": "cca55de73b0d6d9c582fc08ffdb493d7",
"assets/assets/images/room6.jpg": "b7400a2b383ea7adff890bdd4a9f49af",
"assets/assets/images/manage_switch.svg": "e4431b44cf3e2285ae634dbfc1d32789",
"assets/assets/images/room2.jpg": "807934b422d087b2f2d15f3500aaa091",
"assets/assets/images/curtain_off.svg": "e36fe1d8bd6163352f96e27f63c08e06",
"assets/assets/images/plug%25202_on.svg": "226fb17464b11c89c6e829537e03cda5",
"assets/assets/images/history_on.svg": "eda96d45dc593d637d82d6a9cf4c0025",
"assets/assets/images/table%2520light_off.svg": "9672a5200f2a4ad59f8edbf19d23cf68",
"assets/assets/images/notification.png": "b13d5bb6fdf24abb2b906247e1696975",
"assets/assets/images/help.svg": "cd8495251f09af7c9a9bb280e3a09baf",
"assets/assets/images/sunrise_1.jpeg": "c968ccb321097ca90da0c52bd70d1740",
"assets/assets/images/plug%25201_off.svg": "d130cf1cb3a50a0d55ed298d57bdc14f",
"assets/assets/images/hanging%2520light%25202_off.svg": "4fab37aeb2bb4f567f133a0f7eb04d08",
"assets/assets/images/support_phone.png": "234629737823e984a15abbd1a03800e7",
"assets/assets/images/setting.png": "3fa3a79b84c84d3b96cc69a9f3091514",
"assets/assets/images/subuser.png": "7d213807c15b59e02a4da6574c6dd2d6",
"assets/assets/images/room3.jpg": "2e8d01da7f3fe48adfdf5e8b024cdef9",
"assets/assets/images/night%2520lamp_on.svg": "29daed6cebf27052a8f768692e4c79c3",
"assets/assets/images/room1.jpg": "91a322633d865132db3a8cb9b0872fc2",
"assets/assets/images/celebration.svg": "68e32f72d104d43b25069e3c1ee52e27",
"assets/assets/images/heart_on.png": "aab0a9ddba6975bfcc5d6e57d2edd27d",
"assets/assets/images/automation_off.png": "3c5b83aee38f2621353d165447106708",
"assets/assets/images/change%2520password.svg": "1561908b2eddc00b25b9581c8356086c",
"assets/assets/images/device%2520setup.png": "e7df2b07606145358db3391e506d7e62",
"assets/assets/images/chandelier_off.svg": "883ad0613264da75a766e37b24f314c4",
"assets/assets/font/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/font/digital-7.ttf": "1e670d88b23c7ab956f1829e3828a210",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
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
