const {ensureLoggedIn} = require('connect-ensure-login');
const Default = require('../controllers/default');

module.exports = (server) => {
	server.route('/app').get(ensureLoggedIn('/auth/login'), Default.get);
};