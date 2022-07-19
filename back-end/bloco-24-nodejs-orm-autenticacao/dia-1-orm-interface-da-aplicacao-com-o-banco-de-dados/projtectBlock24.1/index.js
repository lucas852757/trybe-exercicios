const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const BooksController = require('./src/database/controllers/BooksController')

app.use(express.json());

app.get('/books/:id', BooksController.getById);
app.get('/books', BooksController.getAll);
app.listen(`App listening on the port ${PORT}`);