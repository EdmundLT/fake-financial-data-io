const db = require("./index");

async function createCompaniesTable() {
    try {
      const connection = await db.getConnection();
      await connection.query(`
        CREATE TABLE companies (
          id INT AUTO_INCREMENT PRIMARY KEY,
          symbol VARCHAR(10) NOT NULL,
          name VARCHAR(255) NOT NULL
        )
      `);
      connection.release();
      console.log('Table "companies" created successfully.');
    } catch (error) {
      console.error('Error creating table:', error);
    }
  }

  async function createTodayFinDataTable() {
    const connection = await db.getConnection();
    try {
      await connection.query(`
        CREATE TABLE IF NOT EXISTS today_fin_data (
          id INT AUTO_INCREMENT PRIMARY KEY,
          symbol VARCHAR(10) NOT NULL,
          date DATE NOT NULL,
          open DECIMAL(10, 2) NOT NULL,
          high DECIMAL(10, 2) NOT NULL,
          low DECIMAL(10, 2) NOT NULL,
          close DECIMAL(10, 2) NOT NULL,
          volume INT NOT NULL
        )
      `);
      console.log('Table today_fin_data created successfully.');
    } catch (error) {
      console.error('Error creating table:', error);
    } finally {
      connection.release();
    }
  }
  

async function connectPGDB() {
    // await createTodayFinDataTable()
    // await createCompaniesTable()
  const companiesQuery = "select * from companies";
  const findataQuery = "select * from today_fin_data";
  const compaiesQueryResults = await db.query(companiesQuery);
  const findataQueryResults = await db.query(findataQuery);
  
  if (compaiesQueryResults != null && findataQueryResults != null) {        
        console.log("Postgres Database Connected")
        console.log("Table Companies and today_fin_data founded.");
    }
}
module.exports = {
    connectPGDB,
}