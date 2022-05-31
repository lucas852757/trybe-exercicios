// DistrictModels.js

// Importamos nossa conecção com o banco de dados
const connection = require('./connection');

// Criamos uma função que irá retornar o ID de um bairro

const getDistrictId = async(bairro, localidade, uf) => {
  const selectQuery = 'SELECT * FROM bairro WHERE  bairro = ?';

  // Caso o bairro não esteja cadastrado,
  // precisamos de uma query para cadastrá-lo
  const insertQuery = 'INSERT INTO bairros (bairro, localidade, uf) VALUES (?,?,?)';

  //Buscamos primeirto o bairro na tabela
  const districtOnDB = await connection.execute(selectQuery, [bairro]);

  // Caso não haja resultados, cadastraremos o bairro e retirnarmos seu id

  if(districtOnDB[0].length === 0) {
    await connection.execute(insertQuery, [bairro, localidade, uf]);
    const newDistrict = await connection.execute(selectQuery, [bairro]);
    return newDistrict[0][0].id // propriedade id de um objeto
  }

  // Caso contrário, retornamos o id do bairro encontrado
  return districtOnDB[0][0].id;
};

module.exports = getDistrictId;