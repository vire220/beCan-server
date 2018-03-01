var express = require('express'),
  app = express(),
  winston = require('winston'),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Step = require('./api/models/becanServerModel').step, //created model loading here
  bodyParser = require('body-parser');
  
  
winston.level = 'debug';
winston.add(winston.transports.File, {filename: 'server.log', json: false});

winston.info("Starting Log");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/becandb', null, function(err){
  if(err){
    winston.error(err);
    process.exit(1);
  } else {
    winston.info("Connected to MongoDB");
  }
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
   winston.info("Request to " + req.path);
   next();
});

var routes = require('./api/routes/becanServerRoutes');
routes(app);

app.use(function(req, res) {
  winston.info("Invalid request");
  res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);


winston.info("Server started, listening on: " + port);
