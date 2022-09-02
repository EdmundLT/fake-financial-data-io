const moment = require("moment");

function getRandomFloat(base) {
  return Math.random() * (base + 40 - base) + base;
}

function getRandomProperty(obj) {
  const keys = Object.keys(obj);

  return keys[Math.floor(Math.random() * keys.length)];
}

async function createRandomobject(base, count) {
  const findata = [];
  let todayDate = moment();
  for (let i = 0; i < count; i++) {
    //low
    var low = getRandomFloat(base);
    var high = low + 40;
    while (high < low) {
      low = getRandomFloat(base);
      high = low + 30;
    }
    todayDate = todayDate.add(-1, "day");
    const databyDay = {
      date: todayDate.format(),
      open: getRandomFloat(low, high),
      close: getRandomFloat(low, high),
      high: high,
      low: low,
    };
    findata.push(databyDay);
  }

  console.log("findata:  ", findata);
  return findata;
}

module.exports = {
  createRandomobject,
  getRandomProperty,
};
