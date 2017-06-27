var express = require('express');        
var app = express();                 
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var restaurant = require("./routes/restaurants"); 
var port = 8080 || process.env.PORT;       
var router = express.Router();              
mongoose.Promise = global.Promise;
var dbHost = 'mongodb://test:test123@ds139072.mlab.com:39072/restaurantbusiness'; 
mongoose.connect(dbHost, function(err, database){
    if (err)
        process.exit(1);
    var server = app.listen(port, function(){
    
        var enableCORS = function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

        // intercept OPTIONS method
        if ('OPTIONS' == req.method) {
          res.send(200);
        }
        else {
          next();
        }
    };
        // enable CORS!
        app.use(enableCORS);            
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());         
        app.use('/api', router); 
    });
});
router.route("/").get(function(req, res) {
    res.json({ message: "restaurant rest api" });   
});
router.route("/restaurants")
    .get(restaurant.getRestaurants)
    .post(restaurant.postRestaurant);
router.route("/restaurants/:id")
    .get(restaurant.getRestaurant);
router.route("/restaurants/search")
    .post(restaurant.findRestaurant); 