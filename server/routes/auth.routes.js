const express = require('express');
const authRoutes = express.Router();
const authController = require('../controllers/auth/auth.controller');



authRoutes.post('/register', authController.CreateNewUser);

authRoutes.get('/activate-account/:token', authController.ActivateAccountForLogin);
// authRoutes.get('/activate-account', authController.ActivateAccountForLoginMobile);

authRoutes.post('/login', authController.AuthenticateUser)


authRoutes.post('/forgot-password', authController.ForgotPassword)  //* send email for check the user and send back url for reset password

authRoutes.get('/activate-password/:token', authController.ActivatePassword) //* activate the password and send back the new password via token


authRoutes.post('/reset-password', authController.ResetPassword) //* reset the password and save it in the database

authRoutes.post('/logout', authController.LogoutUser)

module.exports = authRoutes;