const {
  httpBadRequestHandler,
  httpMethodNotAllowedHandler,
  httpFindCompanyBySymbol,
} = require("./companies.controller");
const express = require("express");
const companiesRouter = express.Router();
const db = require("../../services/database");
var insert = "INSERT INTO companies (symbol, name) VALUES (?,?)";

//Error handling

companiesRouter.get("/", httpBadRequestHandler);
companiesRouter.post("/*", httpMethodNotAllowedHandler);
companiesRouter.put("/*", httpMethodNotAllowedHandler);
//GET All Company Info
companiesRouter.get("/all", (req, res, next) => {
  const queryLimit = req.query.limit || 20;
  var sql = `select * from companies limit ${queryLimit}`;
  var params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      meta: {
        status: 200,
        message: "success",
        quoteLimit: queryLimit,
      },
      companies: rows,
    });
  });
});

//GET companies by symbol
// response with today open and closed
companiesRouter.get("/:symbol", httpFindCompanyBySymbol);

module.exports = companiesRouter;
