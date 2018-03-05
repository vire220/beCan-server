var mongoose = require("mongoose");
var QuestionSchema = require("./question.js");

var BeaconSchema = new Schema({
  beaconId: {
      type: String,
      required: [true, "Missing beaconId"],
      unique: true
  },
  name: String,
  description: String,
  content: String,
  clue: String,
  enabled: {
      type: Boolean,
      default: true 
  },
  location: {
    lat: Number,
    lon: Number,
    description: String
  },
  points: {
      type: Number,
      min: 0
  },
  quiz: {
    questions: [QuestionSchema]
  }
});

module.exports = mongoose.model('Beacon', BeaconSchema);