/**
 * 
 */
const {Book} = require('../models/index')
const getAll = async () => {
  const book = await Book.findAll({order:[['title', 'ASC'],]});
  return book;
}

const getById = async (id) => {
  const book = await Book.findByPk(id);
  return book;
}

const create = async ({title, author, pageQuantity, publisher}) => {
  const book = await Book.create({title, author, pageQuantity , publisher});
  return book;
}

const update = async(id, {title, author, pageQuantity, publisher }) => {
  const [update] = await Book.update(id, {title, author, pageQuantity, publisher }, {where: {id}});

  return update;
}

const destroy = async (id) => {
  const removed = await Book.destroy({where: {id}});

  return removed;
};

const getByAuthor = async (author) => {
  const response = await Book.findAll({where: {author}, order:[['title','ASC' ]],});
  return response;
}
module.exports = {
  getAll,
  getById,
  create,
  update,
  destroy,
  getByAuthor,
}