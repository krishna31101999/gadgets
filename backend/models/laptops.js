var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var laptopsSchema = new Schema({
  url:String,
  title: String,
  set:[],
  price: String,
  mrp: String,
  savings:String
});

var laptop = mongoose.model('laptop', laptopsSchema,'laptop');

module.exports = laptop;
