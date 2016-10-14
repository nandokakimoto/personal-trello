'use strict';

var express = require('express');
var passport = require('passport');
var bodyParser = require('body-parser');
var logger = require('morgan');
var path = require('path');

var app = express();
app.set('port', (process.env.PORT || 3000));
app.set('mongo_url', (process.env.MONGODB_URI || 'mongodb://localhost/custom_trello'));

// Friendly logging
app.use(logger('dev'));

// Create application/x-www-form-urlencoded parser
bodyParser.urlencoded({extended: false});
app.use(bodyParser.json());

// Set expiress session parameters
app.use(require('express-session')({
  secret: 'e37bbaa4fc8c40853973e112daf8d25cd31e06be149f885f183453531f217776',
  resave: false,
  saveUninitialized: false
}));

// Serve static files from node_modules folder
app.use('/js', express.static(
  path.join(__dirname, '/node_modules/jquery/dist')));
app.use('/js', express.static(
  path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(
  path.join(__dirname, '/node_modules/angular/')));
app.use('/js', express.static(
  path.join(__dirname, '/node_modules/angular-route/')));
app.use('/js', express.static(
  path.join(__dirname, '/node_modules/angular-resource/')));
app.use('/js', express.static(
  path.join(__dirname, '/node_modules/angular-cookies/')));
app.use('/js', express.static(
  path.join(__dirname, '/node_modules/angular-sanitize/')));
app.use('/css', express.static(
  path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/css', express.static(
  path.join(__dirname, '/node_modules/font-awesome/css')));
app.use('/public/fonts', express.static(
  path.join(__dirname, '/node_modules/font-awesome/fonts')));

// Initialize passport
require('./lib/models/user');
require('./lib/config/pass');
app.use(passport.initialize());
app.use(passport.session());

// Compile less files
var less = require('less-middleware');
app.use(less(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/public')));

// Prepare app to use pug template engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');

// Default route
app.get('/', function(req, res) {
  res.render('home');
});

// Route to provide angular partials
app.get('/partials/:name', (req, res) => {
  res.render('partials/' + req.params.name);
});

// Database config
require('./lib/config/db')(app);

// Custom handlers
require('./lib/config/routes')(app);

app.listen(app.get('port'), () => {
  console.log('Server is listening on port', app.get('port'));
});
