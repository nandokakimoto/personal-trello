'use strict';

var User = require('./models/user');
var LocalStrategy = require('passport-local').Strategy;

var signup = (app, jsonParser, passport) => {

  passport.use(new LocalStrategy(User.authenticate()));
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());

  app.post('/users/signup', jsonParser, (req, res) => {
    console.log(req);

    var newUser = new User({
      name: req.body.name,
      username: req.body.email,
      password: req.body.password
    });

    if(!newUser.name || !newUser.username || !newUser.password) {
      response.sendStatus(400);
    }

    User.register(newUser, newUser.password, function(err, user) {
      if (err) {
        return res.render('partials/signup', { error : err.message });
      }

      passport.authenticate('local')(req, res, function() {
        req.session.save(function (err) {
          if (err) {
            return next(err);
          }
          res.redirect('/');
        });
      });
    });

  });
};

module.exports = signup;
