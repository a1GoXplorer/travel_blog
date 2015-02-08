var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var pg = require('pg');
var methodOverride = require('method-override');


var app = express();

app.set('view-engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

app.get('/', function(req, res) {
  res.render('site/home.ejs');
});

app.get('/about', function(req, res) {
  res.render('site/about.ejs');
});

app.get('/contact', function(req, res) {
  res.render('site/contact.ejs');
});


app.listen(3000, function() {
  console.log('Listening');
});