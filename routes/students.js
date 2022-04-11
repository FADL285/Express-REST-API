const express = require('express');
const router = express.Router();
const {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
} = require('../controllers/students-controller');

// Get All students
router.get('/', getAllStudents);

// Get student by id
router.get('/:id', getStudentById);

// create a new student
router.post('/', createStudent);

// Update a student
router.put('/:id', updateStudent);

// Delete student
router.delete('/:id', deleteStudent);

module.exports = router;
