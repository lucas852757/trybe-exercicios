const studentService = require('../service/studentService');
// controller listStudents
const listStudents = async (req, res, next) => {
  try {
    const students = await studentService.getStudent();

    return res.status(200).json(students);
  } catch (error) {
    console.log(' -> error list students:', error.message);
    next(error);
  }
}

// controller postStudent
const postStudent = async (req, res, next) => {
  try {
    const { name, age, classId } = req.body;
   const student = await studentService.addStudent(name, age, classId);
   return res.status(201).json(student);
  } catch (error) {
    console.log(' -> error post students:', error.message);
    next(error);
  }
}

// controller listStudent
const listStudent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const student = await studentService.getStudentById(id);
    return res.status(200).json(student);
  } catch (error) {
    console.log(' -> error list student:', error.message);
    next(error);
  }
}

// controller deleteStudent
const deleteStudent = async (req, res, next) => {
  try {
    const { id } = req.params;
    await studentService.removeStudent(id);
    return res.status(204).json();
  } catch (error) {
    console.log(' -> error post students:', error.message);
    next(error);
  }
}

// controller putStudent
const putStudent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, age, classId } = req.body;
    const student = await studentService.updateStudent(id, name, age, classId);
    return res.status(201).json(student);
  } catch (error) {
    console.log(' -> error put student:', error.message);
    next(error);
  }
}

module.exports ={
  listStudents,
  listStudent,
  postStudent,
  deleteStudent,
  putStudent,
}