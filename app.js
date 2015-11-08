'use strict';

var Firebase = require('firebase');
var Twilio = require('twilio');
var express = require('express');

// Globals
var FIREBASE_APP_URL = process.env.FIREBASE_APP_URL;
var TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
var TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;

var app = express();
var db = new Firebase(FIREBASE_APP_URL);
var twilioClient = Twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

// Wire up the routes
app.use('/api', require('./routes/api'));

// Start the web server
app.listen(process.env.PORT || 3000);
