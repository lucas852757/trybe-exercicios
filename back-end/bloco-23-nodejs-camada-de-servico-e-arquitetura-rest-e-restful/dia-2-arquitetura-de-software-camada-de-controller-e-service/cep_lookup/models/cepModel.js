const connection = require('./connection');

const CEP_REGEX = /\d{5}-\d{3}/;

 const formatCep = (cep) => {

  if (CEP_REGEX.test(cep)) return cep;

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
    const query = 'select cep, logradouro, bairro, localidade, uf from cep_lookup.ceps where=?';
    const [result] = await connection.execute(query,[treatedCep]);

    if (!result) return null;

    return getNewCep(result);
  };

  const create = async ({cep: rawCep, logradouro, bairro, localidade, uf}) => {
    const cep = rawCep.replace('-', '');
    const query = 'insert into cep_lookup.ceps values (?,?,?,?,?)';
    await (await connection).execute(query, [cep, logradouro, bairro, localidade, uf]);

    return {cep, logradouro, bairro, localidade, uf};
  } 
  module.exports = {
    findAddressbyCep,
    create,
  }
