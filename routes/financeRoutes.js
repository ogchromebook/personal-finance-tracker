const express = require('express');
const router = express.Router();
const { getDashboard, addTransaction } = require('..');
const { ensureAuthenticated } = require('..');

// route to display the user dashboard
router.get('/dashboard', ensureAuthenticated, getDashboard);

// route to handle a user adding a new transaction to the dashboard
router.post('/addTransaction', ensureAuthenticated, addTransaction);

// export the router so it can be accessed throughout the application
module.exports = router