const db = require("../services/database");

async function queryFromDatabase(symbol) {
  var query = `select * from companies where symbol = ${symbol}`;
  db.all(query, (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      console.log("symbol: ",symbol)
      return rows;
    }
  });
}
module.exports = {
  queryFromDatabase,
};
