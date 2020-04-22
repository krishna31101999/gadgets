var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var headphonesSchema = new Schema({
  url:String,
  title: String,
  set:[],
  price: String,
  mrp: String,
  savings:String
});

// var headphone = mongoose.model('headphone', headphonesSchema,'headphone');

module.exports = mongoose.model('headphone', headphonesSchema,'headphone');
