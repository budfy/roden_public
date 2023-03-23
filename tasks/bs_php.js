const bs = require('browser-sync');

module.exports = function bs_php() {
	bs.init({
		browser: ['default'],
		watch: true,
		proxy: 'roden/',
		logLevel: 'info',
		logPrefix: 'BS-PHP:',
		logConnections: true,
		logFileChanges: true,
	})
}