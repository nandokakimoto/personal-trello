'use strict';

var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.create = (req, res, next) => {
  var newUser = new User({
    name: req.body.name,
    username: req.body.email
  });

  newUser.save(function(err) {
    if (err) {
      return res.status(400).json(err);
    }

    req.logIn(newUser, function(err) {
      if (err) {
        return next(err);
      }
      return res.status(201).json(newUser.user_info);
    });
  });
};
