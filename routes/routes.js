var db = require('../db'); 
var bodyParser = require('body-parser');
var middleware = require('./middleware'); 
var session = require('express-session'); 
var cookieParser = require('cookie-parser');
var mutableString = require("mutable-string"); 
var bodyParser = require('body-parser');

module.exports = function(app, passport) {
var enableCORS = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
     res.header('Access-Control-Allow-Credentials', true);

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};    
app.use(enableCORS);            
app.use(cookieParser()); 
app.set('view engine', 'ejs');    
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({ 
    secret: 'test1231234',
    resave: true,
    saveUninitialized: true,
    proxy: true
            
})); // session secret

// Init passport authentication
app.use(passport.initialize());
// persistent login sessions 
app.use(passport.session());
app.get("/",function(req, res) {
    res.json({ message: "restaurant rest api" });   
});
app.get("/restaurants", middleware.user, function (req, res){
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
app.get("/restaurants/:id", middleware.restaurant, function (req, res){
    
    connection.query('SELECT NAME, ADDRESS FROM Restaurants WHERE ID=?',[req.params.id],
        function(err, results, fields) {
            if (!err && results.length != 0)
                res.json(results);
            else
                res.json({error: "error getting restaurant"});
        }
    );
}); 
app.post('/restaurantSignup',function(req, res, next){
    passport.authenticate('local-restaurant-signup', function(err, results, info){
    if (!err)
        res.json({success: true, message: info}); 
    else
        res.json({success: false, message: info}); 
    })(req, res, next); 
});
app.post('/userSignup',function(req, res, next){
    passport.authenticate('local-user-signup', function(err, results, info){
    if (!err)
        res.json({success: true, message: info}); 
    else
        res.json({success: false, message: info}); 
    })(req, res, next); 
});    
app.post('/restaurantLogin', function(req, res, next){
    passport.authenticate('local-restaurant-login', function(err, user, info){
    if (!err){
        req.login(user, function(err1) {
          if (err1) {
              return next(err1);
          }
          return res.json({success: true, body: req.user});  
        });  
    }
    else
        res.json({error: info}); 
    })(req, res, next); 
        

});
app.post('/userLogin', function(req, res, next){
    passport.authenticate('local-user-login', function(err, user, info){
    if (!err){
        req.login(user, function(err1) {
          if (err1) {
              return res.json({success: false, message: info}); ;
          }
          return res.json({success: true, body: req.user});  
        });  
    }
    else
        res.json({error: info}); 
    })(req, res, next); 
});    
app.get('/restaurantLogout', function(req, res, next){ 
    req.logout();
    res.json({success: true, message: "logged out"}); 
}); 
app.get('/userLogout', function(req, res, next){ 
    req.logout();
    res.json({success: true, message: "logged out"}); 
});     
app.post("/restaurants", function(req, res){
    var newRestaurant = req.body;    
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
    db(function(err1, connection){
        if (!err1){
            connection.query(
              'INSERT INTO res_tables SET ?', newTable,
              function(err, results, fields) {
                if (!err){
                    connection.release(); 
                    res.json(results);
                }
                  else{
                      connection.release(); 
                      res.json({error: "Error creating restaurant table"}); 
                  }
              }
            );
        }
    });
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
