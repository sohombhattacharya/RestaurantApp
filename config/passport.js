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
    passport.serializeUser(function(restaurant, done) {
        done(null, restaurant.ID);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        db(function(err, connection){
            connection.query('SELECT NAME, ID FROM Restaurants WHERE ID=?',[id],
                function(err2, results, fields) {
                        done(err2, results);                        
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
                    else if (results.length > 0)
                        return done(null, false, 'That username is already taken.'); 
                    else{
                        var newRestaurant = {'NAME': req.body.name, 'USERNAME': username, 'PASS': bcrypt.hashSync(password, 10), 'ADDRESS': req.body.address}; 
                        connection.query(
                          'INSERT INTO Restaurants SET ?', newRestaurant,
                          function(err3, results1, fields1) {
                              if (err3){

                                  done(err3, false, "Error");
                              }
                              else{
                                  connection.release(); 
                                  done(null, results1);
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
                            var returnObj = {name: results[0].NAME, address: results[0].ADDRESS, ID: results[0].ID};                        
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



