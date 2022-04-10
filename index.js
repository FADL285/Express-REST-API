const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const students = [
  { id: '_fadl_285', first_name: 'Mohamed', last_name: 'Fadl', dept: 'IT' },
  { id: '_ahmed_286x', first_name: 'Ahmed', last_name: 'Reda', dept: 'CS' },
  { id: '_mona_287e', first_name: 'Mona', last_name: 'Fadl', dept: 'BIO' }
];

app.get('/', (req, res) => {
  res.send('REST API on /api/students route');
});

// Get All students
app.get('/api/students', (req, res) => {
  res.json(students);
});

// Get student by id
app.get('/api/students/:id', (req, res) => {
  const student = students.find((student) => student.id === req.params.id);
  if (!student) res.json({ message: 'Student not found' });
  res.json(student);
});

// create a new student
app.post('/api/students', (req, res) => {
  const student = {
    id: '_fa-x-dl_28' + Math.round(Math.random() * 999999),
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    dept: req.body.dept
  };
  students.push(student);
  res.json(student);
});

// Update a student
app.put('/api/students/:id', (req, res) => {
  const student = students.find((student) => student.id === req.params.id);
  if (student) {
    if (req.body.first_name) student.first_name = req.body.first_name;
    if (req.body.last_name) student.last_name = req.body.last_name;
    if (req.body.dept) student.dept = req.body.dept;
    res.json(student);
  } else {
    res.status(404);
    res.json({ status: 404, message: 'Student not found' });
  }
});

// Delete student
app.delete('/api/students/:id', (req, res) => {
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
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});