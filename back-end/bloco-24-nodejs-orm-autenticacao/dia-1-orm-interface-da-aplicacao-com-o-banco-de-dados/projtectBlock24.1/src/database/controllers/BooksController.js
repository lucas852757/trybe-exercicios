const BooksServices = require('../services/BooksServices')

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {import('express').NextFunction} next 
 */
const getAll = async (req, res, next) => {
  const book = await BooksServices.getAll();
  res.status(200).json(book);
};

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {import('express').NextFunction} next 
 */
const getById = async (req, res, next) => {
  const {id} = req.params;
  const book = await BooksServices.getById(id);
  res.status(200).json(book);
}
module.exports = {
  getAll,
  getById,
}