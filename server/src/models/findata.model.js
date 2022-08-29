const moment = require("moment");

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomProperty(obj) {
  const keys = Object.keys(obj);

  return keys[Math.floor(Math.random() * keys.length)];
}

async function createRandomobject(min, max, count) {
  const findata = [];
  let todayDate = moment();
  for (let i = 0; i < count; i++) {
    //low
    var low = getRandomFloat(min, max);
    var high = getRandomFloat(min, max);
    while (high < low || high - low > 10) {
      low = getRandomFloat(min, max);
      high = getRandomFloat(min, max);
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
