function createCompaniesTable(db) {
  const SQL = `CREATE TABLE companies (
      symbol text PRIMARY KEY UNIQUE, 
      name text
      )`;
  db.run(SQL, (err) => {
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
  });
}
function createFinDataTable(db) {
  const SQL = `CREATE TABLE today_fin_data (
      symbol text PRIMARY KEY UNIQUE,
      Date text,
      Open real,
      High real,
      Low real,
      Close real,
      Volume real
    )`;
  db.run(SQL, (err) => {
    if (err) {
      console.log("TABLE today_fin_data already exists");
    } else {
      console.log("TABLE today_fin_data created..");
    }
  });
}

module.exports = {
  createCompaniesTable,
  createFinDataTable,
};
