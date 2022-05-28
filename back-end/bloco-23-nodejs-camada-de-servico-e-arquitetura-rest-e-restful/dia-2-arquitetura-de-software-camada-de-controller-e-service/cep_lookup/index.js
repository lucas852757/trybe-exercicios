const express = require('express')
const router = require('./router');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(router);

app.listen(PORT, () =>console.log(`The application is listning at port ${PORT}`));