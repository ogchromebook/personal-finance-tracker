module.exports = {
    ensureAuthenticated: function(req, res, next) {
    // if the user is authenticated process to the next middleware
        if(req.isAuthenticated()) {
            return next(); 
        }
    req.flash('error_msg', 'Please log in to view that resource');
    // if not authenticated redirect to login page
    res.redirect('/login')
    }
};