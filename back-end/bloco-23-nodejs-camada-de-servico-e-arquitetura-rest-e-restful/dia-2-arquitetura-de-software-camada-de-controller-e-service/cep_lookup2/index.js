const express = require('express');
const error = require('./middlewares/error')
const { cepControllers } = require('./controllers/cepControllers');
const app = express()
const port = 3000

app.use(express.json());

app.get('/cep/:cep',cepControllers);

app.get('/', (req, res) => res.send('Hello World!'))
app.use(error);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))