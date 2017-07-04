var LocalStrategy   = require('passport-local').Strategy;
var db = require('../db');
var bcrypt = require('bcrypt'); 
var jwt = require('jsonwebtoken'); 
var config = require('./keys');
module.exports = function(passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        console.log("in serial"); 
        done(null, user);
    });

    // used to deserialize the user
    passport.deserializeUser(function(user, done) {
        console.log("deserial"); 
        
        db(function(err, connection){ 
            var queryStr; 
            var isARestaurant = false; 
            if (user.hasOwnProperty("ADDRESS")){
                queryStr = 'SELECT NAME, ADDRESS, ID FROM Restaurants WHERE ID=?';
                isARestaurant = true; 
            }
            else
                queryStr = 'SELECT NAME, ID FROM users WHERE ID=?';
            
            connection.query(queryStr,[user.ID],function(err2, results, fields) {
                        var sessionUserData= results[0]; 
                        sessionUserData['token'] = user.token; 
                        sessionUserData['isARestaurant'] = isARestaurant; 
                        done(err2, sessionUserData);                        
                }
            );
        }); 
        
    });

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-restaurant-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, username, password, done) {

        // asynchronous
        // User.findOne wont fire unless data is sent back
        process.nextTick(function() {
        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
            
            db(function(err, connection){
                if (err)
                    done(err); 
                connection.query('SELECT NAME, ID FROM Restaurants WHERE USERNAME=?',[username],
                    function(err2, results, fields) {
                    if (err2)
                        done(err2, false); 
                    else if (results.length > 0){
                        return done(null, false, 'That username is already taken.'); 
                    }
                    else{
                        var newRestaurant = {'NAME': req.body.name, 'USERNAME': username, 'PASS': bcrypt.hashSync(password, 10), 'ADDRESS': req.body.address}; 
                        connection.query(
                          'INSERT INTO Restaurants SET ?', newRestaurant,
                          function(err3, results1, fields1) {
                              if (err3){
                                  done(err3, false, "Database Error");
                              }
                              else{
                                  connection.release(); 
                                  done(null, results1, "Created restaurant account");
                              } 
                          }
                        );                
                    }

                    }
                );            


            });     
        
        });

    }));

    passport.use('local-user-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, username, password, done) {

        // asynchronous
        // User.findOne wont fire unless data is sent back
        process.nextTick(function() {
        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
            
            db(function(err, connection){
                if (err)
                    done(err); 
                connection.query('SELECT NAME, ID FROM users WHERE USERNAME=?',[username],
                    function(err2, results, fields) {
                    if (err2)
                        done(err2, false); 
                    else if (results.length > 0){
                        return done(null, false, 'That username is already taken.'); 
                    }
                    else{
                        var newUser = {'NAME': req.body.name, 'USERNAME': username, 'PASS': bcrypt.hashSync(password, 10)}; 
                        connection.query(
                          'INSERT INTO users SET ?', newUser,
                          function(err3, results1, fields1) {
                              if (err3){
                                  done(err3, false, "Database Error");
                              }
                              else{
                                  connection.release(); 
                                  done(null, results1, "Created user account");
                              } 
                          }
                        );                
                    }

                    }
                );            


            });     
        
        });

    }));
    
    
    
    passport.use('local-restaurant-login', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField : 'username',
            passwordField : 'password',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, username, password, done) { // callback with email and password from our form

                db(function(err, connection){
                    if (err)
                        done(err); 

                    connection.query('SELECT * FROM Restaurants WHERE USERNAME=?',[username],
                        function(err2, results, fields) {

                        if (err2)
                            done(err2); 
                        if (results.length == 1){
                            if (bcrypt.compareSync(password, results[0].PASS)){
                                var returnObj = {NAME: results[0].NAME, ADDRESS: results[0].ADDRESS, ID: results[0].ID};                    
                                var token = jwt.sign(returnObj, config.SECRET, {
                                    expiresIn: 60*60*24 
                                });
                                returnObj['token'] = token; 
                                done(null, returnObj); 
                            }
                            else
                                return done(null, false, 'Password incorrect, try again'); 

                        }
                        else if (results.length == 0)
                            return done(null, false, 'Username does not exist.');               





                        }


                    );            


                });     

        })

        ); 

    passport.use('local-user-login', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField : 'username',
            passwordField : 'password',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, username, password, done) { // callback with email and password from our form

                db(function(err, connection){
                    if (err)
                        done(err); 

                    connection.query('SELECT * FROM users WHERE USERNAME=?',[username],
                        function(err2, results, fields) {

                        if (err2)
                            done(err2); 
                        if (results.length == 1){
                            if (bcrypt.compareSync(password, results[0].PASS)){
                                var returnObj = {NAME: results[0].NAME, ID: results[0].ID};                        
                                var token = jwt.sign(returnObj, config.SECRET, {
                                    expiresIn: 60*60*24 
                                });
                                returnObj['token'] = token; 
                                done(null, returnObj); 
                            }
                            else
                                return done(null, false, 'Password incorrect, try again'); 

                        }
                        else if (results.length == 0)
                            return done(null, false, 'Username does not exist.');               





                        }


                    );            


                });     

        })

        ); 

};



