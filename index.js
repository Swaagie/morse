'use strict';

var tessel = require('tessel')
  , morse = require('tessel-morse')
  , Relay = require('relay-mono')
  , relay = Relay.use(tessel.port['A']);

//
// Simple demo that toggles a relay based on morse intervals.
//
relay.on('ready', function ready() {
  morse('hello world', {
    on: function on() {
      relay.turnOn(1, function (err) {
        if (err) return console.error(err);
        console.log('Relay on');
      })
    },

    off: function off() {
      relay.turnOff(1, function (err) {
        if (err) return console.error(err);
        console.log('Relay off');
      })
    }
  });
});