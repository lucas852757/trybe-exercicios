const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(`The application is listning at port ${PORT}`);