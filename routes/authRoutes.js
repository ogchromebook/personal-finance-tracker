const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logoutUser } = require('..');
const { ensureAuthenticated } = require('..');
const { register } = require('module');

// route displays the login page
router.get('/login', (req, res) => res.render('login'));

// route displays the registration page
router.get('/register', (req, res) => res.render('register'));

// route to handle user registration
router.post('/register', registerUser);

// route to handle user login
router.post('/login', loginUser);

// route to handle user logout
router.get('/logout', logoutUser);

//export the router so it can be accessed across the application
module.exports = router;