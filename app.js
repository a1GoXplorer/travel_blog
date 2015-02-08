var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var pg = require('pg');


var app = express();


app.listen(3000, function() {
  console.log('Listening');
});