const user = require('../models/User');
const updateUserById = async(req, res) => {
  const { id } = req.params;
  const {firstName, lastName, email, password} = req.body;
  const result = await user.updateUser(id, {firstName, lastName, email, password});

  if(!result) return res.status(400).json({
    "error": true,
    "message": "Usuário não encontrado"
  });
  return res.status(200).json(result);
}

module.exports = updateUserById;