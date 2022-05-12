const mongoose = require('mongoose')
const Schema = mongoose.Schema



const reviewSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        rating: { type: Number, required: true },
        comment: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);
const restaurantSchema = new Schema({


    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    restaurantName: { type: String, required: true },
    restaurantAddress: { type: String, required: true },
    restaurantPhone: { type: String, required: true },
    restaurantEmail: { type: String, required: true },
    restaurantImage: { type: String, required: true },
    restaurantDescription: { type: String, required: true },
    reviewSchema: [reviewSchema],
    restaurantRating: { type: Number, required: true },



})

module.exports = mongoose.model('Restaurant', restaurantSchema);