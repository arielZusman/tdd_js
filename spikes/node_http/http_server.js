/* Very simple node https server*/
"use strict";
var http = require('http');

var server = http.createServer();

server.on("request", function(request, response){
	console.log("Recived request");

	var body = "<html><head><title>Node http spike</title></head><body><p>This is a Node HTTP sever</p></body></html>";

	response.end(body);
});

server.listen(8080);

console.log("server started");