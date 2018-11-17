
var mysql = require("mysql");

if (process.env.burgers_db) {
  connection = mysql.createConnection(process.env.burgers_db);
}else {
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'cooltulip941',
    database: 'burgers_db'
  })
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
