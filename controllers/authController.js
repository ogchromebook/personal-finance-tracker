const bcrypt = require('bcryptjs');
const passport = require('passport');
const { User } = require('..');

// register a new user
exports.registerUser = (req, res) => {
    const { username, password } = req.body;
    let errors = [];

    // check required fields
    if (!username || !password) {
        errors.push({ msg: 'Please enter all fields.'});
    }

    // check password length, ensuring at least 8 characters
    if (password.length < 8) {
        errors.push({ msg: 'Password must be at least 6 characters' });
    }

        // if there are errors, re-render the registration form with the error messages
    if (errors.length > 0) {
        res.render('register', { errors, username, password });
    } else {
        // check if the username already exists in the database
        User.findOne({ where: { username }})
        .then(user => {
            if (user) {
                errors.push({ msg: 'Username already exists.' });
                res.render('register', { errors, username, password });
            } else {
                const newUser = User.build({ username, password });
                // hash the password before saving the user data to ensure data security
                bcrypt.genSalt(10, (err, salt) => bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {
                            req.flash('success_msg', 'You are now registered and can log in!');
                            res.direct('/login');
                        })
                        .catch(err => console.log(err));
                }));
            }
        });
    }
};

// log in a user
exports.loginUser = (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/finance/dashboard',
        failureRedirect: '/login',
        failureFlash: true
    })  (req, res, next);
};

// log out a user
exports.logoutUser = (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out.');
    res.redirect('/login');
};