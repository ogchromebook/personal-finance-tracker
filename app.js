const express = require('express');
const session = require('express-session');
const expressLayouts = require('express-handlebars');
const flash = require('connect-flash');
const passport = require('passport');
const dotenv = require('dotenv');

// load environment variables
dotenv.config();

const app = express();

// passport configuration
require('./config/passport')(passport);

// set up handlebars
app.engine('handlebars', expressLayouts());
app.set('view engine', 'handlebars');

// body parser to parse incoming request bodies
app.use(express.urlencoded({ extended: false }));

// express session for handling user sessions
app.use(session(
    {
        secret: 'secret', 
        resave: true,
        saveUninitialized: true
    }
));

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

// connect to flash for flash messages
app.use(flash());

// global variables for flash messages
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

// routes for user and finance functionalities
app.use('/users', require( './routes/authRoutes.js'));
app.use('/finance', require('./routes/financeRoutes'))

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`)); // start the server