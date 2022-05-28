const cepServices = require('../services/cepServices');

const findAddressbyCep = async (req, res, next) => {
  try {
    const {cep} =  req.params;
    const result =  await cepServices.findAddressbyCep(cep);
   return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  findAddressbyCep,
}