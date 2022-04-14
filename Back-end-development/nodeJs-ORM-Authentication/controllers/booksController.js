const booksService = require('../services/booksService');

const getAll = async (req, res) => {
  try {
    const books = await booksService.getAll();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).send({ message: 'Algo deu Errado!' });
  }
}

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await booksService.getById(id);
    if (!book || book.length === 0) {
      res.status(404).send({ message: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).send({ message: 'Algo deu Errado!' });
  }
}

const createBook = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const book = await booksService.createBook({ title, author, pageQuantity });
    if (!book) {
      res.status(409).send({ message: 'Book already exists' });
    }
    res.status(201).json(book);
  } catch (error) {
    res.status(500).send({ message: 'Algo deu Errado!' });
  }
}

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;
    const book = await booksService.updateBook({ id, title, author, pageQuantity });
    if (!book) {
      res.status(404).send({ message: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).send({ message: 'Algo deu Errado!' });
  }
}

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await booksService.deleteBook(id);
    res.status(200).send({ message: 'Book deleted' });
  } catch (error) {
    res.status(500).send({ message: 'Algo deu Errado!' });
  }
}

module.exports = { getAll, getById, createBook, updateBook, deleteBook };