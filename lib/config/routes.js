'use strict';

module.exports = function(app, jsonParser){
  var users = require('../controllers/users');
  app.post('/users/signup', jsonParser, users.create);
};
