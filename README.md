# build the client
babel-node ./node_modules/webpack/bin/webpack.js --verbose --colors --display-error-details --config webpack/webpack.config.babel.js
# launch the server
babel-node ./src/server.js
