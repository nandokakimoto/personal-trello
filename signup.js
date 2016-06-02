'use strict';

var mongoose = require('mongoose');
var User = mongoose.model('User');
var passport = require('passport');

var signup = (app, jsonParser) => {

  app.post('/users/signup', jsonParser, (req, res) => {
    var newUser = new User({
      name: req.body.name,
      username: req.body.email
    });

    User.register(newUser, req.body.password, function(err, user) {
      if (err) {
        return res.status(400).json(err);
      }

      res.sendStatus(200);
    });
  });
};

module.exports = signup;
