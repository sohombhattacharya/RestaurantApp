var connection = require('../server');
// simple query

function getRestaurants(req, res){
    connection.query(
      'SELECT name FROM Restaurants',
      function(err, results, fields) {
        if (!err){
            console.log(results); // results contains rows returned by server
            console.log(fields); // fields contains extra meta data about results, if available
            res.json(results);
        }
      }
    );
}
module.exports = {getRestaurants}; 