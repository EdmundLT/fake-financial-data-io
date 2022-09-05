const db = require("../services/pgdb/index");
async function getAllCompanies(queryLimit) {
  const query = `select * from companies limit ${queryLimit}`;
  const results = await db.query(query);
  return results;
}

async function getOneCompany(symbol) {
  const query =
    "select * from companies c inner join today_fin_data tfd on c.symbol = tfd.symbol where c.symbol = $1";
  const params = [symbol];
  const results = await db.query(query, params);
  return results;
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
