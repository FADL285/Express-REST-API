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
const authMW = require('../middlewares/auth');

// Get All students
router.get('/', getAllStudents);

// Get student by id
router.get('/:id', getStudentById);

// create a new student
router.post('/', createValidatorMW, authMW, createStudent);

// Update a student
router.put('/:id', updateValidatorMW, updateStudent);

// Delete student
router.delete('/:id', authMW, deleteStudent);

module.exports = router;
