const  validateWarrantyPeriod = (req, res, next) => {
	const { infos } = req.body;
	if(infos.warrantyPeriod === undefined) return res.status(400).json( {'message': 'O campo warrantyPeriod é obrigatório' });
	if(!(infos.warrantyPeriod >= 1 && infos.warrantyPeriod <= 3)) return res.status(400).json({ 'message': 'O campo warrantyPeriod precisa estar entre 1 e 3' });
	next();
};

module.exports = validateWarrantyPeriod;