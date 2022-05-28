const cepControllers = require('./controllers/cepControllers');
const express = require('express');
const router = express.Router();

router.get('/ping',(req, res, next) => {
  res.status(200).json({message:'pong!'});
});

router.get('/cep/:cep', cepControllers.findAddressbyCep);
router.post('/cep',);

module.exports = router;