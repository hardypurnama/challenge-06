const mysql = require("mysql2");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB,
});

db.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }

  console.log("Terkoneksi ke database mysql");
});

module.exports = db;
