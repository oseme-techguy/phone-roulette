'use strict';

var express = require('express');
var twilio = require('twilio');

var router = express.Router();

/**
 * This route runs whenever someone calls (using voice) our Phone Roulette phone
 * number.
 *
 * What we'll do (since Phone Roulette only cares about SMS / MMS) is read off a
 * nice message to the user, then hang up.
 */
router.get('/voice', twilio.webhook(), function(req, res) {
  console.log('hi!');
  var twiml = new twilio.TwimlResponse();
  return res.end(twiml.say('Thanks for using Phone Roulette! Please send this number a text message to get started.'));
});

module.exports = router;
