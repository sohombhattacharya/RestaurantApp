var bcrypt   = require('bcrypt-nodejs');

function RestaurantUser() { 
}
RestaurantUser.prototype.createHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
RestaurantUser.prototype.validatePassword = function(password){}
    return bcrypt.compareSync(password, this.password);
;

module.exports = RestaurantUser;