"use strict";

var signin = function(app){
  app.get('/users/signin', function(req, res){
    res.render('users/signin');
  });
};

module.exports = signin;
