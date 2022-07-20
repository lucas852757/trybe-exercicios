const BooksServices = require('../services/BooksServices')

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {import('express').NextFunction} next 
 */
const getAll = async (req, res, next) => {
  const { author} = req.query;

  if(author) {
    const books = await BooksServices.getByAuthor(author);
  } else {
    const books = await BooksServices.getAll();
  }
  
  res.status(200).json(books);
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

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {import('express').NextFunction} next 
 */

const update = async (req, res, next) => {
  const { id } = req.params;
  const {title, author, pageQuantity } = req.body;

  const book = await BooksServices.update(id, {title, author, pageQuantity });

  if(book) return res.status(201).json({message: 'Book updated'});
  res.status(404).json({message:'Book not found'});
};

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {import('express').NextFunction} next 
 */
const destroy = async (req, res, next) => {
  const { id } = req.params;
  const removed = await BooksServices.destroy(id); 

  if(removed) return res.status(200).json({message: 'Book removed'});
  res.status(404).json({message: 'Book not found'});
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  destroy,
}