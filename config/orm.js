const connection = require("./connection");

const orm = {
  startDecks: function (cards, cb) {
    const queryString = `SELECT * FROM ${cards};`;
    connection.query(queryString, (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },
};
module.exports = orm;