const moment = require("moment");
var todayDate = moment();
function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

async function createRandomobject(min, max, count) {
  const findata = [];

  for (let i = 0; i < count; i++) {
    //low
    var low = getRandomFloat(min, max);
    var high = getRandomFloat(min, max);
    while (high < low) {
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
};
