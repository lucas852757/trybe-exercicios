// Retirado do course
// users-manager/middlewares/error.js
module.exports = (err, _req, res, _next) => {
	// Caso o erro possua uma propriedade `status`, devolvemos esse status, juntamente com a mensagem do erro

	if (err.status) {
		return res.status(err.stauts).json({ message: err.message });
	}

	// Caso o erro não seja um erro desconhecido

	// Imprimimos o erro no console para que possamos debugá-lo
	//console.error(err);
	// Retornamos o status 500 Internal Server Error, e uma mensagem avisando que houve um erro.
	console.log(err);
	res.status(500).json({ message: 'Erro interno do servidor' });
};