// Register babel to transpile our code before our tests run.
require('babel-register')();

// Disable webpack feature that mocha can't understand
require.extensions['css'] = function() {}; 
