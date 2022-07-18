const user = require('../models/User');
const getUserById = async (req, res) => {
  let { id } = req.params;
  id = parseInt(id, 10);
  const result = await user.getById(id);
  if (!result) return res.status(400).json({
    "error": true,
    "message": "Usuário não encontrado"
  });
  return res.status(200).json(result);
};

module.exports = getUserById;