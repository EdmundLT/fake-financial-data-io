const {
  createRandomobject,
} = require("../../services/randomFinData");
const db = require("../../services/database");
const MINMAXDIC = {
  20: 40,
  40: 60,
  60: 80,
  80: 100,
  100: 120,
  120: 140,
  140: 160,
  160: 180,
  200: 240,
  240: 280,
  280: 320,
};

async function httpBadRequestHandler(req, res) {
  res.status(400).json({
    status: 400,
    message: "Bad request",
    description:
      "Please enter a valid symbol, read documentation to see details.",
  });
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
        symbol: "AAPL",
        name: "Apple Inc",
      },
      data: data,
    });
  });
}

async function httpGetFinData(req, res) {
  const days = req.query.days || 10;
  const symbol = req.params.symbol.toUpperCase();
  var query = `select * from companies c where c.symbol = ?`;
  db.all(query, symbol, (err, rows) => {
    console.log("row0: ", rows[0]);
    if (rows[0] === undefined) {
      res.status(400).json({
        status: 400,
        message: "Bad request",
        description: "Symbol not found in our Database",
      });
    } else {
      let min = 100;
      let max = 140;
      console.log("random min max: ", min, max);
      createRandomobject(min, max, days).then((data) => {
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
    }
  });
}

module.exports = {
  httpBadRequestHandler,
  httpMethodNotAllowedHandler,
  httpGetDemoFinData,
  httpGetFinData,
};
