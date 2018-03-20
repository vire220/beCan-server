// server.js

// set up ======================================================================

var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

var winston = require('winston');
var mongoose = require('mongoose');

var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var configDB = require('./config/database.js');

// configuration ===============================================================

// Set level and start stream to file
winston.level = 'debug';
winston.add(winston.transports.File, {filename: 'server.log', json: false});

winston.info("Starting Log");

// connect to database
mongoose.Promise = global.Promise;
mongoose.connect(configDB.url, null, function(err){
  if(err){
    winston.error(err);
    process.exit(1);
  } else {
    winston.info("Connected to MongoDB");
  }
});

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(methodOverride());

// set up static route
app.use(express.static(__dirname + '/public'));

// add server routes
var routes = require('./api/routes/becanServerRoutes');
routes(app);

// add index route
app.use('/', function(req, res){
  res.sendFile( __dirname + '/public/index.html');
});

// add catch-all route
app.use(function(req, res) {
  winston.info("Invalid request");
  res.status(404).send({ url: req.originalUrl + ' not found' })
});

// launch ======================================================================

app.listen(port);

winston.info("Server started, listening on: " + port);
