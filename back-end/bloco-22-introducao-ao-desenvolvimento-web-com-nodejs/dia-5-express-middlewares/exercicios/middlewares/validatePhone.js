const validatePhone = (req, res, next) => {
	const {phone} = req.body;
	if (phone === undefined) return res.status(401).json({ message: 'missing fields' });
	// return res.status(200).json();
	next();
};

module.exports = validatePhone;