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
    
    api: function(req, res, next){
        console.log(req.session); 
        if (req.isAuthenticated()){
            var token = req.body.token || req.query.token || req.headers['x-access-token'];
            if (token){
                var token = req.body.token || req.query.token || req.headers['x-access-token'];
                jwt.verify(token, config.SECRET, function(err, decoded) {      
                  if (err) {
                    return res.json({ success: false, message: 'Failed to authenticate token.' });    
                  } else {
                    // if everything is good, save to request for use in other routes
                    next();
                  }
                });    
            }
            else
                return res.json({success: false, message: "Not authorized for API use"});         
        }
        else
            return res.json({success: false, message: "Not signed in"});
            
        
    }


}
   
