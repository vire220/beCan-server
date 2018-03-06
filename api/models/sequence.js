var mongoose = require("mongoose");
var winston = require('winston');
var BeaconSchema = require("./beacon.js");

var SequenceSchema = new mongoose.Schema({
  name: String,
  description: String,
  content: String,
  beacons: [{type: mongoose.Schema.Types.ObjectId, ref: 'Beacon'}]
});

module.exports = SequenceSchema;