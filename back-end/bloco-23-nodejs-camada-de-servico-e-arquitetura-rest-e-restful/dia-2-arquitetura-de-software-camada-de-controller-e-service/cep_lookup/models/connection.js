const mysql = require('mysql2/promise');
const connection = mysql.createPool({
  host: 'localhost',
  password: '1234',
  user: 'root',
  database: 'cep_lookup'
});

module.exports = connection;