'use strict';

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));

// Prepare app to bootstrap and jquery
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

// Compile less files
var less = require('less-middleware');
app.use(less(__dirname + '/public'));
app.use(express.static(__dirname + '/public'));

// Prepare app to use pug template engine
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('/', function(req, res){
  res.render('home');
});

// Custom handlers
require('./signin')(app);
require('./signup')(app);

app.listen(app.get('port'), function(){
  console.log('Server is listening on port', app.get('port'));
});
