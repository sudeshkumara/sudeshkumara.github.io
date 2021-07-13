'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "178949498299eeb88d0569ba66e59069",
"index.html": "1fce31508b1e40992e912655179afda2",
"/": "1fce31508b1e40992e912655179afda2",
"main.dart.js": "cc7088fce5dd4528452c2f19142ea442",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "eb25edcd80801c80e8768afa4153c959",
".git/config": "ffacaebf430d075f8ccf41a646a17ecd",
".git/objects/66/25ce6da3491a606dc3c4de1e961fc15de3bec8": "18ca1d4c977fc525c33fcad515e1b5e9",
".git/objects/3e/83d082e77851c2ed92cc1fa047f923dcaeedcc": "ba149923d56a0d9cd0b519c601f6f269",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/68/1c918a29dea8fb262254f82ca53eed5aa74530": "dadd4920eebefb0a7edd35f2c8d8e742",
".git/objects/57/c97b407449bae08dcfcdfb15254390ba02d64e": "34a052481e048a0a36d1fff53f66266d",
".git/objects/03/2c5eecb9c8df204c2d5f9262388284d018cbcb": "cd12d3dfeadab50150fc3eaf526c1eb8",
".git/objects/04/4d03d750e71ff528ed2a593dde150dbe0a535f": "3abd500b613efbc73deb0394c37d823e",
".git/objects/04/552fec8270273a78fd23995ad44baa36b2aa06": "c726793172ab2fa3ee7826cedd7133ab",
".git/objects/6a/18fa22022167c26fdbaa81d57d23ad82294135": "feba182950ef4f9bf7d044e827c0ceab",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3c/8e76a2879dd2a90fb35e6914ba403bf3ddd5dc": "fa9f4d21dbb020cc7efc2b0d6200314e",
".git/objects/56/22144182e9af5f78423a8755603bf75313b962": "c22b812033f07e0edf06157b8920d0c7",
".git/objects/51/1582514e82ebde0de28089b62cf00eafcd81e0": "47469ac6f86602307a8481e6b89d0ac2",
".git/objects/0b/8da031efa766a0d9a63c23331bfe6bba95ce72": "c78e339eb48afcad26b64bf9675cc427",
".git/objects/94/5e1ea3eb85e0e78d20c5f353f8d3e54f02e4be": "e14e1962a0e1f472ba92a23ebcdd83e2",
".git/objects/34/ac15d530352f58ed4298ff8a007126a1781734": "74aac6ea99756b0de1efa8c53ba8b25d",
".git/objects/05/be48b2fe053d00fbbdc71ec431e03a8472c7ad": "15b38f90cfeda74e9a53c699178206e6",
".git/objects/9d/1fe88b77600b5c5056c0442d3f19c876b92b8b": "0d6a7ec9e36b8357ba00bd3839842b95",
".git/objects/9d/311b85f7c3d06989a3f6ffe2f483f6bb52879d": "58294de47e86eaac321287750478209b",
".git/objects/b2/dbe29b20a4e330e628de22df2ddcc778494ff2": "11ad46b537fcc462e304a94dcb2bc926",
".git/objects/d9/685e051f4ad79da31452776dc6f5b8deb7de93": "201b105b35677bbc59a3f7266ec7dfa1",
".git/objects/d9/b50530ca8b01c0e686b9a2dd31bdda17f32b6f": "b326089267c918395ea59f76e7903a56",
".git/objects/ad/c4343963d90f529724427557428d930b568d4d": "0397eeeb95e31749a29805f0af02e408",
".git/objects/ad/42259eced073235193b2ed0a958e19d1f0ab80": "7fc3aa675d7334c0908bc51373577f45",
".git/objects/d7/f70823e65bb3596ff4ee5faab6afc5593b8975": "e70367ae3cc81e4e7af19c6d936d4ddf",
".git/objects/d0/97256b6caad7145cd19ef65ea2a3c2d10092b2": "350e9c0bb061eaeaf95a7e21c2e5b3f9",
".git/objects/be/6db1aa9e3e16e0fa75d1d02df14ff716f091d8": "da15a1a2553bad402df70d2189df388c",
".git/objects/b3/bad0b3955373b5a1d796a67b28f69586e85579": "2912ff2b481dd7408bbfae3bf3c108b7",
".git/objects/bc/cb9718c96999e205f75692638b78aeffb0a9ac": "12dd39c4d904d344c95c028c500c0937",
".git/objects/ae/a7c6abd0b592e77d8a0c5072a963a93f568bac": "a62e471dc79d8fd0dbe90d37287a33b1",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/08c9d54ca351eff05c57757e182b4ad7fbbd15": "a9585e2087d9006c1dbc27214eefeb60",
".git/objects/f3/7fc9762bf60c41d6fa3fcd73fd75bea026cb8e": "6c249ec3073616246cfa26d8feea8818",
".git/objects/c7/bc223abfee98f84593b3fa8be37018b4d1dd7a": "1ec61f2af26f829e035b8a5806c928a0",
".git/objects/c9/e2e26f322c9b89bc9dc173d128b16fa55d60b4": "9381d92f907130cf2c37860f9155ae44",
".git/objects/fd/deddc8945fa5ec040699ee204013684c51c312": "d0ed3aaaa6ac843077de18e9e51764ba",
".git/objects/f2/103510d915a5b0edd9162fd1f0706421b78318": "c1010758a46b34c580cd2f07a5afd106",
".git/objects/f5/a6369bef71f956460db91229c37879012569c0": "b0073f4d9fa8ca2c0009a82d801a51d0",
".git/objects/e3/2f7d2a2cce62a6b883035f2fc6095e8b885523": "080329ba2cf048305f1d104d1ace5190",
".git/objects/e4/dc0b764aec7a72138463b2860ec3400a31e117": "49e922b520fb37aface8df3f8a0a2585",
".git/objects/ed/6e279c28d3763163358b4d45e0b088787d0f55": "3d62b12e9facc0b1da0e51f6d4b31f98",
".git/objects/ed/82c70ed0e11ed871494e10fd8ba30b6a449ff3": "fd676081a82553c8a3649cb381c063b4",
".git/objects/ed/1c128602b4f08e81b8f1c6f5d7f011ffde39f0": "689f11cc5ced9cb70124436f1128d26f",
".git/objects/c1/77b0adc24a8c9e171c1014ac019a7a2050ecf7": "5a458ffa857e1b517a2248e91cb7944d",
".git/objects/20/4e70daca17e68ef166572c8a9b58017d615aa7": "6221338780e268464d428629fe4b4f3a",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/11/0316d7f5a97039132f3f2791aa544bf68e63a6": "4f0f50c0df4c6d877471cc134256bb85",
".git/objects/7d/41353f87dab4a44bded0d4400b9fcd79035558": "e191f9e22339c76974e4d0c4746990a5",
".git/objects/7d/de1098f79491cdb2086dbd0679c6e518ce3c67": "959074b5cc541e83efc2badbb6f4f2ef",
".git/objects/7c/4793c77a9c25bc55d3a451c1fd3a66290a223e": "3d0f0d1270d93c8641a92f93bdf21fbf",
".git/objects/16/284cbd8606060b70805b92d244ae64d87638e7": "1710141f79d69eb718ed004aee70a68a",
".git/objects/42/967faa96b16fc730fe7d499896a80dcc11d0f7": "4ec17ead11e88148e7d6b9969d926e6b",
".git/objects/89/5bbe96f7049ff1a7f535b47e7b2947e7e959d3": "3ea8cef7a516b4d91015e3191ac68d77",
".git/objects/87/5c2fbae5398a0a59d9749a41fa764c6e909962": "ef288ee34a6d4dbb2fd757ea1c1a2c6c",
".git/objects/80/89ca455f03f40e3df26d8679a58f19473e2810": "a3c4ba00d4d5962b7d214cfa79058372",
".git/objects/8a/b66378c5723acdba86137ea07307706895f11b": "ad8b54de9b0ed8178c864858a90b916e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/7c8ded49b756037d8f366dfbd2ebd575a68a9d": "69840600fa90e6064b1fd37fc0476db1",
".git/objects/81/eb394f952ea6371ecbe93c222c5b09fac4393d": "2cd0045980813274089e5365258f22dc",
".git/objects/72/9c2d1a285a9baa51054955ddc76a029624d23d": "06d22417ff57eb26928d70c8e26f188e",
".git/objects/2a/e0d3835911d63e7021b0b15f9d957bafa084ea": "bfbe5a05fa99bfd561b1f07ed9a80918",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/7a6ab64fa121e251f38a23210b3eed65314825": "58a8758374767ec50f9c33ce140fe3b7",
".git/objects/38/b7ac000b3a7f071107d66447239e63730ae9da": "ea65652542fbd62b972d4b9497040fa1",
".git/objects/38/a8b0a86978931ea254a67b6eafce81fe66c6a1": "e6b2814042daea4f16fb5b5e7bbadbe5",
".git/objects/6e/926ea6f1fec3376d77e40e205feaaba3b4c8f9": "52bc8d2ce90818ec9e5d86bf2bfc7506",
".git/objects/98/5a6be1ad488042cc46cf20ce3d9d667bcfd8bf": "5b900c15d89c8a90c224c8e15f707fd2",
".git/objects/5e/0f574d994481f491489be62eece7d450f3a0d5": "11e483938b3405c798e8ec899c7f3d24",
".git/objects/5b/f0f5dbc5dbe2b23dfba97519b34b00c0324ef0": "7b57871a0d925ecfecc60a2f5e5eb296",
".git/objects/37/e09093ab5fa2aebd1af97b595c768acfcfd307": "c473b83b9fb456654fd9e57722709839",
".git/objects/37/844d67c4a5809761db0a98d79144aa694d6a6b": "14649f6d449189f18ae83274bca190c2",
".git/objects/37/c83a10778359d96b825b4df2ef48322384cffb": "3e698444941d5ee61ebd0cf2ba6cd5ca",
".git/objects/06/0279a78118745598f38288bdefe40bc7cc7df9": "3fe661d7a0ad6609e748efeda75f2257",
".git/objects/6c/60262bc19be65259a6886351b6a8e5944e7d19": "1c90551aa842706ec57f7a0ce0415b19",
".git/objects/39/7895114fefc3b0699226e2d02baf0acd4ef9b2": "f3ad1c9f8779e680d0a976cc2bdd2367",
".git/objects/52/31dff41298a84ff02eca63834d6152647de19b": "04c47d5d400b4ccf5de1468c759ccb91",
".git/objects/52/162d93081eb66f7940ffde1e82ff4b3e45b67f": "a3f74cc7e66d7119cf69ec4fc35d7e62",
".git/objects/63/7bf62df6b8ba3e6572f328ac348c1e6185ccf5": "ef7b784f906dd44f57d15d04a82b4133",
".git/objects/63/1630edbe644f9b21b5e970e5bf8b128bf77489": "b9c2d8aae3eb9f72a419db007b9df113",
".git/objects/0a/4b2d4583fbac1e57de76f4858c9a4e5a9d6cd3": "0235eaac156efb48e6aa5d2f44482728",
".git/objects/b6/aafe68491d579d55a71f0ae6d30a1afffcaa95": "998e64c9d76c22d620385f4f5c855b53",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/29ea622d441d28f49c543cd86848356f4a484d": "8220c99a14d24998ed060daa659481ec",
".git/objects/a8/e57bd2ad26b9e66634a84ca2e41e9181dfdfba": "4d45aaef4ee4ab1d8087b0fd449c7d2f",
".git/objects/b0/d7357f17caa33815e1e264682252242339c3c3": "279b21ef97d7e2c453e356e7daeacc0d",
".git/objects/b9/0db01c8381a26ffc74b06af79ea58a30de23b2": "844ef04488a3aea9934f907c09a58a9e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/73018d395f53e9e061439a9d02a0f0d37fa756": "113091bee2021b89379d76e7f379c36e",
".git/objects/e1/035c83f47e5b8bc4c382a05d2accfd479d5025": "b741acea0d8a49a7d079dbc54044285e",
".git/objects/f0/a656a594222a382808217c411e235b7a0ec0a6": "73f79323978537fc3a000084c6343cfa",
".git/objects/f7/2425552e53288794c3a933540427842d9bebc7": "b4957691b83b111a1a5b0d5bc072e7ff",
".git/objects/fa/c1422bd11d40516cec4086acc866014eea6e5a": "39cbb5854ae4f46d3f9f8ddb3249bbac",
".git/objects/e0/29ecf593e9d90bdaa8dac00adf998a985ae62d": "fbfd3333815d776afec840e808139641",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/aac15c5c8401b8fd1ff32aa38df8daf5c0010b": "789953c4387099be6cbed76a091b783e",
".git/objects/83/8d2a45a2df1fc4921dc3f5c96395eaab7d601f": "3328baf62bade61a3002403eb07f6116",
".git/objects/48/a9ba02a2c51674e316ab5bb1239c2997fa546c": "ca109009628f8c6778e3623790454c4e",
".git/objects/84/b6f424cdf92e3a4d44caa07522bd5f579e0e86": "05603b685ce34cbcd822f6ec328620fc",
".git/objects/84/7a8ce98241e8d35811884e19cf624a5d12758d": "719cf8c0fde129e2694acf8a2c008f38",
".git/objects/24/f4c5ed50153971335a4470ce321bff2e871b7a": "ed78ca4c8f96ecfb46c2d62cd9c3c5fe",
".git/objects/24/f931f43b3e61dd803f77190f8d00e8d00ab0ec": "6ca406824916ffe90443e4fa1495b044",
".git/objects/4f/f2cb21ee8320473c2849c1fe7346ca7f9f88c4": "89356046d1deadb458877c900a2bfeb1",
".git/objects/85/c5112d9ba837f5ff4af8111d67cd00a57e2172": "e49ca2ea8e84995844bfb7586740e552",
".git/objects/76/2382fc24ba361451f63ed41805f94cdecaef5a": "d2022b0c1e183311919e32c13063d697",
".git/objects/2b/8599a5ac803ca9305a5f4dd8895740dc895de0": "18a1aa1c5face55fa23657bd994f9145",
".git/objects/78/2f2ae474c6d4ae50a69b7b4069c1036181bbbb": "bd6d9f834380ef169eac9d54e6a1280d",
".git/objects/8b/5d290c213bb1c881ebe0734a51f64f45e9dcee": "23f852b988387e65dad3ecf2bd6f8e89",
".git/objects/8b/a05d3b10e9537f70b75326b5a034b588781d6c": "09fe90a1d0b8e5073e633895031ef652",
".git/objects/8e/6a05463a2fc884e4979fddd8638e59ac961b1f": "3f06bb0cf1050ddf4619439d03ce3b7d",
".git/objects/25/2ead3a50b4cb86ed1143ad6af653069b155181": "fce332dbb0dfd8c57e73113632aa5f80",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d1f655d8448d34ce794241f9919783d8",
".git/logs/refs/heads/master": "d1f655d8448d34ce794241f9919783d8",
".git/logs/refs/remotes/origin/master": "3995e305eb89f71915ad60b8f7107230",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "5f74b0a879bcb5e5d236aef260f771c0",
".git/refs/remotes/origin/master": "5f74b0a879bcb5e5d236aef260f771c0",
".git/index": "4a78d5caad4905db36cade53cb133766",
".git/COMMIT_EDITMSG": "3a4e582de16603747135d054b3d6797c",
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
