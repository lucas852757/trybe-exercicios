const cepModles = require('../models/cepModel');

const  findAddressbyCep = async(searchCep) => {
  const CEP_REGEX = /\d{5}-?\d{3}/;
  if(!CEP_REGEX.test(searchCep)) {
    const err = { "error": { "code": "invalidData", "message": "CEP inválido" } };
    throw err;
  }
  const cep = await cepModles.findAddressbyCep(searchCep);

  if(!cep){ const err =  { "error": { "code": "notFound", "message": "CEP não encontrado" } }
  throw err;
  };
  
  return cep;
};

const create = async ({cep, logradouro, bairro, localidade, uf}) => {
  const existing = await cepModles.findAddressbyCep(cep);

  if(existing){
    const err =  {
      "error": { "code": "alreadyExists", "message": "CEP já existente" }
    };

    throw err;
  };
  const create = cepModles.create({cep, logradouro, bairro, localidade, uf});
  return create;
}
module.exports ={
  findAddressbyCep,
  create,
}