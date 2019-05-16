exports.get = async (req, res) => {
	console.log('app/ user', req.user);
	res.render('app', { title: 'app' });
};