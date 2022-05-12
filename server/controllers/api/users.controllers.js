const Order = require('../../models/orderModel');
const Helper = require('../../helpers/Helpers');



const CreateOrder = async (req, res) => {
    const data = req.body;

    const order = Order.create(data);
    if (!order) {
        return res.status(400).json({
            status: 400,
            message: 'Order not created'
        });
    }
    return res.status(200).json({
        status: 200,
        message: 'Order created successfully',
        data: order
    });
}





const GetAllUserOrders = async (req, res) => {

    const data = req.body;
    const order = Order.find({ userId: data.userId });
    if (!order) {
        return res.status(500).json({
            status: 500,
            message: 'No orders found'
        });
    }
    return res.status(200).json({
        status: 200,
        message: 'Order created successfully',
        data: order
    });
}

const GetOrderById = async (req, res) => {

}

const UpdateOrder = async (req, res) => {

}

const DeleteOrder = async (req, res) => {

}

const ConfirmeOrder = async (req, res) => {

}

module.exports = {
    CreateOrder,
    GetAllUserOrders,
    GetOrderById,
    UpdateOrder,
    DeleteOrder,
    ConfirmeOrder
}