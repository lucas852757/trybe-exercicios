const ViaCep = require('../models/ViaCep');

const viacep = (cep) => {
  ViaCep.lookupCep(cep);
}