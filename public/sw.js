if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return t[e]||(s=new Promise((async s=>{if("document"in self){const t=document.createElement("script");t.src=e,document.head.appendChild(t),t.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!t[e])throw new Error(`Module ${e} didn’t register its module`);return t[e]}))},s=(s,t)=>{Promise.all(s.map(e)).then((e=>t(1===e.length?e[0]:e)))},t={require:Promise.resolve(s)};self.define=(s,a,c)=>{t[s]||(t[s]=Promise.resolve().then((()=>{let t={};const i={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return t;case"module":return i;default:return e(s)}}))).then((e=>{const s=c(...e);return t.default||(t.default=s),t}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Dairy.svg",revision:"5cea0c88228ee44a6be1935a89aab24a"},{url:"/Fruits.png",revision:"f960fcf07c2f1af911e2707c1ebe7e94"},{url:"/Fruits.svg",revision:"30be198ecd1576d1d22027b3509780bf"},{url:"/Grains.svg",revision:"01a6ced23758af088054aa4b5dc2a5d0"},{url:"/Meat.svg",revision:"f4e7077245e0b576b2f53dd6f007f8e3"},{url:"/Others.svg",revision:"3ce9760405227cd3791912617612cb3a"},{url:"/Vegetables.svg",revision:"4732527c5189ecf11322caa7c4314c6d"},{url:"/_next/static/OvUoPCAWD6g1XoLKHWCvt/_buildManifest.js",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/OvUoPCAWD6g1XoLKHWCvt/_ssgManifest.js",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/chunks/291-a5fb776c2b3026c9ee6f.js",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/chunks/328-8ef0e0d17d0d46772542.js",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/chunks/430-4b5b8965248c7b5a133f.js",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/chunks/614-012111b29fb2e8867443.js",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/chunks/78-df265f9b87e4d56519c8.js",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/chunks/86-a29812d6f9aef3ddcd50.js",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/chunks/877-39875ff4e97ca07ccf81.js",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/chunks/911-baf647bef30fa3e7aa0d.js",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/chunks/932-2ee3d138949979b03ee1.js",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/chunks/framework-2191d16384373197bc0a.js",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/chunks/main-0ffc87fb8aa688ab8067.js",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/chunks/pages/_app-e23fbc44253d75c8135e.js",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/chunks/pages/account-9d55bf693aebf27a6317.js",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/chunks/pages/account/edit-4406e68705e6468b714d.js",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/chunks/pages/cart-1766697f4fe458ed7113.js",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/chunks/pages/checkout-6e91c9a00a2f6561bc5a.js",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/chunks/pages/farm-78d9273b90b08f52a2bb.js",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/chunks/pages/farm/addProducts-6f0a9268e99a0a9f3aa6.js",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/chunks/pages/farm/editProducts-3c4bec90f2863a30cd13.js",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/chunks/pages/farm/farmerProducts-f54bf26bf62e9f814544.js",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/chunks/pages/farm/orders-e6face22d99d8495427d.js",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/chunks/pages/index-53014645adf406da8e22.js",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/chunks/pages/login-30383b1487007fbcc119.js",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/chunks/pages/product/%5Bid%5D-e82499e3cb0479ea80cb.js",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/chunks/pages/product/dairy-a6ef31409e2d0fb14808.js",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/chunks/pages/product/fruits-db977261e52c90372f23.js",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/chunks/pages/product/grains-4b2a305dafadac5142cd.js",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/chunks/pages/product/meat-7f4491d1b799c40ccb59.js",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/chunks/pages/product/others-706fa6897d487ac69961.js",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/chunks/pages/product/vegetables-c141e164b881737326b1.js",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/chunks/pages/productSearchResult/%5BsearchName%5D-0877b18e25873ebacc0e.js",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/chunks/pages/register-06d710f0e21f6c1e81e4.js",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/chunks/webpack-ddd010a953737b6e3536.js",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/css/022ee9085ea6f6282901.css",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/css/120f2e2270820d49a21f.css",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/css/2822d32981bfb6a81e9e.css",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/css/44dbc87f88283c341bed.css",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/css/4a061507599f6c56fa0a.css",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/css/6503d5925b09f1e59a4b.css",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/css/7a000051e5c90c7ce0d4.css",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/css/8e43cf04d025eab25894.css",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/css/94a7e00eca1584c7a0ad.css",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/css/95bca5cac55fdd5c3ab0.css",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/css/968ca77af58d3d2acc72.css",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/css/a221f2451c1deb3d5866.css",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/css/aceb7b2263d5cb924914.css",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/css/c2d4e474dba25304e2e7.css",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/css/cb7bc7f18c3e1ad79359.css",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/css/e8a82b18743a1eb23d11.css",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/image/public/Dairy.58dee99926faba077ecdbd3bf1d31466.svg",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/image/public/Fruits.702a443e2b65af0a868a3524b404bc81.svg",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/image/public/Grains.6d0482e6faebf705244faa157a1c34e8.svg",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/image/public/Meat.0a2b92b231d60c9c5d69b29d8252a71f.svg",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/image/public/Others.24756bd57673865afbb765fd9d2be0aa.svg",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/image/public/Vegetables.c7fa04e01c728c6539a0179ddfc60425.svg",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/image/public/arrow.dea58d8b6e6bfd3bdb851acbbe73a3da.svg",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/image/public/banner.b0b27d05c6495d4902f6ed0140d97bbc.png",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/image/public/logo.aef5456169f63db1a6df070571ad4642.png",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/image/public/paypal.09cc08224f44c1e8abdfad7d2c6b9f31.png",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/_next/static/image/public/plus.14100e6f1b8a711884c17a7a900eebc4.png",revision:"OvUoPCAWD6g1XoLKHWCvt"},{url:"/arrow.svg",revision:"cb4200168152396c4b776a94743c215e"},{url:"/banner.png",revision:"c7618ec1ad0d5946c5093eed154919f7"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icon-512x512.png",revision:"0ab1a7fc68c413b5c5a86f0a024a6965"},{url:"/icon.png",revision:"8515c9e303776a61cab7c49b0e6bfc6f"},{url:"/logo.png",revision:"f91cd5647758c7106104300a45c2e549"},{url:"/manifest.json",revision:"9d9a988b84dca58158dd2f1df2e700a9"},{url:"/paypal.png",revision:"509c2ae9528574229177986bf48ecb07"},{url:"/plus.png",revision:"f57f6993febcf408a2af5c3b0cc7ea6d"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
