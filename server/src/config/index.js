const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

const configs = {
	development : {
		config : 'dev'
	},
	production : {
		config : 'prod'
	},
	test : {
		config : 'test',
		env: path.resolve(__dirname, '..', '..', 'tests', '.env')
	}
};

const currentEnvironment = process.env.NODE_ENV || 'development';
const defaultPath = path.resolve(__dirname, '..', '..', '..', '.env');
const envPath = configs[currentEnvironment].env || defaultPath;

dotenv.config({ path: envPath });

let config = require(`./${configs[currentEnvironment].config}`);

let _default = {
	product: {
		url: process.env.PRODUCT_URL
	},
	server: {
		host : process.env.SERVER_HOST,
		port: process.env.SERVER_PORT
	},
	redis: {
		db: 0,
		host : "127.0.0.1",
		port : 6379
	},
	session : {
		secret: 'fhsyepawgcodzwbmdcwlqbldgdtivcbyqhyo',
		key: 'user_sid',
	},
	jwt : {
		secret : 'jwtsecret'
	},
	database: {
		uri: 'mongodb://localhost:27017/rentacar'
	}
};

module.exports = Object.assign({ env: currentEnvironment }, _default, config);