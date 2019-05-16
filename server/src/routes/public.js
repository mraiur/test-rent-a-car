const express = require('express');
const router = express.Router();
const Public = require('../controllers/public');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('public', { title: 'Express' });
});

module.exports = (server) => {
	server.route('/').get(Public.get);
};
