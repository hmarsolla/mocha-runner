/* test-runner.js */
 
'use strict';
const fs = require('fs');
const mocha = require('mocha');
 
// Get all test specification files from directory
var testFiles = fs.readdirSync(__dirname + '/tests');
 
// Setup-code - Do this one time before any test suite started  
var randomNumber = Math.random();
 
// Require all the tests and supply with the same random number
testFiles.forEach(function (file) {
  require('./tests/' + file)(randomNumber);
});
 
// Mocha command to run tests
mocha.run(failures => process.exit(failures));