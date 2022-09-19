module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{js,png,jpg,css,html,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};