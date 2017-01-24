'use strict';

var mongoose = require('mongoose');
var passport = require('passport');
var User = mongoose.model('User');
var LocalStrategy = require('passport-local').Strategy;

// Serialize sessions
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findOne({_id: id}, function(err, user) {
    done(err, user);
  });
});

// Use local strategy
// passport.use(new LocalStrategy(User.authenticate()));
passport.use(new LocalStrategy(
  {usernameField: 'email', passwordField: 'password'},
  function(username, password, done) {
    User.findOne({username: username}, function(err, user) {
      if (err) return done(err);

      if (!user) {
        return done(null, false, {message: 'Incorrect username.'});
      }

      user.comparePassword(password, function(err, isMatch) {
        if (err) throw err;

        if (!isMatch) {
          return done(null, false, {message: 'Incorrect password.'});
        }

        done(null, user);
      });
    });
  }
));
