const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'containers-us-west-81.railway.app',
    user: 'root',
    password: 'imAjhQroXjhcrDXcO7Ph',
    port: '6444',
    database: 'rent'
})

db.query(
    'SELECT * FROM `motor`',
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
    }
  );

module.exports = db;