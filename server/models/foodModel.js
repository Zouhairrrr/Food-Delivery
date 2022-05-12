const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodSchema = new Schema({

    userId: { type: Schema.Types.ObjectId, ref: "Users" },
    categoryId: {
        type: Schema.Types.ObjectId, ref: "Catigories",
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const Food = mongoose.model('Food', FoodSchema);

module.exports = Food;