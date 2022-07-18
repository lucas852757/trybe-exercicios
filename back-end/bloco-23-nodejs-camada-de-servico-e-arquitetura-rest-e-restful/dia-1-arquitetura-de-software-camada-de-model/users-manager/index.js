const validateName = require('./middlewares/validateName');
const validateLastName = require('./middlewares/validateLastName');
const validateEmail = require('./middlewares/validateEmail');
const validatePassword = require('./middlewares/validatePassword');
const getUserById = require('./middlewares/getUserById');
const updateUserById = require('./middlewares/updateUserById');
const createUser = require('./middlewares/createUser');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const error = require('./middlewares/error');
const getArry  = require('./middlewares/getArray');
const PORT = 3001;

app.use(bodyParser.json());
app.get('/user', rescue(getArry.getArry));
app.post('/user', rescue(validateName), rescue(validateLastName), rescue(validateEmail), rescue(validatePassword), rescue(createUser.createUser) );

app.get('/user/:id', rescue(validateName), rescue(validateLastName), rescue(validateEmail), rescue(validatePassword), rescue(getUserById));

 app.put('/user/:id',rescue(updateUserById))

app.use(error)
app.listen(PORT, () => {
  console.log(`Aplicação está ouvindo na porta ${PORT}`);
});