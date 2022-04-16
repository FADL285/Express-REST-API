const express = require('express');
const router = express.Router();
const {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
} = require('../controllers/students-controller-db');
const {
  createValidatorMW,
  updateValidatorMW
} = require('../middlewares/student-validator');

// Get All students
router.get('/', getAllStudents);

// Get student by id
router.get('/:id', getStudentById);

// create a new student
router.post('/', createValidatorMW, createStudent);

// Update a student
router.put('/:id', updateValidatorMW, updateStudent);

// Delete student
router.delete('/:id', deleteStudent);

module.exports = router;
