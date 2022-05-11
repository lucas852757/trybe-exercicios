const validateInfos = (req, res, next) =>{
	const {infos} = req.body;

	if(infos === undefined){
		return res.status(400).json({ 'message': 'O campo infos é obrigatório' });
	}
	/* return res.status(200).end(); */
	next();
};

module.exports = validateInfos;