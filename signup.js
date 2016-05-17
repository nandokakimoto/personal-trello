'use strict';

var User = require('./models/user');

var signup = (app, urlencodedParser) => {

  app.post('/users/signup', urlencodedParser, (req, res) => {
    var newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });

    newUser.save(function(err){
      if(err) throw err;

      console.log('User saved: ' + newUser.name);
    });

    res.write('Welcome, ' + newUser.name + '!');
    res.end();
  });
};

module.exports = signup;
