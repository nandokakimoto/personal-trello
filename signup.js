'use strict';

var signup = (app, urlencodedParser) => {
  app.post('/users/signup', urlencodedParser, (req, res) => {
    // Save user to the database;
    res.write('Welcome, ' + req.body.name + '!');
    res.end();
  });
};

module.exports = signup;
