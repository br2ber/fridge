// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var Fridge     = require('../app/models/degree');
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

//connect to db
var login = "beber";
var pass = "frigo";
var connectionRequest = "mongodb://"+login+":"+pass+"@ds153785.mlab.com:53785/frigo";
mongoose.connect(connectionRequest,function (err, res) {
  if (err) {
  console.log ('ERROR connecting to: ' + connectionRequest + '. ' + err);
  } else {
  console.log ('Succeeded connected to yououo: ' + connectionRequest);
  }
});

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);


// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.route('/fridge/:temperature/:humidity/:stateFridge')
    .get(function(req, res) {
        var fridge = new Fridge();
        fridge.temperature = req.params.temperature;
        fridge.humidity = req.params.humidity;
        fridge.stateFridge = req.params.stateFridge;

        //save the fridge and check for errors
        fridge.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Bear created!' });
        });
    });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);



// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

