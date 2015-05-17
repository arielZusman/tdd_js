var server = require("./server.js");

exports.testNothing = function(test){
	"use strict";
    test.equal(3, server.number(), "number");
    test.done();   
};