const cepModels = require('../models/cepModels');
const getCeps = async (cep) => {
  // Verifica cep
  const CEP_REGEX = /\d{5}-?\d{3}/;
  
  // Cep inválido
  if(!CEP_REGEX.test(cep)) {
    const error= {status:404, /* code: "invalidData", */ message: "CEP inválido"};
    throw error;
  };
  console.log('->', cep);
  // Procura no banco de dados
   const searchCeps  = await cepModels.searchCepsDB(cep);
   //console.log('->', cep);
   //console.log('-->', searchCeps);
   // Retorna o cep encontrado
   if(searchCeps.length) return searchCeps[0];
   console.log('->', cep);
   // Procura na viaCep, quando o banco de dados não contém o cep
   const viaCep = await cepModels.searchViaCep(cep);
  console.log('->', viaCep);
   // Quando o cep não existe na viaCep
   if (!viaCep) {
    const error = {
      status:404,
      /* code: 'notFound', */
      message: 'CEP não encontrado',
    }
  
  throw error;
};

  // Coloca as informações do cep no banco de dados
  const create = await cepModels.create(viaCep);
  return create;
};

module.exports = {
  getCeps,
}