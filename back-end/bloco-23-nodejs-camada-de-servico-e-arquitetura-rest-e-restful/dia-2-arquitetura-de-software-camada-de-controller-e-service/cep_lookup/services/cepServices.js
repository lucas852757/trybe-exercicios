const cepModles = require('../models/cepModel');

const  findAddressbyCep = async(searchCep) => {
  const CEP_REGEX = /\d{5}-?\d{3}/;
  if(!CEP_REGEX.test(searchCep)) {
    return { "error": { "code": "invalidData", "message": "CEP inválido" } };
    
  }
  const cep = await cepModles.findAddressbyCep(searchCep);

  if(!cep){ return  { "error": { "code": "notFound", "message": "CEP não encontrado" } }
  };
  
  return cep;
};

const create = async (cep, logradouro, bairro, localidade, uf) => {
  
  const existingCep = await cepModles.findAddressbyCep(cep);
  
  if(existingCep){
    return  {
      "error": { "code": "alreadyExists", "message": "CEP já existente" }
    };

  };
  const create = cepModles.create(cep, logradouro, bairro, localidade, uf);
  return create;
}

const getAll = async() => {
 const ceps = await cepModles.getAll();
 if(!ceps.length){ return  { "error": { "code": "notFound", "message": "CEP não encontrado" } }
  };
  return ceps;
};
module.exports ={
  findAddressbyCep,
  create,
  getAll,
}