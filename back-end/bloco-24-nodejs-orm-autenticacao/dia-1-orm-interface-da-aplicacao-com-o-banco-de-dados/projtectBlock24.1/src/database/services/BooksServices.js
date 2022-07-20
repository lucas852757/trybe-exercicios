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

const update = async(id, {title, author, pageQuantity }) => {
  const [update] = await Book.update(id, {title, author, pageQuantity }, {where: {id}});

  return update;
}

const destroy = async (id) => {
  const removed = await Book.destroy({where: {id}});

  return removed;
};
module.exports = {
  getAll,
  getById,
  create,
  update,
  destroy,
}