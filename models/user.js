module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    // The Username is the players name to join the game 
    Username: DataTypes.STRING,
  });
  return User;
};
