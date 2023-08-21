require("dotenv").config();
// const { Pool } = require("pg");
const mysql = require("mysql2");

// const pool = new Pool();
// module.exports = {
//   query: (text, params, callback) => {
//     return pool.query(text, params, callback);
//   },
// };

const pool = mysql.createPool(process.env.DATABASE_URL);

module.exports = pool.promise();
