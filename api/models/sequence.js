var mongoose = require("mongoose");
var BeaconSchema = require("./beacon.js");

var SequenceSchema = new Schema({
  name: String,
  description: String,
  content: String,
  beacons: [BeaconSchema],
  firstBeacon: BeaconSchema,
  lastBeacon: BeaconSchema
});

module.exports = mongoose.model('Sequence', SequenceSchema);