// controllers/becanServerController.js

var mongoose = require('mongoose');
var BeaconSchema = require("../models/beacon");
var SequenceSchema = require("../models/sequence");

var Beacon = mongoose.model("Beacon", BeaconSchema);
var Sequence = mongoose.model("Sequence", SequenceSchema);

exports.listAllBeacons = function(req, res) {
  Beacon.find({}, function(err, beacon) {
    if (err)
      res.send(err);
    res.json(beacon);
  });
};

exports.createBeacon = function(req, res) {
  var new_beacon = new Beacon(req.body);
  new_beacon.save(function(err, beacon) {
    if (err)
      res.send(err);
    res.json(beacon);
  });
};

exports.findBeaconById = function(req, res) {
  Beacon.findOne({ 'beaconId': req.params.beaconId }, function(err, beacon) {
    if (err)
      res.send(err);
    res.json(beacon);
  });
};

exports.updateBeacon = function(req, res) {
  Beacon.findOneAndUpdate({ 'beaconId': req.params.beaconId }, req.body, { new: true }, function(err, beacon) {
    if (err) {
      winston.error(err);
      res.send(err);
    }
    res.json(beacon);
  });
};

exports.deleteBeacon = function(req, res) {
  Beacon.remove({
    beaconId: req.params.beaconId
  }, function(err, beacon) {
    if (err)
      res.send(err);
    res.json({ message: 'Beacon successfully deleted' });
  });
};

exports.createNewUser = function(err, user, info) {
  if (err) {
    res.send(err);
  }
  if (user) {
    var newUser = new User(user);
    newUser.save(function(err, user) {
      if (err) {
        res.send(err);
      }
      res.json(beacon);
    });
  }
};

exports.listAllSequences = function(req, res) {
  Sequence.find().populate('beacons').exec(function(err, sequence) {
    if (err)
      res.send(err);
    res.json(sequence);
  });
};

exports.findFirstBeaconInSequence = function(req, res) {
  Sequence.findOne({ 'sequenceId': req.params.sequenceId }).populate('beacons').exec(function(err, sequence) {
    if (err) {
      res.send(err);
    }
    res.send(sequence.beacons[0]);
  });
};

exports.createNewSequence = function(req, res) {
  var newSequence = new Sequence(req.body);
  newSequence.save(function(err, sequence) {
    if (err) {
      res.send(err);
    }
    res.send(sequence);
  });
};
