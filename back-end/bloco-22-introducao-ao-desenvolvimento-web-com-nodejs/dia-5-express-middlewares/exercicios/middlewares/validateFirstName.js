const validateFirstName = (req, res, next) => {
	const {firstName} =  req.body;
	if (firstName === undefined) return  res.status(401).json({ message: 'missing fields' });
	return res.status(200).end();
	// next();
};

module.exports = validateFirstName;