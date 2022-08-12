const express = require("express");
const companiesRouter = require("./companies/companies.router");
const findataRouter = require("./findata/findata.router");
const api = express.Router();

api.use("/v1/companies", companiesRouter);
api.use("/v1/findata", findataRouter);

module.exports = api;
