var mysql = require("mysql2"); 
var config = require('./config/keys'); 
var pool = mysql.createPool({
    host: config.DBHOST,
    user: config.DBUSER,
    database: config.DBNAME,
    password: config.DBPASS,
    multipleStatements: true,
    connectionLimit: 100
});  
var getConnection = function (cb) {
    pool.getConnection(function (err, connection) {
        //if(err) throw err;
        //pass the error to the cb instead of throwing it
        if(err) {
          return cb(err);
        }
        console.log("got db connection"); 
        cb(null, connection);
    });
};
module.exports = getConnection;
