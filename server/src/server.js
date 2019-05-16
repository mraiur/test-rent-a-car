const Config = require('./config');
const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

let server = express();

server.use(	express.static( path.resolve(__dirname, '../../public')));

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json({ limit: '5mb' }));

server.set('json spaces', 4);
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'pug');

fs.readdirSync(path.join(__dirname, 'routes')).map((file) => {
	require('./routes/' + file)(server);
});

server.listen(Config.server.port);
console.log(Config.server);
console.log(`Running server ${Config.server.host}:${Config.server.port}`);