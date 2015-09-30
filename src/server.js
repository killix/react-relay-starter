import path from 'path';
import express from 'express';
import graphQL from './graphql'; // GraphQL server

const env = process.env;
let debug = process.env.DEBUG == "true";
let port = process.env.PORT ? parseInt(process.env.PORT) : 8080;
let host = process.env.HOST ? process.env.HOST : "127.0.0.1";

let router = express();
router.set('x-powered-by', false);

router.use('/assets', express.static(path.join(__dirname, "../public/assets")));

router.use('/vendor/react.min.js', (req, res, next) => {
	res.sendFile(path.resolve(__dirname, "../node_modules/react/dist", "react.min.js"));
});
router.use('/vendor/react-dom.min.js', (req, res, next) => {
	res.sendFile(path.resolve(__dirname, "../node_modules/react/dist", "react-dom.min.js"));
});
router.use('/vendor/relay.js', (req, res, next) => {
	res.sendFile(path.resolve(__dirname, "../node_modules/react-relay/dist", "relay.js"));
});

router.use('/graphql', graphQL);
router.use('/*', (req, res, next) => {
	res.sendFile(path.resolve(__dirname, "../public", "index.html"));
});

router.listen(port, host, () => {
  console.log(`Relay is now running on http://${host}:${port}`);
});
