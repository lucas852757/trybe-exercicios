const studentModel = require('../model/studentModel');
const Joi = require('joi');

// Formata objeto
const format = (object) => {
  return {
  id: object.id,
  name: object.name,
  age: object.age,
  classId: object.class_id
}};

const getStudent = async() => {
  const students = await studentModel.listAllStudents();
  return students;
};

const getStudentById = async (id) => {
  const student = await studentModel.listStudent(id);


  if(!student.length) {
    const error  = {status: 404, message: 'student not found'}
    throw error; // lança o erro
  }
  return format(student[0]); // retorna o objeto formatado
}

const addStudent =  async (name, age, classId) => {
  // Valida name, age, classId
  const schema = Joi.object({
    name:Joi.string().not().empty().required(),
    age:Joi.number().not().empty().required(),
    classId:Joi.number().not().empty().required(),
  });
  const value = schema.validate({name, age, classId});
  // console.log(value);
  const { error } = value;

  if (error) {
    throw (error); // lança o erro
  }
  const student = await studentModel.newStudent(name, age, classId);
  return student; // retorna objeto
};

const removeStudent = async (id) => {
  const foundStudent = await getStudentById(id);
  await studentModel.removeStudent(foundStudent.id);
};

const updateStudent = async (id, name, age, classId) => {
  // Valida id, name, age, classId
  const schema = Joi.object({
    id:Joi.number().not().empty().required(),
    name:Joi.string().not().empty().required(),
    age:Joi.number().not().empty().required(),
    classId:Joi.number().not().empty().required(),
  });
  const value = schema.validate({id, name, age, classId});
  // console.log(value);
  const { error } = value;
  if (error) {
    throw (error); // lança o erro
  }
  
  const foundStudent = await getStudentById(id);
  if (foundStudent){
    const student = await studentModel.updateStudent(id, name, age, classId);
    //console.log(student);
    return student; // retorna objeto
  }
}

module.exports = {
  getStudent,
  getStudentById,
  addStudent,
  removeStudent,
  updateStudent,
}