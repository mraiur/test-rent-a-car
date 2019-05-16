const chai = require('chai');
const util = require('./utils');
const User = require('../queries/User');

describe('Server', () => {
	describe('authenticated endpoint middleware', () => {
		let user;

		before(async () => {
			let fixtures = await util.loadFixtureData('user');
			let user = await User.insertUser(fixtures.user[0]).catch(err=>{
				console.log('======', err);
			});
			console.log('asdasdasd', user);
			/*user = await User.findOne({ email: 'logged_in_user@email.com' });
			expect(user).to.not.be.null;*/
		});

		after(async () => {
			await User.remove().exec();
		});

		describe('authenticated endpoints', () => {
			it("should return 200 for requests to endpoints that don't require an authenticated user", async () => {
				let response = await request(api).get('/');
				expect(response).to.have.status(200);
			});

			it('should return 401 for unauthorized requests to endpoints that require an authenticated user', async () => {
				// TODO: Explicitly test all non-excluded endpoints
				let response = await request(api).get(`/users/${user._id}`);
				expect(response).to.have.status(401);
			});
		});
	});
});
