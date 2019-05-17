const Config = require('./config');
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const session      = require('express-session');
const RedisStore = require('connect-redis')(session);
const passport = require('passport');
const UserModel = require('./models/user');

mongoose.connect(Config.database.uri, { useNewUrlParser : true });

passport.use(UserModel.createStrategy());
passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());


let server = express();

server.use(session({
	store: new RedisStore(Config.redis),
	key: Config.session.key,
	secret: Config.session.secret,
	resave: false,
	saveUninitialized: false,
	cookie: {
		expires: 600000
	}
}));
server.use(passport.initialize());
server.use(passport.session());

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