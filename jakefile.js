/*global desc, task, jake, fail, complete */
/* 	Notes:
	- everything is wrapped in a function to overide jshint function hoisting 
	- we use nodeLintOptions so maybe later we can but all options in a config file
	  to keep the build script clean
*/
(function(){
	
	"use strict";

	desc("build and test");
	task("default", ["lint", "test"]);

	desc("Lint everything");
	task("lint", [], function(){
		var lint = require("./build/lint/lint_runner.js");

		var files = new jake.FileList();
		files.include("**/*.js");
		files.exclude("node_modules");
		var passed = lint.validateFileList(files.toArray(), nodeLintOptions(), {});
		if ( !passed ) fail("Lint failed");
	});

	desc("Test everything");
	task("test", [], function(){
		console.log("test goes here");
		var reporter = require('nodeunit').reporters.minimal;
		reporter.run(['src/server/_server_test.js']);

	});

	desc("Integrate");
	task("integrate", ["default"], function(){
		console.log('Manualy merge master into integration with --no-ff --log');
	});

	function nodeLintOptions () {
		var options = {
			bitwise: true,
			curly: false,
			eqeqeq: true,
			forin: true,
			immed: true,
			latedef: true,
			newcap: true,
			noarg: true,
			noempty: true,
			nonew: true,
			regexp: true,
			undef: true,
			strict: true,
			trailing: true,
			node: true
		};
		return options;
	}

})();

