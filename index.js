require('dotenv').config();
const http = require('http');

const host = process.env.HOST;
const port = process.env.PORT;

const requestListener = function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text-plain');
  res.end('Hello World!\n');
};

const server = http.createServer(requestListener);
server.listen(8080);

console.log(`Node.js server running on: ${host}:${port}`);