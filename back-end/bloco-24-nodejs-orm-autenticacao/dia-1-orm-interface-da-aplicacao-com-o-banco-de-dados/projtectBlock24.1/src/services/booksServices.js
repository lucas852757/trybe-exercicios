/**
 * 
 */
const {Book} = require('../../src/database/models/index')
const getAll = async () => {
  const book = await Book.findAll();
  return book;
}

module.exports = {
  getAll,
}