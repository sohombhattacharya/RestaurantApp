var mongoose = require("mongoose"); 
var Restaurant = require("../models/restaurant");

function postRestaurant(req, res){
    var response; 
    var restaurantBody = new Restaurant(req.body); 
    restaurantBody.validate(function(error){
        if (error){
            response = { error: "incorrectly formatted restaurant"}; 
            res.json(response); 
        }
        else{
            var newRestaurant = new Restaurant(req.body); 
            newRestaurant.save(function(error1, restaurant){
                if (error1){
                    response = { error: "could not add new account"};
                    res.json(response); 
                }
                else{
                    response = {body: restaurant};
                    res.json(response); 
                }
                
            }); 
        }
    }); 
}; 
function getRestaurants(req, res){
    Restaurant.find({}, function(err, restaurants){
        var response; 
        if (err){
            response = { error: "could not get all restaurants"};
            return res.json(response);
        }
        else{    
            response = restaurants;
            return res.json(response);
        }
    });     
};
function getRestaurant(req, res){
    Restaurant.find({_id: req.params.id}, function(err, restaurant){ 
        var response; 
        if (err){
            response = { error: "could not get restaurant"};
            res.json(response);
        }
        else{
            if (restaurant.length == 0){
                response = { error: "restaurant does not exist"};
                res.json(response);
            }
            else{
                response = restaurant[0]; 
                res.json(response);
            }
        }
    }); 
};
function findRestaurant(req, res){
    Restaurant.find({ name: { $regex: req.body.search, $options: 'i' }}, function(err, restaurants){ 
        var response; 
        if (err){
            response = { error: "could not get restaurant"};
            res.json(response);
        }
        else{
            if (restaurants.length == 0){
                response = { error: "restaurant does not exist"};
                res.json(response);
            }
            else{
                response = restaurants; 
                res.json(response);
            }
        }
    }); 
};


module.exports = {postRestaurant, getRestaurants, getRestaurant, findRestaurant};
