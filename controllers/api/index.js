const router = require('express').Router();

const authRoutes = require('./authRoutes');
const financeRoutes = require('./financeRoutes');

router.use('/auth',authRoutes);
router.use('/finance', financeRoutes)

module.exports = router;