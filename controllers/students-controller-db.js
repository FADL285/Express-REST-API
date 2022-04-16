const Student = require('../models/student-model-db');

// Create a new Student
const createStudent = async (req, res) => {
  const student = new Student({
    id: req.body.id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    department: req.body.dept
  });
  console.log(student.firstName);
  try {
    await student.save();
    res.json(student);
  } catch (error) {
    console.log('ERROR: ' + error);
    res.status(400).json({
      status: 400,
      message: 'Bad request'
    });
  }
};
//  Get All Students
const getAllStudents = async (req, res) => {
  const students = await Student.find().select({ _id: 0 }).sort({ id: 1 });
  res.json(students);
};

// Get Student By Id
const getStudentById = async (req, res) => {
  const student = await Student.find({ id: req.params.id });

  if (!student?.length)
    res.status(404).json({
      status: 404,
      message: 'Student Not Found'
    });

  res.json(student);
};

// Update Student
const updateStudent = async (req, res) => {
  const student = await Student.findOneAndUpdate(req.params.id, req.body, {
    returnOriginal: false
  });
  if (!student?.length)
    res.status(404).json({
      status: 404,
      message: 'Student Not Found'
    });
  res.json(student);
};

// Delete Student
const deleteStudent = async (req, res) => {
  const student = await Student.findOneAndDelete(req.params.id);
  if (!student?.length)
    return res.status(404).json({ status: 404, message: 'Student not found' });
  res.json(student);
};

module.exports = {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent
};
