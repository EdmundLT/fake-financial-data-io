var sqlite3 = require("sqlite3").verbose();
const path = require("path");
const DBSOURCE = path.join(__dirname, "..", "..", "data", "db.sqlite");
const TESTDBSOURCE = path.join(__dirname, "..", "..", "data", "test_db.sqlite");

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error("error:", err.message);
    throw err;
  } else {
    console.log("Connected to the SQLite database.");
    db.run(
      `CREATE TABLE companies (
            symbol text PRIMARY KEY UNIQUE, 
            name text
            )`,

      (err) => {
        if (err) {
          console.log("TABLE companies already exists");

          // Table already created
        } else {
          // Table just created, creating some rows
          console.log("Creating rows...");
          var insert = "INSERT INTO companies (symbol, name) VALUES (?,?)";

          //   db.run(insert, ["AACG", "Ata Creativity Global ADR"]);
          //   db.run(insert, ["AACI", "Armada Acquisition Corp I"]);
        }
      }
    );
    db.run(
      `CREATE TABLE today_fin_data (
      symbol text PRIMARY KEY UNIQUE,
      Date text,
      Open real,
      High real,
      Low real,
      Close real,
      Volume real
    )`,
      (err) => {
        if (err) {
          console.log("TABLE today_fin_data already exists");
        } else {
          console.log("TABLE today_fin_data created..");
          console.log("Creating rows");
        }
      }
    );
  }
});

// let test_db = new sqlite3.Database(DBSOURCE, (err) => {
//     if (err) {
//       // Cannot open database
//       console.error("error:", err.message)
//       throw err
//     }else{
//         console.log('Connected to the SQLite database.')
//         test_db.run(`CREATE TABLE companies (
//             symbol text PRIMARY KEY UNIQUE,
//             name text
//             )`,
//         (err) => {
//             if (err) {
//                 console.log("table already exists")
//                 // Table already created
//             }else{
//                 // Table just created, creating some rows
//                 console.log("Creating rows...")
//                 var insert = 'INSERT INTO companies (symbol, name) VALUES (?,?)'
//                 test_db.run(insert, ["AACG", "Ata Creativity Global ADR"])
//                 test_db.run(insert, ["AACI",	"Armada Acquisition Corp I"])

//             }
//         });
//     }
// });

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
    .pipe(csv(["symbol","date","open","high","low","close","volume"]))
    .on("data", (data) => results.push(data))
    .on("end", () => {
      results.forEach((result) =>
        db.run(
          "INSERT INTO today_fin_data (symbol,date,open,high,low,close,volume) VALUES (?,?,?,?,?,?,?)",
          [result.symbol,result.date,result.open,result.high,result.low,result.close,result.volume]
        )
      );
      console.log("completed");
    });
}

module.exports = db;
