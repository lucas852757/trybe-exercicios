const Joi = require('joi');
const cepServices = require('../services/cepServices');

const findAddressbyCep = async (req, res, next) => {
    const {cep} =  req.params;
    const address = await cepServices.findAddressbyCep(cep);

   if(address.error) return next(address.error);
   return res.status(200).json(address);
};

const addNewCep = async (req, res, next) => {

    const {cep, logradouro, bairro, localidade, uf} = req.body;
    const schema =Joi.object({
      cep:Joi.string().not().empty().required(),
      logradouro: Joi.string().not().empty().required(),
      bairro:Joi.string().not().empty().required(),
      localidade:Joi.string().not().empty().required(),
      uf: Joi.string().not().empty().required(),
    });
    const result = schema.validate({cep, logradouro, bairro, localidade, uf});
    const {error} = result;
    if (error) return next(error);

    const newCep = await cepServices.create(cep, logradouro, bairro, localidade, uf);

    if(newCep.error) return next(newCep.error);
    
    res.status(201).json(newCep);
};

const getAll = async (req, res, next) =>{
  const ceps = await cepServices.getAll();
  if(ceps.error) return next(ceps.error);
  return  res.status(200).json(ceps);
};

const ping = (req, res, next) => {
  res.status(200).json({message:'pong!'});
};

module.exports = {
  findAddressbyCep,
  addNewCep,
  ping,
  getAll,
}