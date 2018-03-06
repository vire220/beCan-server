var mongoose = require("mongoose");

var QuestionSchema = new mongoose.Schema({
    answers: [String],
    question: String,
    correctAnswer: String
});

var BeaconSchema = new mongoose.Schema({
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
  quiz: [QuestionSchema]
});

module.exports = BeaconSchema;