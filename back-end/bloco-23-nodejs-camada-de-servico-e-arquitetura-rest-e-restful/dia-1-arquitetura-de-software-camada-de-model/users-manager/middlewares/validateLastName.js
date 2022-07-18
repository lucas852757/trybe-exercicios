const validateLastName = (req, res, next) => {
  const {lastName} = req.body;
  if(lastName === undefined) return res.status(400).json({message: 'O campo lastName é obrigatório'});
  if ((lastName.length === 0)) return res.status(400).json({
    "error": true,
    "message": "O campo 'lastname' deve ter pelo menos 6 caracteres"
  });
  next();
};

module.exports = validateLastName;