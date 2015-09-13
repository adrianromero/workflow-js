
var mymath = require('./mymath');
var _ = require('underscore');

console.log('Hello Javascript!!!');
console.log('Calculate 2 + 2 = %d.', mymath.add(2, 2));
console.log('Random number between 1 and 100 = %d.', _.random(1, 100));
