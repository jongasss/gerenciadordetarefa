const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'sua_senha_mysql',
  database: 'gerenciadordetarefas'
});

module.exports = pool.promise();