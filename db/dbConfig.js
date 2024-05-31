require("dotenv").config();
let mysql2 = require("mysql2");
const dbConnection = mysql2.createPool({
    user: process.env.USER,
    database: process.env.DATABASE,
    host: "localhost",
    port: 3307,
    password: process.env.PASSWORD,
    connectionLimit: 10,
});

console.log(process.env.DATABASE);
module.exports = dbConnection.promise();
