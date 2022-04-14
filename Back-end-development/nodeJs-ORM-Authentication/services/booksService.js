const { Book } = require('./models');

const getAll = async () => {
  const books = await Book.findAll();
  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);
  return book;
}

const createBook = async ({ title, author, pageQuantity }) => {
  const book = await Book.create({ title, author, pageQuantity });
  return book;
}

const updateBook = async ({ id, title, author, pageQuantity }) => {
  const book = await Book.update({ title, author, pageQuantity }, { where: { id } });
  return book;
}

const deleteBook = async (id) => {
  const book = await Book.findByPk(id);
  await book.destroy();
}

module.exports = { getAll, getById, createBook, updateBook, deleteBook };