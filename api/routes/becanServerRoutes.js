'use strict';
module.exports = function(app, passport) {
  var becanCtrl = require('../controllers/becanServerController');
  
      // process the signup form
  app.post('/signup', passport.authenticate('local-signup', becanCtrl.createNewUser));
  
  //get all beacons  
  app.route('/beacons')
    .get(becanCtrl.listAllBeacons)
    .post(becanCtrl.createBeacon);

  //get beacon by ID
  app.route('/beacons/:beaconId')
    .get(becanCtrl.findBeaconById)
    .put(becanCtrl.updateBeacon)
    .delete(becanCtrl.deleteBeacon);

  //get all sequences
  app.route('/sequences')
  .get(becanCtrl.listAllSequences)
  .post(becanCtrl.createNewSequence);

  //get sequence by ID
  app.route('/sequences/:seqId');
  
  app.route('/sequences/:seqId/first')
  .get(becanCtrl.findFirstBeaconInSequence);

  //get beacons in the sequence
  app.route('/sequences/:seqId/beacons');

  //get beacon from sequence by ID
  app.route('/sequences/:seqId/beacons/:beaconId');

  //get all users
  app.route('/users');

  //get user by ID
  app.route('/users/:userId');

};
