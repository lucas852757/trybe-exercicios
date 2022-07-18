// users-manager/models/User.js

// Começamos importando a conexão com o banco
const connection = require('./connection');

//Função extraída do course
function formatUser({ id, first_name: firstName, last_name: lastName, email }) {
	// A única coisa que precisamos fazer agora é criar um objeto com os nomes dos campos alterados
	// e sem o campo passowrd
	return {
		id,
		firstName,
		lastName,
		email,
	};
	}

	// Função extraída do course
async function findById(id) {
	// Realizamos uma consulta buscando o usuário por ID
	const query = 'SELECT * FROM users WHERE id = ?';
	const [results] = await connection.execute(query, [id]);
	// caso encontre o usuário pelo id, ele será o 1º item no result.
	// assim podemos formatá-lo e retornar os dados
	if (results[0])
		return formatUser(results[0]);
	return null;
}

const updateUser = async(id, {firstName: first_name, lastName: last_name, email, password}) => {
	const query = 'UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?';

	  await connection.execute(query, [first_name, last_name, email, password, id]);

			return findById(id);
}

const getById = async (id) => {
	const query = 'SELECT * FROM users WHERE id=?';
	const [row] =  await connection.execute(query, [id]);
	return row;
}

const getAll = async() => {
	const query = 'SELECT * FROM users';
	const [rows] = await connection.execute(query);
	return rows.map(formatUser);
}

// Função responsável por criar o usuário no banco de dados
const create = async (firstName, lastName, email, password ) => {
const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?)';
// Ao invés de chamarmos connection como uma function, agora utilizamos diretamente o método `execute`
 const [ result ]  = await connection.execute(query, [firstName, lastName, email, password]);
 return {
	 id: result.insertId,
	 firstName,
	 lastName,
	 email,
	 password
 }
// Obtemos o resultado da inserção e o utilizamos para obter o ID recém inserido

}

module.exports = { formatUser, create, getAll, getById, updateUser};