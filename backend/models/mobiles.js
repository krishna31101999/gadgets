var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mobilesSchema = new Schema({
  url:String,
  title: String,
  set:[],
  price: String,
  mrp: String,
  savings:String
});

var mobile = mongoose.model('mobile', mobilesSchema,'mobile');

module.exports = mobile;
