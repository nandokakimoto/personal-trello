'use strict';

var signup = (app) => {
  app.post('/users/signup', (req, res) => {
    // Save user to the database;
    res.write('This is not ready yet...');
    res.end();
  });
};

module.exports = signup;
