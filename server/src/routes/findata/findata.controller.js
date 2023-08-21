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
  
  try {
    const validation = await validateSymbol(symbol);
    if (!validation) {
      return res.status(404).json({
        status: 404,
        message: "Not Found",
        description: "Symbol not found in our Database",
      });
    }

    const results = await getOneCompanyFin(symbol);
    if (results.length === 0) {
      return res.status(404).json({
        status: 404,
        message: "Not Found",
        description: "No financial data found for the given symbol",
      });
    }

    const comData = {
      symbol: results[0].symbol,
      name: results[0].name,
    };

    const base = selectRandomBase();
    console.log("random base:", base);

    const data = await createRandomobject(base, days);

    res.status(200).json({
      meta: {
        status: 200,
        message: "success",
        method: "GET Financial Data by Symbol",
        days: days,
      },
      data: {
        company: comData,
        data,
      },
    });
  } catch (error) {
    console.error("Error processing financial data:", error);
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
}

module.exports = {
  httpBadRequestHandler,
  httpMethodNotAllowedHandler,
  httpGetDemoFinData,
  httpGetFinData,
};
