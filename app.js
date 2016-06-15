'use strict';

var express = require('express');
var passport = require('passport');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");

var app = express();
app.set('port', (process.env.PORT || 3000));
app.set('mongo_url', (process.env.MONGODB_URI || 'mongodb://localhost/custom_trello'));

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// Create application/json parser
var jsonParser = bodyParser.json();

// Serve static files from node_modules folder
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/angular/'));
app.use('/js', express.static(__dirname + '/node_modules/angular-route/'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

// Initialize passport
var User = require('./lib/models/user')
var pass = require('./lib/config/pass');
app.use(passport.initialize());
app.use(passport.session());

// Compile less files
var less = require('less-middleware');
app.use(less(__dirname + '/public'));
app.use(express.static(__dirname + '/public'));

// Prepare app to use pug template engine
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

// Default route
app.get('/', function(req, res){
  res.render('home');
});

// Route to provide angular partials
app.get('/partials/:name', (req, res) => {
  res.render('partials/' + req.params.name);
});

// Database config
require('./lib/config/db')(app);

// Custom handlers
require('./lib/controllers/signup')(app, jsonParser);

app.listen(app.get('port'), () => {
  console.log('Server is listening on port', app.get('port'));
});
