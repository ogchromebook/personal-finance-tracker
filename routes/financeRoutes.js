const express = require('express');
const router = express.Router();
const financeController = require('../controllers/financeController');

router.get('/dashboard', financeController.getTransactions);
router.post('/transactions', financeController.addTransaction);

module.exports = router;
