const { createServer } = require("http");

var http=require('http')
var server=http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
  res.write("<b>hello world!....");
  res.end();
});
server.listen(8000);