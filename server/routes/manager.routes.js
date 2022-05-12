const express = require('express');
const managerRoutes = express.Router();
const restaurantRoutes = express.Router();
const managerController = require('../controllers/api/Manager.controller');
const restaurantController = require('../controllers/api/restaurant.controller');

// const middlewares = require('../middlewares/auth.middleware');!
// const middlewares = require('../middlewares/auth.middleware');!


// managerRoutes.post('/login', managerController.CreateManager);
managerRoutes.get('/dashboard/:id', managerController.GetDashboard);

restaurantRoutes.get('/get-all-restaurants', restaurantController.GetAllRestaurants);
restaurantRoutes.get('/get-restaurant/:id', restaurantController.GetRestaurantById);
restaurantRoutes.post('/create-restaurant', restaurantController.CreateNewRestaurnat);
restaurantRoutes.put('/update-restaurant/:id', restaurantController.UpdateRestaurantById);
restaurantRoutes.delete('/delete-restaurant/:id', restaurantController.DeleteRestaurantById);
restaurantRoutes.get('/restaurant/:id/users', restaurantController.GetRestaurantByUserId);


module.exports = { restaurantRoutes, managerRoutes };