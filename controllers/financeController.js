const express = require('express');
const { Transaction } = require('../models/Transaction');
const router = express.Router();

exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.findAll({ where: { userId: req.session.userId } });
    res.render('dashboard', { transactions });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.addTransaction = async (req, res) => {
  try {
    const { amount, description, type } = req.body;
    await Transaction.create({ amount, description, type, userId: req.session.userId });
    res.redirect('/dashboard');
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = router;
