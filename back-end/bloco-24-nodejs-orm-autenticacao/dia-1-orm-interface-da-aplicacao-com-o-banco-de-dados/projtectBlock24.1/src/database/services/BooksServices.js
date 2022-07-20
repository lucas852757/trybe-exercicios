/**
 * 
 */
const {Book} = require('../models/index')
const getAll = async () => {
  const book = await Book.findAll();
  return book;
}

const getById = async (id) => {
  const book = await Book.findByPk(id);
  return book;
}

const create = async ({title, author, pageQuantity }) => {
  const book = await Book.create({title, author, pageQuantity });
  return book;
}
module.exports = {
  getAll,
  getById,
  create,
}