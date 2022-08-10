const express = require("express");
const {
  httpMethodNotAllowedHandler,
  httpBadRequestHandler,
  httpGetDemoFinData,
  httpGetFinData,
} = require("./findata.controller");
const findataRouter = express.Router();

findataRouter.get("/", httpBadRequestHandler);
findataRouter.get("/demo", httpGetDemoFinData);
findataRouter.get("/:symbol", httpGetFinData);
findataRouter.post("/*", httpMethodNotAllowedHandler);
findataRouter.put("/*", httpMethodNotAllowedHandler);
module.exports = findataRouter;
