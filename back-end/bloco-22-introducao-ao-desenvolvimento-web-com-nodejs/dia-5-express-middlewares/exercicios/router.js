const express = require('express');
const generateToken = require('./crypto');
const validateSaleDate = require('./middlewares/saleDate');
const validateEmail = require('./middlewares/validateEmail');
const validateInfos = require('./middlewares/validateInfos');
const validatePassWord = require('./middlewares/validatePassword');
const validatePhone = require('./middlewares/validatePhone');
const validateProductName = require('./middlewares/validateProductName');
const validateWarrantyPeriod = require('./middlewares/validateWarrantyPeriod');
const router = express.Router();

router.post('/sales', validateProductName, validateInfos, validateSaleDate, validateWarrantyPeriod, (req, res) => {
	const token = req.headers.authorization;
	if (token === undefined ||token.length !== 16) return res.status(401).json({ message: 'Token inválido!' });
	return res.status(201).json({ 'message': 'Venda cadastrada com sucesso' }); 
});

router.post('/signup', validateEmail, validatePassWord, validatePhone,(req, res) => {
	const token = generateToken();
	return res.status(200).json( { token });
});
/* const regex = /^[a-z0-9.]+@[a-z0-9]+(\.[a-z]+)?$/i; */
module.exports = router;