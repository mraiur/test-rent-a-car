const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const mongooseStringQuery = require('mongoose-string-query');
const autopopulate = require('mongoose-autopopulate');
const Types = mongoose.Schema.Types;

const RentedCarSchema = new mongoose.Schema(
	{
		user: {
			type: Types.ObjectId,
			ref: 'User',
			required: true,
			index: true,
			autopopulate: {
				select: ['name', 'email', 'username'],
			},
		},
		car: [
			{
				type: Types.ObjectId,
				ref: 'Car',
				required: true,
				autopopulate: true,
			},
		]
	},
	{ collection: 'cars' },
);

RentedCarSchema.plugin(timestamps, {
	createdAt: { index: true },
	updatedAt: { index: true },
});
RentedCarSchema.plugin(mongooseStringQuery);
RentedCarSchema.plugin(autopopulate);

module.exports = exports = mongoose.model('RentedCar', RentedCarSchema);
