const http = require("http");
require("dotenv").config();
const app = require("./app");
const { connectPGDB } = require("../src/services/pgdb/init");
const { insertCompaniesCsvToDatabase, insertFinDataCsvToDatabase } = require("./services/readCsv");
const PORT = process.env.PORT || 80;

const SERVER = http.createServer(app);

async function startServer() {
  connectPGDB();
  // insertCompaniesCsvToDatabase();
  // insertFinDataCsvToDatabase();
  SERVER.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

startServer();
