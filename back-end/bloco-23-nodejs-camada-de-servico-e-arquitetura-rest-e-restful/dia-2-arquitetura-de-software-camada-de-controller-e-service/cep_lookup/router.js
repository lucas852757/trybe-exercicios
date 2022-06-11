const cepControllers = require('./controllers/cepControllers');
const express = require('express');
const router = express.Router();

router.get('/ping', cepControllers.ping);
router.get('/cep/:cep', cepControllers.findAddressbyCep);
router.get('/ceps', cepControllers.getAll);
router.post('/cep', cepControllers.addNewCep);

module.exports = router;