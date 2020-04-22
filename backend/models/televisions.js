var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var televisionsSchema = new Schema({
  url:String,
  title: String,
  set:[],
  price: String,
  mrp: String,
  savings:String
});

var television = mongoose.model('television', televisionsSchema,'television');

module.exports = television;
