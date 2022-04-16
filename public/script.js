const getData = async () => {
  try {
    const data = await fetch('http://localhost:3000/api/students');
    const result = await data.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

const appendStudentsDataToDom = (students) => {
  const studentsList = document.getElementById('students');
  const template = document.getElementById('student-template');

  students.forEach((student) => {
    const clone = template.content.cloneNode(true);
    const studentName = clone.querySelector('.student-name');
    const studentDept = clone.querySelector('.student-dept');
    studentName.textContent = student.firstName + ' ' + student.lastName;
    studentDept.textContent = student.department.toUpperCase();

    studentsList.appendChild(clone);
  });
};

const appStart = async () => {
  const students = await getData();
  appendStudentsDataToDom(students);
};

appStart();
