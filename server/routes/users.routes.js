const express = require('express');
const usersRoutes = express.Router();

const UserController = require('../controllers/api/users.controllers');

const middleware = require('../middlewares/auth.middleware');


usersRoutes.post('/create/order', middleware.CheckuserRole, UserController.CreateOrder);

usersRoutes.get('/get-all-orders', UserController.GetAllUserOrders);

usersRoutes.get('/get/order/:id', UserController.GetOrderById);

usersRoutes.put('/update/order/:id', UserController.UpdateOrder);

usersRoutes.delete('/delete/order/:id', UserController.DeleteOrder);

usersRoutes.get('/confirm-order/:id', UserController.ConfirmeOrder);


module.exports = usersRoutes;