var server = require("./server.js");
var assert = require("assert");

exports.testNothing = function(test){
	"use strict";
    assert.equal(3, server.number(), "number");
    test.done();   
};