const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const {User} = require('../models');

module.exports = function(passport) {
  passport.use(new LocalStrategy((username, password, done) => {
    //Match user 
    User.findOne({ where: { username } })
      .then(user => {
        if (!user) {
          return done(null, false, { message: 'That username is not registered' });
        }
    //Match password
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: 'Password incorrect' });
          }
        });
      })
      .catch(err=> done(err)); //Handle errors during the User.findOne() promise 
}));
  //Serialize the user Id to store in the session 
  passport.serializeUser((user, done)=> {
    done(null, user.id);
  });
  //Deserialize the user by finding the user by ID in the db
  passport.deserilaizeUser((id, done)=> {
    User.findByPk(id)
    .then(user => done(null, user))
    .catch(err => done (err));
  });
};