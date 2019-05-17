const passport = require('passport');
const Auth = require('../controllers/auth');

module.exports = (server) => {
	server.route('/auth/login').get(Auth.getLogin);
	server.post('/auth/login',
		( req, res, next) => {
			passport.authenticate('local', Auth.postLoginValidate.bind(Auth, req, res, next))(req, res, next);
		},
		Auth.postLogin
	);

	server.route('/auth/register').get(Auth.getRegister);
	server.route('/auth/register').post(Auth.postRegister);
};
