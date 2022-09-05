const db = require("./index");

async function connectPGDB() {
  const companiesQuery = "select * from companies";
  const findataQuery = "select * from today_fin_data";
  const compaiesQueryResults = await db.query(companiesQuery);
  const findataQueryResults = await db.query(findataQuery);
  
  if (compaiesQueryResults.rows != null && findataQueryResults.rows != null) {        
        console.log("Postgres Database Connected")
        console.log("Table Companies and today_fin_data founded.");
    }
}


module.exports = {
    connectPGDB,
}