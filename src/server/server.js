//jshint node:true
"use strict";

var http = require("http");

exports.start = function(){
	var server = http.createServer();

	server.on("request", function(request, response){
		console.log("Recived request");
		response.end("foo");
	});
	server.listen(8080);
};
