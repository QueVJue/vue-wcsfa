const mysql = require("mysql");
let pool = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"wcsfal",
    port:3306,
    connectionLimit:3
});

module.exports = pool;
