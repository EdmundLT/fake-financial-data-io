const csv = require("csv-parser");
const fs = require("fs");
const results = [];
function insertCompaniesCsvToDatabase() {
  fs.createReadStream(path.join(__dirname, "..", "..", "data", "NASDAQ.csv"))
    .pipe(csv(["symbol", "name"]))
    .on("data", (data) => results.push(data))
    .on("end", () => {
      results.forEach((result) =>
        db.run("INSERT INTO companies (symbol, name) VALUES (?,?)", [
          result.symbol,
          result.name,
        ])
      );
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
      results.forEach((result) =>
        db.run(
          "INSERT INTO today_fin_data (symbol,date,open,high,low,close,volume) VALUES (?,?,?,?,?,?,?)",
          [
            result.symbol,
            result.date,
            result.open,
            result.high,
            result.low,
            result.close,
            result.volume,
          ]
        )
      );
      console.log("completed");
    });
}

module.exports = {
  insertCompaniesCsvToDatabase,
  insertFinDataCsvToDatabase,
};
