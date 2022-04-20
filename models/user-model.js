const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const config = require('config');

// Create schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (val) => validator.isEmail(val),
      message: '{VALUE} is not a valid email'
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
});

userSchema.methods.genAuthToken = function () {
  const token = jwt.sign({ userId: this._id }, config.get('jwt.secret'));
  return token;
};

// Create model
const User = mongoose.model('User', userSchema);

module.exports = User;
