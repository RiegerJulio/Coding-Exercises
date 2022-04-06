const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'rieger',
  password: 'rieger12345',
  database: 'users_crud',
});

module.exports = connection;