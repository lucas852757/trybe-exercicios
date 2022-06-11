const express = require('express');
const router = require('./routes/index');
const errors = require('./middlewares/errors')
const app = express();
const PORT = 3002;

app.use(express.json());

//Para rotas
app.use(router);

//Para uso dos middlewares de erro
app.use(errors);
app.listen(PORT, () => {
  console.log(`The application is listening on port ${PORT}`);
});