const mysql = require("mysql");

let connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
<<<<<<< HEAD
	connection = mysql.createConnection({
		host: "localhost",
		PORT: 3306,
		user: "root",
		password: "Taheahtzi7",
		database: "cards_db",
	});
=======
  connection = mysql.createConnection({
    host: "localhost",
    PORT: 3306,
    user: "root",
    password: "",
    database: "cards_db",
  });
>>>>>>> 7d9201f08d9ae1050afdcc5733b9fb3b678657f8
}

connection.connect(function (err) {
  if (err) throw err;
  console.log(`connection id ${connection.threadId}`);
});
module.exports = connection;
