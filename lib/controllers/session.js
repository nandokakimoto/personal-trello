'use strict';

var passport = require('passport');

exports.session = (req, res, next) => {
  if (req.isAuthenticated()) {
    return res.json(req.user.user_info);
  }
  res.sendStatus(401);
};

exports.login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    var error = err || info;
    if (error) {
      return res.status(400).send(error);
    }
    req.logIn(user, err => {
      if (err) {
        return res.send(err);
      }
      res.json(req.user.user_info);
    });
  })(req, res, next);
};

exports.logout = (req, res, next) => {
  if (req.user) {
    req.logout();
    res.sendStatus(200);
  } else {
    res.sendStatus(400, "Not logged in");
  }
};
