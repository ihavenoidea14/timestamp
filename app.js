var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var timestamp = require('./routes/timestamp');
var index = require('./routes/index');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', timestamp);
app.use('/', index);

module.exports = app;
