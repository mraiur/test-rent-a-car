exports.get = async (req, res) => {
	console.log('public');
	res.render('public', { title: 'public get' });
};