var mongoose = require("mongoose");
var Schema = mongoose.Schema
var ObjectId = mongoose.ObjectId

var userSchema = new Schema({
  email:String,
  password: String,
  clearance: Number
});

module.exports = mongoose.model("User", userSchema);
