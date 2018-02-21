'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StepSchema = new Schema({
  name: String,
  description: String,
  content: String,
  location: {
    lat: Number,
    lon: Number,
    description: String
  },
  beacon: {
    id: String,
    enabled: Boolean
  },
  Points: Number
});

var SequenceSchema = new Schema({
  name: String,
  description: String,
  content: String,
  Steps: [StepSchema],
  FirstStep: StepSchema,
  LastStep: StepSchema
});

module.exports = {
  step: mongoose.model('Step', StepSchema),
  sequence: mongoose.model('Sequence', SequenceSchema)
};
