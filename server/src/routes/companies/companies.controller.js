const db = require("../../services/pgdb/index");
const {
  getAllCompanies,
  getOneCompany,
  
} = require("../../models/companies.model");
const { validateSymbol } = require("../../utils/symbolValidation");
//http code handling
async function httpBadRequestHandler(req, res) {
  res.status(400).json({ status: 400, message: "Bad request" });
}
async function httpMethodNotAllowedHandler(req, res) {
  res.status(405).json({ status: 405, message: "Method Not Allowed" });
}
//GET ALL COMPANIES
async function httpGetAllCompany(req, res) {
  const queryLimit = req.query.limit || 5;
  const results = await getAllCompanies(queryLimit);
  const data = results;
  res.status(200).json({
    meta: {
      status: 200,
      message: "success",
      quoteLimit: 5,
    },
    data,
  });
}
//API: GET company by symbol
async function httpFindCompanyBySymbol(req, res) {
  const symbol = req.params.symbol.toUpperCase();

  try {
    const validation = await validateSymbol(symbol);
    if (validation) {
      const result = await getOneCompany(symbol);
      if (result && result.length > 0) {
        const data = result[0];
        const companyData = {
          symbol: data.symbol,
          name: data.name,
        };
        const tdyFinData = {
          open: data.open,
          high: data.high,
          low: data.low,
          close: data.close,
          volume: data.volume,
        };
        res.json({
          meta: {
            status: 200,
            message: "success",
            method: "GET company name and today's price by symbol",
          },
          data: { company: companyData, Today: tdyFinData },
        });
      } else {
        res.status(404).json({
          status: 404,
          symbol: symbol,
          message: "No record in database",
        });
      }
    } else {
      res.status(404).json({
        status: 404,
        symbol: symbol,
        message: "Symbol validation failed",
      });
    }
  } catch (error) {
    console.error("Error fetching company data:", error);
    res.status(500).json({
      status: 500,
      message: "Internal server error",
    });
  }
}

async function httpPostAddCompany(req, res) {
  const company = req.body;
  if (company) {
    console.log(company);
    res.status(201).json({
      meta: {
        status: 201,
        message: "Created",
        company,
      },
    });
  }
}

async function httpDeleteCompanyBySymbol(req, res) {
  const deleteSymbol = req.params.symbol.toUpperCase();
  const validation = await validateSymbol(deleteSymbol);
  if (validation) {
    //symbol existed
    const results = await getOneCompany(deleteSymbol);
    const data = results.rows[0]
    res.status(202).json({
      meta: {
        status: 202,
        message: "Accpeted",
      },
      data,
    });
  }
}
module.exports = {
  httpBadRequestHandler,
  httpMethodNotAllowedHandler,
  httpFindCompanyBySymbol,
  httpGetAllCompany,
  httpPostAddCompany,
  httpDeleteCompanyBySymbol,
};
