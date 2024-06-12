const bcrypt = require('bcryptjs');
const express = require('express');
const { User } = require('../../models/index');
const { Sequelize } = require('sequelize');
const router = express.Router();


router.get('/register', (req, res) => res.render('register'));

router.post('/register',  async (req, res) => {
    try {
      const { username, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      await User.create({ username, password: hashedPassword });
      res.redirect('/login');
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

router.get('/login', (req, res) => res.render('login'));

router.post('/login',  async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ where: { username } });
      if (!user || !await bcrypt.compare(password, user.password)) {
        return res.redirect('/login');
      }
      req.session.userId = user.id;
      res.redirect('/dashboard');
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/logout',(req, res) => {
    req.session.destroy();
    res.redirect('/');
  });

module.exports = router;
