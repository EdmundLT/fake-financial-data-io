const db = require("../../services/database");
const moment = require('moment')
async function httpBadRequestHandler(req, res) {
  res.status(400).json({ status: 400, message: "Bad request" });
}
async function httpMethodNotAllowedHandler(req, res) {
  res.status(405).json({ status: 405, message: "Method Not Allowed" });
}

async function httpFindCompanyBySymbol(req, res) {
  var symbol = req.params.symbol.toUpperCase();
  var query = `select * from companies c inner join today_fin_data tfd on c.symbol = tfd.symbol where c.symbol = ?`;
  db.all(query, symbol, (err, rows) => {
    console.log(rows[0])
    if (rows[0] != undefined) {
      if (err) {
        res.status(500).json({
          status: 500,
          symbol: symbol,
          message: "Internal Server Error",
        });
      } else {
        console.log("symbol: ", symbol);
        res.status(200).json({
          meta: {
            status: 200,
            message: "success",
            method: "GET company name and today's price by symbol",
            company: {
              symbol: rows[0].symbol,
              name: rows[0].name,
            },
          },
          data: {
            date: moment().format(),
            open: rows[0].Open,
            close: rows[0].Close,
            high: rows[0].High,
            low: rows[0].Low,
          },
        });
      }
    } else {
      res.status(404).json({
        status: 404,
        symbol: symbol,
        message: "No record in database",
      });
    }
  });
}
module.exports = {
  httpBadRequestHandler,
  httpMethodNotAllowedHandler,
  httpFindCompanyBySymbol,
};
