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

  if(!book) return res.status(404).json({message: 'Book not found'})
  res.status(200).json(book);
}

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {import('express').NextFunction} next 
 */
const create = async (req, res, next) => {

  const {title, author, pageQuantity } = req.body;
  const book = await BooksServices.create({title, author, pageQuantity });

  res.status(201).json(book);
}
module.exports = {
  getAll,
  getById,
}