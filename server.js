var express = require('express');        
var app = express();                 
var bodyParser = require('body-parser');
var restaurants = require('./routes/restaurants');
var port = process.env.PORT || 8080;       
var router = express.Router();              
var mysql = require('mysql2');  
var mutableString = require("mutable-string"); 
var connection = mysql.createConnection({
  host: 'mysql4.gear.host',
  user: process.env.DBUSER || 'resbusiness',
  database: process.env.DBUSER || 'resbusiness',
  password: process.env.DBPASS || 'Test123.',
    multipleStatements: true
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
    connection.query(
      'SELECT NAME, ID FROM Restaurants WHERE NAME REGEXP ? OR ADDRESS REGEXP ?', [req.body.search, req.body.search],
        function(err, results, fields) {
            if (!err)
                res.json(results);
            else
                res.json({error: "error searching"}); 
      }
    );
}); 
router.post("/restaurants/:id/tables", function(req, res){
    var newTable = req.body;
    newTable['RES_ID'] = req.params.id;  
    connection.query(
      'INSERT INTO res_tables SET ?', newTable,
      function(err, results, fields) {
        if (!err)
            res.json(results);
          else
              res.json({error: "Error creating restaurant table"}); 
      }
    );
}); 
router.get("/restaurants/:id/tables", function(req, res){
    connection.query(
      'SELECT * FROM Res_tables WHERE RES_ID=?', [req.params.id],
      function(err, results, fields) {
        if (!err)
            res.json(results);
          else
              res.json({error: "Error getting tables"}); 
      }
    );
}); 
router.post("/users", function(req, res){
    var newUser = req.body; 
    connection.query(
      'INSERT INTO users SET ?', newUser,
      function(err, results, fields) {
        if (!err)
            res.json(results);
          else{
              if (err.errno == 1062)
                  res.json({error: "This username already exists, please choose another one"}); 
              else
                  res.json({error: "Error creating user account"}); 
          }
      }
    );
}); 
router.post("/findUsers", function(req, res){
    connection.execute(
      'SELECT USERNAME, NAME, ID FROM users WHERE USERNAME REGEXP ? OR NAME REGEXP ?', [req.body.search, req.body.search],
        function(err, results, fields) {
            if (!err)
                res.json(results);
            else
                res.json({error: "error searching"}); 
      }
    );
});
router.post("/customers", function(req, res){
    var newCustomer = req.body; 
    connection.query(
      'INSERT INTO customers SET ?', newCustomer,
        function(err, results, fields) {
            if (!err)
                res.json(results);
            else{
                if (err.errno == 1062)
                    res.json({error: "This username is already added to this table!"}); 
                else
                    res.json({error: "Error adding user to table"}); 
          }
      }
    );
}); 
router.post("/customers/:cid/orders", function(req, res){
    var newOrders = req.body.orders;
    var i = 0;
    var insertStr = new mutableString(""); 
    for (i = 0; i < newOrders.length; i++){
        newOrders[i]['CUST_ID'] = req.params.cid;
        insertStr += "INSERT INTO orders SET ?;"; 
    }
    insertStr += "UPDATE customers C INNER JOIN( SELECT SUM(P.TOTAL) AS BILL, CUST_ID FROM ( SELECT O.CUST_ID AS CUST_ID, PORTION, PRICE,(PORTION*PRICE) AS TOTAL FROM orders O, food F WHERE O.CUST_ID=" + req.params.cid + " AND O.FOOD_ID=F.ID) AS P) AS PP ON C.ID=PP.CUST_ID SET C.BILL=PP.BILL;";
    connection.query(insertStr.toString(), newOrders,function(err, results, fields) {
            if (!err){
                res.json(results);
            }
            else{
                console.log(err); 
                res.json({error: "Error adding orders"});
            }
      }
    );
}); 
router.get("/customers/:cid/orders", function(req, res){
    connection.query(
        'SELECT PORTION, NAME, (PRICE*PORTION) AS TOTAL FROM orders O, food F WHERE CUST_ID=? AND O.FOOD_ID=F.ID', [req.params.cid],
        function(err, results, fields) {
          if (!err)
              res.json(results);
          else
              res.json({error: "Error getting orders"}); 
      }
    );
});




