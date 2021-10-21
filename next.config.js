const withPWA = require("next-pwa");

module.exports = withPWA({
	pwa: {
		dest: "public",
		register: true,
		skipWaiting: true,
	},
	reactStrictMode: true,
	images: {
		domains: ['deco3801-decompile.uqcloud.net']
	},
});