// routes/becanServerRoutes.js

module.exports = function(app) {
  var becanCtrl = require('../controllers/becanServerController');
  
  // api =======================================================================
  
  // beacon routes -------------------------------------------------------------
  
  //get all beacons  
  app.route('/api/beacons')
    .get(becanCtrl.listAllBeacons)
    .post(becanCtrl.createBeacon);

  //get beacon by ID
  app.route('/api/beacons/:beaconId')
    .get(becanCtrl.findBeaconById)
    .put(becanCtrl.updateBeacon)
    .delete(becanCtrl.deleteBeacon);
    
  // sequence routes -----------------------------------------------------------

  //get all sequences
  app.route('/api/sequences')
  .get(becanCtrl.listAllSequences)
  .post(becanCtrl.createNewSequence);

  //get sequence by ID
  app.route('/api/sequences/:seqId');
  
  app.route('/api/sequences/:seqId/first')
  .get(becanCtrl.findFirstBeaconInSequence);

  //get beacons in the sequence
  app.route('/api/sequences/:seqId/beacons')
  .get(becanCtrl.getAllBeaconsInSequence)
  .put(becanCtrl.setSequenceBeacons);

  //get beacon from sequence by ID
  app.route('/api/sequences/:seqId/beacons/:beaconId');
};
