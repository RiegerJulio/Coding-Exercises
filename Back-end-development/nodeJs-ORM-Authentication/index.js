const express = require('express')
const bodyParser = require('body-parser')

const booksController = require('./controllers/booksController');

const app = express()
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/books', booksController.getAll);
app.get('/books/:id', booksController.getById);
app.post('/books', booksController.createBook);
app.put('/books/:id', booksController.updateBook);
app.delete('/books/:id', booksController.deleteBook);

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));