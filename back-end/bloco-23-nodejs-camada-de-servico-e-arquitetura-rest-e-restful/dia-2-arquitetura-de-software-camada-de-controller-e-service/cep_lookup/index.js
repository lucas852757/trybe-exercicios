const express = require('express')
const router = require('./router');
const error = require('./middlewares/error');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(router);
app.use(error);

app.listen(PORT, () =>console.log(`The application is listning at port ${PORT}`));