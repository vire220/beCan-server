'use strict';


var mongoose = require('mongoose');
var allSchemas = require('../models/becanServerModel');
var Step = allSchemas.step,
  Sequence = allSchemas.sequence;

exports.listAllSteps = function(req, res) {
  Step.find({}, function(err, step) {
    if (err)
      res.send(err);
    res.json(step);
  });
};

exports.createStep = function(req, res) {
  var new_step = new Step(req.body);
  new_step.save(function(err, step) {
    if (err)
      res.send(err);
    res.json(step);
  });
};


exports.findStepById = function(req, res) {
  Step.findById(req.params.stepId, function(err, step) {
    if (err)
      res.send(err);
    res.json(step);
  });
};


exports.updateStep = function(req, res) {
  Step.findOneAndUpdate({ _id: req.params.stepId }, req.body, { new: true }, function(err, step) {
    if (err)
      res.send(err);
    res.json(step);
  });
};


exports.deleteStep = function(req, res) {
  Step.remove({
    _id: req.params.stepId
  }, function(err, step) {
    if (err)
      res.send(err);
    res.json({ message: 'Step successfully deleted' });
  });
};

exports.findStepByBeaconId = function(req, res) {
  Step.findOne({ 'beacon.id' : req.params.beaconId }, function (err, step){
    if (err)
      res.send(err);
    res.json(step);
  });
};
