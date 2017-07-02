//var mysql = require('mysql2');  
//var connection = mysql.createConnection({
//  host: 'mysql4.gear.host',
//  user: process.env.DBUSER || 'resbusiness',
//  database: process.env.DBUSER || 'resbusiness',
//  password: process.env.DBPASS || 'Test123.',
//    multipleStatements: true
//});
//connection.connect(function(err){
//    if (!err){
//        console.log("connected to db"); 
//    }
//    else{
//        console.log("connection to db failed"); 
//    }
//
//}); 
var db = require('../db'); 
var bodyParser = require('body-parser');

module.exports = function(app, passport) {
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.get("/",function(req, res) {
    res.json({ message: "restaurant rest api" });   
});
app.get("/restaurants", function (req, res){
    db(function(err, connection){
        if (!err){
            connection.query(
              'SELECT NAME, ID FROM Restaurants',
              function(err2, results, fields) {
                if (!err2){
                    connection.release(); 
                    res.json(results);
                }
                  else
                      res.json({error: "error getting restaurants list"});
              }
            );            
        }
    }); 
}); 
app.get("/restaurants/:id", function (req, res){
    
    connection.query('SELECT NAME, ID FROM Restaurants WHERE ID=?',[req.params.id],
        function(err, results, fields) {
            if (!err && results.length != 0)
                res.json(results);
            else
                res.json({error: "error getting restaurant"});
        }
    );
}); 
app.post('/restaurantSignup', function(req, res){
    var restaurant = req.body; 
    passport.authenticate('local-restaurant-signup', function(err, results, info){
        
    if (!err){
        res.json({results: results, info: info}); 
    }
    else
        res.json({error: "error"}); 



    })(req, res); 
        

});
app.post('/restaurantLogin', function(req, res){
    var restaurant = req.body; 
    passport.authenticate('local-restaurant-login', function(err, restaurant, info){
        
    if (!err){
        res.json({results: restaurant, info: info}); 
    }
    else
        res.json({error: info}); 



    })(req, res); 
        

});    
app.post("/restaurants", function(req, res){
    var newRestaurant = req.body;
    console.log(req.body); 
    
    db(function(err1, connection){
        if (err1){
            res.json({error: "error"}); 
        }
        else{
            connection.query(
              'INSERT INTO Restaurants SET ?', newRestaurant,
              function(err, results, fields) {
                if (!err){
                    connection.release(); 
                    res.json(results);
                }
                  else{
                      if (err.errno == 1062)
                          res.json({error: "This username already exists, please choose another one"}); 
                      else
                          res.json({error: "Error creating restaurant account"}); 
                  }
              }
            );
        }
    });
}); 
app.post("/findRestaurants", function(req, res){
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
app.post("/restaurants/:id/tables", function(req, res){
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
app.get("/restaurants/:id/tables", function(req, res){
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
app.post("/users", function(req, res){
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
app.post("/findUsers", function(req, res){
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
app.post("/customers", function(req, res){
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
app.post("/customers/:cid/orders", function(req, res){
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
app.get("/customers/:cid/orders", function(req, res){
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



};
