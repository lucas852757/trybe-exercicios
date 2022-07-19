const booksServices = require('../services/BooksServices')

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {import('express').NextFunction} next 
 */
const getAll = async (req, res, next) => {
  const book = await booksServices.getAll();
  res.status(200).json(book);
};

module.exports = {
  getAll,
}