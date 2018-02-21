'use strict';
module.exports = function(app) {
  var becanCtrl = require('../controllers/becanServerController');

  //get all steps  
  app.route('/steps')
    .get(becanCtrl.listAllSteps)
    .post(becanCtrl.createStep);

  //get step by ID
  app.route('/steps/:stepId')
    .get(becanCtrl.findStepById)
    .put(becanCtrl.updateStep)
    .delete(becanCtrl.deleteStep);

  //get all sequences
  app.route('/sequences');

  //get sequence by ID
  app.route('/sequences/:seqId');

  //get steps in the sequence
  app.route('/sequences/:seqId/steps');

  //get step from sequence by ID
  app.route('/sequences/:seqId/steps/:stepId');

  //get all users
  app.route('/users');

  //get user by ID
  app.route('/users/:userId');

};
