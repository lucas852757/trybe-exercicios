const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: "root",
  host: "localhost",
  password: "1234",
  database: "school",
});

module.exports = connection;