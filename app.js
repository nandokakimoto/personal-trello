'use strict';

var express = require('express');
var app = express();

// Set views directory
app.set('views', './views');

// Set view engine to jade/pug
app.set('view engine', 'pug');

app.get('/', function(req, res){
  res.render('home');
});

app.listen(3000, function(){
  console.log('Server is listening on port 3000...');
});
