import mongoose from 'mongoose';

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

const agentSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        profilePicture: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            default: 0,
        },
        numReviews: {
            type: Number,
            default: 0,
        },
        reviews: [reviewSchema],
        city: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ['available', 'unavailable', 'busy', "on vecation"],
            default: 'available',
        },
        orders: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Order',
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Agent = mongoose.model('Agent', agentSchema);


module.exports = Agent;