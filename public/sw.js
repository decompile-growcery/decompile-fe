if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,n,c)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}}))).then((e=>{const s=c(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-21b21c9a"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Dairy.svg",revision:"618d4d0e4a821c8901226b7521448365"},{url:"/Fruits.png",revision:"f960fcf07c2f1af911e2707c1ebe7e94"},{url:"/Fruits.svg",revision:"e498e12779613d8018553b3dbd4426e0"},{url:"/Grains.svg",revision:"e3a42349c5fd676057d1f4dd0ba74a0a"},{url:"/Meat.svg",revision:"170014c1a2be08e968892db765e8371e"},{url:"/Others.svg",revision:"98e17a9a7237041c6e698af1d9e119b4"},{url:"/Vegetables.svg",revision:"7236ff9207bbf36e00c02cf88bfe1961"},{url:"/_next/static/9Izuy2PF6KjPlXqnu2aCq/_buildManifest.js",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/9Izuy2PF6KjPlXqnu2aCq/_ssgManifest.js",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/chunks/186-9196531dcca47c441252.js",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/chunks/291-a5fb776c2b3026c9ee6f.js",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/chunks/430-3f78e7d3ce73a2df4932.js",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/chunks/603-3c84e5b5294ad9e3ab3e.js",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/chunks/759-f1dd93e352cb3c2c4d38.js",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/chunks/760-f9f4846bfb6e3cf83907.js",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/chunks/78-668a8c6e531118dd4520.js",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/chunks/877-d67d34aa6f9685675c7b.js",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/chunks/framework-2191d16384373197bc0a.js",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/chunks/main-c1d35381db27ce4e995a.js",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/chunks/pages/_app-e23fbc44253d75c8135e.js",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/chunks/pages/account-cc7167730a98e7b20a3f.js",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/chunks/pages/account/edit-fa903bd3221b04a99685.js",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/chunks/pages/cart-ce7240253bfa6c5117fd.js",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/chunks/pages/checkout-236dc5c2b12fcac70cce.js",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/chunks/pages/farm-3d3a8447d7888bac9650.js",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/chunks/pages/farm/addProducts-e6d4ee7aab3edbeced8b.js",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/chunks/pages/farm/edit/%5Bid%5D-5821a032404acd4baf98.js",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/chunks/pages/farm/editProducts-7e46f18f3cffeeeba0a9.js",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/chunks/pages/farm/farmerProducts-720aec824029a8dd5f9a.js",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/chunks/pages/farm/orders-ac36e4efdab9fcc9835d.js",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/chunks/pages/index-2800d107c6dae97abf2a.js",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/chunks/pages/login-48e9f2a1e8bb1804e911.js",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/chunks/pages/product/%5Bid%5D-e5dba8dd4b6ab693c5bb.js",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/chunks/pages/product/dairy-be220d774bc5141a98b9.js",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/chunks/pages/product/fruits-7ad206f14b29afdc8917.js",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/chunks/pages/product/grains-7aaf00088125dd842ad8.js",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/chunks/pages/product/meat-8384357ebe60d1444082.js",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/chunks/pages/product/others-c2c3646261c80c1c272e.js",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/chunks/pages/product/vegetables-8a55a1631db910bb00f9.js",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/chunks/pages/register-5ac9f5313f17a4beacde.js",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/chunks/pages/search/%5BsearchName%5D-e149bffe8bb64d435be8.js",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/chunks/webpack-ddd010a953737b6e3536.js",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/css/08054b38a7059dcfbd6a.css",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/css/120f2e2270820d49a21f.css",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/css/21366e9e452864fa691f.css",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/css/247d8a36b80aa1211c8d.css",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/css/2859b54ebaa7e4b5be7f.css",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/css/38b828cd49fb45d4ee92.css",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/css/42549a84ae90455f4069.css",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/css/4fb92827a75672b82001.css",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/css/853512d73f554b0465cf.css",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/css/a2f9291cd6c912c49b1a.css",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/css/b7972d8beba9a0b13b5a.css",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/css/c4767471f4d2fd445513.css",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/css/cb7bc7f18c3e1ad79359.css",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/css/dd69c1cb8ab95d8a800f.css",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/css/e5ffd388ed340fe59aa5.css",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/css/e935c7ed4feba25cda6e.css",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/css/ef4459063e9cdfad6a63.css",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/image/public/Dairy.9bfa2cedc3ebb613f059b87e1b121118.svg",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/image/public/Fruits.a42bcd8624106782f9752286c9e2fbad.svg",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/image/public/Grains.57f2d910ef177e338eea7952925a1beb.svg",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/image/public/Meat.8c6e2d8b17b0b921632ca918150bc6fc.svg",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/image/public/Others.bb7c851fa1e491a1ad860fc967d0a62d.svg",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/image/public/Vegetables.5883a095b330f90892dc1ed19ab772d2.svg",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/image/public/arrow.3bb85f0d00f53884793af5bba8eabecc.svg",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/image/public/banner.b0b27d05c6495d4902f6ed0140d97bbc.png",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/image/public/logo.aef5456169f63db1a6df070571ad4642.png",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/image/public/paypal.09cc08224f44c1e8abdfad7d2c6b9f31.png",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/_next/static/image/public/plus.14100e6f1b8a711884c17a7a900eebc4.png",revision:"9Izuy2PF6KjPlXqnu2aCq"},{url:"/arrow.svg",revision:"4de05f9bd6f88b04f5185ead1206ea47"},{url:"/banner.png",revision:"c7618ec1ad0d5946c5093eed154919f7"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icon-512x512.png",revision:"0ab1a7fc68c413b5c5a86f0a024a6965"},{url:"/icon.png",revision:"8515c9e303776a61cab7c49b0e6bfc6f"},{url:"/logo.png",revision:"f91cd5647758c7106104300a45c2e549"},{url:"/manifest.json",revision:"8c622d2e613e93a49f1cc482540de542"},{url:"/paypal.png",revision:"509c2ae9528574229177986bf48ecb07"},{url:"/plus.png",revision:"f57f6993febcf408a2af5c3b0cc7ea6d"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
