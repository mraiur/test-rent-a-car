import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import mongooseStringQuery from 'mongoose-string-query';
import autopopulate from 'mongoose-autopopulate';

export const CarSchema = new Schema(
	{
		license: {
			type: String,
			trim: true,
			required: true,
		},
		available: {
			type: Boolean,
			default: true,
			valid: true,
		},
	},
	{
		collection: 'cars'
	}
);

CarSchema.plugin(timestamps, {
	createdAt: { index: true },
	updatedAt: { index: true },
});
CarSchema.plugin(mongooseStringQuery);
CarSchema.plugin(autopopulate);

CarSchema.index({ license: 1 }, { unique: true });
CarSchema.index({ available: 1 });

module.exports = exports = mongoose.model('Car', CarSchema);
module.exports.CarSchema = CarSchema;
