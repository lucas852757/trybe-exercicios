const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const regex = /^[a-z0-9.]+@[a-z0-9]+(\.[a-z]+)?$/i;
  const userBoolean = regex.test(email);

  if (email === undefined || email.length === 0)
    return res.status(400).json({
      error: true,
      message: 'O campo "email" é obrigatório',
    });

  if (!userBoolean)
    return res.status(400).json({
      error: true,
      message: "O campo 'email' deve ter pelo menos 6 caracteres",
    });
  next();
};

module.exports = validateEmail;
