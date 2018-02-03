'use strict'
const http = require('http');
const hostname = '127.0.0.1';
const port = 1337;

let server = http.createServer(function(req, res){
	res.writeHead(200, {'content-Type':'text-plain'});
	res.end('hello world');
});

server.listen(port, hostname, function(){
	console.log ("Server running!");
});