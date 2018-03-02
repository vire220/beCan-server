'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BeaconSchema = new Schema({
  beaconId: String,
  name: String,
  description: String,
  content: String,
  enabled: Boolean,
  location: {
    lat: Number,
    lon: Number,
    description: String
  },
  points: Number
});

var SequenceSchema = new Schema({
  name: String,
  description: String,
  content: String,
  beacons: [BeaconSchema],
  firstBeacon: BeaconSchema,
  lastBeacon: BeaconSchema
});

module.exports = {
  beacon: mongoose.model('Beacon', BeaconSchema),
  sequence: mongoose.model('Sequence', SequenceSchema)
};
