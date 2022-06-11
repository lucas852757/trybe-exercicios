// DistrictModels.js

// Importamos nossa conecção com o banco de dados
const connection = require('./connection');

// Criamos uma função que irá retornar o ID de um bairro
const getDistrictId =  async (bairro, localidade, uf) => {
   const selectQuery = 'select * from bairros where bairro = ?';

   //Caso o bairro não esteja cadastrado
   //precisamos de uma query para cadastrá - lo

   const insertQuery = 'insert into bairros (bairro, localidade, uf) values (?,?,?)';

   //Buscamos primeiro o bairro na tela
   const [districtOnDB] = await connection.execute(selectQuery, [bairro, localidade, uf]);

   // Caso não haja resultados, cadastraremos o bairro e retornaremos seu id
   if(districtOnDB.length === 0){
     await connection.execute(insertQuery, [bairro, localidade, uf]);
     const [newDistrict] = await connection.execute(selectQuery, [bairro]);
     return newDistrict[0].id;
   }
   // Caso contrário retornaremos o id do bairro encontrado
   return districtOnDB[0].id;
}

module.exports = getDistrictId;