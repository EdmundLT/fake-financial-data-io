const { createRandomobject } = require("../../services/randomFinData");
const db = require("../../services/database");
async function httpBadRequestHandler(req, res) {
  res.status(400).json({ status: 400, message: "Bad request" });
}
async function httpMethodNotAllowedHandler(req, res) {
  res.status(405).json({ status: 405, message: "Method Not Allowed" });
}

async function httpGetDemoFinData(req, res) {
  createRandomobject(100, 120, 5).then((data) => {
    res.status(200).json({
      meta: {
        status: 200,
        message: "success",
        method: "Demo Get financial Data",
        symbol: "AACG",
        name: "Ata Creativity Global ADR",
      },
      data: data,
    });
  });
}

async function httpGetFinData(req, res) {
  const days = req.query.days;
  const symbol = req.params.symbol.toUpperCase();
  var query = `select * from companies c where c.symbol = ?`;
  db.all(query, symbol, (err, rows) => {
    console.log(rows[0]);
    createRandomobject(100, 130, days).then((data) => {
      res.status(200).json({
        meta: {
          status: 200,
          message: "success",
          method: "GET Finanial Data by Symbol",
          days: days,
          company: rows[0],
        },
        data: data,
      });
    });
  });
}

module.exports = {
  httpBadRequestHandler,
  httpMethodNotAllowedHandler,
  httpGetDemoFinData,
  httpGetFinData,
};
