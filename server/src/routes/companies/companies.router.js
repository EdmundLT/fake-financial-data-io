const {
  httpBadRequestHandler,
  httpMethodNotAllowedHandler,
  httpFindCompanyBySymbol,
  httpGetAllCompany,
  httpPostAddCompany,
  httpDeleteCompanyBySymbol
} = require("./companies.controller");
const express = require("express");
const companiesRouter = express.Router();



companiesRouter.get("/all", httpGetAllCompany);
companiesRouter.post("/add", httpPostAddCompany);

//GET companies by symbol
// response with today open and closed
companiesRouter.delete("/delete/:symbol", httpDeleteCompanyBySymbol);
companiesRouter.get("/:symbol", httpFindCompanyBySymbol);

//Error handling
companiesRouter.get("/", httpBadRequestHandler);
companiesRouter.post("/*", httpMethodNotAllowedHandler);
companiesRouter.put("/*", httpMethodNotAllowedHandler);

module.exports = companiesRouter;
