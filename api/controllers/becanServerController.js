'use strict';


var mongoose = require('mongoose');
var allSchemas = require('../models/becanServerModel');
var User = require("../models/user")
var Beacon = allSchemas.beacon,
  Sequence = allSchemas.sequence;

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
  Beacon.findOne({ 'beaconId': req.params.beaconId}, function(err, beacon) {
    if (err)
      res.send(err);
    res.json(beacon);
  });
};

exports.updateBeacon = function(req, res) {
  Beacon.findOneAndUpdate({ _id: req.params.beaconId }, req.body, { new: true }, function(err, beacon) {
    if (err)
      res.send(err);
    res.json(beacon);
  });
};


exports.deleteBeacon = function(req, res) {
  Beacon.remove({
    _id: req.params.beaconId
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
    newUser.save(function(err, user){
      if (err) {
        res.send(err);
      } 
      res.json(beacon);
    });
  }
};
