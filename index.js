const http = require('http');

const port = '8080';
const server = new http.Server();

server.on('request', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello World');
  res.end('\n');
});

server.listen(port, () => {
  console.log(`started`);
});
