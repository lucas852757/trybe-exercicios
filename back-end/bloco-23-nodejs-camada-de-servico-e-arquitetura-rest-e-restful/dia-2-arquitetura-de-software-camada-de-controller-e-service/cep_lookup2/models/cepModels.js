const { default: axios } = require('axios');
const connection = require('./connection');

//Procura o cep no banco de dados
const searchCepsDB = async(cep) => {
  console.log('->', cep);
 const [foundCep] = await connection.execute('select ceps.cep, ceps.logradouro, bairro, localidade, uf from bairros inner join ceps on bairros.id = ceps.bairro_id where cep=?',[cep]);
 console.log(foundCep)
 return foundCep;
};

// Procura na viaceps
const searchViaCep = async(cep) => {
  const {data} =  await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

  //Quando informações do cep não existe
  if(data.erro) return null;
  return data;
};

// Inseri informações do cep no banco de dados
const create = async ({cep, logradouro, bairro, localidade, uf}) => {
  cep = cep.replace('-', '') ;
  console.log('->', );
  const queryBairro = 'insert into bairros (bairro, localidade, uf) values (?,?,?)';
  
  const [result] = await connection.execute(queryBairro,[bairro, localidade, uf]);
  console.log('->',result);

  const queryCep = 'insert into ceps (cep, logradouro, bairro_id) values (?,?,?)';
  await connection.execute(queryCep, [cep, logradouro, result.insertId]);
  return {cep, logradouro, bairro, localidade, uf};
}

module.exports = {
  searchCepsDB,
  searchViaCep,
  create,
};