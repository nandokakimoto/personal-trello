'use strict';

module.exports = function(app){
  // Users
  var users = require('../controllers/users');
  app.post('/users/signup', users.create);

  // Session
  var session = require('../controllers/session');
  app.get('/auth/session', session.session);
  app.post('/auth/session', session.login);
  app.delete('/auth/session', session.logout);
};
