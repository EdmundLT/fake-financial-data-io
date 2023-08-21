const moment = require("moment");
const db = require("../services/pgdb/index");

async function getOneCompanyFin(symbol) {
  const query =
    "SELECT * FROM companies c INNER JOIN today_fin_data tfd ON c.symbol = tfd.symbol WHERE c.symbol = ?";
  const params = [symbol];
  
  try {
    const [results, fields] = await db.execute(query, params);
    return results;
  } catch (error) {
    console.error("Error fetching company financial data:", error);
    throw error; // Re-throw the error to be caught by the caller
  }
}



function getRandomFloat(base) {
  const num = Math.random() * (base + 20 - base) + base;
  const float = Math.round(num * 1000) / 1000;
  return float;
}

function selectRandomBase() {
  const baseList = [100, 150, 200, 250, 300, 350, 400];
  const randomElement = baseList[Math.floor(Math.random() * baseList.length)];
  return randomElement;
}

function getRandomProperty(obj) {
  const keys = Object.keys(obj);
  return keys[Math.floor(Math.random() * keys.length)];
}

function calculateFactor(base) {
  const factor = (base / 10) * (Math.random(1, 2) + 0.5);
  return factor;
}

function generateData(base, factor, count) {
  let todayDate = moment();
  const findataList = [];
  for (let i = 0; i < count; i++) {
    //low
    var low = getRandomFloat(base);
    var high = low + factor;
    while (high < low) {
      low = getRandomFloat(base);
      high = low + factor;
    }
    todayDate = todayDate.add(-1, "day");
    const databyDay = {
      date: todayDate.format(),
      open: getRandomFloat(low, high),
      close: getRandomFloat(low, high),
      high: high,
      low: low,
    };
    findataList.push(databyDay);
  }
  return findataList;
}
async function createRandomobject(base, count) {
  const factor = calculateFactor(base);
  const findata = generateData(base, factor, count);
  return findata;
}

module.exports = {
  createRandomobject,
  getRandomProperty,
  selectRandomBase,
  getOneCompanyFin,
  getRandomFloat
};
