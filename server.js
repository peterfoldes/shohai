'use strict';

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var morgan = require('morgan');
var db = require('./server/config/db');

var port = process.env.PORT || 8080;
var host = process.env.IP || 'localhost';

// Configure our server
mongoose.connect(db.url);
app.use(morgan('dev'));
// Parse different inputs such as:
// - application/json 
// - application/vnd.api+json as json
// - application/x-www-form-urlencoded
app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(express.static(__dirname + '/public'));

// Routes
require('./server/routes')(app);

// Listen
app.listen(port, host);

// Put a friendly message on the terminal
console.log("Shohai server running at http://" + process.env.IP + ":" + process.env.PORT);
console.log("Please enjoy and have a nice day.")
// Expose app
exports = module.exports = app;