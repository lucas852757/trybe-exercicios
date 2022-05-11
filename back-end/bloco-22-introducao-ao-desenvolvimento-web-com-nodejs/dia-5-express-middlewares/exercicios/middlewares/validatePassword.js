const validatePassWord = (req, res, next) => {
	const {password} = req.body;
	if (password === undefined) return res.status(401).json({ message: 'missing fields' }); 
	// return res.status(200).end();
	next();
};

module.exports = validatePassWord;