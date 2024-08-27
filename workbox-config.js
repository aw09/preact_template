module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		"**/*.{js,css,html,png,jpg,jpeg,gif,svg,webp}",
		"**/*.json"
	],
	swDest: 'build/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};