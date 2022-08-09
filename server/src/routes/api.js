const express = require("express");
const companiesRouter = require("./companies/companies.router");
const findataRouter = require("./findata/findata.router");
const api = express.Router();

api.use("/companies", companiesRouter);
api.use("/findata", findataRouter);

module.exports = api;
