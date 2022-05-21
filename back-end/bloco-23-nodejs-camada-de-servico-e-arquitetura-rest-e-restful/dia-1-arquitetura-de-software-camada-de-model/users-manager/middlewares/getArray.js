// const res = require("express/lib/response");
const { getAll } = require("../models/User");

const getArry = async (_req, res) => {
  const result =  await getAll();
  if (!result) return res.status(200).json([]);
  return res.status(200).json(result);
};

module.exports ={
  getArry
}