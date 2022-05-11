const express = require('express');
const validateSaleDate = require('./middlewares/saleDate');
const validateInfos = require('./middlewares/validateInfos');
const validateProductName = require('./middlewares/validateProductName');
const validateWarrantyPeriod = require('./middlewares/validateWarrantyPeriod');
const router = express.Router();

router.post('/sales', validateProductName, validateInfos, validateSaleDate, validateWarrantyPeriod, (req, res) => {
	return res.status(201).json({ 'message': 'Venda cadastrada com sucesso' }); 
});
module.exports = router;