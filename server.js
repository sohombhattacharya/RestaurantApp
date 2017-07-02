var express = require('express');        
var app = express();                 
var bodyParser = require('body-parser');
var passport = require('passport');
var flash    = require('connect-flash');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var mysql = require('mysql2');  
var mutableString = require("mutable-string"); 
var port = process.env.PORT || 8080;       
var router = express.Router();                

//var connection = mysql.createConnection({
//  host: 'mysql4.gear.host',
//  user: process.env.DBUSER || 'resbusiness',
//  database: process.env.DBUSER || 'resbusiness',
//  password: process.env.DBPASS || 'Test123.',
//    multipleStatements: true
//});   
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
            app.use(cookieParser()); 
            app.set('view engine', 'ejs');
            app.use(session({ 
                secret: 'test1231234',
                resave: true,
                saveUninitialized: true
            
            })); // session secret
            app.use(passport.initialize());
            app.use(passport.session()); // persistent login sessions
            app.use(flash()); // use connect-flash for flash messages stored in session
        });        
    
require('./routes/routes.js')(app, passport);
require('./config/passport')(passport);
//module.exports = connection;







