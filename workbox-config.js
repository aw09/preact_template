module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{html,json,ico,png,svg,css,js}'
	],
	swDest: 'build/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};