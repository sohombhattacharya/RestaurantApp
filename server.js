var express = require('express');        
var app = express();                 
var bodyParser = require('body-parser');
var restaurants = require('./routes/restaurants');
var port = process.env.PORT || 8080;       
var router = express.Router();              
var mysql = require('mysql2');       
var connection = mysql.createConnection({
  host: 'mysql4.gear.host',
  user: process.env.DBUSER || 'resbusiness',
  database: process.env.DBUSER || 'resbusiness',
  password: process.env.DBPASS || 'Test123.'
});
connection.connect(function(err){
    if(!err) {
        console.log("Connected to DB");    
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
    } else {
        console.log("Error connecting database");    
    }
});
router.route("/").get(function(req, res) {
    res.json({ message: "restaurant rest api" });   
});
router.get("/restaurants", function (req, res){
    connection.query(
      'SELECT NAME, ID FROM Restaurants',
      function(err, results, fields) {
        if (!err)
            res.json(results);
          else
              res.json({error: "error getting restaurants list"});
      }
    );
}); 
router.get("/restaurants/:id", function (req, res){
    connection.query(
      'SELECT NAME, ID FROM Restaurants WHERE ID=?',[req.params.id],
        function(err, results, fields) {
            if (!err && results.length != 0)
            res.json(results);
            else
            res.json({error: "error getting restaurant"});
        }
    );
}); 
router.post("/restaurants", function(req, res){
    var newRestaurant = req.body; 
    connection.query(
      'INSERT INTO Restaurants SET ?', newRestaurant,
      function(err, results, fields) {
        if (!err)
            res.json(results);
          else{
              if (err.errno == 1062)
                  res.json({error: "This username already exists, please choose another one"}); 
              else
                  res.json({error: "Error creating restaurant account"}); 
          }
      }
    );
}); 
router.post("/findRestaurants", function(req, res){
    connection.execute(
      'SELECT NAME, ID FROM Restaurants WHERE NAME REGEXP ? OR ADDRESS REGEXP ?', [req.body.search, req.body.search],
        function(err, results, fields) {
            if (!err)
                res.json(results);
            else
                res.json({error: "error searching"}); 
      }
    );
}); 
