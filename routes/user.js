const express = require('express');
const router = express.Router();
const userController = require('../controllers/user'); 

// Route for user sign-up
router.post('/signup', userController.signUp);

// Route for user login
router.post('/login', userController.login);

// Route for forget password
router.post('/forget-password', userController.forgetPassword);



module.exports = router;
