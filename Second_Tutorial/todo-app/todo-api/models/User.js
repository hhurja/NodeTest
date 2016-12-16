var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  Username: String,
  Pass: String,
  Email: String,
  Fname: String,
  Lname: String,
  note: String,
  updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model('User', UserSchema);