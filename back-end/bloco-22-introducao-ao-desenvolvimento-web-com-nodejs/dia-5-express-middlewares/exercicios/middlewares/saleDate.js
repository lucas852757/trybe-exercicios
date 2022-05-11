const  validateSaleDate = (req, res, next) => {
	const regex = /^\d{2}\/\d{2}\/\d{4}$/;
	const {infos} = req.body;
	if(infos.saleDate === undefined) return res.status(400).json({ 'message': 'O campo saleDate é obrigatório' }) ;
	const [d, m, y] = infos.saleDate.split('/');
	const newCalender = [y, m, d].toString();

	if(infos.saleDate.match(regex) === null  || !Date.parse(newCalender) ) return res.status(400).json({mesage: 'O campo saleDate não é uma data válida'});
	/* return res.status(200).end(); */
	next();
};

module.exports = validateSaleDate;