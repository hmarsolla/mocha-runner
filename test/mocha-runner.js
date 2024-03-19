const fs = require('fs');
const path = require('path');
const Mocha = require('mocha');
// require('./hooks/hook');

// Instantiate a Mocha with options
const mocha = new Mocha({
  reporter: 'list'
});

// Use non-default Mocha test directory.
//const testDir = process.env.TEST_DIR;
const testDir = __dirname + '/tests';

mocha.rootHooks({
  beforeAll: () => {
    console.log('Testing atention please');
    global.testContext = {a: 1};
  }
})

// Add each .js file to the mocha instance
fs.readdirSync(testDir)
  .filter(function(file) {
    return path.extname(file) === '.js';
  })
  .forEach(function(file) {
    mocha.addFile(path.join(testDir, file));
  });

// Run the tests.
mocha.run(function(failures) {
  process.exitCode = failures ? 1 : 0; // exit with non-zero status if there were failures
});

