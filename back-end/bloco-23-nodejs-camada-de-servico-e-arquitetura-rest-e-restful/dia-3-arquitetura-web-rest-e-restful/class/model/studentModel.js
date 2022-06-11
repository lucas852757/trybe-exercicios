const connection = require('./connection');
// Lista todos os estudantes
const listAllStudents = async () => {
 const [result] =  await connection.query('select * from school.students');
 return result; // retorna uma lista
};

// Lista um estudante
const listStudent = async (id) => {
  const query = 'select * from school.students where id=?'
  const [result] =  await connection.execute(query, [id]);
  return result;
}

// Adiciona um(a) novo(a) estudante
const newStudent = async (name, age, classId) => {
  const query = 'insert into students (name, age, class_id) values (?,?,?)'
  const result =  await connection.execute(query, [name, age, classId]);
  return {
    id: result[0].id,
    name,
    age,
    classId
  }
}

// Remove estudante
const removeStudent = async (id) => {
  const query = 'delete from school.students where id=?';
  await connection.execute(query, [id]);
}

// Atualiza informações do(a) estudante
const updateStudent = async (id, name, age, classId) => {
  const query = 'update school.students set name=?, age=?, class_id=? where id=?';
  await connection.execute(query, [name, age, classId, id]);
  return ({
    id,
    name,
    age, 
    classId
  });
}

module.exports = {
  listAllStudents,
  listStudent,
  newStudent,
  removeStudent,
  updateStudent,
}