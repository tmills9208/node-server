require('dotenv').config();
const http = require('http');
const mysql = require('mysql2');

const models = require('./src/models');

const envServer = models.envServer;
const envMySql = models.envMySql;

const dbConnection = mysql.createConnection({
  host: envMySql.host,
  port: envMySql.port,
  user: envMySql.user,
  password: envMySql.password
});

// failed at first, needed to replace package: mysql -> mysql2
// explanation: https://stackoverflow.com/a/56509065
dbConnection.connect(function(err) {
  if (err) throw err;
  console.log("MySQL Connection successful!");
});

const requestListener = (async (req, res) => {
  if (req.url === "/api" && req.method == "GET") {
    res.writeHead(200, { 'Content-Type': 'application/json'});
    res.write('Hello! Welcome to the \'purely\' Node.js API!\n');
    res.end();
  }
  else {
    res.writeHead(404, { 'Content-Type': 'application/json'});
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

const server = http.createServer(requestListener);
server.listen(envServer.port, () => {
  console.log(`Node.js server running on: ${envServer.host}:${envServer.port}`);
});