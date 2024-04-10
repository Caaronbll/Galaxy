// Creates a connection to a
// MySQL server and exports it
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "Planets",
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connection Success! :)");
});

module.exports = connection;