const validateName = (req, res, next) => {
  const {firstName} = req.body;
  if(firstName === undefined) return res.status(400).json({
    error: true,
    message: 'O campo name é obrigatório'});
  if ((firstName.length === 0)) return res.status(400).json({
    "error": true,
    "message": "O campo 'name' deve ter pelo menos 6 caracteres"
  });
  next();
};

module.exports = validateName;