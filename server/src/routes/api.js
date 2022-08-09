const express = require("express");
const companiesRouter = require('./companies/companies.router')
const api = express.Router();

api.use("/companies", companiesRouter);


module.exports = api;