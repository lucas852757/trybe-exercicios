const cepServices = require('../services/cepServices');
const cepControllers = async (req, res, next) => {
  try {
    const {cep} = req.params;
    const ceps = await cepServices.getCeps(cep);
    console.log(ceps);
    return res.status(200).json(ceps);
  } catch (error) {
    //console.log('->',error.message);
    next(error);
  }
};
module.exports = {
  cepControllers,
}