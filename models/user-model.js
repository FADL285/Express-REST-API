const mongoose = require('mongoose');
const validator = require('validator');

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

// Create model
const User = mongoose.model('User', userSchema);

module.exports = User;
