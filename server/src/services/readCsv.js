const csv = require("csv-parser");
const fs = require("fs");
const db = require("./pgdb/index");
const path = require("path");
const results = [];
function insertCompaniesCsvToDatabase() {
  fs.createReadStream(path.join(__dirname, "..", "..", "data", "NASDAQ.csv"))
    .pipe(csv(["symbol", "name"]))
    .on("data", (data) => results.push(data))
    .on("end", () => {
      console.log("Inserting Data from NASDAQ.csv to TABLE companies");
      results.forEach((result) => {
        const insertQuery =
          "insert into companies (symbol, name) values ($1,$2)";
        const insertingData = [result.symbol, result.name];
        db.query(insertQuery, insertingData);
      });
      console.log("completed");
    });
}
function insertFinDataCsvToDatabase() {
  fs.createReadStream(
    path.join(__dirname, "..", "..", "data", "NASDAQ_20220805.csv")
  )
    .pipe(csv(["symbol", "date", "open", "high", "low", "close", "volume"]))
    .on("data", (data) => results.push(data))
    .on("end", () => {
      console.log(
        "Inserting Data from NASDAQ_20220805.csv to TABLE today_fin_data"
      );
      results.forEach((result) => {
        const insertQuery =
          "INSERT INTO today_fin_data (symbol,date,open,high,low,close,volume) VALUES ($1,$2,$3,$4,$5,$6,$7)";
        const insertingData = [
          result.symbol,
          result.date,
          result.open,
          result.high,
          result.low,
          result.close,
          result.volume,
        ];
        db.query(insertQuery, insertingData)
      });
      console.log("completed");
    });
}

module.exports = {
  insertCompaniesCsvToDatabase,
  insertFinDataCsvToDatabase,
};
