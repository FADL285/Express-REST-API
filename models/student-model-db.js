// Import mongoose
const mongoose = require('mongoose');

// Create schema
const studentSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    min: 3
  },
  firstName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 30,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 30,
    trim: true
  },
  department: {
    type: String,
    required: true,
    default: 'General',
  }
});

// Create model
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
