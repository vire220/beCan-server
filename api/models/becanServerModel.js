'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StepSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String
  },
  content: {
    type: String
  },
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
  name: {
    type: String,
  },
  description: {
    type: String
  },
  content: {
    type: String
  },
  Steps: [StepSchema],
  FirstStep: StepSchema,
  LastStep: StepSchema
});

module.exports = {
  step: mongoose.model('Step', StepSchema),
  sequence: mongoose.model('Sequence', SequenceSchema)
};
