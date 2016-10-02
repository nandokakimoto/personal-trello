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
  if(req.user) {
    req.logout();
    res.sendStatus(200);
  } else {
    res.sendStatus(400, "Not logged in");
  }
};
