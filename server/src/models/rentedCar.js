import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import mongooseStringQuery from 'mongoose-string-query';
import autopopulate from 'mongoose-autopopulate';

export const RentedCarSchema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
			index: true,
			autopopulate: {
				select: ['name', 'email', 'username'],
			},
		},
		car: [
			{
				type: Schema.Types.ObjectId,
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
