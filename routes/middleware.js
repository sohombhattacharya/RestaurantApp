var jwt = require('jsonwebtoken');
var config = require('../config/keys');
module.exports = {
//
//    login: function(req, res, next){
//        if(req.isAuthenticated())
//            next();
//        else
//            return res.json({success: false, message: "Not signed in"}); 
//
//    },
    
    restaurant: function(req, res, next){
        if (req.isAuthenticated()){
            var token = req.body.token || req.query.token || req.headers['x-access-token'];            
            if (token){
                jwt.verify(token, config.SECRET, function(err, decoded) {      
                  if (err) {
                    return res.json({ success: false, message: 'Failed to authenticate token.' });    
                  } else {
                      var decodedData = decoded; 
                      if (decodedData.isARestaurant && decodedData.ID == req.session.passport.user.ID)
                          next();
                      else
                          return res.json({success: false, message: "Not authorized"});
                  }
                });    
            }
            else
                return res.json({success: false, message: "Not authorized"});  
            
            
            
        }
        else
            return res.json({success: false, message: "Not signed in"});
            
    },
    user: function(req, res, next){
        if (req.isAuthenticated()){
            var token = req.body.token || req.query.token || req.headers['x-access-token'];            
            if (token){
                jwt.verify(token, config.SECRET, function(err, decoded) {      
                  if (err) {
                    return res.json({ success: false, message: 'Failed to authenticate token.' });    
                  } else {
                      var decodedData = decoded; 
                      if (!decodedData.isARestaurant && decodedData.ID == req.session.passport.user.ID)
                          next();
                      else
                          return res.json({success: false, message: "Not authorized"});
                  }
                });    
            }
            else
                return res.json({success: false, message: "Not authorized"});  
            
            
            
        }
        else
            return res.json({success: false, message: "Not signed in"});
            
    },
    all: function(req, res, next){
        if (req.isAuthenticated()){
            var token = req.body.token || req.query.token || req.headers['x-access-token'];            
            if (token){
                jwt.verify(token, config.SECRET, function(err, decoded) {      
                  if (err) {
                    return res.json({ success: false, message: 'Failed to authenticate token.' });    
                  } else {
                      var decodedData = decoded; 
                      if (decodedData.ID == req.session.passport.user.ID)
                          next();
                      else
                          return res.json({success: false, message: "Not authorized"});
                  }
                });    
            }
            else
                return res.json({success: false, message: "Not authorized"});  
            
            
            
        }
        else
            return res.json({success: false, message: "Not signed in"});
            
    },
    specRestaurantOrUser: function(req, res, next){
        if (req.isAuthenticated()){
            var token = req.body.token || req.query.token || req.headers['x-access-token'];            
            if (token){
                jwt.verify(token, config.SECRET, function(err, decoded) {      
                  if (err) {
                    return res.json({ success: false, message: 'Failed to authenticate token.' });    
                  } else {
                      var decodedData = decoded; 
                      if (decodedData.ID == req.params.id)
                          next();
                      else
                          return res.json({success: false, message: "Not authorized"});
                  }
                });    
            }
            else
                return res.json({success: false, message: "Not authorized"});  
            
            
            
        }
        else
            return res.json({success: false, message: "Not signed in"});
            
    }       
    


}
   
