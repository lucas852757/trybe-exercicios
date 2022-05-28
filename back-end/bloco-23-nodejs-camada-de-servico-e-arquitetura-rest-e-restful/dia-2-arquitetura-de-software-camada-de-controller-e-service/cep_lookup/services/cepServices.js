const cepModles = require('../models/cepModels');

const  findAddressbyCep = async(searchCep) => {
  const CEP_REGEX = /\d{5}-?\d{3}/;
  if(!CEP_REGEX.test(searchCep)) {
    return { "error": { "code": "invalidData", "message": "CEP inválido" } }
  }
  const cep = await cepModles.findAddressbyCep(searchCep);

  if(!cep) return { "error": { "code": "notFound", "message": "CEP não encontrado" } };
 
  return cep;
};

module.exports ={
  findAddressbyCep,
}