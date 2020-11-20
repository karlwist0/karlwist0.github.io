const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new BrowserSyncPlugin({
		  // browse to http://localhost:3000/ during development,
		  // ./dist directory is being served
		  host: 'localhost',
		  port: 3000,
		  server: { baseDir: ['dist'] }
		})
	]
};