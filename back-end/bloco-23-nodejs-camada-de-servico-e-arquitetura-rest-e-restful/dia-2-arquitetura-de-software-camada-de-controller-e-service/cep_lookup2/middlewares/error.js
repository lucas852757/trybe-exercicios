const errors = (err, req, res, next) => {
if(err.status) return res.status(err.status).json({message: err.message});
};

module.exports = errors;