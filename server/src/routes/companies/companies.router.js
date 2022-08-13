const {
  httpBadRequestHandler,
  httpMethodNotAllowedHandler,
  httpFindCompanyBySymbol,
  httpGetAllCompany,
  httpPostAddCompany,
} = require("./companies.controller");
const express = require("express");
const companiesRouter = express.Router();


//GET All Company Info
companiesRouter.get("/all", httpGetAllCompany);
companiesRouter.post("/add", httpPostAddCompany);

//GET companies by symbol
// response with today open and closed
companiesRouter.get("/:symbol", httpFindCompanyBySymbol);

//Error handling
companiesRouter.get("/", httpBadRequestHandler);
companiesRouter.post("/*", httpMethodNotAllowedHandler);
companiesRouter.put("/*", httpMethodNotAllowedHandler);

module.exports = companiesRouter;
