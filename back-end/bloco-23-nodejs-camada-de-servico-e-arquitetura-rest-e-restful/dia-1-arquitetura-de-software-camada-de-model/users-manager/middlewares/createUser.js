const { create } = require("../models/User");
const createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const result = await create(firstName, lastName, email, password);
  if (result) return res.status(201).json(result);
};

module.exports = {
  createUser,
};
