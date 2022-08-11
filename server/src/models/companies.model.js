const db = require("../services/database");

//Function return data from database
async function queryFromDb(symbol) {
  var query = `select * from companies c inner join today_fin_data tfd on c.symbol = tfd.symbol where c.symbol = ?`;
  db.all(query, symbol, (err, rows) => {
    if (rows[0] === undefined) {
      return  err;
    } else {
      const result = rows[0];
      return result;
    }
  });
}

module.exports = {
  queryFromDb
};
