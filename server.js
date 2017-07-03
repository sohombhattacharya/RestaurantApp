var express = require('express');        
var app = express();                 
var passport = require('passport');
var port = process.env.PORT;       
var server = app.listen(port);            
require('./routes/routes.js')(app, passport);
require('./config/passport')(passport);







