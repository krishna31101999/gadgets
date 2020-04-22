var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var camerasSchema = new Schema({
  url:String,
  title: String,
  set:[],
  price: String,
  mrp: String,
  savings:String
});

var camera = mongoose.model('camera', camerasSchema,'camera');

module.exports = camera;
