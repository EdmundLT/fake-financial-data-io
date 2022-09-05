const db = require('../services/pgdb/index')

async function validateSymbol(symbol) {
    const query = "select * from companies where symbol = $1";
    const results = await db.query(query, [symbol]);
    const rowCount = results.rowCount;
    if (rowCount > 0) return true;
    else return false;
  }

  
module.exports = {
    validateSymbol,
}