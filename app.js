// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});

// Listen
server.listen(process.env.PORT, process.env.IP);

// Put a friendly message on the terminal
console.log("Server running at http://" + process.env.IP + ":" + process.env.PORT);
