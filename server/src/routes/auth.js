const passport = require('passport');
const Auth = require('../controllers/auth');

module.exports = (server) => {
	server.route('/auth/login').get(Auth.getLogin);
	server.route('/auth/login').post(
		passport.authenticate('local', {
			successReturnToOrRedirect: '/app',
			failureRedirect: '/auth/login'
		}), Auth.postLogin );

	server.route('/auth/register').get(Auth.getRegister);
	server.route('/auth/register').post(Auth.postRegister);
};
