const Order = require('../../models/orderModel');
const Helper = require('../../helpers/Helpers');


const ReservedOrder = async (req, res) => {
    try {
        const { orderId } = req.params;
        const order = await Order.findById(orderId);
        if (!order) {
            return res.status(404).json({
                status: 404,
                message: 'Order not found'
            });
        }
        const { userId } = req.user;
        if (order.userId.toString() !== userId) {
            return res.status(401).json({
                status: 401,
                message: 'Unauthorized'
            });
        }
        const { orderItems } = order;
        const { foodId, quantity } = req.body;
        const food = orderItems.find(item => item.itemId.toString() === foodId);
        if (!food) {
            return res.status(404).json({
                status: 404,
                message: 'Food not found'
            });
        }
        if (food.itemQuantity < quantity) {
            return res.status(400).json({
                status: 400,
                message: 'Quantity not available'
            });
        }
        food.itemQuantity -= quantity;
        food.itemTotal = food.itemPrice * food.itemQuantity;
        order.totalPrice = orderItems.reduce((total, item) => total + item.itemTotal, 0);
        order.shippingPrice = Helper.calculateShippingPrice(order.totalPrice);
        order.totalPrice += order.shippingPrice;
        order.save();
        return res.status(200).json({
            status: 200,
            message: 'Order reserved successfully',
            data: order
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: 'Internal server error',

        });
    }
};



module.exports = { ReservedOrder };
