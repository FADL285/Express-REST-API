const {
  createValidator,
  updateValidator
} = require('../utilities/student-validator');
const Student = require('../models/students-model');

// Get All Students
const getAllStudents = (req, res) => {
  res.json(Student.fetchAll());
};

// Get student by id
const getStudentById = (req, res) => {
  const student = students.find((student) => student.id === req.params.id);
  if (!student) res.json({ message: 'Student not found' });
  res.json(student);
};

// create a new student
const createStudent = (req, res) => {
  const valid = createValidator(req.body);

  if (!valid) {
    console.log(createValidator.errors);
    res.status(403).json({
      status: 403,
      message: 'firstName, lastName and dept are required and be valid'
    });
  } else {
    const std = new Student(req.body);
    const stdInfo = std.add();
    res.json(stdInfo);
  }
};

// Update a student
const updateStudent = (req, res) => {
  const valid = updateValidator(req.body);

  if (!valid) {
    console.log(updateValidator.errors);
    res.status(403).json({
      status: 403,
      message: 'data not valid'
    });
  }

  const student = students.find((student) => student.id === req.params.id);
  if (student) {
    if (req.body.firstName) student.firstName = req.body.firstName;
    if (req.body.lastName) student.lastName = req.body.lastName;
    if (req.body.dept) student.dept = req.body.dept;
    res.json(student);
  } else {
    res.status(404);
    res.json({ status: 404, message: 'Student not found' });
  }
};

// Delete student
const deleteStudent = (req, res) => {
  const studentIndex = students.findIndex(
    (student) => student.id === req.params.id
  );
  if (studentIndex !== -1) {
    students.splice(studentIndex, 1);
    res.json({ status: 200, message: 'Student Deleted successfully' });
  } else {
    res.status(404);
    res.json({ status: 404, message: 'Student not found' });
  }
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
};
