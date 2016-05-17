'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require ("mongoose");

var app = express();
app.set('port', (process.env.PORT || 3000));
app.set('mongo_url', (process.env.MONGODB_URI || 'mongodb://localhost/custom_trello'));

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Serve static files from node_modules folder
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/angular/'));
app.use('/js', express.static(__dirname + '/node_modules/angular-route/'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

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

// Connecto to the database
mongoose.connect(app.get('mongo_url'), (err, res) => {
  if (err) {
    console.log('ERROR connecting to: ' + app.get('mongo_url') + '. ' + err);
  } else {
    console.log('Succeeded connected to: ' + app.get('mongo_url'));
  }
});

// Custom handlers
require('./signup')(app, urlencodedParser);

app.listen(app.get('port'), () => {
  console.log('Server is listening on port', app.get('port'));
});
