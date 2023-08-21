const db = require("../services/pgdb/index");

async function getAllCompanies(queryLimit) {
  const parsedLimit = parseInt(queryLimit, 10); // Parse as integer
  const query = 'SELECT * FROM companies LIMIT ?';
  const [rows, fields] = await db.execute(query, [parsedLimit]);
  return rows;
}


async function getOneCompany(symbol) {
  console.log(symbol);
  const query = `
    SELECT * FROM companies c
    INNER JOIN today_fin_data tfd ON c.symbol = tfd.symbol
    WHERE c.symbol = ?`;

  const [rows, fields] = await db.execute(query, [symbol]);
  console.log(rows);
  return rows;
}


async function deleteCompany(symbol) {
  const validation = validateSymbol(symbol);
  if (validation > 0) {
    const query = "delete from companies where symbol = $1";
    await db.query(query, [symbol]);
  }
  return true
}
module.exports = {
  getAllCompanies,
  getOneCompany,
};
