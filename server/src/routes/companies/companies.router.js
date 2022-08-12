const {
  httpBadRequestHandler,
  httpMethodNotAllowedHandler,
  httpFindCompanyBySymbol,
  httpGetAllCompany,
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
companiesRouter.get("/all", httpGetAllCompany);

//GET companies by symbol
// response with today open and closed
companiesRouter.get("/:symbol", httpFindCompanyBySymbol);

module.exports = companiesRouter;
