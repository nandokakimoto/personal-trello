'use strict';

exports.session = (req, res, next) => {
  if (req.isAuthenticated()) {
    return res.json(req.user.user_info);
  }
  res.sendStatus(401);
};

exports.login = (req, res, next) => {
  res.sendStatus(500);
};

exports.logout = (req, res, next) => {
  res.sendStatus(500);
};
