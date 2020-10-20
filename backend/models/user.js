var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
 username:{type:String, required:true, unique:true},
 email:{type:String, required:true, unique:true},
 password:{type:String,required:true}
});

// var  = mongoose.model('headphone', headphonesSchema,'headphone');

module.exports = mongoose.model('User', UserSchema);