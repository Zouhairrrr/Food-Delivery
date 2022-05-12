const express = require('express');
const AdminRoutes = express.Router();

const AdminController = require('../controllers/api/Admin.controller');



AdminRoutes.post('/add-manager', AdminController.CreateManager);

AdminRoutes.get('/get-all-managers', AdminController.GetAllManagers);

AdminRoutes.get('/get-all-users', AdminController.GetAllUsers)   ;


AdminRoutes.get('/get-manager/:id', AdminController.GetManager);


AdminRoutes.put('/update-manager/:id', AdminController.UpdateManager);


AdminRoutes.delete('/delete-manager/:id', AdminController.DeleteManager);



module.exports = AdminRoutes;