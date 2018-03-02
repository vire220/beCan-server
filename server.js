// server.js


// set up ======================================================================

var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

var winston = require('winston');
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

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

require('./config/passport')(passport); // pass passport for configuration


// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({ secret: 'mrubecansecret' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

var routes = require('./api/routes/becanServerRoutes');
routes(app, passport);

app.use(function(req, res) {
  winston.info("Invalid request");
  res.status(404).send({ url: req.originalUrl + ' not found' })
});

// launch ======================================================================

app.listen(port);

winston.info("Server started, listening on: " + port);
