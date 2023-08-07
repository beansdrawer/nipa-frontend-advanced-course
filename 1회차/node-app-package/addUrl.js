const http = require('http');
const fs = require('fs');
const url = require('url');
var morgan = require('morgan')
 
var logger = morgan('combined')
const hostname = '127.0.0.1';
const port = 3000;
 
const server = http.createServer(function (req, res) {
  
  const pageURL = req.url;
  const pathname = url.parse(pageURL, true).pathname;

  logger(req, res, function (err) {
    if (err) return console.log(err)

    if (pathname === "/"){
      
    fs.readFile("./public/lotto.html", function(err, data){
      res.statusCode = 200;
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end(data)
    })
 
  } else if (pathname === "/style.css"){
      fs.readFile("./public/style.css", 'utf8', function(err, data){
        res.writeHead(200);
        res.write(data);
        res.end();
      })
  } else if (pathname === "/script.js"){
    fs.readFile("./public/script.js", 'utf8', function(err, data){
      res.writeHead(200);
      res.write(data);
      res.end();
    })
  }

  })
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});