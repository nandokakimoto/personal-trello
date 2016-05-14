'use strict';

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));

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
app.get('/partials/:name', function(req, res){
  res.render('partials/' + req.params.name);
});

// Custom handlers
require('./signup')(app);

app.listen(app.get('port'), function(){
  console.log('Server is listening on port', app.get('port'));
});
