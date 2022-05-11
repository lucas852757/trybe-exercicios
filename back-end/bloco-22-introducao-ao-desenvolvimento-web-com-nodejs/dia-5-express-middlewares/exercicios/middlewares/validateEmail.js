const validateEmail = (req, res, next) => {
	const {email} = req.body;
	const regex = /^[a-z0-9.]+@[a-z0-9]+(\.[a-z]+)?$/i;
	if(!email) return res.status(401).json({message: 'missing fields' });
	// console.log(regex.test(email));
	if (!(regex.test(email))) return res.status(401).end();
	// return res.status(200).end();
	next();
};

module.exports = validateEmail;