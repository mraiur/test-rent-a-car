exports.getLogin = async (req, res) => {
	res.render('auth', { title: 'Login', app_file: 'login'});
};

exports.postLogin = async (req, res) => {
	res.redirect('/');
};

exports.getRegister = async (req, res) => {
	res.render('auth', { title: 'register', app_file: 'register' });
};

exports.postRegister = async (req, res) => {
	res.render('auth', { title: 'register post' });
};