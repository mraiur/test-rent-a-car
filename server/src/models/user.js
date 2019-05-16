import mongoose, { Schema } from 'mongoose';
import bcrypt from 'mongoose-bcrypt';
import timestamps from 'mongoose-timestamp';
import mongooseStringQuery from 'mongoose-string-query';

import RentedCarSchema from './rentedCar';
import jwt from 'jsonwebtoken';
import config from '../config';

export const UserSchema = new Schema(
	{
		email: {
			type: String,
			lowercase: true,
			trim: true,
			index: true,
			unique: true,
			required: true,
		},
		username: {
			type: String,
			lowercase: true,
			trim: true,
			index: true,
			unique: true,
			required: true,
		},
		password: {
			type: String,
			required: true,
			bcrypt: true,
		},
		name: {
			type: String,
			trim: true,
			required: true,
		},
		active: {
			type: Boolean,
			default: true,
		}
	},
	{
		collection: 'users',
		toJSON: {
			transform: function(doc, ret) {
				delete ret.password;
			},
		}
	},
);

UserSchema.post('remove', async function(user) {
	return await Promise.all([
		RentedCarSchema.remove({ user }),
	]);
});

UserSchema.plugin(bcrypt);
UserSchema.plugin(timestamps, {
	createdAt: { index: true },
	updatedAt: { index: true },
});
UserSchema.plugin(mongooseStringQuery);

UserSchema.index({ email: 1, username: 1 });

UserSchema.methods.serializeAuthenticatedUser = function serializeAuthenticatedUser() {
	let user = this;
	let serialized;

	serialized = {
		_id: user._id,
		email: user.email,
		name: user.name,
		username: user.username,
		jwt: jwt.sign({ email: user.email, sub: user._id }, config.jwt.secret),
	};
	return serialized;
};

module.exports = exports = mongoose.model('User', UserSchema);
