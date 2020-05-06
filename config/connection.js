<<<<<<< HEAD

var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("cards_db", "root", "ghm766", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
=======
const mysql = require("mysql");

let connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    PORT: 3306,
    user: "root",
    password: "",
    database: "cards_db",
  });
}

connection.connect(function (err) {
  if (err) throw err;
  console.log(`connection id ${connection.threadId}`);
>>>>>>> master
});

// Exports the connection for other files to use
module.exports = sequelize;


