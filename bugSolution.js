const http = require('http');

const server = http.createServer((req, res) => {
  // Use asynchronous operations to handle long-running tasks
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Starting request processing...');

  setTimeout(() => {
    res.write('\nRequest processed after 5 seconds.');
    res.end();
  }, 5000);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});