const mysql = require("mysql2/promise");

const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database:"college"
});

//college ma student ko data so

module.exports = connection
