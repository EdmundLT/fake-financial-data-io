const {
  createRandomobject,
  selectRandomBase,
  getOneCompanyFin,
} = require("../../models/findata.model");
const { validateSymbol } = require("../../utils/symbolValidation");

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
  const base = selectRandomBase();
  createRandomobject(base, 5).then((data) => {
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
  const validation = await validateSymbol(symbol);
  if (validation) {
    const results = await getOneCompanyFin(symbol);
    const comData = {
      symbol: results.rows[0].symbol,
      name: results.rows[0].name,
    };
    const base = selectRandomBase();
    console.log("random base:", base);
    createRandomobject(base, days).then((data) => {
      res.status(200).json({
        meta: {
          status: 200,
          message: "success",
          method: "GET Finanial Data by Symbol",
          days: days,
        },
        data: {
          company: comData,
          data,
        },
      });
    });
  } else {
    res.status(404).json({
      status: 404,
      message: "Not Found",
      description: "Symbol not found in our Database",
    });
  }
}

module.exports = {
  httpBadRequestHandler,
  httpMethodNotAllowedHandler,
  httpGetDemoFinData,
  httpGetFinData,
};
