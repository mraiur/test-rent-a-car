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
	database: {
		uri: process.env.DATABASE_URI
	}
};

module.exports = Object.assign({ env: currentEnvironment }, _default, config);