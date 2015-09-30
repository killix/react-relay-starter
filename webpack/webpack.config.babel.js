import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const env = process.env;
const version = "0.0.1";
const buildPath = "public/assets";
const baseUrl = "http://localhost:8080";

let config = {
  entry: [path.resolve('src/app/client.js')],
  eslint: {
    configFile: '.eslintrc'
  },
  output: {
    path: path.resolve(`${buildPath}/${version}`),
    filename: "app.js",
		chunkFilename: "[name].[id].js",
    publicPath: `${baseUrl}/${version}/`
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          stage: 0,
          plugins: ['./scripts/babelRelayPlugin']
        }
      },
      {
        test: /\.js$/,
        loader: 'eslint'
      }
    ]
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-relay': 'Relay'
  },
  // plugins: [
  //   new webpack.NoErrorsPlugin(),
  //   new webpack.EnvironmentPlugin(Object.keys(env)),
  //   new ExtractTextPlugin('[name].css')
  // ]
};

export default config;
