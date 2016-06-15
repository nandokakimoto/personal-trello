'use strict';

var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.create = (req, res, next) => {
  var newUser = new User({
    name: req.body.name,
    username: req.body.email
  });

  User.register(newUser, req.body.password, function(err, user) {
    if (err) {
      return res.status(400).json(err);
    }

    res.status(200).json(newUser);
  });
};