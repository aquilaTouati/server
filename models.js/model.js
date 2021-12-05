const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: {
    type: String,
  },
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  wilaya:{
    type: String,
  },
  option:{
    type: String,
  },
});

const User= mongoose.model("User", userSchema);

module.exports = User;