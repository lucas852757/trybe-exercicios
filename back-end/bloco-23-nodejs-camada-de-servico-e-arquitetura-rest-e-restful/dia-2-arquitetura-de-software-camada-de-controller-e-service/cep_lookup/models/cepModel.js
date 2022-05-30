const { default: axios } = require('axios');
const connection = require('./connection');

const CEP_REGEX = /\d{5}-\d{3}/;

 // Função que formata um CEP
const formatCep = (cep) => {

  // Caso o CEP já esteja formatado, retorna o próprio CEP
  if (CEP_REGEX.test(cep)) return cep;

  // Caso não esteja formatado, utiliza regex para adicionar a formatação
  return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
};


// Formata os campos para exibição
const getNewCep = ({ cep, logradouro, bairro, localidade, uf }) => ({
  cep: formatCep(cep),
  logradouro,
  bairro,
  localidade,
  uf});

  const findAddressbyCep = async (cepToSearch) => {
    const treatedCep = cepToSearch.replace('-', '');
    const query = 'select cep, logradouro, bairro, localidade, uf from cep_lookup.ceps where cep=?';
    const [result] = await connection.execute(query,[treatedCep]);

    if (!result.length) {
      const {data} =  await axios.get(`https://viacep.com.br/ws/${cepToSearch}/json/`);
      return getNewCep(data);
    }
    //if (!result.length) return null;
  
    return getNewCep(result[0]);
  };

  const create = async (cep, logradouro, bairro, localidade, uf) => {
    const cepWithoutRaw = cep.replace('-', '');
    const query = 'insert into cep_lookup.ceps values (?,?,?,?,?)';
    await connection.execute(query, [cepWithoutRaw, logradouro, bairro, localidade, uf]);

    return {cep, logradouro, bairro, localidade, uf};
  } 

  const getAll = async () => {
    const query = 'select * from cep_lookup.ceps';
    const [ceps] = await connection.execute(query);
    return ceps.map((cep) => getNewCep(cep));
    //return ceps;
  }
  module.exports = {
    findAddressbyCep,
    create,
    getAll,
  }
