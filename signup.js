"use strict";

var signup = function(app){
  app.get('/users/signup', function(req, res){
    res.render('users/signup');
  });
};

module.exports = signup;
