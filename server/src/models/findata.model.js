const moment = require("moment");
const db = require("../services/pgdb/index");

async function getOneCompanyFin(symbol) {
  const query =
    "select * from companies c inner join today_fin_data tfd on c.symbol = tfd.symbol where c.symbol = $1";
  const params = [symbol];
  const results = await db.query(query, params);
  return results;
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
  getOneCompanyFin
};
