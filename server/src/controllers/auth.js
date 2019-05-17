exports.getLogin = async (req, res) => {
	res.render('auth', { title: 'Login', app_file: 'login'});
};

exports.postLoginValidate = async (req, res, next, err, user, message, statusCode) => {


	if( err ){
		return next(message);
	}
	if(!user && message )
	{
		return res.json(message, statusCode);
	}
	console.log("next", next);
	console.log("err", err);
	console.log("user", user);
	console.log("message", message);
};

exports.postLogin = async (req, res) => {
	console.log('asdasdasdasd');
	res.redirect('/');
};

exports.getRegister = async (req, res) => {
	res.render('auth', { title: 'register', app_file: 'register' });
};

exports.postRegister = async (req, res) => {
	res.render('auth', { title: 'register post' });
};