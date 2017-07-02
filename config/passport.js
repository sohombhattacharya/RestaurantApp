var LocalStrategy   = require('passport-local').Strategy;
var db = require('../db');
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
//        User.findById(id, function(err, user) {
//            done(err, user);
//        });
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

    passport.use('local-signup', new LocalStrategy({
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
                if (results.length > 0)
                    return done(null, false, 'That username is already taken.'); 
                else{
                    var newRestaurant = {'NAME': req.body.name, 'USERNAME': username, 'PASS': password, 'ADDRESS': req.body.address}; 
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
//        User.findOne({ 'local.email' :  email }, function(err, user) {
//            // if there are any errors, return the error
//            if (err)
//                return done(err);
//
//            // check to see if theres already a user with that email
//            if (user) {
//                return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
//            } else {
//
//                // if there is no user with that email
//                // create the user
//                var newUser            = new User();
//
//                // set the user's local credentials
//                newUser.local.email    = email;
//                newUser.local.password = newUser.generateHash(password);
//
//                // save the user
//                newUser.save(function(err) {
//                    if (err)
//                        throw err;
//                    return done(null, newUser);
//                });
//            }
//
//        });    

        });

    }));

};
