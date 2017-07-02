var mysql = require("mysql2"); 
var pool = mysql.createPool({
    host: 'mysql4.gear.host',
    user: process.env.DBUSER || 'resbusiness',
    database: process.env.DBUSER || 'resbusiness',
    password: process.env.DBPASS || 'Test123.',
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
        cb(null, connection);
    });
};
module.exports = getConnection;
//module.exports.pool = pool.getConnection;