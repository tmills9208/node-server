require('dotenv').config();
const http = require('http');
const mysql = require('mysql2');

const host = process.env.HOST;
const port = process.env.PORT;

const sqlHost = process.env.MYSQL_HOST;
const sqlPort = process.env.MYSQL_PORT;
const sqlUser = process.env.MYSQL_USER;
const sqlPass = process.env.MYSQL_PASS;

const dbConnection = mysql.createConnection({
  host: sqlHost,
  port: sqlPort,
  user: sqlUser,
  password: sqlPass
})

// failed at first, needed to replace package: mysql -> mysql2
// explanation of why here: https://stackoverflow.com/a/56509065
dbConnection.connect(function(err) {
  if (err) throw err;
  console.log("MySQL Connection successful!");
})

const requestListener = function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text-plain');
  res.end('Hello World!\n');
};

const server = http.createServer(requestListener);
server.listen(8080);

console.log(`Node.js server running on: ${host}:${port}`);