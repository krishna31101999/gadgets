var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tvsSchema = new Schema({
  url:String,
  title: String,
  set:[],
  price: String,
  mrp: String,
  savings:String
});

var tv = mongoose.model('tv', tvsSchema,'tv');

module.exports = tv;
