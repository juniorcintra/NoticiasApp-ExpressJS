var mysql = require("mysql");

var connMYSQL = function () {
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "portal_noticias",
  });
};

module.exports = function () {
  return connMYSQL;
};
