const csv = require("csv-parser");
const fs = require("fs");
const db = require("./pgdb/index");
const path = require("path");
const moment = require('moment');
const results = [];
async function insertCompaniesCsvToDatabase() {
  const results = [];

  const filePath = path.join(__dirname, "..", "..", "data", "NASDAQ.csv");

  const connection = await db.getConnection();
  try {
    fs.createReadStream(filePath)
      .pipe(csv(["symbol", "name"]))
      .on("data", async (data) => {
        results.push(data);
        const insertQuery =
          "INSERT INTO companies (symbol, name) VALUES (?, ?)";
        const insertingData = [data.symbol, data.name];
        await connection.query(insertQuery, insertingData);
      })
      .on("end", () => {
        console.log("Insertion from NASDAQ.csv to TABLE companies completed.");
      });
  } catch (error) {
    console.error("Error inserting data:", error);
  } finally {
    connection.release();
  }
}
async function insertFinDataCsvToDatabase() {
  const results = [];

  const filePath = path.join(__dirname, '..', '..', 'data', 'NASDAQ_20220805.csv');

  const connection = await db.getConnection();
  try {
    fs.createReadStream(filePath)
      .pipe(csv(['symbol', 'date', 'open', 'high', 'low', 'close', 'volume']))
      .on('data', async (data) => {
        results.push(data);
        const insertQuery = 'INSERT INTO today_fin_data (symbol, date, open, high, low, close, volume) VALUES (?, ?, ?, ?, ?, ?, ?)';
        
        // Convert date format using moment library
        const formattedDate = moment(data.date, 'DD-MMM-YYYY').format('YYYY-MM-DD');
        
        const insertingData = [
          data.symbol,
          formattedDate, // Use the formatted date here
          data.open,
          data.high,
          data.low,
          data.close,
          data.volume
        ];
        await connection.query(insertQuery, insertingData);
      })
      .on('end', () => {
        console.log('Insertion from NASDAQ_20220805.csv to TABLE today_fin_data completed.');
      });
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    connection.release();
  }
}

module.exports = {
  insertCompaniesCsvToDatabase,
  insertFinDataCsvToDatabase,
};
