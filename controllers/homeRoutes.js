const router = require('express').Router();
const { Transaction, User } = require('../models');

router.get('/', async (req, res) => {
    try {
        console.log('hello')
      // Get all projects and JOIN with user data
    //    const transactionData = await Transaction.findAll({
    //     include: [
    //       {
    //         model: User,
    //       },
    //     ],
    //   });
  
    //   // Serialize data so the template can read it
    //   const transactions = transactionData.map((transaction) => transaction.get({ plain: true }));
    //   console.log(transactions)
      // Pass serialized data and session flag into template
      res.render('home', { 
        // transactions, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;
