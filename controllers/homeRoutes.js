const router = require('express').Router();
const { Transaction, User } = require('../models');

router.get('/', async (req, res) => {
    try {
        console.log('hello')
     // Get all projects and JOIN with user data
       const transactionData = await Transaction.findAll({
        include: [
          {
            model: User,
          },
        ],
      });
  
      // Serialize data so the template can read it
      const transactions = transactionData.map((transaction) => transaction.get({ plain: true }));
      console.log(transactions)
      res.render('home')
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/dashboard', async (req,res) => {
    try {
      const transactionData = await Transaction.findByPk(req.params.id,{
        include: [
          {
            model: User,
          },
        ],
      });
      const transaction = transactionData.get({ plain: true});
      res.render('/transactions', {
        ...transaction,
        logged_in: req.session.logged_in
      });
    } catch (err){
      res.status(500).json(err);
    }
  });

  router.get('/register', async (req,res) => {
    if (req.session.logged_in) {
      res.redirect('/dashboard');
      return;
    }
    
    res.render('register');
  });

  router.get('/login', async (req,res) => {
    if (req.session.logged_in) {
      res.redirect('/dashboard');
      return;
    }
  
    res.render('login');
  });


  module.exports = router;
