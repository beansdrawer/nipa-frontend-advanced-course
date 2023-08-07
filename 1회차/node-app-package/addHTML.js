const http = require('http');
const fs = require('fs')
var morgan = require('morgan')
 
var logger = morgan('combined')
const hostname = '127.0.0.1';
const port = 3000;
 
const server = http.createServer(function (req, res) {
  logger(req, res, function (err) {
    if (err) return console.log(err)

    fs.readFile("./public/clock.html", function(err, data){
      res.statusCode = 200;
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end(data)
    })
 
  })
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});