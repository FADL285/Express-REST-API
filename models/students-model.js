// Students Array.
const students = [
  { id: '_fadl_285', firstName: 'Mohamed', lastName: 'Fadl', dept: 'IT' },
  { id: '_ahmed_286x', firstName: 'Ahmed', lastName: 'Reda', dept: 'CS' },
  { id: '_mona_287e', firstName: 'Mona', lastName: 'Fadl', dept: 'BIO' }
];

class Student {
  constructor({ firstName, lastName, dept }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dept = dept;
    this.id = `_Fa_Dl_${Math.floor(Math.random() * 999999)}x_r`;
  }

  add() {
    students.push(this);
    return this;
  }

  static fetchAll() {
    return students;
  }
}

module.exports = Student;
