const db = require('../services/pgdb/index')

async function validateSymbol(symbol) {
  const query = "SELECT * FROM companies WHERE symbol = ?";
  try {
    const [results, fields] = await db.execute(query, [symbol]);
    const rowCount = results.length;
    if (rowCount > 0) return true;
    else return false;
  } catch (error) {
    console.error("Error validating symbol:", error);
    return false;
  }
}
  
module.exports = {
    validateSymbol,
}

