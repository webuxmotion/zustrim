const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, minlength: 2, maxlength: 12 },
  password: { type: String, required: true, minlength: 6, maxlength: 100 },
  email: { type: String, required: true, unique: true },
  friends: [
    { type: mongoose.Schema.Types.Object, ref: "User" }
  ]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
