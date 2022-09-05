var sqlite3 = require("sqlite3").verbose();
const path = require("path");
const DBSOURCE = path.join(__dirname, "..", "..", "data", "db.sqlite");
const { createFinDataTable, createCompaniesTable } = require("./createTable");

const db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error("error:", err.message);
    throw err;
  } else {
    console.log("Connected to the SQLite database.");
    createCompaniesTable(db);
    createFinDataTable(db);
  }
});


module.exports = db;


