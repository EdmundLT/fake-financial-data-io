const http = require("http");
require("dotenv").config();
const app = require("./app");

const PORT = process.env.PORT || 80;

const SERVER = http.createServer(app);

async function startServer() {

  SERVER.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

startServer();
