const router = require('express').Router();

const authController = require('./authController');
const financeController = require('./financeController');

router.use('/auth',authController);
router.use('/finance', financeController)

module.exports = router;