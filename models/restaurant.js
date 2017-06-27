var mongoose = require("mongoose"); 
var Schema = mongoose.Schema;
var SchemaTypes = mongoose.Schema.Types;
var restaurantSchema = new Schema({  
        name: {type: String, required: true},
        address: {type: String, required: true},
}, {versionKey:false});
module.exports = mongoose.model('restaurant', restaurantSchema);
