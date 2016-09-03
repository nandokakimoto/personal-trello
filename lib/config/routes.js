'use strict';

module.exports = function(app, jsonParser){
  // Users
  var users = require('../controllers/users');
  app.post('/users/signup', jsonParser, users.create);

  // Session
  var session = require('../controllers/session');
  app.get('/auth/session', jsonParser, session.session);
  app.post('/auth/session', jsonParser, session.login);
  app.delete('/auth/session', jsonParser, session.logout);
};
