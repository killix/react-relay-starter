import path from "path";
import webpack from "webpack";

let hostname = process.env.HOSTNAME || "localhost";
let port  = process.env.PORT ? parseInt(process.env.PORT) : 8000;

import config from "./webpack.config.babel";
config.cache = true;
config.debug = true;
config.watch = true;
config.devtool = "eval";

config.entry.unshift(
	"webpack-dev-server/client?http://" + hostname + ":" + port,
	"webpack/hot/only-dev-server"
);

config.output.hotUpdateMainFilename = "update/[hash]/update.json";
config.output.hotUpdateChunkFilename = "update/[hash]/[id].update.js";
config.resolve = {
  extensions: [ '', '.js', '.jsx' ]
};
config.plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
];

config.devServer = {
	publicPath: config.output.publicPath,
	contentBase: "./public/assets",
	hot: true,
	inline: true,
	lazy: false,
	quiet: true,
	noInfo: false,
	headers: {
		"Access-Control-Allow-Origin": "*"
	},
	stats: {
		colors: true
	},
	host: hostname,
	port: port
};

export default config;
