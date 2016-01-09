'use strict';

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var morgan = require('morgan');
var db = require('./server/config/db');

// Configure our server
mongoose.connect(db.url);
app.use(morgan('dev'));
// parse application/json 
app.use(bodyParser.json()); 
// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(express.static(__dirname + '/public'));

// Routes
require('./server/routes')(app);

// Listen
app.listen(process.env.PORT, process.env.IP);

// Put a friendly message on the terminal
console.log("Server running at http://" + process.env.IP + ":" + process.env.PORT);

// Expose app
exports = module.exports = app;