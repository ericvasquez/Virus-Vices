// Sequelize (capital) references the standard library
const Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
const sequelize = require("../config").default;
// Creates a "user" model that matches up with DB
const User = sequelize.define("user", {
  name: Sequelize.STRING,
  gameroom: Sequelize.STRING,
  wins: Sequelize.STRING,
  numberofwins: Sequelize.INTEGER,
});
// Syncs with DB
User.sync();
// Makes the Book Model available for other files (will also create a table)
module.exports = User;
