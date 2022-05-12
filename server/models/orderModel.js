const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const OrderSchema = new Schema({

    userId: { type: Schema.Types.ObjectId, ref: "Users" },
    orderDate: { type: Date, required: true },
    orderItems: [{
        itemId: { type: Schema.Types.ObjectId, ref: "Food" },
        itemName: { type: String, required: true },
        itemPrice: { type: Number, required: true },
        itemQuantity: { type: Number, required: true },
        itemTotal: { type: Number, required: true },
    }],

    shippingAddress: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zip: { type: String, required: true },
    },
    shippingPrice: {
        type: Number,
        default: 0.0,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },
    isDelivered: {
        type: Boolean,
        default: false,
    },
    deliveredAt: {
        type: Date,
    },
    pickedUpAt: {
        type: Date,
    },
    deliveredBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Agent',
    },
    status: {
        type: String,
        enum: [
            'pending',
            'processing',
            'ready',
            'picked_up',
            'delivered',
            'cancelled',
        ],
        default: 'pending',
    }


})

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;